<template>
    <div>
        <div class="page-heading">
            <div class="page-title">
                <div class="row">
                    <div class="col-12 col-md-6 order-md-1 order-last">
                        <h3>{{ __('about_us') }}</h3>
                    </div>
                    <div class="col-12 col-md-6 order-md-2 order-first">
                        <nav class="breadcrumb-header float-start float-lg-end">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/dashboard">{{ __('dashboard') }}</router-link>
                                </li>
                                <li class="breadcrumb-item active">{{ __('about_us') }}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <section class="section">
                <form @submit.prevent="saveRecord">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">{{ __('update_information') }}</h4>
                        </div>

                        <div class="card-body">

                            <!-- Language Tabs -->
                            <div v-if="languages.length">
                                <b-tabs v-model="activeLanguageTab" content-class="mt-3">
                                    <b-tab
                                        v-for="language in languages"
                                        :key="language.id"
                                        lazy
                                    >
                                        <template #title>
                                            <span :class="{ 'text-primary font-weight-bold': language.is_default }">
                                                {{ language.name }}
                                            </span>
                                        </template>

                                        <!-- Translate buttons -->
                                        <div class="mb-3" v-if="language.is_default && languages.length > 1">
                                            <b-button size="sm" variant="outline-primary" class="mr-2" @click="translateEmpty(language)"
                                                v-b-tooltip.hover
                                                :title="__('only_empty_fields_will_be_translated_existing_content_will_not_be_changed')"
                                                :disabled="loadingEmpty">
                                                <span v-if="!loadingEmpty">{{ __('translate_empty_fields') }}</span>
                                                <b-spinner v-else small></b-spinner>
                                            </b-button>
                                            <b-button size="sm" variant="outline-danger" @click="translateOverwrite(language)"
                                                v-b-tooltip.hover
                                                :title="__('all_fields_will_be_translated_and_existing_content_will_be_overwritten')"
                                                :disabled="loadingOverwrite">
                                                <span v-if="!loadingOverwrite">{{ __('translate_and_overwrite') }}</span>
                                                <b-spinner v-else small></b-spinner>
                                            </b-button>
                                            <div v-if="translateSuccessMessage" class="text-success mt-2 font-weight-bold">
                                                {{ translateSuccessMessage }}
                                            </div>
                                        </div>
                                        <!-- Translate buttons END -->

                                        <div class="form-group">
                                            <label>
                                                {{ __('about_us') }}
                                                <i v-if="language.is_default" class="text-danger">*</i>
                                            </label>

                                            <editor
                                                v-model="translations[language.id].about_us"
                                                placeholder="Enter About Us"
                                                :init="getEditorConfig()"
                                            />
                                        </div>
                                    </b-tab>
                                </b-tabs>
                            </div>

                            <div v-else-if="isLoadingLanguages" class="text-center p-3">
                                <b-spinner />
                            </div>

                            <!-- Banner Image Section -->
                            <div class="row mt-4 pt-3 border-top">
                                <div class="col-12">
                                    <h5 class="mb-3">{{ __('banner_image') }}</h5>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>{{ __('banner_image') }}</label>
                                        <input
                                            type="file"
                                            name="about_us_banner"
                                            ref="about_us_banner"
                                            accept="image/*"
                                            class="file-input"
                                            @change="handleBannerUpload($event)"
                                        />
                                        <div
                                            class="file-input-div"
                                            @click="$refs.about_us_banner.click()"
                                            @drop="dropBannerFile"
                                            @dragover="$dragoverFile"
                                            @dragleave="$dragleaveFile"
                                        >
                                            <template v-if="banner_file_name">
                                                <label>{{ __('selected_file_name') }}:- {{ banner_file_name }}</label>
                                            </template>
                                            <template v-else>
                                                <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                                                <label>{{ __('drop_files_here_or_click_to_upload') }}</label>
                                            </template>
                                        </div>
                                        <small class="text-muted d-block mt-1">Recommended aspect ratio: 16:10. Formats: JPG, PNG, WEBP.</small>
                                    </div>
                                </div>
                                <div class="col-md-6" v-if="banner_preview_url">
                                    <label class="d-block">{{ __('preview') || 'Preview' }}</label>
                                    <div class="position-relative d-inline-block">
                                        <img
                                            :src="banner_preview_url"
                                            class="img-thumbnail"
                                            style="max-height: 180px; object-fit: cover; border-radius: 8px;"
                                            alt="About Us Banner Preview"
                                        />
                                        <button
                                            type="button"
                                            class="btn btn-sm btn-danger position-absolute"
                                            style="top: 5px; right: 5px;"
                                            @click="removeBanner"
                                            title="Remove Banner"
                                        >
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="card-footer">
                            <b-button type="submit" variant="primary" :disabled="isLoading">
                                {{ __('update') }}
                                <b-spinner v-if="isLoading" small />
                            </b-button>
                        </div>

                    </div>
                </form>
            </section>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";
