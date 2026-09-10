                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <template>
    <div>
        <div class="page-heading">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>
                        <template v-if="clone">
                            {{ __('clone') }}
                        </template>
                        <template v-else-if="id">
                            {{ __('edit') }}
                        </template>
                        <template v-else>
                            {{ __('add') }}
                        </template>
                        {{ __('product') }}
                    </h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <!-- Conditionally render breadcrumb item based on the current route -->
                            <li class="breadcrumb-item" v-if="isSellerRoute">
                                <router-link to="/seller/dashboard">{{ __('dashboard') }}</router-link>
                            </li>
                            <li class="breadcrumb-item" v-else>
                                <router-link to="/dashboard">{{ __('dashboard') }}</router-link>
                            </li>
                            <!-- Conditionally render breadcrumb item based on the current route -->
                            <li class="breadcrumb-item" v-if="isSellerRoute">
                                <router-link to="/seller/manage_products">{{ __('manage_products') }}</router-link>
                            </li>
                            <li class="breadcrumb-item" v-else>
                                <router-link to="/manage_products">{{ __('manage_products') }}</router-link>
                            </li>

                            <li class="breadcrumb-item active" aria-current="page">
                                <template v-if="clone">
                                    {{ __('clone') }}
                                </template>
                                <template v-else-if="id">
                                    {{ __('edit') }}
                                </template>
                                <template v-else>
                                    {{ __('add') }}
                                </template>
                                {{ __('product') }}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-12 order-md-1 order-last" id="mymodal">
                    <div v-if="isLoadingLanguages" class="text-center py-5">
                        <b-spinner label="Loading..."></b-spinner>
                        <p class="mt-2">Loading languages...</p>
                    </div>
                    <form ref="my-form" @submit.prevent="saveRecord" @keydown.enter="$event.preventDefault()" v-else>
                        <div class="card">
                            <div class="card-header">
                                <h4>General Details</h4>
                                <span class="pull-right">
                                    <template v-if="isSellerRole">
                                        <router-link to="/seller/manage_products" class="btn btn-primary"
                                            v-b-tooltip.hover title="Manage Product">{{ __('manage_products')
                                            }}</router-link>
                                    </template>
                                    <template v-else>
                                        <router-link to="/manage_products" class="btn btn-primary" v-b-tooltip.hover
                                            title="Manage Product">{{ __('manage_products') }}</router-link>
                                    </template>
                                </span>
                            </div>
                            <div class="card-body">
                                <!-- Language Tabs -->
                                <div class="col-md-12 mb-3" v-if="false">
                                    <b-tabs v-model="activeLanguageTab" content-class="mt-3">
                                        <b-tab v-for="language in languages" :key="language.id" :title="language.name"
                                            lazy>
                                            <template #title>
                                                <span :class="{ 'text-primary font-weight-bold': language.is_default }">
                                                    {{ language.name }}
                                                </span>
                                            </template>

                                            <!-- Translate buttons -->
                                            <div class="mb-3" v-if="language.is_default && languages.length > 1">
                                                <b-button size="sm" variant="outline-primary" class="mr-2"
                                                    @click="translateEmpty(language)" v-b-tooltip.hover
                                                    :title="__('only_empty_fields_will_be_translated_existing_content_will_not_be_changed')"
                                                    :disabled="loadingEmpty">
                                                    <span v-if="!loadingEmpty">{{ __('translate_empty_fields') }}</span>
                                                    <b-spinner v-else small></b-spinner>
                                                </b-button>

                                                <b-button size="sm" variant="outline-danger"
                                                    @click="translateOverwrite(language)" v-b-tooltip.hover
                                                    :title="__('all_fields_will_be_translated_and_existing_content_will_be_overwritten')"
                                                    :disabled="loadingOverwrite">
                                                    <span v-if="!loadingOverwrite">{{ __('translate_and_overwrite')
                                                        }}</span>
                                                    <b-spinner v-else small></b-spinner>
                                                </b-button>

                                                <div v-if="translateSuccessMessage"
                                                    class="text-success mt-2 font-weight-bold">
                                                    {{ translateSuccessMessage }}
                                                </div>
                                            </div>
                                            <!-- Translate buttons END -->

                                            <div v-if="translations[language.id]">
                                                <div class="row">
                                                    <template v-if="language.is_default">
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="barcode">{{ __('barcode') }}</label>
                                                                <input type="text" id="barcode" class="form-control" :placeholder="__('barcode')"
                                                                    v-model="barcode" @input="validateBarcode">
                                                                <p style="color:red" v-if="validationBarcodeMessage">{{
                                                                    validationBarcodeMessage }}</p>
                                                                <p style="color:green" v-else-if="isBarcodeValid">Barcode is valid!
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label>{{ __('product_name') }} <i class="text-danger"
                                                                        v-if="language.is_default">*</i></label>
                                                                <input type="text" class="form-control"
                                                                    :placeholder="__('enter_product_name')"
                                                                    v-model="translations[language.id].name"
                                                                    :required="language.is_default ? true : undefined"
                                                                    @input="handleDefaultLanguageInput('name', language)">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label>{{ __('slug') }}</label>
                                                                <input type="text" class="form-control"
                                                                    :placeholder="__('enter_product_slug')" v-model="slug"
                                                                    readonly>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="tax_id">{{ __('tax') }}</label>
                                                                <select id="tax_id" name="tax_id"
                                                                    class="form-control" v-model="tax_id">
                                                                    <option value="0">{{ __('select_tax') }}</option>
                                                                    <option v-for="tax in translatedTaxes" :value="tax.id">
                                                                        {{ tax.title }}
                                                                        ({{ tax.percentage }} %)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="brands">{{ __('brands') }}</label>
                                                                <multiselect id="brands" v-model="brand" :options="translatedBrands"
                                                                    :placeholder="__('select_and_search_brands')"
                                                                    label="name" track-by="id" required>
                                                                    <template slot="singleLabel" slot-scope="props">
                                                                        <span class="option__desc">
                                                                            <span class="option__title">{{
                                                                                props.option.name }}</span>
                                                                        </span>
                                                                    </template>
                                                                    <template slot="option" slot-scope="props">
                                                                        <div class="option__desc">
                                                                            <span class="option__small">
                                                                                <img style="height: 25px; "
                                                                                    class="option__image"
                                                                                    :src="props.option.image_url"
                                                                                    alt="Brand Logo">
                                                                            </span>
                                                                            <span class="option__title">{{
                                                                                props.option.name }}</span>
                                                                        </div>
                                                                    </template>
                                                                </multiselect>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div
                                                                class="form-group mb-3 d-flex flex-wrap align-items-center">
                                                                <button type="button"
                                                                    class="btn btn-outline-primary me-3 my-2 ai-generate-btn"
                                                                    @click="generateDescription"
                                                                    :disabled="isGeneratingAI">
                                                                    <!-- AI Processing State -->
                                                                    <template v-if="isGeneratingAI">
                                                                        <span class="ai-spinner me-2"></span>
                                                                        <span class="ai-text-animate">AI is
                                                                            generating...</span>
                                                                    </template>
                                                                    <!-- Normal State -->
                                                                    <template v-else>
                                                                        <i class="fa fa-magic me-1"></i>
                                                                        {{ __('generate_description_with_ai') }}
                                                                    </template>
                                                                </button>
                                                                <label class="my-2 d-flex align-items-center">
                                                                    <input type="checkbox" v-model="useCustomPrompt"
                                                                        class="me-2" />
                                                                    <span class="mt-1">{{ __('use_custom_prompt')
                                                                    }}</span>
                                                                </label>
                                                            </div>
                                                        </div>
    
                                                        <div class="col-md-12">
                                                            <div class="form-group mb-3" v-if="useCustomPrompt">
                                                                <label>{{ __('custom_prompt') }}</label>
                                                                <textarea class="form-control" v-model="customPrompt"
                                                                    rows="2"
                                                                    placeholder="e.g. Write a fun and engaging description focusing on features and benefits"></textarea>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    


                                                    <!-- Translatable Fields: Description (shown in all language tabs) -->
                                                    <div class="col-md-12">
                                                        <div class="form-group mb-3">
                                                            <label>{{ __('description') }} <i class="text-danger"
                                                                    v-if="language.is_default">*</i></label>
                                                            <editor :placeholder="__('enter_product_description')"
                                                                v-model="translations[language.id].description"
                                                                :init="getEditorConfig()"
                                                                @input="handleDefaultLanguageInput('description', language)" />
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <div class="form-group mb-3">
                                                            <label>Product Highlights <small class="text-muted">(Optional)</small></label>
                                                            <editor placeholder="Paste or enter product highlights"
                                                                v-model="translations[language.id].highlights"
                                                                :init="getEditorConfig()"
                                                                @input="handleDefaultLanguageInput('highlights', language)" />
                                                            <small class="text-muted">Pasted formatting, lists and spacing will be preserved.</small>
                                                        </div>
                                                    </div>


                                                    <!-- Non-translatable Fields: Images (only shown in default language tab) -->
                                                    <template v-if="language.is_default">
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label>{{ __('main_image') }} <i
                                                                        class="text-danger" v-if="!id">*</i></label>
                                                                <input type="file" name="image" accept="image/*"
                                                                    ref="file_image" v-on:change="fileImage"
                                                                    class="file-input">

                                                                <div class="file-input-div bg-gray-100"
                                                                    @click="triggerRefClick('file_image')"
                                                                    @drop="dropFile" @dragover="$dragoverFile"
                                                                    @dragleave="$dragleaveFile">
                                                                    <template v-if="main_image_name == ''">
                                                                        <label><i
                                                                                class="fa fa-cloud-upload-alt fa-2x"></i></label>
                                                                        <label>{{
                                                                            __('drop_files_here_or_click_to_upload')
                                                                            }}</label>
                                                                    </template>
                                                                    <template v-else>
                                                                        <label>{{ __('selected_file_name') }} {{
                                                                            main_image_name
                                                                            }}</label>
                                                                    </template>
                                                                </div>
                                                                <span class="text text-primary">{{ __('please_choose_square_image_of_larger_than_350px_350px_and_smaller_than_550px_550px') }}</span>
                                                                <p v-if="mainImageerror" class="error">{{ mainImageerror
                                                                    }}</p>

                                                                <div class="row" v-if="main_image_path">
                                                                    <div class="col-md-4">
                                                                        <img class="custom-image" :src="main_image_path"
                                                                            title='Main Image' alt='Main Image' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="other_images">{{
                                                                    __('other_images_of_the_product') }}</label>

                                                                <input type="file" name="other_images[]"
                                                                    accept="image/jpeg,image/png,image/gif,image/webp,video/mp4" id="other_images"
                                                                    v-on:change="otherImage" multiple=""
                                                                    ref="file_other_images" class="file-input">

                                                                <div class="file-input-div bg-gray-100"
                                                                    @click="triggerRefClick('file_other_images')"
                                                                    @drop="dropFileOtherImage" @dragover="$dragoverFile"
                                                                    @dragleave="$dragleaveFile">
                                                                    <template v-if="images.length === 0">
                                                                        <label><i
                                                                                class="fa fa-cloud-upload-alt fa-2x"></i></label>
                                                                        <label>{{
                                                                            __('drop_files_here_or_click_to_upload')
                                                                            }}</label>
                                                                    </template>
                                                                    <template v-else>
                                                                        <label>{{ images.length }} files selected</label>
                                                                        <span><small>Use the + button below to add more.</small></span>
                                                                    </template>
                                                                </div>
                                                                <span class="text text-primary">Allowed media: JPG, JPEG, PNG, GIF, WEBP images or MP4 videos. Max 3 MB per file.</span>
                                                                <p v-if="otherImageerror" class="error">{{
                                                                    otherImageerror }}</p>

                                                                <div class="row other-media-list" v-if="images && images.length !== 0">
                                                                    <h6 class="mt-3">Selected Other Image List.</h6>
                                                                    <div class="col-md-4 image-container"
                                                                        v-if="images.length !== 0"
                                                                        v-for="(image, index) in images" :key="'other_new_' + index"
                                                                        draggable="true" @dragstart="startMediaDrag('other-new', index)"
                                                                        @dragover.prevent @drop.prevent="dropMedia('other-new', index)" @dragend="endMediaDrag">
                                                                        <span class="media-order-badge">{{ (other_images || []).length + index + 1 }}</span>
                                                                        <video v-if="image.isVideo" class="img-thumbnail custom-image"
                                                                            :src="image.url" controls muted playsinline
                                                                            title='Selected Product Video'></video>
                                                                        <img v-else class="img-thumbnail custom-image"
                                                                            :src="image.url"
                                                                            title='Selected Other Image'
                                                                            alt='Selected Other Image' />
                                                                        <button type="button"
                                                                            @click="removeOtherImage(images.indexOf(image))"
                                                                            class="btn btn-sm btn-danger btn-remove"> <i
                                                                                class="fa fa-times-circle"></i>
                                                                        </button>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <button type="button"
                                                                            class="add-more-media-btn"
                                                                            @click="triggerRefClick('file_other_images')">
                                                                            <i class="fa fa-plus"></i>
                                                                            <span>Add More</span>
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div class="row"
                                                                    v-if="other_images && other_images.length !== 0">
                                                                    <h6 class="mt-3">Uploaded Other Image List.</h6>
                                                                    <div class="col-md-4 image-container"
                                                                        v-if="other_images.length !== 0"
                                                                        v-for="(image, index) in other_images" :key="'other_existing_' + image.id"
                                                                        draggable="true" @dragstart="startMediaDrag('other-existing', index)"
                                                                        @dragover.prevent @drop.prevent="dropMedia('other-existing', index)" @dragend="endMediaDrag">
                                                                        <span class="media-order-badge">{{ image.sort_order || index + 1 }}</span>
                                                                        <video v-if="isVideoMedia(image.image)" class="img-thumbnail custom-image"
                                                                            :src="$storageUrl + image.image" controls muted playsinline
                                                                            title='Product Video'></video>
                                                                        <img v-else class="img-thumbnail custom-image"
                                                                            :src="$storageUrl + image.image"
                                                                            title='Other Image' alt='Other Image' />
                                                                        <button type="button"
                                                                            @click="deleteImage(index, image.id, true)"
                                                                            class="btn btn-sm btn-danger btn-remove"> <i
                                                                                class="fa fa-times-circle"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </b-tab>
                                    </b-tabs>
                                </div>

                                <!-- Loading state for languages -->
                                <div v-else-if="isLoadingLanguages" class="text-center p-3 mb-3">
                                    <b-spinner label="Loading languages..."></b-spinner>
                                </div>

                                <!-- Direct form fields (without language tabs) -->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="barcode">{{ __('barcode') }}</label>
                                            <input type="text" id="barcode" class="form-control" :placeholder="__('barcode')"
                                                v-model="barcode" @input="validateBarcode">
                                            <p style="color:red" v-if="validationBarcodeMessage">{{
                                                validationBarcodeMessage }}</p>
                                            <p style="color:green" v-else-if="isBarcodeValid">Barcode is valid!
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6" v-if="defaultLanguageId">
                                        <div class="form-group mb-3">
                                            <label>{{ __('product_name') }} <i class="text-danger">*</i></label>
                                            <input type="text" class="form-control"
                                                :placeholder="__('enter_product_name')"
                                                v-model="translations[defaultLanguageId].name"
                                                required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mb-3">
                                            <label>{{ __('slug') }}</label>
                                            <input type="text" class="form-control"
                                                :placeholder="__('enter_product_slug')" v-model="slug"
                                                readonly>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="tax_id">{{ __('tax') }}</label>
                                            <select id="tax_id" name="tax_id"
                                                class="form-control" v-model="tax_id">
                                                <option value="0">{{ __('select_tax') }}</option>
                                                <option v-for="tax in translatedTaxes" :value="tax.id">
                                                    {{ tax.title }}
                                                    ({{ tax.percentage }} %)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="brands">{{ __('brands') }}</label>
                                            <multiselect id="brands" v-model="brand" :options="translatedBrands"
                                                :placeholder="__('select_and_search_brands')"
                                                label="name" track-by="id" required>
                                                <template slot="singleLabel" slot-scope="props">
                                                    <span class="option__desc">
                                                        <span class="option__title">{{
                                                            props.option.name }}</span>
                                                    </span>
                                                </template>
                                                <template slot="option" slot-scope="props">
                                                    <div class="option__desc">
                                                        <span class="option__small">
                                                            <img style="height: 25px; "
                                                                class="option__image"
                                                                :src="props.option.image_url"
                                                                alt="Brand Logo">
                                                        </span>
                                                        <span class="option__title">{{
                                                            props.option.name }}</span>
                                                    </div>
                                                </template>
                                            </multiselect>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div
                                            class="form-group mb-3 d-flex flex-wrap align-items-center">
                                            <button type="button"
                                                class="btn btn-outline-primary me-3 my-2 ai-generate-btn"
                                                @click="generateDescription"
                                                :disabled="isGeneratingAI">
                                                <template v-if="isGeneratingAI">
                                                    <span class="ai-spinner me-2"></span>
                                                    <span class="ai-text-animate">AI is
                                                        generating...</span>
                                                </template>
                                                <template v-else>
                                                    <i class="fa fa-magic me-1"></i>
                                                    {{ __('generate_description_with_ai') }}
                                                </template>
                                            </button>
                                            <label class="my-2 d-flex align-items-center">
                                                <input type="checkbox" v-model="useCustomPrompt"
                                                    class="me-2" />
                                                <span class="mt-1">{{ __('use_custom_prompt')
                                                }}</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-group mb-3" v-if="useCustomPrompt">
                                            <label>{{ __('custom_prompt') }}</label>
                                            <textarea class="form-control" v-model="customPrompt"
                                                rows="2"
                                                placeholder="e.g. Write a fun and engaging description focusing on features and benefits"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-md-12" v-if="defaultLanguageId">
                                        <div class="form-group mb-3">
                                            <label>{{ __('description') }} <i class="text-danger">*</i></label>
                                            <editor :placeholder="__('enter_product_description')"
                                                v-model="translations[defaultLanguageId].description"
                                                :init="getEditorConfig()" />
                                        </div>
                                    </div>

                                    <div class="col-md-12" v-if="defaultLanguageId">
                                        <div class="form-group mb-3">
                                            <label>Product Highlights <small class="text-muted">(Optional)</small></label>
                                            <editor placeholder="Paste or enter product highlights"
                                                v-model="translations[defaultLanguageId].highlights"
                                                :init="getEditorConfig()" />
                                            <small class="text-muted">Pasted formatting, lists and spacing will be preserved.</small>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group mb-3">
                                            <label>{{ __('main_image') }} <i
                                                    class="text-danger" v-if="!id">*</i></label>
                                            <input type="file" name="image" accept="image/*"
                                                ref="file_image" v-on:change="fileImage"
                                                class="file-input">

                                            <div class="file-input-div bg-gray-100"
                                                @click="triggerRefClick('file_image')"
                                                @drop="dropFile" @dragover="$dragoverFile"
                                                @dragleave="$dragleaveFile">
                                                <template v-if="main_image_name == ''">
                                                    <label><i
                                                            class="fa fa-cloud-upload-alt fa-2x"></i></label>
                                                    <label>{{
                                                        __('drop_files_here_or_click_to_upload')
                                                        }}</label>
                                                </template>
                                                <template v-else>
                                                    <label>{{ __('selected_file_name') }} {{
                                                        main_image_name
                                                        }}</label>
                                                </template>
                                            </div>
                                            <span class="text text-primary">{{ __('please_choose_square_image_of_larger_than_350px_350px_and_smaller_than_550px_550px') }}</span>
                                            <p v-if="mainImageerror" class="error">{{ mainImageerror
                                                }}</p>

                                            <div class="row" v-if="main_image_path">
                                                <div class="col-md-4">
                                                    <img class="custom-image" :src="main_image_path"
                                                        title='Main Image' alt='Main Image' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="other_images">{{
                                                __('other_images_of_the_product') }}</label>

                                            <input type="file" name="other_images[]"
                                                accept="image/jpeg,image/png,image/gif,image/webp,video/mp4" id="other_images"
                                                v-on:change="otherImage" multiple=""
                                                ref="file_other_images" class="file-input">

                                            <div class="file-input-div bg-gray-100"
                                                @click="triggerRefClick('file_other_images')"
                                                @drop="dropFileOtherImage" @dragover="$dragoverFile"
                                                @dragleave="$dragleaveFile">
                                                <template v-if="images.length === 0">
                                                    <label><i
                                                            class="fa fa-cloud-upload-alt fa-2x"></i></label>
                                                    <label>{{
                                                        __('drop_files_here_or_click_to_upload')
                                                        }}</label>
                                                </template>
                                                <template v-else>
                                                    <label>{{ images.length }} files selected</label>
                                                    <span><small>Use the + button below to add more.</small></span>
                                                </template>
                                            </div>
                                            <span class="text text-primary">Allowed media: JPG, JPEG, PNG, GIF, WEBP images or MP4 videos. Max 3 MB per file.</span>
                                            <p v-if="otherImageerror" class="error">{{
                                                otherImageerror }}</p>

                                            <div class="row other-media-list" v-if="images && images.length !== 0">
                                                <h6 class="mt-3">Selected Other Image List.</h6>
                                                <div class="col-md-4 image-container"
                                                    v-if="images.length !== 0"
                                                    v-for="(image, index) in images" :key="'other_new_direct_' + index"
                                                    draggable="true" @dragstart="startMediaDrag('other-new', index)"
                                                    @dragover.prevent @drop.prevent="dropMedia('other-new', index)" @dragend="endMediaDrag">
                                                    <span class="media-order-badge">{{ (other_images || []).length + index + 1 }}</span>
                                                    <video v-if="image.isVideo" class="img-thumbnail custom-image"
                                                        :src="image.url" controls muted playsinline
                                                        title='Selected Product Video'></video>
                                                    <img v-else class="img-thumbnail custom-image"
                                                        :src="image.url"
                                                        title='Selected Other Image'
                                                        alt='Selected Other Image' />
                                                    <button type="button"
                                                        @click="removeOtherImage(images.indexOf(image))"
                                                        class="btn btn-sm btn-danger btn-remove"> <i
                                                            class="fa fa-times-circle"></i>
                                                    </button>
                                                </div>
                                                <div class="col-md-4">
                                                    <button type="button"
                                                        class="add-more-media-btn"
                                                        @click="triggerRefClick('file_other_images')">
                                                        <i class="fa fa-plus"></i>
                                                        <span>Add More</span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="row"
                                                v-if="other_images && other_images.length !== 0">
                                                <h6 class="mt-3">Uploaded Other Image List.</h6>
                                                <div class="col-md-4 image-container"
                                                    v-if="other_images.length !== 0"
                                                    v-for="(image, index) in other_images" :key="'other_existing_direct_' + image.id"
                                                    draggable="true" @dragstart="startMediaDrag('other-existing', index)"
                                                    @dragover.prevent @drop.prevent="dropMedia('other-existing', index)" @dragend="endMediaDrag">
                                                    <span class="media-order-badge">{{ image.sort_order || index + 1 }}</span>
                                                    <video v-if="isVideoMedia(image.image)" class="img-thumbnail custom-image"
                                                        :src="$storageUrl + image.image" controls muted playsinline
                                                        title='Product Video'></video>
                                                    <img v-else class="img-thumbnail custom-image"
                                                        :src="$storageUrl + image.image"
                                                        title='Other Image' alt='Other Image' />
                                                    <button type="button"
                                                        @click="deleteImage(index, image.id, true)"
                                                        class="btn btn-sm btn-danger btn-remove"> <i
                                                            class="fa fa-times-circle"></i>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                        <!-- Product Variants: Show regardless of language tabs since they are hidden -->
                        <div class="card">
                            <div class="card-header">
                                <h4>Pricing Details</h4>
                            </div>
                            <div class="card-body">
                                <div class="col-md-6 d-none">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label>{{ __('product_variants') }} <i class="text-danger">*</i></label><br>
                                            <b-form-radio-group v-model="type" :options="[
                                                { text: __('packet'), 'value': 'packet' },
                                                { text: __('loose'), 'value': 'loose' },
                                            ]" buttons button-variant="outline-primary"></b-form-radio-group>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="control-label">Available Quantity <i
                                                    class="text-danger">*</i></label><br>
                                            <b-form-radio-group v-model="is_unlimited_stock" :options="[
                                                { text: __('limited'), 'value': 0 },
                                                { text: __('unlimited'), 'value': 1 },
                                            ]" buttons button-variant="outline-primary"></b-form-radio-group>
                                        </div>
                                    </div>
                                </div>

                                <div id="packate_div" class="list-group-item" v-if="type === 'packet'"
                                    v-for="(input, k) in inputs" :key="k">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>Variant Name <small class="text-muted">(Optional)</small></label>
                                                <input type="text" class="form-control" maxlength="255"
                                                    placeholder="Enter variant name" v-model="input.variant_name">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>{{ __('unit') }} <i class="text-danger">*</i></label>
                                                <select class="form-control" @change="changeUnits()"
                                                    v-model="input.packet_stock_unit_id">
                                                    <option value="">{{ __('select_unit') }}</option>

                                                    <option v-for="(unit, key) in units" :value="unit.id">{{
                                                        unit.short_code }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>{{ __('measurement') }}</label>
                                                <input type="number" min="0" step="any" class="form-control"
                                                    placeholder="0" v-model="input.packet_measurement">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>Color Variant</label>
                                                <select class="form-control" :value="getPresetColor(input.color_variant)"
                                                    @change="setVariantColor(input, $event.target.value)">
                                                    <option value="">Select Color</option>
                                                    <option v-for="color in colorVariantOptions" :key="color.value"
                                                        :value="color.value">{{ color.label }}</option>
                                                </select>
                                                <input type="text" class="form-control mt-2" maxlength="100"
                                                    placeholder="Or enter a custom color" v-model.trim="input.color_variant">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>Purchase Price ( {{ $currency }} )
                                                    <i class="fa fa-info-circle text-muted" v-b-tooltip.hover
                                                        title="This field is used to calculate in your report"></i>
                                                </label>
                                                <input type="number" min="0" step="any" class="form-control"
                                                    placeholder="0.00" v-model="input.packet_purchase_price">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                 <label>MRP ( {{ $currency }} ) <i class="text-danger">*</i></label>
                                                 <input type="number" min="0" step="any" class="form-control"
                                                    placeholder="0.00" v-model="input.packet_price"
                                                    @input="syncPacketSalePriceFromDiscount(input)" required>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                 <label>Sale Price ( {{ $currency }} )</label>
                                                <input type="number" min="0" step="any" class="form-control"
                                                    placeholder="0.00" v-model="input.packet_sale_price"
                                                    @input="setPacketSalePrice(input)">
                                                <span v-if="input.validationErrorSalePrice" class="error">{{
                                                    input.validationErrorSalePrice }}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>Discount on MRP(%)</label>
                                                <input type="number" min="0" step="any" class="form-control"
                                                    placeholder="0.00" v-model="input.discount_percentage"
                                                    @input="setPacketDiscountMode(input, 'percent')">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>Discount on MRP(Rs)</label>
                                                <input type="number" min="0" step="any" class="form-control"
                                                    placeholder="0.00" v-model="input.discounted_price"
                                                    @input="setPacketDiscountMode(input, 'amount')">
                                                <span v-if="input.validationErrorDiscountedPrice" class="error">{{
                                                    input.validationErrorDiscountedPrice }}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>Profit(%)</label>
                                                <input type="text" class="form-control bg-light"
                                                    :value="getPacketProfitPercentage(input)" readonly>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>Profit(Rs)</label>
                                                <input type="text" class="form-control bg-light"
                                                    :value="getPacketProfit(input)" readonly>
                                            </div>
                                        </div>
                                        <div class="col-md-4" v-if="is_unlimited_stock != 1">
                                            <div class="form-group mb-3">
                                                <label>Available Quantity <i class="text-danger">*</i></label>
                                                <input type="number" step="any" min="0" class="form-control"
                                                    placeholder="0" name="packate_stock[]" v-model="input.packet_stock">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>{{ __('status') }} <i class="text-danger">*</i></label>
                                                <select class="form-control" v-model="input.packet_status"
                                                    required>
                                                    <option value="">{{ __('select_status') }}</option>
                                                    <option value="1">{{ __('available') }}</option>
                                                    <option value="0">{{ __('sold_out') }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>Expiry Date From <small class="text-muted">(DD/MM/YYYY)</small></label>
                                                <input type="date" class="form-control" v-model="input.expiry_date_from">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group mb-3">
                                                <label>Expiry Date To <small class="text-muted">(DD/MM/YYYY)</small></label>
                                                <input type="date" class="form-control" v-model="input.expiry_date_to">
                                            </div>
                                        </div>
                                        <div class="col-md-12" v-if="k !== 0">
                                            <div class="form-group mb-3">
                                                <label>Variant Barcodes <small class="text-muted">(Optional)</small></label>
                                                <div class="row g-2 mb-2" v-for="(variantBarcode, barcodeIndex) in input.barcodes"
                                                    :key="'packet_barcode_' + k + '_' + barcodeIndex">
                                                    <div class="col-md-10">
                                                        <input type="text" class="form-control" placeholder="Enter barcode"
                                                            v-model="input.barcodes[barcodeIndex]">
                                                    </div>
                                                    <div class="col-md-2">
                                                        <button type="button" class="btn btn-danger w-100"
                                                            @click="removeVariantBarcode(input, barcodeIndex)"
                                                            :disabled="input.barcodes.length === 1">
                                                            <i class="fa fa-minus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="btn btn-outline-primary btn-sm"
                                                    @click="addVariantBarcode(input)">
                                                    <i class="fa fa-plus"></i> Add Barcode
                                                </button>
                                                <p v-if="input.barcodeError" class="error mb-0">{{ input.barcodeError }}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-12" v-if="k !== 0">
                                            <div class="form-group">
                                                <label>{{ __('variant_images') }} <small class="text-muted">(Multiple allowed)</small></label>
                                                <input type="file" accept="image/*" :ref="'packet_variant_images_' + k"
                                                    multiple class="file-input" v-on:change="variantImagesChanges(k)">

                                                <div class="file-input-div bg-gray-100"
                                                    @click="openVariantImagePicker(k, 'packet')"
                                                    @dragover="$dragoverFile" @dragleave="$dragleaveFile">
                                                    <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                                                    <label>{{ __('drop_files_here_or_click_to_upload') }}</label>
                                                </div>

                                                <span class="text text-primary">{{ __('please_choose_square_image_of_larger_than_350px_350px_and_smaller_than_550px_550px') }}</span>
                                                <p v-if="variantImageerror" class="error">{{ variantImageerror }}</p>
                                                <div class="row">
                                                     <div class="col-md-2 image-container"
                                                         v-for="(image, index) in (variantImages[k] || [])" :key="'packet_new_image_' + k + '_' + index"
                                                         draggable="true" @dragstart="startMediaDrag('packet-new', index, k)"
                                                         @dragover.prevent @drop.prevent="dropMedia('packet-new', index, k)" @dragend="endMediaDrag">
                                                        <span class="media-order-badge">{{ (input.images || []).length + index + 1 }}</span>
                                                         <img class="img-thumbnail custom-image" :src="image.url"
                                                            title='Selected Variant Image'
                                                            alt='Selected Variant Image' />
                                                    </div>
                                                </div>

                                                <div class="row">
                                                     <div class="col-md-2 image-container"
                                                         v-for="(image, index) in (input.images || [])" :key="'packet_image_' + image.id"
                                                         draggable="true" @dragstart="startMediaDrag('packet-existing', index, k)"
                                                         @dragover.prevent @drop.prevent="dropMedia('packet-existing', index, k)" @dragend="endMediaDrag">
                                                        <span class="media-order-badge">{{ image.sort_order || index + 1 }}</span>
                                                         <img class="img-thumbnail custom-image"
                                                            :src="$storageUrl + image.image" title='Variant Image'
                                                            alt='Variant Image' />
                                                        <button type="button"
                                                            @click="deleteImage(index, image.id, false, k)"
                                                            class="btn btn-sm btn-danger btn-remove"> <i
                                                                class="fa fa-times-circle"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-md-2 offset-md-10 text-end" v-if="k === 0">
                                            <a style="cursor: pointer;" class="btn btn-primary" v-b-tooltip.hover
                                                title="Add variant of product" @click="addRow">
                                                <i class="fa fa-plus-square"></i> {{ __('add_variant') }}
                                            </a>
                                        </div>
                                        <div class="col-md-2 offset-md-10 text-end" v-if="k !== 0">
                                            <a style="cursor: pointer;" class="btn btn-danger" v-b-tooltip.hover
                                                title="Remove variant of product" @click="remove(k)">
                                                <i class="fa fa-times"></i> {{ __('remove_variant') }}
                                            </a>
                                        </div>

                                    </div>
                                </div>

                                <div id="loose_div" v-if="type === 'loose'">
                                    <div class="list-group-item" v-for="(input, k) in inputs" :key="k">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group mb-3 loose_div">
                                                    <label>Variant Name <small class="text-muted">(Optional)</small></label>
                                                    <input type="text" class="form-control" maxlength="255"
                                                        placeholder="Enter variant name" v-model="input.variant_name">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group mb-3">
                                                    <label>{{ __('unit') }} <i class="text-danger">*</i></label>
                                                    <select class="form-control" name="loose_stock_unit_id"
                                                        v-model="loose_stock_unit_id">
                                                        <option value="">{{ __('select_unit') }}</option>
                                                        <option v-for="(unit, key) in units" :value="unit.id">{{ unit.short_code
                                                            }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group loose_div">
                                                    <label>{{ __('measurement') }}</label>
                                                    <input type="number" step="any" min="0" class="form-control"
                                                        placeholder="0" v-model="input.loose_measurement">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group mb-3 loose_div">
                                                    <label>Color Variant</label>
                                                    <select class="form-control" :value="getPresetColor(input.color_variant)"
                                                        @change="setVariantColor(input, $event.target.value)">
                                                        <option value="">Select Color</option>
                                                        <option v-for="color in colorVariantOptions" :key="color.value"
                                                            :value="color.value">{{ color.label }}</option>
                                                    </select>
                                                    <input type="text" class="form-control mt-2" maxlength="100"
                                                        placeholder="Or enter a custom color" v-model.trim="input.color_variant">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group mb-3 loose_div">
                                                    <label>Purchase Price ( {{ $currency }} )</label>
                                                    <input type="number" step="any" min="0" class="form-control"
                                                        placeholder="0.00" v-model="input.loose_purchase_price">
                                                </div>
                                            </div>

                                            <div class="col-md-4">
                                                <div class="form-group mb-3 loose_div">
                                                     <label>MRP ( {{ $currency }} ): <i class="text-danger">*</i></label>
                                                     <input type="number" step="any" min="0" class="form-control"
                                                        placeholder="0.00" v-model="input.loose_price"
                                                        @input="syncLooseSalePriceFromDiscount(input)" required>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group mb-3 loose_div">
                                                     <label>Sale Price ( {{ $currency }} )</label>
                                                    <input type="number" step="any" min="0" class="form-control"
                                                        placeholder="0.00" v-model="input.loose_sale_price"
                                                        @input="setLooseSalePrice(input)">
                                                    <span v-if="input.validationErrorSalePriceLoose" class="error">{{
                                                        input.validationErrorSalePriceLoose }}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group mb-3 loose_div">
                                                    <label>Discount on MRP(%)</label>
                                                    <input type="number" step="any" min="0" class="form-control"
                                                        placeholder="0.00" v-model="input.loose_discount_percentage"
                                                        @input="setLooseDiscountMode(input, 'percent')">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group mb-3 loose_div">
                                                    <label>Discount on MRP(Rs)</label>
                                                    <input type="number" step="any" min="0" class="form-control"
                                                        placeholder="0.00" v-model="input.loose_discounted_price"
                                                        @input="setLooseDiscountMode(input, 'amount')">
                                                    <span v-if="input.validationErrorDiscountedPriceLoose"
                                                        class="error">{{
                                                            input.validationErrorDiscountedPriceLoose }}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group mb-3 loose_div">
                                                    <label>Profit(%)</label>
                                                    <input type="text" class="form-control bg-light"
                                                        :value="getLooseProfitPercentage(input)" readonly>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group mb-3 loose_div">
                                                    <label>Profit(Rs)</label>
                                                    <input type="text" class="form-control bg-light"
                                                        :value="getLooseProfit(input)" readonly>
                                                </div>
                                            </div>
                                            <div class="col-md-12" v-if="k !== 0">
                                                <div class="form-group mb-3 loose_div">
                                                    <label>Variant Barcodes <small class="text-muted">(Optional)</small></label>
                                                    <div class="row g-2 mb-2" v-for="(variantBarcode, barcodeIndex) in input.barcodes"
                                                        :key="'loose_barcode_' + k + '_' + barcodeIndex">
                                                        <div class="col-md-10">
                                                            <input type="text" class="form-control" placeholder="Enter barcode"
                                                                v-model="input.barcodes[barcodeIndex]">
                                                        </div>
                                                        <div class="col-md-2">
                                                            <button type="button" class="btn btn-danger w-100"
                                                                @click="removeVariantBarcode(input, barcodeIndex)"
                                                                :disabled="input.barcodes.length === 1">
                                                                <i class="fa fa-minus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <button type="button" class="btn btn-outline-primary btn-sm"
                                                        @click="addVariantBarcode(input)">
                                                        <i class="fa fa-plus"></i> Add Barcode
                                                    </button>
                                                    <p v-if="input.barcodeError" class="error mb-0">{{ input.barcodeError }}</p>
                                                </div>
                                            </div>
                                            <div class="col-md-12" v-if="k !== 0">
                                                <div class="form-group loose_div">
                                                    <label>{{ __('variant_images') }} <small class="text-muted">(Multiple allowed)</small></label>
                                                    <!--                                                @drop="dropFileStoreLogo"               -->
                                                    <input type="file" accept="image/*"
                                                        :ref="'loose_variant_images_' + k" multiple class="file-input"
                                                        v-on:change="variantImagesChanges(k)" @dragover="$dragoverFile"
                                                        @dragleave="$dragleaveFile">
                                                    <div class="file-input-div bg-gray-100"
                                                        @click="openVariantImagePicker(k, 'loose')">
                                                        <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                                                        <label>{{ __('drop_files_here_or_click_to_upload') }}</label>
                                                    </div>
                                                    <span class="text text-primary">{{ __('please_choose_square_image_of_larger_than_350px_350px_and_smaller_than_550px_550px') }}</span>

                                                    <div class="row">
                                                    <div class="col-md-2 image-container"
                                                        v-for="(image, index) in (input.loose_images || [])" :key="'loose_image_' + image.id"
                                                        draggable="true" @dragstart="startMediaDrag('loose-existing', index, k)"
                                                        @dragover.prevent @drop.prevent="dropMedia('loose-existing', index, k)" @dragend="endMediaDrag">
                                                            <span class="media-order-badge">{{ image.sort_order || index + 1 }}</span>
                                                            <img class="img-thumbnail custom-image"
                                                                :src="$storageUrl + image.image" title='Variant Image'
                                                                alt='Variant Image' />
                                                            <button type="button"
                                                                @click="deleteImage(index, image.id, false, k)"
                                                                class="btn btn-sm btn-danger btn-remove"> <i
                                                                    class="fa fa-times-circle"></i>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                    <div class="col-md-4 image-container"
                                                        v-for="(image, index) in (variantImages[k] || [])" :key="'loose_new_image_' + k + '_' + index"
                                                        draggable="true" @dragstart="startMediaDrag('loose-new', index, k)"
                                                        @dragover.prevent @drop.prevent="dropMedia('loose-new', index, k)" @dragend="endMediaDrag">
                                                            <span class="media-order-badge">{{ (input.loose_images || []).length + index + 1 }}</span>
                                                            <img class="img-thumbnail custom-image" :src="image.url"
                                                                title='Selected Variant Image'
                                                                alt='Selected Variant Image' />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-md-2 offset-md-10 text-end" v-if="k === 0">
                                                <a style="cursor: pointer;" class="btn btn-primary" v-b-tooltip.hover
                                                    title="Add variant of product" @click="addRow">
                                                    <i class="fa fa-plus-square"></i> {{ __('add_variant') }}
                                                </a>
                                            </div>
                                            <div class="col-md-2 offset-md-10 text-end" v-if="k !== 0">
                                                <a style="cursor: pointer;" class="btn btn-danger" v-b-tooltip.hover
                                                    title="Remove variant of product" @click="remove(k)">
                                                    <i class="fa fa-times"></i> {{ __('remove_variant') }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3" id="loose_stock_div" v-if="type === 'loose'">
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>{{ __('purchase_price') }} ( {{ $currency }} )
                                                <i class="fa fa-info-circle text-muted" v-b-tooltip.hover
                                                    title="This field is used to calculate in your report"></i>
                                            </label>
                                            <input type="number" step="any" min="0" class="form-control"
                                                placeholder="0.00" v-model="loose_purchase_price">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>Profit ( {{ $currency }} )</label>
                                            <input type="text" class="form-control bg-light"
                                                :value="getLooseProfit()" readonly>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>Margin %</label>
                                            <input type="text" class="form-control bg-light"
                                                :value="getLooseMargin()" readonly>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group mb-3" v-if="is_unlimited_stock != 1">
                                            <label>Available Quantity <i class="text-danger">*</i></label>
                                            <input type="number" step="any" min="0" class="form-control"
                                                v-model="loose_stock"><br>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>{{ __('unit') }} <i class="text-danger">*</i></label>
                                            <select class="form-control" name="loose_stock_unit_id"
                                                v-model="loose_stock_unit_id">
                                                <option value="">{{ __('select_unit') }}</option>
                                                <option v-for="(unit, key) in units" :value="unit.id">{{ unit.short_code
                                                    }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>{{ __('status') }} <i class="text-danger">*</i></label>
                                            <select name="status" class="form-control" v-model="status">
                                                <option value="">{{ __('select_status') }}</option>
                                                <option value="1">{{ __('available') }}</option>
                                                <option value="0">{{ __('sold_out') }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <template v-for="(input, k) in inputs">
                                        <div class="col-md-4" :key="'loose_expiry_from_' + k">
                                            <div class="form-group mb-3 loose_div">
                                                <label>Expiry Date From - Variant {{ k + 1 }}
                                                    <small class="text-muted">(DD/MM/YYYY)</small></label>
                                                <input type="date" class="form-control" v-model="input.expiry_date_from">
                                            </div>
                                        </div>
                                        <div class="col-md-4" :key="'loose_expiry_to_' + k">
                                            <div class="form-group mb-3 loose_div">
                                                <label>Expiry Date To - Variant {{ k + 1 }}
                                                    <small class="text-muted">(DD/MM/YYYY)</small></label>
                                                <input type="date" class="form-control" v-model="input.expiry_date_to">
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>


                        <!-- Non-translatable Fields: Show regardless of language tabs since they are hidden -->
                        <div class="card">
                            <div class="card-header">
                                <h4>{{ __('product_settings') }}</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <!-- Row: Category, Product type, Product status -->
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>{{ __('category') }} <i class="text-danger">*</i></label>
                                            <select class="form-control" v-model="product_category_id" required>
                                                <option value="">{{ __('select_category') }}</option>
                                                <option v-for="category in mainCategoryOptions" :key="category.id"
                                                    :value="category.id">{{ category.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>SubCategory</label>
                                            <select class="form-control" v-model="product_subcategory_id"
                                                :disabled="!product_category_id">
                                                <option value="">Select SubCategory</option>
                                                <option v-for="category in subCategoryOptions" :key="category.id"
                                                    :value="category.id">{{ category.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>Sub SubCategory</label>
                                            <select class="form-control" v-model="product_sub_subcategory_id"
                                                :disabled="!product_subcategory_id">
                                                <option value="">Select Sub SubCategory</option>
                                                <option v-for="category in subSubCategoryOptions" :key="category.id"
                                                    :value="category.id">{{ category.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>Sub Sub SubCategory</label>
                                            <select class="form-control" v-model="product_sub_sub_subcategory_id"
                                                :disabled="!product_sub_subcategory_id">
                                                <option value="">Select Sub Sub SubCategory</option>
                                                <option v-for="category in subSubSubCategoryOptions" :key="category.id"
                                                    :value="category.id">{{ category.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group mb-3">
                                            <label>{{ __('additional_categories') }} <span class="text-muted small">({{ __('optional') }})</span></label>
                                            <multiselect
                                                v-model="additional_category_ids"
                                                :options="allCategoryOptions"
                                                :placeholder="__('select_additional_categories')"
                                                label="name"
                                                track-by="id"
                                                :multiple="true"
                                                :searchable="true">
                                                <template slot="singleLabel" slot-scope="props">
                                                    <span class="option__desc">
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                    </span>
                                                </template>
                                                <template slot="option" slot-scope="props">
                                                    <div class="option__desc">
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                    </div>
                                                </template>
                                            </multiselect>
                                            <small class="text-muted">{{ __('select_multiple_categories_to_show_product_in') }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>{{ __('product_type') }} </label>
                                            <select class="form-control" v-model="product_type">
                                                <option value="">{{ __('select_type') }}</option>
                                                <option value="1">{{ __('veg') }}</option>
                                                <option value="2">{{ __('non_veg') }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <input type="hidden" v-model="is_approved">

                                    <div class="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="made_in">{{ __('made_in') }}</label>
                                            <multiselect id="made_in" v-model="made_in" :options="countries"
                                                :placeholder="__('select_and_search_country_name')" label="name"
                                                track-by="name" required>
                                                <template slot="singleLabel" slot-scope="props">
                                                    <span class="option__desc">
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                    </span>
                                                </template>
                                                <template slot="option" slot-scope="props">
                                                    <div class="option__desc">

                                                        <span class="option__title">{{ props.option.name }}</span>
                                                        <span class="option__small">[{{ props.option.code }}]</span>
                                                    </div>
                                                </template>
                                            </multiselect>

                                        </div>
                                    </div>

                                    <!-- Row: Is returnable, Is cancelable, Is COD allowed -->
                                    <div class="col-md-4">
                                        <div class="form-group mb-3 d-flex flex-wrap align-items-start gap-2">
                                            <div>
                                                <label>{{ __('is_returnable') }}</label><br>
                                                <b-form-radio-group v-model="return_status" :options="[
                                                    { text: __('no'), 'value': 0 },
                                                    { text: __('yes'), 'value': 1 },
                                                ]" buttons button-variant="outline-primary" required></b-form-radio-group>
                                            </div>
                                            <div v-if="return_status == 1" class="ms-2">
                                                <label for="return_day">{{ __('max_return_days') }}</label>
                                                <input type="number" step="any" :min="return_status == 1 ? 1 : 0"
                                                    :required="return_status == 1 ? true : undefined" id="return_day"
                                                    class="form-control" :placeholder="__('number_of_days_to_return')"
                                                    v-model="return_days">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mb-3 d-flex flex-wrap align-items-start gap-2">
                                            <div>
                                                <label>{{ __('is_cancelable') }}</label><br>
                                                <b-form-radio-group v-model="cancelable_status" :options="[
                                                    { text: __('no'), 'value': 0 },
                                                    { text: __('yes'), 'value': 1 },
                                                ]" buttons button-variant="outline-primary"></b-form-radio-group>
                                            </div>
                                            <div v-if="cancelable_status === 1" class="ms-2">
                                                <label for="till_status">{{ __('till_which_status') }} <i
                                                    class="text-danger">*</i></label>
                                                <select id="till_status" class="form-control"
                                                    v-model="till_status"
                                                    :required="cancelable_status === 1 ? true : undefined">
                                                    <option value="">{{ __('select_order_status') }}</option>
                                                    <option v-for="status in order_status" :value="status.id">{{
                                                        getStatusDisplayName(status) }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>{{ __('is_cod_allowed') }}</label><br>
                                            <b-form-radio-group v-model="cod_allowed_status" :options="[
                                                { text: __('no'), 'value': 0 },
                                                { text: __('yes'), 'value': 1 },
                                            ]" buttons button-variant="outline-primary"></b-form-radio-group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card" v-if="defaultLanguageId">
                            <div class="card-header">
                                <h4>{{ __('seo_settings') }}</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group mb-3">
                                            <label>{{ __('meta_title') }} </label>
                                            <input type="text" class="form-control"
                                                v-model="translations[defaultLanguageId].meta_title"
                                                :placeholder="__('enter_meta_title')">
                                        </div>
                                        <div class="form-group mb-3">
                                            <label>{{ __('meta_keywords') }} </label>
                                            <input type="text" class="form-control"
                                                v-model="translations[defaultLanguageId].meta_keywords"
                                                :placeholder="__('enter_meta_keywords')">
                                        </div>
                                        <div class="form-group mb-3">
                                            <label>{{ __('schema_markup') }} </label>
                                            <input type="text" class="form-control"
                                                v-model="translations[defaultLanguageId].schema_markup"
                                                :placeholder="__('enter_schema_markup')">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mb-3">
                                            <label>{{ __('meta_description') }} </label>
                                            <textarea type="text" class="form-control"
                                                v-model="translations[defaultLanguageId].meta_description"
                                                :placeholder="__('enter_meta_description')" rows="2"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Save and Clear buttons -->
                            <div class="card-footer">
                                <b-button type="submit" @keydown.enter="saveRecord" variant="primary"
                                    :disabled="isLoading"> {{ __('save') }}
                                    <b-spinner v-if="isLoading" small label="Spinning"></b-spinner>
                                </b-button>
                                <button type="button" class="btn btn-danger" @click="clearForm">{{ __('clear')
                                    }}</button>
                            </div>
                        </div>

                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
// import InputTag from 'vue-input-tag';
import axios from "axios";
import Multiselect from 'vue-multiselect'
import Editor from '@tinymce/tinymce-vue';
import Auth from '../../Auth.js';
import TranslationHelper from '../../mixins/TranslationHelper.js';

export default {
    mixins: [TranslationHelper],
    // register the component
    components: { Multiselect, 'editor': Editor },
    data: function () {
        return {
            login_user: Auth.user,
            isLoading: false,
            isGeneratingAI: false, // Track AI content generation state
            cacheTimer: null,
            cachedData: null,
            skipCache: false,

            name: '',
            slug: '',
            seller_id: '',
            brand: null,
            tax_id: 0,
            type: 'packet',
            category_id: '',
            product_category_id: '',
            product_subcategory_id: '',
            product_sub_subcategory_id: '',
            product_sub_sub_subcategory_id: '',
            additional_category_ids: [], // For multi-category support
            product_type: '',
            made_in: '',
            tag: '',
            allowedOtherMediaTypes: [
                'image/jpeg',
                'image/png',
                'image/gif',
                'image/webp',
                'video/mp4',
            ],
            maxOtherMediaSize: 3 * 1024 * 1024,
            colorVariantOptions: [
                { value: 'black', label: 'Black' },
                { value: 'white', label: 'White' },
                { value: 'red', label: 'Red' },
                { value: 'blue', label: 'Blue' },
                { value: 'green', label: 'Green' },
                { value: 'yellow', label: 'Yellow' },
                { value: 'orange', label: 'Orange' },
                { value: 'pink', label: 'Pink' },
                { value: 'purple', label: 'Purple' },
                { value: 'brown', label: 'Brown' },
                { value: 'cream', label: 'Cream' },
                { value: 'grey', label: 'Grey' },
                { value: 'gold', label: 'Gold' },
                { value: 'silver', label: 'Silver' },
                { value: 'multi_color', label: 'Multi Color' },
            ],

            return_status: 0,
            return_days: 1,
            cancelable_status: 0,
            till_status: "",
            cod_allowed_status: 1,
            max_allowed_quantity: 0,
            description: '',
            highlights: '',
            require_products_approval: 0,
            is_approved: 1,
            loose_stock: 0,
            loose_stock_unit_id: "",
            status: 1,
            is_unlimited_stock: 0,
            loose_purchase_price: 0,
            loose_discount_percentage: 0,
            tax_included_in_price: 0,
            pincode_ids_exc: null,

            sellers: null,
            taxes: null,
            units: [],
            brands: [],
            countries: [],

            categories: null,
            order_status: null,

            inputs: [{
                name: '',
                variant_name: '',
                packet_status: 1,
                packet_stock: 0,
                packet_stock_unit_id: '',
                discount_percentage: 0,
                discounted_price: 0,
                packet_sale_price: '',
                discount_mode: 'percent',
                loose_purchase_price: 0,
                loose_discount_percentage: 0,
                loose_discounted_price: 0,
                loose_sale_price: '',
                loose_discount_mode: 'percent',
                color_variant: '',
                expiry_date_from: '',
                expiry_date_to: '',
                barcodes: [''],
                barcodeError: '',
                images: [],
                loose_images: [],
            }],

            image: null,
            main_image_path: "",
            main_image_name: "",


            other_images: null,
            images: [],
            variantImages: {},
            draggedMedia: null,
            id: null,
            record: null,
            clone: false,
            categoryOptions: '<option value="">' + __('select_category') + '</option>',
            productCategoryList: [],
            deleteImageIds: [],
            loggedUser: Auth.user,
            isBarcodeValid: '',
            input: [],
            mainImageerror: null,
            otherImageerror: null,
            variantImageerror: null,
            barcode: "",
            meta_title: "",
            meta_keywords: "",
            schema_markup: "",
            meta_description: "",
            validationBarcodeMessage: "",
            useCustomPrompt: false,
            customPrompt: '',
            loading: false,
            textGenKey: '',
            // Multi-language support
            isLoadingLanguages: false,
            activeLanguageTab: 0,
            translations: {},
            defaultLanguageId: null,
            languages: [],
            currentLanguageId: null,
            activeLanguages: [],
            categories: [], // Store categories data for translation

            // Translate buttons
            translatableFields: ['name', 'description', 'highlights', 'meta_title', 'meta_keywords', 'schema_markup', 'meta_description'],
            translateSuccessMessage: '',
            loadingEmpty: false,
            loadingOverwrite: false,

            // Cache helpers
            cacheTimer: null,
            cachedData: null,
            skipCache: false,
        }
    },

    computed: {
        isSellerRoute() {
            // Use this.$route to access the current route
            return this.$route.path.startsWith('/seller/');
        },
        // Computed property to safely access $roleSeller
        roleSeller() {
            return (this.$roleSeller !== undefined) ? this.$roleSeller : '';
        },
        // Computed property to check if current user is seller
        isSellerRole() {
            try {
                return this.login_user && this.login_user.role && this.login_user.role.name && this.roleSeller && this.roleSeller === this.login_user.role.name;
            } catch (e) {
                return false;
            }
        },
        canUseAIGenerate() {
            const user = Auth.user || this.login_user;
            return this.$isDemo != 1 && user && user.id == 1;
        },
        translatedSellers: function () {
            if (!this.currentLanguageId || !this.sellers || this.sellers.length === 0) {
                return this.sellers || [];
            }

            const defaultLanguage = this.activeLanguages.find(lang => lang.is_default === 1);
            const defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;

            return this.sellers.map(seller => {
                const translatedSeller = { ...seller };
                let translatedName = seller.name;

                if (seller.translations && Array.isArray(seller.translations)) {
                    let translation = seller.translations.find(
                        t => t.language_id === this.currentLanguageId
                    );

                    if (!translation && defaultLanguageId) {
                        translation = seller.translations.find(
                            t => t.language_id === defaultLanguageId
                        );
                    }

                    if (translation && translation.name && translation.name.trim() !== '') {
                        translatedName = translation.name;
                    }
                }

                translatedSeller.name = translatedName;
                return translatedSeller;
            });
        },
        translatedBrands: function () {
            if (!this.currentLanguageId || !this.brands || this.brands.length === 0) {
                return this.brands || [];
            }

            const defaultLanguage = this.activeLanguages.find(lang => lang.is_default === 1);
            const defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;

            return this.brands.map(brand => {
                const translatedBrand = { ...brand };
                let translatedTitle = brand.title || brand.name;

                if (brand.translations && Array.isArray(brand.translations)) {
                    let translation = brand.translations.find(
                        t => t.language_id === this.currentLanguageId
                    );

                    if (!translation && defaultLanguageId) {
                        translation = brand.translations.find(
                            t => t.language_id === defaultLanguageId
                        );
                    }

                    if (translation && translation.title && translation.title.trim() !== '') {
                        translatedTitle = translation.title;
                    }
                }

                translatedBrand.name = translatedTitle;
                translatedBrand.title = translatedTitle;
                return translatedBrand;
            });
        },
        translatedTaxes: function () {
            if (!this.currentLanguageId || !this.taxes || this.taxes.length === 0) {
                return this.taxes || [];
            }

            const defaultLanguage = this.activeLanguages.find(lang => lang.is_default === 1);
            const defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;

            return this.taxes.map(tax => {
                const translatedTax = { ...tax };
                let translatedTitle = tax.title;

                if (tax.translations && Array.isArray(tax.translations)) {
                    let translation = tax.translations.find(
                        t => t.language_id === this.currentLanguageId
                    );

                    if (!translation && defaultLanguageId) {
                        translation = tax.translations.find(
                            t => t.language_id === defaultLanguageId
                        );
                    }

                    if (translation && translation.title && translation.title.trim() !== '') {
                        translatedTitle = translation.title;
                    }
                }

                translatedTax.title = translatedTitle;
                return translatedTax;
            });
        },
        translatedCategories: function () {
            if (!this.currentLanguageId || !this.categories || this.categories.length === 0) {
                return this.categories || [];
            }

            const defaultLanguage = this.activeLanguages.find(lang => lang.is_default === 1);
            const defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;

            return this.categories.map(category => {
                const translatedCategory = { ...category };
                let translatedName = category.name;

                if (category.translations && Array.isArray(category.translations)) {
                    let translation = category.translations.find(
                        t => t.language_id === this.currentLanguageId
                    );

                    if (!translation && defaultLanguageId) {
                        translation = category.translations.find(
                            t => t.language_id === defaultLanguageId
                        );
                    }

                    if (translation && translation.name && translation.name.trim() !== '') {
                        translatedName = translation.name;
                    }
                }

                translatedCategory.name = translatedName;
                return translatedCategory;
            });
        },
        categoryOptionsHtml: function () {
            return this.categoryOptions;
        },
        mainCategoryOptions() {
            return this.productCategoryList.filter(category => Number(category.parent_id) === 0);
        },
        subCategoryOptions() {
            return this.productCategoryList.filter(category => {
                return Number(category.parent_id) === Number(this.product_category_id);
            });
        },
        subSubCategoryOptions() {
            return this.productCategoryList.filter(category => {
                return Number(category.parent_id) === Number(this.product_subcategory_id);
            });
        },
        subSubSubCategoryOptions() {
            return this.productCategoryList.filter(category => {
                return Number(category.parent_id) === Number(this.product_sub_subcategory_id);
            });
        },
        allCategoryOptions() {
            // Return all categories for multi-select, excluding the primary category
            const primaryCategoryId = this.selectedProductCategoryId;
            return this.productCategoryList.filter(category => {
                return Number(category.id) !== Number(primaryCategoryId);
            });
        },
        selectedProductCategoryId() {
            return this.product_sub_sub_subcategory_id || this.product_sub_subcategory_id || this.product_subcategory_id || this.product_category_id || '';
        },
    },

    created: function () {
        this.id = this.$route.params.id || null;
        this.clone = this.$route.params.clone || false;

        this.fetchActiveLanguages().then(() => {
            this.getSellers();
            this.getTaxes();
            this.getUnits();
            this.getBrands();
            this.getCountries();
            this.getOrderStatus();
            this.getTextGenKey();
            if (this.isSellerRole) {
                this.seller_id = this.login_user.seller.id;
                this.getSeller();
            }
            this.getCategories();
            if (this.id) {
                this.getProduct();
            } else {
                this.restoreCache();
            }
        });
    },
    beforeDestroy: function () {
        if (!this.id && !this.clone && !this.skipCache) this.saveCache();
        if (this.cacheTimer) clearTimeout(this.cacheTimer);
    },
    methods: {
        validateDefaultLanguageForTranslation() {
            const form = this.$refs['my-form'];

            // Trigger native browser validation UI
            if (form && !form.reportValidity()) {
                // Switch to default language tab so error field is visible
                this.$nextTick(() => {
                    this.switchToDefaultLanguageTab();
                });
                return false;
            }

            // Also validate required fields specifically
            return this.validateDefaultLanguage();
        },
        fetchActiveLanguages() {
            this.isLoadingLanguages = true;
            return axios.get(this.$apiUrl + '/active_languages')
                .then(response => {
                    if (response.data.data) {
                        this.languages = response.data.data;
                        this.activeLanguages = response.data.data;
                        const defaultLang = this.languages.find(lang => lang.is_default === 1);
                        if (defaultLang) {
                            this.defaultLanguageId = defaultLang.id;
                        }

                        // Get current language ID from app_locale
                        const appLocale = window.appLocale || 'en';
                        const currentLanguage = this.activeLanguages.find(
                            lang => lang.code === appLocale
                        );
                        if (currentLanguage) {
                            this.currentLanguageId = currentLanguage.id;
                        } else if (defaultLang) {
                            this.currentLanguageId = defaultLang.id;
                        }

                        this.initializeTranslations();
                        this.isLoadingLanguages = false;
                    } else {
                        this.isLoadingLanguages = false;
                    }
                })
                .catch(error => {
                    console.error('Error loading languages:', error);
                    this.isLoadingLanguages = false;
                });
        },

        initializeTranslations() {
            const allTranslations = {};
            this.languages.forEach(language => {
                allTranslations[language.id] = {
                    name: '',
                    description: '',
                    highlights: '',
                    meta_title: '',
                    meta_keywords: '',
                    schema_markup: '',
                    meta_description: ''
                };
            });
            this.translations = allTranslations;
        },

        // Handle input events for default language fields
        handleDefaultLanguageInput(fieldName, language) {
            if (language.is_default && this.translations[language.id]) {
                // Update the main data property with the translation value
                this[fieldName] = this.translations[language.id][fieldName];

                // Special handling for name field - also create slug
                if (fieldName === 'name') {
                    this.createSlug();
                }
            }
        },


        getEditorConfig() {
            const plugins = (this.$editorPlugins && Array.isArray(this.$editorPlugins))
                ? this.$editorPlugins
                : ["autolink", "lists", "link", "image", "charmap", "anchor", "searchreplace", "visualblocks", "media", "table", "wordcount", "code", "codesample"];

            const toolbar = this.$editorToolbar || "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | charmap | code | removeformat";

            const fontSizes = this.$editorFont_size_formats || '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt';

            return {
                height: 400,
                plugins: plugins,
                toolbar: toolbar,
                font_size_formats: fontSizes,
                ...this.$tinymceImageUploadOptions()
            };
        },

        // Helper method to safely trigger file input click (handles refs in v-for)
        triggerRefClick(refName) {
            this.$nextTick(() => {
                try {
                    const ref = this.$refs[refName];
                    if (!ref) {
                        return;
                    }
                    // Handle array case (refs inside v-for)
                    if (Array.isArray(ref)) {
                        // Find first valid element in array
                        for (let i = 0; i < ref.length; i++) {
                            if (ref[i] && typeof ref[i].click === 'function') {
                                ref[i].click();
                                return;
                            }
                        }
                        return;
                    }
                    // Handle single ref case
                    if (typeof ref.click === 'function') {
                        ref.click();
                    }
                } catch (e) {
                    console.warn('Error triggering file input click:', e);
                }
            });
        },

        validateDefaultLanguage() {
            if (!this.defaultLanguageId) {
                this.showError(__('default_language_not_found'));
                return false;
            }

            const defaultTranslation = this.translations[this.defaultLanguageId];

            if (!defaultTranslation.name || defaultTranslation.name.trim() === '') {
                this.showError(__('please_fill_product_name_in_default_language'));
                this.switchToDefaultLanguageTab();
                return false;
            }

            if (!defaultTranslation.description || defaultTranslation.description.trim() === '') {
                this.showError(__('please_fill_description_in_default_language'));
                this.switchToDefaultLanguageTab();
                return false;
            }

            if (!this.product_category_id) {
                this.showError(__('please_select_category'));
                this.switchToDefaultLanguageTab();
                return false;
            }

            return true;
        },

        switchToDefaultLanguageTab() {
            const defaultLangIndex = this.languages.findIndex(lang => lang.id === this.defaultLanguageId);
            if (defaultLangIndex !== -1) {
                this.activeLanguageTab = defaultLangIndex;
            }
        },

        loadTranslations() {
            if (!this.id) return;

            // Wait for languages to be loaded first
            if (this.languages.length === 0) {
                this.fetchActiveLanguages().then(() => {
                    this.loadTranslationsData();
                });
                return;
            }

            this.loadTranslationsData();
        },

        // Load translations from API response (translations array with all language records)
        loadTranslationsData() {
            if (!this.record || !this.record.translations || !Array.isArray(this.record.translations)) {
                return;
            }

            const translationsArray = this.record.translations;

            this.languages.forEach(language => {
                const translation = translationsArray.find(t => t.language_id === language.id);
                if (translation) {
                    this.$set(this.translations[language.id], 'name', translation.name || '');
                    this.$set(this.translations[language.id], 'description', translation.description || '');
                    this.$set(this.translations[language.id], 'highlights', translation.highlights || '');
                    this.$set(this.translations[language.id], 'meta_title', translation.meta_title || '');
                    this.$set(this.translations[language.id], 'meta_keywords', translation.meta_keywords || '');
                    this.$set(this.translations[language.id], 'schema_markup', translation.schema_markup || '');
                    this.$set(this.translations[language.id], 'meta_description', translation.meta_description || '');
                }
            });
        },

        async generateDescription() {
            if (this.$isDemo == 1) {
                this.showError("This function is not available in demo mode.");
                return;
            }
            if (!this.name) {
                this.showMessage("error", "Please enter the product name.");
                return;
            }

            if (!this.textGenKey) {
                this.showMessage("error", "Text generation API key is not configured");
                return;
            }

            const prompt = this.useCustomPrompt && this.customPrompt.trim()
                ? `${this.customPrompt} for product: ${this.name}. Output raw HTML only, no explanatory text, no code blocks, no images.`
                : `Generate a detailed product description for ${this.name} formatted for TinyMCE editor.
            Structure: Start with <strong>Product Overview</strong>, then multiple <p> paragraphs describing features and benefits.
            Include <strong>Key Features</strong> with <ul><li> bullet points.
            Add <strong>Benefits</strong> section with more <p> content.
            Use <strong> for emphasis, <em> for highlights.
            Important: no code blocks, no markdown syntax, no explanatory text.`;

            try {
                this.isGeneratingAI = true; // Start AI processing state

                const response = await fetch(
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + this.textGenKey,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: prompt }] }]
                        })
                    }
                );

                const data = await response.json();

                if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
                    const generatedText = data.candidates[0].content.parts[0].text;
                    this.description = generatedText;
                    if (this.defaultLanguageId && this.translations[this.defaultLanguageId]) {
                        this.$set(this.translations[this.defaultLanguageId], 'description', generatedText);
                    }
                } else {
                    this.showMessage("error", "Failed to generate description.");
                }
            } catch (error) {
                this.showMessage("error", "An error occurred while generating the description.");
            } finally {
                this.isGeneratingAI = false; // Stop AI processing state
            }
        },

        createSlug() {
            if (this.name !== "") {
                this.slug = this.name
                    .normalize("NFD") // Normalize Unicode
                    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
                    .replace(/[^\p{L}\p{N}\s-]/gu, '') // Keep letters, numbers, spaces, and hyphens (any language)
                    .trim()
                    .replace(/\s+/g, '-') // Replace spaces with '-'
                    .toLowerCase();
            }
        },

        fetchTags(query) {
            if (query.length > 1) {
                axios.get(this.$apiUrl + '/products/tags', {
                    params: { search: query }
                })
                    .then(response => {
                        this.tagSuggestions = response.data;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        },
        getBlankVariantInput() {
            return {
                name: '',
                variant_name: '',
                packet_status: 1,
                packet_stock: 0,
                packet_stock_unit_id: '',
                discount_percentage: 0,
                discounted_price: 0,
                packet_sale_price: '',
                discount_mode: 'percent',
                loose_purchase_price: 0,
                loose_discount_percentage: 0,
                loose_discounted_price: 0,
                loose_sale_price: '',
                loose_discount_mode: 'percent',
                color_variant: '',
                expiry_date_from: '',
                expiry_date_to: '',
                barcodes: [''],
                barcodeError: '',
                images: [],
                loose_images: [],
            };
        },
        addRow() {
            const previous = this.inputs.length
                ? JSON.parse(JSON.stringify(this.inputs[this.inputs.length - 1]))
                : this.getBlankVariantInput();
            const duplicate = Object.assign(this.getBlankVariantInput(), previous, {
                id: '',
                barcodes: [''],
                barcodeError: '',
                images: [],
                loose_images: [],
            });

            this.inputs.push(duplicate);
            Vue.set(this.variantImages, this.inputs.length - 1, []);
        },
        remove(index) {
            let variant_id = (this.inputs[index].id) ? this.inputs[index].id : "";
            if (this.id && variant_id !== "") {
                this.$swal.fire({
                    title: "Are you Sure?",
                    text: "You want be able to revert this",
                    confirmButtonText: "Yes, Sure",
                    cancelButtonText: "Cancel",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#37a279',
                    cancelButtonColor: '#d33',
                }).then(result => {
                    if (result.value) {
                        let postData = {
                            id: variant_id
                        }
                        axios.post(this.$apiUrl + '/products/delete', postData)
                            .then((response) => {
                                let data = response.data;
                                this.inputs.splice(index, 1)
                                this.showSuccess(data.message)
                            });
                    }
                });
            } else {
                this.inputs.splice(index, 1)
            }
        },

        dropFile(event) {
            event.preventDefault();
            // Safely access file_image ref (can be array in v-for)
            const fileInput = Array.isArray(this.$refs.file_image)
                ? this.$refs.file_image[0]
                : this.$refs.file_image;

            if (fileInput) {
                fileInput.files = event.dataTransfer.files;
                this.fileImage(); // Trigger the onChange event manually
            }
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },

        fileImage() {
            // Safely access file_image ref (can be array in v-for)
            const fileInput = Array.isArray(this.$refs.file_image)
                ? this.$refs.file_image[0]
                : this.$refs.file_image;

            if (!fileInput) return;

            const file = fileInput.files[0];

            // Reset previous error message
            this.mainImageerror = null;

            // Check if a file was selected
            if (!file) return;

            // Perform image validation
            const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"];
            if (!validTypes.includes(file.type)) {
                this.mainImageerror = "Invalid file type. Please upload a JPEG, PNG, JPG,  GIF or WEBP image.";
                this.main_image_path = "";
                this.main_image_name = "";
                return;
            }

            const maxSize = 3 * 1024 * 1024; // 3MB
            if (file.size > maxSize) {
                this.mainImageerror = "File size exceeds the maximum allowed limit (3MB).";
                this.main_image_path = "";
                this.main_image_name = "";
                return;
            }

            // Create a URL for the uploaded image and display it
            this.imageUrl = URL.createObjectURL(file);
            this.image = fileInput.files[0];
            this.main_image_path = URL.createObjectURL(this.image);
            this.main_image_name = this.image.name;
        },
        dropFileOtherImage(event) {
            event.preventDefault();
            // Safely access file_other_images ref (can be array in v-for)
            const fileInput = Array.isArray(this.$refs.file_other_images)
                ? this.$refs.file_other_images[0]
                : this.$refs.file_other_images;

            if (fileInput) {
                fileInput.files = event.dataTransfer.files;
                this.otherImage(); // Trigger the onChange event manually
            }
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        removeOtherImage(index) {
            if (this.images[index] && this.images[index].url) {
                URL.revokeObjectURL(this.images[index].url);
            }
            this.images.splice(index, 1);
        },

        isVideoMedia(path) {
            return /\.(mp4)$/i.test(path || '');
        },

        otherImage() {
            this.otherImageerror = null;
            // Safely access file_other_images ref (can be array in v-for)
            const fileInput = Array.isArray(this.$refs.file_other_images)
                ? this.$refs.file_other_images[0]
                : this.$refs.file_other_images;

            if (!fileInput) return;

            const files = fileInput.files;

            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                if (!this.allowedOtherMediaTypes.includes(file.type)) {
                    this.otherImageerror = "Invalid file type. Please upload JPG, JPEG, PNG, GIF, WEBP images or MP4 videos.";
                    fileInput.value = "";
                    return;
                }

                if (file.size > this.maxOtherMediaSize) {
                    this.otherImageerror = "Each product image or video must be 3 MB or smaller.";
                    fileInput.value = "";
                    return;
                }

                let image = {};
                image.url = URL.createObjectURL(file);
                image.name = file.name;
                image.file = file; // Store the actual file object
                image.isVideo = file.type === 'video/mp4';
                this.images.push(image);
            }

            fileInput.value = "";
        },

        openVariantImagePicker(index, type) {
            const ref = this.$refs[type + '_variant_images_' + index];
            const input = Array.isArray(ref) ? ref[0] : ref;
            if (input) input.click();
        },
        variantImagesChanges(index) {
            const refName = this.type + '_variant_images_' + index;
            const ref = this.$refs[refName];
            const fileInput = Array.isArray(ref) ? ref[0] : ref;
            const files = fileInput && fileInput.files ? Array.from(fileInput.files) : [];
            const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
            const maxSizeInBytes = 5 * 1024 * 1024;
            const tempImages = [];

            this.variantImageerror = null;
            Vue.set(this.variantImages, index, []);

            for (const file of files) {
                const extension = file.name.split('.').pop().toLowerCase();

                if (!validExtensions.includes(extension)) {
                    this.variantImageerror = "Invalid file type. Please upload a JPEG, PNG, JPG, GIF or WEBP image.";
                    fileInput.value = '';
                    return;
                }

                if (file.size > maxSizeInBytes) {
                    this.variantImageerror = "Each variant image must be 5 MB or smaller.";
                    fileInput.value = '';
                    return;
                }

                tempImages.push({
                    url: URL.createObjectURL(file),
                    name: file.name,
                    file: file,
                });
            }

            Vue.set(this.variantImages, index, tempImages);
        },
        getMediaList(group, variantIndex = null) {
            if (group === 'other-new') return this.images;
            if (group === 'other-existing') return this.other_images || [];
            if (group === 'packet-new' || group === 'loose-new') return this.variantImages[variantIndex] || [];
            if (group === 'packet-existing') return this.inputs[variantIndex].images || [];
            if (group === 'loose-existing') return this.inputs[variantIndex].loose_images || [];
            return [];
        },
        getPresetColor(color) {
            return this.colorVariantOptions.some(option => option.value === color) ? color : '';
        },
        setVariantColor(input, color) {
            input.color_variant = color;
        },
        startMediaDrag(group, index, variantIndex = null) {
            this.draggedMedia = { group, index, variantIndex };
        },
        endMediaDrag() {
            this.draggedMedia = null;
        },
        dropMedia(group, targetIndex, variantIndex = null) {
            const dragged = this.draggedMedia;
            if (!dragged || dragged.group !== group || dragged.variantIndex !== variantIndex || dragged.index === targetIndex) {
                return this.endMediaDrag();
            }

            const images = this.getMediaList(group, variantIndex);
            const movedImage = images.splice(dragged.index, 1)[0];
            images.splice(targetIndex, 0, movedImage);
            images.forEach((image, index) => { image.sort_order = index + 1; });

            if (group.indexOf('existing') !== -1) {
                this.saveMediaOrder(group, variantIndex, images);
            }
            this.endMediaDrag();
        },
        saveMediaOrder(group, variantIndex, images) {
            if (!this.id || !images.length) return;

            const variantId = group === 'other-existing' ? null : this.inputs[variantIndex].id;
            axios.post(this.$apiUrl + '/products/reorder_images', {
                product_id: this.id,
                variant_id: variantId,
                image_ids: images.map(image => image.id),
            }).then((response) => {
                if (!response.data || response.data.status !== 1) {
                    this.showError((response.data && response.data.message) || 'Unable to save image order.');
                }
            }).catch(() => this.showError('Unable to save image order.'));
        },
        addVariantBarcode(input) {
            if (!Array.isArray(input.barcodes)) {
                Vue.set(input, 'barcodes', ['']);
                return;
            }
            input.barcodes.push('');
        },
        removeVariantBarcode(input, index) {
            if (Array.isArray(input.barcodes) && input.barcodes.length > 1) {
                input.barcodes.splice(index, 1);
            }
        },
        normalizeVariantBarcodes(input) {
            return (Array.isArray(input.barcodes) ? input.barcodes : [])
                .map(barcode => String(barcode || '').trim())
                .filter(barcode => barcode !== '');
        },
        validateVariantDetails() {
            const barcodePattern = /^[A-Za-z0-9-]+$/;
            const seenBarcodes = new Set();
            const productBarcode = String(this.barcode || '').trim().toLowerCase();

            for (const input of this.inputs) {
                Vue.set(input, 'barcodeError', '');

                const mrp = this.toNumber(this.type === 'packet' ? input.packet_price : input.loose_price);
                const salePrice = this.toNumber(this.type === 'packet' ? input.packet_sale_price : input.loose_sale_price);
                const saleErrorKey = this.type === 'packet'
                    ? 'validationErrorSalePrice'
                    : 'validationErrorSalePriceLoose';

                if (salePrice < 0 || salePrice > mrp) {
                    Vue.set(input, saleErrorKey, 'Sale Price must be between 0 and MRP.');
                    this.showError('Sale Price must be between 0 and MRP.');
                    return false;
                }

                Vue.set(input, saleErrorKey, null);

                for (const barcode of this.normalizeVariantBarcodes(input)) {
                    const normalized = barcode.toLowerCase();
                    if (!barcodePattern.test(barcode)) {
                        Vue.set(input, 'barcodeError', 'Use only letters, numbers, and hyphens in barcodes.');
                        this.showError(input.barcodeError);
                        return false;
                    }
                    if (normalized === productBarcode || seenBarcodes.has(normalized)) {
                        Vue.set(input, 'barcodeError', 'Every product and variant barcode must be unique.');
                        this.showError(input.barcodeError);
                        return false;
                    }
                    seenBarcodes.add(normalized);
                }
            }

            return true;
        },

        getSellerCategories() {
            return this.getCategories();
        },
        getDefaultSellerId() {
            if (this.isSellerRole && this.login_user && this.login_user.seller) {
                return this.login_user.seller.id;
            }
            return (this.sellers && this.sellers.length > 0) ? this.sellers[0].id : '';
        },
        getSeller() {
            if (this.seller_id !== 0 && this.seller_id !== "" && !this.id) {
                this.isLoading = true;
                let param = {
                    "seller_id": this.seller_id
                }
                axios.get(this.$apiUrl + '/sellers/edit/' + this.seller_id, {
                    params: param
                }).then((response) => {
                    this.isLoading = false,
                        this.require_products_approval = response.data.data.require_products_approval;
                    this.is_approved = this.require_products_approval == 0 ? 1 : 0;
                });
            }
        },
        getCategories() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/categories', {
                params: {
                    status: 1,
                    limit: 1000
                }
            })
                .then((response) => {
                    this.isLoading = false
                    const data = response.data || {};
                    const categories = Array.isArray(data.data)
                        ? data.data
                        : ((data.data && Array.isArray(data.data.categories)) ? data.data.categories : []);
                    this.productCategoryList = categories;
                    if (this.category_id) {
                        this.setCategorySelectionFromSavedId(this.category_id);
                    }
                })
                .catch((error) => {
                    this.isLoading = false
                    this.productCategoryList = [];
                });
        },
        getSellers() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/sellers')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.sellers = Array.isArray(data.data) ? data.data : [];
                    if (!this.seller_id && this.sellers.length > 0) {
                        this.seller_id = this.sellers[0].id;
                        this.getSeller();
                    }
                });
        },
        getTaxes() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/products/taxes')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.taxes = data.data
                });
        },
        getUnits() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/units/get')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.units = data.data
                });
        },
        getBrands() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/products/brands/get')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.brands = data.data;
                    if (this.cachedData && this.cachedData.brand) {
                        const foundBrand = this.brands.find(b => b.id === this.cachedData.brand.id) || null;
                        // Update brand with translated name
                        this.$nextTick(() => {
                            if (foundBrand && this.translatedBrands && this.translatedBrands.length > 0) {
                                const translatedBrand = this.translatedBrands.find(b => b.id === foundBrand.id);
                                if (translatedBrand) {
                                    this.brand = { ...foundBrand, name: translatedBrand.name, title: translatedBrand.title };
                                } else {
                                    this.brand = foundBrand;
                                }
                            } else {
                                this.brand = foundBrand;
                            }
                        });
                    }
                });
        },
        getCountries() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/countries/active')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.countries = data.data;
                    if (this.cachedData && this.cachedData.made_in) {
                        this.made_in = this.countries.find(c => c.id === this.cachedData.made_in.id) || null;
                    } else {
                        // Set default to India
                        this.made_in = this.countries.find(c => c.name === 'India') || null;
                    }
                });
        },

        /**
         * Status label for dropdown. API returns status_name as object by lang code { en: "...", hi: "..." }.
         * Picks current app locale; fallback to status.status.
         */
        getStatusDisplayName(status) {
            if (!status) return '';
            const sn = status.status_name;
            if (sn == null) return status.status || '';
            if (typeof sn === 'string') return sn.trim() || status.status || '';
            if (typeof sn === 'object' && !Array.isArray(sn)) {
                const appLocale = window.appLocale || window.localStorage.getItem('lang') || 'en';
                const forLocale = sn[appLocale];
                if (forLocale != null && String(forLocale).trim() !== '') return String(forLocale).trim();
                const first = Object.values(sn).find(val => val != null && String(val).trim() !== '');
                return first != null ? String(first).trim() : (status.status || '');
            }
            return status.status || '';
        },
        getOrderStatus() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/order_statuses').then((response) => {
                this.isLoading = false
                let data = response.data;
                const statusesToRemoveIds = [6, 7, 8];
                this.order_status = data.data.filter(status => !statusesToRemoveIds.includes(status.id));
            });
        },
        getTextGenKey() {
            // Get the text generation API key from store settings
            axios.get(this.$apiUrl + '/store_settings')
                .then((response) => {
                    let data = response.data.data;
                    if (data.store_settings) {
                        data.store_settings.forEach((item) => {
                            if (item.variable === 'text_gen_key') {
                                this.textGenKey = item.value;
                            }
                        });
                    }
                })
                .catch((error) => {
                    console.error('Error fetching text generation key:', error);
                });
        },
        validateBarcode() {
            const barcodePattern = /^[A-Za-z0-9-]+$/;
            const barcode = String(this.barcode || '').trim();

            if (barcode === '') {
                this.validationBarcodeMessage = '';
                this.isBarcodeValid = false;
                return;
            }

            if (barcodePattern.test(barcode)) {
                this.validationBarcodeMessage = '';
                this.isBarcodeValid = true;
            } else {
                this.validationBarcodeMessage = 'Invalid Barcode Number.';
                this.isBarcodeValid = false;
            }
        },
        validateDiscountedPrice(input) {
            const discountedPrice = parseFloat(input.discounted_price);
            const actualPrice = parseFloat(input.packet_price);
            if (discountedPrice >= actualPrice) {
                input.validationErrorDiscountedPrice = "Discounted Price must be less than Actual Price";
                input.discounted_price = null;
            } else {
                input.validationErrorDiscountedPrice = null;
            }
        },
        validateDiscountedPriceLoose(input) {
            const discountedPrice = parseFloat(input.loose_discounted_price);
            const actualPrice = parseFloat(input.loose_price);
            if (discountedPrice >= actualPrice) {
                input.validationErrorDiscountedPriceLoose = "Discounted Price must be less than Actual Price";
                input.loose_discounted_price = null;
            } else {
                input.validationErrorDiscountedPriceLoose = null;
            }
        },
        validateStockWithMeasurement() {
            if (this.is_unlimited_stock == 1) {
                return true;
            }

            if (this.type === 'loose') {
                const totalStock = parseFloat(this.loose_stock);
                for (let i = 0; i < this.inputs.length; i++) {
                    const measurement = parseFloat(this.inputs[i].loose_measurement);
                    if (measurement > totalStock) {
                        this.showError(`Variant ${i + 1} measurement (${measurement}) cannot exceed total stock (${totalStock})`);
                        return false;
                    }
                }
            }
            return true;
        },
        getProduct() {
            this.isLoading = true;

            axios.get(this.$apiUrl + '/products/edit/' + this.id)
                .then((response) => {
                    let data = response.data;
                    if (data.status === 1) {
                        this.record = data.data

                        this.name = this.record.name;
                        this.slug = this.record.slug;
                        this.barcode = this.record.barcode;
                        if (this.clone) {
                            this.name = '';
                            this.slug = '';
                            this.barcode = '';
                        }

                        this.seller_id = this.record.seller_id;
                        this.getSellerCategories();
                        this.getSeller();

                        this.tax_id = this.record.tax_id;

                        const foundBrand = this.brands.find((item) => {
                            return item.id === this.record.brand_id;
                        });
                        // Update brand with translated name after brands are loaded
                        this.$nextTick(() => {
                            if (foundBrand && this.translatedBrands && this.translatedBrands.length > 0) {
                                const translatedBrand = this.translatedBrands.find(b => b.id === foundBrand.id);
                                if (translatedBrand) {
                                    this.brand = { ...foundBrand, name: translatedBrand.name, title: translatedBrand.title };
                                } else {
                                    this.brand = foundBrand;
                                }
                            } else {
                                this.brand = foundBrand;
                            }
                        });

                        this.type = this.record.type;

                        this.category_id = this.record.category_id;

                        // Load additional categories for multi-category support
                        if (this.record.additional_category_ids) {
                            const additionalIds = this.record.additional_category_ids.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
                            this.additional_category_ids = this.productCategoryList.filter(cat => 
                                additionalIds.includes(cat.id)
                            );
                        } else {
                            this.additional_category_ids = [];
                        }

                        this.product_type = this.record.indicator ?? "";

                        // Load translations
                        this.loadTranslations();


                        this.made_in = this.countries.find((item) => {
                            return item.id == this.record.made_in;
                        });

                        this.tax_included_in_price = this.record.tax_included_in_price;

                        this.return_status = this.record.return_status;
                        this.return_days = this.record.return_days;
                        this.cancelable_status = this.record.cancelable_status;

                        this.till_status = this.record.till_status;
                        this.cod_allowed_status = this.record.cod_allowed;
                        this.max_allowed_quantity = this.record.total_allowed_quantity;
                        this.description = this.record.description;
                        this.highlights = this.record.highlights || '';
                        this.is_approved = this.record.is_approved;
                        this.status = this.record.status;
                        this.is_unlimited_stock = this.record.is_unlimited_stock;
                        this.main_image_path = this.$storageUrl + this.record.image;
                        this.other_images = this.record.images;
                        this.image = null;
                        this.meta_title = this.record.meta_title;
                        this.meta_keywords = this.record.meta_keywords;
                        this.schema_markup = this.record.schema_markup;
                        this.meta_description = this.record.meta_description;

                        // Set default language translation from main record
                        if (this.defaultLanguageId && this.translations[this.defaultLanguageId]) {
                            this.translations[this.defaultLanguageId].name = this.name;
                            this.translations[this.defaultLanguageId].description = this.description;
                            this.translations[this.defaultLanguageId].highlights = this.highlights;
                            this.translations[this.defaultLanguageId].meta_title = this.meta_title;
                            this.translations[this.defaultLanguageId].meta_keywords = this.meta_keywords;
                            this.translations[this.defaultLanguageId].schema_markup = this.schema_markup;
                            this.translations[this.defaultLanguageId].meta_description = this.meta_description;
                        }

                        let vm = this;
                        if (this.type == 'packet') {
                            this.inputs = [];
                            this.record.variants.forEach(function (item) {
                                var variantData = {
                                    'id': (item.id) ? item.id : "",
                                    'variant_name': item.variant_name || '',
                                    'packet_measurement': item.measurement,
                                    'packet_price': item.price,
                                    'packet_purchase_price': item.purchase_price,
                                    'packet_sale_price': vm.getStoredSalePrice(item.price, item.discounted_price),
                                    'discounted_price': vm.getDiscountAmountFromSalePrice(item.price, item.discounted_price),
                                    'discount_percentage': item.discount_percentage || vm.getDiscountPercentFromSalePrice(item.price, item.discounted_price),
                                    'discount_mode': item.discount_percentage ? 'percent' : 'amount',
                                    'packet_stock': item.stock,
                                    'packet_stock_unit_id': item.stock_unit_id,
                                    'packet_status': item.status,
                                    'color_variant': item.color_variant || '',
                                    'expiry_date_from': item.expiry_date_from || '',
                                    'expiry_date_to': item.expiry_date_to || '',
                                    'images': item.images,
                                    'loose_images': [],
                                    'barcodes': item.barcodes && item.barcodes.length
                                        ? item.barcodes.map(barcode => barcode.barcode)
                                        : [''],
                                    'barcodeError': '',
                                };
                                vm.inputs.push(variantData);
                            });
                        }

                        if (this.type == 'loose') {

                            let loose_stock = 0;
                            let loose_stock_unit_id = 0;
                            let status = 0;

                            this.inputs = [];
                            this.record.variants.forEach(function (item) {
                                var variantData = {
                                    'id': (item.id) ? item.id : "",
                                    'variant_name': item.variant_name || '',
                                    'loose_measurement': item.measurement,
                                    'loose_custom_title': item.custom_title ?? "",
                                    'loose_price': item.price,
                                    'loose_purchase_price': item.purchase_price || 0,
                                    'loose_sale_price': vm.getStoredSalePrice(item.price, item.discounted_price),
                                    'loose_discount_percentage': item.discount_percentage || vm.getDiscountPercentFromSalePrice(item.price, item.discounted_price),
                                    'loose_discounted_price': vm.getDiscountAmountFromSalePrice(item.price, item.discounted_price),
                                    'loose_discount_mode': item.discount_percentage ? 'percent' : 'amount',
                                    'packet_stock': item.stock,
                                    'color_variant': item.color_variant || '',
                                    'expiry_date_from': item.expiry_date_from || '',
                                    'expiry_date_to': item.expiry_date_to || '',
                                    'loose_images': item.images,
                                    'images': [],
                                    'barcodes': item.barcodes && item.barcodes.length
                                        ? item.barcodes.map(barcode => barcode.barcode)
                                        : [''],
                                    'barcodeError': '',
                                };
                                vm.inputs.push(variantData);
                                loose_stock = item.stock;
                                loose_stock_unit_id = item.stock_unit_id;
                                status = item.status;
                            });
                            this.loose_stock = loose_stock;
                            this.loose_stock_unit_id = loose_stock_unit_id;
                            this.loose_purchase_price = this.record.variants[0] ? this.record.variants[0].purchase_price : 0;
                            this.loose_discount_percentage = this.record.variants[0] ? (this.record.variants[0].discount_percentage || this.getDiscountPercentFromSalePrice(this.record.variants[0].price, this.record.variants[0].discounted_price)) : 0;
                            this.status = status;
                        }
                    } else {
                        this.showError(data.message);
                        setTimeout(() => {
                            this.$router.back();
                        }, 1000);
                    }
                }).catch(error => {
                    this.isLoading = false;
                    if (error.message) {
                        this.showError(error.message);
                    } else {
                        this.showError("Something went wrong!");
                    }
                });
        },

        saveRecord: function () {
            // Validate default language
            if (!this.validateDefaultLanguage()) {
                return;
            }

            // Validate stock vs measurement
            if (!this.validateStockWithMeasurement()) {
                return;
            }

            // Validate editable sale prices and optional variant barcodes.
            if (!this.validateVariantDetails()) {
                return;
            }

            this.isLoading = true;
            let vm = this;

            // Get default language translation for main table
            const defaultLang = this.languages.find(lang => lang.is_default === 1);
            if (!defaultLang) {
                vm.showError(__('default_language_not_found'));
                vm.isLoading = false;
                return;
            }

            const defaultTranslation = this.translations[defaultLang.id];

            let formData = new FormData();
            if (this.id) {
                formData.append('id', this.id);
                formData.append('deleteImageIds', JSON.stringify(this.deleteImageIds));
            }
            // Use default language values for main table
            formData.append('name', defaultTranslation.name || '');
            formData.append('slug', this.slug);
            formData.append('seller_id', this.seller_id || this.getDefaultSellerId());
            formData.append('tax_id', this.tax_id);
            formData.append('brand_id', this.brand ? this.brand.id : 0);
            formData.append('description', defaultTranslation.description || '');
            formData.append('highlights', defaultTranslation.highlights || '');
            formData.append('type', this.type);
            formData.append('is_unlimited_stock', this.is_unlimited_stock);
            formData.append('barcode', (this.barcode != null && this.barcode !== undefined) ? String(this.barcode).trim() : '');
            formData.append('meta_title', defaultTranslation.meta_title || '');
            formData.append('meta_keywords', defaultTranslation.meta_keywords || '');
            formData.append('schema_markup', defaultTranslation.schema_markup || '');
            formData.append('meta_description', defaultTranslation.meta_description || '');

            /*packet*/
            if (this.type === 'packet') {
                for (let i = 0; i < this.inputs.length; i++) {

                    formData.append('variant_id[]', (this.inputs[i].id) ? this.inputs[i].id : "");
                    formData.append('packet_variant_name[]', this.inputs[i].variant_name || '');
                    formData.append('packet_color_variant[]', this.inputs[i].color_variant || '');
                    formData.append('packet_expiry_date_from[]', this.inputs[i].expiry_date_from || '');
                    formData.append('packet_expiry_date_to[]', this.inputs[i].expiry_date_to || '');
                    formData.append('packet_measurement[]', this.inputs[i].packet_measurement || 1);

                    formData.append('packet_price[]', (this.inputs[i].packet_price != undefined) ? this.inputs[i].packet_price : 0);
                    formData.append('packet_purchase_price[]', (this.inputs[i].packet_purchase_price != undefined) ? this.inputs[i].packet_purchase_price : 0);
                    formData.append('discounted_price[]', this.getPacketSalePriceRaw(this.inputs[i]));
                    formData.append('discount_percentage[]', this.getPacketDiscountPercentage(this.inputs[i]));
                    formData.append('packet_stock[]', (this.inputs[i].packet_stock != undefined) ? this.inputs[i].packet_stock : 0);
                    formData.append('packet_stock_unit_id[]', (this.inputs[i].packet_stock_unit_id != undefined) ? this.inputs[i].packet_stock_unit_id : 0);
                    formData.append('packet_status[]', this.getPacketStatusForSave(this.inputs[i]));
                    formData.append('variant_barcodes[]', JSON.stringify(this.normalizeVariantBarcodes(this.inputs[i])));

                    (this.variantImages[i] || []).forEach(image => {
                        formData.append('packet_variant_images_' + i + '[]', image.file);
                    });
                }
            }

            /*loose*/
            if (this.type === 'loose') {
                for (let i = 0; i < this.inputs.length; i++) {
                    formData.append('variant_id[]', (this.inputs[i].id) ? this.inputs[i].id : "");
                    formData.append('loose_variant_name[]', this.inputs[i].variant_name || '');
                    formData.append('loose_color_variant[]', this.inputs[i].color_variant || '');
                    formData.append('loose_expiry_date_from[]', this.inputs[i].expiry_date_from || '');
                    formData.append('loose_expiry_date_to[]', this.inputs[i].expiry_date_to || '');
                    formData.append('loose_measurement[]', this.inputs[i].loose_measurement || 1);
                    formData.append('loose_custom_title[]', this.inputs[i].loose_custom_title);

                    formData.append('loose_price[]', (this.inputs[i].loose_price != undefined) ? this.inputs[i].loose_price : 0);

                    formData.append('loose_discounted_price[]', this.getLooseSalePriceRaw(this.inputs[i]));
                    formData.append('loose_discount_percentage[]', this.getLooseDiscountPercentage(this.inputs[i]));
                    formData.append('loose_purchase_price[]', this.inputs[i].loose_purchase_price != undefined ? this.inputs[i].loose_purchase_price : 0);
                    formData.append('packet_stock[]', (this.inputs[i].packet_stock != undefined) ? this.inputs[i].packet_stock : 0);
                    formData.append('variant_barcodes[]', JSON.stringify(this.normalizeVariantBarcodes(this.inputs[i])));

                    (this.variantImages[i] || []).forEach(image => {
                        formData.append('loose_variant_images_' + i + '[]', image.file);
                    });
                }
                formData.append('loose_stock', this.loose_stock);
                formData.append('loose_stock_unit_id', this.loose_stock_unit_id);
                formData.append('status', this.status);
            }


            formData.append('loose_stock', (this.loose_stock != undefined) ? this.loose_stock : 0);
            formData.append('loose_stock_unit_id', (this.loose_stock_unit_id != undefined) ? this.loose_stock_unit_id : 0);
            formData.append('status', (this.status != undefined) ? this.status : 0);

            this.category_id = this.selectedProductCategoryId;
            formData.append('category_id', this.category_id);
            
            // Add additional category IDs for multi-category support
            const additionalCategoryIds = this.additional_category_ids.map(cat => cat.id).join(',');
            formData.append('additional_category_ids', additionalCategoryIds);
            
            formData.append('product_type', this.product_type);

            formData.append('made_in', this.made_in ? this.made_in.id : 0);

            formData.append('shipping_type', this.shipping_type);

            formData.append('pincode_ids_exc', this.pincode_ids_exc);

            formData.append('return_status', this.return_status);
            const returnDaysToStore = (parseInt(this.return_days, 10) > 0) ? this.return_days : 1;
            formData.append('return_days', returnDaysToStore);
            formData.append('cancelable_status', this.cancelable_status);
            formData.append('till_status', this.till_status);
            formData.append('cod_allowed_status', this.cod_allowed_status);
            formData.append('max_allowed_quantity', this.max_allowed_quantity);

            formData.append('is_approved', this.is_approved);
            formData.append('tax_included_in_price', this.tax_included_in_price);
            if (this.image instanceof File) {
                formData.append('image', this.image);
            }
            // Other Images - Use files from images array to maintain correct indexing
            for (var i = 0; i < this.images.length; i++) {
                let file = this.images[i].file;
                formData.append('other_images[]', file);
            }

            // Prepare translations array
            const allTranslations = [];
            this.languages.forEach(language => {
                const translation = this.translations[language.id];

                allTranslations.push({
                    language_id: language.id,
                    name: translation.name || '',
                    description: translation.description || '',
                    highlights: translation.highlights || '',
                    meta_title: translation.meta_title || '',
                    meta_keywords: translation.meta_keywords || '',
                    schema_markup: translation.schema_markup || '',
                    meta_description: translation.meta_description || '',
                });
            });
            formData.append('translations', JSON.stringify(allTranslations));

            let url = this.$apiUrl + '/products/save';
            if (this.clone) {

                url = this.$apiUrl + '/products/save';
            } else if (this.id) {
                url = this.$apiUrl + '/products/update';
            }

            axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                let data = res.data;

                if (data.status === 1) {
                    this.skipCache = true;
                    localStorage.removeItem('product_form_cache');
                    this.showMessage("success", data.message);
                    setTimeout(
                        function () {
                            vm.$swal.close();
                            vm.isLoading = false;
                            if (vm.loggedUser?.role?.name === "Seller") {
                                vm.$router.push({ path: '/seller/manage_products' });
                            } else {
                                vm.$router.push({ path: '/manage_products' });
                            }



                        }, 2000);
                } else {
                    vm.showError(data.message);
                    vm.isLoading = false;
                }
            }).catch(error => {
                vm.isLoading = false;
                this.showError("Something went wrong!");
            });
        },
        deleteImage(index, id, productImage, key = "") {
            this.$swal.fire({
                title: "Are you Sure?",
                text: "You want be able to revert this",
                confirmButtonText: "Yes, Sure",
                cancelButtonText: "Cancel",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#37a279',
                cancelButtonColor: '#d33',
            }).then(result => {
                if (result.value) {
                    this.deleteImageIds.push(id);
                    if (productImage) {
                        this.other_images.splice(index, 1);
                    } else {
                        if (this.type === 'packet') {
                            this.inputs[key].images.splice(index, 1);
                        } else {
                            this.inputs[key].loose_images.splice(index, 1);
                        }
                    }
                }
            });
        },
        changeUnits: function () {
        },

        setCategorySelectionFromSavedId(categoryId) {
            const selectedId = Number(categoryId);
            if (!selectedId || this.productCategoryList.length === 0) return;

            const categoryMap = this.productCategoryList.reduce((map, category) => {
                map[Number(category.id)] = category;
                return map;
            }, {});

            const selected = categoryMap[selectedId];
            if (!selected) return;

            const parent = categoryMap[Number(selected.parent_id)];
            const grandParent = parent ? categoryMap[Number(parent.parent_id)] : null;

            if (Number(selected.parent_id) === 0) {
                this.product_category_id = selected.id;
                this.product_subcategory_id = '';
                this.product_sub_subcategory_id = '';
                this.product_sub_sub_subcategory_id = '';
            } else if (parent && Number(parent.parent_id) === 0) {
                this.product_category_id = parent.id;
                this.product_subcategory_id = selected.id;
                this.product_sub_subcategory_id = '';
                this.product_sub_sub_subcategory_id = '';
            } else if (parent && grandParent) {
                const greatGrandParent = grandParent ? categoryMap[Number(grandParent.parent_id)] : null;
                if (greatGrandParent) {
                    this.product_category_id = greatGrandParent.id;
                    this.product_subcategory_id = grandParent.id;
                    this.product_sub_subcategory_id = parent.id;
                    this.product_sub_sub_subcategory_id = selected.id;
                } else {
                    this.product_category_id = grandParent.id;
                    this.product_subcategory_id = parent.id;
                    this.product_sub_subcategory_id = selected.id;
                    this.product_sub_sub_subcategory_id = '';
                }
            }
        },

        hasValue(value) {
            return value !== null && value !== undefined && value !== '';
        },

        getSellingPrice(price, discountPercent, discountAmount, discountMode = 'percent') {
            const mrp = this.toNumber(price);
            if (mrp <= 0) return 0;

            if (discountMode === 'percent' && this.hasValue(discountPercent)) {
                return Math.max(mrp - ((mrp * this.toNumber(discountPercent)) / 100), 0);
            }

            return Math.max(mrp - this.toNumber(discountAmount), 0);
        },

        getDiscountAmountFromSalePrice(price, salePrice) {
            const mrp = this.toNumber(price);
            const sale = this.toNumber(salePrice);
            if (mrp <= 0 || sale <= 0 || sale >= mrp) return 0;
            return (mrp - sale).toFixed(2);
        },

        getDiscountPercentFromSalePrice(price, salePrice) {
            const mrp = this.toNumber(price);
            const sale = this.toNumber(salePrice);
            if (mrp <= 0 || sale <= 0 || sale >= mrp) return 0;
            return (100 - ((sale * 100) / mrp)).toFixed(2);
        },

        getStoredSalePrice(price, salePrice) {
            const storedSalePrice = this.toNumber(salePrice);
            return this.formatMoney(storedSalePrice > 0 ? storedSalePrice : price);
        },

        toNumber(value) {
            const number = parseFloat(value);
            return Number.isFinite(number) ? number : 0;
        },

        formatMoney(value) {
            const amount = this.toNumber(value);
            return amount.toFixed(2);
        },

        getPacketStatusForSave(input) {
            const stock = this.toNumber(input.packet_stock);
            const status = input.packet_status;

            if (Number(this.is_unlimited_stock) === 0 && stock <= 0) {
                return 0;
            }

            return status !== undefined && status !== '' ? status : 1;
        },

        getMarginPercent(sellingPrice, purchasePrice) {
            const sale = this.toNumber(sellingPrice);
            const cost = this.toNumber(purchasePrice);
            if (cost <= 0) return sale > 0 ? '100.00' : '0.00';
            return (((sale - cost) / cost) * 100).toFixed(2);
        },

        getPacketProfit(input) {
            const sellingPrice = this.getPacketSalePriceRaw(input);
            const purchasePrice = this.toNumber(input.packet_purchase_price);
            return this.formatMoney(sellingPrice - purchasePrice);
        },

        getPacketSalePriceRaw(input) {
            if (this.hasValue(input.packet_sale_price)) {
                return Math.max(this.toNumber(input.packet_sale_price), 0);
            }
            return this.getSellingPrice(input.packet_price, input.discount_percentage, input.discounted_price, input.discount_mode || 'percent');
        },

        getPacketSalePrice(input) {
            return this.formatMoney(this.getPacketSalePriceRaw(input));
        },

        getPacketProfitPercentage(input) {
            const sellingPrice = this.getPacketSalePriceRaw(input);
            const purchasePrice = this.toNumber(input.packet_purchase_price);
            if (purchasePrice <= 0) return '0.00';
            return (((sellingPrice - purchasePrice) / purchasePrice) * 100).toFixed(2);
        },

        getPacketDiscountPercentage(input) {
            const mrp = this.toNumber(input.packet_price);
            if (mrp <= 0) return '0.00';

            if ((input.discount_mode || 'percent') === 'amount') {
                return ((this.toNumber(input.discounted_price) / mrp) * 100).toFixed(2);
            }

            return this.formatMoney(input.discount_percentage);
        },

        setPacketDiscountMode(input, mode) {
            input.discount_mode = mode;
            input.validationErrorDiscountedPrice = null;

            const mrp = this.toNumber(input.packet_price);
            if (mode === 'amount' && mrp > 0 && this.toNumber(input.discounted_price) > mrp) {
                input.validationErrorDiscountedPrice = 'Discount amount must be less than MRP';
            }

            this.syncPacketSalePriceFromDiscount(input);
        },

        syncPacketSalePriceFromDiscount(input) {
            input.packet_sale_price = this.formatMoney(
                this.getSellingPrice(input.packet_price, input.discount_percentage, input.discounted_price, input.discount_mode || 'percent')
            );
            input.validationErrorSalePrice = null;
        },

        setPacketSalePrice(input) {
            const mrp = this.toNumber(input.packet_price);
            const salePrice = this.toNumber(input.packet_sale_price);

            if (salePrice < 0 || salePrice > mrp) {
                input.validationErrorSalePrice = 'Sale Price must be between 0 and MRP.';
                return;
            }

            input.validationErrorSalePrice = null;
            input.discount_mode = 'amount';
            input.discounted_price = this.formatMoney(Math.max(mrp - salePrice, 0));
            input.discount_percentage = mrp > 0
                ? this.formatMoney(((mrp - salePrice) / mrp) * 100)
                : '0.00';
        },

        getPacketMargin(input) {
            const sellingPrice = this.getPacketSalePriceRaw(input);
            return this.getMarginPercent(sellingPrice, input.packet_purchase_price);
        },

        getLooseProfit(input = null) {
            const variant = input || this.inputs[0] || {};
            const sellingPrice = this.getLooseSalePriceRaw(variant);
            const purchasePrice = this.toNumber(variant.loose_purchase_price ?? this.loose_purchase_price);
            return this.formatMoney(sellingPrice - purchasePrice);
        },

        getLooseSalePriceRaw(input) {
            if (this.hasValue(input.loose_sale_price)) {
                return Math.max(this.toNumber(input.loose_sale_price), 0);
            }
            return this.getSellingPrice(input.loose_price, input.loose_discount_percentage, input.loose_discounted_price, input.loose_discount_mode || 'percent');
        },

        getLooseSalePrice(input = null) {
            const variant = input || this.inputs[0] || {};
            return this.formatMoney(this.getLooseSalePriceRaw(variant));
        },

        getLooseProfitPercentage(input = null) {
            const variant = input || this.inputs[0] || {};
            const sellingPrice = this.getLooseSalePriceRaw(variant);
            const purchasePrice = this.toNumber(variant.loose_purchase_price ?? this.loose_purchase_price);
            if (purchasePrice <= 0) return '0.00';
            return (((sellingPrice - purchasePrice) / purchasePrice) * 100).toFixed(2);
        },

        getLooseDiscountPercentage(input) {
            const mrp = this.toNumber(input.loose_price);
            if (mrp <= 0) return '0.00';

            if ((input.loose_discount_mode || 'percent') === 'amount') {
                return ((this.toNumber(input.loose_discounted_price) / mrp) * 100).toFixed(2);
            }

            return this.formatMoney(input.loose_discount_percentage);
        },

        setLooseDiscountMode(input, mode) {
            input.loose_discount_mode = mode;
            input.validationErrorDiscountedPriceLoose = null;

            const mrp = this.toNumber(input.loose_price);
            if (mode === 'amount' && mrp > 0 && this.toNumber(input.loose_discounted_price) > mrp) {
                input.validationErrorDiscountedPriceLoose = 'Discount amount must be less than MRP';
            }

            this.syncLooseSalePriceFromDiscount(input);
        },

        syncLooseSalePriceFromDiscount(input) {
            input.loose_sale_price = this.formatMoney(
                this.getSellingPrice(input.loose_price, input.loose_discount_percentage, input.loose_discounted_price, input.loose_discount_mode || 'percent')
            );
            input.validationErrorSalePriceLoose = null;
        },

        setLooseSalePrice(input) {
            const mrp = this.toNumber(input.loose_price);
            const salePrice = this.toNumber(input.loose_sale_price);

            if (salePrice < 0 || salePrice > mrp) {
                input.validationErrorSalePriceLoose = 'Sale Price must be between 0 and MRP.';
                return;
            }

            input.validationErrorSalePriceLoose = null;
            input.loose_discount_mode = 'amount';
            input.loose_discounted_price = this.formatMoney(Math.max(mrp - salePrice, 0));
            input.loose_discount_percentage = mrp > 0
                ? this.formatMoney(((mrp - salePrice) / mrp) * 100)
                : '0.00';
        },

        getLooseMargin(input = null) {
            const variant = input || this.inputs[0] || {};
            const sellingPrice = this.getLooseSalePriceRaw(variant);
            return this.getMarginPercent(sellingPrice, variant.loose_purchase_price ?? this.loose_purchase_price);
        },

        saveCache: function () {
            if (this.id || this.clone || this.skipCache) return;
            try {
                const data = {
                    name: this.name, slug: this.slug, seller_id: this.seller_id,
                    tax_id: this.tax_id, brand: this.brand ? { id: this.brand.id } : null,
                    description: this.description, type: this.type, is_unlimited_stock: this.is_unlimited_stock,
                    barcode: this.barcode, meta_title: this.meta_title,
                    meta_keywords: this.meta_keywords, schema_markup: this.schema_markup,
                    meta_description: this.meta_description, category_id: this.category_id,
                    product_category_id: this.product_category_id,
                    product_subcategory_id: this.product_subcategory_id,
                    product_sub_subcategory_id: this.product_sub_subcategory_id,
                    product_sub_sub_subcategory_id: this.product_sub_sub_subcategory_id,
                    product_type: this.product_type,
                    made_in: this.made_in ? { id: this.made_in.id } : null, return_status: this.return_status,
                    return_days: (parseInt(this.return_days, 10) > 0) ? this.return_days : 1,
                    cancelable_status: this.cancelable_status,
                    till_status: this.till_status, cod_allowed_status: this.cod_allowed_status,
                    max_allowed_quantity: this.max_allowed_quantity, is_approved: this.is_approved,
                    tax_included_in_price: this.tax_included_in_price, status: this.status,
                    loose_stock: this.loose_stock, loose_stock_unit_id: this.loose_stock_unit_id,
                    inputs: JSON.parse(JSON.stringify(this.inputs)), useCustomPrompt: this.useCustomPrompt,
                    customPrompt: this.customPrompt,
                    translations: JSON.parse(JSON.stringify(this.translations)),
                    timestamp: Date.now()
                };
                localStorage.setItem('product_form_cache', JSON.stringify(data));
            } catch (e) { }
        },

        restoreCache: function () {
            try {
                const cached = localStorage.getItem('product_form_cache');
                if (!cached) return;
                const data = JSON.parse(cached);
                if (data.timestamp && Date.now() - data.timestamp > 120000) {
                    localStorage.removeItem('product_form_cache');
                    return;
                }
                this.cachedData = data;
                Object.keys(data).forEach(key => {
                    if (key === 'timestamp' || key === 'brand' || key === 'made_in' || key === 'translations') return;
                    if (this.hasOwnProperty(key)) this[key] = data[key] !== undefined ? data[key] : this[key];
                });

                // Restore per-language translation data.
                // At this point initializeTranslations() has already run (it's called inside
                // fetchActiveLanguages before restoreCache), so this.translations already has
                // valid language-keyed slots we can safely overwrite.
                if (data.translations && this.languages && this.languages.length > 0) {
                    this.languages.forEach(language => {
                        if (data.translations[language.id]) {
                            this.$set(this.translations, language.id, {
                                ...this.translations[language.id],
                                ...data.translations[language.id]
                            });
                        }
                    });
                }
                if (data.brand && this.brands && this.brands.length) {
                    const foundBrand = this.brands.find(b => b.id === data.brand.id) || null;
                    // Update brand with translated name
                    this.$nextTick(() => {
                        if (foundBrand && this.translatedBrands && this.translatedBrands.length > 0) {
                            const translatedBrand = this.translatedBrands.find(b => b.id === foundBrand.id);
                            if (translatedBrand) {
                                this.brand = { ...foundBrand, name: translatedBrand.name, title: translatedBrand.title };
                            } else {
                                this.brand = foundBrand;
                            }
                        } else {
                            this.brand = foundBrand;
                        }
                    });
                }
                if (data.made_in && this.countries && this.countries.length) {
                    this.made_in = this.countries.find(c => c.id === data.made_in.id) || null;
                }
                if (this.seller_id) {
                    this.$nextTick(() => { this.getSellerCategories(); this.getSeller(); });
                }
            } catch (e) {
                localStorage.removeItem('product_form_cache');
            }
        },

        clearForm: function () {
            if (this.$refs['my-form']) this.$refs['my-form'].reset();
            Object.assign(this, {
                name: '', slug: '', seller_id: 0, tax_id: 0, brand: null,
                description: '', highlights: '', type: 'packet', is_unlimited_stock: 0,
                barcode: '', meta_title: '', meta_keywords: '', schema_markup: '',
                meta_description: '', category_id: '', product_category_id: '', product_subcategory_id: '',
                product_sub_subcategory_id: '', product_sub_sub_subcategory_id: '', product_type: '',
                made_in: null, return_status: 0, return_days: 1, cancelable_status: 0,
                categoryOptions: '<option value="">' + __('select_category') + '</option>',
                till_status: '', cod_allowed_status: 1, max_allowed_quantity: 0,
                is_approved: 1, tax_included_in_price: 0, status: 1, loose_stock: 0,
                loose_stock_unit_id: '', inputs: [this.getBlankVariantInput()],
                image: null, main_image_path: '', main_image_name: '', other_images: null,
                images: [], variantImages: {}, deleteImageIds: [], useCustomPrompt: false, customPrompt: '',
                activeLanguageTab: 0
            });
            this.initializeTranslations();
            localStorage.removeItem('product_form_cache');
        },

        debouncedSave: function () {
            if (this.cacheTimer) clearTimeout(this.cacheTimer);
            this.cacheTimer = setTimeout(() => this.saveCache(), 500);
        }
    },
    watch: {
        // Watch currentLanguageId to update selected brand name when language changes
        currentLanguageId: function (newVal, oldVal) {
            if (newVal && this.brand && this.translatedBrands && this.translatedBrands.length > 0) {
                // Find the translated brand from translatedBrands
                const translatedBrand = this.translatedBrands.find(b => b.id === this.brand.id);
                if (translatedBrand) {
                    // Update the brand object with translated name
                    this.brand = { ...this.brand, name: translatedBrand.name, title: translatedBrand.title };
                }
            }
        },
        // Watch translatedBrands to update selected brand when brands are loaded or language changes
        translatedBrands: {
            handler: function (newVal) {
                if (newVal && newVal.length > 0 && this.brand && this.brand.id) {
                    // Find the translated brand from translatedBrands
                    const translatedBrand = newVal.find(b => b.id === this.brand.id);
                    if (translatedBrand) {
                        // Update the brand object with translated name
                        this.brand = { ...this.brand, name: translatedBrand.name, title: translatedBrand.title };
                    }
                }
            },
            deep: true
        },
        // Auto-save form data to cache (debounced)
        name: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        slug: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        seller_id: function () {
            if (this.seller_id) {
                this.getSellerCategories();
            }
            if (!this.id && !this.clone) this.debouncedSave();
        },
        tax_id: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        brand: { handler: function () { if (!this.id && !this.clone) this.debouncedSave(); }, deep: true },
        description: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        type: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        is_unlimited_stock: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        barcode: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        meta_title: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        meta_keywords: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        schema_markup: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        meta_description: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        category_id: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        product_category_id: function () {
            const hasSubcategory = this.subCategoryOptions.some(category => {
                return Number(category.id) === Number(this.product_subcategory_id);
            });
            if (!hasSubcategory) {
                this.product_subcategory_id = '';
                this.product_sub_subcategory_id = '';
                this.product_sub_sub_subcategory_id = '';
            }
            if (!this.id && !this.clone) this.debouncedSave();
        },
        product_subcategory_id: function () {
            const hasSubSubcategory = this.subSubCategoryOptions.some(category => {
                return Number(category.id) === Number(this.product_sub_subcategory_id);
            });
            if (!hasSubSubcategory) {
                this.product_sub_subcategory_id = '';
                this.product_sub_sub_subcategory_id = '';
            }
            if (!this.id && !this.clone) this.debouncedSave();
        },
        product_sub_subcategory_id: function () {
            const hasSubSubSubcategory = this.subSubSubCategoryOptions.some(category => {
                return Number(category.id) === Number(this.product_sub_sub_subcategory_id);
            });
            if (!hasSubSubSubcategory) {
                this.product_sub_sub_subcategory_id = '';
            }
            if (!this.id && !this.clone) this.debouncedSave();
        },
        product_sub_sub_subcategory_id: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        product_type: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        made_in: { handler: function () { if (!this.id && !this.clone) this.debouncedSave(); }, deep: true },
        return_status: function () {
            // When user turns off returnable, default return_days to 1 if empty/0
            if (Number(this.return_status) === 0 && (parseInt(this.return_days, 10) || 0) <= 0) {
                this.return_days = 1;
            }
            if (!this.id && !this.clone) this.debouncedSave();
        },
        return_days: function () {
            // When days cleared or set to 0 (e.g. returnable off), keep default 1 in memory for next save
            if ((this.return_days === '' || this.return_days === null || parseInt(this.return_days, 10) <= 0) && Number(this.return_status) === 0) {
                this.return_days = 1;
            }
            if (!this.id && !this.clone) this.debouncedSave();
        },
        cancelable_status: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        till_status: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        cod_allowed_status: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        max_allowed_quantity: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        is_approved: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        tax_included_in_price: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        status: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        loose_stock: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        loose_stock_unit_id: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        inputs: { handler: function () { if (!this.id && !this.clone) this.debouncedSave(); }, deep: true },
        useCustomPrompt: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        customPrompt: function () { if (!this.id && !this.clone) this.debouncedSave(); },
        translations: { handler: function () { if (!this.id && !this.clone) this.debouncedSave(); }, deep: true }
    },

};
</script>
<style scoped>
@import "../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css";

