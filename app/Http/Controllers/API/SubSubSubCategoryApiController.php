<?php

namespace App\Http\Controllers\API;

use App\Helpers\CommonHelper;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class SubSubSubCategoryApiController extends Controller
{
    public function index()
    {
        $request = request();

        try {
            if ($request->filled('id')) {
                $categories = Category::where('id', (int) $request->id)
                    ->with('translations')
                    ->get();

                return CommonHelper::responseWithData($categories, $categories->count());
            }

            $limit = (int) $request->input('limit', 1000);
            $offset = ((int) $request->input('offset', 1) - 1) * $limit;
            $filter = $request->input('filter', '');

            $allCategories = Category::select('id', 'parent_id')->get()->keyBy('id');
            $subSubCategoryIds = $allCategories->filter(function ($category) use ($allCategories) {
                return $this->isSubSubCategory((int) $category->id, $allCategories);
            })->keys()->map(function ($id) {
                return (int) $id;
            })->toArray();

            $query = Category::whereIn('parent_id', $subSubCategoryIds)
                ->with('translations')
                ->orderBy('id', 'DESC');

            if ($filter) {
                $query = $this->applyCategoryTreeSearch($query, $filter);
            }

            $total = $query->count();
            $categories = $query->skip($offset)->take($limit)->get();

            return CommonHelper::responseWithData($categories, $total);
        } catch (\Throwable $e) {
            Log::error('Sub Sub SubCategory list error: ' . $e->getMessage(), ['trace' => $e->getTraceAsString()]);
            return CommonHelper::responseError('Server Error: ' . $e->getMessage());
        }
    }

    /** Search the category itself and every ancestor in the four-level tree. */
    private function applyCategoryTreeSearch($query, string $filter)
    {
        $like = '%' . trim($filter) . '%';

        return $query->where(function ($query) use ($like) {
            $matchCategory = function ($categoryQuery) use ($like) {
                $categoryQuery->where('name', 'like', $like)
                    ->orWhere('subtitle', 'like', $like);
            };

            $matchCategory($query);
            $query->orWhereHas('parent', $matchCategory)
                ->orWhereHas('parent.parent', $matchCategory)
                ->orWhereHas('parent.parent.parent', $matchCategory);
        });
    }

    public function save(Request $request)
    {
        try {
            if (!$this->hasValidSubSubCategoryParent($request)) {
                return CommonHelper::responseError('Please select valid Sub SubCategory');
            }

            $defaultLanguageId = $this->getDefaultLanguageId($request);
            $isDefaultLanguage = ((int) $request->language_id === (int) $defaultLanguageId);

            $rules = [
                'language_id' => 'required|exists:languages,id',
                'parent_id' => 'required|integer|exists:categories,id',
                'name' => $isDefaultLanguage ? 'required' : 'nullable',
                'image' => $request->hasFile('image') ? 'mimes:jpeg,jpg,png,gif,webp,svg|max:3072' : 'nullable',
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return CommonHelper::responseError($validator->errors()->first());
            }

            $category = new Category();
            $category->slug = $this->makeUniqueSlug($request->slug ?: $request->name);
            $category->status = (int) $request->input('status', 1);
            $category->parent_id = (int) $request->parent_id;
            $category->web_image = '';
            $category->image = '';

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $fileName = time() . '_' . rand(1111, 99999) . '.' . $file->getClientOriginalExtension();
                $category->image = Storage::disk('public')->putFileAs('categories', $file, $fileName);
            }

            $this->fillCategoryFields($category, $request);
            $category->save();
            $this->saveCategoryTranslation($category, $request);

            return CommonHelper::responseWithData([
                'id' => $category->id,
                'message' => 'Sub Sub SubCategory saved successfully',
            ]);
        } catch (\Throwable $e) {
            Log::error('Sub Sub SubCategory save error: ' . $e->getMessage(), [
                'parent_id' => $request->input('parent_id'),
                'language_id' => $request->input('language_id'),
                'trace' => $e->getTraceAsString(),
            ]);
            return CommonHelper::responseError('Server Error: ' . $e->getMessage());
        }
    }

    public function update(Request $request)
    {
        try {
            if (!$this->hasValidSubSubCategoryParent($request)) {
                return CommonHelper::responseError('Please select valid Sub SubCategory');
            }

            $defaultLanguageId = $this->getDefaultLanguageId($request);
            $isDefaultLanguage = ((int) $request->language_id === (int) $defaultLanguageId);

            $rules = [
                'id' => 'required|exists:categories,id',
                'language_id' => 'required|exists:languages,id',
                'parent_id' => 'required|integer|exists:categories,id',
                'name' => $isDefaultLanguage ? 'required' : 'nullable',
                'image' => $request->hasFile('image') ? 'mimes:jpeg,jpg,png,gif,webp,svg|max:3072' : 'nullable',
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return CommonHelper::responseError($validator->errors()->first());
            }

            $category = Category::find($request->id);
            if (!$category) {
                return CommonHelper::responseError('category_not_found');
            }

            if ($isDefaultLanguage) {
                if ($request->has('slug')) {
                    $category->slug = $request->slug;
                }
                $category->status = (int) $request->input('status', $category->status);
                $category->parent_id = (int) $request->parent_id;
                $this->fillCategoryFields($category, $request);
            }

            if ($request->hasFile('image')) {
                @Storage::disk('public')->delete($category->image);
                $file = $request->file('image');
                $fileName = time() . '_' . rand(1111, 99999) . '.' . $file->getClientOriginalExtension();
                $category->image = Storage::disk('public')->putFileAs('categories', $file, $fileName);
            }

            $category->save();
            $this->saveCategoryTranslation($category, $request);

            return CommonHelper::responseSuccess('category_updated_successfully');
        } catch (\Throwable $e) {
            Log::error('Sub Sub SubCategory update error: ' . $e->getMessage(), [
                'id' => $request->input('id'),
                'parent_id' => $request->input('parent_id'),
                'language_id' => $request->input('language_id'),
                'trace' => $e->getTraceAsString(),
            ]);
            return CommonHelper::responseError('Server Error: ' . $e->getMessage());
        }
    }

    public function delete(Request $request)
    {
        try {
            $category = Category::find($request->id);
            if (!$category) {
                return CommonHelper::responseSuccess('Category already deleted');
            }

            @Storage::disk('public')->delete($category->image);
            $category->delete();

            return CommonHelper::responseSuccess('category_deleted_successfully');
        } catch (\Throwable $e) {
            Log::error('Sub Sub SubCategory delete error: ' . $e->getMessage(), ['trace' => $e->getTraceAsString()]);
            return CommonHelper::responseError('Server Error: ' . $e->getMessage());
        }
    }

    private function fillCategoryFields(Category $category, Request $request)
    {
        $category->name = $request->name ?? '';
        $category->subtitle = '';
        $category->meta_title = $request->meta_title ?? '';
        $category->meta_keywords = $request->meta_keywords ?? '';
        $category->schema_markup = $request->schema_markup ?? '';
        $category->meta_description = $request->meta_description ?? '';
    }

    private function saveCategoryTranslation(Category $category, Request $request)
    {
        if (!Schema::hasTable('category_translations')) {
            Log::warning('Skipped Sub Sub SubCategory translation save because category_translations table is missing.', [
                'category_id' => $category->id,
                'language_id' => $request->language_id,
            ]);
            return;
        }

        $translationData = [
            'name' => $request->name ?? '',
            'subtitle' => '',
            'meta_title' => $request->meta_title ?? '',
            'meta_keywords' => $request->meta_keywords ?? '',
            'schema_markup' => $request->schema_markup ?? '',
            'meta_description' => $request->meta_description ?? '',
        ];

        $existingColumns = array_flip(Schema::getColumnListing('category_translations'));
        $translationData = array_intersect_key($translationData, $existingColumns);

        $category->saveTranslation($request->language_id, $translationData);
    }

    private function hasValidSubSubCategoryParent(Request $request)
    {
        $parentId = (int) $request->input('parent_id', 0);
        if ($parentId <= 0) {
            return false;
        }

        $allCategories = Category::select('id', 'parent_id')->get()->keyBy('id');

        return $this->isSubSubCategory($parentId, $allCategories);
    }

    private function isSubSubCategory($categoryId, $allCategories)
    {
        $subSubCategory = $allCategories->get($categoryId);
        if (!$subSubCategory || (int) $subSubCategory->parent_id === 0) {
            return false;
        }

        $subCategory = $allCategories->get((int) $subSubCategory->parent_id);
        if (!$subCategory || (int) $subCategory->parent_id === 0) {
            return false;
        }

        $category = $allCategories->get((int) $subCategory->parent_id);

        return $category && (int) $category->parent_id === 0;
    }

    private function getDefaultLanguageId(Request $request)
    {
        $defaultLanguage = Language::where('system_type', 4)
            ->where('is_default', 1)
            ->where('status', 1)
            ->first();

        return $defaultLanguage ? (int) $defaultLanguage->id : (int) $request->language_id;
    }

    private function makeUniqueSlug($slug, $ignoreId = null)
    {
        $baseSlug = trim((string) $slug);
        $baseSlug = preg_replace('/\s+/', '-', $baseSlug);
        $baseSlug = preg_replace('/[^A-Za-z0-9\-]/', '', $baseSlug);
        $baseSlug = trim(strtolower($baseSlug), '-');

        if ($baseSlug === '') {
            $baseSlug = 'sub-sub-subcategory';
        }

        $uniqueSlug = $baseSlug;
        $counter = 1;

        while (Category::where('slug', $uniqueSlug)
            ->when($ignoreId, function ($query) use ($ignoreId) {
                return $query->where('id', '!=', $ignoreId);
            })
            ->exists()) {
            $uniqueSlug = $baseSlug . '-' . $counter;
            $counter++;
        }

        return $uniqueSlug;
    }
}
