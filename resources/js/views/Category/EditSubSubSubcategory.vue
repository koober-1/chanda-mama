<template>
    <b-modal ref="my-modal" :title="modal_title" @hidden="$emit('modalClose')" scrollable no-close-on-backdrop no-fade
        static size="xl">
        <div slot="modal-footer">
            <b-button variant="primary" @click="$refs['dummy_submit'].click()" :disabled="isLoading">{{ __('save') }}
                <b-spinner v-if="isLoading" small label="Spinning"></b-spinner>
            </b-button>
            <b-button variant="secondary" @click="hideModal">{{ __('cancel') }}</b-button>
        </div>

        <!-- Loading overlay while fetching translation data -->
        <div v-if="isLoadingData" class="text-center p-5">
            <b-spinner label="Loading..."></b-spinner>
            <p class="mt-2">{{ __('loading') }}</p>
        </div>

        <form v-else ref="my-form" @submit.prevent="saveRecord" novalidate>
            <div v-if="defaultLanguage">
                <template v-for="language in [defaultLanguage]">
                    <div class="row" :key="language.id">
                        <!-- Parent category chain (only show in default language tab) -->
                        <div class="form-group" v-if="language.is_default">
                            <label>{{ __("category") }}<i class="text-danger">*</i></label>
                            <select v-model="parent_category_id" class="form-control form-select">
                                <option value="0">{{ __('select parent category') }}</option>
                                <option v-for="category in parent_categories" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </div>

                        <div class="form-group" v-if="language.is_default">
                            <label>Sub Category<i class="text-danger">*</i></label>
                            <select v-model="parent_subcategory_id" class="form-control form-select"
                                :disabled="Number(parent_category_id) === 0">
                                <option value="0">Select Sub Category</option>
                                <option v-for="subcategory in filteredParentSubcategories" :key="subcategory.id"
                                    :value="subcategory.id">
                                    {{ subcategory.name }}
                                </option>
                            </select>
                        </div>

                        <div class="form-group" v-if="language.is_default">
                            <label>Sub Sub Category<i class="text-danger">*</i></label>
                            <select v-model="parent_id" class="form-control form-select"
                                :disabled="Number(parent_subcategory_id) === 0">
                                <option value="0">Select Sub Sub Category</option>
                                <option v-for="subSubcategory in filteredParentSubSubcategories" :key="subSubcategory.id"
                                    :value="subSubcategory.id">
                                    {{ subSubcategory.name }}
                                </option>
                            </select>
                        </div>

                        <div class="form-group" :class="{ required: language.is_default }">
                            <label>Sub Sub Sub Category Name</label>
                            <i class="text-danger" v-if="language.is_default">*</i>
                            <input type="text" class="form-control"
                                v-model="translations[language.id].name" placeholder="Enter Sub Sub Sub Category Name">
                        </div>

                        <div class="form-group" v-if="language.is_default">
                            <label>{{ __('image') }}</label>
                            <p class="text-muted">{{ __('please_choose_square_image_of_larger_than_350px_350px_and_smaller_than_550px_550px') }}</p>
                            <span v-if="error" class="error">{{ error }}</span>

                            <input type="file" name="category_image" accept="image/*" v-on:change="handleFileUpload"
                                ref="file_image" class="file-input" style="display: none;">
                            <div class="file-input-div bg-gray-100" @click="triggerFileInput" @drop="dropFile"
                                @dragover="handleDragOver" @dragleave="handleDragLeave">
                                <template v-if="image && image.name !== ''">
                                    <label>{{ __('selected_file_name') }} {{ image.name }}</label>
                                </template>
                                <template v-else>
                                    <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                                    <label>{{ __('drop_files_here_or_click_to_upload') }}</label>
                                </template>
                            </div>
                            <div class="row" v-if="image_url">
                                <div class="col-md-4">
                                    <img class="custom-image" :src="image_url" title='Category Image'
                                        alt='Category Image' />
                                </div>
                            </div>
                        </div>

                        <!-- Meta Title (Translatable - Optional) -->
                        <div class="form-group">
                            <label>{{ __('meta_title') }}</label>
                            <input type="text" class="form-control" v-model="translations[language.id].meta_title"
                                :placeholder="__('enter_meta_title')">
                        </div>

                        <div class="form-group">
                            <label>{{ __('meta_keywords') }}</label>
                            <input type="text" class="form-control" v-model="translations[language.id].meta_keywords"
                                :placeholder="__('enter_meta_keywords')">
                        </div>

                        <div class="form-group">
                            <label>{{ __('schema_markup') }}
                                <small :id="'schema_markup_' + language.id"
                                    class="d-inline-flex mb-3 px-2 py-1 text-muted bg-secondary bg-opacity-10 border border-secondary border-opacity-10 rounded-2">
                                    <i class="fa fa-info-circle"></i>
                                </small>
                                <b-popover :target="'schema_markup_' + language.id" triggers="hover" placement="left">
                                    <p>Schema markup, also known as structured data, is the language search engines use
                                        to read and
                                        understand the content on your pages. By language, we mean a semantic vocabulary
                                        (code) that helps
                                        search engines characterize and categorize the content of web pages. Learn more
                                        about schema markup
                                        and generate it for your website using the <a
                                            href="https://www.rankranger.com/schema-markup-generator"
                                            target="_blank">Rank Ranger Schema
                                            Markup Generator</a></p>
                                </b-popover>
                            </label>
                            <input type="text" class="form-control" v-model="translations[language.id].schema_markup"
                                :placeholder="__('enter_schema_markup')">
                        </div>

                        <div class="form-group">
                            <label>{{ __('meta_description') }}</label>
                            <textarea type="text" class="form-control"
                                v-model="translations[language.id].meta_description"
                                :placeholder="__('enter_meta_description')" rows="4"></textarea>
                        </div>

                        <div class="form-group" v-if="id && language.is_default">
                            <label>{{ __('status') }}</label>
                            <div class="col-md-9 text-left mt-1">
                                <b-form-radio-group v-model="status" :options="[
                                    { text: __('deactivate'), 'value': 0 },
                                    { text: __('activate'), 'value': 1 },
                                ]" buttons button-variant="outline-primary"></b-form-radio-group>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

            <!-- Loading state -->
            <div v-else class="text-center p-5">
                <b-spinner label="Loading languages..."></b-spinner>
                <p class="mt-2">{{ __('loading_languages') }}</p>
            </div>
            <button ref="dummy_submit" style="display:none;"></button>


        </form>
    </b-modal>
