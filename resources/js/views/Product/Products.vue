<template>
    <div class="dense-layout">
        <div class="page-header d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center gap-2">
                <h5 class="mb-0 fw-bold text-dark">{{ __('manage_products') }}</h5>
                <span class="text-muted small">|</span>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0 bg-transparent small">
                        <li class="breadcrumb-item" v-if="isSellerRoute">
                            <router-link to="/seller/dashboard" class="text-muted text-decoration-none">{{ __('dashboard') }}</router-link>
                        </li>
                        <li class="breadcrumb-item" v-else>
                            <router-link to="/dashboard" class="text-muted text-decoration-none">{{ __('dashboard') }}</router-link>
                        </li>
                        <li class="breadcrumb-item active text-primary" aria-current="page">{{ __('manage_products') }}</li>
                    </ol>
                </nav>
            </div>

        </div>

        <div class="card border-0 shadow-sm rounded-3">
            <div class="card-header bg-white border-bottom-0 p-2 d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div class="search-box d-flex align-items-center border rounded px-2 bg-light">
                    <i class="fa fa-search text-muted small"></i>
                    <input v-model="filter" type="text" class="form-control form-control-sm border-0 bg-transparent shadow-none ms-1" :placeholder="__('search')" @input="getRecords()" style="width: 250px;">
                </div>
                
                <div class="d-flex align-items-center gap-1">
                    <button class="btn btn-sm btn-light border d-flex align-items-center gap-1" :class="{ 'active bg-white': showFilters }" @click="showFilters = !showFilters">
                        <i class="fa fa-filter text-muted"></i> <span>{{ __('filters') }}</span>
                    </button>
                    
                    <b-dropdown size="sm" variant="light" toggle-class="btn-sm border d-flex align-items-center gap-1" :disabled="selectedItems.length === 0">
                        <template #button-content>
                            <i class="fa fa-bolt text-muted"></i> <span>{{ __('actions') }}</span>
                        </template>
                        <b-dropdown-item href="javascript:void(0);" @click="multipleDelete" class="small">
                            <span class="text-danger d-flex align-items-center gap-2">
                                <i class="fa fa-trash"></i> {{ __('delete_selected_products') }}
                            </span>
                        </b-dropdown-item>
                    </b-dropdown>

                    <button class="btn btn-sm btn-light border d-flex align-items-center gap-1" @click="getRecords()">
                        <i class="fa fa-refresh text-muted"></i> <span>{{ __('refresh') }}</span>
                    </button>

                    <b-dropdown size="sm" variant="light" right no-caret toggle-class="btn-sm border d-flex align-items-center gap-1">
                        <template #button-content>
                            <i class="fa fa-columns text-muted"></i> <span>{{ __('columns') }}</span>
                        </template>
                        <b-dropdown-form class="p-2" style="min-width: 180px; max-height: 250px; overflow-y: auto;">
                            <div v-for="field in fields" :key="field.key" v-if="field.key !== 'select'" class="form-check mb-1">
                                <input type="checkbox" :id="'col-' + field.key" :disabled="visibleFields.length == 1 && field.visible" v-model="field.visible" class="form-check-input" style="transform: scale(0.85);">
                                <label class="form-check-label small ms-1" :for="'col-' + field.key">{{ field.label }}</label>
                            </div>
                        </b-dropdown-form>
                    </b-dropdown>

                    <template v-if="$roleSeller == login_user.role.name">
                        <router-link to="/seller/manage_products/create" class="btn btn-sm btn-primary d-flex align-items-center gap-1 shadow-sm">
                            <i class="fa fa-plus"></i> {{ __('add_product') }}
                        </router-link>
                    </template>
                    <template v-else>
                        <router-link to="/manage_products/create" class="btn btn-sm btn-primary d-flex align-items-center gap-1 shadow-sm">
                            <i class="fa fa-plus"></i> {{ __('add_product') }}
                        </router-link>
                    </template>
                </div>
            </div>

            <b-collapse v-model="showFilters">
                <div class="p-2 bg-light border-top border-bottom">
                    <div class="row g-2 align-items-end">
                        <div class="col-md-2">
                            <label class="form-label text-muted small mb-1">{{ __('category') }}</label>
                            <select v-model="category" @change="applyFilters" class="form-select form-select-sm">
                                <option value="">{{ __('all_categories') }}</option>
                                <option v-for="category in translatedCategories" :value="category.id">{{ getCategoryFilterLabel(category) }}</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label text-muted small mb-1">{{ __('status') }}</label>
                            <select v-model="is_approved" @change="applyFilters" class="form-select form-select-sm">
                                <option value="">{{ __('all_statuses') }}</option>
                                <option value="1">{{ __('approved') }}</option>
                                <option value="0">{{ __('not_approved') }}</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label text-muted small mb-1">Min Price</label>
                            <input type="number" min="0" step="any" v-model="min_price" @input="applyFilters" class="form-control form-control-sm" placeholder="0.00">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label text-muted small mb-1">Max Price</label>
                            <input type="number" min="0" step="any" v-model="max_price" @input="applyFilters" class="form-control form-control-sm" placeholder="0.00">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label text-muted small mb-1">Date From</label>
                            <input type="date" v-model="entry_date_from" @change="applyFilters" class="form-control form-control-sm">
                        </div>
                        <div class="col-md-2 d-flex gap-1">
                            <input type="date" v-model="entry_date_to" @change="applyFilters" class="form-control form-control-sm" style="flex: 1;">
                            <button type="button" class="btn btn-sm btn-outline-secondary" @click="clearFilters" v-b-tooltip.hover title="Clear Filters">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </b-collapse>

            <div class="table-responsive p-0 m-0">
                <b-table :items="translatedProducts" :fields="visibleFields" :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :sort-direction="sortDirection" :busy="isLoading" class="table table-hover table-sm compact-table mb-0 border-0" show-empty>
                    
                    <template #table-busy>
                        <div class="text-center text-muted my-3 small">
                            <b-spinner small class="align-middle me-2"></b-spinner> <strong>{{ __('loading') }}...</strong>
                        </div>
                    </template>
                    <template #empty>
                        <div class="text-center text-muted my-4 small">
                            <i class="fa fa-box-open fs-4 mb-2 d-block text-black-50"></i>
                            No products found
                        </div>
                    </template>

                    <template #head(select)="row">
                        <input type="checkbox" v-model="all_select" @click="allSelectCheckBox" class="form-check-input mt-0">
                    </template>
                    <template #cell(select)="row">
                        <input type="checkbox" v-model="selectedItems" @change="selectCheckBox" :value="`${row.item.product_id}`" class="form-check-input mt-0">
                    </template>
                    <template #cell(product_variant_id)="row">
                        <span class="text-muted">#{{ pageStart + row.index }}</span>
                    </template>



                    <template #cell(name)="row">
                        <div class="d-flex flex-column text-wrap" style="max-width: 130px; word-break: break-word;" :title="row.item.name">
                            <router-link v-if="Number(row.item.variant_count) > 1" :to="{ name: variantRouteName, params: { product_id: row.item.product_id } }" class="text-primary fw-bold text-decoration-none">
                                {{ row.item.name }}
                            </router-link>
                            <span v-else class="fw-medium text-dark">{{ row.item.name }}</span>
                            <small class="text-muted mt-1" style="font-size: 9px;" v-if="Number(row.item.variant_count) > 1">
                                <i class="fa fa-tags me-1"></i>{{ row.item.variant_count }} Variants
                            </small>
                        </div>
                    </template>

                    <template #cell(image)="row">
                        <div class="product-img-wrapper border rounded-1 overflow-hidden d-flex align-items-center justify-content-center bg-light mx-auto" style="width: 36px; height: 36px; flex-shrink: 0; cursor:pointer;" @click="openLightbox($storageUrl + row.item.image)">
                            <img :src="$storageUrl + row.item.image" alt="img" class="img-fluid" style="object-fit: contain; width:100%; height:100%;" />
                        </div>
                    </template>

                    <template #cell(price)="row">
                        <span class="text-dark">{{ formatPriceRange(row.item.price, row.item.max_price) }}</span>
                    </template>

                    <template #cell(discounted_price)="row">
                        <span class="text-success fw-bold">{{ formatPriceRange(row.item.discounted_price, row.item.max_discounted_price) }}</span>
                    </template>

                    <template #cell(category_name)="row">
                        <div class="d-flex flex-column gap-1 text-wrap" style="max-width: 180px; line-height: 1.25; word-break: break-word;">
                            <div class="text-dark fw-bold" v-if="getCategoryNames(row.item.category_id, 'category') !== '-'" style="font-size: 0.85rem;">{{ getCategoryNames(row.item.category_id, 'category') }}</div>
                            <div class="text-secondary" v-if="getCategoryNames(row.item.category_id, 'subcategory') !== '-'" style="font-size: 0.8rem;"><i class="fa fa-level-up fa-rotate-90 text-muted me-1"></i>{{ getCategoryNames(row.item.category_id, 'subcategory') }}</div>
                            <div class="text-secondary" v-if="getCategoryNames(row.item.category_id, 'sub_subcategory') !== '-'" style="font-size: 0.75rem;"><i class="fa fa-level-up fa-rotate-90 text-muted ms-2 me-1"></i>{{ getCategoryNames(row.item.category_id, 'sub_subcategory') }}</div>
                        </div>
                    </template>

                    <template #cell(pv_status)="row">
                        <span class="badge bg-success-subtle text-success border border-success-subtle fw-medium" v-if="row.item.pv_status == 1"><i class="fa fa-circle me-1" style="font-size: 6px; vertical-align: middle;"></i>{{ __('available') }}</span>
                        <span class="badge bg-danger-subtle text-danger border border-danger-subtle fw-medium" v-else><i class="fa fa-circle me-1" style="font-size: 6px; vertical-align: middle;"></i>{{ __('sold_out') }}</span>
                    </template>

                    <template #cell(seller_name)="row">
                        <div class="text-truncate" style="max-width: 100px;" :title="row.item.seller_name">{{ row.item.seller_name }}</div>
                    </template>

                    <template #cell(is_approved)="row">
                        <span class="badge bg-success-subtle text-success border border-success-subtle fw-medium" v-if="row.item.is_approved == 1">{{ __('approved') }}</span>
                        <span class="badge bg-warning-subtle text-warning border border-warning-subtle fw-medium" v-if="row.item.is_approved == 0">{{ __('not_approved') }}</span>
                    </template>
                    
                    <template #cell(return_status)="row">
                        <span class="text-danger small" v-if="row.item.return_status == 0"><i class="fa fa-times"></i></span>
                        <span class="text-success small" v-if="row.item.return_status == 1"><i class="fa fa-check"></i></span>
                    </template>
                    
                    <template #cell(cancelable_status)="row">
                        <span class="text-danger small" v-if="row.item.cancelable_status === 0"><i class="fa fa-times"></i></span>
                        <span class="text-success small" v-if="row.item.cancelable_status == 1"><i class="fa fa-check"></i></span>
                    </template>

                    <template #cell(actions)="row">
                        <div class="d-flex align-items-center gap-1 justify-content-end">
                            <template v-if="$roleSeller == login_user.role.name">
                                <router-link :to="{ name: 'SellerViewProduct', params: { id: row.item.id, record: row.item } }" class="btn btn-sm btn-icon btn-light border text-primary" v-b-tooltip.hover :title="__('view')">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link :to="{ name: 'SellerEditProduct', params: { id: row.item.id, record: row.item } }" class="btn btn-sm btn-icon btn-light border text-info" v-if="$can('product_update')" v-b-tooltip.hover :title="__('edit')">
                                    <i class="fa fa-edit"></i>
                                </router-link>
                                <router-link :to="{ name: 'SellerProductRatings', params: { id: row.item.id, record: row.item } }" class="btn btn-sm btn-icon btn-light border text-warning" v-if="$can('product_update')" v-b-tooltip.hover :title="__('view_ratings')">
                                    <i class="fa fa-star"></i>
                                </router-link>
                                <router-link :to="{ name: 'SellerCloneProduct', params: { id: row.item.id, record: row.item, clone: true } }" class="btn btn-sm btn-icon btn-light border text-secondary" v-if="$can('product_update')" v-b-tooltip.hover :title="__('clone_product')">
                                    <i class="fa fa-copy"></i>
                                </router-link>
                            </template>
                            <template v-else>
                                <router-link :to="{ name: 'ViewProduct', params: { id: row.item.id, record: row.item } }" class="btn btn-sm btn-icon btn-light border text-primary" v-b-tooltip.hover :title="__('view')">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link :to="{ name: 'EditProduct', params: { id: row.item.id, record: row.item } }" class="btn btn-sm btn-icon btn-light border text-info" v-if="$can('product_update')" v-b-tooltip.hover :title="__('edit')">
                                    <i class="fa fa-edit"></i>
                                </router-link>
                                <router-link :to="{ name: 'ProductRatings', params: { id: row.item.id, record: row.item } }" class="btn btn-sm btn-icon btn-light border text-warning" v-if="$can('product_update')" v-b-tooltip.hover :title="__('view_ratings')">
                                    <i class="fa fa-star"></i>
                                </router-link>
                                <router-link :to="{ name: 'CloneProduct', params: { id: row.item.id, record: row.item, clone: true } }" class="btn btn-sm btn-icon btn-light border text-secondary" v-if="$can('product_update')" v-b-tooltip.hover :title="__('clone_product')">
                                    <i class="fa fa-copy"></i>
                                </router-link>
                            </template>
                            <button class="btn btn-sm btn-icon btn-light border text-danger" @click="deleteRecord(row.index, row.item.product_id)" v-if="$can('product_delete')" v-b-tooltip.hover :title="__('delete')">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </template>
                </b-table>
            </div>
            
            <div class="card-footer bg-white border-top p-2 d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div class="text-muted small">
                    {{ __('Showing Result') }}: <strong class="text-dark">{{ pageEnd }}</strong> {{ __('of') }} <strong class="text-dark">{{ totalRows }}</strong>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <div class="d-flex align-items-center gap-1">
                        <span class="text-muted small">Per page:</span>
                        <b-form-select v-model="perPage" :options="pageOptions" class="form-select form-select-sm border-0 bg-light" style="width: 70px; padding: 0.1rem 0.4rem; height: 26px;"></b-form-select>
                    </div>
                    <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" class="mb-0 pagination-sm compact-pagination" hide-goto-end-buttons hide-ellipsis prev-text="<" next-text=">"></b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Auth from '../../Auth.js';
