const fs = require('fs');
const file = 'd:/koober/chanda-mama/resources/js/views/Product/EditProduct.vue';
let content = fs.readFileSync(file, 'utf8');

const cssToInject = `
/* Compact UI Overrides for Create/Edit View */
.modern-card {
    padding: 1rem !important;
}
.modern-card h4.card-title,
.modern-card .card-title,
.card-header h4 {
    font-size: 1rem !important;
    margin-bottom: 0.75rem !important;
}
label {
    font-size: 0.8rem !important;
    margin-bottom: 0.2rem !important;
    font-weight: 600 !important;
}
.form-control, .form-select, select, input {
    font-size: 0.8rem !important;
    padding: 0.25rem 0.5rem !important;
    min-height: unset !important;
    height: auto !important;
}
.btn {
    font-size: 0.8rem !important;
    padding: 0.3rem 0.75rem !important;
}
.form-group {
    margin-bottom: 0.75rem !important;
}
.ql-editor {
    font-size: 0.8rem !important;
    min-height: 100px !important;
}
small.text-muted {
    font-size: 0.7rem !important;
}
p.error {
    font-size: 0.75rem !important;
}
`;

if (!content.includes('/* Compact UI Overrides for Create/Edit View */')) {
    content = content.replace('</style>', cssToInject + '\n</style>');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully injected compact UI styles.');
} else {
    console.log('Styles already injected.');
}
