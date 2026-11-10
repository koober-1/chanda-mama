<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CouponTemplate extends Model
{
    use HasFactory;

    protected $table = 'coupon_templates';

    protected $fillable = [
        'name',
        'image',
        'variables_config',
        'is_default'
    ];

    protected $casts = [
        'is_default' => 'boolean'
    ];

    protected $appends = ['image_url', 'parsed_config'];

    public static function getDefaultVariablesConfig()
    {
        return [
            'school_name' => [
                'enabled' => true,
                'label' => 'School Name',
                'x' => 45.0,
                'y' => 61.5,
                'width' => 48.0,
                'height' => 7.0,
                'font_size' => 12,
                'color' => '#0B4F94',
                'bg_color' => '',
                'align' => 'center',
                'font_weight' => 'bold',
                'prefix' => '',
                'suffix' => ''
            ],
            'coupon_code' => [
                'enabled' => true,
                'label' => 'Coupon Code',
                'x' => 45.0,
                'y' => 72.5,
                'width' => 48.0,
                'height' => 7.0,
                'font_size' => 14,
                'color' => '#0B4F94',
                'bg_color' => '',
                'align' => 'center',
                'font_weight' => 'bold',
                'letter_spacing' => 2,
                'prefix' => '',
                'suffix' => ''
            ],
            'coupon_worth' => [
                'enabled' => true,
                'label' => 'Coupon Worth (Discount)',
                'x' => 53.0,
                'y' => 22.0,
                'width' => 38.0,
                'height' => 18.0,
                'font_size' => 24,
                'color' => '#002B7F',
                'bg_color' => '',
                'align' => 'center',
                'font_weight' => 'bold',
                'prefix' => '₹ ',
                'suffix' => '/-'
            ],
            'min_purchase' => [
                'enabled' => true,
                'label' => 'Minimum Purchase Amount',
                'x' => 69.0,
                'y' => 49.0,
                'width' => 25.0,
                'height' => 8.0,
                'font_size' => 14,
                'color' => '#B30000',
                'bg_color' => '',
                'align' => 'left',
                'font_weight' => 'bold',
                'prefix' => '₹ ',
                'suffix' => '/-'
            ],
            'custom_variable' => [
                'enabled' => true,
                'label' => 'Custom Note / Expiry',
                'x' => 5.0,
                'y' => 91.0,
                'width' => 90.0,
                'height' => 6.0,
                'font_size' => 10,
                'color' => '#ffffff',
                'bg_color' => '',
                'align' => 'center',
                'font_weight' => 'bold',
                'prefix' => '',
                'suffix' => ''
            ]
        ];
    }

    public function getImageUrlAttribute()
    {
        if (empty($this->image)) {
            return asset('images/school_coupon_template.jpg');
        }

        if (strpos($this->image, 'http') === 0) {
            return $this->image;
        }

        if (strpos($this->image, 'images/') === 0) {
            return asset($this->image);
        }

        return asset('storage/' . $this->image);
    }

    public function getParsedConfigAttribute()
    {
        $default = self::getDefaultVariablesConfig();

        if (empty($this->variables_config)) {
            return $default;
        }

        $decoded = is_array($this->variables_config)
            ? $this->variables_config
            : json_decode($this->variables_config, true);

        if (!is_array($decoded)) {
            return $default;
        }

        // Merge missing keys with default
        foreach ($default as $key => $values) {
            if (!isset($decoded[$key])) {
                $decoded[$key] = $values;
            } else {
                $decoded[$key] = array_merge($values, (array) $decoded[$key]);
            }
        }

        return $decoded;
    }
}

