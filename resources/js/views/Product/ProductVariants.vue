<template>
    <div>
        <div class="page-heading">
            <div class="page-title mb-2">
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <h3 class="modern-page-title mb-0">
                        Product Variants<span v-if="productName"> - {{ productName }}</span>
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item">
                                <router-link :to="manageProductsPath" class="text-muted">Manage Products</router-link>
                            </li>
                            <li class="breadcrumb-item active text-primary" aria-current="page">Variants</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section class="section">
                <div class="figma-main-section-card">
                    <div class="card-body p-0">
                        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 figma-action-bar-row p-3">
                            <div class="figma-search-container flex-grow-1" style="max-width: 520px; min-width: 250px;">
                                <i class="fa fa-search text-muted"></i>
                                <input v-model="filter" type="text" class="figma-search-input"
                                    placeholder="Search variants" @input="searchVariants">
                            </div>
                            <div class="d-flex gap-2">
                                <button class="btn btn-figma-filter d-flex align-items-center gap-2" @click="getRecords">
                                    <i class="fa fa-refresh"></i>
                                    <span>{{ __('refresh') }}</span>
                                </button>
                                <router-link :to="manageProductsPath"
                                    class="btn btn-figma-columns d-flex align-items-center gap-2">
                                    <i class="fa fa-arrow-left"></i>
                                    <span>Back</span>
                                </router-link>
                            </div>
                        </div>

                        <div class="table-responsive mb-0">
                            <b-table :items="variants" :fields="fields" :busy="isLoading" :bordered="false"
                                stacked="md" show-empty small class="mb-0">
                                <template #table-busy>
                                    <div class="text-center text-black my-2">
                                        <b-spinner class="align-middle"></b-spinner>
                                        <strong>{{ __('loading') }}...</strong>
                                    </div>
                                </template>

                                <template #cell(sr_no)="row">
                                    {{ pageStart + row.index }}
                                </template>

                                <template #cell(barcode)="row">
                                    {{ row.item.variant_barcodes || row.item.barcode || '-' }}
                                </template>

                                <template #cell(image)="row">
                                    <img :src="$storageUrl + (row.item.variant_image || row.item.image)"
                                        @click="openLightbox($storageUrl + (row.item.variant_image || row.item.image))"
                                        alt="Variant image" height="50" />
                                </template>

                                <template #cell(color_variant)="row">
                                    <div v-if="row.item.color_variant" class="d-flex align-items-center gap-1">
                                        <span v-if="getVariantColorHex(row.item.color_variant)" 
                                              class="d-inline-block rounded-circle border shadow-sm" 
                                              :style="{ width: '14px', height: '14px', minWidth: '14px', backgroundColor: getVariantColorHex(row.item.color_variant) }"></span>
                                        <span>{{ formatColor(row.item.color_variant) }}</span>
                                    </div>
                                    <span v-else>-</span>
                                </template>

                                <template #cell(measurement)="row">
                                    {{ row.item.measurement }} {{ row.item.stock_unit || '' }}
                                </template>

                                <template #cell(discounted_price)="row">
                                    {{ Number(row.item.discounted_price) > 0 ? row.item.discounted_price : row.item.price }}
                                </template>

                                <template #cell(pv_status)="row">
                                    <span class="badge bg-success" v-if="Number(row.item.pv_status) === 1">{{ __('available') }}</span>
                                    <span class="badge bg-danger" v-else>{{ __('sold_out') }}</span>
                                </template>

                                <template #cell(actions)="row">
                                    <div class="d-flex gap-2">
                                        <router-link :to="editProductRoute(row.item.product_id)" class="figma-action-btn"
                                            v-if="$can('product_update')" v-b-tooltip.hover :title="__('edit')">
                                            <base-icon name="edit icon" hoverName="edit Hover" width="24" height="24" />
                                        </router-link>
                                        <button class="figma-action-btn" @click="deleteVariant(row.item.product_variant_id)"
                                            v-if="$can('product_delete')" v-b-tooltip.hover :title="__('delete')">
                                            <base-icon name="Type=Default" hoverName="Type=Hover" width="24" height="24" />
                                        </button>
                                    </div>
                                </template>
                            </b-table>
                        </div>

                        <div class="figma-table-footer flex-wrap gap-3">
                            <div class="showing-results-text small">
                                {{ __('Showing Result') }} : <span class="showing-bold">{{ pageEnd }}</span>
                                {{ __('of') || 'of' }} <span class="showing-bold">{{ totalRows }}</span>
                            </div>
                            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage"
                                align="right" class="figma-pagination mb-0" hide-goto-end-buttons hide-ellipsis
                                prev-text="<" next-text=">"></b-pagination>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Auth from '../../Auth.js';

