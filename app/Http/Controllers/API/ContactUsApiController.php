<?php

namespace App\Http\Controllers\API;

use App\Helpers\CommonHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting;
use Illuminate\Support\Facades\Storage;

class ContactUsApiController extends Controller
{
    public function index()
    {
        $contact_us = Setting::where('variable', 'contact_us')->first();
        if (!$contact_us) {
            $contact_us = new Setting();
            $contact_us->variable = 'contact_us';
            $contact_us->value = '';
        }
        $bannerSetting = Setting::where('variable', 'contact_us_banner')->first();
        $bannerPath = $bannerSetting ? $bannerSetting->value : '';
        $contact_us->contact_us_banner = $bannerPath;
        $contact_us->contact_us_banner_url = $bannerPath ? CommonHelper::getImage($bannerPath) : '';
        return CommonHelper::responseWithData($contact_us);
    }

    public function save(Request $request)
    {
        if ($request->has('contact_us')) {
            $value = $this->processValue($request->contact_us ?? "");

            $setting = Setting::where('variable', 'contact_us')->first();
            if ($setting) {
                $setting->value = $value;
                $setting->save();
            } else {
                $setting = new Setting();
                $setting->variable = 'contact_us';
                $setting->value = $value;
                $setting->save();
            }
        }

        if ($request->hasFile('contact_us_banner')) {
            $request->validate([
                'contact_us_banner' => 'image|mimes:jpeg,jpg,png,gif,webp,svg|max:5120'
            ]);
            $file = $request->file('contact_us_banner');
            $fileName = time() . '_' . rand(1111, 99999) . '.' . $file->getClientOriginalExtension();
            $bannerPath = Storage::disk('public')->putFileAs('front_end/banners', $file, $fileName);
            $bannerSetting = Setting::firstOrNew(['variable' => 'contact_us_banner']);
            $bannerSetting->value = $bannerPath;
            $bannerSetting->save();
        } elseif ($request->has('remove_contact_us_banner') && $request->remove_contact_us_banner == 1) {
            $bannerSetting = Setting::where('variable', 'contact_us_banner')->first();
            if ($bannerSetting) {
                $bannerSetting->value = '';
                $bannerSetting->save();
            }
        }

        return CommonHelper::responseSuccess('contact_us_saved_successfully');
    }

    /**
     * Clean + store language-wise JSON safely
     */
    private function processValue($value)
    {
        if (empty($value)) {
            return "";
        }

        // Try JSON decode (language-wise)
        $decoded = json_decode($value, true);

        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
            $cleaned = [];
            foreach ($decoded as $langCode => $content) {
                $content = preg_replace('/\r\n|\r|\n/', ' ', $content);
                $content = preg_replace('/\s+/', ' ', $content);
                $cleaned[$langCode] = trim($content);
            }

            return json_encode(
                $cleaned,
                JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
            );
        }

        // Old single-language fallback
        $value = preg_replace('/\r\n|\r|\n/', ' ', $value);
        $value = preg_replace('/\s+/', ' ', $value);
        return trim($value);
    }

    /**
     * Frontend public contact-us page
     */
    public function printContactUs(Request $request)
    {
        $langCode = $request->get('lang', 'en');
        $value = Setting::get_value('contact_us');
        echo $this->getLanguageContent($value, $langCode);
    }

    private function getLanguageContent($value, $langCode)
    {
        if (empty($value)) {
            return '';
        }

        $decoded = json_decode($value, true);
        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
            $content = $decoded[$langCode] ?? '';

            if (empty($content)) {
                $content = reset($decoded); // fallback
            }
        } else {
            $content = $value;
        }

        return str_replace(["\r", "\n"], '', $content);
    }
}
