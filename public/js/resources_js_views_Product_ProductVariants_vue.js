"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Product_ProductVariants_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductVariants.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductVariants.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Auth.js */ "./resources/js/Auth.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fields: [{
        key: 'sr_no',
        label: 'Sr. No.',
        "class": 'text-center'
      }, {
        key: 'variant_name',
        label: 'Variant Name',
        "class": 'text-center',
        formatter: function formatter(value) {
          return value || '-';
        }
      }, {
        key: 'barcode',
        label: 'Barcode',
        "class": 'text-center'
      }, {
        key: 'image',
        label: this.$titleLabel('image'),
        "class": 'text-center'
      }, {
        key: 'color_variant',
        label: 'Colour',
        "class": 'text-center'
      }, {
        key: 'measurement',
        label: this.$titleLabel('measurement'),
        "class": 'text-center'
      }, {
        key: 'price',
        label: this.$titleLabel('price') + '(' + this.$currency + ')',
        "class": 'text-center'
      }, {
        key: 'discounted_price',
        label: 'Sale Price(' + this.$currency + ')',
        "class": 'text-center'
      }, {
        key: 'stock',
        label: this.$titleLabel('stock'),
        "class": 'text-center'
      }, {
        key: 'pv_status',
        label: 'Status',
        "class": 'text-center'
      }, {
        key: 'actions',
        label: this.$titleLabel('actions')
      }],
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
    productId: function productId() {
      return Number(this.$route.params.product_id);
    },
    isSellerRoute: function isSellerRoute() {
      return this.$route.path.startsWith('/seller/');
    },
    manageProductsPath: function manageProductsPath() {
      return this.isSellerRoute ? '/seller/manage_products' : '/manage_products';
    },
    pageStart: function pageStart() {
      return this.totalRows === 0 ? 0 : (this.currentPage - 1) * this.perPage + 1;
    },
    pageEnd: function pageEnd() {
      return Math.min(this.currentPage * this.perPage, this.totalRows);
    }
  },
  created: function created() {
    if (!this.$can('product_list')) {
      this.showError('You do not have permission to view this page.');
      this.$router.replace({
        path: '/unauthorized'
      });
      return;
    }
    this.getRecords();
  },
  watch: {
    currentPage: function currentPage() {
      this.getRecords();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.searchTimer) clearTimeout(this.searchTimer);
  },
  methods: {
    getRecords: function getRecords() {
      var _this = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/products', {
        params: {
          product_id: this.productId,
          seller: this.isSellerRoute && _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.seller ? _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.seller.id : '',
          page: this.currentPage,
          per_page: this.perPage,
          filter: this.filter
        }
      }).then(function (response) {
        _this.variants = response.data.data.products || [];
        _this.totalRows = response.data.total || 0;
        if (_this.variants.length > 0) _this.productName = _this.variants[0].name;
      })["finally"](function () {
        _this.isLoading = false;
      });
    },
    searchVariants: function searchVariants() {
      var _this2 = this;
      if (this.searchTimer) clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(function () {
        if (_this2.currentPage !== 1) _this2.currentPage = 1;else _this2.getRecords();
      }, 300);
    },
    openLightbox: function openLightbox(image) {
      window.open(image, '_blank', 'noopener');
    },
    getVariantColorHex: function getVariantColorHex(color) {
      if (!color) return null;
      var match = String(color).match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b/);
      if (match) return match[0].toUpperCase();
      var presets = {
        'black': '#000000',
        'white': '#FFFFFF',
        'grey': '#808080',
        'red': '#FF0000',
        'crimson': '#DC143C',
        'maroon': '#800000',
        'pink': '#FFC0CB',
        'orange': '#FFA500',
        'yellow': '#FFFF00',
        'blue': '#0000FF',
        'navy blue': '#000080',
        'green': '#008000',
        'dark green': '#006400',
        'olive green': '#556B2F',
        'purple': '#800080',
        'brown': '#8B4513',
        'multi color': '#4A90E2'
      };
      var lower = String(color).toLowerCase().replace(/_/g, ' ').trim();
      return presets[lower] || null;
    },
    formatColor: function formatColor(color) {
      if (!color) return '-';
      return color.split('_').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    },
    editProductRoute: function editProductRoute(productId) {
      return this.isSellerRoute ? {
        name: 'SellerEditProduct',
        params: {
          id: productId
        }
      } : {
        name: 'EditProduct',
        params: {
          id: productId
        }
      };
    },
    deleteVariant: function deleteVariant(id) {
      var _this3 = this;
      this.$swal.fire({
        title: __('are_you_sure'),
        text: __('you_want_be_able_to_revert_this'),
        confirmButtonText: __('yes_sure'),
        cancelButtonText: __('cancel'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#37a279',
        cancelButtonColor: '#d33'
      }).then(function (result) {
        if (!result.value) return;
        _this3.isLoading = true;
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(_this3.$apiUrl + '/products/delete', {
          id: id
        }).then(function (response) {
          if (response.data.status === 1) {
            _this3.showMessage('success', response.data.message);
            if (_this3.totalRows <= 1) _this3.$router.push(_this3.manageProductsPath);else _this3.getRecords();
          } else {
            _this3.showError(response.data.message);
          }
        })["finally"](function () {
          _this3.isLoading = false;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductVariants.vue?vue&type=template&id=abf6bde4":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductVariants.vue?vue&type=template&id=abf6bde4 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "page-heading"
  }, [_c("div", {
    staticClass: "page-title mb-2"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center flex-wrap gap-2"
  }, [_c("h3", {
    staticClass: "modern-page-title mb-0"
  }, [_vm._v("\n                    Product Variants"), _vm.productName ? _c("span", [_vm._v(" - " + _vm._s(_vm.productName))]) : _vm._e()]), _vm._v(" "), _c("nav", {
    attrs: {
      "aria-label": "breadcrumb"
    }
  }, [_c("ol", {
    staticClass: "breadcrumb mb-0"
  }, [_c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("router-link", {
    staticClass: "text-muted",
    attrs: {
      to: _vm.manageProductsPath
    }
  }, [_vm._v("Manage Products")])], 1), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active text-primary",
    attrs: {
      "aria-current": "page"
    }
  }, [_vm._v("Variants")])])])])]), _vm._v(" "), _c("section", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "figma-main-section-card"
  }, [_c("div", {
    staticClass: "card-body p-0"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center flex-wrap gap-3 figma-action-bar-row p-3"
  }, [_c("div", {
    staticClass: "figma-search-container flex-grow-1",
    staticStyle: {
      "max-width": "520px",
      "min-width": "250px"
    }
  }, [_c("i", {
    staticClass: "fa fa-search text-muted"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filter,
      expression: "filter"
    }],
    staticClass: "figma-search-input",
    attrs: {
      type: "text",
      placeholder: "Search variants"
    },
    domProps: {
      value: _vm.filter
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.filter = $event.target.value;
      }, _vm.searchVariants]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("button", {
    staticClass: "btn btn-figma-filter d-flex align-items-center gap-2",
    on: {
      click: _vm.getRecords
    }
  }, [_c("i", {
    staticClass: "fa fa-refresh"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh")))])]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-figma-columns d-flex align-items-center gap-2",
    attrs: {
      to: _vm.manageProductsPath
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left"
  }), _vm._v(" "), _c("span", [_vm._v("Back")])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("b-table", {
    staticClass: "mb-0",
    attrs: {
      items: _vm.variants,
      fields: _vm.fields,
      busy: _vm.isLoading,
      bordered: false,
      stacked: "md",
      "show-empty": "",
      small: ""
    },
    scopedSlots: _vm._u([{
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center text-black my-2"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        }), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.__("loading")) + "...")])], 1)];
      },
      proxy: true
    }, {
      key: "cell(sr_no)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(_vm.pageStart + row.index) + "\n                            ")];
      }
    }, {
      key: "cell(barcode)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(row.item.variant_barcodes || row.item.barcode || "-") + "\n                            ")];
      }
    }, {
      key: "cell(image)",
      fn: function fn(row) {
        return [_c("img", {
          attrs: {
            src: _vm.$storageUrl + (row.item.variant_image || row.item.image),
            alt: "Variant image",
            height: "50"
          },
          on: {
            click: function click($event) {
              _vm.openLightbox(_vm.$storageUrl + (row.item.variant_image || row.item.image));
            }
          }
        })];
      }
    }, {
      key: "cell(color_variant)",
      fn: function fn(row) {
        return [row.item.color_variant ? _c("div", {
          staticClass: "d-flex align-items-center gap-1"
        }, [_vm.getVariantColorHex(row.item.color_variant) ? _c("span", {
          staticClass: "d-inline-block rounded-circle border shadow-sm",
          style: {
            width: "14px",
            height: "14px",
            minWidth: "14px",
            backgroundColor: _vm.getVariantColorHex(row.item.color_variant)
          }
        }) : _vm._e(), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.formatColor(row.item.color_variant)))])]) : _c("span", [_vm._v("-")])];
      }
    }, {
      key: "cell(measurement)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(row.item.measurement) + " " + _vm._s(row.item.stock_unit || "") + "\n                            ")];
      }
    }, {
      key: "cell(discounted_price)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(Number(row.item.discounted_price) > 0 ? row.item.discounted_price : row.item.price) + "\n                            ")];
      }
    }, {
      key: "cell(pv_status)",
      fn: function fn(row) {
        return [Number(row.item.pv_status) === 1 ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.__("available")))]) : _c("span", {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.__("sold_out")))])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2"
        }, [_vm.$can("product_update") ? _c("router-link", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn",
          attrs: {
            to: _vm.editProductRoute(row.item.product_id),
            title: _vm.__("edit")
          }
        }, [_c("base-icon", {
          attrs: {
            name: "edit icon",
            hoverName: "edit Hover",
            width: "24",
            height: "24"
          }
        })], 1) : _vm._e(), _vm._v(" "), _vm.$can("product_delete") ? _c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn",
          attrs: {
            title: _vm.__("delete")
          },
          on: {
            click: function click($event) {
              return _vm.deleteVariant(row.item.product_variant_id);
            }
          }
        }, [_c("base-icon", {
          attrs: {
            name: "Type=Default",
            hoverName: "Type=Hover",
            width: "24",
            height: "24"
          }
        })], 1) : _vm._e()], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "figma-table-footer flex-wrap gap-3"
  }, [_c("div", {
    staticClass: "showing-results-text small"
  }, [_vm._v("\n                            " + _vm._s(_vm.__("Showing Result")) + " : "), _c("span", {
    staticClass: "showing-bold"
  }, [_vm._v(_vm._s(_vm.pageEnd))]), _vm._v("\n                            " + _vm._s(_vm.__("of") || "of") + " "), _c("span", {
    staticClass: "showing-bold"
  }, [_vm._v(_vm._s(_vm.totalRows))])]), _vm._v(" "), _c("b-pagination", {
    staticClass: "figma-pagination mb-0",
    attrs: {
      "total-rows": _vm.totalRows,
      "per-page": _vm.perPage,
      align: "right",
      "hide-goto-end-buttons": "",
      "hide-ellipsis": "",
      "prev-text": "<",
      "next-text": ">"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/Product/ProductVariants.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/Product/ProductVariants.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductVariants_vue_vue_type_template_id_abf6bde4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductVariants.vue?vue&type=template&id=abf6bde4 */ "./resources/js/views/Product/ProductVariants.vue?vue&type=template&id=abf6bde4");
/* harmony import */ var _ProductVariants_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductVariants.vue?vue&type=script&lang=js */ "./resources/js/views/Product/ProductVariants.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductVariants_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductVariants_vue_vue_type_template_id_abf6bde4__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductVariants_vue_vue_type_template_id_abf6bde4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product/ProductVariants.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product/ProductVariants.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Product/ProductVariants.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariants_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductVariants.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductVariants.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariants_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Product/ProductVariants.vue?vue&type=template&id=abf6bde4":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Product/ProductVariants.vue?vue&type=template&id=abf6bde4 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariants_vue_vue_type_template_id_abf6bde4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariants_vue_vue_type_template_id_abf6bde4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariants_vue_vue_type_template_id_abf6bde4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductVariants.vue?vue&type=template&id=abf6bde4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductVariants.vue?vue&type=template&id=abf6bde4");


/***/ })

}]);