import re

with open('d:/koober/chanda-mama/resources/js/views/Product/EditProduct.vue.backup', 'r', encoding='utf-8') as f:
    lines = f.readlines()

def get_lines(start, end):
    return "".join(lines[start-1:end])

# Extract parts
header_and_tabs = get_lines(1, 392) + "\n</div></div>\n" # Close the original card and card-body

barcode_field = get_lines(394, 404)
name_field = get_lines(405, 413)
slug_field = get_lines(414, 421)
tax_field = get_lines(422, 433)
brands_field = get_lines(434, 464) + "</div>\n" # Was missing closing div in original
main_image = get_lines(467, 503)
other_images = get_lines(504, 589) # Exclude the outer div closings

pricing_variants_card = get_lines(597, 1060)
product_settings_card = get_lines(1062, 1207)
description_card = get_lines(1208, 1269)
seo_card = get_lines(1270, 1305) + "</div>\n" # Add closing div for the card

footer_rest = get_lines(1316, len(lines))

pricing_variants_card = pricing_variants_card.replace('v-if="k !== 0"', '')

# Build new layout
new_template = header_and_tabs + """
                                <!-- Main Content Layout -->
                                <div class="row">
                                    <!-- Left Column: Main Info -->
                                    <div class="col-lg-8 col-md-12 pe-lg-4">
                                        <div class="card modern-card mb-4">
                                            <div class="card-header bg-transparent border-bottom-0 pt-4 pb-2">
                                                <h5 class="card-title fw-bold text-dark">Basic Information</h5>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
""" + name_field + barcode_field + slug_field + """
                                                </div>
                                            </div>
                                        </div>

""" + description_card + """

                                        <div class="card modern-card mb-4">
                                            <div class="card-header bg-transparent border-bottom-0 pt-4 pb-2">
                                                <h5 class="card-title fw-bold text-dark">Media</h5>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
""" + main_image + other_images + """
                                                </div>
                                            </div>
                                        </div>

""" + pricing_variants_card + seo_card + """
                                    </div>

                                    <!-- Right Column: Sidebar -->
                                    <div class="col-lg-4 col-md-12">
                                        
                                        <div class="card modern-card mb-4">
                                            <div class="card-header bg-transparent border-bottom-0 pt-4 pb-2">
                                                <h5 class="card-title fw-bold text-dark">Organization</h5>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
""" + brands_field + tax_field + """
                                                </div>
                                            </div>
                                        </div>

""" + product_settings_card + """

                                    </div>
                                </div>
                                
                                <div class="sticky-bottom-bar">
                                    <div class="d-flex justify-content-end align-items-center">
                                        <button type="button" class="btn btn-light-secondary me-3" @click="clearForm" style="font-weight: 500; padding: 10px 24px;">{{ __('clear') }}</button>
                                        <b-button type="submit" @keydown.enter="saveRecord" variant="primary" :disabled="isLoading" class="btn-save"> 
                                            <i class="fa fa-save me-2"></i> {{ __('save_product') }}
                                            <b-spinner v-if="isLoading" small label="Spinning" class="ms-2"></b-spinner>
                                        </b-button>
                                    </div>
                                </div>
""" + footer_rest

style_block = """
<style scoped>
.modern-admin-form {
    background-color: #f4f6f8;
    padding: 15px;
    border-radius: 8px;
}
.modern-card {
    background: #ffffff;
    border: 1px solid #e1e3e5;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    overflow: hidden;
    transition: box-shadow 0.2s ease-in-out;
}
.modern-card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.modern-card .card-header {
    padding: 20px 24px 10px;
}
.modern-card .card-header h4, .modern-card .card-header h5 {
    font-size: 1.1rem;
    margin: 0;
    color: #202223;
}
.modern-card .card-body {
    padding: 24px;
}
.form-group label {
    font-weight: 600;
    color: #202223;
    margin-bottom: 8px;
    font-size: 0.9rem;
}
.form-control, .multiselect__tags, select.form-control {
    border: 1px solid #c9cccf;
    border-radius: 6px;
    padding: 10px 14px;
    font-size: 0.95rem;
    color: #202223;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-control:focus {
    border-color: #008060;
    box-shadow: 0 0 0 2px rgba(0,128,96,0.15);
}
.file-input-div {
    border: 2px dashed #c9cccf;
    border-radius: 8px;
    background-color: #fafbfc;
    padding: 30px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
}
.file-input-div:hover {
    border-color: #008060;
    background-color: #f3fcf8;
}
.file-input-div i {
    color: #8c9196;
    margin-bottom: 10px;
}
.custom-image {
    border-radius: 8px;
    border: 1px solid #e1e3e5;
    padding: 4px;
    background: #fff;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1;
}
.media-order-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #008060;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
.btn-remove {
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    z-index: 2;
}
.image-container {
    position: relative;
    margin-bottom: 15px;
    padding: 10px;
    transition: transform 0.2s;
}
.image-container:hover {
    transform: scale(1.02);
}
.add-more-media-btn {
    width: 100%;
    height: 100%;
    min-height: 120px;
    border: 2px dashed #c9cccf;
    border-radius: 8px;
    background: transparent;
    color: #202223;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
}
.add-more-media-btn:hover {
    border-color: #008060;
    color: #008060;
    background-color: #f3fcf8;
}
.add-more-media-btn i {
    font-size: 24px;
    margin-bottom: 8px;
}
.sticky-bottom-bar {
    position: sticky;
    bottom: 0;
    background: #ffffff;
    padding: 16px 24px;
    border-top: 1px solid #e1e3e5;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
    z-index: 100;
    margin-top: 30px;
    border-radius: 0 0 12px 12px;
}
.btn-save {
    background-color: #008060;
    border-color: #008060;
    font-weight: 600;
    padding: 10px 30px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 128, 96, 0.2);
    color: white;
}
.btn-save:hover {
    background-color: #006e52;
    border-color: #006e52;
}
.ai-generate-btn {
    border-radius: 20px;
    padding: 8px 20px;
    font-weight: 600;
    background: linear-gradient(135deg, #f6f0ff 0%, #e9f2ff 100%);
    border: 1px solid #d4c4f9;
    color: #5c3b99;
    transition: all 0.3s;
}
.ai-generate-btn:hover {
    background: linear-gradient(135deg, #eaddff 0%, #d4e5ff 100%);
    border-color: #b091f0;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(92, 59, 153, 0.15);
}
.custom-control-label {
    font-weight: 600;
}
.loose_div, #packate_div {
    background: #fafbfc;
    border: 1px solid #e1e3e5;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
}
</style>
"""
new_template = new_template + style_block

with open('d:/koober/chanda-mama/resources/js/views/Product/EditProduct.vue', 'w', encoding='utf-8') as f:
    f.write(new_template)
