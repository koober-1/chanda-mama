<template>
    <div>
        <div class="page-heading">
            <div class="page-heading d-flex justify-content-between align-items-center mb-4">
                <h3 class="modern-page-title mb-0">Home Flyers</h3>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <router-link to="/dashboard" class="text-muted">{{ __('dashboard') }}</router-link>
                        </li>
                        <li class="breadcrumb-item active text-primary" aria-current="page">Home Flyers</li>
                    </ol>
                </nav>
            </div>

            <section class="section">
                <div class="figma-main-section-card">
                    <div class="card-body p-0">
                        <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 figma-action-bar-row">
                            <div class="flex-grow-1">
                                <div class="figma-search-container">
                                    <i class="fa fa-search text-muted"></i>
                                    <input v-model="filter" type="text" class="figma-search-input"
                                        :placeholder="__('search') || 'Search flyers...'" @input="getFlyers">
                                </div>
                            </div>
                            <div class="d-flex gap-2">
                                <button class="btn btn-figma-filter d-flex align-items-center gap-2"
                                    @click="create_new = true">
                                    <i class="fa fa-plus"></i>
                                    <span>Add New Flyer</span>
                                </button>
                                <button class="btn btn-figma-filter d-flex align-items-center gap-2"
                                    @click="getFlyers()" v-b-tooltip.hover :title="__('refresh')">
                                    <i class="fa fa-refresh"></i>
                                    <span>{{ __('refresh') }}</span>
                                </button>
                            </div>
                        </div>

                        <div class="table-responsive">
                            <b-table :items="flyers" :fields="fields" :current-page="currentPage"
                                :per-page="perPage" :filter="filter" :filter-included-fields="filterOn"
                                :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                                :sort-direction="sortDirection" :bordered="false" :busy="isLoading"
                                stacked="md" show-empty :tbody-tr-class="() => 'figma-tr align-middle'"
                                small class="figma-order-table mb-0">
                                
                                <template #table-busy>
                                    <div class="text-center text-black my-4">
                                        <b-spinner class="align-middle"></b-spinner>
                                        <strong class="ml-2">{{ __('loading') }}...</strong>
                                    </div>
                                </template>

                                <template #empty>
                                    <div class="text-center py-5">
                                        <i class="fa fa-picture-o fa-3x text-muted mb-3 d-block"></i>
                                        <h5 class="text-muted">No Home Flyers Found</h5>
                                        <p class="text-secondary small">Click "Add New Flyer" to upload 1200 × 650 flyer images for the application.</p>
                                    </div>
                                </template>

                                <template #cell(id)="row">
                                    <span class="font-weight-bold text-dark">#{{ row.item.id }}</span>
                                </template>

                                <template #cell(image)="row">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <a :href="row.item.image_url" target="_blank" v-b-tooltip.hover title="Click to view full size" class="d-inline-block">
                                            <img :src="row.item.image_url"
                                                 style="height: 55px; width: 100px; object-fit: cover; border-radius: 6px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.08);"
                                                 alt="Flyer">
                                        </a>
                                    </div>
                                </template>

                                <template #cell(name)="row">
                                    <span>{{ row.item.name ? row.item.name : '-' }}</span>
                                </template>

                                <template #cell(sort_order)="row">
                                    <span class="badge bg-light text-dark border px-2 py-1 font-weight-bold" style="font-size: 13px;">
                                        {{ row.item.sort_order }}
                                    </span>
                                </template>

                                <template #cell(status)="row">
                                    <button class="btn btn-sm"
                                        :class="row.item.status === 1 ? 'btn-outline-success' : 'btn-outline-danger'"
                                        @click="toggleStatus(row.item)"
                                        v-b-tooltip.hover :title="'Click to toggle active/inactive'"
                                        style="border-radius: 20px; font-size: 12px; padding: 3px 12px; min-width: 85px;">
                                        <i class="fa mr-1" :class="row.item.status === 1 ? 'fa-check-circle' : 'fa-times-circle'"></i>
                                        {{ row.item.status === 1 ? __('active') : __('deactive') }}
                                    </button>
                                </template>

                                <template #cell(actions)="row">
                                    <div class="d-flex gap-2 justify-content-center">
                                        <button class="figma-action-btn" @click="edit_record = row.item"
                                            v-b-tooltip.hover :title="__('edit')">
                                            <base-icon name="edit icon" hoverName="edit Hover" width="24" height="24" />
                                        </button>
                                        <button class="figma-action-btn figma-delete-btn"
                                            @click="deleteFlyer(row.index, row.item.id)"
                                            v-b-tooltip.hover :title="__('delete')">
                                            <base-icon name="Type=Default" hoverName="Type=Hover" width="24" height="24" />
                                        </button>
                                    </div>
                                </template>
                            </b-table>
                        </div>
                    </div>

                    <div class="figma-table-footer" v-if="totalRows > 0">
                        <div class="showing-results-text">
                            {{ __('Showing Result') }} : <span class="showing-bold">{{ pageEnd }}</span>
                            {{ __('of') || 'of' }} <span class="showing-bold">{{ totalRows }}</span>
                        </div>
                        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage"
                            align="right" class="figma-pagination mb-0"></b-pagination>
                    </div>
                </div>
            </section>
        </div>

        <app-edit-record v-if="create_new || edit_record" :record="edit_record" @modalClose="hideModal()"></app-edit-record>
    </div>
