<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\CategoryTranslation;
use App\Models\Language;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DummyCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $defaultLang = Language::where('is_default', 1)->first();
        $languageId = $defaultLang ? $defaultLang->id : 1;

        // Tree structure: 4 Levels (Main -> Sub -> Sub Sub -> Sub Sub Sub)
        $tree = [
            [
                'name' => 'Electronics & Gadgets',
                'subs' => [
                    [
                        'name' => 'Mobiles & Accessories',
                        'subs' => [
                            [
                                'name' => 'Smartphones',
                                'subs' => [
                                    ['name' => '5G Smartphones'],
                                    ['name' => 'Budget Smartphones'],
                                ]
                            ],
                            [
                                'name' => 'Audio & Headphones',
                                'subs' => [
                                    ['name' => 'Wireless Earbuds'],
                                    ['name' => 'Noise Cancelling Headphones'],
                                ]
                            ]
                        ]
                    ],
                    [
                        'name' => 'Laptops & Computers',
                        'subs' => [
                            [
                                'name' => 'Laptops',
                                'subs' => [
                                    ['name' => 'Gaming Laptops'],
                                    ['name' => 'Ultrabooks'],
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            [
                'name' => 'Fashion & Apparel',
                'subs' => [
                    [
                        'name' => 'Mens Wear',
                        'subs' => [
                            [
                                'name' => 'Top Wear',
                                'subs' => [
                                    ['name' => 'Oversized T-Shirts'],
                                    ['name' => 'Formal Shirts'],
                                ]
                            ]
                        ]
                    ],
                    [
                        'name' => 'Womens Wear',
                        'subs' => [
                            [
                                'name' => 'Ethnic Wear',
                                'subs' => [
                                    ['name' => 'Designer Sarees'],
                                    ['name' => 'Anarkali Suits'],
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            [
                'name' => 'Home & Kitchen',
                'subs' => [
                    [
                        'name' => 'Kitchen Appliances',
                        'subs' => [
                            [
                                'name' => 'Cooking Appliances',
                                'subs' => [
                                    ['name' => 'Digital Air Fryers'],
                                    ['name' => 'Induction Cooktops'],
                                ]
                            ]
                        ]
                    ],
                    [
                        'name' => 'Home Decor',
                        'subs' => [
                            [
                                'name' => 'Lighting',
                                'subs' => [
                                    ['name' => 'Smart LED Bulbs'],
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            [
                'name' => 'Groceries & Essentials',
                'subs' => [
                    [
                        'name' => 'Fresh Produce',
                        'subs' => [
                            [
                                'name' => 'Organic Vegetables',
                                'subs' => [
                                    ['name' => 'Leafy Greens'],
                                    ['name' => 'Root Vegetables'],
                                ]
                            ],
                            [
                                'name' => 'Fresh Fruits',
                                'subs' => [
                                    ['name' => 'Citrus Fruits'],
                                    ['name' => 'Exotic Berries'],
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            [
                'name' => 'Beauty & Personal Care',
                'subs' => [
                    [
                        'name' => 'Skincare',
                        'subs' => [
                            [
                                'name' => 'Face Care',
                                'subs' => [
                                    ['name' => 'Vitamin C Serums'],
                                    ['name' => 'Sunscreen Lotions'],
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            [
                'name' => 'Sports & Fitness',
                'subs' => [
                    [
                        'name' => 'Fitness Equipment',
                        'subs' => [
                            [
                                'name' => 'Gym Gear',
                                'subs' => [
                                    ['name' => 'Adjustable Dumbbells'],
                                    ['name' => 'Resistance Bands'],
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ];

        $totalInserted = 0;
        $order = 1;

        foreach ($tree as $mainCatData) {
            // Level 1: Main Category
            $mainCat = $this->createCategoryRecord($mainCatData['name'], 0, $order++, $languageId);
            $totalInserted++;

            if (isset($mainCatData['subs'])) {
                foreach ($mainCatData['subs'] as $subData) {
                    // Level 2: Sub Category
                    $subCat = $this->createCategoryRecord($subData['name'], $mainCat->id, $order++, $languageId);
                    $totalInserted++;

                    if (isset($subData['subs'])) {
                        foreach ($subData['subs'] as $subSubData) {
                            // Level 3: Sub Sub Category
                            $subSubCat = $this->createCategoryRecord($subSubData['name'], $subCat->id, $order++, $languageId);
                            $totalInserted++;

                            if (isset($subSubData['subs'])) {
                                foreach ($subSubData['subs'] as $subSubSubData) {
                                    // Level 4: Sub Sub Sub Category
                                    $this->createCategoryRecord($subSubSubData['name'], $subSubCat->id, $order++, $languageId);
                                    $totalInserted++;
                                }
                            }
                        }
                    }
                }
            }
        }

        $this->command->info("Successfully seeded {$totalInserted} categories across 4 hierarchy levels!");
    }

    private function createCategoryRecord($name, $parentId, $rowOrder, $languageId)
    {
        $slug = Str::slug($name);
        $uniqueSlug = $slug;
        $count = 1;

        while (Category::where('slug', $uniqueSlug)->exists()) {
            $uniqueSlug = $slug . '-' . $count;
            $count++;
        }

        $category = Category::create([
            'name' => $name,
            'slug' => $uniqueSlug,
            'subtitle' => '',
            'image' => '',
            'web_image' => '',
            'status' => 1,
            'row_order' => $rowOrder,
            'parent_id' => $parentId,
            'product_rating' => 0,
            'meta_title' => $name,
            'meta_keywords' => strtolower($name) . ', category, online shop',
            'schema_markup' => '',
            'meta_description' => 'Browse products in ' . $name,
        ]);

        CategoryTranslation::create([
            'category_id' => $category->id,
            'language_id' => $languageId,
            'name' => $name,
            'subtitle' => '',
            'meta_title' => $name,
            'meta_keywords' => strtolower($name) . ', category, online shop',
            'schema_markup' => '',
            'meta_description' => 'Browse products in ' . $name,
        ]);

        return $category;
    }
}
