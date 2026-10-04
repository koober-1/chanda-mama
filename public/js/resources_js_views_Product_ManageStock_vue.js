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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VuejsDatatableFactory: vuejs_datatable__WEBPACK_IMPORTED_MODULE_0__.VuejsDatatableFactory
  },
  data: function data() {
    return {
      fields: [{
        key: 'product_variant_id',
        label: 'Sr. No.',
        "class": 'text-center',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'image_url',
        label: this.$titleLabel('image'),
        "class": 'text-center'
      }, {
        key: 'name',
        label: this.$titleLabel('name'),
        "class": 'text-center'
      }, {
        key: 'type',
        label: this.$titleLabel('type'),
        "class": 'text-center'
      }, {
        key: 'stock',
        label: 'Available Quantity',
        "class": 'text-center'
      }, {
        key: 'stock_value',
        label: this.$titleLabel('stock_value'),
        "class": 'text-center'
      }, {
        key: 'sales_value',
        label: this.$titleLabel('sales_value'),
        "class": 'text-center'
      }, {
        key: 'pv_status',
        label: this.$titleLabel('status'),
        "class": 'text-center'
      }, {
        key: 'actions',
        label: this.$titleLabel('actions')
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
      groupedProducts: [],
      tableKey: 0,
      currentLanguageId: null,
      activeLanguages: []
    };
  },
  computed: {
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
      _this.getRecords();
    });
    // Load languages first so we know currentLanguageId before mapping translations
    this.fetchActiveLanguages().then(function () {
      _this.getRecords();
    })["catch"](function () {
      _this.getRecords();
    });
  },
  watch: {
    currentPage: function currentPage() {
      this.getRecords();
    },
    perPage: function perPage() {
      this.getRecords();
    }
  },
  methods: {
    // Fetch active languages and set current language ID
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this2 = this;
      return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/active_languages').then(function (response) {
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
    // Get translated product name with fallback logic (guards so rendering never throws)
    getTranslatedProductName: function getTranslatedProductName(product) {
      var _this3 = this;
      if (!product) return '';
      if (!this.currentLanguageId || !product.translations) {
        return product.name != null ? String(product.name) : '';
      }

      // Get default language ID for fallback
      var defaultLanguage = this.activeLanguages.find(function (lang) {
        return lang.is_default === 1;
      });
      var defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;
      if (Array.isArray(product.translations)) {
        // First try to find translation for current language
        var translation = product.translations.find(function (t) {
          return t.language_id === _this3.currentLanguageId;
        });

        // If not found, try default language
        if (!translation && defaultLanguageId) {
          translation = product.translations.find(function (t) {
            return t.language_id === defaultLanguageId;
          });
        }

        // Use translation name if available and not empty
        if (translation && translation.name && translation.name.trim() !== '') {
          return translation.name;
        }
      }
      return product.name != null ? String(product.name) : '';
    },
    // Get translated variant (measurement + unit) with fallback logic (guards so rendering never throws)
    getTranslatedVariant: function getTranslatedVariant(product) {
      var _this4 = this;
      var measurement = product && product.measurement != null ? String(product.measurement) : '';
      if (!product) {
        return measurement;
      }

      // Determine unit
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
        // If it's a comma-separated list (e.g. for loose products), append unit to each item
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
    openLightbox: function openLightbox(image) {
      window.open(image, '_blank', 'noopener');
    },
    getRecords: function getRecords() {
      var _this5 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/products/get_product_variants', {
        params: {
          page: this.currentPage,
          per_page: this.perPage,
          filter: this.filter
        }
      }).then(function (response) {
        _this5.isLoading = false;
        var res = response.data;
        var ok = (res.status === 1 || res.status === '1') && res.data != null;
        if (ok) {
          var raw = res.data;
          var list = Array.isArray(raw) ? raw : raw && _typeof(raw) === 'object' ? Object.values(raw) : [];
          _this5.groupedProducts = list.slice();
          _this5.totalRows = typeof res.total === 'number' ? res.total : res.total ? parseInt(res.total, 10) : 0;
          _this5.tableKey += 1;
        } else {
          _this5.groupedProducts = [];
          _this5.totalRows = 0;
        }
      })["catch"](function (err) {
        _this5.isLoading = false;
        _this5.groupedProducts = [];
        _this5.totalRows = 0;
        _this5.showMessage('error', err.response && err.response.data && err.response.data.message ? err.response.data.message : __('something_went_wrong'));
      });
    },
    updateStock: function updateStock(product_variant_id) {
      var _this6 = this;
      if (this.edit_record.stock < 0) {
        this.showMessage('error', __('stock_must_be_positive'));
        return;
      }
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(this.$apiUrl + '/products/update_variant_stock', {
        id: product_variant_id,
        stock: this.edit_record.stock
      }).then(function (response) {
        _this6.isLoading = false;
        if (response.data.status === 1) {
          _this6.showMessage('success', response.data.message);
          _this6.getRecords(); // Refresh data after updating stock
        } else {
          _this6.showMessage('error', response.data.message);
        }
        _this6.edit_record = null; // Reset edit state
      })["catch"](function () {
        _this6.isLoading = false;
        _this6.showMessage('error', __('update_failed'));
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
  }, [_c("div", {
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
  }, [_vm._v(_vm._s(_vm.__("stock_management")))])])])])]), _vm._v(" "), _c("section", {
    staticClass: "section"
  }, [_c("div", {
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
      items: _vm.groupedProducts,
      fields: _vm.fields,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      "sort-direction": _vm.sortDirection,
      bordered: false,
      busy: _vm.isLoading,
      stacked: "md",
      "show-empty": "",
      small: "",
      "primary-key": "product_variant_id"
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
      key: "cell(product_variant_id)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s((_vm.currentPage - 1) * _vm.perPage + row.index + 1) + "\n                            ")];
      }
    }, {
      key: "cell(name)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(_vm.getTranslatedProductName(row.item)) + "\n                            ")];
      }
    }, {
      key: "cell(variant)",
      fn: function fn(row) {
        return [_vm._v("\n\n                                " + _vm._s(_vm.getTranslatedVariant(row.item)) + "\n\n                            ")];
      }
    }, {
      key: "cell(type)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(row.item.type) + "\n                            ")];
      }
    }, {
      key: "cell(image_url)",
      fn: function fn(row) {
        return [_c("img", {
          staticClass: "img-thumbnail",
          attrs: {
            src: row.item.image_url,
            alt: "Image",
            width: "100"
          },
          on: {
            click: function click($event) {
              return _vm.openLightbox(row.item.image_url);
            }
          }
        })];
      }
    }, {
      key: "cell(stock)",
      fn: function fn(row) {
        return [_vm.edit_record && _vm.edit_record.product_variant_id === row.item.product_variant_id ? _c("div", [_c("b-form-input", {
          attrs: {
            type: "number",
            min: "0"
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
        })], 1) : _c("div", [_vm._v("\n                                    " + _vm._s(row.item.stock) + "\n                                ")])];
      }
    }, {
      key: "cell(pv_status)",
      fn: function fn(row) {
        return [row.item.pv_status == 1 ? _c("span", {
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
        }, [_vm.edit_record && _vm.edit_record.product_variant_id === row.item.product_variant_id ? _c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn",
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
        })]) : _c("button", {
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
        })], 1)])];
      }
    }])
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
  })], 1)])])])])])]);
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