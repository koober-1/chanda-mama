<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCouponTemplatesTable extends Migration
{
    public function up()
    {
        if (!Schema::hasTable('coupon_templates')) {
            Schema::create('coupon_templates', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('image');
                $table->longText('variables_config')->nullable();
                $table->boolean('is_default')->default(false);
                $table->timestamps();
            });
        }

        if (Schema::hasTable('school_coupon_batches')) {
            Schema::table('school_coupon_batches', function (Blueprint $table) {
                if (!Schema::hasColumn('school_coupon_batches', 'coupon_template_id')) {
                    $table->unsignedBigInteger('coupon_template_id')->nullable()->after('school_name')->index();
                }
                if (!Schema::hasColumn('school_coupon_batches', 'custom_note')) {
                    $table->string('custom_note')->nullable()->after('code_prefix');
                }
            });
        }
    }

    public function down()
    {
        if (Schema::hasTable('school_coupon_batches')) {
            Schema::table('school_coupon_batches', function (Blueprint $table) {
                if (Schema::hasColumn('school_coupon_batches', 'coupon_template_id')) {
                    $table->dropColumn('coupon_template_id');
                }
                if (Schema::hasColumn('school_coupon_batches', 'custom_note')) {
                    $table->dropColumn('custom_note');
                }
            });
        }
        Schema::dropIfExists('coupon_templates');
    }
}

