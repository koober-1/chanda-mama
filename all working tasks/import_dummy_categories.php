<?php

/**
 * Dummy Categories Import Script
 * Project: Chanda Mama
 * File: all working tasks/import_dummy_categories.php
 * Date: 2026-09-23
 * 
 * Usage via CLI:
 * php artisan db:seed --class=DummyCategoriesSeeder
 * OR:
 * php "all working tasks/import_dummy_categories.php"
 */

require __DIR__ . '/../vendor/autoload.php';

$app = require_once __DIR__ . '/../bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Database\Seeders\DummyCategoriesSeeder;

echo "Starting Categories Dummy Data Import...\n";

try {
    $seeder = new DummyCategoriesSeeder();
    // Pass fake command wrapper if running raw script
    $seeder->setContainer($app);
    
    // Run the seeder directly
    $seeder->run();
    
    echo "\n[SUCCESS] Category dummy data successfully imported into database!\n";
} catch (\Throwable $e) {
    echo "\n[ERROR] Failed to seed categories: " . $e->getMessage() . "\n";
    echo $e->getTraceAsString() . "\n";
}