</template>

<script>
import axios from 'axios';
import TranslationHelper from '../../mixins/TranslationHelper.js';


export default {
    props: {
        record: {
            type: Object,
            default: null
        }
    },
    data: function () {
        return {
            isLoading: false,
            isLoadingData: true, // Start with loading state
            image: null,

            // Basic fields
            id: this.record ? this.record.id : null,
            slug: this.record ? this.record.slug : null,
            image_url: this.record ? this.record.image_url : null,
            status: this.record ? this.record.status : 1,
            parent_id: this.record ? this.record.parent_id : 0,
            parent_category_id: 0,
            parent_subcategory_id: 0,
            error: null,

            parent_categories: [],
            parent_subcategories: [],
            parent_sub_subcategories: [],

            // Multi-language support
            activeLanguageTab: 0,
            translations: {},
            defaultLanguageId: null,
            languages: [],

            translatableFields: ['name', 'meta_title', 'meta_keywords', 'schema_markup', 'meta_description'],
            loadingEmpty: false,
            loadingOverwrite: false,
        };
    },
    mixins: [TranslationHelper],

    created() {


        this.$apiUrl = '/api';
    },

    computed: {
        modal_title: function () {
            let title = this.id ? 'Edit Sub Sub Sub Category' : 'Add Sub Sub Sub Category';
            return title;
        },
        defaultLanguage() {
            return this.languages.find(language => Number(language.id) === Number(this.defaultLanguageId)) || null;
        },
        filteredParentSubcategories() {
            return this.parent_subcategories.filter(subcategory => {
                return Number(subcategory.parent_id) === Number(this.parent_category_id);
            });
        },
        filteredParentSubSubcategories() {
            return this.parent_sub_subcategories.filter(subSubcategory => {
                return Number(subSubcategory.parent_id) === Number(this.parent_subcategory_id);
            });
        },
    },

    watch: {
        parent_category_id() {
            const hasSelectedSubcategory = this.filteredParentSubcategories.some(subcategory => {
                return Number(subcategory.id) === Number(this.parent_subcategory_id);
            });

            if (!hasSelectedSubcategory) {
                this.parent_subcategory_id = 0;
                this.parent_id = 0;
            }
        },
        parent_subcategory_id() {
            const hasSelectedSubSubcategory = this.filteredParentSubSubcategories.some(subSubcategory => {
                return Number(subSubcategory.id) === Number(this.parent_id);
            });

            if (!hasSelectedSubSubcategory) {
                this.parent_id = 0;
            }
        },
    },

    methods: {
        // Used by TranslationHelper mixin (Translate buttons). Validates default language is filled.
        validateDefaultLanguageForTranslation() {
            return this.validateDefaultLanguage();
        },

        deferDataLoad() {
            this.isLoadingData = true;

            // Load languages and parent subcategories in parallel
            Promise.all([
                this.fetchActiveLanguages(),
                this.getParentSubcategories()
            ])
                .then(() => {
                    // Find default language
                    const defaultLang = this.languages.find(lang => lang.is_default === 1);
                    if (defaultLang) {
                        this.defaultLanguageId = defaultLang.id;
                    }

                    // Initialize translations efficiently (single operation)
                    this.initializeTranslations();

                    // Load translations only if editing
                    if (this.id) {
                        return this.loadCategoryWithTranslations();
                    } else {
                        // For new category, no translations to load
                        this.isLoadingData = false;
                    }
                })
                .catch(error => {
                    console.error('Error loading data:', error);
                    this.isLoadingData = false;
                });
        },

        fetchActiveLanguages() {
            return new Promise((resolve, reject) => {
                // Fetch from API directly - no caching
                axios.get(this.$apiUrl + '/active_languages')
                    .then(response => {
                        if (response.data.data) {
                            this.languages = response.data.data;
                            resolve(this.languages);
                        } else {
                            reject(new Error('No languages found'));
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        initializeTranslations() {
            // Create all translations in one object assignment
            const allTranslations = {};
            this.languages.forEach(language => {
                allTranslations[language.id] = {
                    name: '',
                    meta_title: '',
                    meta_keywords: '',
                    schema_markup: '',
                    meta_description: '',
                };
            });
            // Single reactive assignment
            this.translations = allTranslations;
        },

        loadCategoryWithTranslations() {
            return axios.get(this.$apiUrl + '/sub_sub_subcategories', {
                params: {
                    id: this.id
                }
            })
                .then(response => {
                    if (response.data.data) {
                        // Response is now an array of categories, get the first one (filtered by id)
                        const categories = Array.isArray(response.data.data) ? response.data.data : [response.data.data];
                        const category = categories.length > 0 ? categories[0] : null;

                        if (!category) {
                            this.isLoadingData = false;
                            return;
                        }

                        // Load base data
                        this.slug = category.slug;
                        this.parent_id = category.parent_id;
                        this.setParentCategoryChainFromSubSubcategory();
                        this.image_url = category.image_url;
                        this.status = category.status;

                        // Load translations from the category object
                        const updatedTranslations = { ...this.translations };

                        if (category.translations && Array.isArray(category.translations)) {
                            category.translations.forEach(trans => {
                                const langId = trans.language_id;
                                updatedTranslations[langId] = {
                                    name: trans.name || '',
                                    meta_title: trans.meta_title || '',
                                    meta_keywords: trans.meta_keywords || '',
                                    schema_markup: trans.schema_markup || '',
                                    meta_description: trans.meta_description || '',
                                };
                            });
                        }

                        this.languages.forEach(language => {
                            if (!updatedTranslations[language.id] ||
                                !updatedTranslations[language.id].name) {
                                if (language.is_default) {
                                    updatedTranslations[language.id] = {
                                        name: category.name || '',
                                        meta_title: category.meta_title || '',
                                        meta_keywords: category.meta_keywords || '',
                                        schema_markup: category.schema_markup || '',
                                        meta_description: category.meta_description || '',
                                    };
                                }
                            }
                        });

                        // Single assignment for reactivity
                        this.translations = updatedTranslations;
                    }
                    this.isLoadingData = false;
                })
                .catch(error => {
                    this.isLoadingData = false;
                    throw error;
                });
        },

        createSlug() {
            if (!this.defaultLanguageId) return Promise.resolve();

            const name = this.translations[this.defaultLanguageId].name;
            if (name !== "") {
                let slug = name.toLowerCase()
                    .replace(/[^\w ]+/g, '')
                    .replace(/ +/g, '-');

                // Check for uniqueness
                return axios.get(this.$apiUrl + `/categories/check-slug/${slug}`)
                    .then(response => {
                        if (response.data.unique) {
                            this.slug = slug;
                        } else {
                            this.slug = slug + '-' + response.data.count;
                        }
                    })
                    .catch(error => {
                        console.error('Error checking slug uniqueness: ' + error);
                        // Fallback: use slug without uniqueness check
                        this.slug = slug;
                    });
            }
            return Promise.resolve();
        },

        getParentSubcategories() {
            return axios.get(this.$apiUrl + '/categories', {
                params: {
                    status: 1,
                    limit: 1000
                }
            })
                .then((response) => {
                    const data = response.data || {};
                    const allCategories = Array.isArray(data.data) ? data.data : [];
                    const categoryMap = allCategories.reduce((map, category) => {
                        map[category.id] = category;
                        return map;
                    }, {});
                    this.parent_categories = allCategories.filter(cat => Number(cat.parent_id) === 0);
                    this.parent_subcategories = allCategories.filter(cat => {
                        const parent = categoryMap[cat.parent_id];
                        return Number(cat.parent_id) > 0 && parent && Number(parent.parent_id) === 0;
                    });
                    const subcategoryIds = this.parent_subcategories.map(cat => Number(cat.id));
                    this.parent_sub_subcategories = allCategories.filter(cat => subcategoryIds.includes(Number(cat.parent_id)));
                    this.setParentCategoryChainFromSubSubcategory();
                });
        },

        setParentCategoryChainFromSubSubcategory() {
            const selectedSubSubcategory = this.parent_sub_subcategories.find(subSubcategory => {
                return Number(subSubcategory.id) === Number(this.parent_id);
            });

            this.parent_subcategory_id = selectedSubSubcategory ? selectedSubSubcategory.parent_id : 0;

            const selectedSubcategory = this.parent_subcategories.find(subcategory => {
                return Number(subcategory.id) === Number(this.parent_subcategory_id);
            });

            this.parent_category_id = selectedSubcategory ? selectedSubcategory.parent_id : 0;
        },

        showModal() {
            this.$refs['my-modal'].show()
        },

        hideModal() {
            this.$refs['my-modal'].hide()
        },

        handleDragOver(event) {
            event.preventDefault();
            event.currentTarget.classList.add('bg-green-300');
            event.currentTarget.classList.remove('bg-gray-100');
        },

        handleDragLeave(event) {
            event.preventDefault();
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },

        dropFile(event) {
            event.preventDefault();

            // Get the file input element (handle array case from lazy-loaded tabs)
            const fileInputRef = this.$refs.file_image;
            const fileInput = Array.isArray(fileInputRef) ? fileInputRef[0] : fileInputRef;

            if (fileInput) {
                fileInput.files = event.dataTransfer.files;
                this.handleFileUpload();
            }

            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },

        handleFileUpload() {
            // Get the file input element (handle array case from lazy-loaded tabs)
            const fileInputRef = this.$refs.file_image;
            const fileInput = Array.isArray(fileInputRef) ? fileInputRef[0] : fileInputRef;

            // Check if fileInput exists and has files
            if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
                return;
            }

            const file = fileInput.files[0];

            // Reset previous error message
            this.error = null;

            // Check if a file was selected
            if (!file) return;

            // Perform image validation
            const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp", "image/svg+xml"];
            if (!validTypes.includes(file.type)) {
                this.error = "Invalid file type. Please upload a JPEG, PNG, JPG, GIF, WEBP or SVG image.";
                return;
            }

            const maxSize = 2 * 1024 * 1024; // 2MB
            if (file.size > maxSize) {
                this.error = "File size exceeds the maximum allowed limit (2MB).";
                return;
            }

            // Create a URL for the uploaded image and display it
            this.imageUrl = URL.createObjectURL(file);
            this.image = file;
            this.image_url = URL.createObjectURL(file);
        },

        validateDefaultLanguage() {
            if (!this.defaultLanguageId) {
                this.showError(__('default_language_not_found'));
                return false;
            }

            const defaultTranslation = this.translations[this.defaultLanguageId];

            // Check required fields for default language - show generic message for any missing field
            if (!defaultTranslation.name || defaultTranslation.name.trim() === '') {
                this.switchToDefaultLanguageTab();
                this.showError(__('please_fill_default_language_required_fields'));
                return false;
            }

            if (Number(this.parent_category_id) === 0) {
                this.switchToDefaultLanguageTab();
                this.showError(__('please select parent category'));
                return false;
            }

            if (Number(this.parent_subcategory_id) === 0) {
                this.switchToDefaultLanguageTab();
                this.showError('Please select Sub Category');
                return false;
            }

            if (Number(this.parent_id) === 0) {
                this.switchToDefaultLanguageTab();
                this.showError('Please select Sub Sub Category');
                return false;
            }

            return true;
        },


        triggerFileInput() {
            // Use nextTick to ensure DOM is ready
            this.$nextTick(() => {
                const fileInput = this.$refs.file_image;
                if (fileInput) {
                    // Handle both direct element and array of elements
                    const element = Array.isArray(fileInput) ? fileInput[0] : fileInput;
                    if (element && element.click) {
                        element.click();
                    }
                }
            });
        },

        // Switches to default language tab so user sees the required fields. Caller shows the specific error.
        switchToDefaultLanguageTab() {
            const defaultLangIndex = this.languages.findIndex(lang => lang.id === this.defaultLanguageId);
            if (defaultLangIndex !== -1) {
                this.activeLanguageTab = defaultLangIndex;
            }
        },

        saveRecord: async function () {
            if (!this.validateDefaultLanguage()) return;

            let vm = this;

            // Generate slug before saving
            await this.createSlug();

            this.isLoading = true;

            const languagesToSave = [];
            const defaultLang = this.languages.find(lang => lang.is_default);

            // Add default language first
            if (defaultLang) {
                languagesToSave.push(defaultLang);
            }

            // Add other languages that have data
            this.languages.forEach(language => {
                if (language.is_default) return; // Skip default, already added

                const translation = this.translations[language.id];
                const hasData = this.translatableFields.some(field => {
                    const val = translation[field];
                    return val != null && String(val).trim() !== '';
                });

                if (hasData || this.id) {
                    languagesToSave.push(language);
                }
            });

            // Save sequentially: default language first, then others
            const saveSequentially = async () => {
                let categoryId = this.id; // For edit mode

                for (let i = 0; i < languagesToSave.length; i++) {
                    const language = languagesToSave[i];
                    const translation = this.translations[language.id];

                    let formData = new FormData();

                    // Basic fields
                    if (categoryId) {
                        formData.append('id', categoryId);
                    }
                    formData.append('language_id', language.id);
                    formData.append('slug', this.slug);
                    formData.append('status', this.status);
                    formData.append('parent_id', parseInt(this.parent_id) || 0);

                    // Translatable fields
                    formData.append('name', translation.name || '');
                    formData.append('subtitle', '');
                    formData.append('meta_title', translation.meta_title || '');
                    formData.append('meta_keywords', translation.meta_keywords || '');
                    formData.append('schema_markup', translation.schema_markup || '');
                    formData.append('meta_description', translation.meta_description || '');

                    // Image (only send with default language)
                    if (language.is_default && this.image) {
                        formData.append('image', this.image);
                    }

                    let url = this.$apiUrl + '/sub_sub_subcategories/save';
                    if (categoryId) {
                        url = this.$apiUrl + '/sub_sub_subcategories/update';
                    }

                    try {
                        const response = await axios.post(url, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        });

                        if (!response.data || Number(response.data.status) !== 1) {
                            throw new Error((response.data && response.data.message) || __('something_went_wrong'));
                        }

                        // If this was the first save (default language), get the category ID
                        if (!categoryId && response.data.data && response.data.data.id) {
                            categoryId = response.data.data.id;
                        }
                    } catch (error) {
                        console.error('Save failed:', error);
                        throw error;
                    }
                }

                return true;
            };

            // Execute sequential save
            saveSequentially()
                .then(() => {
                    const message = 'Sub Sub Sub Category saved successfully';
                    // Emit to parent only (parent shows toast once)
                    vm.$emit('saved', message);
                    // Notify other pages to refresh list only (no toast)
                    vm.$eventBus.$emit('categorySaved');

                    vm.hideModal();
                    if (vm.$route.name !== 'manage_categories') {
                        vm.$router.push({ path: '/manage_sub_sub_subcategories' });
                    }
                })
                .catch(error => {
                    vm.isLoading = false;
                    if (error.response && error.response.data && error.response.data.message) {
                        vm.showError(error.response.data.message);
                    } else if (error.request && error.request.statusText) {
                        vm.showError(error.request.statusText);
                    } else if (error.message) {
                        vm.showError(error.message);
                    } else {
                        vm.showError(__('something_went_wrong'));
                    }
                });
        },
    },
    mounted() {
        this.showModal();
        this.$nextTick(() => {
            this.deferDataLoad();
        });
    },
}
</script>

<style scoped>
.image_preview {
    margin-top: 5px;
}
</style>