</template>

<script>
import EditRecord from './Edit.vue';
import axios from "axios";

export default {
    components: {
        'app-edit-record': EditRecord,
    },
    data: function () {
        return {
            create_new: false,
            edit_record: null,
            fields: [
                { key: 'id', label: 'ID', sortable: true, class: 'text-center' },
                { key: 'image', label: 'Flyer Image (1200×650)', class: 'text-center' },
                { key: 'name', label: 'Title', sortable: true },
                { key: 'sort_order', label: 'Display Order', sortable: true, class: 'text-center' },
                { key: 'status', label: __('status'), class: 'text-center' },
                { key: 'actions', label: __('actions'), class: 'text-center' }
            ],
            flyers: [],
            totalRows: 0,
            currentPage: 1,
            perPage: this.$perPage || 10,
            sortBy: 'sort_order',
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
            filterOn: [],
            isLoading: false,
        };
    },
    computed: {
        pageEnd() {
            return Math.min(this.currentPage * this.perPage, this.totalRows);
        },
    },
    created() {
        this._flyerSavedHandler = (message) => {
            this.showMessage('success', message);
            this.getFlyers();
        };
        this.$eventBus.$on('FlyerSaved', this._flyerSavedHandler);
        this.getFlyers();
    },
    beforeDestroy() {
        this.$eventBus.$off('FlyerSaved', this._flyerSavedHandler);
    },
    methods: {
        getFlyers() {
            this.isLoading = true;
            let url = this.$apiUrl + '/home_flyers/list';
            if (this.filter) {
                url += '?filter=' + encodeURIComponent(this.filter);
            }
            axios.get(url)
                .then((response) => {
                    this.isLoading = false;
                    let resData = response.data;
                    this.flyers = resData.data || [];
                    this.totalRows = this.flyers.length;
                })
                .catch(() => {
                    this.isLoading = false;
                    this.flyers = [];
                    this.totalRows = 0;
                });
        },
        toggleStatus(item) {
            let newStatus = item.status === 1 ? 0 : 1;
            axios.post(this.$apiUrl + '/home_flyers/update_status', {
                id: item.id,
                status: newStatus
            }).then((res) => {
                if (res.data.status === 1) {
                    item.status = newStatus;
                    this.showMessage('success', res.data.message);
                } else {
                    this.showError(res.data.message);
                }
            }).catch(() => {
                this.showError(__('something_went_wrong'));
            });
        },
        deleteFlyer(index, id) {
            this.$swal.fire({
                title: __('are_you_sure'),
                text: __('you_want_be_able_to_revert_this'),
                confirmButtonText: __('yes_sure'),
                cancelButtonText: __('cancel'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#37a279',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if (result.value) {
                    this.isLoading = true;
                    axios.post(this.$apiUrl + '/home_flyers/delete', { id: id })
                        .then((res) => {
                            this.isLoading = false;
                            if (res.data.status === 1) {
                                this.flyers.splice(index, 1);
                                this.totalRows = this.flyers.length;
                                this.showMessage('success', res.data.message);
                            } else {
                                this.showError(res.data.message);
                            }
                        })
                        .catch(() => {
                            this.isLoading = false;
                            this.showError(__('something_went_wrong'));
                        });
                }
            });
        },
        hideModal() {
            this.create_new = false;
            this.edit_record = null;
        }
    }
};
</script>
