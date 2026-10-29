<template>
    <div>
        <div class="page-heading">
            <div class="page-heading d-flex justify-content-between align-items-center mb-4">
                <h3 class="modern-page-title mb-0">Home Popup</h3>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <router-link to="/dashboard" class="text-muted">{{ __('dashboard') }}</router-link>
                        </li>
                        <li class="breadcrumb-item active text-primary" aria-current="page">Home Popup</li>
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
                                        :placeholder="__('search') || 'Search popup...'" @input="getPopups">
                                </div>
                            </div>
                            <div class="d-flex gap-2">
                                <button class="btn btn-figma-filter d-flex align-items-center gap-2"
                                    @click="create_new = true">
                                    <i class="fa fa-plus"></i>
                                    <span>Add New Popup</span>
                                </button>
                                <button class="btn btn-figma-filter d-flex align-items-center gap-2"
                                    @click="getPopups()" v-b-tooltip.hover :title="__('refresh')">
                                    <i class="fa fa-refresh"></i>
                                    <span>{{ __('refresh') }}</span>
                                </button>
                            </div>
                        </div>

                        <div class="table-responsive">
                            <b-table :items="popups" :fields="fields" :current-page="currentPage"
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
                                        <i class="fa fa-window-maximize fa-3x text-muted mb-3 d-block"></i>
                                        <h5 class="text-muted">No Home Popup Found</h5>
                                        <p class="text-secondary small">Click "Add New Popup" to create an entry popup for users on home load.</p>
                                    </div>
                                </template>

                                <template #cell(image)="row">
                                    <div style="width: 100px; height: 70px; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; background: #f8fafc; display: flex; align-items: center; justify-content: center;">
                                        <img :src="row.item.image_url" style="width: 100%; height: 100%; object-fit: contain;" alt="Popup Image" />
                                    </div>
                                </template>

                                <template #cell(title)="row">
                                    <div>
                                        <strong class="d-block text-dark">{{ row.item.title || '(No title)' }}</strong>
                                        <small class="text-muted d-block text-truncate" style="max-width: 250px;">{{ row.item.description || '' }}</small>
                                    </div>
                                </template>

                                <template #cell(link)="row">
                                    <div v-if="row.item.link">
                                        <a :href="row.item.link" target="_blank" class="badge badge-light-primary text-truncate" style="max-width: 200px; display: inline-block;">
                                            <i class="fa fa-external-link mr-1"></i> {{ row.item.link }}
                                        </a>
                                    </div>
                                    <span v-else class="text-muted small">-</span>
                                </template>

                                <template #cell(status)="row">
                                    <span class="badge" :class="row.item.status === 1 ? 'badge-success' : 'badge-secondary'" style="cursor: pointer;" @click="updateStatus(row.item)">
                                        {{ row.item.status === 1 ? __('active') : __('deactive') }}
                                    </span>
                                </template>

                                <template #cell(actions)="row">
                                    <div class="d-flex align-items-center gap-2">
                                        <button class="btn btn-sm btn-outline-primary" @click="editRecord(row.item)">
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button class="btn btn-sm btn-outline-danger" @click="deleteRecord(row.item.id)">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </template>
                            </b-table>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Add / Edit Modal -->
        <app-edit-record
            v-if="create_new || edit_record"
            :record="edit_record"
            @modalClose="create_new = false; edit_record = null;"
        ></app-edit-record>
    </div>
</template>

<script>
import axios from 'axios';
import Edit from './Edit.vue';

export default {
    name: "HomePopup",
    components: {
        'app-edit-record': Edit
    },
    data: function () {
        return {
            fields: [
                { key: 'id', label: 'ID', sortable: true, class: 'text-center' },
                { key: 'image', label: 'Image', class: 'text-center' },
                { key: 'title', label: 'Title / Description', sortable: true },
                { key: 'link', label: 'Link', sortable: true },
                { key: 'status', label: 'Status', sortable: true, class: 'text-center' },
                { key: 'actions', label: 'Actions', class: 'text-center' }
            ],
            popups: [],
            isLoading: false,
            filter: '',
            filterOn: [],
            sortBy: 'id',
            sortDesc: true,
            sortDirection: 'desc',
            currentPage: 1,
            perPage: 15,
            create_new: false,
            edit_record: null,
        };
    },
    methods: {
        getPopups() {
            this.isLoading = true;
            let url = this.$apiUrl + '/home_popup/list';
            axios.get(url, { params: { filter: this.filter } })
                .then(res => {
                    this.isLoading = false;
                    if (res.data.status === 1) {
                        this.popups = res.data.data || [];
                    } else {
                        this.popups = [];
                    }
                })
                .catch(() => {
                    this.isLoading = false;
                    this.popups = [];
                });
        },
        updateStatus(item) {
            let nextStatus = item.status === 1 ? 0 : 1;
            axios.post(this.$apiUrl + '/home_popup/update_status', {
                id: item.id,
                status: nextStatus
            }).then(res => {
                if (res.data.status === 1) {
                    this.showMessage('success', res.data.message);
                    item.status = nextStatus;
                } else {
                    this.showError(res.data.message);
                }
            }).catch(err => {
                this.showError(err.message || 'Failed to update status');
            });
        },
        editRecord(item) {
            this.edit_record = item;
            this.create_new = false;
        },
        deleteRecord(id) {
            this.$swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this home popup!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post(this.$apiUrl + '/home_popup/delete', { id: id })
                        .then(res => {
                            if (res.data.status === 1) {
                                this.showMessage('success', res.data.message);
                                this.getPopups();
                            } else {
                                this.showError(res.data.message);
                            }
                        })
                        .catch(err => {
                            this.showError(err.message || 'Failed to delete');
                        });
                }
            });
        }
    },
    mounted() {
        this.getPopups();
        this.$eventBus.$on('homePopupSaved', (msg) => {
            this.showMessage('success', msg);
            this.getPopups();
        });
    },
    beforeDestroy() {
        this.$eventBus.$off('homePopupSaved');
    }
};
</script>
