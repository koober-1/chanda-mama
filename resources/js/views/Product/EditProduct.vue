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
                    <form ref="my-form" @submit.prevent="saveRecord" @keydown.enter="$event.preventDefault()" v-else class="modern-admin-form">
                        <div class="product-layout" style="display: block;">
                        <div class="card modern-card card-general">
                            <div class="card-header border-bottom-0 pb-0">
                                <h5 class="fw-bold mb-0">Basic Information</h5>
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
                                                        <div class="col-md-6 d-none">
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
                                                                <div class="d-flex align-items-center gap-2">
                                                                    <multiselect id="brands" v-model="brand" :options="translatedBrands"
                                                                        :placeholder="__('select_and_search_brands')"
                                                                        label="name" track-by="id" @keydown.native.enter.prevent required style="flex-grow: 1;">
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
                                                                <button type="button" class="btn btn-primary" style="height: 40px; min-width: 40px;" @click="$refs.editBrandModal.showModal()">
                                                                    <i class="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                        <div class="col-md-12">
                                                            <div
                                                                class="form-group mb-3 d-flex flex-wrap align-items-center">
                                                                <button type="button"
                                                                    class="btn btn-outline-primary me-3 my-2 ai-generate-btn"
                                                                    @click="generateDescription"
                                                                    :disabled="isGeneratingAI || isGeneratingCustomAI">
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
    
                                                        <div class="col-md-12" v-if="useCustomPrompt">
                                                            <div class="card bg-light border-primary border-opacity-25 mb-3 shadow-none">
                                                                <div class="card-body p-3">
                                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                                        <label class="fw-bold mb-0 text-primary d-flex align-items-center">
                                                                            <i class="fa fa-comment-dots me-2"></i> {{ __('custom_prompt') }}
                                                                        </label>
                                                                        <span class="badge bg-primary text-white" style="font-size: 11px;">
                                                                            <i class="fa fa-magic me-1"></i> Custom AI Generator
                                                                        </span>
                                                                    </div>
                                                                    <textarea class="form-control mb-2" v-model="customPrompt"
                                                                        rows="3"
                                                                        placeholder="e.g. Write a catchy and premium description highlighting durability, key features, and benefits. Include bullet highlights and optimize meta settings."></textarea>
                                                                    
                                                                    <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
                                                                        <div class="d-flex flex-wrap align-items-center gap-2 text-muted" style="font-size: 12px;">
                                                                            <span class="badge bg-white text-dark border">
                                                                                <i class="fa fa-check text-success me-1"></i> Required: Product Name, Category &amp; Prompt
                                                                            </span>
                                                                            <span class="badge bg-white text-dark border">
                                                                                <i class="fa fa-tags text-info me-1"></i> Auto-detects {{ has_variant ? 'Variants' : 'Single Product' }}
                                                                            </span>
                                                                        </div>
                                                                        <button type="button"
                                                                            class="btn btn-primary ai-generate-btn shadow-sm"
                                                                            @click="generateFromCustomPrompt"
                                                                            :disabled="isGeneratingCustomAI || isGeneratingAI">
                                                                            <template v-if="isGeneratingCustomAI">
                                                                                <span class="ai-spinner me-2"></span>
                                                                                <span class="ai-text-animate">Generating Content...</span>
                                                                            </template>
                                                                            <template v-else>
                                                                                <i class="fa fa-paper-plane me-1"></i> Generate with Custom Prompt
                                                                            </template>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12" v-if="aiDebugInfo">
                                                            <div class="form-group mb-3">
                                                                <button type="button" class="btn btn-sm btn-outline-info mb-2" @click="showAiDebug = !showAiDebug">
                                                                    <i class="fa fa-bug"></i> {{ showAiDebug ? 'Hide AI Debugging' : 'Show AI Debugging' }}
                                                                </button>
                                                                <div v-show="showAiDebug" class="p-3 bg-dark text-white rounded" style="max-height: 300px; overflow-y: auto; text-align: left;">
                                                                    <pre style="color: #00ff00; margin: 0; font-size: 0.85rem; white-space: pre-wrap; word-wrap: break-word;">{{ aiDebugInfo }}</pre>
                                                                </div>
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
                                                        <div class="col-12">
                                                            <div class="row">
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
                                <div class="row form-compact-row">
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
                                    <div class="col-md-6 d-none">
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
                                            <div class="d-flex align-items-center gap-2">
                                                <multiselect id="brands" v-model="brand" :options="translatedBrands"
                                                    :placeholder="__('select_and_search_brands')"
                                                    label="name" track-by="id" required style="flex-grow: 1;" @keydown.native.enter.stop>
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
                                                <button type="button" class="btn btn-primary" style="height: 40px; min-width: 40px;" @click="$refs.editBrandModal.showModal()">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="card modern-card card-media mb-4">
                            <div class="card-header border-bottom-0 pb-0">
                                <h5 class="fw-bold mb-0">Media</h5>
                            </div>
                            <div class="card-body">
                                <div class="row form-compact-row">

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
                        </div>

                        

                        <!-- Product Variants: Show regardless of language tabs since they are hidden -->
                        <div class="card modern-card card-variants mb-4">
                            <div class="card-header border-bottom-0 pb-0 d-flex justify-content-between align-items-center">
                                <h5 class="fw-bold mb-0">Pricing & Variants</h5>
                                <div class="custom-control custom-switch" v-if="type === 'packet' || type === 'loose'">
                                    <input type="checkbox" class="custom-control-input" id="hasVariantSwitch" v-model="has_variant">
                                    <label class="custom-control-label" for="hasVariantSwitch">Has Variants</label>
                                </div>
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
                                </div>

                                
<div class="table-responsive mb-4" v-if="has_variant && type === 'packet'">
    <table class="table table-bordered table-sm variant-table" style="font-size: 0.85rem; vertical-align: middle;">
        <thead class="bg-light">
            <tr>
                <th style="width: 60px;">Image</th>
                <th style="min-width: 150px;">Details (Name, Barcode, Color)</th>
                <th style="min-width: 120px;">Unit & Meas.</th>
                <th style="min-width: 120px;">Pur. Price & MRP</th>
                <th style="min-width: 150px;">Discount & Sale Price</th>
                <th style="min-width: 100px;" v-if="is_unlimited_stock != 1">Stock</th>
                <th style="min-width: 100px;">Profit</th>
                <th style="width: 50px;">Act</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(input, k) in inputs" :key="'packet_table_'+k">
                <td class="text-center p-1">
                    <div class="variant-image-upload mx-auto" @click="openVariantImagePicker(k, 'packet')" style="width: 50px; height: 50px; border: 1px dashed #ccc; display:flex; align-items:center; justify-content:center; cursor:pointer;" title="Add/View Images">
                        <img v-if="variantImages[k] && variantImages[k].length" :src="variantImages[k][0].url" style="width:100%; height:100%; object-fit:cover;" />
                        <img v-else-if="input.images && input.images.length" :src="$storageUrl + input.images[0].image" style="width:100%; height:100%; object-fit:cover;" />
                        <i v-else class="fa fa-image text-muted"></i>
                    </div>
                    <small v-if="(variantImages[k] ? variantImages[k].length : 0) + (input.images ? input.images.length : 0) > 1" class="text-muted d-block" style="font-size: 10px;">
                        +{{ (variantImages[k] ? variantImages[k].length : 0) + (input.images ? input.images.length : 0) - 1 }} more
                    </small>
                    <input type="file" accept="image/*" :ref="'packet_variant_images_' + k" multiple class="d-none" v-on:change="variantImagesChanges(k)">
                </td>
                <td class="p-1">
                    <input type="text" class="form-control form-control-sm mb-1" placeholder="Variant Name" v-model="input.variant_name">
                    <input type="text" class="form-control form-control-sm mb-1" placeholder="Barcode" v-model="input.barcodes[0]" v-if="input.barcodes">
                    <div class="color-picker-component">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text p-0 overflow-hidden" style="width: 32px; height: 31px; min-width: 32px; background: #fff;" title="Click to open color palette">
                                <input type="color" class="color-picker-input-swatch border-0 p-0 w-100 h-100" style="cursor: pointer; background: transparent;" :value="getColorHex(input)" @input="onColorPickerChange(input, $event.target.value)">
                            </span>
                            <select class="form-control form-control-sm" :value="getColorSelectValue(input)" @change="handleColorChange(input, $event.target.value)">
                                <option value="">Select Color</option>
                                <option v-for="color in colorVariantOptions" :key="color.code" :value="color.code">{{ color.emoji }} {{ color.label }} ({{ color.code }})</option>
                                <option value="__custom__">🎨 Other / Custom Color...</option>
                            </select>
                        </div>
                        <div v-if="(input.color_variant || input.color_name) && getColorHex(input) !== '#000000'" class="d-flex align-items-center mt-1 px-1 py-0 rounded border bg-light" style="font-size: 11px; height: 22px;">
                            <span class="d-inline-block rounded-circle me-1 border shadow-sm" :style="{ width: '12px', height: '12px', minWidth: '12px', backgroundColor: getColorHex(input) }"></span>
                            <span class="text-dark text-truncate me-1" style="font-size: 10px; font-weight: 500;">{{ getColorLabel(input) }}</span>
                            <span class="text-muted ms-auto font-monospace" style="font-size: 10px;">{{ getColorHex(input) }}</span>
                        </div>
                        <div v-if="isCustomColor(input)" class="mt-1 p-1 rounded border bg-light">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <span class="text-muted font-weight-bold" style="font-size: 9px; letter-spacing: 0.5px;">CUSTOM COLOR NAME:</span>
                                <span class="badge badge-light border text-muted py-0 px-1" style="font-size: 9px;">CUSTOM</span>
                            </div>
                            <input type="text" class="form-control form-control-sm" placeholder="Color Name (e.g. Olive Green)" maxlength="40" :value="input.color_name || ''" @input="onCustomNameInput(input, $event.target.value)">
                        </div>
                    </div>
                </td>
                <td class="p-1">
                    <select class="form-control form-control-sm mb-1" @change="changeUnits()" v-model="input.packet_stock_unit_id">
                        <option value="">Unit</option>
                        <option v-for="(unit, key) in units" :value="unit.id">{{ unit.short_code }}</option>
                    </select>
                    <input type="number" min="0" step="any" class="form-control form-control-sm" placeholder="Measurement" v-model="input.packet_measurement">
                </td>
                <td class="p-1">
                    <input type="number" min="0" step="any" class="form-control form-control-sm mb-1" placeholder="Pur. Price" v-model="input.packet_purchase_price">
                    <input type="number" min="0" step="any" class="form-control form-control-sm border-primary" placeholder="MRP *" v-model="input.packet_price" @input="syncPacketSalePriceFromDiscount(input)" required>
                </td>
                <td class="p-1">
                    <div class="input-group input-group-sm mb-1">
                        <select class="form-select form-select-sm" style="max-width: 60px; padding: 0 5px;" :value="input.discount_type || 'percent'" @input="$set(input, 'discount_type', $event.target.value); if($event.target.value==='percent'){input.discounted_price='';setPacketDiscountMode(input, 'percent');}else{input.discount_percentage='';setPacketDiscountMode(input, 'amount');}">
                            <option value="percent">%</option>
                            <option value="amount">Rs</option>
                        </select>
                        <input v-if="(input.discount_type || 'percent') === 'percent'" type="number" min="0" step="any" class="form-control form-control-sm" placeholder="Disc %" v-model="input.discount_percentage" @input="setPacketDiscountMode(input, 'percent')">
                        <input v-if="(input.discount_type || 'percent') === 'amount'" type="number" min="0" step="any" class="form-control form-control-sm" placeholder="Disc Rs" v-model="input.discounted_price" @input="setPacketDiscountMode(input, 'amount')">
                    </div>
                    <input type="number" min="0" step="any" class="form-control form-control-sm bg-light" placeholder="Sale Price" v-model="input.packet_sale_price" @input="setPacketSalePrice(input)">
                    <span v-if="input.validationErrorSalePrice" class="text-danger d-block" style="font-size: 10px;">{{ input.validationErrorSalePrice }}</span>
                </td>
                <td class="p-1" v-if="is_unlimited_stock != 1">
                    <input type="number" step="any" min="0" class="form-control form-control-sm" placeholder="Stock" v-model="input.packet_stock">
                </td>
                <td class="p-1">
                    <input type="text" class="form-control form-control-sm mb-1 bg-light text-success" :value="getPacketProfitPercentage(input)" readonly placeholder="Prof %">
                    <input type="text" class="form-control form-control-sm bg-light text-success" :value="getPacketProfit(input)" readonly placeholder="Prof Rs">
                </td>
                <td class="p-1 text-center">
                    <button v-if="k !== 0" type="button" class="btn btn-sm btn-outline-danger" @click="remove(k)"><i class="fa fa-times"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
    <button type="button" class="btn btn-sm btn-primary mt-2" @click="addRow"><i class="fa fa-plus-square"></i> {{ __('add_variant') }}</button>
