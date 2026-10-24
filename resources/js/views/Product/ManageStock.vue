<template>
    <div>
        <div class="page-heading">
            <!-- Header for Main Stock Management View -->
            <div class="page-title mb-2" v-if="!selectedProduct">
                <div class="d-flex justify-content-between align-items-center">
                    <h3 class="modern-page-title mb-0">{{ __('stock_management') }}</h3>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><router-link to="/dashboard" class="text-muted">{{ __('dashboard') }}</router-link></li>
                            <li class="breadcrumb-item active text-primary" aria-current="page">{{ __('stock_management') }}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <!-- Header for Drilldown Variant Stock View -->
            <div class="page-title mb-2" v-else>
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <div>
                        <h3 class="modern-page-title mb-0">
                            {{ getTranslatedProductName(selectedProduct) }}
                            <span class="text-primary fs-6 fw-normal">({{ __('product_variants') || 'Variants Stock' }})</span>
                        </h3>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><router-link to="/dashboard" class="text-muted">{{ __('dashboard') }}</router-link></li>
                            <li class="breadcrumb-item"><a href="javascript:void(0)" @click="backToAllProducts" class="text-muted">{{ __('stock_management') }}</a></li>
                            <li class="breadcrumb-item active text-primary" aria-current="page">{{ __('variants') || 'Variants' }}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section class="section">
                <!-- ==================== VIEW 1: MAIN PRODUCTS STOCK LIST ==================== -->
                <div class="figma-main-section-card" v-if="!selectedProduct">
                    <div class="card-body p-0">
                        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 figma-action-bar-row p-3">
                            <div class="flex-grow-1" style="min-width: 250px;">
                                <div class="figma-search-container">
                                    <i class="fa fa-search text-muted"></i>
                                    <input v-model="filter" type="text" class="figma-search-input"
                                        :placeholder="__('search')" @input="getRecords()">
                                </div>
                            </div>
                            <div class="d-flex gap-2 flex-shrink-0">
                                <button class="btn btn-figma-filter d-flex align-items-center gap-2" @click="getRecords()" v-b-tooltip.hover :title="__('refresh')">
                                    <i class="fa fa-refresh"></i>
                                    <span>{{ __('refresh') }}</span>
                                </button>
                            </div>
                        </div>

                        <div class="table-responsive mb-0">
                            <b-table :key="tableKey" :items="products" :fields="fields"
                                :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :sort-direction="sortDirection"
                                :bordered="false" :busy="isLoading" stacked="md" show-empty small
                                primary-key="product_id"
                                class="mb-0">

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

                                <!-- ID column -->
                                <template #cell(sr_no)="row">
                                    {{ pageStart + row.index }}
                                </template>

                                <!-- Product Image column -->
                                <template #cell(image)="row">
                                    <img :src="row.item.image_url || ($storageUrl + row.item.image)" alt="Image" class="img-thumbnail" width="50" height="50"
                                        @click="openLightbox(row.item.image_url || ($storageUrl + row.item.image))"
                                        style="cursor: pointer; object-fit: contain; max-height: 50px;" />
                                </template>

                                <!-- Product Name column -->
                                <template #cell(name)="row">
                                    <div class="d-flex flex-column text-start">
                                        <!-- Multiple Variants: Clickable Name with Badge -->
                                        <template v-if="Number(row.item.variant_count) > 1">
                                            <a href="javascript:void(0)" @click="viewProductVariants(row.item)" class="text-primary fw-bold text-decoration-none d-flex align-items-center gap-1">
                                                <span>{{ getTranslatedProductName(row.item) }}</span>
                                                <i class="fa fa-arrow-right text-primary" style="font-size: 11px;"></i>
                                            </a>
                                            <small class="mt-1">
                                                <span class="badge bg-light text-primary border" style="cursor: pointer;" @click="viewProductVariants(row.item)">
                                                    <i class="fa fa-tags me-1"></i>{{ row.item.variant_count }} Variants
                                                </span>
                                            </small>
                                        </template>
                                        <!-- Single Variant -->
                                        <template v-else>
                                            <span class="fw-medium text-dark">{{ getTranslatedProductName(row.item) }}</span>
                                            <small class="text-muted" v-if="getTranslatedVariant(row.item)">
                                                {{ getTranslatedVariant(row.item) }}
                                            </small>
                                        </template>
                                    </div>
                                </template>

                                <!-- Type column -->
                                <template #cell(type)="row">
                                    <span class="badge bg-light text-dark text-capitalize">{{ row.item.type || 'packet' }}</span>
                                </template>

                                <!-- Available Quantity column -->
                                <template #cell(stock)="row">
                                    <!-- If Single Variant: Inline Editable -->
                                    <div v-if="Number(row.item.variant_count) <= 1">
                                        <div v-if="edit_record && edit_record.product_variant_id === row.item.product_variant_id" class="d-flex align-items-center justify-content-center gap-1">
                                            <b-form-input v-model="edit_record.stock" type="number" min="0" size="sm" style="width: 85px;"
                                                @keyup.enter="updateStock(row.item.product_variant_id)"></b-form-input>
                                        </div>
                                        <div v-else class="fw-bold">
                                            {{ row.item.stock }}
                                        </div>
                                    </div>
                                    <!-- If Multiple Variants: Total stock with drilldown click -->
                                    <div v-else>
                                        <div class="d-flex flex-column align-items-center" style="cursor: pointer;" @click="viewProductVariants(row.item)">
                                            <span class="fw-bold text-dark">{{ row.item.stock }}</span>
                                            <small class="text-muted" style="font-size: 10px;">Total across {{ row.item.variant_count }} variants</small>
                                        </div>
                                    </div>
                                </template>

                                <!-- Status column -->
                                <template #cell(pv_status)="row">
                                    <span v-if="Number(row.item.stock) > 0 || row.item.pv_status == 1" class="badge bg-success">{{ __('available') }}</span>
                                    <span v-else class="badge bg-danger">{{ __('sold_out') }}</span>
                                </template>

                                <!-- Actions column -->
                                <template #cell(actions)="row">
                                    <div class="d-flex gap-2 justify-content-center">
                                        <!-- Multiple variants: Open Variants button -->
                                        <template v-if="Number(row.item.variant_count) > 1">
                                            <button class="btn btn-sm btn-outline-primary d-flex align-items-center gap-1 px-2 py-1"
                                                    @click="viewProductVariants(row.item)"
                                                    v-b-tooltip.hover title="View and manage variants stock">
                                                <i class="fa fa-cubes"></i>
                                                <span class="small">Variants ({{ row.item.variant_count }})</span>
                                            </button>
                                        </template>
                                        <!-- Single variant: Edit / Save button -->
                                        <template v-else>
                                            <button v-if="edit_record && edit_record.product_variant_id === row.item.product_variant_id"
                                                    class="figma-action-btn text-success"
                                                    @click="updateStock(row.item.product_variant_id)"
                                                    v-b-tooltip.hover :title="__('save')">
                                                <i class="fa fa-check"></i>
                                            </button>
                                            <button v-if="edit_record && edit_record.product_variant_id === row.item.product_variant_id"
                                                    class="figma-action-btn text-secondary"
                                                    @click="edit_record = null"
                                                    v-b-tooltip.hover :title="__('cancel')">
                                                <i class="fa fa-times"></i>
                                            </button>
                                            <button v-if="!edit_record || edit_record.product_variant_id !== row.item.product_variant_id"
                                                    class="figma-action-btn"
                                                    @click="edit_record = { ...row.item }"
                                                    v-b-tooltip.hover :title="__('edit')">
                                                <base-icon name="edit icon" hoverName="edit Hover" width="24" height="24" />
                                            </button>
                                        </template>
                                    </div>
                                </template>
                            </b-table>
                        </div>

                        <div class="figma-table-footer flex-wrap gap-3">
                            <div class="showing-results-text small">
                                {{ __('Showing Result') }} : <span class="showing-bold">{{ pageEnd }}</span> {{ __('of') || 'of' }} <span class="showing-bold">{{ totalRows }}</span>
                            </div>
                            <div class="d-flex align-items-center gap-3">
                                <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="right" class="figma-pagination mb-0" hide-goto-end-buttons hide-ellipsis prev-text="<" next-text=">"></b-pagination>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ==================== VIEW 2: PRODUCT VARIANTS DRILLDOWN VIEW ==================== -->
                <div class="figma-main-section-card" v-else>
                    <div class="card-body p-0">
                        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 figma-action-bar-row p-3">
                            <div class="d-flex align-items-center gap-2">
                                <button class="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1" @click="backToAllProducts">
                                    <i class="fa fa-arrow-left"></i>
                                    <span>{{ __('back') || 'Back to Products' }}</span>
                                </button>
                                <span class="fw-bold text-dark ms-2">{{ getTranslatedProductName(selectedProduct) }}</span>
                                <span class="badge bg-primary">{{ variantsList.length }} {{ __('variants') || 'Variants' }}</span>
                            </div>
                            <div class="d-flex gap-2">
                                <button class="btn btn-figma-filter d-flex align-items-center gap-2" @click="fetchProductVariants(selectedProduct.product_id)" v-b-tooltip.hover :title="__('refresh')">
                                    <i class="fa fa-refresh"></i>
                                    <span>{{ __('refresh') }}</span>
                                </button>
                            </div>
                        </div>

                        <div class="table-responsive mb-0">
                            <b-table :items="variantsList" :fields="variantFields" :busy="variantLoading"
                                :bordered="false" stacked="md" show-empty small class="mb-0">
                                <template #table-busy>
                                    <div class="text-center text-muted my-3 small">
                                        <b-spinner small class="align-middle me-2"></b-spinner> <strong>{{ __('loading') }}...</strong>
                                    </div>
                                </template>

                                <template #empty>
                                    <div class="text-center text-muted my-4 small">
                                        No variants found for this product
                                    </div>
                                </template>

                                <!-- Sr. No. -->
                                <template #cell(sr_no)="row">
                                    {{ row.index + 1 }}
                                </template>

                                <!-- Image -->
                                <template #cell(image)="row">
                                    <img :src="$storageUrl + (row.item.variant_image || row.item.image)"
                                         @click="openLightbox($storageUrl + (row.item.variant_image || row.item.image))"
                                         class="img-thumbnail" style="width: 45px; height: 45px; object-fit: contain; cursor: pointer;" />
                                </template>

                                <!-- Variant Details -->
                                <template #cell(variant_details)="row">
                                    <div class="d-flex flex-column text-start">
                                        <span class="fw-bold text-dark">{{ row.item.variant_name || row.item.measurement || '-' }} {{ row.item.stock_unit || '' }}</span>
                                        <div v-if="row.item.color_variant" class="d-flex align-items-center gap-1 mt-1 text-muted small">
                                            <span class="badge bg-light text-dark border">{{ formatColor(row.item.color_variant) }}</span>
                                        </div>
                                        <div v-if="row.item.variant_barcodes || row.item.barcode" class="text-muted" style="font-size: 11px;">
                                            Barcode: {{ row.item.variant_barcodes || row.item.barcode }}
                                        </div>
                                    </div>
                                </template>

                                <!-- Price -->
                                <template #cell(price)="row">
                                    <div class="fw-bold">{{ $currency }}{{ Number(row.item.discounted_price) > 0 ? row.item.discounted_price : row.item.price }}</div>
                                    <small v-if="Number(row.item.discounted_price) > 0" class="text-muted text-decoration-line-through">{{ $currency }}{{ row.item.price }}</small>
                                </template>

                                <!-- Stock / Available Quantity with Inline Edit -->
                                <template #cell(stock)="row">
                                    <div v-if="variantEditRecord && variantEditRecord.product_variant_id === row.item.product_variant_id" class="d-flex align-items-center justify-content-center gap-1">
                                        <b-form-input v-model="variantEditRecord.stock" type="number" min="0" size="sm" style="width: 85px;"
                                            @keyup.enter="updateVariantStockDirect(row.item.product_variant_id)"></b-form-input>
                                    </div>
                                    <div v-else class="fw-bold fs-6">
                                        {{ row.item.stock }}
                                    </div>
                                </template>

                                <!-- Status -->
                                <template #cell(pv_status)="row">
                                    <span v-if="Number(row.item.stock) > 0 || row.item.pv_status == 1" class="badge bg-success">{{ __('available') }}</span>
                                    <span v-else class="badge bg-danger">{{ __('sold_out') }}</span>
                                </template>

                                <!-- Actions -->
                                <template #cell(actions)="row">
                                    <div class="d-flex gap-2 justify-content-center">
                                        <button v-if="variantEditRecord && variantEditRecord.product_variant_id === row.item.product_variant_id"
                                                class="figma-action-btn text-success"
                                                @click="updateVariantStockDirect(row.item.product_variant_id)"
                                                :disabled="variantSaving"
                                                v-b-tooltip.hover :title="__('save')">
                                            <b-spinner small v-if="variantSaving"></b-spinner>
                                            <i class="fa fa-check" v-else></i>
                                        </button>
                                        <button v-if="variantEditRecord && variantEditRecord.product_variant_id === row.item.product_variant_id"
                                                class="figma-action-btn text-secondary"
                                                @click="variantEditRecord = null"
                                                v-b-tooltip.hover :title="__('cancel')">
                                            <i class="fa fa-times"></i>
                                        </button>
                                        <button v-if="!variantEditRecord || variantEditRecord.product_variant_id !== row.item.product_variant_id"
                                                class="figma-action-btn"
                                                @click="variantEditRecord = { ...row.item }"
                                                v-b-tooltip.hover :title="__('edit')">
                                            <base-icon name="edit icon" hoverName="edit Hover" width="24" height="24" />
                                        </button>
                                    </div>
                                </template>
                            </b-table>
                        </div>

                        <div class="figma-table-footer p-3 d-flex justify-content-between align-items-center">
                            <button class="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1" @click="backToAllProducts">
                                <i class="fa fa-arrow-left"></i>
                                <span>{{ __('back') || 'Back to Products' }}</span>
                            </button>
                            <span class="text-muted small">Total {{ variantsList.length }} variants</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { VuejsDatatableFactory } from 'vuejs-datatable';
