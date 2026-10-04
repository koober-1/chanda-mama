const fs = require('fs');
const file = 'd:/koober/chanda-mama/resources/js/views/Product/EditProduct.vue';
let content = fs.readFileSync(file, 'utf8');

const startStr = `<div id="packate_div" class="variant-card modern-card mb-4" v-if="type === 'packet'" v-for="(input, k) in inputs" :key="k">`;
const endStr = `<div class="row mt-3" id="loose_stock_div" v-if="type === 'loose'">`;

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find start or end bounds.');
    process.exit(1);
}

const originalPacketLooseCode = content.substring(startIndex, endIndex);

const packetStart = originalPacketLooseCode.indexOf(startStr);
const looseStart = originalPacketLooseCode.indexOf(`<div id="loose_div" class="variant-card modern-card mb-4" v-if="type === 'loose'" v-for="(input, k) in inputs" :key="k">`);

const originalPacketCode = originalPacketLooseCode.substring(packetStart, looseStart).replace(`v-if="type === 'packet'"`, `v-if="type === 'packet' && !has_variant"`);
const originalLooseCode = originalPacketLooseCode.substring(looseStart).replace(`v-if="type === 'loose'"`, `v-if="type === 'loose' && !has_variant"`);

const newTableCode = `
<div class="table-responsive mb-4" v-if="has_variant && type === 'packet'">
    <table class="table table-bordered table-sm variant-table" style="font-size: 0.85rem; vertical-align: middle;">
        <thead class="bg-light">
            <tr>
                <th style="width: 60px;">Image</th>
                <th style="min-width: 150px;">Details (Name, Barcode, Color)</th>
                <th style="min-width: 120px;">Unit & Meas.</th>
                <th style="min-width: 120px;">Pur. Price & MRP</th>
                <th style="min-width: 150px;">Discount & Sale Price</th>
                <th style="min-width: 100px;" v-if="is_unlimited_stock != 1">Stock</th>
                <th style="min-width: 100px;">Profit</th>
                <th style="width: 50px;">Act</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(input, k) in inputs" :key="'packet_table_'+k">
                <td class="text-center p-1">
                    <div class="variant-image-upload mx-auto" @click="openVariantImagePicker(k, 'packet')" style="width: 50px; height: 50px; border: 1px dashed #ccc; display:flex; align-items:center; justify-content:center; cursor:pointer;" title="Add/View Images">
                        <img v-if="variantImages[k] && variantImages[k].length" :src="variantImages[k][0].url" style="width:100%; height:100%; object-fit:cover;" />
                        <img v-else-if="input.images && input.images.length" :src="$storageUrl + input.images[0].image" style="width:100%; height:100%; object-fit:cover;" />
                        <i v-else class="fa fa-image text-muted"></i>
                    </div>
                    <small v-if="(variantImages[k] ? variantImages[k].length : 0) + (input.images ? input.images.length : 0) > 1" class="text-muted d-block" style="font-size: 10px;">
                        +{{ (variantImages[k] ? variantImages[k].length : 0) + (input.images ? input.images.length : 0) - 1 }} more
                    </small>
                    <input type="file" accept="image/*" :ref="'packet_variant_images_' + k" multiple class="d-none" v-on:change="variantImagesChanges(k)">
                </td>
                <td class="p-1">
                    <input type="text" class="form-control form-control-sm mb-1" placeholder="Variant Name" v-model="input.variant_name">
                    <input type="text" class="form-control form-control-sm mb-1" placeholder="Barcode" v-model="input.barcodes[0]" v-if="input.barcodes">
                    <div class="d-flex">
                        <select class="form-control form-control-sm me-1" style="width: 50%;" :value="getPresetColor(input.color_variant)" @change="setVariantColor(input, $event.target.value)">
                            <option value="">Color</option>
                            <option v-for="color in colorVariantOptions" :key="color.value" :value="color.value">{{ color.label }}</option>
                        </select>
                        <input v-if="!getPresetColor(input.color_variant) && input.color_variant" type="text" class="form-control form-control-sm" style="width: 50%;" placeholder="Custom" v-model.trim="input.color_variant">
                    </div>
                </td>
                <td class="p-1">
                    <select class="form-control form-control-sm mb-1" @change="changeUnits()" v-model="input.packet_stock_unit_id">
                        <option value="">Unit</option>
                        <option v-for="(unit, key) in units" :value="unit.id">{{ unit.short_code }}</option>
                    </select>
                    <input type="number" min="0" step="any" class="form-control form-control-sm" placeholder="Measurement" v-model="input.packet_measurement">
                </td>
                <td class="p-1">
                    <input type="number" min="0" step="any" class="form-control form-control-sm mb-1" placeholder="Pur. Price" v-model="input.packet_purchase_price">
                    <input type="number" min="0" step="any" class="form-control form-control-sm border-primary" placeholder="MRP *" v-model="input.packet_price" @input="syncPacketSalePriceFromDiscount(input)" required>
                </td>
                <td class="p-1">
                    <div class="input-group input-group-sm mb-1">
                        <select class="form-select form-select-sm" style="max-width: 60px; padding: 0 5px;" :value="input.discount_type || 'percent'" @input="$set(input, 'discount_type', $event.target.value); if($event.target.value==='percent'){input.discounted_price='';setPacketDiscountMode(input, 'percent');}else{input.discount_percentage='';setPacketDiscountMode(input, 'amount');}">
                            <option value="percent">%</option>
                            <option value="amount">Rs</option>
                        </select>
                        <input v-if="(input.discount_type || 'percent') === 'percent'" type="number" min="0" step="any" class="form-control form-control-sm" placeholder="Disc %" v-model="input.discount_percentage" @input="setPacketDiscountMode(input, 'percent')">
                        <input v-if="(input.discount_type || 'percent') === 'amount'" type="number" min="0" step="any" class="form-control form-control-sm" placeholder="Disc Rs" v-model="input.discounted_price" @input="setPacketDiscountMode(input, 'amount')">
                    </div>
                    <input type="number" min="0" step="any" class="form-control form-control-sm bg-light" placeholder="Sale Price" v-model="input.packet_sale_price" @input="setPacketSalePrice(input)">
                    <span v-if="input.validationErrorSalePrice" class="text-danger d-block" style="font-size: 10px;">{{ input.validationErrorSalePrice }}</span>
                </td>
                <td class="p-1" v-if="is_unlimited_stock != 1">
                    <input type="number" step="any" min="0" class="form-control form-control-sm" placeholder="Stock" v-model="input.packet_stock">
                </td>
                <td class="p-1">
                    <input type="text" class="form-control form-control-sm mb-1 bg-light text-success" :value="getPacketProfitPercentage(input)" readonly placeholder="Prof %">
                    <input type="text" class="form-control form-control-sm bg-light text-success" :value="getPacketProfit(input)" readonly placeholder="Prof Rs">
                </td>
                <td class="p-1 text-center">
                    <button v-if="k !== 0" type="button" class="btn btn-sm btn-outline-danger" @click="remove(k)"><i class="fa fa-times"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
    <button type="button" class="btn btn-sm btn-primary mt-2" @click="addRow"><i class="fa fa-plus-square"></i> {{ __('add_variant') }}</button>
</div>

<div class="table-responsive mb-4" v-if="has_variant && type === 'loose'">
    <table class="table table-bordered table-sm variant-table" style="font-size: 0.85rem; vertical-align: middle;">
        <thead class="bg-light">
            <tr>
                <th style="width: 60px;">Image</th>
                <th style="min-width: 150px;">Details (Name, Barcode, Color)</th>
                <th style="min-width: 120px;">Unit & Meas.</th>
                <th style="min-width: 120px;">Pur. Price & MRP</th>
                <th style="min-width: 150px;">Discount & Sale Price</th>
                <th style="min-width: 100px;">Profit</th>
                <th style="width: 50px;">Act</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(input, k) in inputs" :key="'loose_table_'+k">
                <td class="text-center p-1">
                    <div class="variant-image-upload mx-auto" @click="openVariantImagePicker(k, 'loose')" style="width: 50px; height: 50px; border: 1px dashed #ccc; display:flex; align-items:center; justify-content:center; cursor:pointer;" title="Add/View Images">
                        <img v-if="variantImages[k] && variantImages[k].length" :src="variantImages[k][0].url" style="width:100%; height:100%; object-fit:cover;" />
                        <img v-else-if="input.loose_images && input.loose_images.length" :src="$storageUrl + input.loose_images[0].image" style="width:100%; height:100%; object-fit:cover;" />
                        <i v-else class="fa fa-image text-muted"></i>
                    </div>
                    <small v-if="(variantImages[k] ? variantImages[k].length : 0) + (input.loose_images ? input.loose_images.length : 0) > 1" class="text-muted d-block" style="font-size: 10px;">
                        +{{ (variantImages[k] ? variantImages[k].length : 0) + (input.loose_images ? input.loose_images.length : 0) - 1 }} more
                    </small>
                    <input type="file" accept="image/*" :ref="'loose_variant_images_' + k" multiple class="d-none" v-on:change="variantImagesChanges(k)">
                </td>
                <td class="p-1">
                    <input type="text" class="form-control form-control-sm mb-1" placeholder="Variant Name" v-model="input.variant_name">
                    <input type="text" class="form-control form-control-sm mb-1" placeholder="Barcode" v-model="input.barcodes[0]" v-if="input.barcodes">
                    <div class="d-flex">
                        <select class="form-control form-control-sm me-1" style="width: 50%;" :value="getPresetColor(input.color_variant)" @change="setVariantColor(input, $event.target.value)">
                            <option value="">Color</option>
                            <option v-for="color in colorVariantOptions" :key="color.value" :value="color.value">{{ color.label }}</option>
                        </select>
                        <input v-if="!getPresetColor(input.color_variant) && input.color_variant" type="text" class="form-control form-control-sm" style="width: 50%;" placeholder="Custom" v-model.trim="input.color_variant">
                    </div>
                </td>
                <td class="p-1">
                    <select class="form-control form-control-sm mb-1" v-model="loose_stock_unit_id">
                        <option value="">Unit</option>
                        <option v-for="(unit, key) in units" :value="unit.id">{{ unit.short_code }}</option>
                    </select>
                    <input type="number" step="any" min="0" class="form-control form-control-sm" placeholder="Measurement" v-model="input.loose_measurement">
                </td>
                <td class="p-1">
                    <input type="number" step="any" min="0" class="form-control form-control-sm mb-1" placeholder="Pur. Price" v-model="input.loose_purchase_price">
                    <input type="number" step="any" min="0" class="form-control form-control-sm border-primary" placeholder="MRP *" v-model="input.loose_price" @input="syncLooseSalePriceFromDiscount(input)" required>
                </td>
                <td class="p-1">
                    <div class="input-group input-group-sm mb-1">
                        <select class="form-select form-select-sm" style="max-width: 60px; padding: 0 5px;" :value="input.discount_type || 'percent'" @input="$set(input, 'discount_type', $event.target.value); if($event.target.value==='percent'){input.loose_discounted_price='';setLooseDiscountMode(input, 'percent');}else{input.loose_discount_percentage='';setLooseDiscountMode(input, 'amount');}">
                            <option value="percent">%</option>
                            <option value="amount">Rs</option>
                        </select>
                        <input v-if="(input.discount_type || 'percent') === 'percent'" type="number" step="any" min="0" class="form-control form-control-sm" placeholder="Disc %" v-model="input.loose_discount_percentage" @input="setLooseDiscountMode(input, 'percent')">
                        <input v-if="(input.discount_type || 'percent') === 'amount'" type="number" step="any" min="0" class="form-control form-control-sm" placeholder="Disc Rs" v-model="input.loose_discounted_price" @input="setLooseDiscountMode(input, 'amount')">
                    </div>
                    <input type="number" step="any" min="0" class="form-control form-control-sm bg-light" placeholder="Sale Price" v-model="input.loose_sale_price" @input="setLooseSalePrice(input)">
                    <span v-if="input.validationErrorSalePriceLoose" class="text-danger d-block" style="font-size: 10px;">{{ input.validationErrorSalePriceLoose }}</span>
                </td>
                <td class="p-1">
                    <input type="text" class="form-control form-control-sm mb-1 bg-light text-success" :value="getLooseProfitPercentage(input)" readonly placeholder="Prof %">
                    <input type="text" class="form-control form-control-sm bg-light text-success" :value="getLooseProfit(input)" readonly placeholder="Prof Rs">
                </td>
                <td class="p-1 text-center">
                    <button v-if="k !== 0" type="button" class="btn btn-sm btn-outline-danger" @click="remove(k)"><i class="fa fa-times"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
    <button type="button" class="btn btn-sm btn-primary mt-2" @click="addRow"><i class="fa fa-plus-square"></i> {{ __('add_variant') }}</button>
</div>
`;

const finalReplacement = newTableCode + "\n\n" + originalPacketCode + "\n\n" + originalLooseCode;

content = content.substring(0, startIndex) + finalReplacement + content.substring(endIndex);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated EditProduct.vue');