import TranslationHelper from '../../mixins/TranslationHelper.js';

export default {
    mixins: [TranslationHelper],
    components: { editor: Editor },

    data() {
        return {
            isLoading: false,
            isLoadingLanguages: false,
            languages: [],
            translations: {},
            defaultLanguageId: null,
            activeLanguageTab: 0,
            record: null,

            banner_file: null,
            banner_file_name: "",
            banner_preview_url: "",
            remove_banner: 0,

            translatableFields: ['about_us'],
            translateSuccessMessage: '',
            loadingEmpty: false,
            loadingOverwrite: false,
        };
    },

    created() {
        this.fetchActiveLanguages();
        this.getAboutUs();
    },

    methods: {
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

        fetchActiveLanguages() {
            this.isLoadingLanguages = true;
            return axios.get(this.$apiUrl + "/active_languages")
                .then(res => {
                    this.languages = res.data.data || [];
                    const def = this.languages.find(l => l.is_default === 1);
                    this.defaultLanguageId = def ? def.id : null;

                    this.initTranslations();
                    this.isLoadingLanguages = false;
                });
        },

        initTranslations() {
            const t = {};
            this.languages.forEach(lang => {
                t[lang.id] = { about_us: "" };
            });
            this.translations = t;
        },

        getAboutUs() {
            axios.get(this.$apiUrl + "/about_us").then(res => {
                this.record = res.data.data;
                if (!this.record) return;

                if (this.record.about_us_banner_url) {
                    this.banner_preview_url = this.record.about_us_banner_url;
                }

                try {
                    const parsed = JSON.parse(this.record.value);
                    this.languages.forEach(lang => {
                        if (parsed[lang.code]) {
                            this.translations[lang.id].about_us = parsed[lang.code];
                        }
                    });
                } catch {
                    if (this.defaultLanguageId) {
                        this.translations[this.defaultLanguageId].about_us = this.record.value;
                    }
                }
            });
        },

        handleBannerUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            this.banner_file = file;
            this.banner_file_name = file.name;
            this.banner_preview_url = URL.createObjectURL(file);
            this.remove_banner = 0;
        },

        dropBannerFile(event) {
            event.preventDefault();
            if (event.dataTransfer.files && event.dataTransfer.files.length) {
                this.$refs.about_us_banner.files = event.dataTransfer.files;
                this.handleBannerUpload({ target: { files: event.dataTransfer.files } });
            }
        },

        removeBanner() {
            this.banner_file = null;
            this.banner_file_name = "";
            this.banner_preview_url = "";
            this.remove_banner = 1;
            if (this.$refs.about_us_banner) {
                this.$refs.about_us_banner.value = "";
            }
        },

        validateDefaultLanguage() {
            const def = this.translations[this.defaultLanguageId];
            if (!def || !def.about_us.trim()) {
                this.showError(__('please_fill_default_language_required_fields'));
                this.switchToDefaultTab();
                return false;
            }
            return true;
        },

        switchToDefaultTab() {
            const index = this.languages.findIndex(l => l.id === this.defaultLanguageId);
            if (index !== -1) this.activeLanguageTab = index;
        },

        saveRecord() {
            if (!this.validateDefaultLanguage()) return;

            this.isLoading = true;

            const dataByLang = {};
            this.languages.forEach(lang => {
                dataByLang[lang.code] = this.translations[lang.id].about_us || "";
            });

            const formData = new FormData();
            formData.append("about_us", JSON.stringify(dataByLang));
            if (this.banner_file) {
                formData.append("about_us_banner", this.banner_file);
            }
            if (this.remove_banner) {
                formData.append("remove_about_us_banner", 1);
            }

            axios.post(this.$apiUrl + "/about_us/save", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(res => {
                if (res.data.status === 1) {
                    this.showMessage("success", res.data.message);
                    this.banner_file = null;
                    this.banner_file_name = "";
                    this.remove_banner = 0;
                    this.getAboutUs();
                } else {
                    this.showError(res.data.message);
                }
                this.isLoading = false;
            })
            .catch(() => {
                this.showError(__('something_went_wrong'));
                this.isLoading = false;
            });
        },
    },
};
</script>
