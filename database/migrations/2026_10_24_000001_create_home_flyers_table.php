<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeFlyersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('home_flyers')) {
            Schema::create('home_flyers', function (Blueprint $table) {
                $table->id();
                $table->string('name')->nullable();
                $table->text('image');
                $table->integer('sort_order')->default(0);
                $table->tinyInteger('status')->default(1)->comment('1: Active, 0: Inactive');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('home_flyers');
    }
}
