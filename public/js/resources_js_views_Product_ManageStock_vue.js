"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Product_ManageStock_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ManageStock.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ManageStock.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuejs_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datatable */ "./node_modules/vuejs-datatable/dist/vuejs-datatable.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Auth */ "./resources/js/Auth.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VuejsDatatableFactory: vuejs_datatable__WEBPACK_IMPORTED_MODULE_0__.VuejsDatatableFactory
  },
  data: function data() {
    return {
      fields: [{
        key: 'sr_no',
        label: 'Sr. No.',
        "class": 'text-center',
        sortable: false
      }, {
        key: 'image',
        label: this.$titleLabel('image'),
        "class": 'text-center'
      }, {
        key: 'name',
        label: this.$titleLabel('name'),
        "class": 'text-start'
      }, {
        key: 'type',
        label: this.$titleLabel('type'),
        "class": 'text-center'
      }, {
        key: 'stock',
        label: 'Available Quantity',
        "class": 'text-center'
      }, {
        key: 'pv_status',
        label: this.$titleLabel('status'),
        "class": 'text-center'
      }, {
        key: 'actions',
        label: this.$titleLabel('actions'),
        "class": 'text-center'
      }],
      variantFields: [{
        key: 'sr_no',
        label: 'Sr. No.',
        "class": 'text-center'
      }, {
        key: 'image',
        label: this.$titleLabel('image'),
        "class": 'text-center'
      }, {
        key: 'variant_details',
        label: 'Variant Details',
        "class": 'text-start'
      }, {
        key: 'price',
        label: this.$titleLabel('price') + ' (' + this.$currency + ')',
        "class": 'text-center'
      }, {
        key: 'stock',
        label: 'Available Quantity',
        "class": 'text-center'
      }, {
        key: 'pv_status',
        label: this.$titleLabel('status'),
        "class": 'text-center'
      }, {
        key: 'actions',
        label: this.$titleLabel('actions'),
        "class": 'text-center'
      }],
      totalRows: 0,
      currentPage: 1,
      perPage: 10,
      pageOptions: this.$pageOptions || [5, 10, 15, 20],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: ['name'],
      isLoading: false,
      products: [],
      edit_record: null,
      tableKey: 0,
      currentLanguageId: null,
      activeLanguages: [],
      // Drilldown Variant View state
      selectedProduct: null,
      variantsList: [],
      variantLoading: false,
      variantSaving: false,
      variantEditRecord: null
    };
  },
  computed: {
    isSellerRoute: function isSellerRoute() {
      return this.$route.path.startsWith('/seller/');
    },
    pageStart: function pageStart() {
      if (this.totalRows === 0) return 0;
      return (this.currentPage - 1) * this.perPage + 1;
    },
    pageEnd: function pageEnd() {
      return Math.min(this.currentPage * this.perPage, this.totalRows);
    }
  },
  created: function created() {
    var _this = this;
    this.$eventBus.$on('recordSaved', function (message) {
      _this.showMessage('success', message);
      if (_this.selectedProduct) {
        _this.fetchProductVariants(_this.selectedProduct.product_id);
      } else {
        _this.getRecords();
      }
    });
    this.fetchActiveLanguages().then(function () {
      _this.getRecords();
    })["catch"](function () {
      _this.getRecords();
    });
  },
  watch: {
    currentPage: function currentPage() {
      if (!this.selectedProduct) {
        this.getRecords();
      }
    },
    perPage: function perPage() {
      if (!this.selectedProduct) {
        this.getRecords();
      }
    }
  },
  methods: {
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this2 = this;
      return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.$apiUrl + '/active_languages').then(function (response) {
        if (response.data.data && Array.isArray(response.data.data)) {
          _this2.activeLanguages = response.data.data;
          var appLocale = window.appLocale || 'en';
          var currentLanguage = _this2.activeLanguages.find(function (lang) {
            return lang.code === appLocale;
          });
          if (currentLanguage) {
            _this2.currentLanguageId = currentLanguage.id;
          } else {
            var defaultLanguage = _this2.activeLanguages.find(function (lang) {
              return lang.is_default === 1;
            });
            if (defaultLanguage) {
              _this2.currentLanguageId = defaultLanguage.id;
            }
          }
        }
      })["catch"](function (error) {
        console.error('Error loading languages:', error);
      });
    },
    getTranslatedProductName: function getTranslatedProductName(product) {
      var _this3 = this;
      if (!product) return '';
      if (!this.currentLanguageId || !product.translations) {
        return product.name != null ? String(product.name) : '';
      }
      var defaultLanguage = this.activeLanguages.find(function (lang) {
        return lang.is_default === 1;
      });
      var defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;
      if (Array.isArray(product.translations)) {
        var translation = product.translations.find(function (t) {
          return t.language_id === _this3.currentLanguageId;
        });
        if (!translation && defaultLanguageId) {
          translation = product.translations.find(function (t) {
            return t.language_id === defaultLanguageId;
          });
        }
        if (translation && translation.name && translation.name.trim() !== '') {
          return translation.name;
        }
      }
      return product.name != null ? String(product.name) : '';
    },
    getTranslatedVariant: function getTranslatedVariant(product) {
      var _this4 = this;
      var measurement = product && product.measurement != null ? String(product.measurement) : '';
      if (!product) return measurement;
      var translatedUnit = null;
      if (this.currentLanguageId) {
        var defaultLanguage = this.activeLanguages.find(function (lang) {
          return lang.is_default === 1;
        });
        var defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;
        if (product.unit_translations && Array.isArray(product.unit_translations)) {
          var unitTranslation = product.unit_translations.find(function (t) {
            return t.language_id === _this4.currentLanguageId;
          });
          if (!unitTranslation && defaultLanguageId) {
            unitTranslation = product.unit_translations.find(function (t) {
              return t.language_id === defaultLanguageId;
            });
          }
          if (unitTranslation && unitTranslation.short_code && unitTranslation.short_code.trim() !== '') {
            translatedUnit = unitTranslation.short_code;
          }
        }
      }
      var unit = translatedUnit || product.stock_unit || product.short_code || '';
      if (measurement && unit) {
        if (measurement.includes(',')) {
          return measurement.split(',').map(function (item) {
            var trimmed = item.trim();
            if (trimmed && !trimmed.endsWith(unit)) {
              return "".concat(trimmed, " ").concat(unit);
            }
            return trimmed;
          }).join(', ');
        } else if (!measurement.endsWith(unit)) {
          return "".concat(measurement, " ").concat(unit);
        }
      }
      return measurement;
    },
    formatColor: function formatColor(color) {
      if (!color) return '-';
      return color.split('_').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    },
    openLightbox: function openLightbox(image) {
      if (image) window.open(image, '_blank', 'noopener');
    },
    // Fetch products using standard products API grouped by product
    getRecords: function getRecords() {
      var _this5 = this;
      this.isLoading = true;
      var param = {
        page: this.currentPage,
        per_page: this.perPage,
        filter: this.filter,
        group_by_product: 1,
        seller: this.isSellerRoute && _Auth__WEBPACK_IMPORTED_MODULE_1__["default"].user && _Auth__WEBPACK_IMPORTED_MODULE_1__["default"].user.seller ? _Auth__WEBPACK_IMPORTED_MODULE_1__["default"].user.seller.id : ''
      };
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.$apiUrl + '/products', {
        params: param
      }).then(function (response) {
        _this5.isLoading = false;
        if (response.data && response.data.data) {
          _this5.products = response.data.data.products || [];
          _this5.totalRows = response.data.total || 0;
          _this5.tableKey += 1;
        } else {
          _this5.products = [];
          _this5.totalRows = 0;
        }
      })["catch"](function (err) {
        _this5.isLoading = false;
        _this5.products = [];
        _this5.totalRows = 0;
        _this5.showMessage('error', err.response && err.response.data && err.response.data.message ? err.response.data.message : __('something_went_wrong'));
      });
    },
    updateStock: function updateStock(product_variant_id) {
      var _this6 = this;
      if (this.edit_record.stock < 0) {
        this.showMessage('error', __('stock_must_be_positive') || 'Stock must be positive');
        return;
      }
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(this.$apiUrl + '/products/update_variant_stock', {
        id: product_variant_id,
        stock: this.edit_record.stock
      }).then(function (response) {
        _this6.isLoading = false;
        if (response.data.status === 1) {
          _this6.showMessage('success', response.data.message);
          _this6.getRecords();
        } else {
          _this6.showMessage('error', response.data.message);
        }
        _this6.edit_record = null;
      })["catch"](function () {
        _this6.isLoading = false;
        _this6.showMessage('error', __('update_failed') || 'Update failed');
      });
    },
    // ==================== DRILLDOWN VARIANTS VIEW METHODS ====================
    viewProductVariants: function viewProductVariants(product) {
      this.selectedProduct = product;
      this.variantEditRecord = null;
      this.fetchProductVariants(product.product_id);
    },
    backToAllProducts: function backToAllProducts() {
      this.selectedProduct = null;
      this.variantsList = [];
      this.variantEditRecord = null;
      this.getRecords();
    },
    fetchProductVariants: function fetchProductVariants(productId) {
      var _this7 = this;
      this.variantLoading = true;
      var param = {
        product_id: productId,
        seller: this.isSellerRoute && _Auth__WEBPACK_IMPORTED_MODULE_1__["default"].user && _Auth__WEBPACK_IMPORTED_MODULE_1__["default"].user.seller ? _Auth__WEBPACK_IMPORTED_MODULE_1__["default"].user.seller.id : ''
      };
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.$apiUrl + '/products', {
        params: param
      }).then(function (response) {
        _this7.variantLoading = false;
        if (response.data && response.data.data) {
          _this7.variantsList = response.data.data.products || [];
        } else {
          _this7.variantsList = [];
        }
      })["catch"](function () {
        _this7.variantLoading = false;
        _this7.variantsList = [];
      });
    },
    updateVariantStockDirect: function updateVariantStockDirect(productVariantId) {
      var _this8 = this;
      if (!this.variantEditRecord || this.variantEditRecord.stock < 0) {
        this.showMessage('error', __('stock_must_be_positive') || 'Stock must be positive');
        return;
      }
      this.variantSaving = true;
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(this.$apiUrl + '/products/update_variant_stock', {
        id: productVariantId,
        stock: this.variantEditRecord.stock
      }).then(function (response) {
        _this8.variantSaving = false;
        if (response.data.status === 1) {
          _this8.showMessage('success', response.data.message);
          // Update variant in list locally
          var found = _this8.variantsList.find(function (v) {
            return v.product_variant_id === productVariantId;
          });
          if (found) {
            found.stock = _this8.variantEditRecord.stock;
            found.pv_status = found.stock > 0 ? 1 : 0;
          }
          _this8.variantEditRecord = null;
        } else {
          _this8.showMessage('error', response.data.message);
        }
      })["catch"](function () {
        _this8.variantSaving = false;
        _this8.showMessage('error', __('update_failed') || 'Update failed');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ManageStock.vue?vue&type=template&id=26b68cbc":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ManageStock.vue?vue&type=template&id=26b68cbc ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "page-heading"
  }, [!_vm.selectedProduct ? _c("div", {
    staticClass: "page-title mb-2"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("h3", {
    staticClass: "modern-page-title mb-0"
  }, [_vm._v(_vm._s(_vm.__("stock_management")))]), _vm._v(" "), _c("nav", {
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
      to: "/dashboard"
    }
  }, [_vm._v(_vm._s(_vm.__("dashboard")))])], 1), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active text-primary",
    attrs: {
      "aria-current": "page"
    }
  }, [_vm._v(_vm._s(_vm.__("stock_management")))])])])])]) : _c("div", {
    staticClass: "page-title mb-2"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center flex-wrap gap-2"
  }, [_c("div", [_c("h3", {
    staticClass: "modern-page-title mb-0"
  }, [_vm._v("\n                        " + _vm._s(_vm.getTranslatedProductName(_vm.selectedProduct)) + "\n                        "), _c("span", {
    staticClass: "text-primary fs-6 fw-normal"
  }, [_vm._v("(" + _vm._s(_vm.__("product_variants") || "Variants Stock") + ")")])])]), _vm._v(" "), _c("nav", {
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
      to: "/dashboard"
    }
  }, [_vm._v(_vm._s(_vm.__("dashboard")))])], 1), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    staticClass: "text-muted",
    attrs: {
      href: "javascript:void(0)"
    },
    on: {
      click: _vm.backToAllProducts
    }
  }, [_vm._v(_vm._s(_vm.__("stock_management")))])]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active text-primary",
    attrs: {
      "aria-current": "page"
    }
  }, [_vm._v(_vm._s(_vm.__("variants") || "Variants"))])])])])]), _vm._v(" "), _c("section", {
    staticClass: "section"
  }, [!_vm.selectedProduct ? _c("div", {
    staticClass: "figma-main-section-card"
  }, [_c("div", {
    staticClass: "card-body p-0"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center flex-wrap gap-3 figma-action-bar-row p-3"
  }, [_c("div", {
    staticClass: "flex-grow-1",
    staticStyle: {
      "min-width": "250px"
    }
  }, [_c("div", {
    staticClass: "figma-search-container"
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
      placeholder: _vm.__("search")
    },
    domProps: {
      value: _vm.filter
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.filter = $event.target.value;
      }, function ($event) {
        return _vm.getRecords();
      }]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 flex-shrink-0"
  }, [_c("button", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover",
      modifiers: {
        hover: true
      }
    }],
    staticClass: "btn btn-figma-filter d-flex align-items-center gap-2",
    attrs: {
      title: _vm.__("refresh")
    },
    on: {
      click: function click($event) {
        return _vm.getRecords();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-refresh"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("b-table", {
    key: _vm.tableKey,
    staticClass: "mb-0",
    attrs: {
      items: _vm.products,
      fields: _vm.fields,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      "sort-direction": _vm.sortDirection,
      bordered: false,
      busy: _vm.isLoading,
      stacked: "md",
      "show-empty": "",
      small: "",
      "primary-key": "product_id"
    },
    on: {
      "update:sortBy": function updateSortBy($event) {
        _vm.sortBy = $event;
      },
      "update:sort-by": function updateSortBy($event) {
        _vm.sortBy = $event;
      },
      "update:sortDesc": function updateSortDesc($event) {
        _vm.sortDesc = $event;
      },
      "update:sort-desc": function updateSortDesc($event) {
        _vm.sortDesc = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center text-muted my-3 small"
        }, [_c("b-spinner", {
          staticClass: "align-middle me-2",
          attrs: {
            small: ""
          }
        }), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.__("loading")) + "...")])], 1)];
      },
      proxy: true
    }, {
      key: "empty",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center text-muted my-4 small"
        }, [_c("i", {
          staticClass: "fa fa-box-open fs-4 mb-2 d-block text-black-50"
        }), _vm._v("\n                                    No products found\n                                ")])];
      },
      proxy: true
    }, {
      key: "cell(sr_no)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(_vm.pageStart + row.index) + "\n                            ")];
      }
    }, {
      key: "cell(image)",
      fn: function fn(row) {
        return [_c("img", {
          staticClass: "img-thumbnail",
          staticStyle: {
            cursor: "pointer",
            "object-fit": "contain",
            "max-height": "50px"
          },
          attrs: {
            src: row.item.image_url || _vm.$storageUrl + row.item.image,
            alt: "Image",
            width: "50",
            height: "50"
          },
          on: {
            click: function click($event) {
              _vm.openLightbox(row.item.image_url || _vm.$storageUrl + row.item.image);
            }
          }
        })];
      }
    }, {
      key: "cell(name)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex flex-column text-start"
        }, [Number(row.item.variant_count) > 1 ? [_c("a", {
          staticClass: "text-primary fw-bold text-decoration-none d-flex align-items-center gap-1",
          attrs: {
            href: "javascript:void(0)"
          },
          on: {
            click: function click($event) {
              return _vm.viewProductVariants(row.item);
            }
          }
        }, [_c("span", [_vm._v(_vm._s(_vm.getTranslatedProductName(row.item)))]), _vm._v(" "), _c("i", {
          staticClass: "fa fa-arrow-right text-primary",
          staticStyle: {
            "font-size": "11px"
          }
        })]), _vm._v(" "), _c("small", {
          staticClass: "mt-1"
        }, [_c("span", {
          staticClass: "badge bg-light text-primary border",
          staticStyle: {
            cursor: "pointer"
          },
          on: {
            click: function click($event) {
              return _vm.viewProductVariants(row.item);
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-tags me-1"
        }), _vm._v(_vm._s(row.item.variant_count) + " Variants\n                                            ")])])] : [_c("span", {
          staticClass: "fw-medium text-dark"
        }, [_vm._v(_vm._s(_vm.getTranslatedProductName(row.item)))]), _vm._v(" "), _vm.getTranslatedVariant(row.item) ? _c("small", {
          staticClass: "text-muted"
        }, [_vm._v("\n                                            " + _vm._s(_vm.getTranslatedVariant(row.item)) + "\n                                        ")]) : _vm._e()]], 2)];
      }
    }, {
      key: "cell(type)",
      fn: function fn(row) {
        return [_c("span", {
          staticClass: "badge bg-light text-dark text-capitalize"
        }, [_vm._v(_vm._s(row.item.type || "packet"))])];
      }
    }, {
      key: "cell(stock)",
      fn: function fn(row) {
        return [Number(row.item.variant_count) <= 1 ? _c("div", [_vm.edit_record && _vm.edit_record.product_variant_id === row.item.product_variant_id ? _c("div", {
          staticClass: "d-flex align-items-center justify-content-center gap-1"
        }, [_c("b-form-input", {
          staticStyle: {
            width: "85px"
          },
          attrs: {
            type: "number",
            min: "0",
            size: "sm"
          },
          on: {
            keyup: function keyup($event) {
              if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
              return _vm.updateStock(row.item.product_variant_id);
            }
          },
          model: {
            value: _vm.edit_record.stock,
            callback: function callback($$v) {
              _vm.$set(_vm.edit_record, "stock", $$v);
            },
            expression: "edit_record.stock"
          }
        })], 1) : _c("div", {
          staticClass: "fw-bold"
        }, [_vm._v("\n                                        " + _vm._s(row.item.stock) + "\n                                    ")])]) : _c("div", [_c("div", {
          staticClass: "d-flex flex-column align-items-center",
          staticStyle: {
            cursor: "pointer"
          },
          on: {
            click: function click($event) {
              return _vm.viewProductVariants(row.item);
            }
          }
        }, [_c("span", {
          staticClass: "fw-bold text-dark"
        }, [_vm._v(_vm._s(row.item.stock))]), _vm._v(" "), _c("small", {
          staticClass: "text-muted",
          staticStyle: {
            "font-size": "10px"
          }
        }, [_vm._v("Total across " + _vm._s(row.item.variant_count) + " variants")])])])];
      }
    }, {
      key: "cell(pv_status)",
      fn: function fn(row) {
        return [Number(row.item.stock) > 0 || row.item.pv_status == 1 ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.__("available")))]) : _c("span", {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.__("sold_out")))])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2 justify-content-center"
        }, [Number(row.item.variant_count) > 1 ? [_c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "btn btn-sm btn-outline-primary d-flex align-items-center gap-1 px-2 py-1",
          attrs: {
            title: "View and manage variants stock"
          },
          on: {
            click: function click($event) {
              return _vm.viewProductVariants(row.item);
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-cubes"
        }), _vm._v(" "), _c("span", {
          staticClass: "small"
        }, [_vm._v("Variants (" + _vm._s(row.item.variant_count) + ")")])])] : [_vm.edit_record && _vm.edit_record.product_variant_id === row.item.product_variant_id ? _c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn text-success",
          attrs: {
            title: _vm.__("save")
          },
          on: {
            click: function click($event) {
              return _vm.updateStock(row.item.product_variant_id);
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-check"
        })]) : _vm._e(), _vm._v(" "), _vm.edit_record && _vm.edit_record.product_variant_id === row.item.product_variant_id ? _c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn text-secondary",
          attrs: {
            title: _vm.__("cancel")
          },
          on: {
            click: function click($event) {
              _vm.edit_record = null;
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-times"
        })]) : _vm._e(), _vm._v(" "), !_vm.edit_record || _vm.edit_record.product_variant_id !== row.item.product_variant_id ? _c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn",
          attrs: {
            title: _vm.__("edit")
          },
          on: {
            click: function click($event) {
              _vm.edit_record = _objectSpread({}, row.item);
            }
          }
        }, [_c("base-icon", {
          attrs: {
            name: "edit icon",
            hoverName: "edit Hover",
            width: "24",
            height: "24"
          }
        })], 1) : _vm._e()]], 2)];
      }
    }], null, false, 536026496)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "figma-table-footer flex-wrap gap-3"
  }, [_c("div", {
    staticClass: "showing-results-text small"
  }, [_vm._v("\n                            " + _vm._s(_vm.__("Showing Result")) + " : "), _c("span", {
    staticClass: "showing-bold"
  }, [_vm._v(_vm._s(_vm.pageEnd))]), _vm._v(" " + _vm._s(_vm.__("of") || "of") + " "), _c("span", {
    staticClass: "showing-bold"
  }, [_vm._v(_vm._s(_vm.totalRows))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center gap-3"
  }, [_c("b-pagination", {
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
  })], 1)])])]) : _c("div", {
    staticClass: "figma-main-section-card"
  }, [_c("div", {
    staticClass: "card-body p-0"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center flex-wrap gap-3 figma-action-bar-row p-3"
  }, [_c("div", {
    staticClass: "d-flex align-items-center gap-2"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-outline-secondary d-flex align-items-center gap-1",
    on: {
      click: _vm.backToAllProducts
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("back") || "Back to Products"))])]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold text-dark ms-2"
  }, [_vm._v(_vm._s(_vm.getTranslatedProductName(_vm.selectedProduct)))]), _vm._v(" "), _c("span", {
    staticClass: "badge bg-primary"
  }, [_vm._v(_vm._s(_vm.variantsList.length) + " " + _vm._s(_vm.__("variants") || "Variants"))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("button", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover",
      modifiers: {
        hover: true
      }
    }],
    staticClass: "btn btn-figma-filter d-flex align-items-center gap-2",
    attrs: {
      title: _vm.__("refresh")
    },
    on: {
      click: function click($event) {
        return _vm.fetchProductVariants(_vm.selectedProduct.product_id);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-refresh"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("b-table", {
    staticClass: "mb-0",
    attrs: {
      items: _vm.variantsList,
      fields: _vm.variantFields,
      busy: _vm.variantLoading,
      bordered: false,
      stacked: "md",
      "show-empty": "",
      small: ""
    },
    scopedSlots: _vm._u([{
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center text-muted my-3 small"
        }, [_c("b-spinner", {
          staticClass: "align-middle me-2",
          attrs: {
            small: ""
          }
        }), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.__("loading")) + "...")])], 1)];
      },
      proxy: true
    }, {
      key: "empty",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center text-muted my-4 small"
        }, [_vm._v("\n                                    No variants found for this product\n                                ")])];
      },
      proxy: true
    }, {
      key: "cell(sr_no)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(row.index + 1) + "\n                            ")];
      }
    }, {
      key: "cell(image)",
      fn: function fn(row) {
        return [_c("img", {
          staticClass: "img-thumbnail",
          staticStyle: {
            width: "45px",
            height: "45px",
            "object-fit": "contain",
            cursor: "pointer"
          },
          attrs: {
            src: _vm.$storageUrl + (row.item.variant_image || row.item.image)
          },
          on: {
            click: function click($event) {
              _vm.openLightbox(_vm.$storageUrl + (row.item.variant_image || row.item.image));
            }
          }
        })];
      }
    }, {
      key: "cell(variant_details)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex flex-column text-start"
        }, [_c("span", {
          staticClass: "fw-bold text-dark"
        }, [_vm._v(_vm._s(row.item.variant_name || row.item.measurement || "-") + " " + _vm._s(row.item.stock_unit || ""))]), _vm._v(" "), row.item.color_variant ? _c("div", {
          staticClass: "d-flex align-items-center gap-1 mt-1 text-muted small"
        }, [_c("span", {
          staticClass: "badge bg-light text-dark border"
        }, [_vm._v(_vm._s(_vm.formatColor(row.item.color_variant)))])]) : _vm._e(), _vm._v(" "), row.item.variant_barcodes || row.item.barcode ? _c("div", {
          staticClass: "text-muted",
          staticStyle: {
            "font-size": "11px"
          }
        }, [_vm._v("\n                                        Barcode: " + _vm._s(row.item.variant_barcodes || row.item.barcode) + "\n                                    ")]) : _vm._e()])];
      }
    }, {
      key: "cell(price)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "fw-bold"
        }, [_vm._v(_vm._s(_vm.$currency) + _vm._s(Number(row.item.discounted_price) > 0 ? row.item.discounted_price : row.item.price))]), _vm._v(" "), Number(row.item.discounted_price) > 0 ? _c("small", {
          staticClass: "text-muted text-decoration-line-through"
        }, [_vm._v(_vm._s(_vm.$currency) + _vm._s(row.item.price))]) : _vm._e()];
      }
    }, {
      key: "cell(stock)",
      fn: function fn(row) {
        return [_vm.variantEditRecord && _vm.variantEditRecord.product_variant_id === row.item.product_variant_id ? _c("div", {
          staticClass: "d-flex align-items-center justify-content-center gap-1"
        }, [_c("b-form-input", {
          staticStyle: {
            width: "85px"
          },
          attrs: {
            type: "number",
            min: "0",
            size: "sm"
          },
          on: {
            keyup: function keyup($event) {
              if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
              return _vm.updateVariantStockDirect(row.item.product_variant_id);
            }
          },
          model: {
            value: _vm.variantEditRecord.stock,
            callback: function callback($$v) {
              _vm.$set(_vm.variantEditRecord, "stock", $$v);
            },
            expression: "variantEditRecord.stock"
          }
        })], 1) : _c("div", {
          staticClass: "fw-bold fs-6"
        }, [_vm._v("\n                                    " + _vm._s(row.item.stock) + "\n                                ")])];
      }
    }, {
      key: "cell(pv_status)",
      fn: function fn(row) {
        return [Number(row.item.stock) > 0 || row.item.pv_status == 1 ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.__("available")))]) : _c("span", {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.__("sold_out")))])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2 justify-content-center"
        }, [_vm.variantEditRecord && _vm.variantEditRecord.product_variant_id === row.item.product_variant_id ? _c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn text-success",
          attrs: {
            disabled: _vm.variantSaving,
            title: _vm.__("save")
          },
          on: {
            click: function click($event) {
              return _vm.updateVariantStockDirect(row.item.product_variant_id);
            }
          }
        }, [_vm.variantSaving ? _c("b-spinner", {
          attrs: {
            small: ""
          }
        }) : _c("i", {
          staticClass: "fa fa-check"
        })], 1) : _vm._e(), _vm._v(" "), _vm.variantEditRecord && _vm.variantEditRecord.product_variant_id === row.item.product_variant_id ? _c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn text-secondary",
          attrs: {
            title: _vm.__("cancel")
          },
          on: {
            click: function click($event) {
              _vm.variantEditRecord = null;
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-times"
        })]) : _vm._e(), _vm._v(" "), !_vm.variantEditRecord || _vm.variantEditRecord.product_variant_id !== row.item.product_variant_id ? _c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn",
          attrs: {
            title: _vm.__("edit")
          },
          on: {
            click: function click($event) {
              _vm.variantEditRecord = _objectSpread({}, row.item);
            }
          }
        }, [_c("base-icon", {
          attrs: {
            name: "edit icon",
            hoverName: "edit Hover",
            width: "24",
            height: "24"
          }
        })], 1) : _vm._e()])];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "figma-table-footer p-3 d-flex justify-content-between align-items-center"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-outline-secondary d-flex align-items-center gap-1",
    on: {
      click: _vm.backToAllProducts
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("back") || "Back to Products"))])]), _vm._v(" "), _c("span", {
    staticClass: "text-muted small"
  }, [_vm._v("Total " + _vm._s(_vm.variantsList.length) + " variants")])])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/Product/ManageStock.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Product/ManageStock.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ManageStock_vue_vue_type_template_id_26b68cbc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageStock.vue?vue&type=template&id=26b68cbc */ "./resources/js/views/Product/ManageStock.vue?vue&type=template&id=26b68cbc");
/* harmony import */ var _ManageStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageStock.vue?vue&type=script&lang=js */ "./resources/js/views/Product/ManageStock.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManageStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageStock_vue_vue_type_template_id_26b68cbc__WEBPACK_IMPORTED_MODULE_0__.render,
  _ManageStock_vue_vue_type_template_id_26b68cbc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product/ManageStock.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product/ManageStock.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Product/ManageStock.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageStock.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ManageStock.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageStock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Product/ManageStock.vue?vue&type=template&id=26b68cbc":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Product/ManageStock.vue?vue&type=template&id=26b68cbc ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageStock_vue_vue_type_template_id_26b68cbc__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageStock_vue_vue_type_template_id_26b68cbc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageStock_vue_vue_type_template_id_26b68cbc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageStock.vue?vue&type=template&id=26b68cbc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ManageStock.vue?vue&type=template&id=26b68cbc");


/***/ })

}]);