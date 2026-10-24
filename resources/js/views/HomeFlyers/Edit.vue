<template>
    <b-modal ref="my-modal" :title="modal_title" @hidden="$emit('modalClose')" scrollable no-close-on-backdrop no-fade static>
        <div slot="modal-footer">
            <b-button variant="primary" @click="$refs['dummy_submit'].click()" :disabled="isLoading">
                {{ __('save') }}
                <b-spinner v-if="isLoading" small label="Spinning"></b-spinner>
            </b-button>
            <b-button variant="secondary" @click="hideModal">{{ __('cancel') }}</b-button>
        </div>
        <form ref="my-form" @submit.prevent="saveRecord">
            <div class="row">
                <div class="form-group col-12">
                    <label>Flyer Title <span class="text-muted">(Optional)</span></label>
                    <input type="text" class="form-control" v-model="name" placeholder="e.g. Festival Special Offer Flyer">
                </div>

                <div class="form-group col-12">
                    <label>Flyer Image <i class="text-danger" v-if="!id">*</i></label>
                    <div class="alert alert-info py-2 px-3 mb-2" style="font-size: 13px;">
                        <i class="fa fa-info-circle mr-1"></i>
                        Recommended image dimension: <strong>1200 × 650 pixels</strong> (JPG, PNG, WEBP, GIF, Max: 10MB)
                    </div>

                    <input type="file" name="flyer_image" accept="image/*" v-on:change="handleFileUpload" ref="file_image" class="file-input">
                    <div class="file-input-div bg-gray-100" @click="$refs.file_image.click()" @drop="dropFile" @dragover="$dragoverFile" @dragleave="$dragleaveFile">
                        <template v-if="image && image.name !== ''">
                            <label class="mb-0 text-success"><i class="fa fa-check-circle mr-1"></i> {{ image.name }}</label>
                        </template>
                        <template v-else>
                            <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                            <label>{{ __('drop_files_here_or_click_to_upload') }}</label>
                        </template>
                    </div>

                    <div class="row mt-2" v-if="image_url">
                        <div class="col-12">
                            <label class="d-block text-muted small mb-1">Preview:</label>
                            <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 6px; background: #fff; max-width: 420px;">
                                <img :src="image_url" style="width: 100%; height: auto; aspect-ratio: 1200 / 650; object-fit: cover; border-radius: 6px;" alt="Flyer Preview"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group col-12">
                    <label>Display / Sort Order <i class="text-danger">*</i></label>
                    <input type="number" min="0" step="1" class="form-control" v-model="sort_order" placeholder="0" required>
                    <small class="text-muted">Flyers will appear on the application in ascending order (0, 1, 2, ...).</small>
                </div>

                <div class="form-group col-12">
                    <label class="d-block">{{ __('status') }} <i class="text-danger">*</i></label>
                    <b-form-radio-group
                        v-model="status"
                        :options="[
                            { text: __('active'), 'value': 1 },
                            { text: __('deactive'), 'value': 0 },
                        ]"
                        buttons
                        button-variant="outline-primary"
                        required
                    ></b-form-radio-group>
                </div>
            </div>
            <button ref="dummy_submit" style="display:none;"></button>
        </form>
    </b-modal>
</template>

<script>
import axios from 'axios';

export default {
    props: ['record'],
    data: function () {
        return {
            isLoading: false,
            id: this.record ? this.record.id : null,
            name: this.record ? (this.record.name || '') : '',
            image: null,
            image_url: this.record ? this.record.image_url : null,
            sort_order: this.record ? (this.record.sort_order ?? 0) : 0,
            status: this.record ? (this.record.status ?? 1) : 1,
        };
    },
    computed: {
        modal_title: function () {
            return (this.id ? __('edit') : __('add')) + ' Home Flyer';
        },
    },
    methods: {
        showModal() {
            this.$refs['my-modal'].show();
        },
        hideModal() {
            this.$refs['my-modal'].hide();
        },
        dropFile(event) {
            event.preventDefault();
            if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
                this.$refs.file_image.files = event.dataTransfer.files;
                this.handleFileUpload();
            }
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        handleFileUpload() {
            if (this.$refs.file_image.files && this.$refs.file_image.files.length > 0) {
                this.image = this.$refs.file_image.files[0];
                this.image_url = URL.createObjectURL(this.image);
            }
        },
        saveRecord: function () {
            let vm = this;
            if (!this.id && !this.image) {
                this.showError('Please select a flyer image.');
                return;
            }

            this.isLoading = true;
            let formData = new FormData();
            if (this.id) {
                formData.append('id', this.id);
            }
            formData.append('name', this.name || '');
            if (this.image) {
                formData.append('image', this.image);
            }
            formData.append('sort_order', this.sort_order !== null && this.sort_order !== '' ? this.sort_order : 0);
            formData.append('status', this.status);

            let url = this.$apiUrl + '/home_flyers/save';
            if (this.id) {
                url = this.$apiUrl + '/home_flyers/update';
            }

            axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                let data = res.data;
                if (data.status === 1) {
                    this.$eventBus.$emit('FlyerSaved', data.message);
                    this.hideModal();
                } else {
                    vm.showError(data.message);
                    vm.isLoading = false;
                }
            }).catch(error => {
                vm.isLoading = false;
                if (error.response && error.response.data && error.response.data.message) {
                    this.showError(error.response.data.message);
                } else if (error.message) {
                    this.showError(error.message);
                } else {
                    this.showError(__('something_went_wrong'));
                }
            });
        }
    },
    mounted() {
        this.showModal();
    }
}
</script>

<style scoped>
.file-input-div {
    border: 2px dashed #cbd5e1;
    border-radius: 8px;
    padding: 24px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
}
.file-input-div:hover {
    border-color: #3b82f6;
    background-color: #f1f5f9;
}
</style>
