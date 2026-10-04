<template>
    <div>
        <div class="page-heading">
            <div class="page-title mb-2" v-if="!isModal">
                <div class="d-flex justify-content-between align-items-center">
                    <h3 class="modern-page-title mb-0">Sub Category</h3>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><router-link to="/dashboard" class="text-muted">{{
                                    __('dashboard') }}</router-link></li>
                            <li class="breadcrumb-item active text-primary" aria-current="page">Sub Category</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section class="section">
                <div class="figma-main-section-card">
                    <div class="card-body p-0">

                        <div
                            class="d-flex justify-content-between align-items-center flex-wrap gap-2 figma-action-bar-row">
                            <div class="flex-grow-1">
                                <div class="figma-search-container">
                                    <i class="fa fa-search text-muted"></i>
                                    <input v-model="filter" type="text" class="figma-search-input"
                                        :placeholder="__('search')">
                                </div>
                            </div>
                            <div class="d-flex gap-2 align-items-center flex-wrap">
                                <button class="btn btn-figma-filter d-flex align-items-center gap-2"
                                    @click="getCategories()" v-b-tooltip.hover :title="__('refresh')">
                                    <i class="fa fa-refresh"></i>
                                    <span>{{ __('refresh') }}</span>
                                </button>
                                <button class="btn btn-figma-columns d-flex align-items-center gap-2"
                                    @click="create_new = true" v-if="$can('category_create') && hasParentCategories">
                                    <i class="fa fa-plus"></i>
                                    <span>{{ __('Add Subcategory') }}</span>
                                </button>
                            </div>
                        </div>

                        <div class="table-responsive mb-0">
                            <b-table :items="paginatedTranslatedCategories" :fields="fields"
                                :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                                :busy="isLoading" show-empty small :empty-text="__('no_records_to_show')"
                                :empty-filtered-text="__('no_records_to_show')" class="mb-0">

                                <template #table-busy>
                                    <div class="text-center text-black my-2">
                                        <b-spinner class="align-middle"></b-spinner>
                                        <strong>{{ __('loading') }}...</strong>
                                    </div>
                                </template>

                                <template #cell(id)="row">
                                    {{ (currentPage - 1) * perPage + row.index + 1 }}
                                </template>
                                <template #cell(image)="row">
                                    <img :src="row.item.image_url" height="80" width="80" 
                                        style="object-fit: cover; cursor: pointer; border-radius: 4px;"
                                        @click="openImageModal(row.item.image_url)" />
                                </template>
                                <template #cell(parent_category)="row">
                                    {{ getParentCategoryName(row.item.parent_id) }}
                                </template>
                                <template #cell(actions)="row">
                                    <div class="d-flex gap-2 justify-content-center">
                                        <button class="figma-action-btn" @click="edit_record = row.item"
                                            v-if="$can('category_update')" v-b-tooltip.hover :title="__('edit')">
                                            <base-icon name="edit icon" hoverName="edit Hover" width="24" height="24" />
                                        </button>
                                        <button class="figma-action-btn" @click="deleteCategory(row.index, row.item.id)"
                                            v-if="$can('category_delete')" v-b-tooltip.hover :title="__('delete')">
                                            <base-icon name="Type=Default" hoverName="Type=Hover" width="24"
                                                height="24" />
                                        </button>
                                    </div>
                                </template>

                            </b-table>
                        </div>
                        <div class="figma-table-footer flex-wrap gap-3">
                            <div class="showing-results-text small">
                                {{ __('Showing Result') }} : <span class="showing-bold">{{ pageEnd }}</span> {{ __('of')
                                }} <span class="showing-bold">{{ totalRows }}</span>
                            </div>
                            <div class="d-flex align-items-center gap-3">
                                <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage"
                                    align="right" class="figma-pagination mb-0" @change="getCategories"
                                    hide-goto-end-buttons hide-ellipsis prev-text="<" next-text=">"></b-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Add / Edit -->
        <app-edit-record v-if="create_new || edit_record" :record="edit_record" @modalClose="hideModal()"
            @saved="onCategorySaved"></app-edit-record>

        <!-- Image Preview Modal -->
        <b-modal ref="image-modal" title="" hide-footer size="lg" centered>
            <div class="text-center">
                <img :src="previewImageUrl" style="max-width: 100%; max-height: 500px;" />
            </div>
        </b-modal>
    </div>

</template>
<script>

