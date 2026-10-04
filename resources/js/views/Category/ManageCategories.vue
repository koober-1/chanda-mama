<template>
    <div>
        <div class="page-heading">
            <div class="page-title mb-2">
                <div class="d-flex justify-content-between align-items-center">
                    <h3 class="modern-page-title mb-0">{{ __('manage_categories') }}</h3>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><router-link to="/dashboard" class="text-muted">{{
                                    __('dashboard') }}</router-link></li>
                            <li class="breadcrumb-item active text-primary" aria-current="page">{{
                                __('manage_categories') }}</li>
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
                                    @click="openAddModal" v-if="$can('category_create')">
                                    <i class="fa fa-plus"></i>
                                    <span>{{ dynamicAddLabel }}</span>
                                </button>
                                <b-dropdown variant="secondary" right v-if="$can('category_update')" toggle-class="d-flex align-items-center gap-2">
                                    <template #button-content>
                                        <i class="fa fa-cog"></i>
                                        <span>{{ __('settings') }}</span>
                                    </template>
                                    <b-dropdown-item @click="create_new_sub_category = true">
                                        <i class="fa fa-plus me-2 text-primary"></i> Manage Sub Categories
                                    </b-dropdown-item>
                                    <b-dropdown-item @click="create_new_sub_sub_category = true">
                                        <i class="fa fa-plus me-2 text-primary"></i> Manage Sub Sub Categories
                                    </b-dropdown-item>
                                    <b-dropdown-item @click="create_new_sub_sub_sub_category = true">
                                        <i class="fa fa-plus me-2 text-primary"></i> Manage Sub Sub Sub Categories
                                    </b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </div>

                        <div v-if="parentCategoryStack.length > 0" class="px-3 py-2 bg-light border-bottom">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0" style="background: transparent; padding: 0;">
                                    <li class="breadcrumb-item">
                                        <a href="#" @click.prevent="goToRoot()" class="text-primary"><i class="fa fa-home"></i> Main Categories</a>
                                    </li>
                                    <li class="breadcrumb-item" v-for="(cat, index) in parentCategoryStack" :key="cat.id" :class="{ 'active': index === parentCategoryStack.length - 1 }">
                                        <a href="#" v-if="index < parentCategoryStack.length - 1" @click.prevent="goToLevel(index)" class="text-primary">{{ cat.name }}</a>
                                        <span v-else>{{ cat.name }}</span>
                                    </li>
                                </ol>
                            </nav>
                        </div>

                        <div class="table-responsive mb-0">
                            <b-table :items="translatedCategories" :fields="fields" :filter="filter"
                                :filter-included-fields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
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
                                <template #cell(name)="row">
                                    <span v-if="parentCategoryStack.length < 3" class="text-primary font-weight-bold" style="cursor: pointer;" @click="enterCategory(row.item)" v-b-tooltip.hover title="Click to view sub-categories">
                                        {{ row.item.name }} <i class="fa fa-folder-open text-muted small ms-1"></i>
                                    </span>
                                    <span v-else class="font-weight-bold">
                                        {{ row.item.name }}
                                    </span>
                                </template>
                                <template #cell(image)="row">
                                    <img :src="row.item.image_url" height="80" width="80" 
                                        style="object-fit: cover; cursor: pointer; border-radius: 4px;"
                                        @click="openImageModal(row.item.image_url)" />
                                </template>
                                <template #cell(actions)="row">
                                    <div class="d-flex gap-2 justify-content-center">
                                        <button v-if="parentCategoryStack.length < 3" class="figma-action-btn text-primary" @click="enterCategory(row.item)"
                                            v-b-tooltip.hover title="View Sub Categories">
                                            <i class="fa fa-folder-open text-primary" style="font-size: 16px;"></i>
                                        </button>
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
        <app-edit-record v-if="create_new || edit_record" :record="edit_record" :category-level="parentCategoryStack.length" @modalClose="hideModal()"
            @saved="onCategorySaved"></app-edit-record>
        
        <b-modal v-model="create_new_sub_category" title="Manage Sub Categories" size="xl" hide-footer centered>
            <app-manage-subcategories :is-modal="true" />
        </b-modal>

        <b-modal v-model="create_new_sub_sub_category" title="Manage Sub Sub Categories" size="xl" hide-footer centered>
            <app-manage-sub-subcategories :is-modal="true" />
        </b-modal>

        <b-modal v-model="create_new_sub_sub_sub_category" title="Manage Sub Sub Sub Categories" size="xl" hide-footer centered>
            <app-manage-sub-sub-subcategories :is-modal="true" />
        </b-modal>

        <!-- Image Preview Modal -->
        <b-modal ref="image-modal" title="" hide-footer size="lg" centered>
            <div class="text-center">
                <img :src="previewImageUrl" style="max-width: 100%; max-height: 500px;" />
            </div>
        </b-modal>

        <!-- View Related Categories Tree Modal -->
        <b-modal ref="tree-modal" :title="'Related Categories Tree: ' + (selectedCategory ? selectedCategory.name : '')" hide-footer size="xl" centered>
            <div v-if="treeLoading" class="text-center p-4">
                <b-spinner class="align-middle text-primary" style="width: 2.5rem; height: 2.5rem;"></b-spinner>
                <div class="mt-2 text-muted fw-bold">Loading subcategories...</div>
            </div>
            <div v-else-if="selectedCategoryTree" class="p-4 bg-light rounded" style="overflow-x: auto;">
                <div class="d-flex flex-column align-items-center text-center" style="min-width: max-content;">
                    <!-- Level 1 (Main Category) -->
                    <div class="org-node border border-2 border-primary p-3 bg-white shadow-sm" style="min-width: 300px; border-radius: 8px;">
                        <h4 class="mb-2 fw-bold text-uppercase text-dark" style="letter-spacing: 1px;">{{ selectedCategoryTree.name }}</h4>
                        <div class="badge bg-secondary mb-2 px-3 py-2">MAIN CATEGORY</div>
                        <div class="mt-1">
                            <span :class="['badge', selectedCategoryTree.status === 1 ? 'bg-success' : 'bg-danger']">
                                {{ selectedCategoryTree.status === 1 ? 'Active' : 'Inactive' }}
                            </span>
                        </div>
                    </div>

                    <!-- Level 2 (Sub Categories) -->
                    <div v-if="selectedCategoryTree.all_childs && selectedCategoryTree.all_childs.length > 0" class="d-flex flex-row justify-content-center mt-3 gap-4">
                        <div v-for="sub in selectedCategoryTree.all_childs" :key="sub.id" class="d-flex flex-column align-items-center">
                            <i class="fa fa-arrow-down text-muted mb-3 fs-5"></i>
                            
                            <div class="org-node border border-2 border-secondary p-3 bg-white shadow-sm" style="min-width: 220px; border-radius: 6px;">
                                <h6 class="fw-bold text-uppercase mb-2 text-dark" style="letter-spacing: 0.5px;">{{ sub.name }}</h6>
                                <div class="badge bg-secondary mb-2">SUB CATEGORY</div>
                                <div class="mt-1">
                                    <span :class="['badge', sub.status === 1 ? 'bg-success' : 'bg-danger']" style="font-size: 10px;">
                                        {{ sub.status === 1 ? 'Active' : 'Inactive' }}
                                    </span>
                                </div>
                            </div>
                            
                            <!-- Level 3 (Sub Sub Categories) -->
                            <div v-if="sub.all_childs && sub.all_childs.length > 0" class="d-flex flex-row justify-content-center mt-3 gap-3">
                                <div v-for="subSub in sub.all_childs" :key="subSub.id" class="d-flex flex-column align-items-center">
                                    <i class="fa fa-arrow-down text-muted mb-3"></i>
                                    
                                    <div class="org-node border border-1 border-secondary p-2 bg-white shadow-sm" style="min-width: 160px; border-radius: 4px;">
                                        <div class="fw-bold text-uppercase mb-2 text-dark" style="font-size: 13px;">{{ subSub.name }}</div>
                                        <div class="badge bg-secondary mb-1" style="font-size: 10px;">SUB SUB CATEGORY</div>
                                        <div class="mt-1">
                                            <span :class="['badge', subSub.status === 1 ? 'bg-success' : 'bg-danger']" style="font-size: 9px;">
                                                {{ subSub.status === 1 ? 'Active' : 'Inactive' }}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <!-- Level 4 (Sub Sub Sub Categories) -->
                                    <div v-if="subSub.all_childs && subSub.all_childs.length > 0" class="d-flex flex-row justify-content-center mt-3 gap-2">
                                        <div v-for="subSubSub in subSub.all_childs" :key="subSubSub.id" class="d-flex flex-column align-items-center">
                                            <i class="fa fa-arrow-down text-muted mb-3" style="font-size: 12px;"></i>
                                            
                                            <div class="org-node border border-1 border-light p-2 shadow-sm bg-white" style="min-width: 130px; border-radius: 4px;">
                                                <div class="fw-medium text-uppercase mb-1 text-dark" style="font-size: 11px;">{{ subSubSub.name }}</div>
                                                <div class="text-muted mb-1" style="font-size: 9px;">(SUB SUB SUB)</div>
                                                <div class="mt-1">
                                                    <span :class="['badge', subSubSub.status === 1 ? 'bg-success' : 'bg-danger']" style="font-size: 9px;">
                                                        {{ subSubSub.status === 1 ? 'Active' : 'Inactive' }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="text-muted mt-4">
                        <i class="fa fa-info-circle me-1"></i> No sub-categories available.
                    </div>
                </div>
            </div>
        </b-modal>


    </div>

</template>
<script>

import EditRecord from './Edit.vue';
import ManageSubcategories from './ManageSubcategories.vue';
import ManageSubSubcategories from './ManageSubSubcategories.vue';
import ManageSubSubSubcategories from './ManageSubSubSubcategories.vue';

export default {
    components: {
        'app-edit-record': EditRecord,
        'app-manage-subcategories': ManageSubcategories,
        'app-manage-sub-subcategories': ManageSubSubcategories,
        'app-manage-sub-sub-subcategories': ManageSubSubSubcategories,
    },
    data: function () {
        return {
            fields: [
                { key: 'id', label: 'Sr. No.', class: 'text-center', sortable: true, sortDirection: 'asc' },
                { key: 'name', label: this.$titleLabel('name'), class: 'text-center', sortable: true },
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
            isLoading: false,
            sectionStyle: 'style_1',
            max_visible_categories: 12,
            max_col_in_single_row: 3,
            create_new: null,
            create_new_sub_category: false,
            create_new_sub_sub_category: false,
            create_new_sub_sub_sub_category: false,
            edit_record: null,
            settingModalShow: false,
            currentLanguageId: null,
            activeLanguages: [],
            latestRequestId: 0,
            previewImageUrl: null,
            selectedCategory: null,
            selectedCategoryTree: null,
            treeLoading: false,
            parentCategoryStack: [],

            // Settings Modal Data
            settingsLoading: false,
            settingsCategories: [],
            settingsInlineEditRecord: null,
            settingsInlineCreate: false,
            settingsActiveTabLevel: 0,
        }
    },
    computed: {
        dynamicAddLabel() {
            const len = this.parentCategoryStack.length;
            if (len === 0) return 'Add Category';
            if (len === 1) return 'Add Sub Category';
            if (len === 2) return 'Add Sub Sub Category';
            return 'Add Sub Sub Sub Category';
        },
        sortOptions() {
            // Create an options list from our fields
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
        filteredCategories: function () {
            const list = Array.isArray(this.categories) ? this.categories : [];
            const query = this.filter ? this.filter.toLowerCase() : '';
            return list.filter(category => {
                const name = (category.name || '').toString().toLowerCase();
                const subtitle = (category.subtitle || '').toString().toLowerCase();
                return name.includes(query) || subtitle.includes(query);
            });
        },
        // Computed property to transform categories with translated fields based on current app_locale
        translatedCategories: function () {
            // Guard: ensure categories is an array to avoid "Cannot read properties of undefined (reading 'length')"
            const list = Array.isArray(this.categories) ? this.categories : [];
            if (!this.currentLanguageId || list.length === 0) {
                return list;
            }

            // Transform each category to use translated fields
            return list.map(category => {
                const translatedCategory = { ...category };

                if (category.translations && Array.isArray(category.translations)) {
                    const translation = category.translations.find(
                        t => t.language_id === this.currentLanguageId
                    );

                    // Use translated name if available and not empty, otherwise fallback to main table name
                    if (translation && translation.name && translation.name.trim() !== '') {
                        translatedCategory.name = translation.name;
                    }

                    // Use translated subtitle if available and not empty, otherwise fallback to main table subtitle
                    if (translation && translation.subtitle && translation.subtitle.trim() !== '') {
                        translatedCategory.subtitle = translation.subtitle;
                    }
                }
                return translatedCategory;
            });
        },
        flattenedSettingsCategories() {
            const list = this.settingsCategories || [];
            
            // Apply translation fallback
            const translatedList = list.map(category => {
                const translatedCategory = { ...category };
                if (category.translations && Array.isArray(category.translations)) {
                    const translation = category.translations.find(t => t.language_id === this.currentLanguageId);
                    if (translation && translation.name && translation.name.trim() !== '') {
                        translatedCategory.name = translation.name;
                    }
                }
                return translatedCategory;
            });

            const map = {};
            translatedList.forEach(cat => map[cat.id] = { ...cat, children: [] });
            
            const roots = [];
            translatedList.forEach(cat => {
                if (cat.parent_id === 0 || !map[cat.parent_id]) {
                    roots.push(map[cat.id]);
                } else {
                    map[cat.parent_id].children.push(map[cat.id]);
                }
            });

            // recursive flatten
            const result = [];
            function flatten(nodes, level) {
                nodes.forEach(node => {
                    result.push({ ...node, level });
                    if (node.children && node.children.length > 0) {
                        flatten(node.children, level + 1);
                    }
                });
            }
            flatten(roots, 0);
            return result;
        },
        filteredSettingsCategoriesByTab() {
            return this.flattenedSettingsCategories.filter(cat => cat.level === this.settingsActiveTabLevel);
        }
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
            if (this.currentPage === 1) {
                this.getCategories();
            } else {
                this.currentPage = 1;
            }
        }
    },
    created: function () {
        this.showCreateModal();
        this.fetchActiveLanguages().then(() => {
            this.getCategories();
        });
    },
    methods: {
        getParentName(parentId) {
            const parent = this.flattenedSettingsCategories.find(c => c.id === parentId);
            return parent ? parent.name : '-';
        },
        fetchActiveLanguages() {
            return axios.get(this.$apiUrl + '/active_languages')
                .then(response => {
                    if (response.data.data && Array.isArray(response.data.data)) {
                        this.activeLanguages = response.data.data;

                        const appLocale = window.appLocale || 'en';

                        // Find language ID for current app_locale code
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

        getCategories() {
            this.isLoading = true;
            this.latestRequestId++;
            const currentRequestId = this.latestRequestId;

            const currentParentId = this.parentCategoryStack.length > 0 
                                  ? this.parentCategoryStack[this.parentCategoryStack.length - 1].id 
                                  : 0;

            const params = {
                offset: this.currentPage,
                limit: this.perPage,
                filter: this.filter,
                parent_id: currentParentId,
                status: null, // Explicitly request all categories (active and inactive)
                _t: Date.now()
            };
            axios.get(this.$apiUrl + '/categories', { params })
                .then((response) => {
                    if (currentRequestId !== this.latestRequestId) {
                        return; // Discard stale/out-of-order response
                    }
                    this.isLoading = false;
                    const data = response.data || {};
                    // Always set to array so .length and table empty state work; avoid undefined
                    this.categories = Array.isArray(data.data) ? data.data : [];
                    this.totalRows = typeof data.total === 'number' ? data.total : 0;
                })
                .catch(() => {
                    if (currentRequestId !== this.latestRequestId) {
                        return; // Discard stale/out-of-order response
                    }
                    this.isLoading = false;
                    this.categories = [];
                    this.totalRows = 0;
                });
        },


        hideModal() {
            this.create_new = false;
            this.create_new_sub_category = false;
            this.create_new_sub_sub_category = false;
            this.create_new_sub_sub_sub_category = false;
            this.edit_record = null;
            setTimeout(() => {
                this.$emit('closed');
            }, 500);
        },
        openAddModal() {
            if (this.parentCategoryStack.length > 0) {
                const currentParentId = this.parentCategoryStack[this.parentCategoryStack.length - 1].id;
                this.edit_record = { id: null, parent_id: currentParentId, status: 1 };
                this.create_new = false; 
            } else {
                this.create_new = true;
                this.edit_record = null;
            }
        },
        enterCategory(category) {
            this.parentCategoryStack.push(category);
            this.currentPage = 1;
            this.getCategories();
        },
        goToRoot() {
            this.parentCategoryStack = [];
            this.currentPage = 1;
            this.getCategories();
        },
        goToLevel(index) {
            this.parentCategoryStack = this.parentCategoryStack.slice(0, index + 1);
            this.currentPage = 1;
            this.getCategories();
        },
        openSettingsModal() {
            this.fetchSettingsCategories();
            this.$refs['settings-modal'].show();
        },
        onSettingsModalClose() {
            this.settingsInlineEditRecord = null;
            this.settingsInlineCreate = false;
        },
        closeSettingsInlineForm() {
            this.settingsInlineEditRecord = null;
            this.settingsInlineCreate = false;
        },
        onSettingsInlineSaved() {
            this.closeSettingsInlineForm();
            this.fetchSettingsCategories();
            this.getCategories(); // Refresh main table as well
        },
        editSettingsCategory(category) {
            this.settingsInlineEditRecord = category;
        },
        fetchSettingsCategories() {
            this.settingsLoading = true;
            const params = {
                offset: 1,
                limit: 1000, 
                status: null 
            };
            axios.get(this.$apiUrl + '/categories', { params })
                .then(response => {
                    if (response.data.data && Array.isArray(response.data.data)) {
                        this.settingsCategories = response.data.data;
                    } else if (response.data.data && Array.isArray(response.data.data.categories)) {
                        this.settingsCategories = response.data.data.categories;
                    }
                })
                .catch(error => {
                    console.error('Error fetching settings categories:', error);
                })
                .finally(() => {
                    this.settingsLoading = false;
                });
        },
        deleteCategory(index, id, fromSettings = false) {
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
                            if (index !== null) {
                                this.categories.splice(index, 1);
                            }
                            this.showMessage('success', data.message);
                            if (fromSettings) {
                                this.fetchSettingsCategories();
                            }
                            this.getCategories();
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
            this.$router.push({ path: '/manage_categories' });
        },
        // Called when Edit modal saves; show toast once and refresh list
        onCategorySaved(message) {
            this.showMessage('success', message);
            this.getCategories();
            this.create_new = null;
        },
        openImageModal(imageUrl) {
            this.previewImageUrl = imageUrl;
            this.$refs['image-modal'].show();
        },
        viewCategoryTree(category) {
            this.selectedCategory = category;
            this.selectedCategoryTree = null;
            this.treeLoading = true;
            if (this.$refs['tree-modal']) {
                this.$refs['tree-modal'].show();
            }

            axios.get(this.$apiUrl + '/categories/tree/' + category.id)
                .then((response) => {
                    this.treeLoading = false;
                    const data = response.data || {};
                    if (data.data) {
                        this.selectedCategoryTree = data.data;
                    } else {
                        this.selectedCategoryTree = category;
                    }
                })
                .catch((error) => {
                    this.treeLoading = false;
                    this.selectedCategoryTree = category;
                    console.error('Error loading category tree:', error);
                });
        },
    }
};
</script>

