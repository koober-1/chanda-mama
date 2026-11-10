<?php

namespace App\Http\Controllers\API;

use App\Helpers\CommonHelper;
use App\Http\Controllers\Controller;
use App\Models\CouponTemplate;
use App\Models\Order;
use App\Models\PromoCode;
use App\Models\SchoolCouponBatch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Mpdf\Mpdf;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class SchoolCouponApiController extends Controller
{
    /**
     * List all school coupon batches with stats
     */
    public function index()
    {
        $request = request();
        $limit = (int) ($request->limit ?? 10);
        $offset = (int) ($request->offset ?? 0);
        $search = trim((string) ($request->search ?? ''));

        $query = SchoolCouponBatch::with('template')->orderBy('id', 'DESC');

        if (!empty($search)) {
            $query->where('school_name', 'like', "%{$search}%");
        }

        $total = $query->count();
        $batches = $query->skip($offset)->take($limit)->get();

        return CommonHelper::responseWithData([
            'total' => $total,
            'batches' => $batches
        ]);
    }

    /**
     * Fetch all available templates, auto-seeding the default one if empty
     */
    public function getTemplates()
    {
        // Check if any template exists, if not create default
        if (CouponTemplate::count() === 0) {
            CouponTemplate::create([
                'name' => 'Chanda Mama Standard 3x4 (Default)',
                'image' => 'images/school_coupon_template.jpg',
                'variables_config' => json_encode(CouponTemplate::getDefaultVariablesConfig()),
                'is_default' => 1
            ]);
        }

        $templates = CouponTemplate::orderBy('is_default', 'DESC')->orderBy('id', 'DESC')->get();

        return CommonHelper::responseWithData([
            'templates' => $templates,
            'default_config' => CouponTemplate::getDefaultVariablesConfig()
        ]);
    }

    /**
     * Save (create or update) a coupon template with variable positions
     */
    public function saveTemplate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'image' => 'nullable',
            'variables_config' => 'required',
            'is_default' => 'nullable'
        ]);

        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }

        try {
            $id = $request->id;
            $template = $id ? CouponTemplate::find($id) : new CouponTemplate();

            if (!$template) {
                return CommonHelper::responseError("Template not found.");
            }

            $template->name = trim($request->name);

            // Handle image upload if a file was provided
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $ext = $file->getClientOriginalExtension();
                $filename = 'template_' . time() . '_' . rand(1000, 9999) . '.' . $ext;
                $path = Storage::disk('public')->putFileAs('coupon_templates', $file, $filename);
                $template->image = $path;
            } elseif (empty($template->image)) {
                $template->image = 'images/school_coupon_template.jpg';
            }

            // Parse variables_config
            $config = $request->variables_config;
            if (is_string($config)) {
                $config = json_decode($config, true);
            }
            $template->variables_config = json_encode($config);

            // Handle is_default
            $isDefault = $request->is_default == 1 || $request->is_default === 'true' || $request->is_default === true;
            if ($isDefault) {
                CouponTemplate::where('id', '!=', $template->id ?? 0)->update(['is_default' => 0]);
                $template->is_default = 1;
            } else {
                // If it's the only template, force it to be default
                if (CouponTemplate::count() <= 1) {
                    $template->is_default = 1;
                } else {
                    $template->is_default = 0;
                }
            }

            $template->save();

            return CommonHelper::responseSuccessWithData('Template saved successfully!', [
                'template' => $template
            ]);
        } catch (\Exception $e) {
            Log::error("Template Save Error: " . $e->getMessage());
            return CommonHelper::responseError("Failed to save template: " . $e->getMessage());
        }
    }

    /**
     * Delete a coupon template
     */
    public function deleteTemplate(Request $request)
    {
        $id = $request->id;
        $template = CouponTemplate::find($id);

        if (!$template) {
            return CommonHelper::responseError("Template not found.");
        }

        if (CouponTemplate::count() <= 1) {
            return CommonHelper::responseError("Cannot delete the only available template.");
        }

        $wasDefault = $template->is_default;
        $template->delete();

        // If the deleted one was default, make the first available template default
        if ($wasDefault) {
            $next = CouponTemplate::first();
            if ($next) {
                $next->is_default = 1;
                $next->save();
            }
        }

        return CommonHelper::responseSuccess("Template deleted successfully.");
    }

    /**
     * Generate a new batch of unique random 6-character school coupons
     */
    public function generate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'school_name' => 'required|string|max:255',
            'coupon_template_id' => 'nullable|exists:coupon_templates,id',
            'total_coupons' => 'required|integer|min:1|max:5000',
            'discount' => 'required|numeric|min:1',
            'minimum_order_amount' => 'required|numeric|min:1',
            'start_date' => 'nullable|date',
            'end_date' => 'required|date',
            'code_prefix' => 'nullable|string|max:3',
            'custom_note' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }

        try {
            DB::beginTransaction();

            $total = (int) $request->total_coupons;
            $prefix = strtoupper(trim((string) ($request->code_prefix ?? '')));
            $prefix = preg_replace('/[^A-Z0-9]/', '', $prefix);
            $neededLen = max(2, 6 - strlen($prefix));

            // Character set excluding visually ambiguous characters (0, O, 1, I)
            $charset = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
            $charsetLen = strlen($charset);

            $codes = [];
            $maxAttempts = 100;
            $attempt = 0;

            while (count($codes) < $total && $attempt < $maxAttempts) {
                $attempt++;
                $batchNeeded = ($total - count($codes)) * 2;
                $candidateCodes = [];

                for ($i = 0; $i < $batchNeeded; $i++) {
                    $randStr = '';
                    for ($j = 0; $j < $neededLen; $j++) {
                        $randStr .= $charset[random_int(0, $charsetLen - 1)];
                    }
                    $candidateCodes[$prefix . $randStr] = true;
                }

                $uniqueCandidates = array_keys($candidateCodes);

                // Check against existing promo codes in database
                $existing = PromoCode::whereIn('promo_code', $uniqueCandidates)->pluck('promo_code')->toArray();
                $existingMap = array_flip($existing);

                foreach ($uniqueCandidates as $candidate) {
                    if (!isset($existingMap[$candidate]) && !isset($codes[$candidate])) {
                        $codes[$candidate] = true;
                        if (count($codes) >= $total) {
                            break;
                        }
                    }
                }
            }

            if (count($codes) < $total) {
                DB::rollBack();
                return CommonHelper::responseError("Could not generate sufficient unique codes. Please try again.");
            }

            // Resolve template id
            $templateId = $request->coupon_template_id;
            if (empty($templateId)) {
                $defTemplate = CouponTemplate::where('is_default', 1)->first() ?? CouponTemplate::first();
                $templateId = $defTemplate ? $defTemplate->id : null;
            }

            // Create batch record
            $startDate = !empty($request->start_date) ? date('Y-m-d', strtotime($request->start_date)) : date('Y-m-d');
            $endDate = date('Y-m-d', strtotime($request->end_date));

            $batch = SchoolCouponBatch::create([
                'school_name' => trim($request->school_name),
                'coupon_template_id' => $templateId,
                'total_coupons' => $total,
                'discount' => $request->discount,
                'minimum_order_amount' => $request->minimum_order_amount,
                'start_date' => $startDate,
                'end_date' => $endDate,
                'code_prefix' => $prefix ?: null,
                'custom_note' => $request->custom_note ? trim($request->custom_note) : null
            ]);

            // Bulk insert promo codes in chunks of 500
            $now = now();
            $promoRows = [];
            foreach (array_keys($codes) as $code) {
                $promoRows[] = [
                    'coupon_batch_id' => $batch->id,
                    'promo_code' => $code,
                    'message' => "Special School Coupon for " . trim($request->school_name),
                    'start_date' => $startDate,
                    'end_date' => $endDate,
                    'no_of_users' => 1,
                    'minimum_order_amount' => $request->minimum_order_amount,
                    'discount' => $request->discount,
                    'discount_type' => 'amount',
                    'max_discount_amount' => $request->discount,
                    'image' => 'images/school_coupon_template.jpg',
                    'repeat_usage' => 0,
                    'no_of_repeat_usage' => 1,
                    'status' => 1,
                    'created_at' => $now,
                    'updated_at' => $now
                ];
            }

            foreach (array_chunk($promoRows, 500) as $chunk) {
                DB::table('promo_codes')->insert($chunk);
            }

            DB::commit();

            return CommonHelper::responseSuccessWithData('School coupons generated successfully!', [
                'batch' => $batch,
                'download_pdf_url' => url('/api/school_coupons/download_pdf/' . $batch->id),
                'download_excel_url' => url('/api/school_coupons/download_excel/' . $batch->id)
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error("School Coupon Generation Error: " . $e->getMessage());
            return CommonHelper::responseError("Failed to generate school coupons: " . $e->getMessage());
        }
    }

    /**
     * Download multi-page printable A4 PDF (4 cards per page, 3x4 inches)
     * Overlays all 5 dynamic variables using the template's configured positions
     */
    public function downloadPdf($id)
    {
        $batch = SchoolCouponBatch::with('template')->findOrFail($id);
        $coupons = PromoCode::where('coupon_batch_id', $id)->orderBy('id', 'ASC')->get();

        if ($coupons->isEmpty()) {
            return response()->json(['status' => 0, 'message' => 'No coupons found for this batch'], 404);
        }

        // Determine template and background image
        $template = $batch->template;
        if (!$template) {
            $template = CouponTemplate::where('is_default', 1)->first() ?? CouponTemplate::first();
        }

        $config = $template ? $template->parsed_config : CouponTemplate::getDefaultVariablesConfig();

        // Resolve absolute background image path
        $bgPath = null;
        if ($template && !empty($template->image)) {
            if (strpos($template->image, 'images/') === 0) {
                $bgPath = public_path($template->image);
            } else {
                $bgPath = storage_path('app/public/' . $template->image);
            }
        }

        if (!$bgPath || !file_exists($bgPath)) {
            $bgPath = public_path('images/school_coupon_blank_template.jpg');
        }
        if (!file_exists($bgPath)) {
            $bgPath = public_path('images/school_coupon_template.jpg');
        }

        // Fonts for GD
        $fontBold = base_path('vendor/mpdf/mpdf/ttfonts/DejaVuSans-Bold.ttf');
        $fontRegular = base_path('vendor/mpdf/mpdf/ttfonts/DejaVuSans.ttf');
        if (!file_exists($fontBold)) {
            $fontBold = $fontRegular = 'arial.ttf';
        }

        $tempDir = storage_path('app/temp');
        if (!file_exists($tempDir)) {
            @mkdir($tempDir, 0777, true);
        }

        // Helper to convert hex to RGB
        $hex2rgb = function ($hex) {
            $hex = ltrim($hex, '#');
            if (strlen($hex) == 3) {
                $hex = $hex[0] . $hex[0] . $hex[1] . $hex[1] . $hex[2] . $hex[2];
            }
            return [
                hexdec(substr($hex, 0, 2)),
                hexdec(substr($hex, 2, 2)),
                hexdec(substr($hex, 4, 2))
            ];
        };

        // Helper to render card with GD
        $renderCardToFile = function ($outPath, $promoCode) use ($bgPath, $config, $batch, $fontBold, $fontRegular, $hex2rgb) {
            $srcImg = @imagecreatefromjpeg($bgPath);
            if (!$srcImg) {
                $srcImg = @imagecreatefrompng($bgPath);
            }
            if (!$srcImg) {
                return false;
            }

            $w = imagesx($srcImg);
            $h = imagesy($srcImg);
            $img = imagecreatetruecolor($w, $h);
            imagecopy($img, $srcImg, 0, 0, 0, 0, $w, $h);
            imagedestroy($srcImg);

            $drawVar = function ($conf, $text, $font) use ($img, $w, $h, $hex2rgb) {
                if (empty($conf['enabled']) || empty($text)) return;

                $bx = ($conf['x'] / 100) * $w;
                $by = ($conf['y'] / 100) * $h;
                $bw = ($conf['width'] / 100) * $w;
                $bh = ($conf['height'] / 100) * $h;

                $ptSize = ($conf['font_size'] ?? 14) * ($w / 520);

                // Auto-scale font size if text exceeds bounding box
                $bbox = imagettfbbox($ptSize, 0, $font, $text);
                $textWidth = abs($bbox[2] - $bbox[0]);
                if ($textWidth > $bw - 8 && $textWidth > 0) {
                    $ptSize = $ptSize * (($bw - 8) / $textWidth);
                    $bbox = imagettfbbox($ptSize, 0, $font, $text);
                    $textWidth = abs($bbox[2] - $bbox[0]);
                }
                $textHeight = abs($bbox[7] - $bbox[1]);

                $colorRgb = $hex2rgb($conf['color'] ?? '#0B4F94');
                $color = imagecolorallocate($img, $colorRgb[0], $colorRgb[1], $colorRgb[2]);

                if (!empty($conf['bg_color'])) {
                    $bgRgb = $hex2rgb($conf['bg_color']);
                    $bgColor = imagecolorallocate($img, $bgRgb[0], $bgRgb[1], $bgRgb[2]);
                    imagefilledrectangle($img, (int)$bx, (int)$by, (int)($bx + $bw), (int)($by + $bh), $bgColor);
                }

                $align = $conf['align'] ?? 'center';
                if ($align === 'center') {
                    $x = $bx + ($bw - $textWidth) / 2;
                } elseif ($align === 'right') {
                    $x = $bx + $bw - $textWidth - 4;
                } else {
                    $x = $bx + 4;
                }

                $y = $by + ($bh - $textHeight) / 2 + $textHeight;

                imagettftext($img, $ptSize, 0, (int)$x, (int)$y, $color, $font, $text);
            };

            // 1. School Name
            $drawVar($config['school_name'] ?? [], $batch->school_name, $fontBold);

            // 2. Coupon Code with letter spacing
            $formattedCode = implode(' ', str_split($promoCode));
            $drawVar($config['coupon_code'] ?? [], $formattedCode, $fontBold);

            // 3. Coupon Worth
            $worthText = ($config['coupon_worth']['prefix'] ?? '₹ ') . (float)$batch->discount . ($config['coupon_worth']['suffix'] ?? '/-');
            $drawVar($config['coupon_worth'] ?? [], $worthText, $fontBold);

            // 4. Minimum Purchase
            $minText = ($config['min_purchase']['prefix'] ?? '₹ ') . (float)$batch->minimum_order_amount . ($config['min_purchase']['suffix'] ?? '/-');
            $drawVar($config['min_purchase'] ?? [], $minText, $fontBold);

            // 5. Custom Variable / Note
            $customText = $batch->custom_note ?: (($config['custom_variable']['prefix'] ?? '') . 'Valid till ' . date('d-m-Y', strtotime($batch->end_date)) . ($config['custom_variable']['suffix'] ?? ''));
            $drawVar($config['custom_variable'] ?? [], $customText, $fontRegular);

            imagejpeg($img, $outPath, 92);
            imagedestroy($img);

            return true;
        };

        // Initialize mPDF for A4 Portrait with 8mm margins
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'format' => 'A4',
            'margin_left' => 8,
            'margin_right' => 8,
            'margin_top' => 8,
            'margin_bottom' => 8,
            'tempDir' => $tempDir
        ]);

        $css = '
        <style>
          body { font-family: "DejaVu Sans", sans-serif; margin: 0; padding: 0; }
          .page-table { width: 100%; border-collapse: separate; border-spacing: 5mm 6mm; margin: 0 auto; }
          .page-table td { width: 50%; vertical-align: top; padding: 0; text-align: center; }
          .card-img {
            width: 94mm;
            height: 70.5mm;
            border: 1px dashed #B0C4DE;
            display: block;
          }
        </style>
        ';

        $tempFiles = [];
        $couponChunks = $coupons->chunk(4);
        $totalChunks = count($couponChunks);
        $chunkIndex = 0;

        foreach ($couponChunks as $pageCoupons) {
            $chunkIndex++;
            $items = $pageCoupons->values();

            $html = '<table class="page-table">';

            // Row 1
            $html .= '<tr>';
            for ($c = 0; $c < 2; $c++) {
                if (isset($items[$c])) {
                    $cPath = $tempDir . '/card_' . uniqid() . '_' . $c . '.jpg';
                    $tempFiles[] = $cPath;
                    $renderCardToFile($cPath, $items[$c]->promo_code);
                    $normPath = str_replace('\\', '/', $cPath);
                    $html .= '<td><img src="' . $normPath . '" class="card-img" /></td>';
                } else {
                    $html .= '<td></td>';
                }
            }
            $html .= '</tr>';

            // Row 2
            $html .= '<tr>';
            for ($c = 2; $c < 4; $c++) {
                if (isset($items[$c])) {
                    $cPath = $tempDir . '/card_' . uniqid() . '_' . $c . '.jpg';
                    $tempFiles[] = $cPath;
                    $renderCardToFile($cPath, $items[$c]->promo_code);
                    $normPath = str_replace('\\', '/', $cPath);
                    $html .= '<td><img src="' . $normPath . '" class="card-img" /></td>';
                } else {
                    $html .= '<td></td>';
                }
            }
            $html .= '</tr>';

            $html .= '</table>';

            $mpdf->WriteHTML($css . $html);

            if ($chunkIndex < $totalChunks) {
                $mpdf->AddPage();
            }
        }

        $cleanSchool = preg_replace('/[^A-Za-z0-9_]/', '_', $batch->school_name);
        $filename = "School_Coupons_{$cleanSchool}_Batch{$batch->id}.pdf";
        $pdfContent = $mpdf->Output($filename, 'S');

        // Cleanup temporary card image files
        foreach ($tempFiles as $tf) {
            @unlink($tf);
        }

        return response($pdfContent, 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'attachment; filename="' . $filename . '"',
        ]);
    }

    /**
     * Download Excel
     */
    public function downloadExcel($id)
    {
        $batch = SchoolCouponBatch::findOrFail($id);
        $coupons = PromoCode::where('coupon_batch_id', $id)->orderBy('id', 'ASC')->get();

        $couponIds = $coupons->pluck('id')->toArray();
        $ordersMap = Order::whereIn('promo_code_id', $couponIds)
            ->select('promo_code_id', 'id', 'user_id', 'created_at')
            ->with('user:id,name,mobile')
            ->get()
            ->keyBy('promo_code_id');

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('School Coupons');

        // Headers
        $headers = [
            'A1' => 'S.No',
            'B1' => 'School Name',
            'C1' => 'Coupon Code',
            'D1' => 'Discount (₹)',
            'E1' => 'Min Purchase (₹)',
            'F1' => 'Valid From',
            'G1' => 'Valid Until (Expiry)',
            'H1' => 'Status',
            'I1' => 'Redeemed By (User)',
            'J1' => 'Order ID',
            'K1' => 'Redeemed Date'
        ];

        foreach ($headers as $cell => $text) {
            $sheet->setCellValue($cell, $text);
            $sheet->getStyle($cell)->getFont()->setBold(true);
        }

        $rowNum = 2;
        $serial = 1;

        foreach ($coupons as $coupon) {
            $order = $ordersMap->get($coupon->id);
            $isUsed = !empty($order);

            $sheet->setCellValue('A' . $rowNum, $serial++);
            $sheet->setCellValue('B' . $rowNum, $batch->school_name);
            $sheet->setCellValue('C' . $rowNum, $coupon->promo_code);
            $sheet->setCellValue('D' . $rowNum, (float) $coupon->discount);
            $sheet->setCellValue('E' . $rowNum, (float) $coupon->minimum_order_amount);
            $sheet->setCellValue('F' . $rowNum, $coupon->start_date);
            $sheet->setCellValue('G' . $rowNum, $coupon->end_date);
            $sheet->setCellValue('H' . $rowNum, $isUsed ? 'REDEEMED' : 'ACTIVE');
            $sheet->setCellValue('I' . $rowNum, $isUsed && $order->user ? ($order->user->name . ' (' . $order->user->mobile . ')') : '-');
            $sheet->setCellValue('J' . $rowNum, $isUsed ? '#' . $order->id : '-');
            $sheet->setCellValue('K' . $rowNum, $isUsed ? date('d-m-Y H:i', strtotime($order->created_at)) : '-');

            $rowNum++;
        }

        // Auto-fit columns
        foreach (range('A', 'K') as $col) {
            $sheet->getColumnDimension($col)->setAutoSize(true);
        }

        $writer = new Xlsx($spreadsheet);
        $cleanSchool = preg_replace('/[^A-Za-z0-9_]/', '_', $batch->school_name);
        $filename = "School_Coupons_{$cleanSchool}_Batch{$batch->id}.xlsx";

        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        header('Cache-Control: max-age=0');

        $writer->save('php://output');
        exit;
    }

    /**
     * Delete a batch and its unused coupons
     */
    public function delete(Request $request)
    {
        $id = $request->id;
        $batch = SchoolCouponBatch::findOrFail($id);

        // Check if any coupons in this batch have already been used
        $couponIds = PromoCode::where('coupon_batch_id', $id)->pluck('id')->toArray();
        $usedCount = Order::whereIn('promo_code_id', $couponIds)->count();

        if ($usedCount > 0) {
            return CommonHelper::responseError("Cannot delete batch: {$usedCount} coupon(s) have already been redeemed in customer orders.");
        }

        // Delete all promo codes in this batch
        PromoCode::where('coupon_batch_id', $id)->delete();
        $batch->delete();

        return CommonHelper::responseSuccess("School coupon batch deleted successfully.");
    }

    /**
     * List codes for a specific batch (modal/detail view)
     */
    public function getCodes(Request $request, $id)
    {
        $batch = SchoolCouponBatch::findOrFail($id);
        $limit = (int) ($request->limit ?? 20);
        $offset = (int) ($request->offset ?? 0);
        $search = trim((string) ($request->search ?? ''));

        $query = PromoCode::where('coupon_batch_id', $id)->orderBy('id', 'ASC');

        if (!empty($search)) {
            $query->where('promo_code', 'like', "%{$search}%");
        }

        $total = $query->count();
        $coupons = $query->skip($offset)->take($limit)->get();

        $couponIds = $coupons->pluck('id')->toArray();
        $ordersMap = Order::whereIn('promo_code_id', $couponIds)
            ->select('promo_code_id', 'id', 'user_id', 'created_at')
            ->with('user:id,name,mobile')
            ->get()
            ->keyBy('promo_code_id');

        $data = $coupons->map(function ($c) use ($ordersMap) {
            $order = $ordersMap->get($c->id);
            return [
                'id' => $c->id,
                'promo_code' => $c->promo_code,
                'discount' => $c->discount,
                'minimum_order_amount' => $c->minimum_order_amount,
                'start_date' => $c->start_date,
                'end_date' => $c->end_date,
                'is_used' => !empty($order),
                'order_id' => $order ? $order->id : null,
                'user_name' => ($order && $order->user) ? $order->user->name : null,
                'user_mobile' => ($order && $order->user) ? $order->user->mobile : null,
                'redeemed_at' => $order ? date('d-m-Y H:i', strtotime($order->created_at)) : null,
            ];
        });

        return CommonHelper::responseWithData([
            'batch' => $batch,
            'total' => $total,
            'codes' => $data
        ]);
    }

    /**
     * Get full batch print data (batch + template with parsed_config + all promo codes)
     * For Direct Browser Print Preview
     */
    public function getPrintData($id)
    {
        $batch = SchoolCouponBatch::with('template')->findOrFail($id);
        $coupons = PromoCode::where('coupon_batch_id', $id)
            ->orderBy('id', 'ASC')
            ->select('id', 'promo_code', 'discount', 'minimum_order_amount', 'start_date', 'end_date')
            ->get();

        $template = $batch->template;
        if (!$template) {
            $template = CouponTemplate::where('is_default', 1)->first() ?? CouponTemplate::first();
        }

        return CommonHelper::responseWithData([
            'batch' => $batch,
            'template' => $template,
            'config' => $template ? $template->parsed_config : CouponTemplate::getDefaultVariablesConfig(),
            'coupons' => $coupons
        ]);
    }
}
