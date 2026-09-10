<?php

namespace App\Models;
use App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    use HasFactory, HasTranslations;
    protected $fillable = [
        'name',
        'category_id',
        'indicator',
        'manufacturer',
        'made_in',
        'return_status',
        'cancelable_status',
        'till_status',
        'description',
        'highlights',
        'image',
        'seller_id',
        'is_approved',
        'brand_id',
        'return_days',
        'tax_id',
        'fssai_lic_no',
        'barcode',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'schema_markup',
    ];

    protected $appends = ['image_url', 'translations'];

    protected $hidden=['created_at','updated_at','deleted_at'];

    public function seller(){

        return $this->belongsTo(Seller::class,'seller_id','id');
    }

    public function tax(){
        return $this->belongsTo(Tax::class,'tax_id','id');
    }

    public function madeInCountry(){
        return $this->belongsTo(Country::class,'made_in','id');
    }

    public function category(){
        return $this->belongsTo(Category::class,'category_id','id');
    }

    // Many-to-many relationship for multiple categories
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_category', 'product_id', 'category_id');
    }

    // Helper method to get all category IDs (both single and multiple)
    public function getAllCategoryIdsAttribute()
    {
        // Get the primary category ID
        $categoryIds = [$this->category_id];

        // Get additional category IDs from the pivot table
        $additionalCategories = $this->categories()->pluck('category_id')->toArray();
        $categoryIds = array_merge($categoryIds, $additionalCategories);

        // Remove duplicates and filter out zeros/nulls
        return array_values(array_filter(array_unique($categoryIds), function($id) {
            return !empty($id) && $id > 0;
        }));
    }

    public function variants(){

        return $this->hasMany(ProductVariant::class,'product_id','id');
    }

    public function images(){

        return $this->hasMany(ProductImages::class,'product_id','id')
            ->where('product_variant_id',0)
            ->orderBy('sort_order')
            ->orderBy('id');
    }

    public function brand(){
        return $this->belongsTo(Brand::class,'brand_id','id');
    }

    public function getImageUrlAttribute(){

        if($this->image){
            $image_url = asset('storage/'.$this->image);
        }else{
            $image_url = '';
        }
        return $image_url;
    }
    public function ratings()
    {
        return $this->hasMany(ProductRating::class, 'product_id');
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'product_tag');
    }

    // Multi-language support
    protected $translatable = [
        'name',
        'tags',
        'manufacturer',
        'description',
        'highlights',
        'meta_title',
        'meta_keywords',
        'schema_markup',
        'meta_description',
    ];

    protected $translationModel = 'ProductTranslation';
    protected $translationForeignKey = 'product_id';
}
