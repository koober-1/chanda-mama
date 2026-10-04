const fs = require('fs');
const file = 'd:/koober/chanda-mama/resources/js/views/Product/EditProduct.vue';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove Variant Barcode blocks from the non-table layout (card view)
const barcodeBlockStart = '<label>Variant Barcodes <small class="text-muted">(Optional)</small></label>';
const barcodeBlockEndPacket = '<p v-if="input.barcodeError" class="error mb-0">{{ input.barcodeError }}</p>';
const barcodeBlockEndLoose = '<p v-if="input.barcodeError" class="error mb-0">{{ input.barcodeError }}</p>';

let p1 = content.indexOf(barcodeBlockStart);
while (p1 !== -1) {
    let p2 = content.indexOf(barcodeBlockEndPacket, p1);
    if (p2 !== -1) {
        content = content.substring(0, p1) + content.substring(p2 + barcodeBlockEndPacket.length);
    }
    p1 = content.indexOf(barcodeBlockStart);
}

// 2. Make custom color input always visible in the table layout
content = content.replace(
    /<input v-if="!getPresetColor\(input.color_variant\) && input.color_variant" type="text" class="form-control form-control-sm" style="width: 50%;" placeholder="Custom" v-model.trim="input.color_variant">/g,
    '<input type="text" class="form-control form-control-sm" style="width: 50%;" placeholder="Custom" v-model.trim="input.color_variant">'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated EditProduct.vue');
