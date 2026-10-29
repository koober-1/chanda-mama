<?php

namespace App\Http\Controllers\API;

use App\Helpers\CommonHelper;
use App\Http\Controllers\Controller;
use App\Models\HomePopup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class HomePopupApiController extends Controller
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
     * Public API: GET /api/home_popup
     * Returns the latest active home popup for Web & Mobile apps
     */
    public function getPublicPopup(Request $request)
    {
        $popup = HomePopup::where('status', 1)
            ->latest('id')
            ->first();

        if (!$popup) {
            return response()->json([
                'status' => 1,
                'message' => 'No active home popup found',
                'data' => null,
            ]);
        }

        return response()->json([
            'status' => 1,
            'message' => 'Home popup retrieved successfully',
            'data' => [
                'id' => (int) $popup->id,
                'title' => (string) ($popup->title ?? ''),
                'description' => (string) ($popup->description ?? ''),
                'image' => (string) $popup->image,
                'image_url' => (string) $popup->image_url,
                'link' => (string) ($popup->link ?? ''),
                'status' => (int) $popup->status,
            ],
        ]);
    }

    /**
     * Admin API: GET /api/home_popup/list
     * For Admin panel management
     */
    public function index()
    {
        if (!$this->isSuperAdmin()) {
            return CommonHelper::responseError('Unauthorized. Only Super Admin can access this resource.');
        }

        $query = HomePopup::query();
        $filter = request()->get('filter');

        if (!empty($filter)) {
            $query->where(function ($q) use ($filter) {
                $q->where('title', 'like', "%{$filter}%")
                    ->orWhere('description', 'like', "%{$filter}%")
                    ->orWhere('link', 'like', "%{$filter}%");
            });
        }

        $popups = $query->orderBy('id', 'DESC')->get();

        return CommonHelper::responseWithData($popups, $popups->count());
    }

    /**
     * Admin API: POST /api/home_popup/save
     * Create / upload a new home popup
     */
    public function save(Request $request)
    {
        if (!$this->isSuperAdmin()) {
            return CommonHelper::responseError('Unauthorized. Only Super Admin can create popups.');
        }

        $validator = Validator::make($request->all(), [
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'link' => 'nullable|string|max:1000',
            'image' => 'required|image|mimes:jpeg,jpg,png,webp,gif|max:10240',
            'status' => 'required|in:0,1',
        ], [
            'image.required' => 'Popup image is required.',
            'image.image' => 'Uploaded file must be a valid image file.',
            'image.max' => 'Popup image must not exceed 10 MB.',
        ]);

        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }

        $popup = new HomePopup();
        $popup->title = $request->title ?? '';
        $popup->description = $request->description ?? '';
        $popup->link = $request->link ?? '';
        $popup->status = (int) $request->status;

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '_' . rand(1111, 99999) . '.' . $file->getClientOriginalExtension();
            $path = Storage::disk('public')->putFileAs('popups', $file, $fileName);
            $popup->image = $path;
        }

        $popup->save();

        return CommonHelper::responseSuccess('Home popup saved successfully');
    }

    /**
     * Admin API: POST /api/home_popup/update
     * Update an existing home popup
     */
    public function update(Request $request)
    {
        if (!$this->isSuperAdmin()) {
            return CommonHelper::responseError('Unauthorized. Only Super Admin can update popups.');
        }

        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:home_popups,id',
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'link' => 'nullable|string|max:1000',
            'image' => $request->hasFile('image') ? 'image|mimes:jpeg,jpg,png,webp,gif|max:10240' : 'nullable',
            'status' => 'required|in:0,1',
        ], [
            'image.image' => 'Uploaded file must be a valid image file.',
            'image.max' => 'Popup image must not exceed 10 MB.',
        ]);

        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }

        $popup = HomePopup::find($request->id);
        if (!$popup) {
            return CommonHelper::responseError('Home popup not found');
        }

        $popup->title = $request->title !== null ? $request->title : $popup->title;
        $popup->description = $request->description !== null ? $request->description : $popup->description;
        $popup->link = $request->link !== null ? $request->link : $popup->link;
        $popup->status = (int) $request->status;

        if ($request->hasFile('image')) {
            if ($popup->image) {
                @Storage::disk('public')->delete($popup->image);
            }
            $file = $request->file('image');
            $fileName = time() . '_' . rand(1111, 99999) . '.' . $file->getClientOriginalExtension();
            $path = Storage::disk('public')->putFileAs('popups', $file, $fileName);
            $popup->image = $path;
        }

        $popup->save();

        return CommonHelper::responseSuccess('Home popup updated successfully');
    }

    /**
     * Admin API: POST /api/home_popup/delete
     * Delete a popup
     */
    public function delete(Request $request)
    {
        if (!$this->isSuperAdmin()) {
            return CommonHelper::responseError('Unauthorized. Only Super Admin can delete popups.');
        }

        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:home_popups,id',
        ]);

        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }

        $popup = HomePopup::find($request->id);
        if (!$popup) {
            return CommonHelper::responseError('Home popup not found');
        }

        if ($popup->image) {
            @Storage::disk('public')->delete($popup->image);
        }

        $popup->delete();

        return CommonHelper::responseSuccess('Home popup deleted successfully');
    }

    /**
     * Admin API: POST /api/home_popup/update_status
     * Toggle status active/inactive
     */
    public function updateStatus(Request $request)
    {
        if (!$this->isSuperAdmin()) {
            return CommonHelper::responseError('Unauthorized. Only Super Admin can update popup status.');
        }

        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:home_popups,id',
            'status' => 'required|in:0,1',
        ]);

        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }

        $popup = HomePopup::find($request->id);
        if (!$popup) {
            return CommonHelper::responseError('Home popup not found');
        }

        $popup->status = (int) $request->status;
        $popup->save();

        return CommonHelper::responseSuccess('Popup status updated successfully');
    }
}
