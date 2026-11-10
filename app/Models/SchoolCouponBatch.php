<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchoolCouponBatch extends Model
{
    use HasFactory;

    protected $table = 'school_coupon_batches';

    protected $fillable = [
        'school_name',
        'coupon_template_id',
        'total_coupons',
        'discount',
        'minimum_order_amount',
        'start_date',
        'end_date',
        'code_prefix',
        'custom_note'
    ];

    protected $appends = ['redeemed_count', 'remaining_count'];

    public function coupons()
    {
        return $this->hasMany(PromoCode::class, 'coupon_batch_id', 'id');
    }

    public function template()
    {
        return $this->belongsTo(CouponTemplate::class, 'coupon_template_id', 'id');
    }

    public function getRedeemedCountAttribute()
    {
        $couponIds = $this->coupons()->pluck('id')->toArray();
        if (empty($couponIds)) {
            return 0;
        }
        return Order::whereIn('promo_code_id', $couponIds)->distinct('promo_code_id')->count('promo_code_id');
    }

    public function getRemainingCountAttribute()
    {
        return max(0, (int)$this->total_coupons - (int)$this->redeemed_count);
    }
}
