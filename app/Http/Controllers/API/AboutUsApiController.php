<?php

namespace App\Http\Controllers\API;

use App\Helpers\CommonHelper;
use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AboutUsApiController extends Controller
{
    public function index()
    {
        $about_us = Setting::where('variable', 'about_us')->first();
        if (!$about_us) {
            $about_us = new Setting();
            $about_us->variable = 'about_us';
            $about_us->value = '';
        }
        $bannerSetting = Setting::where('variable', 'about_us_banner')->first();
        $bannerPath = $bannerSetting ? $bannerSetting->value : '';
        $about_us->about_us_banner = $bannerPath;
        $about_us->about_us_banner_url = $bannerPath ? CommonHelper::getImage($bannerPath) : '';
        return CommonHelper::responseWithData($about_us);
    }

    public function save(Request $request)
    {
        if ($request->has('about_us')) {
            $value = $this->processValue($request->about_us ?? "");

            $setting = Setting::where('variable', 'about_us')->first();
            if ($setting) {
                $setting->value = $value;
                $setting->save();
            } else {
                $setting = new Setting();
                $setting->variable = 'about_us';
                $setting->value = $value;
                $setting->save();
            }
        }

        if ($request->hasFile('about_us_banner')) {
            $request->validate([
                'about_us_banner' => 'image|mimes:jpeg,jpg,png,gif,webp,svg|max:5120'
            ]);
            $file = $request->file('about_us_banner');
            $fileName = time() . '_' . rand(1111, 99999) . '.' . $file->getClientOriginalExtension();
            $bannerPath = Storage::disk('public')->putFileAs('front_end/banners', $file, $fileName);
            $bannerSetting = Setting::firstOrNew(['variable' => 'about_us_banner']);
            $bannerSetting->value = $bannerPath;
            $bannerSetting->save();
        } elseif ($request->has('remove_about_us_banner') && $request->remove_about_us_banner == 1) {
            $bannerSetting = Setting::where('variable', 'about_us_banner')->first();
            if ($bannerSetting) {
                $bannerSetting->value = '';
                $bannerSetting->save();
            }
        }

        return CommonHelper::responseSuccess('about_us_saved_successfully');
    }

    private function processValue($value)
    {
        if (empty($value)) return "";

        $decoded = json_decode($value, true);

        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
            $clean = [];
            foreach ($decoded as $lang => $content) {
                $content = preg_replace('/\r\n|\r|\n/', ' ', $content);
                $content = preg_replace('/\s+/', ' ', $content);
                $clean[$lang] = trim($content);
            }
            return json_encode($clean, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        }

        return trim(preg_replace('/\s+/', ' ', $value));
    }

    public function printAboutUs(Request $request)
    {
        $lang = $request->get('lang', 'en');
        $value = Setting::get_value('about_us');
        echo $this->getLanguageContent($value, $lang);
    }

    private function getLanguageContent($value, $lang)
    {
        if (!$value) return '';

        $decoded = json_decode($value, true);
        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
            return $decoded[$lang] ?? reset($decoded);
        }

        return $value;
    }
}
