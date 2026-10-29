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
                    <label>Popup Title <span class="text-muted">(Optional)</span></label>
                    <input type="text" class="form-control" v-model="title" placeholder="e.g. Festival Special Offer">
                </div>

                <div class="form-group col-12">
                    <label>Popup Description <span class="text-muted">(Optional)</span></label>
                    <textarea class="form-control" v-model="description" rows="2" placeholder="e.g. Get flat 20% off on all items!"></textarea>
                </div>

                <div class="form-group col-12">
                    <label>Popup Redirect Link <span class="text-muted">(Optional)</span></label>
                    <input type="text" class="form-control" v-model="link" placeholder="e.g. /products or https://example.com">
                    <small class="text-muted">When user taps the popup image, they will be redirected to this link.</small>
                </div>

                <div class="form-group col-12">
                    <label>Popup Banner Image <i class="text-danger" v-if="!id">*</i></label>
                    <div class="alert alert-info py-2 px-3 mb-2" style="font-size: 13px;">
                        <i class="fa fa-info-circle mr-1"></i>
                        Recommended image dimension: <strong>800 × 800 or 1000 × 700 pixels</strong> (JPG, PNG, WEBP, GIF, Max: 10MB)
                    </div>

                    <input type="file" name="popup_image" accept="image/*" v-on:change="handleFileUpload" ref="file_image" class="file-input">
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
                            <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 6px; background: #fff; max-width: 320px;">
                                <img :src="image_url" style="width: 100%; height: auto; max-height: 280px; object-fit: contain; border-radius: 6px;" alt="Popup Preview"/>
                            </div>
                        </div>
                    </div>
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
                    <small class="text-muted d-block mt-1">Only active popups will be shown to users when website/app loads.</small>
                </div>
            </div>
            <button ref="dummy_submit" style="display:none;"></button>
        </form>
    </b-modal>
</template>

<script>
import axios from 'axios';

export default {
    name: "EditHomePopup",
    props: ['record'],
    data: function () {
        return {
            isLoading: false,
            id: this.record ? this.record.id : null,
            title: this.record ? this.record.title : '',
            description: this.record ? this.record.description : '',
            link: this.record ? this.record.link : '',
            image: null,
            image_url: this.record ? this.record.image_url : null,
            status: this.record ? this.record.status : 1,
        };
    },
    computed: {
        modal_title() {
            return this.id ? 'Edit Home Popup' : 'Add New Home Popup';
        }
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
            this.$refs.file_image.files = event.dataTransfer.files;
            this.handleFileUpload();
        },
        handleFileUpload() {
            const file = this.$refs.file_image.files[0];
            if (file) {
                this.image = file;
                this.image_url = URL.createObjectURL(file);
            }
        },
        saveRecord: function () {
            let vm = this;
            this.isLoading = true;

            let formData = new FormData();
            if (this.id) {
                formData.append('id', this.id);
            }
            formData.append('title', this.title || '');
            formData.append('description', this.description || '');
            formData.append('link', this.link || '');
            formData.append('status', this.status);

            if (this.image) {
                formData.append('image', this.image);
            }

            let url = this.$apiUrl + '/home_popup/save';
            if (this.id) {
                url = this.$apiUrl + '/home_popup/update';
            }

            axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                let data = res.data;
                if (data.status === 1) {
                    this.$eventBus.$emit('homePopupSaved', data.message);
                    this.hideModal();
                } else {
                    vm.showError(data.message);
                    vm.isLoading = false;
                }
            }).catch(error => {
                vm.isLoading = false;
                if (error.request && error.request.statusText) {
                    this.showError(error.request.statusText);
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
};
</script>

<style scoped>
.file-input {
    display: none;
}
.file-input-div {
    border: 2px dashed #cbd5e1;
    border-radius: 8px;
    padding: 24px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s;
}
.file-input-div:hover {
    border-color: #3b82f6;
}
</style>
