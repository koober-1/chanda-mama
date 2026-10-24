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

        // 1. First priority: Check database settings (text_gen_key / gemini_key)
        $apiKey = Setting::get_value('text_gen_key');
        if (empty($apiKey)) {
            $apiKey = Setting::get_value('gemini_key');
        }
        if (empty($apiKey)) {
            $apiKey = Setting::get_value('gemini_api_key');
        }

        // 2. Second priority: Fallback to .env configuration
        if (empty($apiKey)) {
            $apiKey = env('MIX_GEMINI_API_KEY') ?: env('GEMINI_API_KEY');
        }

        $apiKey = trim($apiKey ?? '');

        if (empty($apiKey)) {
            throw new \Exception('Google Gemini API key not configured in store settings (Third Party API Credentials) or .env.');
        }

        // Available fast models for automatic fallback during high-demand spikes (503/429)
        $models = [
            'gemini-3.8-flash',
            'gemini-3.5-flash',
            'gemini-3.5-flash-lite',
            'gemini-2.5-flash-lite',
            'gemini-3.1-flash-lite',
        ];

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

        $lastError = '';
        $response = null;
        $httpCode = 0;

        foreach ($models as $model) {
            $url = 'https://generativelanguage.googleapis.com/v1beta/models/' . $model . ':generateContent';

            $ch = curl_init($url);
            curl_setopt_array($ch, [
                CURLOPT_POST => true,
                CURLOPT_POSTFIELDS => json_encode($payload),
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_SSL_VERIFYPEER => false,
                CURLOPT_TIMEOUT => 45,
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
                $lastError = 'Network error: ' . $curlError;
                continue;
            }

            // If 200 OK, break and use this response
            if ($httpCode === 200 && !empty($response)) {
                break;
            }

            // Log model failure and try next model
            $lastError = "Model $model returned HTTP $httpCode: $response";
            Log::warning("Gemini model $model failed with HTTP $httpCode, trying next fallback model...");
        }

        if ($httpCode !== 200 || empty($response)) {
            Log::error("Gemini API Error across all fallback models", [
                'last_error' => $lastError,
                'payload' => $payload
            ]);
            throw new \Exception('Failed to generate content from Gemini API (HTTP ' . $httpCode . ') ' . $lastError);
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