/* AI Generate Button Styles */
.ai-generate-btn {
    position: relative;
    min-width: 200px;
    transition: all 0.3s ease;
}

.ai-generate-btn:disabled {
    opacity: 0.9;
    cursor: not-allowed;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-color: #667eea;
    color: white;
}

/* AI Spinner Animation */
.ai-spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: ai-spin 0.8s ease-in-out infinite;
}

@keyframes ai-spin {
    to {
        transform: rotate(360deg);
    }
}

/* AI Text Animation - Pulsing effect */
.ai-text-animate {
    animation: ai-pulse 1.5s ease-in-out infinite;
}

.other-media-list {
    row-gap: 12px;
}

.image-container {
    position: relative;
}

.image-container[draggable="true"] {
    cursor: grab;
}

.image-container[draggable="true"]:active {
    cursor: grabbing;
    opacity: 0.7;
}

.media-order-badge {
    align-items: center;
    background: #23364a;
    border: 2px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    font-size: 12px;
    font-weight: 700;
    height: 26px;
    justify-content: center;
    left: 4px;
    position: absolute;
    top: 4px;
    width: 26px;
    z-index: 2;
}

.add-more-media-btn {
    align-items: center;
    aspect-ratio: 1 / 1;
    background: #f8fafc;
    border: 1px dashed #8aa0b8;
    border-radius: 6px;
    color: #53677d;
    display: flex;
    flex-direction: column;
    font-weight: 600;
    gap: 8px;
    justify-content: center;
    min-height: 120px;
    width: 100%;
}

.add-more-media-btn i {
    font-size: 28px;
}

.add-more-media-btn:hover,
.add-more-media-btn:focus {
    background: #eef4fb;
    border-color: #53677d;
    color: #23364a;
}

@keyframes ai-pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.6;
    }
}
</style>