export default {
    data: function () {
        return {
            login_user: Auth.user,

            fields: [
                { key: 'select', label: '', visible: true, class: 'text-center', thStyle: { width: '40px', minWidth: '40px' } },
                { key: 'product_variant_id', label: 'Sr. No.', visible: true, class: 'text-center', thStyle: { width: '50px', minWidth: '50px' } },
                { key: 'name', label: this.$titleLabel('name'), visible: true, sortable: true, class: 'text-center', thStyle: { width: '130px', minWidth: '130px' } },
                { key: 'image', label: this.$titleLabel('image'), visible: true, class: 'text-center', thStyle: { width: '60px', minWidth: '60px' } },
                { key: 'category_name', label: 'Category', visible: true, sortable: true, class: 'text-center', thStyle: { width: '130px', minWidth: '130px' } },
                { key: 'tax_id', label: this.$titleLabel('tax_id'), visible: false, sortable: true, class: 'text-center' },
                { key: 'price', label: 'MRP(' + this.$currency + ')', visible: true, class: 'text-center', sortable: true, thStyle: { width: '95px', minWidth: '95px' } },
                { key: 'discounted_price', label: this.$titleLabel('discounted_price') + '(' + this.$currency + ')', visible: true, class: 'text-center', sortable: true, thStyle: { width: '110px', minWidth: '110px' } },
                { key: 'pv_status', label: 'Status', visible: true, class: 'text-center', sortable: true, thStyle: { width: '90px', minWidth: '90px' } },
                { key: 'return_status', label: this.$titleLabel('return'), visible: false, class: 'text-center', sortable: true },
                { key: 'cancelable_status', label: this.$titleLabel('cancellation'), visible: false, class: 'text-center', sortable: true },
                { key: 'actions', label: this.$titleLabel('actions'), visible: true, thStyle: { width: '95px', minWidth: '95px' } }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 20,
            pageOptions: [20, 50, 100, 200, 500],
            sortBy: '',
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
            filterOn: [],
            categories: [],
            sellers: [],
            products: [],

            category: "",
            seller: (Auth.user.seller !== null) ? Auth.user.seller.id : "",
            is_approved: "",
            min_price: "",
            max_price: "",
            entry_date_from: "",
            entry_date_to: "",

            selectedItems: [],
            select: '',
            all_select: false,
            isLoading: false,
            showFilters: false,

            currentLanguageId: null,
            activeLanguages: []
        }
    },
    computed: {
        pageStart() {
            if (this.totalRows === 0) return 0;
            return (this.currentPage - 1) * this.perPage + 1;
        },
        pageEnd() {
            return Math.min(this.currentPage * this.perPage, this.totalRows);
        },
        visibleFields() {
            return this.fields.filter(field => field.visible)
        },
        isSellerRoute() {
            // Use this.$route to access the current route
            return this.$route.path.startsWith('/seller/');
        },
        variantRouteName() {
            return this.isSellerRoute ? 'SellerProductVariants' : 'ProductVariants';
        },
        translatedProducts: function () {
            if (!this.currentLanguageId || this.products.length === 0) {
                return this.products;
            }

            // Get translated sellers for lookup
            const sellersMap = {};
            if (this.translatedSellers && this.translatedSellers.length > 0) {
                this.translatedSellers.forEach(seller => {
                    sellersMap[seller.id] = seller.name;
                });
            }

            return this.products.map(product => {
                const translatedProduct = { ...product };

                // Translate product name
                if (product.translations && Array.isArray(product.translations)) {
                    const translation = product.translations.find(
                        t => t.language_id === this.currentLanguageId
                    );

                    if (translation && translation.name && translation.name.trim() !== '') {
                        translatedProduct.name = translation.name;
                    }
                }

                // Translate seller name
                if (product.seller_id && sellersMap[product.seller_id]) {
                    translatedProduct.seller_name = sellersMap[product.seller_id];
                }

                return translatedProduct;
            });
        },
        translatedCategories: function () {
            if (!this.currentLanguageId || this.categories.length === 0) {
                return this.categories.map(category => ({
                    ...category,
                    name: category.name || '-'
                }));
            }

            // Get default language ID for fallback
            const defaultLanguage = this.activeLanguages.find(lang => lang.is_default === 1);
            const defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;

            return this.categories.map(category => {
                const translatedCategory = { ...category };
                let translatedName = category.name; // Fallback to main table name

                if (category.translations && Array.isArray(category.translations)) {
                    // First try to find translation for current language
                    let translation = category.translations.find(
                        t => t.language_id === this.currentLanguageId
                    );

                    // If not found, try default language
                    if (!translation && defaultLanguageId) {
                        translation = category.translations.find(
                            t => t.language_id === defaultLanguageId
                        );
                    }

                    // Use translation name if available and not empty
                    if (translation && translation.name && translation.name.trim() !== '') {
                        translatedName = translation.name;
                    }
                }

                translatedCategory.name = translatedName;
                return translatedCategory;
            });
        },
        translatedSellers: function () {
            if (!this.currentLanguageId || this.sellers.length === 0) {
                return this.sellers;
            }

            // Get default language ID for fallback
            const defaultLanguage = this.activeLanguages.find(lang => lang.is_default === 1);
            const defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;

            return this.sellers.map(seller => {
                const translatedSeller = { ...seller };
                let translatedName = seller.name; // Fallback to main table name

                if (seller.translations && Array.isArray(seller.translations)) {
                    // First try to find translation for current language
                    let translation = seller.translations.find(
                        t => t.language_id === this.currentLanguageId
                    );

                    // If not found, try default language
                    if (!translation && defaultLanguageId) {
                        translation = seller.translations.find(
                            t => t.language_id === defaultLanguageId
                        );
                    }

                    // Use translation name if available and not empty
                    if (translation && translation.name && translation.name.trim() !== '') {
                        translatedName = translation.name;
                    }
                }

                translatedSeller.name = translatedName;
                return translatedSeller;
            });
        },
    },

    mounted() {

    },
    created: function () {
        if (!this.$can('product_list')) {
            this.showError("You do not have permission to view this page.");
            this.$router.replace({ path: '/unauthorized' });
            return;
        }
        if (this.$roleSeller === this.login_user.role.name) {
            this.fields.forEach((field, index) => {
                if (field.key === 'seller_name') {
                    this.fields.splice(index, 1);
                }
            });
        }
        this.fetchActiveLanguages().then(() => {
            this.getRecords();
        });
    },
    watch: {
        currentPage() {
            this.getRecords();
        },
        perPage() {
            if (this.currentPage !== 1) {
                this.currentPage = 1;
            } else {
                this.getRecords();
            }
        },
        category() {
            this.resetSelection();
        },
        seller() {
            this.resetSelection();
        },
        is_approved() {
            this.resetSelection();
        },
        filter() {
            this.resetSelection();
        },
    },
    methods: {
        getCategoryNames(categoryIdsStr, level) {
            if (!categoryIdsStr) return '-';
            const ids = categoryIdsStr.toString().split(',').map(id => parseInt(id.trim()));
            const selectedCats = this.translatedCategories.filter(c => ids.includes(c.id));
            
            let filteredCats = [];
            const isRoot = (c) => !c.parent_id || parseInt(c.parent_id) === 0;

            if (level === 'category') {
                filteredCats = selectedCats.filter(c => isRoot(c));
            } else if (level === 'subcategory') {
                const rootIds = this.translatedCategories.filter(c => isRoot(c)).map(c => c.id);
                filteredCats = selectedCats.filter(c => rootIds.includes(parseInt(c.parent_id)));
            } else if (level === 'sub_subcategory') {
                const rootIds = this.translatedCategories.filter(c => isRoot(c)).map(c => c.id);
                const subIds = this.translatedCategories.filter(c => rootIds.includes(parseInt(c.parent_id))).map(c => c.id);
                filteredCats = selectedCats.filter(c => subIds.includes(parseInt(c.parent_id)));
            }
            
            return filteredCats.length > 0 ? filteredCats.map(c => c.name).join(', ') : '-';
        },
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
        openLightbox(image) {
            window.open(image, '_blank', 'noopener');
        },
        getCategoryFilterLabel(category) {
            const names = [];
            const categoryMap = {};

            this.translatedCategories.forEach(item => {
                categoryMap[Number(item.id)] = item;
            });

            let current = category;
            const visited = [];

            while (current && !visited.includes(Number(current.id))) {
                names.unshift(current.name || '-');
                visited.push(Number(current.id));

                if (!current.parent_id || Number(current.parent_id) === 0) {
                    break;
                }

                current = categoryMap[Number(current.parent_id)];
            }

            return names.join(' > ');
        },
        getRecords() {
            this.isLoading = true
            let param = {
                "category": this.category,
                "seller": this.seller,
                "is_approved": this.is_approved,
                "min_price": this.min_price,
                "max_price": this.max_price,
                "entry_date_from": this.entry_date_from,
                "entry_date_to": this.entry_date_to,
                page: this.currentPage,
                per_page: this.perPage,
                filter: this.filter,
                group_by_product: 1
            }
            axios.get(this.$apiUrl + '/products', {
                params: param
            }).then((response) => {
                this.isLoading = false;
                this.categories = response.data.data.categories;
                this.sellers = response.data.data.sellers;
                this.products = response.data.data.products;
                this.totalRows = response.data.total

            });
        },
        deleteRecord(index, id) {

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
                    axios.post(this.$apiUrl + '/products/delete_main', postData)
                        .then((response) => {
                            this.isLoading = false
                            let data = response.data;
                            if (data.status === 1) {
                                this.products.splice(index, 1)
                                this.totalRows = Math.max(0, this.totalRows - 1);
                                this.showMessage("success", data.message);
                            } else {
                                this.showError(data.message);
                            }
                        });
                }
            });

        },
        allSelectCheckBox() {
            if (this.all_select === false) {
                this.all_select = true;
                // Get all products from current page (considering filters)
                this.products.forEach(product => {
                    // Only add if not already selected to avoid duplicates
                    const productId = String(product.product_id);
                    if (!this.selectedItems.includes(productId)) {
                        this.selectedItems.push(productId);
                    }
                });
            } else {
                this.all_select = false;
                // Remove only the products from current page from selected items
                const currentPageProductIds = this.products.map(product => String(product.product_id));
                this.selectedItems = this.selectedItems.filter(id => !currentPageProductIds.includes(id));
            }
        },
        selectCheckBox() {
            let uniqueSelectedItems = [...new Set(this.selectedItems)];
            // Get current page product IDs
            const currentPageProductIds = this.products.map(product => String(product.product_id));
            // Check if all current page products are selected
            const allCurrentPageSelected = currentPageProductIds.every(id => uniqueSelectedItems.includes(id));
            this.all_select = allCurrentPageSelected && currentPageProductIds.length > 0;
        },
        resetSelection() {
            // Reset selection when filters change
            this.selectedItems = [];
            this.all_select = false;
        },
        applyFilters() {
            this.currentPage = 1;
            this.resetSelection();
            this.getRecords();
        },
        clearFilters() {
            this.category = "";
            this.is_approved = "";
            this.min_price = "";
            this.max_price = "";
            this.entry_date_from = "";
            this.entry_date_to = "";
            this.applyFilters();
        },
        multipleDelete() {
            let uniqueSelectedItems = [...new Set(this.selectedItems)];
            if (uniqueSelectedItems.length !== 0) {
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
                        let ids = uniqueSelectedItems.toString();
                        this.isLoading = true
                        let postData = {
                            ids: ids
                        }
                        axios.post(this.$apiUrl + '/products/multiple_delete_main', postData)
                            .then((response) => {
                                this.isLoading = false
                                let data = response.data;
                                if (data.status === 1) {
                                    this.getRecords();
                                    this.selectedItems = [];
                                    this.all_select = false;
                                    this.showMessage("success", data.message);
                                } else {
                                    this.showError(data.message);
                                }

                            });
                    }
                });
            } else {
                this.showWarning("Select at least one record!");
            }
        },
        formatPriceRange(minValue, maxValue) {
            const min = Number(minValue || 0);
            const max = Number(maxValue || 0);
            return min !== max ? `${min} - ${max}` : `${min}`;
        }
    }
};
</script>