</div>

<div class="table-responsive mb-4" v-if="has_variant && type === 'loose'">
    <table class="table table-bordered table-sm variant-table" style="font-size: 0.85rem; vertical-align: middle;">
        <thead class="bg-light">
            <tr>
                <th style="width: 60px;">Image</th>
                <th style="min-width: 150px;">Details (Name, Barcode, Color)</th>
                <th style="min-width: 120px;">Unit & Meas.</th>
                <th style="min-width: 120px;">Pur. Price & MRP</th>
                <th style="min-width: 150px;">Discount & Sale Price</th>
                <th style="min-width: 100px;">Profit</th>
                <th style="width: 50px;">Act</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(input, k) in inputs" :key="'loose_table_'+k">
                <td class="text-center p-1">
                    <div class="variant-image-upload mx-auto" @click="openVariantImagePicker(k, 'loose')" style="width: 50px; height: 50px; border: 1px dashed #ccc; display:flex; align-items:center; justify-content:center; cursor:pointer;" title="Add/View Images">
                        <img v-if="variantImages[k] && variantImages[k].length" :src="variantImages[k][0].url" style="width:100%; height:100%; object-fit:cover;" />
                        <img v-else-if="input.loose_images && input.loose_images.length" :src="$storageUrl + input.loose_images[0].image" style="width:100%; height:100%; object-fit:cover;" />
                        <i v-else class="fa fa-image text-muted"></i>
                    </div>
                    <small v-if="(variantImages[k] ? variantImages[k].length : 0) + (input.loose_images ? input.loose_images.length : 0) > 1" class="text-muted d-block" style="font-size: 10px;">
                        +{{ (variantImages[k] ? variantImages[k].length : 0) + (input.loose_images ? input.loose_images.length : 0) - 1 }} more
                    </small>
                    <input type="file" accept="image/*" :ref="'loose_variant_images_' + k" multiple class="d-none" v-on:change="variantImagesChanges(k)">
                </td>
                <td class="p-1">
                    <input type="text" class="form-control form-control-sm mb-1" placeholder="Variant Name" v-model="input.variant_name">
                    <input type="text" class="form-control form-control-sm mb-1" placeholder="Barcode" v-model="input.barcodes[0]" v-if="input.barcodes">
                    <div class="color-picker-component">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text p-0 overflow-hidden" style="width: 32px; height: 31px; min-width: 32px; background: #fff;" title="Click to open color palette">
                                <input type="color" class="color-picker-input-swatch border-0 p-0 w-100 h-100" style="cursor: pointer; background: transparent;" :value="getColorHex(input)" @input="onColorPickerChange(input, $event.target.value)">
                            </span>
                            <select class="form-control form-control-sm" :value="getColorSelectValue(input)" @change="handleColorChange(input, $event.target.value)">
                                <option value="">Select Color</option>
                                <option v-for="color in colorVariantOptions" :key="color.code" :value="color.code">{{ color.emoji }} {{ color.label }} ({{ color.code }})</option>
                                <option value="__custom__">🎨 Other / Custom Color...</option>
                            </select>
                        </div>
                        <div v-if="(input.color_variant || input.color_name) && getColorHex(input) !== '#000000'" class="d-flex align-items-center mt-1 px-1 py-0 rounded border bg-light" style="font-size: 11px; height: 22px;">
                            <span class="d-inline-block rounded-circle me-1 border shadow-sm" :style="{ width: '12px', height: '12px', minWidth: '12px', backgroundColor: getColorHex(input) }"></span>
                            <span class="text-dark text-truncate me-1" style="font-size: 10px; font-weight: 500;">{{ getColorLabel(input) }}</span>
                            <span class="text-muted ms-auto font-monospace" style="font-size: 10px;">{{ getColorHex(input) }}</span>
                        </div>
                        <div v-if="isCustomColor(input)" class="mt-1 p-1 rounded border bg-light">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <span class="text-muted font-weight-bold" style="font-size: 9px; letter-spacing: 0.5px;">CUSTOM COLOR NAME:</span>
                                <span class="badge badge-light border text-muted py-0 px-1" style="font-size: 9px;">CUSTOM</span>
                            </div>
                            <input type="text" class="form-control form-control-sm" placeholder="Color Name (e.g. Olive Green)" maxlength="40" :value="input.color_name || ''" @input="onCustomNameInput(input, $event.target.value)">
                        </div>
                    </div>
                </td>
                <td class="p-1">
                    <select class="form-control form-control-sm mb-1" v-model="loose_stock_unit_id">
                        <option value="">Unit</option>
                        <option v-for="(unit, key) in units" :value="unit.id">{{ unit.short_code }}</option>
                    </select>
                    <input type="number" step="any" min="0" class="form-control form-control-sm" placeholder="Measurement" v-model="input.loose_measurement">
                </td>
                <td class="p-1">
                    <input type="number" step="any" min="0" class="form-control form-control-sm mb-1" placeholder="Pur. Price" v-model="input.loose_purchase_price">
                    <input type="number" step="any" min="0" class="form-control form-control-sm border-primary" placeholder="MRP *" v-model="input.loose_price" @input="syncLooseSalePriceFromDiscount(input)" required>
                </td>
                <td class="p-1">
                    <div class="input-group input-group-sm mb-1">
                        <select class="form-select form-select-sm" style="max-width: 60px; padding: 0 5px;" :value="input.discount_type || 'percent'" @input="$set(input, 'discount_type', $event.target.value); if($event.target.value==='percent'){input.loose_discounted_price='';setLooseDiscountMode(input, 'percent');}else{input.loose_discount_percentage='';setLooseDiscountMode(input, 'amount');}">
                            <option value="percent">%</option>
                            <option value="amount">Rs</option>
                        </select>
                        <input v-if="(input.discount_type || 'percent') === 'percent'" type="number" step="any" min="0" class="form-control form-control-sm" placeholder="Disc %" v-model="input.loose_discount_percentage" @input="setLooseDiscountMode(input, 'percent')">
                        <input v-if="(input.discount_type || 'percent') === 'amount'" type="number" step="any" min="0" class="form-control form-control-sm" placeholder="Disc Rs" v-model="input.loose_discounted_price" @input="setLooseDiscountMode(input, 'amount')">
                    </div>
                    <input type="number" step="any" min="0" class="form-control form-control-sm bg-light" placeholder="Sale Price" v-model="input.loose_sale_price" @input="setLooseSalePrice(input)">
                    <span v-if="input.validationErrorSalePriceLoose" class="text-danger d-block" style="font-size: 10px;">{{ input.validationErrorSalePriceLoose }}</span>
                </td>
                <td class="p-1">
                    <input type="text" class="form-control form-control-sm mb-1 bg-light text-success" :value="getLooseProfitPercentage(input)" readonly placeholder="Prof %">
                    <input type="text" class="form-control form-control-sm bg-light text-success" :value="getLooseProfit(input)" readonly placeholder="Prof Rs">
                </td>
                <td class="p-1 text-center">
                    <button v-if="k !== 0" type="button" class="btn btn-sm btn-outline-danger" @click="remove(k)"><i class="fa fa-times"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
    <button type="button" class="btn btn-sm btn-primary mt-2" @click="addRow"><i class="fa fa-plus-square"></i> {{ __('add_variant') }}</button>
