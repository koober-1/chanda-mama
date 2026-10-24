<?php

namespace App\Http\Controllers\API;

use App\Helpers\CommonHelper;
use App\Http\Controllers\Controller;
use App\Models\HomeFlyer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class HomeFlyersApiController extends Controller
{
    /**
     * Check if current authenticated user is Super Admin
     */
    protected function isSuperAdmin()
    {
        $user = auth()->user();
        if (!$user) {
            return false;
        }
        if ($user->role_id == 1) {
            return true;
        }
        return optional($user->role)->name === 'Super Admin';
    }

    /**
     * Public API: GET /api/home_flyers
     * Returns active flyers ordered by sort_order ASC
     * Format:
     * {
     *   "status": 1,
     *   "data": [
     *     {
     *       "id": 1,
     *       "image_url": "...",
     *       "sort_order": 1
     *     }
     *   ]
     * }
     */
    public function getPublicFlyers(Request $request)
    {
        $flyers = HomeFlyer::where('status', 1)
            ->orderBy('sort_order', 'ASC')
            ->orderBy('id', 'ASC')
            ->get()
            ->map(function ($flyer) {
                return [
                    'id' => (int) $flyer->id,
                    'image_url' => (string) $flyer->image_url,
                    'sort_order' => (int) $flyer->sort_order,
                ];
            })
            ->values();

        return response()->json([
            'status' => 1,
            'data' => $flyers,
        ]);
    }

    /**
     * Admin API: GET /api/home_flyers/list
     * For Superadmin panel management
     */
    public function index()
    {
        if (!$this->isSuperAdmin()) {
            return CommonHelper::responseError('Unauthorized. Only Super Admin can access this resource.');
        }

        $query = HomeFlyer::query();
        $filter = request()->get('filter');

        if (!empty($filter)) {
            $query->where(function ($q) use ($filter) {
                $q->where('name', 'like', "%{$filter}%")
                  ->orWhere('id', 'like', "%{$filter}%");
            });
        }

        $flyers = $query->orderBy('sort_order', 'ASC')
            ->orderBy('id', 'DESC')
            ->get();

        return CommonHelper::responseWithData($flyers, $flyers->count());
    }

    /**
     * Admin API: POST /api/home_flyers/save
     * Create / upload a new home flyer
     */
    public function save(Request $request)
    {
        if (!$this->isSuperAdmin()) {
            return CommonHelper::responseError('Unauthorized. Only Super Admin can create flyers.');
        }

        $validator = Validator::make($request->all(), [
            'name' => 'nullable|string|max:255',
            'image' => 'required|image|mimes:jpeg,jpg,png,webp,gif|max:10240',
            'sort_order' => 'nullable|integer|min:0',
            'status' => 'required|in:0,1',
        ], [
            'image.required' => 'Flyer image is required.',
            'image.image' => 'Uploaded file must be a valid image (recommended 1200 × 650 px).',
            'image.max' => 'Flyer image must not exceed 10 MB.',
        ]);

        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }

        $flyer = new HomeFlyer();
        $flyer->name = $request->name ?? '';
        $flyer->sort_order = $request->sort_order !== null && $request->sort_order !== '' ? (int) $request->sort_order : 0;
        $flyer->status = (int) $request->status;

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '_' . rand(1111, 99999) . '.' . $file->getClientOriginalExtension();
            $path = Storage::disk('public')->putFileAs('flyers', $file, $fileName);
            $flyer->image = $path;
        }

        $flyer->save();

        return CommonHelper::responseSuccess('Home flyer saved successfully');
    }

    /**
     * Admin API: POST /api/home_flyers/update
     * Update an existing home flyer
     */
    public function update(Request $request)
    {
        if (!$this->isSuperAdmin()) {
            return CommonHelper::responseError('Unauthorized. Only Super Admin can update flyers.');
        }

        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:home_flyers,id',
            'name' => 'nullable|string|max:255',
            'image' => $request->hasFile('image') ? 'image|mimes:jpeg,jpg,png,webp,gif|max:10240' : 'nullable',
            'sort_order' => 'nullable|integer|min:0',
            'status' => 'required|in:0,1',
        ], [
            'image.image' => 'Uploaded file must be a valid image (recommended 1200 × 650 px).',
            'image.max' => 'Flyer image must not exceed 10 MB.',
        ]);

        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }

        $flyer = HomeFlyer::find($request->id);
        if (!$flyer) {
            return CommonHelper::responseError('Home flyer not found');
        }

        $flyer->name = $request->name ?? $flyer->name;
        $flyer->sort_order = $request->sort_order !== null && $request->sort_order !== '' ? (int) $request->sort_order : 0;
        $flyer->status = (int) $request->status;

        if ($request->hasFile('image')) {
            if ($flyer->image) {
                @Storage::disk('public')->delete($flyer->image);
            }
            $file = $request->file('image');
            $fileName = time() . '_' . rand(1111, 99999) . '.' . $file->getClientOriginalExtension();
            $path = Storage::disk('public')->putFileAs('flyers', $file, $fileName);
            $flyer->image = $path;
        }

        $flyer->save();

        return CommonHelper::responseSuccess('Home flyer updated successfully');
    }

    /**
     * Admin API: POST /api/home_flyers/delete
     * Delete a flyer
     */
    public function delete(Request $request)
    {
        if (!$this->isSuperAdmin()) {
            return CommonHelper::responseError('Unauthorized. Only Super Admin can delete flyers.');
        }

        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:home_flyers,id',
        ]);

        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }

        $flyer = HomeFlyer::find($request->id);
        if (!$flyer) {
            return CommonHelper::responseSuccess('Flyer already deleted');
        }

        if ($flyer->image) {
            @Storage::disk('public')->delete($flyer->image);
        }

        $flyer->delete();

        return CommonHelper::responseSuccess('Home flyer deleted successfully');
    }

    /**
     * Admin API: POST /api/home_flyers/update_status
     * Quick status toggle (active / inactive)
     */
    public function updateStatus(Request $request)
    {
        if (!$this->isSuperAdmin()) {
            return CommonHelper::responseError('Unauthorized. Only Super Admin can update status.');
        }

        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:home_flyers,id',
            'status' => 'required|in:0,1',
        ]);

        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }

        $flyer = HomeFlyer::find($request->id);
        if (!$flyer) {
            return CommonHelper::responseError('Home flyer not found');
        }

        $flyer->status = (int) $request->status;
        $flyer->save();

        return CommonHelper::responseSuccess('Flyer status updated successfully');
    }
}
