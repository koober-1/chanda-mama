<?php

namespace App\Services;

use App\Models\Setting;
use Illuminate\Support\Facades\Log;

class GeminiAIService
{
    /**
     * Generate content using Google Gemini AI.
     *
     * @param string $prompt
     * @param string $source
     * @return array
     * @throws \Exception
     */
    public function generateContent(string $prompt, string $source = 'web')
    {
        // Track API usage
        if (class_exists(\App\Models\ApiCallTracking::class)) {
            \App\Models\ApiCallTracking::incrementCallCount('google_gemini', $source);
        }

        $apiKey = env('MIX_GEMINI_API_KEY');
        if (empty($apiKey)) {
            $apiKey = Setting::get_value('text_gen_key');
        }
        $apiKey = trim($apiKey);

        if (empty($apiKey)) {
            throw new \Exception('Google Gemini API key not configured in store settings or .env.');
        }

        // Gemini API endpoint with gemini-3.5-flash-lite
        $url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent';

        $payload = [
            'contents' => [
                [
                    'parts' => [
                        ['text' => $prompt]
                    ]
                ]
            ],
            'generationConfig' => [
                'response_mime_type' => 'application/json',
            ]
        ];

        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode($payload),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_TIMEOUT => 60,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'x-goog-api-key: ' . $apiKey
            ],
        ]);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);

        if ($curlError) {
            Log::error('Gemini API Network Error: ' . $curlError);
            throw new \Exception('Network error: ' . $curlError);
        }

        if ($httpCode !== 200 || empty($response)) {
            Log::error("Gemini API Error (HTTP $httpCode)", [
                'response' => $response,
                'payload' => $payload
            ]);
            throw new \Exception('Failed to generate content from Gemini API (HTTP ' . $httpCode . ') Response: ' . $response);
        }

        $data = json_decode($response, true);
        $text = $data['candidates'][0]['content']['parts'][0]['text'] ?? '';

        if (empty($text)) {
            throw new \Exception('Empty AI response from Gemini');
        }

        // Clean up markdown around JSON
        $text = preg_replace('/^```json/im', '', $text);
        $text = preg_replace('/```$/im', '', $text);
        $text = trim($text);

        $jsonStart = strpos($text, '{');
        $jsonEnd = strrpos($text, '}');
        if ($jsonStart !== false && $jsonEnd !== false) {
            $text = substr($text, $jsonStart, $jsonEnd - $jsonStart + 1);
        }

        $productData = json_decode($text, true);

        if (!$productData) {
            throw new \Exception('Invalid AI JSON format returned by model. Raw: ' . $text);
        }

        return $productData;
    }
}