</div>


<div id="packate_div" class="variant-card modern-card mb-4" v-if="type === 'packet' && !has_variant" v-for="(input, k) in inputs" :key="k">
                                    <div class="variant-header d-flex justify-content-between align-items-center p-3 border-bottom" v-if="has_variant">
                                        <h6 class="mb-0 fw-bold text-primary">Variant {{ k + 1 }}</h6>
                                        <div>
                                            <button v-if="k === 0" type="button" class="btn btn-sm btn-primary" @click="addRow"><i class="fa fa-plus-square"></i> {{ __('add_variant') }}</button>
                                            <button v-if="k !== 0" type="button" class="btn btn-sm btn-outline-danger" @click="remove(k)"><i class="fa fa-times"></i> {{ __('remove_variant') }}</button>
                                        </div>
                                    </div>
                                    <div class="p-3">
                                    <div class="row form-compact-row">
                                        <div class="col-md-4" v-if="has_variant">
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
                                                <div class="input-group">
                                                    <span class="input-group-text p-0 overflow-hidden" style="width: 42px; height: 38px; min-width: 42px; background: #fff;" title="Click to open color palette">
                                                        <input type="color" class="color-picker-input-swatch border-0 p-0 w-100 h-100" style="cursor: pointer; background: transparent;" :value="getColorHex(input)" @input="onColorPickerChange(input, $event.target.value)">
                                                    </span>
                                                    <select class="form-control" :value="getColorSelectValue(input)" @change="handleColorChange(input, $event.target.value)">
                                                        <option value="">Select Color</option>
                                                        <option v-for="color in colorVariantOptions" :key="color.code" :value="color.code">{{ color.emoji }} {{ color.label }} ({{ color.code }})</option>
                                                        <option value="__custom__">🎨 Other / Custom Color...</option>
                                                    </select>
                                                </div>
                                                <div v-if="(input.color_variant || input.color_name) && getColorHex(input) !== '#000000'" class="d-flex align-items-center mt-2 px-2 py-1 rounded border bg-light" style="font-size: 13px;">
                                                    <span class="d-inline-block rounded-circle me-2 border shadow-sm" :style="{ width: '16px', height: '16px', minWidth: '16px', backgroundColor: getColorHex(input) }"></span>
                                                    <span class="text-dark font-weight-medium me-2">{{ getColorLabel(input) }}</span>
                                                    <span class="text-muted ms-auto font-monospace">{{ getColorHex(input) }}</span>
                                                </div>
                                                <div v-if="isCustomColor(input)" class="mt-2 p-2 rounded border bg-light">
                                                    <div class="d-flex justify-content-between align-items-center mb-1">
                                                        <label class="mb-0 text-muted font-weight-bold" style="font-size: 11px; letter-spacing: 0.5px;">CUSTOM COLOR NAME:</label>
                                                        <span class="badge badge-light border text-muted">CUSTOM</span>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="Enter color name (e.g. Olive Green, Midnight Blue)" maxlength="50" :value="input.color_name || ''" @input="onCustomNameInput(input, $event.target.value)">
                                                </div>
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

                                        <div class="col-md-12">
                                            <div class="form-group mb-3">
                                                
                                            </div>
                                        </div>
                                        <div class="col-md-12" v-if="has_variant">
                                            <div class="form-group mb-0 mt-3 border-top pt-3">
                                                <label class="fw-bold">{{ __('variant_images') }} <small class="text-muted">(Multiple allowed)</small></label>
                                                <input type="file" accept="image/*" :ref="'packet_variant_images_' + k"
                                                    multiple class="d-none" v-on:change="variantImagesChanges(k)">
                                                <div class="variant-images-grid d-flex flex-wrap gap-2 mt-2">
                                                    <div class="variant-image-upload" @click="openVariantImagePicker(k, 'packet')" @dragover="$dragoverFile" @dragleave="$dragleaveFile">
                                                        <i class="fa fa-plus fa-lg mb-1"></i>
                                                        <span style="font-size: 0.8rem;">Add Images</span>
                                                    </div>
                                                    <div class="variant-image-preview"
                                                        v-for="(image, index) in (variantImages[k] || [])" :key="'packet_new_image_' + k + '_' + index"
                                                        draggable="true" @dragstart="startMediaDrag('packet-new', index, k)"
                                                        @dragover.prevent @drop.prevent="dropMedia('packet-new', index, k)" @dragend="endMediaDrag">
                                                        <span class="media-order-badge">{{ (input.images || []).length + index + 1 }}</span>
                                                        <img class="img-thumbnail custom-image" :src="image.url" />
                                                        <button type="button" @click="variantImages[k].splice(index, 1)" class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></button>
                                                    </div>
                                                    <div class="variant-image-preview"
                                                        v-for="(image, index) in (input.images || [])" :key="'packet_image_' + image.id"
                                                        draggable="true" @dragstart="startMediaDrag('packet-existing', index, k)"
                                                        @dragover.prevent @drop.prevent="dropMedia('packet-existing', index, k)" @dragend="endMediaDrag">
                                                        <span class="media-order-badge">{{ image.sort_order || index + 1 }}</span>
                                                        <img class="img-thumbnail custom-image" :src="$storageUrl + image.image" />
                                                        <button type="button" @click="deleteImage(index, image.id, false, k)" class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></button>
                                                    </div>
                                                </div>
                                                <p v-if="variantImageerror" class="error mt-2">{{ variantImageerror }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                

<div id="loose_div" class="variant-card modern-card mb-4" v-if="type === 'loose' && !has_variant" v-for="(input, k) in inputs" :key="k">
                                    <div class="variant-header d-flex justify-content-between align-items-center p-3 border-bottom" v-if="has_variant">
                                        <h6 class="mb-0 fw-bold text-primary">Variant {{ k + 1 }}</h6>
                                        <div>
                                            <button v-if="k === 0" type="button" class="btn btn-sm btn-primary" @click="addRow"><i class="fa fa-plus-square"></i> {{ __('add_variant') }}</button>
                                            <button v-if="k !== 0" type="button" class="btn btn-sm btn-outline-danger" @click="remove(k)"><i class="fa fa-times"></i> {{ __('remove_variant') }}</button>
                                        </div>
                                    </div>
                                    <div class="p-3">
                                    <div class="row form-compact-row">
                                        <div class="col-md-4" v-if="has_variant">
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
                                                <div class="input-group">
                                                    <span class="input-group-text p-0 overflow-hidden" style="width: 42px; height: 38px; min-width: 42px; background: #fff;" title="Click to open color palette">
                                                        <input type="color" class="color-picker-input-swatch border-0 p-0 w-100 h-100" style="cursor: pointer; background: transparent;" :value="getColorHex(input)" @input="onColorPickerChange(input, $event.target.value)">
                                                    </span>
                                                    <select class="form-control" :value="getColorSelectValue(input)" @change="handleColorChange(input, $event.target.value)">
                                                        <option value="">Select Color</option>
                                                        <option v-for="color in colorVariantOptions" :key="color.code" :value="color.code">{{ color.emoji }} {{ color.label }} ({{ color.code }})</option>
                                                        <option value="__custom__">🎨 Other / Custom Color...</option>
                                                    </select>
                                                </div>
                                                <div v-if="(input.color_variant || input.color_name) && getColorHex(input) !== '#000000'" class="d-flex align-items-center mt-2 px-2 py-1 rounded border bg-light" style="font-size: 13px;">
                                                    <span class="d-inline-block rounded-circle me-2 border shadow-sm" :style="{ width: '16px', height: '16px', minWidth: '16px', backgroundColor: getColorHex(input) }"></span>
                                                    <span class="text-dark font-weight-medium me-2">{{ getColorLabel(input) }}</span>
                                                    <span class="text-muted ms-auto font-monospace">{{ getColorHex(input) }}</span>
                                                </div>
                                                <div v-if="isCustomColor(input)" class="mt-2 p-2 rounded border bg-light">
                                                    <div class="d-flex justify-content-between align-items-center mb-1">
                                                        <label class="mb-0 text-muted font-weight-bold" style="font-size: 11px; letter-spacing: 0.5px;">CUSTOM COLOR NAME:</label>
                                                        <span class="badge badge-light border text-muted">CUSTOM</span>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="Enter color name (e.g. Olive Green, Midnight Blue)" maxlength="50" :value="input.color_name || ''" @input="onCustomNameInput(input, $event.target.value)">
                                                </div>
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
                                            <div class="col-md-12">
                                                <div class="form-group mb-3 loose_div">
                                                    
                                                </div>
                                            </div>
                                            <div class="col-md-12" v-if="k !== 0">
                                                <div class="form-group loose_div">
                                        <div class="col-md-12" v-if="has_variant">
                                            <div class="form-group mb-0 mt-3 border-top pt-3">
                                                <label class="fw-bold">{{ __('variant_images') }} <small class="text-muted">(Multiple allowed)</small></label>
                                                <input type="file" accept="image/*" :ref="'loose_variant_images_' + k"
                                                    multiple class="d-none" v-on:change="variantImagesChanges(k)">
                                                <div class="variant-images-grid d-flex flex-wrap gap-2 mt-2">
                                                    <div class="variant-image-upload" @click="openVariantImagePicker(k, 'loose')" @dragover="$dragoverFile" @dragleave="$dragleaveFile">
                                                        <i class="fa fa-plus fa-lg mb-1"></i>
                                                        <span style="font-size: 0.8rem;">Add Images</span>
                                                    </div>
                                                    <div class="variant-image-preview"
                                                        v-for="(image, index) in (variantImages[k] || [])" :key="'loose_new_image_' + k + '_' + index"
                                                        draggable="true" @dragstart="startMediaDrag('loose-new', index, k)"
                                                        @dragover.prevent @drop.prevent="dropMedia('loose-new', index, k)" @dragend="endMediaDrag">
                                                        <span class="media-order-badge">{{ (input.loose_images || []).length + index + 1 }}</span>
                                                        <img class="img-thumbnail custom-image" :src="image.url" />
                                                        <button type="button" @click="variantImages[k].splice(index, 1)" class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></button>
                                                    </div>
                                                    <div class="variant-image-preview"
                                                        v-for="(image, index) in (input.loose_images || [])" :key="'loose_image_' + image.id"
                                                        draggable="true" @dragstart="startMediaDrag('loose-existing', index, k)"
                                                        @dragover.prevent @drop.prevent="dropMedia('loose-existing', index, k)" @dragend="endMediaDrag">
                                                        <span class="media-order-badge">{{ image.sort_order || index + 1 }}</span>
                                                        <img class="img-thumbnail custom-image" :src="$storageUrl + image.image" />
                                                        <button type="button" @click="deleteImage(index, image.id, false, k)" class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></button>
                                                    </div>
                                                </div>
                                                <p v-if="variantImageerror" class="error mt-2">{{ variantImageerror }}</p>
                                            </div>
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

                                </div>
                            </div>
                        </div>


                        <!-- Non-translatable Fields: Show regardless of language tabs since they are hidden -->
                        <div class="card modern-card card-settings mb-4">
                            <div class="card-header border-bottom-0 pb-0">
                                <h5 class="fw-bold mb-0">{{ __('product_settings') }}</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <!-- Row: Category, Product type, Product status -->
                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>{{ __('categories') }} <i class="text-danger">*</i></label>
                                            <multiselect
                                                v-model="selected_categories"
                                                :options="mainCategories"
                                                :placeholder="__('select_categories')"
                                                label="name"
                                                track-by="id"
                                                :multiple="true"
                                                :searchable="true"
                                                :close-on-select="false"
                                                :taggable="false"
                                                @input="onMainCategoriesChange">
                                                <template slot="singleLabel" slot-scope="props">
                                                    <span class="option__desc">
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                    </span>
                                                </template>
                                                <template slot="option" slot-scope="props">
                                                    <div class="option__desc d-flex align-items-center">
                                                        <input type="checkbox" :checked="isCategorySelected(props.option, selected_categories)" class="me-2">
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                    </div>
                                                </template>
                                            </multiselect>
                                            <small class="text-muted">{{ __('select_one_or_more_categories_for_product') }}</small>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>Sub Categories</label>
                                            <multiselect
                                                v-model="selected_sub_categories"
                                                :options="filteredSubCategories"
                                                placeholder="Select Sub Categories"
                                                label="name"
                                                track-by="id"
                                                :multiple="true"
                                                :searchable="true"
                                                :close-on-select="false"
                                                :taggable="false"
                                                @input="onSubCategoriesChange">
                                                <template slot="singleLabel" slot-scope="props">
                                                    <span class="option__desc">
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                    </span>
                                                </template>
                                                <template slot="option" slot-scope="props">
                                                    <div class="option__desc d-flex align-items-center">
                                                        <input type="checkbox" :checked="isCategorySelected(props.option, selected_sub_categories)" class="me-2">
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                    </div>
                                                </template>
                                            </multiselect>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group mb-3">
                                            <label>Sub Sub Categories</label>
                                            <multiselect
                                                v-model="selected_sub_sub_categories"
                                                :options="filteredSubSubCategories"
                                                placeholder="Select Sub Sub Categories"
                                                label="name"
                                                track-by="id"
                                                :multiple="true"
                                                :searchable="true"
                                                :close-on-select="false"
                                                :taggable="false">
                                                <template slot="singleLabel" slot-scope="props">
                                                    <span class="option__desc">
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                    </span>
                                                </template>
                                                <template slot="option" slot-scope="props">
                                                    <div class="option__desc d-flex align-items-center">
                                                        <input type="checkbox" :checked="isCategorySelected(props.option, selected_sub_sub_categories)" class="me-2">
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                    </div>
                                                </template>
                                            </multiselect>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group mb-3">
                                            <label>{{ __('product_type') }} </label>
                                            <select class="form-control" v-model="product_type">
                                                <option value="">{{ __('select_type') }}</option>
                                                <option value="1">{{ __('veg') }}</option>
                                                <option value="2">{{ __('non_veg') }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group mb-3">
                                            <label>{{ __('status') }} <i class="text-danger">*</i></label>
                                            <select class="form-control" v-model="status" required>
                                                <option value="">{{ __('select_status') }}</option>
                                                <option value="1">{{ __('available') }}</option>
                                                <option value="0">{{ __('sold_out') }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group mb-3">
                                            <label>Expiry Date From <small class="text-muted">(DD/MM/YYYY)</small></label>
                                            <input type="date" class="form-control" v-model="expiry_date_from">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group mb-3">
                                            <label>Expiry Date To <small class="text-muted">(DD/MM/YYYY)</small></label>
                                            <input type="date" class="form-control" v-model="expiry_date_to">
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
                        <div class="card modern-card card-description mb-4" v-if="defaultLanguageId">
                            <div class="card-header border-bottom-0 pb-0">
                                <h5 class="fw-bold mb-0">Product Description & Highlights</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div
                                            class="form-group mb-3 d-flex flex-wrap align-items-center">
                                            <button type="button"
                                                class="btn btn-outline-primary me-3 my-2 ai-generate-btn"
                                                @click="generateDescription"
                                                :disabled="isGeneratingAI || isGeneratingCustomAI">
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

                                    <div class="col-md-12" v-if="useCustomPrompt">
                                        <div class="card bg-light border-primary border-opacity-25 mb-3 shadow-none">
                                            <div class="card-body p-3">
                                                <div class="d-flex justify-content-between align-items-center mb-2">
                                                    <label class="fw-bold mb-0 text-primary d-flex align-items-center">
                                                        <i class="fa fa-comment-dots me-2"></i> {{ __('custom_prompt') }}
                                                    </label>
                                                    <span class="badge bg-primary text-white" style="font-size: 11px;">
                                                        <i class="fa fa-magic me-1"></i> Custom AI Generator
                                                    </span>
                                                </div>
                                                <textarea class="form-control mb-2" v-model="customPrompt"
                                                    rows="3"
                                                    placeholder="e.g. Write a catchy and premium description highlighting durability, key features, and benefits. Include bullet highlights and optimize meta settings."></textarea>
                                                
                                                <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
                                                    <div class="d-flex flex-wrap align-items-center gap-2 text-muted" style="font-size: 12px;">
                                                        <span class="badge bg-white text-dark border">
                                                            <i class="fa fa-check text-success me-1"></i> Required: Product Name, Category &amp; Prompt
                                                        </span>
                                                        <span class="badge bg-white text-dark border">
                                                            <i class="fa fa-tags text-info me-1"></i> Auto-detects {{ has_variant ? 'Variants' : 'Single Product' }}
                                                        </span>
                                                    </div>
                                                    <button type="button"
                                                        class="btn btn-primary ai-generate-btn shadow-sm"
                                                        @click="generateFromCustomPrompt"
                                                        :disabled="isGeneratingCustomAI || isGeneratingAI">
                                                        <template v-if="isGeneratingCustomAI">
                                                            <span class="ai-spinner me-2"></span>
                                                            <span class="ai-text-animate">Generating Content...</span>
                                                        </template>
                                                        <template v-else>
                                                            <i class="fa fa-paper-plane me-1"></i> Generate with Custom Prompt
                                                        </template>
                                                    </button>
                                                </div>
                                            </div>
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
                                </div>
                            </div>
                        </div>
                        <div class="card modern-card card-seo mb-4" v-if="defaultLanguageId">
                            <div class="card-header border-bottom-0 pb-0">
                                <h5 class="fw-bold mb-0">{{ __('seo_settings') }}</h5>
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
                        </div>

                        </div> <!-- /product-layout -->

                        <div class="sticky-bottom-bar">
                            <div class="d-flex justify-content-end align-items-center">
                                <button type="button" class="btn btn-light-secondary me-3" @click="clearForm" style="font-weight: 500; padding: 10px 24px;">{{ __('clear') }}</button>
                                <b-button type="submit" @keydown.enter="saveRecord" variant="primary" :disabled="isLoading" class="btn-save"> 
                                    <i class="fa fa-save me-2"></i> {{ __('save_product') }}
                                    <b-spinner v-if="isLoading" small label="Spinning" class="ms-2"></b-spinner>
                                </b-button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <edit-brand ref="editBrandModal" @saved="handleBrandCreated"></edit-brand>
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
import EditBrand from './Brands/Edit.vue';

export default {
    mixins: [TranslationHelper],
    // register the component
    components: { Multiselect, 'editor': Editor, EditBrand },
    data: function () {
        return {
            login_user: Auth.user,
            isLoading: false,
            isGeneratingAI: false, // Track AI content generation state
            isGeneratingCustomAI: false, // Track Custom Prompt AI generation state
            aiDebugInfo: null,
            showAiDebug: false,
            cacheTimer: null,
            cachedData: null,
            skipCache: false,

            name: '',
            slug: '',
            seller_id: '',
            brand: null,
            tax_id: 0,
            type: 'packet',
            has_variant: true,
            category_id: '',
            product_category_id: '',
            product_subcategory_id: '',
            product_sub_subcategory_id: '',
            product_sub_sub_subcategory_id: '',
            selected_categories: [], // For multi-category selection
            selected_sub_categories: [], // For sub categories selection
            selected_sub_sub_categories: [], // For sub sub categories selection
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
                { code: '#000000', value: '#000000', label: 'Black', emoji: '⚫' },
                { code: '#FFFFFF', value: '#FFFFFF', label: 'White', emoji: '⚪' },
                { code: '#FAF9F6', value: '#FAF9F6', label: 'Off White', emoji: '⚪' },
                { code: '#808080', value: '#808080', label: 'Grey', emoji: '🔘' },
                { code: '#D3D3D3', value: '#D3D3D3', label: 'Light Grey', emoji: '🔘' },
                { code: '#5A5A5A', value: '#5A5A5A', label: 'Dark Grey', emoji: '🔘' },
                { code: '#36454F', value: '#36454F', label: 'Charcoal', emoji: '⚫' },
                { code: '#C0C0C0', value: '#C0C0C0', label: 'Silver', emoji: '🪙' },
                { code: '#FF0000', value: '#FF0000', label: 'Red', emoji: '🔴' },
                { code: '#DC143C', value: '#DC143C', label: 'Crimson', emoji: '🔴' },
                { code: '#800000', value: '#800000', label: 'Maroon', emoji: '🍷' },
                { code: '#800020', value: '#800020', label: 'Burgundy', emoji: '🍷' },
                { code: '#722F37', value: '#722F37', label: 'Wine', emoji: '🍷' },
                { code: '#FFC0CB', value: '#FFC0CB', label: 'Pink', emoji: '🌸' },
                { code: '#F4C2C2', value: '#F4C2C2', label: 'Baby Pink', emoji: '🌸' },
                { code: '#FF66CC', value: '#FF66CC', label: 'Rose Pink', emoji: '🌸' },
                { code: '#FF00FF', value: '#FF00FF', label: 'Magenta', emoji: '🌺' },
                { code: '#FF69B4', value: '#FF69B4', label: 'Hot Pink', emoji: '🌺' },
                { code: '#FFE5B4', value: '#FFE5B4', label: 'Peach', emoji: '🍑' },
                { code: '#FF7F50', value: '#FF7F50', label: 'Coral', emoji: '🧡' },
                { code: '#FFA500', value: '#FFA500', label: 'Orange', emoji: '🟠' },
                { code: '#B7410E', value: '#B7410E', label: 'Rust', emoji: '🟫' },
                { code: '#FFFF00', value: '#FFFF00', label: 'Yellow', emoji: '🟡' },
                { code: '#FFDB58', value: '#FFDB58', label: 'Mustard', emoji: '🌾' },
                { code: '#FFF44F', value: '#FFF44F', label: 'Lemon Yellow', emoji: '🍋' },
                { code: '#FFD700', value: '#FFD700', label: 'Gold', emoji: '✨' },
                { code: '#0000FF', value: '#0000FF', label: 'Blue', emoji: '🔵' },
                { code: '#000080', value: '#000080', label: 'Navy Blue', emoji: '🫐' },
                { code: '#4169E1', value: '#4169E1', label: 'Royal Blue', emoji: '👑' },
                { code: '#87CEEB', value: '#87CEEB', label: 'Sky Blue', emoji: '🩵' },
                { code: '#89CFF0', value: '#89CFF0', label: 'Baby Blue', emoji: '🩵' },
                { code: '#008080', value: '#008080', label: 'Teal', emoji: '🩵' },
                { code: '#00FFFF', value: '#00FFFF', label: 'Cyan / Aqua', emoji: '🩵' },
                { code: '#008000', value: '#008000', label: 'Green', emoji: '🟢' },
                { code: '#006400', value: '#006400', label: 'Dark Green', emoji: '🌲' },
                { code: '#556B2F', value: '#556B2F', label: 'Olive Green', emoji: '🫒' },
                { code: '#98FF98', value: '#98FF98', label: 'Mint Green', emoji: '🌿' },
                { code: '#32CD32', value: '#32CD32', label: 'Lime Green', emoji: '🍋' },
                { code: '#004225', value: '#004225', label: 'Bottle Green', emoji: '🌲' },
                { code: '#800080', value: '#800080', label: 'Purple', emoji: '🟣' },
                { code: '#E6E6FA', value: '#E6E6FA', label: 'Lavender', emoji: '🪻' },
                { code: '#8F00FF', value: '#8F00FF', label: 'Violet', emoji: '🟣' },
                { code: '#8B4513', value: '#8B4513', label: 'Brown', emoji: '🟤' },
                { code: '#3D1C02', value: '#3D1C02', label: 'Chocolate Brown', emoji: '🍫' },
                { code: '#D2B48C', value: '#D2B48C', label: 'Tan', emoji: '🪵' },
                { code: '#F5F5DC', value: '#F5F5DC', label: 'Beige', emoji: '🪵' },
                { code: '#FFFDD0', value: '#FFFDD0', label: 'Cream', emoji: '🥛' },
                { code: '#C3B091', value: '#C3B091', label: 'Khaki', emoji: '🪵' },
                { code: '#B87333', value: '#B87333', label: 'Copper', emoji: '🪙' },
                { code: '#CD7F32', value: '#CD7F32', label: 'Bronze', emoji: '🪙' },
                { code: '#4A90E2', value: '#4A90E2', label: 'Multi Color', emoji: '🌈' },
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
            expiry_date_from: '',
            expiry_date_to: '',
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
                color_name: '',
                color_custom_hex: '',
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
        allCategoriesFlat() {
            // Return all categories as a flat list for multi-select
            return this.productCategoryList.map(category => ({
                id: category.id,
                name: category.name,
                parent_id: category.parent_id
            }));
        },
        mainCategories() {
            return this.allCategoriesFlat.filter(c => !c.parent_id || c.parent_id == 0);
        },
        filteredSubCategories() {
            if (!this.selected_categories || this.selected_categories.length === 0) return [];
            const selectedIds = this.selected_categories.map(c => c.id);
            return this.allCategoriesFlat.filter(c => selectedIds.includes(c.parent_id));
        },
        filteredSubSubCategories() {
            if (!this.selected_sub_categories || this.selected_sub_categories.length === 0) return [];
            const selectedIds = this.selected_sub_categories.map(c => c.id);
            return this.allCategoriesFlat.filter(c => selectedIds.includes(c.parent_id));
        },
        selectedProductCategoryId() {
            // Fallback for backward compatibility
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
        handleBrandCreated(message) {
            // Re-fetch brands when a new one is created
            this.getBrands();
            this.showMessage("success", message);
        },
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
            const productName = this.translations[this.defaultLanguageId]?.name || '';
            const isPacket = this.type === 'packet';
            const input0 = this.inputs && this.inputs.length > 0 ? this.inputs[0] : {};
            
            const mrp = isPacket ? input0.packet_price : input0.loose_price;
            const measurement = isPacket ? input0.packet_measurement : input0.loose_measurement;
            const stock = isPacket ? input0.packet_stock : this.loose_stock;
            const isUnlimitedStock = this.is_unlimited_stock == 1;

            if (!productName) {
                this.showMessage("error", "Please enter the product name.");
                return;
            }
            if (!this.brand) {
                this.showMessage("error", "Please select a brand.");
                return;
            }
            if (!this.image && !this.main_image_name && !this.main_image_path) {
                this.showMessage("error", "Please upload a product main image.");
                return;
            }
            if (!measurement) {
                this.showMessage("error", "Please enter unit measurement.");
                return;
            }
            if (!mrp) {
                this.showMessage("error", "Please enter MRP.");
                return;
            }
            if (!isUnlimitedStock && (!stock || stock <= 0)) {
                this.showMessage("error", "Please enter available quantity.");
                return;
            }
            if (!this.selected_categories || this.selected_categories.length === 0) {
                this.showMessage("error", "Please select at least one category.");
                return;
            }
            if (!this.made_in) {
                this.showMessage("error", "Please specify made in (country).");
                return;
            }
            if (this.return_status === '' || this.return_status === null) {
                this.showMessage("error", "Please select if product is returnable.");
                return;
            }
            if (this.cancelable_status === '' || this.cancelable_status === null) {
                this.showMessage("error", "Please select if product is cancelable.");
                return;
            }

            const apiKey = process.env.MIX_GEMINI_API_KEY || this.textGenKey;
            if (!apiKey) {
                this.showMessage("error", "Text generation API key is not configured.");
                return;
            }

            const variants = this.inputs.map(input => {
                return {
                    measurement: isPacket ? input.packet_measurement : input.loose_measurement,
                    price: isPacket ? input.packet_price : input.loose_price,
                    discounted_price: isPacket ? input.discounted_price : input.loose_discounted_price,
                    available_stock_quantity: isUnlimitedStock ? 'Unlimited' : (isPacket ? input.packet_stock : this.loose_stock)
                };
            });

            const productContext = {
                name: productName,
                brand: this.brand.name || '',
                category: this.selected_categories.map(c => c.name).join(', '),
                sub_category: this.selected_sub_categories ? this.selected_sub_categories.map(c => c.name).join(', ') : '',
                sub_sub_category: this.selected_sub_sub_categories ? this.selected_sub_sub_categories.map(c => c.name).join(', ') : '',
                made_in: this.made_in,
                returnable: this.return_status == 1 ? 'Yes' : 'No',
                cancelable: this.cancelable_status == 1 ? 'Yes' : 'No',
                variants: variants
            };

            const customPrompt = this.useCustomPrompt && this.customPrompt.trim() ? this.customPrompt.trim() : null;

            try {
                this.isGeneratingAI = true;
                this.aiDebugInfo = "Sending request to Gemini API via backend...\nProduct Context:\n" + JSON.stringify(productContext, null, 2) + "\n\n";
                const response = await axios.post(this.$apiUrl + '/products/google_gemini', {
                    product_context: productContext,
                    custom_prompt: customPrompt,
                    source: 'web'
                });

                const data = response.data;
                this.aiDebugInfo += "Response received from Backend:\n" + JSON.stringify(data, null, 2) + "\n\n";

                if (data.status === 1 && data.data) {
                    let parsed = data.data;
                    this.aiDebugInfo += "Successfully parsed JSON:\n" + JSON.stringify(parsed, null, 2);
                    
                    if (this.defaultLanguageId && this.translations[this.defaultLanguageId]) {
                        if (parsed.description) this.$set(this.translations[this.defaultLanguageId], 'description', parsed.description);
                        if (parsed.highlights) this.$set(this.translations[this.defaultLanguageId], 'highlights', parsed.highlights);
                        if (parsed.meta_title) this.$set(this.translations[this.defaultLanguageId], 'meta_title', parsed.meta_title);
                        if (parsed.meta_keywords) this.$set(this.translations[this.defaultLanguageId], 'meta_keywords', parsed.meta_keywords);
                        if (parsed.meta_description) this.$set(this.translations[this.defaultLanguageId], 'meta_description', parsed.meta_description);
                        if (parsed.schema_markup) this.$set(this.translations[this.defaultLanguageId], 'schema_markup', typeof parsed.schema_markup === 'object' ? JSON.stringify(parsed.schema_markup) : parsed.schema_markup);
                    }
                    this.showMessage("success", "Content generated successfully!");
                } else if (data.message) {
                    this.aiDebugInfo += "API ERROR:\n" + data.message;
                    this.showMessage("error", "API Error: " + data.message);
                } else {
                    this.aiDebugInfo += "Failed to generate content: Unexpected response structure.";
                    this.showMessage("error", "Failed to generate content.");
                }
            } catch (error) {
                this.aiDebugInfo += "NETWORK/REQUEST ERROR:\n" + error.message;
                console.error(error);
                this.showMessage("error", "An error occurred while generating the content.");
            } finally {
                this.isGeneratingAI = false;
            }
        },

        async generateFromCustomPrompt() {
            if (this.$isDemo == 1) {
                this.showError("This function is not available in demo mode.");
                return;
            }

            // Determine active or default language ID
            const langId = this.defaultLanguageId || (this.languages && this.languages.find(l => l.is_default)?.id) || (this.translations ? Object.keys(this.translations)[0] : null);
            const productName = (langId && this.translations && this.translations[langId]?.name) || this.name || '';

            if (!productName || !productName.trim()) {
                this.showMessage("error", "Please enter the product name.");
                return;
            }

            if (!this.selected_categories || this.selected_categories.length === 0) {
                this.showMessage("error", "Please select at least one category.");
                return;
            }

            const promptText = this.customPrompt ? this.customPrompt.trim() : '';
            if (!promptText) {
                this.showMessage("error", "Please enter your custom prompt.");
                return;
            }

            const apiKey = process.env.MIX_GEMINI_API_KEY || this.textGenKey;
            if (!apiKey) {
                this.showMessage("error", "Text generation API key is not configured.");
                return;
            }

            const hasVariants = !!this.has_variant;
            const isPacket = this.type === 'packet';

            let variantList = [];
            if (hasVariants && this.inputs && this.inputs.length > 0) {
                variantList = this.inputs.map(input => {
                    const item = {};
                    if (input.variant_name) item.variant_name = input.variant_name;
                    const meas = isPacket ? input.packet_measurement : input.loose_measurement;
                    if (meas) item.measurement = meas;
                    const price = isPacket ? input.packet_price : input.loose_price;
                    if (price) item.price = price;
                    const color = input.color_name || (input.color_variant && input.color_variant !== '__custom__' ? input.color_variant : '');
                    if (color) item.color = color;
                    return Object.keys(item).length > 0 ? item : null;
                }).filter(Boolean);
            }

            const categoryNames = this.selected_categories.map(c => c.name).join(', ');
            const subCategoryNames = this.selected_sub_categories ? this.selected_sub_categories.map(c => c.name).join(', ') : '';
            const subSubCategoryNames = this.selected_sub_sub_categories ? this.selected_sub_sub_categories.map(c => c.name).join(', ') : '';

            const productContext = {
                name: productName.trim(),
                category: categoryNames,
                sub_category: subCategoryNames || undefined,
                sub_sub_category: subSubCategoryNames || undefined,
                brand: this.brand && this.brand.name ? this.brand.name : undefined,
                has_variants: hasVariants,
                product_structure: hasVariants ? 'Product with multiple variants' : 'Single product (no variants)',
                variants: hasVariants && variantList.length > 0 ? variantList : (hasVariants ? 'Variants enabled' : 'Single product')
            };

            try {
                this.isGeneratingCustomAI = true;
                const response = await axios.post(this.$apiUrl + '/products/google_gemini', {
                    product_context: productContext,
                    custom_prompt: promptText,
                    source: 'web'
                });

                const data = response.data;

                if (data.status === 1 && data.data) {
                    let parsed = data.data;

                    if (langId && this.translations && this.translations[langId]) {
                        if (parsed.description) this.$set(this.translations[langId], 'description', parsed.description);
                        if (parsed.highlights) this.$set(this.translations[langId], 'highlights', parsed.highlights);
                        if (parsed.meta_title) this.$set(this.translations[langId], 'meta_title', parsed.meta_title);
                        if (parsed.meta_keywords) this.$set(this.translations[langId], 'meta_keywords', parsed.meta_keywords);
                        if (parsed.meta_description) this.$set(this.translations[langId], 'meta_description', parsed.meta_description);
                        if (parsed.schema_markup) {
                            const schemaStr = typeof parsed.schema_markup === 'object' ? JSON.stringify(parsed.schema_markup, null, 2) : parsed.schema_markup;
                            this.$set(this.translations[langId], 'schema_markup', schemaStr);
                        }
                    }

                    if (parsed.description) this.description = parsed.description;
                    if (parsed.highlights) this.highlights = parsed.highlights;
                    if (parsed.meta_title) this.meta_title = parsed.meta_title;
                    if (parsed.meta_keywords) this.meta_keywords = parsed.meta_keywords;
                    if (parsed.meta_description) this.meta_description = parsed.meta_description;
                    if (parsed.schema_markup) {
                        this.schema_markup = typeof parsed.schema_markup === 'object' ? JSON.stringify(parsed.schema_markup, null, 2) : parsed.schema_markup;
                    }

                    this.showMessage("success", "Description, highlights & meta settings generated successfully from custom prompt!");
                } else if (data.message) {
                    this.showMessage("error", "API Error: " + data.message);
                } else {
                    this.showMessage("error", "Failed to generate content.");
                }
            } catch (error) {
                console.error(error);
                this.showMessage("error", "An error occurred while generating content: " + (error.response?.data?.message || error.message));
            } finally {
                this.isGeneratingCustomAI = false;
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
                color_name: '',
                color_custom_hex: '',
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
        getColorHex(inputOrColor) {
            if (!inputOrColor) return '#000000';
            let color = '';
            if (typeof inputOrColor === 'object') {
                if (inputOrColor.color_custom_hex) return String(inputOrColor.color_custom_hex).toUpperCase();
                color = inputOrColor.color_variant;
            } else {
                color = inputOrColor;
            }
            if (!color || color === '__custom__') return '#000000';
            const clean = String(color).trim();
            const hexMatch = clean.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b/);
            if (hexMatch) return hexMatch[0].toUpperCase();
            if (/^[0-9A-Fa-f]{6}$/.test(clean)) return ('#' + clean).toUpperCase();
            if (/^[0-9A-Fa-f]{3}$/.test(clean)) {
                return ('#' + clean[0] + clean[0] + clean[1] + clean[1] + clean[2] + clean[2]).toUpperCase();
            }
            const lower = clean.toLowerCase();
            const found = this.colorVariantOptions.find(opt => 
                (opt.label && opt.label.toLowerCase() === lower) ||
                (opt.code && opt.code.toLowerCase() === lower) ||
                (opt.value && opt.value.toLowerCase() === lower) ||
                (opt.label && opt.label.toLowerCase().replace(/\s+/g, '_') === lower)
            );
            if (found && found.code) return found.code.toUpperCase();
            return '#000000';
        },
        getColorSelectValue(inputOrColor) {
            if (!inputOrColor) return '';
            let color = '';
            let customName = '';
            if (typeof inputOrColor === 'object') {
                color = inputOrColor.color_variant;
                customName = inputOrColor.color_name;
            } else {
                color = inputOrColor;
            }
            if (!color && !customName) return '';
            if (color === '__custom__') return '__custom__';

            const clean = String(color).trim().toLowerCase();
            const hexMatch = clean.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b/);
            const hex = hexMatch ? hexMatch[0].toLowerCase() : '';
            const nameMatch = clean.match(/^(.*?)\s*\((#[0-9A-Fa-f]{3,6})\)$/);

            // 1. If format is "Name (#HEX)"
            if (nameMatch) {
                const name = nameMatch[1].trim().toLowerCase();
                const matchedHex = nameMatch[2].trim().toLowerCase();
                // If a custom name is explicitly provided and doesn't match the preset name
                if (customName && String(customName).trim().toLowerCase() !== name) {
                    return '__custom__';
                }
                const preset = this.colorVariantOptions.find(option => 
                    option.label.toLowerCase() === name && option.code.toLowerCase() === matchedHex
                );
                return preset ? preset.code : '__custom__';
            }

            // 2. If a custom name is explicitly provided, treat as custom unless exactly matching a preset
            if (customName && String(customName).trim()) {
                const trimmedCustomName = String(customName).trim().toLowerCase();
                const preset = this.colorVariantOptions.find(option => 
                    option.label.toLowerCase() === trimmedCustomName && 
                    hex && option.code.toLowerCase() === hex
                );
                return preset ? preset.code : '__custom__';
            }

            // 3. Match presets by hex or label
            const found = this.colorVariantOptions.find(option => 
                (hex && option.code && option.code.toLowerCase() === hex) ||
                (option.code && option.code.toLowerCase() === clean) ||
                (option.label && option.label.toLowerCase() === clean) ||
                (option.value && option.value.toLowerCase() === clean)
            );
            if (found) return found.code;
            return '__custom__';
        },
        isCustomColor(inputOrColor) {
            if (!inputOrColor) return false;
            let color = '';
            let customName = '';
            if (typeof inputOrColor === 'object') {
                color = inputOrColor.color_variant;
                customName = inputOrColor.color_name;
            } else {
                color = inputOrColor;
            }
            if (color === '__custom__') return true;
            if (customName && String(customName).trim()) return true;
            if (!color) return false;
            return this.getColorSelectValue(inputOrColor) === '__custom__';
        },
        getColorLabel(inputOrColor) {
            if (!inputOrColor) return '';
            let color = '';
            let customName = '';
            if (typeof inputOrColor === 'object') {
                color = inputOrColor.color_variant;
                customName = inputOrColor.color_name;
            } else {
                color = inputOrColor;
            }
            if (!color && !customName) return '';
            if (color === '__custom__') {
                return customName ? `🎨 ${customName}` : '🎨 Custom Color';
            }
            const selectValue = this.getColorSelectValue(inputOrColor);
            if (selectValue && selectValue !== '__custom__') {
                const found = this.colorVariantOptions.find(opt => opt.code === selectValue);
                if (found) return `${found.emoji} ${found.label}`;
            }
            if (customName && String(customName).trim()) {
                return `🎨 ${String(customName).trim()}`;
            }
            const nameMatch = String(color).trim().match(/^(.*?)\s*\(#([0-9A-Fa-f]{3,6})\)$/);
            if (nameMatch && nameMatch[1].trim()) {
                return `🎨 ${nameMatch[1].trim()}`;
            }
            return '🎨 Custom Color';
        },
        getDisplayHex(input) {
            if (!input || !input.color_variant || input.color_variant === '__custom__') return '';
            const hex = this.getColorHex(input);
            return (hex && hex !== '#000000') ? hex : (String(input.color_variant).startsWith('#') ? input.color_variant : '');
        },
        extractColorName(val) {
            if (!val) return '';
            const str = String(val).trim();
            const match = str.match(/^(.*?)\s*\((#[0-9A-Fa-f]{3,6})\)$/);
            if (match) {
                const name = match[1].trim();
                if (name.toLowerCase() === 'custom color' || name.toLowerCase() === 'custom') return '';
                const isPreset = this.colorVariantOptions.some(opt => opt.label.toLowerCase() === name.toLowerCase());
                return isPreset ? '' : name;
            }
            if (str.startsWith('#')) return '';
            const isPreset = this.colorVariantOptions.some(opt => 
                opt.label.toLowerCase() === str.toLowerCase() || 
                opt.code.toLowerCase() === str.toLowerCase()
            );
            if (isPreset) return '';
            return str;
        },
        handleColorChange(input, value) {
            if (value === '__custom__') {
                const currentHex = this.getColorHex(input);
                Vue.set(input, 'color_variant', '__custom__');
                Vue.set(input, 'color_custom_hex', currentHex && currentHex !== '#000000' ? currentHex : '#4A90E2');
            } else if (value) {
                Vue.set(input, 'color_variant', value);
                Vue.set(input, 'color_name', '');
                Vue.set(input, 'color_custom_hex', '');
            } else {
                Vue.set(input, 'color_variant', '');
                Vue.set(input, 'color_name', '');
                Vue.set(input, 'color_custom_hex', '');
            }
        },
        onColorPickerChange(input, hex) {
            if (hex) {
                const upperHex = hex.toUpperCase();
                Vue.set(input, 'color_custom_hex', upperHex);
                if (!input.color_name || !String(input.color_name).trim()) {
                    const preset = this.colorVariantOptions.find(opt => opt.code.toUpperCase() === upperHex);
                    if (preset) {
                        Vue.set(input, 'color_variant', preset.code);
                        return;
                    }
                }
                Vue.set(input, 'color_variant', upperHex);
            }
        },
        onCustomTextInput(input, text) {
            const val = text ? text.trim() : '';
            Vue.set(input, 'color_variant', val ? val : '__custom__');
        },
        onCustomNameInput(input, name) {
            Vue.set(input, 'color_name', name);
            if (!input.color_variant || input.color_variant === '__custom__') {
                const hex = input.color_custom_hex || '#4A90E2';
                Vue.set(input, 'color_custom_hex', hex);
                Vue.set(input, 'color_variant', hex);
            }
        },
        getColorForSave(input) {
            if (!input) return '';
            const color = input.color_variant;
            if (!color && !input.color_name) return '';

            const hex = this.getColorHex(input);
            const selectValue = this.getColorSelectValue(input);
            const isPreset = selectValue && selectValue !== '__custom__';

            if (isPreset) {
                const found = this.colorVariantOptions.find(opt => opt.code === selectValue);
                const label = found ? found.label : '';
                if (label && hex && hex !== '#000000') {
                    return `${label} (${hex})`;
                }
                return label || hex;
            }

            // Custom color
            const customName = input.color_name ? String(input.color_name).trim() : '';
            if (customName && hex && hex !== '#000000') {
                return `${customName} (${hex})`;
            }
            if (customName) return customName;
            if (hex && hex !== '#000000') {
                return `Custom Color (${hex})`;
            }
            return hex || '';
        },
        getPresetColor(color) {
            return this.getColorSelectValue(color);
        },
        setVariantColor(input, color) {
            this.handleColorChange(input, color);
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

                        // Load all categories (primary + additional) for multi-category selection
                        this.selected_categories = [];
                        this.selected_sub_categories = [];
                        this.selected_sub_sub_categories = [];
                        
                        // --- START ROBUST CATEGORY PARSER ---
                        const allCategoryIds = new Set();
                        
                        const parseIds = (val) => {
                            if (!val) return;
                            String(val).split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id)).forEach(id => allCategoryIds.add(id));
                        };

                        parseIds(this.record.category_id);
                        parseIds(this.record.additional_category_ids);
                        parseIds(this.record.sub_category_id);
                        parseIds(this.record.sub_sub_category_id);

                        allCategoryIds.forEach(id => {
                            const cat = this.productCategoryList.find(c => c.id === id);
                            if (cat) {
                                const isRoot = !cat.parent_id || parseInt(cat.parent_id) === 0;
                                if (isRoot) {
                                    if (!this.selected_categories.some(c => c.id === cat.id)) {
                                        this.selected_categories.push(cat);
                                    }
                                } else {
                                    const parent = this.productCategoryList.find(p => p.id === parseInt(cat.parent_id));
                                    if (parent && (!parent.parent_id || parseInt(parent.parent_id) === 0)) {
                                        if (!this.selected_sub_categories.some(c => c.id === cat.id)) {
                                            this.selected_sub_categories.push(cat);
                                        }
                                    } else if (parent) {
                                        if (!this.selected_sub_sub_categories.some(c => c.id === cat.id)) {
                                            this.selected_sub_sub_categories.push(cat);
                                        }
                                    }
                                }
                            }
                        });
                        // --- END ROBUST CATEGORY PARSER ---

                        // Add primary category (Disabled because handled above)
                        this.record.category_id = null;
                        this.record.additional_category_ids = null;
                        this.record.sub_category_id = null;
                        this.record.sub_sub_category_id = null;
                        
                        // Add primary category
                        if (this.record.category_id) {
                            const primaryCategory = this.productCategoryList.find(cat => cat.id === this.record.category_id);
                            if (primaryCategory) {
                                this.selected_categories.push(primaryCategory);
                            }
                        }
                        
                        // Add additional categories
                        if (this.record.additional_category_ids) {
                            const additionalIds = this.record.additional_category_ids.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
                            const additionalCategories = this.productCategoryList.filter(cat => 
                                additionalIds.includes(cat.id) && cat.id !== this.record.category_id
                            );
                            
                            // Categorize them into main, sub, sub-sub
                            additionalCategories.forEach(cat => {
                                if (!cat.parent_id || cat.parent_id == 0) {
                                    if (!this.selected_categories.some(c => c.id === cat.id)) {
                                        this.selected_categories.push(cat);
                                    }
                                } else {
                                    const parent = this.productCategoryList.find(p => p.id === cat.parent_id);
                                    if (parent && (!parent.parent_id || parent.parent_id == 0)) {
                                        this.selected_sub_categories.push(cat);
                                    } else if (parent) {
                                        this.selected_sub_sub_categories.push(cat);
                                    }
                                }
                            });
                        }
                        if (this.record.sub_category_id) {
                            const subCatId = parseInt(this.record.sub_category_id);
                            const subCategory = this.productCategoryList.find(cat => cat.id === subCatId);
                            if (subCategory && !this.selected_sub_categories.some(c => c.id === subCatId)) {
                                this.selected_sub_categories.push(subCategory);
                            }
                        }
                        if (this.record.sub_sub_category_id) {
                            const subSubCatId = parseInt(this.record.sub_sub_category_id);
                            const subSubCategory = this.productCategoryList.find(cat => cat.id === subSubCatId);
                            if (subSubCategory && !this.selected_sub_sub_categories.some(c => c.id === subSubCatId)) {
                                this.selected_sub_sub_categories.push(subSubCategory);
                            }
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
                                    'color_name': vm.extractColorName(item.color_variant),
                                    'color_custom_hex': vm.getColorHex(item.color_variant),
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
                                    'color_name': vm.extractColorName(item.color_variant),
                                    'color_custom_hex': vm.getColorHex(item.color_variant),
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

            // Validate category selection
            if (!this.selected_categories || this.selected_categories.length === 0) {
                this.showError(__('please_select_at_least_one_category'));
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
            formData.append('has_variant', this.has_variant ? 1 : 0);

            /*packet*/
            if (this.type === 'packet') {
                for (let i = 0; i < this.inputs.length; i++) {

                    formData.append('variant_id[]', (this.inputs[i].id) ? this.inputs[i].id : "");
                    formData.append('packet_variant_name[]', this.inputs[i].variant_name || '');
                    formData.append('packet_color_variant[]', this.getColorForSave(this.inputs[i]));
                    formData.append('packet_color_name[]', this.inputs[i].color_name || '');
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
                    formData.append('loose_color_variant[]', this.getColorForSave(this.inputs[i]));
                    formData.append('loose_color_name[]', this.inputs[i].color_name || '');
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
            formData.append('expiry_date_from', this.expiry_date_from || '');
            formData.append('expiry_date_to', this.expiry_date_to || '');

            // Handle multi-category selection
            let finalCategories = [];
            if (this.selected_categories) finalCategories.push(...this.selected_categories);
            if (this.selected_sub_categories) finalCategories.push(...this.selected_sub_categories);
            if (this.selected_sub_sub_categories) finalCategories.push(...this.selected_sub_sub_categories);

            if (finalCategories.length > 0) {
                // Use the first selected main category as the primary category_id
                this.category_id = this.selected_categories[0] ? this.selected_categories[0].id : finalCategories[0].id;
                formData.append('category_id', this.category_id);
                
                if (this.selected_sub_categories && this.selected_sub_categories.length > 0) {
                    formData.append('sub_category_id', this.selected_sub_categories.map(c => c.id).join(','));
                }
                if (this.selected_sub_sub_categories && this.selected_sub_sub_categories.length > 0) {
                    formData.append('sub_sub_category_id', this.selected_sub_sub_categories.map(c => c.id).join(','));
                }

                // Send all selected categories as additional_category_ids
                const allCategoryIds = finalCategories.map(cat => cat.id).join(',');
                formData.append('additional_category_ids', allCategoryIds);
            } else {
                // Fallback to original logic if no categories selected
                this.category_id = this.selectedProductCategoryId;
                formData.append('category_id', this.category_id);
                
                if (this.product_subcategory_id) formData.append('sub_category_id', this.product_subcategory_id);
                if (this.product_sub_subcategory_id) formData.append('sub_sub_category_id', this.product_sub_subcategory_id);

                formData.append('additional_category_ids', '');
            }
            
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
                description: '', highlights: '', type: 'packet', has_variant: true, is_unlimited_stock: 0,
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
        },
        isCategorySelected(option, list) {
            return list && list.some(item => item.id === option.id);
        },
        onMainCategoriesChange(newVal) {
            if (this.selected_sub_categories && this.selected_sub_categories.length > 0) {
                const selectedIds = newVal.map(c => c.id);
                this.selected_sub_categories = this.selected_sub_categories.filter(sc => selectedIds.includes(sc.parent_id));
                this.onSubCategoriesChange(this.selected_sub_categories);
            }
        },
        onSubCategoriesChange(newVal) {
            if (this.selected_sub_sub_categories && this.selected_sub_sub_categories.length > 0) {
                const selectedIds = newVal.map(c => c.id);
                this.selected_sub_sub_categories = this.selected_sub_sub_categories.filter(ssc => selectedIds.includes(ssc.parent_id));
            }
        }
    },
    watch: {
        has_variant(newVal) {
            if (!newVal && this.inputs.length > 1) {
                this.inputs = [this.inputs[0]];
            }
        },
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


/* Compact UI Overrides for Edit/Create Product Page */
.page-wrapper {
    font-size: 0.85rem;
}
.card-header {
    padding: 0.5rem 1rem !important;
}
.card-header h5 {
    font-size: 1rem !important;
}
.card-body {
    padding: 0.75rem 1rem !important;
}
.form-group.mb-3 {
    margin-bottom: 0.5rem !important;
}
label {
    font-size: 0.75rem !important;
    margin-bottom: 2px !important;
    font-weight: 600;
    color: #444;
}
.form-control, .form-select, select {
    padding: 0.25rem 0.5rem !important;
    font-size: 0.8rem !important;
    height: auto !important;
    min-height: 28px;
    border-radius: 4px;
}
.btn {
    padding: 0.25rem 0.6rem !important;
    font-size: 0.8rem !important;
}
textarea.form-control {
    min-height: 60px;
}
.multiselect__tags {
    min-height: 30px !important;
    padding: 2px 40px 0 8px !important;
    font-size: 0.8rem !important;
}
.multiselect__placeholder {
    margin-bottom: 2px !important;
    padding-top: 2px !important;
}
.multiselect__single {
    margin-bottom: 2px !important;
}
.nav-tabs .nav-link {
    padding: 0.3rem 0.8rem !important;
    font-size: 0.85rem;
}
.input-group-text {
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
}

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

/* Modern Admin UI Styles */
.modern-admin-form {
    background-color: #f4f6f8;
    padding: 15px;
    border-radius: 8px;
}
.product-layout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
    overflow: visible !important;
}
.card-general { grid-column: 1 / 2; grid-row: 1; }
.card-media { grid-column: 1 / 2; grid-row: 2; }
.card-description { grid-column: 1 / 2; grid-row: 3; }
.card-variants { grid-column: 1 / 2; grid-row: 4; }
.card-seo { grid-column: 1 / 2; grid-row: 5; }
.card-settings { grid-column: 2 / 3; grid-row: 1 / 6; }

@media (max-width: 991px) {
    .product-layout {
        grid-template-columns: 1fr;
    }
    .card-settings { grid-column: 1 / 2; grid-row: 2; }
    .card-media { grid-column: 1 / 2; grid-row: 3; }
    .card-description { grid-column: 1 / 2; grid-row: 4; }
    .card-variants { grid-column: 1 / 2; grid-row: 5; }
    .card-seo { grid-column: 1 / 2; grid-row: 6; }
}

.modern-card {
    background: #ffffff;
    border: 1px solid #e1e3e5;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    overflow: visible !important;
    transition: box-shadow 0.2s ease-in-out;
}
.modern-card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.modern-card .card-header {
    padding: 20px 24px 10px;
    background-color: transparent;
}
.modern-card .card-header h5 {
    font-size: 1.1rem;
    margin: 0;
    color: #202223;
}
.modern-card .card-body {
    padding: 16px 24px 24px;
    overflow: visible !important;
}
.form-compact-row .form-group {
    margin-bottom: 12px !important;
}
.form-compact-row label {
    font-weight: 600;
    color: #202223;
    margin-bottom: 6px;
    font-size: 0.9rem;
}
.form-compact-row .form-control, .form-compact-row .multiselect__tags, .form-compact-row select.form-control {
    border: 1px solid #c9cccf;
    border-radius: 6px;
    padding: 8px 12px;
    height: 40px;
    font-size: 0.95rem;
    color: #202223;
}
.sticky-bottom-bar {
    position: sticky;
    bottom: 0;
    background: #ffffff;
    padding: 16px 24px;
    border-top: 1px solid #e1e3e5;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
    z-index: 100;
    margin-top: 30px;
    border-radius: 0 0 12px 12px;
}
.btn-save {
    background-color: #008060;
    border-color: #008060;
    font-weight: 600;
    padding: 10px 30px;
    border-radius: 6px;
    color: white;
}
.btn-save:hover {
    background-color: #006e52;
    border-color: #006e52;
}

/* Variant Image UI */
.variant-images-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
.variant-image-upload {
    width: 80px;
    height: 80px;
    border: 1px dashed #c9cccf;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #f8fafc;
    color: #5c5f62;
    transition: all 0.2s;
}
.variant-image-upload:hover {
    background: #eef4fb;
    border-color: #008060;
    color: #008060;
}
.variant-image-preview {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #e1e3e5;
}
.variant-image-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.variant-image-preview .btn-remove {
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 2px 5px;
    font-size: 10px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.9);
    color: #d82c0d;
    border: 1px solid #e1e3e5;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    opacity: 0;
    transition: opacity 0.2s;
}
.variant-image-preview:hover .btn-remove {
    opacity: 1;
}
.variant-image-preview .btn-remove:hover {
    background: #d82c0d;
    color: white;
}
.variant-card {
    background: #fafbfb;
    border: 1px solid #e1e3e5;
}

/* Compact UI Overrides for Create/Edit View */
.modern-card {
    padding: 1rem !important;
}
.modern-card h4.card-title,
.modern-card .card-title,
.card-header h4 {
    font-size: 1rem !important;
    margin-bottom: 0.75rem !important;
}
label {
    font-size: 0.75rem !important;
    margin-bottom: 0.2rem !important;
    font-weight: 600 !important;
}
.form-control, .form-select, select, input {
    font-size: 0.75rem !important;
    padding: 0.25rem 0.5rem !important;
    min-height: unset !important;
    height: auto !important;
}
.btn {
    font-size: 0.75rem !important;
    padding: 0.3rem 0.75rem !important;
}
.form-group {
    margin-bottom: 0.5rem !important;
}
.ql-editor {
    font-size: 0.75rem !important;
    min-height: 100px !important;
}
small.text-muted {
    font-size: 0.7rem !important;
}
p.error {
    font-size: 0.75rem !important;
}

input[type="color"].color-picker-input-swatch {
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    min-height: 24px !important;
    border: none !important;
    cursor: pointer !important;
    background: transparent !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
}
input[type="color"].color-picker-input-swatch::-webkit-color-swatch-wrapper {
    padding: 0 !important;
}
input[type="color"].color-picker-input-swatch::-webkit-color-swatch {
    border: 1px solid rgba(0, 0, 0, 0.2) !important;
    border-radius: 4px !important;
}
input[type="color"].color-picker-input-swatch::-moz-color-swatch {
    border: 1px solid rgba(0, 0, 0, 0.2) !important;
    border-radius: 4px !important;
}

</style>
