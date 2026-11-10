
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolCouponBatchesTable extends Migration
{
    public function up()
    {
        if (!Schema::hasTable('school_coupon_batches')) {
            Schema::create('school_coupon_batches', function (Blueprint $table) {
                $table->id();
                $table->string('school_name');
                $table->integer('total_coupons')->default(0);
                $table->decimal('discount', 10, 2)->default(50.00);
                $table->decimal('minimum_order_amount', 10, 2)->default(499.00);
                $table->date('start_date')->nullable();
                $table->date('end_date')->nullable();
                $table->string('code_prefix', 10)->nullable();
                $table->timestamps();
            });
        }

        if (Schema::hasTable('promo_codes') && !Schema::hasColumn('promo_codes', 'coupon_batch_id')) {
            Schema::table('promo_codes', function (Blueprint $table) {
                $table->unsignedBigInteger('coupon_batch_id')->nullable()->after('id')->index();
            });
        }
    }

    public function down()
    {
        if (Schema::hasTable('promo_codes') && Schema::hasColumn('promo_codes', 'coupon_batch_id')) {
            Schema::table('promo_codes', function (Blueprint $table) {
                $table->dropColumn('coupon_batch_id');
            });
        }
        Schema::dropIfExists('school_coupon_batches');
    }
}