import EditRecord from './EditSubcategory.vue';
export default {
    props: {
        isModal: {
            type: Boolean,
            default: false
        }
    },
    components: {
        'app-edit-record': EditRecord,
    },
    data: function () {
        return {
            fields: [
                { key: 'id', label: 'Sr. No.', class: 'text-center', sortable: true, sortDirection: 'asc' },
                { key: 'name', label: this.$titleLabel('name'), class: 'text-center', sortable: true },
                { key: 'parent_category', label: this.$titleLabel('parent_category'), class: 'text-center' },
                { key: 'image', label: this.$titleLabel('image'), class: 'text-center' },
                { key: 'actions', label: this.$titleLabel('actions'), class: 'text-center' }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: this.$perPage,
            pageOptions: this.$pageOptions,
            sortBy: 'id',
            sortDesc: true,
            sortDirection: 'asc',
            filter: null,
            filterOn: [],
            page: 1,

            categories: [],
            parentCategories: [],
            hasParentCategories: false,
            isLoading: false,
            sectionStyle: 'style_1',
            max_visible_categories: 12,
            max_col_in_single_row: 3,
            create_new: null,
            edit_record: null,
            settingModalShow: false,
            currentLanguageId: null,
            activeLanguages: [],
            latestRequestId: 0,
            previewImageUrl: null
        }
    },
    computed: {
        sortOptions() {
            return this.fields
                .filter(f => f.sortable)
                .map(f => {
                    return { text: f.label, value: f.key }
                })
        },
        pageStart() {
            if (this.totalRows === 0) return 0;
            return (this.currentPage - 1) * this.perPage + 1;
        },
        pageEnd() {
            return Math.min(this.currentPage * this.perPage, this.totalRows);
        },
        translatedCategories: function () {
            const list = Array.isArray(this.categories) ? this.categories : [];
            if (!this.currentLanguageId || list.length === 0) {
                return list;
            }

            return list.map(category => {
                const translatedCategory = { ...category };

                if (category.translations && Array.isArray(category.translations)) {
                    const translation = category.translations.find(
                        t => t.language_id === this.currentLanguageId
                    );

                    if (translation && translation.name && translation.name.trim() !== '') {
                        translatedCategory.name = translation.name;
                    }
                }
                return translatedCategory;
            });
        },
        paginatedTranslatedCategories: function () {
            return this.translatedCategories;
        },
    },
    mounted() {
    },
    watch: {
        $route(to, from) {
            this.showCreateModal();
        },
        currentPage(newPage) {
            this.getCategories();
        },
        perPage(newPerPage) {
            this.getCategories();
        },
        filter(newFilter, oldFilter) {
            if (newFilter !== oldFilter) {
                this.currentPage = 1;
                this.getCategories();
            }
        }
    },
    created: function () {
        this.showCreateModal();
        this.fetchActiveLanguages().then(() => {
            this.getParentCategories().then(() => {
                this.getCategories();
            });
        });
    },
    methods: {
        fetchActiveLanguages() {
            return axios.get(this.$apiUrl + '/active_languages')
                .then(response => {
                    if (response.data.data && Array.isArray(response.data.data)) {
                        this.activeLanguages = response.data.data;

                        const appLocale = window.appLocale || 'en';

                        const currentLanguage = this.activeLanguages.find(
                            lang => lang.code === appLocale
                        );

                        if (currentLanguage) {
                            this.currentLanguageId = currentLanguage.id;
                        } else {
                            const defaultLanguage = this.activeLanguages.find(
                                lang => lang.is_default === 1
                            );
                            if (defaultLanguage) {
                                this.currentLanguageId = defaultLanguage.id;
                            }
                        }
                    }
                })
                .catch(error => {
                    console.error('Error loading languages:', error);
                });
        },

        getParentCategories() {
            return axios.get(this.$apiUrl + '/categories', {
                params: {
                    parent_id: 0,
                    status: 1,
                    limit: 1000
                }
            })
                .then((response) => {
                    const data = response.data || {};
                    this.parentCategories = (Array.isArray(data.data) ? data.data : [])
                        .filter(cat => Number(cat.parent_id) === 0);
                    this.hasParentCategories = this.parentCategories.length > 0;
                })
                .catch(() => {
                    this.parentCategories = [];
                    this.hasParentCategories = false;
                });
        },

        getParentCategoryName(parentId) {
            const parent = this.parentCategories.find(cat => Number(cat.id) === Number(parentId));
            return parent ? parent.name : '-';
        },

        getCategories() {
            this.isLoading = true;
            this.latestRequestId++;
            const currentRequestId = this.latestRequestId;

            const params = {
                filter: this.filter,
                category_level: 'subcategory',
                status: null,
                limit: this.perPage,
                offset: this.currentPage,
                _t: Date.now()
            };
            axios.get(this.$apiUrl + '/categories', { params })
                .then((response) => {
                    if (currentRequestId !== this.latestRequestId) {
                        return;
                    }
                    this.isLoading = false;
                    const data = response.data || {};
                    this.categories = Array.isArray(data.data) ? data.data : [];
                    this.totalRows = Number(data.total || 0);
                })
                .catch(() => {
                    if (currentRequestId !== this.latestRequestId) {
                        return;
                    }
                    this.isLoading = false;
                    this.categories = [];
                    this.totalRows = 0;
                });
        },

        deleteCategory(index, id) {
            this.$swal.fire({
                title: __('are_you_sure'),
                text: __('you_want_be_able_to_revert_this'),
                confirmButtonText: __('yes_sure'),
                cancelButtonText: __('cancel'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#37a279',
                cancelButtonColor: '#d33',
            }).then(result => {

                if (result.value) {
                    this.isLoading = true
                    let postData = {
                        id: id
                    }
                    axios.post(this.$apiUrl + '/categories/delete', postData)
                        .then((response) => {
                            this.isLoading = false
                            let data = response.data;
                            this.categories.splice(index, 1)
                            this.showMessage('success', data.message);
                        });
                }
            });
        },
        showCreateModal() {
            let create = this.$route.params.create;
            if (create) {
                this.create_new = true;
            }
        },
        hideModal() {
            this.create_new = false
            this.edit_record = false
            if (!this.isModal && this.$route.name !== 'manage_categories') {
                this.$router.push({ path: '/manage_subcategories' });
            }
        },
        onCategorySaved(message) {
            this.showMessage('success', message);
            this.getCategories();
            this.create_new = null;
        },
        openImageModal(imageUrl) {
            this.previewImageUrl = imageUrl;
            this.$refs['image-modal'].show();
        },
    }
};
</script>