export default {
    data() {
        return {
            fields: [
                { key: 'sr_no', label: 'Sr. No.', class: 'text-center' },
                { key: 'variant_name', label: 'Variant Name', class: 'text-center', formatter: value => value || '-' },
                { key: 'barcode', label: 'Barcode', class: 'text-center' },
                { key: 'image', label: this.$titleLabel('image'), class: 'text-center' },
                { key: 'color_variant', label: 'Colour', class: 'text-center' },
                { key: 'measurement', label: this.$titleLabel('measurement'), class: 'text-center' },
                { key: 'price', label: this.$titleLabel('price') + '(' + this.$currency + ')', class: 'text-center' },
                { key: 'discounted_price', label: 'Sale Price(' + this.$currency + ')', class: 'text-center' },
                { key: 'stock', label: this.$titleLabel('stock'), class: 'text-center' },
                { key: 'pv_status', label: 'Status', class: 'text-center' },
                { key: 'actions', label: this.$titleLabel('actions') }
            ],
            variants: [],
            productName: '',
            filter: '',
            currentPage: 1,
            perPage: this.$perPage,
            totalRows: 0,
            isLoading: false,
            searchTimer: null
        };
    },
    computed: {
        productId() {
            return Number(this.$route.params.product_id);
        },
        isSellerRoute() {
            return this.$route.path.startsWith('/seller/');
        },
        manageProductsPath() {
            return this.isSellerRoute ? '/seller/manage_products' : '/manage_products';
        },
        pageStart() {
            return this.totalRows === 0 ? 0 : ((this.currentPage - 1) * this.perPage) + 1;
        },
        pageEnd() {
            return Math.min(this.currentPage * this.perPage, this.totalRows);
        }
    },
    created() {
        if (!this.$can('product_list')) {
            this.showError('You do not have permission to view this page.');
            this.$router.replace({ path: '/unauthorized' });
            return;
        }
        this.getRecords();
    },
    watch: {
        currentPage() {
            this.getRecords();
        }
    },
    beforeDestroy() {
        if (this.searchTimer) clearTimeout(this.searchTimer);
    },
    methods: {
        getRecords() {
            this.isLoading = true;
            axios.get(this.$apiUrl + '/products', {
                params: {
                    product_id: this.productId,
                    seller: this.isSellerRoute && Auth.user.seller ? Auth.user.seller.id : '',
                    page: this.currentPage,
                    per_page: this.perPage,
                    filter: this.filter
                }
            }).then(response => {
                this.variants = response.data.data.products || [];
                this.totalRows = response.data.total || 0;
                if (this.variants.length > 0) this.productName = this.variants[0].name;
            }).finally(() => {
                this.isLoading = false;
            });
        },
        searchVariants() {
            if (this.searchTimer) clearTimeout(this.searchTimer);
            this.searchTimer = setTimeout(() => {
                if (this.currentPage !== 1) this.currentPage = 1;
                else this.getRecords();
            }, 300);
        },
        openLightbox(image) {
            window.open(image, '_blank', 'noopener');
        },
        getVariantColorHex(color) {
            if (!color) return null;
            const match = String(color).match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b/);
            if (match) return match[0].toUpperCase();
            const presets = {
                'black': '#000000', 'white': '#FFFFFF', 'grey': '#808080', 'red': '#FF0000',
                'crimson': '#DC143C', 'maroon': '#800000', 'pink': '#FFC0CB', 'orange': '#FFA500',
                'yellow': '#FFFF00', 'blue': '#0000FF', 'navy blue': '#000080', 'green': '#008000',
                'dark green': '#006400', 'olive green': '#556B2F', 'purple': '#800080',
                'brown': '#8B4513', 'multi color': '#4A90E2'
            };
            const lower = String(color).toLowerCase().replace(/_/g, ' ').trim();
            return presets[lower] || null;
        },
        formatColor(color) {
            if (!color) return '-';
            return color.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        },
        editProductRoute(productId) {
            return this.isSellerRoute
                ? { name: 'SellerEditProduct', params: { id: productId } }
                : { name: 'EditProduct', params: { id: productId } };
        },
        deleteVariant(id) {
            this.$swal.fire({
                title: __('are_you_sure'),
                text: __('you_want_be_able_to_revert_this'),
                confirmButtonText: __('yes_sure'),
                cancelButtonText: __('cancel'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#37a279',
                cancelButtonColor: '#d33'
            }).then(result => {
                if (!result.value) return;
                this.isLoading = true;
                axios.post(this.$apiUrl + '/products/delete', { id }).then(response => {
                    if (response.data.status === 1) {
                        this.showMessage('success', response.data.message);
                        if (this.totalRows <= 1) this.$router.push(this.manageProductsPath);
                        else this.getRecords();
                    } else {
                        this.showError(response.data.message);
                    }
                }).finally(() => {
                    this.isLoading = false;
                });
            });
        }
    }
};
</script>