import axios from "axios";
import Auth from "../../Auth";

export default {
    components: {
        VuejsDatatableFactory,
    },
    data() {
        return {
            fields: [
                { key: 'sr_no', label: 'Sr. No.', class: 'text-center', sortable: false },
                { key: 'image', label: this.$titleLabel('image'), class: 'text-center' },
                { key: 'name', label: this.$titleLabel('name'), class: 'text-start' },
                { key: 'type', label: this.$titleLabel('type'), class: 'text-center' },
                { key: 'stock', label: 'Available Quantity', class: 'text-center' },
                { key: 'pv_status', label: this.$titleLabel('status'), class: 'text-center' },
                { key: 'actions', label: this.$titleLabel('actions'), class: 'text-center' }
            ],
            variantFields: [
                { key: 'sr_no', label: 'Sr. No.', class: 'text-center' },
                { key: 'image', label: this.$titleLabel('image'), class: 'text-center' },
                { key: 'variant_details', label: 'Variant Details', class: 'text-start' },
                { key: 'price', label: this.$titleLabel('price') + ' (' + this.$currency + ')', class: 'text-center' },
                { key: 'stock', label: 'Available Quantity', class: 'text-center' },
                { key: 'pv_status', label: this.$titleLabel('status'), class: 'text-center' },
                { key: 'actions', label: this.$titleLabel('actions'), class: 'text-center' }
            ],
            totalRows: 0,
            currentPage: 1,
            perPage: 10,
            pageOptions: this.$pageOptions || [5, 10, 15, 20],
            sortBy: '',
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
            filterOn: ['name'],
            isLoading: false,
            products: [],
            edit_record: null,
            tableKey: 0,
            currentLanguageId: null,
            activeLanguages: [],
            // Drilldown Variant View state
            selectedProduct: null,
            variantsList: [],
            variantLoading: false,
            variantSaving: false,
            variantEditRecord: null
        }
    },
    computed: {
        isSellerRoute() {
            return this.$route.path.startsWith('/seller/');
        },
        pageStart() {
            if (this.totalRows === 0) return 0;
            return (this.currentPage - 1) * this.perPage + 1;
        },
        pageEnd() {
            return Math.min(this.currentPage * this.perPage, this.totalRows);
        }
    },
    created() {
        this.$eventBus.$on('recordSaved', (message) => {
            this.showMessage('success', message);
            if (this.selectedProduct) {
                this.fetchProductVariants(this.selectedProduct.product_id);
            } else {
                this.getRecords();
            }
        });
        this.fetchActiveLanguages().then(() => {
            this.getRecords();
        }).catch(() => {
            this.getRecords();
        });
    },
    watch: {
        currentPage() {
            if (!this.selectedProduct) {
                this.getRecords();
            }
        },
        perPage() {
            if (!this.selectedProduct) {
                this.getRecords();
            }
        }
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
        getTranslatedProductName(product) {
            if (!product) return '';
            if (!this.currentLanguageId || !product.translations) {
                return product.name != null ? String(product.name) : '';
            }

            const defaultLanguage = this.activeLanguages.find(lang => lang.is_default === 1);
            const defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;

            if (Array.isArray(product.translations)) {
                let translation = product.translations.find(
                    t => t.language_id === this.currentLanguageId
                );
                if (!translation && defaultLanguageId) {
                    translation = product.translations.find(
                        t => t.language_id === defaultLanguageId
                    );
                }
                if (translation && translation.name && translation.name.trim() !== '') {
                    return translation.name;
                }
            }

            return product.name != null ? String(product.name) : '';
        },
        getTranslatedVariant(product) {
            const measurement = (product && product.measurement != null) ? String(product.measurement) : '';
            if (!product) return measurement;

            let translatedUnit = null;
            if (this.currentLanguageId) {
                const defaultLanguage = this.activeLanguages.find(lang => lang.is_default === 1);
                const defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;

                if (product.unit_translations && Array.isArray(product.unit_translations)) {
                    let unitTranslation = product.unit_translations.find(
                        t => t.language_id === this.currentLanguageId
                    );
                    if (!unitTranslation && defaultLanguageId) {
                        unitTranslation = product.unit_translations.find(
                            t => t.language_id === defaultLanguageId
                        );
                    }
                    if (unitTranslation && unitTranslation.short_code && unitTranslation.short_code.trim() !== '') {
                        translatedUnit = unitTranslation.short_code;
                    }
                }
            }

            const unit = translatedUnit || product.stock_unit || product.short_code || '';
            if (measurement && unit) {
                if (measurement.includes(',')) {
                    return measurement
                        .split(',')
                        .map(item => {
                            const trimmed = item.trim();
                            if (trimmed && !trimmed.endsWith(unit)) {
                                return `${trimmed} ${unit}`;
                            }
                            return trimmed;
                        })
                        .join(', ');
                } else if (!measurement.endsWith(unit)) {
                    return `${measurement} ${unit}`;
                }
            }

            return measurement;
        },
        formatColor(color) {
            if (!color) return '-';
            return color.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        },
        openLightbox(image) {
            if (image) window.open(image, '_blank', 'noopener');
        },
        // Fetch products using standard products API grouped by product
        getRecords() {
            this.isLoading = true;
            let param = {
                page: this.currentPage,
                per_page: this.perPage,
                filter: this.filter,
                group_by_product: 1,
                seller: this.isSellerRoute && Auth.user && Auth.user.seller ? Auth.user.seller.id : ''
            };
            axios.get(this.$apiUrl + '/products', {
                params: param
            }).then((response) => {
                this.isLoading = false;
                if (response.data && response.data.data) {
                    this.products = response.data.data.products || [];
                    this.totalRows = response.data.total || 0;
                    this.tableKey += 1;
                } else {
                    this.products = [];
                    this.totalRows = 0;
                }
            }).catch((err) => {
                this.isLoading = false;
                this.products = [];
                this.totalRows = 0;
                this.showMessage('error', err.response && err.response.data && err.response.data.message ? err.response.data.message : __('something_went_wrong'));
            });
        },
        updateStock(product_variant_id) {
            if (this.edit_record.stock < 0) {
                this.showMessage('error', __('stock_must_be_positive') || 'Stock must be positive');
                return;
            }
            this.isLoading = true;
            axios.post(this.$apiUrl + '/products/update_variant_stock', {
                id: product_variant_id,
                stock: this.edit_record.stock
            }).then((response) => {
                this.isLoading = false;
                if (response.data.status === 1) {
                    this.showMessage('success', response.data.message);
                    this.getRecords();
                } else {
                    this.showMessage('error', response.data.message);
                }
                this.edit_record = null;
            }).catch(() => {
                this.isLoading = false;
                this.showMessage('error', __('update_failed') || 'Update failed');
            });
        },
        // ==================== DRILLDOWN VARIANTS VIEW METHODS ====================
        viewProductVariants(product) {
            this.selectedProduct = product;
            this.variantEditRecord = null;
            this.fetchProductVariants(product.product_id);
        },
        backToAllProducts() {
            this.selectedProduct = null;
            this.variantsList = [];
            this.variantEditRecord = null;
            this.getRecords();
        },
        fetchProductVariants(productId) {
            this.variantLoading = true;
            let param = {
                product_id: productId,
                seller: this.isSellerRoute && Auth.user && Auth.user.seller ? Auth.user.seller.id : ''
            };
            axios.get(this.$apiUrl + '/products', {
                params: param
            }).then(response => {
                this.variantLoading = false;
                if (response.data && response.data.data) {
                    this.variantsList = response.data.data.products || [];
                } else {
                    this.variantsList = [];
                }
            }).catch(() => {
                this.variantLoading = false;
                this.variantsList = [];
            });
        },
        updateVariantStockDirect(productVariantId) {
            if (!this.variantEditRecord || this.variantEditRecord.stock < 0) {
                this.showMessage('error', __('stock_must_be_positive') || 'Stock must be positive');
                return;
            }
            this.variantSaving = true;
            axios.post(this.$apiUrl + '/products/update_variant_stock', {
                id: productVariantId,
                stock: this.variantEditRecord.stock
            }).then(response => {
                this.variantSaving = false;
                if (response.data.status === 1) {
                    this.showMessage('success', response.data.message);
                    // Update variant in list locally
                    const found = this.variantsList.find(v => v.product_variant_id === productVariantId);
                    if (found) {
                        found.stock = this.variantEditRecord.stock;
                        found.pv_status = found.stock > 0 ? 1 : 0;
                    }
                    this.variantEditRecord = null;
                } else {
                    this.showMessage('error', response.data.message);
                }
            }).catch(() => {
                this.variantSaving = false;
                this.showMessage('error', __('update_failed') || 'Update failed');
            });
        }
    }
};
</script>
