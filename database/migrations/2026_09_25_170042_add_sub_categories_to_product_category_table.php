<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSubCategoriesToProductCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_category', function (Blueprint $table) {
            $table->unsignedBigInteger('sub_category_id')->nullable()->after('category_id');
            $table->unsignedBigInteger('sub_sub_category_id')->nullable()->after('sub_category_id');

            $table->foreign('sub_category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('sub_sub_category_id')->references('id')->on('categories')->onDelete('cascade');

            // Drop the old unique constraint and add the new one
            // We suppress errors if the old index doesn't exist
            try {
                $table->dropUnique('product_category_product_id_category_id_unique');
            } catch (\Exception $e) {}

            $table->unique(['product_id', 'category_id', 'sub_category_id', 'sub_sub_category_id'], 'prod_cat_sub_sub_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_category', function (Blueprint $table) {
            $table->dropForeign(['sub_category_id']);
            $table->dropForeign(['sub_sub_category_id']);
            $table->dropUnique('prod_cat_sub_sub_unique');
            
            $table->dropColumn('sub_category_id');
            $table->dropColumn('sub_sub_category_id');
            
            $table->unique(['product_id', 'category_id'], 'product_category_product_id_category_id_unique');
        });
    }
}