<style scoped>
/* High-Density Minimalist Layout */
.dense-layout {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: #f8f9fa;
}

.dense-layout * {
    font-size: 11px;
}

.dense-layout .page-header h5 {
    font-size: 14px !important;
    letter-spacing: -0.01em;
}

.dense-layout .breadcrumb {
    font-size: 11px;
}

/* Compact Table Styles */
.compact-table th {
    background-color: #f8f9fa !important;
    color: #495057;
    font-weight: 600 !important;
    text-transform: uppercase;
    font-size: 9.5px !important;
    letter-spacing: 0.03em;
    padding: 4px 8px !important;
    border-bottom: 2px solid #e9ecef !important;
    border-top: none !important;
    white-space: nowrap;
}

.compact-table td {
    padding: 4px 8px !important;
    vertical-align: middle;
    color: #343a40;
    border-bottom: 1px solid #f1f3f5 !important;
}

.compact-table tr:hover td {
    background-color: #f8f9fc !important;
}

/* Controls & Buttons */
.dense-layout .btn-sm, 
.dense-layout .form-control-sm, 
.dense-layout .form-select-sm {
    font-size: 11.5px !important;
    padding: 3px 8px !important;
    height: 28px !important;
    line-height: 1.2 !important;
    border-radius: 4px;
}

.dense-layout .btn-icon {
    width: 26px !important;
    height: 26px !important;
    padding: 0 !important;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: transparent;
}
.dense-layout .btn-icon:hover {
    background-color: #e9ecef;
}
.dense-layout .btn-icon i {
    font-size: 12px;
}

/* Badges */
.dense-layout .badge {
    font-size: 10px !important;
    padding: 3px 6px !important;
    border-radius: 4px;
    font-weight: 500;
}

/* Pagination */
.compact-pagination ::v-deep .page-link {
    font-size: 11.5px !important;
    padding: 3px 8px !important;
    height: 26px !important;
    min-width: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dee2e6;
    margin: 0 2px;
    border-radius: 4px;
    color: #495057;
}

.compact-pagination ::v-deep .page-item.active .page-link {
    background-color: #e2e8f0;
    border-color: #cbd5e1;
    color: #0f172a;
    font-weight: 600;
}

/* Overrides */
::v-deep .dropdown-menu {
    font-size: 12px;
    padding: 4px;
    border-radius: 6px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
}

::v-deep .dropdown-item {
    padding: 6px 10px;
    border-radius: 4px;
}

::v-deep .dropdown-item:hover {
    background-color: #f1f5f9;
}
</style>
