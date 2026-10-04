# Categories Architecture, Hierarchy & CRUD Operations Documentation

**Date:** 23 September 2026  
**Project:** Chanda Mama (`d:\koober\chanda-mama`)  
**File Location:** `all working tasks/2026-09-23-categories-documentation.md`

---

## 1. Overview (Aasaan Bhasha Mein)

Chanda Mama project mein Categories ka system **Multi-Level Hierarchy (Tree Structure)** follow karta hai. 
Iska matlab hai ki ek single table `categories` me hi sabhi levels manage hotey hain, chahe wo:
1. **Main Category** (Level 1)
2. **Sub Category** (Level 2)
3. **Sub Sub Category** (Level 3)
4. **Sub Sub Sub Category** (Level 4)

Sabhi levels ko establish karne ke liye `parent_id` column ka use kiya gaya hai. 
- Jab `parent_id = 0` hota hai, toh wo **Main Category** hoti hai.
- Jab `parent_id > 0` hota hai, toh wo kisi parent category ki **Sub Category / Sub Sub Category / Sub Sub Sub Category** hoti hai.

---

## 2. Database Schema (Table Structure)

### A. `categories` Table
Migration File: `database/migrations/2022_04_19_162902_create_categories_table.php` & Meta fields migration.

| Column Name | Type | Description |
| :--- | :--- | :--- |
| `id` | BigInteger (PK) | Category ki Unique ID |
| `parent_id` | Integer | Default `0`. Main Category ke liye `0`, Sub Categories ke liye Parent ID |
| `name` | String | Category Ka Naam |
| `slug` | String (Unique) | URL Friendly Slug (auto-generated) |
| `subtitle` | Text | Category ka optional Subtitle |
| `image` | Text | Storage path (`categories/filename.jpg`) |
| `web_image` | Text | Web specific image path |
| `status` | TinyInteger | `1` = Active, `0` = Inactive |
| `row_order` | Integer | Sorting order ke liye |
| `meta_title` | Text | SEO Meta Title |
| `meta_keywords` | Text | SEO Meta Keywords |
| `schema_markup` | Text | SEO Schema Markup |
| `meta_description` | Text | SEO Meta Description |
| `created_at` / `updated_at` | Timestamp | Creation and modification timestamps |

### B. `category_translations` Table
Multi-Language support ke liye translations table ka upayog hota hai (`CategoryTranslation` model).

---

## 3. Hierarchy & Level Relations (Category, Sub, Sub-Sub, Sub-Sub-Sub)

Hierarchy ko samajhne ke liye `parent_id` ka mapping diagram:

```
[Main Category] (parent_id = 0, id = 10)
       │
       └──► [Sub Category] (parent_id = 10, id = 25)
                  │
                  └──► [Sub Sub Category] (parent_id = 25, id = 40)
                             │
                             └──► [Sub Sub Sub Category] (parent_id = 40, id = 58)
```

### Hierarchy Level Rules:
1. **Main Category (Level 1):** `parent_id = 0`
2. **Sub Category (Level 2):** `parent_id = Main Category ID` (Parent category ka `parent_id = 0` hota hai).
3. **Sub Sub Category (Level 3):** `parent_id = Sub Category ID` (Grandparent category ka `parent_id = 0` hota hai).
4. **Sub Sub Sub Category (Level 4):** `parent_id = Sub Sub Category ID` (Great-grandparent ka `parent_id = 0` hota hai).

In `SubSubSubCategoryApiController.php`, system validation checks if `parent_id` belongs to Level 3 (`isSubSubCategory()` function).

---

## 4. Eloquent Model (`App\Models\Category.php`)

Category model `App\Models\Category` recursive self-referential relations use karta hai:

### Relationships:
- **`parent()`**: `hasOne(Category::class, 'id', 'parent_id')`
  - Direct Parent fetch karne ke liye.
- **`allParents()`**: `parent()->with('allParents')`
  - Top main category tak poora upward chain fetch karta hai.
- **`childs()` / `catChilds()`**: `hasMany(Category::class, 'parent_id', 'id')`
  - Direct immediate child categories (Sub Categories).
- **`allChilds()`**: `childs()->with('allChilds')`
  - Recursive tarike se saare levels ke niche wale child categories fetch karta hai.
- **`activeChilds()`**: `hasMany(...)->where('status', 1)`
  - Active immediate children.
- **`allActiveChilds()`**: `activeChilds()->with('allActiveChilds')`
  - Downward active children tree.

### Accessors & Appends:
- **`image_url`**: Image ka full asset URL return karta hai (`asset('storage/' . $this->image)`).
- **`has_child`**: Check karta hai ki category ke under koi child exist karta hai ya nahi.
- **`has_active_child`**: Check karta hai ki category ke under koi active status wala child exist karta hai.

---

## 5. CRUD Operations (Creation, Updation, Deletion, & Retrieval)

Main logic `CategoryApiController.php` aur `SubSubSubCategoryApiController.php` me written hai:

### A. Creation (Category Add Karna)
- **Controller Method:** `CategoryApiController::save()` / `SubSubSubCategoryApiController::save()`
- **Flow:**
  1. Input Validation (`name`, `language_id`, `image`).
  2. **Slug Generation:** `makeUniqueSlug()` call hota hai jo slug ko unique banata hai (space ko `-` se replace karta hai aur duplicates aane par `-1`, `-2` add karta hai).
  3. **Parent Assignment:** `parent_id` assign hota hai (`0` for Main, `id` of Parent for Sub levels).
  4. **Image Upload:** Uploaded image ko `Storage::disk('public')->putFileAs('categories', ...)` ke through `storage/app/public/categories/` me save kiya jata hai.
  5. **Category Save:** `$category->save()` database me record insert karta hai.
  6. **Translation Save:** `$category->saveTranslation($language_id, $translationData)` multi-language entries store karta hai.

### B. Retrieval & Filtering (Categories Fetch Karna)
- **Controller Method:** `CategoryApiController::getCategories()`
- **Features:**
  - **Seller Permission Filter:** Seller ke dwara permitted category IDs me recursive parent check karke access verify karta hai.
  - **Level Filtering:** Query param `category_level` = `subcategory` ya `sub_subcategory` se exact level filter hoti hai.
  - **Category Tree Search (`applyCategoryTreeSearch`):** Search filter lagane par category ke naam ke sath uske parents, grand-parents aur great-grandparents me bhi search check karta hai (`parent`, `parent.parent`, `parent.parent.parent`).

### C. Updation (Category Edit Karna)
- **Controller Method:** `CategoryApiController::update()` / `SubSubSubCategoryApiController::update()`
- **Flow:**
  1. Category ID se Record Find karna (`Category::find($id)`).
  2. **Image Update:** Agar nayi image upload hoti hai toh old image ko delete kiya jata hai `@Storage::disk('public')->delete($category->image)` aur nayi image upload hoti hai.
  3. **Default Language vs Translations:** Default language hone par main category table me `name`, `status`, `parent_id`, `slug` update hote hain. Secondary language hone par `category_translations` update hoti hai.
  4. `$category->save()` and `$category->saveTranslation(...)`.

### D. Deletion (Category Delete Karna)
- **Controller Method:** `CategoryApiController::delete()` / `SubSubSubCategoryApiController::delete()`
- **Flow:**
  1. Record find karke storage se attached image delete hoti hai: `@Storage::disk('public')->delete($category->image)`.
  2. `$category->delete()` call hoke DB se entry remove hoti hai.

---

## 6. Helper Functions (`App\Helpers\CategoryHelper.php`)

Category management ke liye project me special helper functions provide kiye gaye hain:

1. **`getAllChildCatID($category_id)`**:
   - Kisi category ID ke niche wale saare child category IDs (Sub, Sub-Sub, etc.) ko single flattened array me collect karta hai.
2. **`getAllActiveChildCatID($category_id)`**:
   - Sirf active status wale saare sub-categories ke IDs return karta hai.
3. **`getParentCat($category_id)`**:
   - Target category ke parent chain (IDs) ko top-level main category tak search karke array return karta hai.
4. **`getProductAvailableCount($cat_id)`**:
   - Target category aur uske saare child categories me total active products ki count nikalta hai (`Product::whereIn('category_id', $catArray)->where('status', 1)->count()`).

---

## 7. Important Code File Paths Reference

| Purpose | File Path |
| :--- | :--- |
| **Category Model** | `d:\koober\chanda-mama\app\Models\Category.php` |
| **Category Controller** | `d:\koober\chanda-mama\app\Http\Controllers\API\CategoryApiController.php` |
| **Sub Sub Sub Category Controller** | `d:\koober\chanda-mama\app\Http\Controllers\API\SubSubSubCategoryApiController.php` |
| **Category Helper** | `d:\koober\chanda-mama\app\Helpers\CategoryHelper.php` |
| **Categories Migration** | `d:\koober\chanda-mama\database\migrations\2022_04_19_162902_create_categories_table.php` |

---
*Document created automatically on 23-09-2026 inside `all working tasks` folder.*
