"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Product_ApproveRequests_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ApproveRequests.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ApproveRequests.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuejs_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datatable */ "./node_modules/vuejs-datatable/dist/vuejs-datatable.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Auth.js */ "./resources/js/Auth.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VuejsDatatableFactory: vuejs_datatable__WEBPACK_IMPORTED_MODULE_0__.VuejsDatatableFactory
  },
  data: function data() {
    return {
      login_user: _Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].user,
      fields: [{
        key: 'product_variant_id',
        label: __('id'),
        visible: true,
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'product_id',
        label: __('product_id'),
        visible: true,
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'tax_id',
        label: __('tax_id'),
        visible: false,
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'seller_name',
        label: __('seller_name'),
        visible: true,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'name',
        label: __('name'),
        visible: true,
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'image',
        label: __('image'),
        visible: true,
        "class": 'text-center'
      }, {
        key: 'price',
        label: __('price') + '(' + this.$currency + ')',
        visible: true,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'discounted_price',
        label: __('discounted_price') + '(' + this.$currency + ')',
        /*label: 'D.Price',*/visible: true,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'measurement',
        label: __('measurement'),
        visible: true,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'stock',
        label: __('stock'),
        visible: true,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'availability',
        label: __('availability'),
        visible: true,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'status',
        label: __('status'),
        visible: true,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'indicator',
        label: __('indicator'),
        visible: false,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'is_approved',
        label: __('is_approved'),
        visible: false,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'return_status',
        label: __('return'),
        visible: false,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'cancelable_status',
        label: __('cancellation'),
        visible: false,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'till_status',
        label: __('till_status'),
        visible: false,
        "class": 'text-center',
        sortable: true
      }, {
        key: 'actions',
        label: __('actions'),
        visible: true
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: this.$perPage,
      pageOptions: this.$pageOptions,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      categories: [],
      sellers: [],
      products: [],
      category: "",
      seller: _Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].user.seller !== null ? _Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].user.seller.id : "",
      is_approved: "",
      selectedItems: [],
      select: '',
      all_select: false,
      isLoading: false,
      slide: 1,
      activeImageIndex: 0,
      // Language handling for translations
      currentLanguageId: null,
      activeLanguages: [],
      showFilters: false
    };
  },
  computed: {
    visibleFields: function visibleFields() {
      return this.fields.filter(function (field) {
        return field.visible;
      });
    },
    isSellerRoute: function isSellerRoute() {
      // Use this.$route to access the current route
      return this.$route.path.startsWith('/seller/');
    },
    // Computed property to translate products with seller names and product names
    translatedProducts: function translatedProducts() {
      var _this = this;
      if (!this.currentLanguageId || this.products.length === 0) {
        return this.products;
      }

      // Get translated sellers for lookup
      var sellersMap = {};
      if (this.translatedSellers && this.translatedSellers.length > 0) {
        this.translatedSellers.forEach(function (seller) {
          sellersMap[seller.id] = seller.name;
        });
      }
      return this.products.map(function (product) {
        var translatedProduct = _objectSpread({}, product);

        // Translate product name
        if (product.translations && Array.isArray(product.translations)) {
          var translation = product.translations.find(function (t) {
            return t.language_id === _this.currentLanguageId;
          });
          if (translation && translation.name && translation.name.trim() !== '') {
            translatedProduct.name = translation.name;
          }
        }

        // Translate seller name
        if (product.seller_id && sellersMap[product.seller_id]) {
          translatedProduct.seller_name = sellersMap[product.seller_id];
        }
        return translatedProduct;
      });
    },
    // Computed property to translate categories for dropdown
    translatedCategories: function translatedCategories() {
      var _this2 = this;
      if (!this.currentLanguageId || this.categories.length === 0) {
        return this.categories;
      }

      // Get default language ID for fallback
      var defaultLanguage = this.activeLanguages.find(function (lang) {
        return lang.is_default === 1;
      });
      var defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;
      return this.categories.map(function (category) {
        var translatedCategory = _objectSpread({}, category);
        var translatedName = category.name; // Fallback to main table name

        if (category.translations && Array.isArray(category.translations)) {
          // First try to find translation for current language
          var translation = category.translations.find(function (t) {
            return t.language_id === _this2.currentLanguageId;
          });

          // If not found, try default language
          if (!translation && defaultLanguageId) {
            translation = category.translations.find(function (t) {
              return t.language_id === defaultLanguageId;
            });
          }

          // Use translation name if available and not empty
          if (translation && translation.name && translation.name.trim() !== '') {
            translatedName = translation.name;
          }
        }
        translatedCategory.name = translatedName;
        return translatedCategory;
      });
    },
    // Computed property to translate sellers for dropdown
    translatedSellers: function translatedSellers() {
      var _this3 = this;
      if (!this.currentLanguageId || this.sellers.length === 0) {
        return this.sellers;
      }

      // Get default language ID for fallback
      var defaultLanguage = this.activeLanguages.find(function (lang) {
        return lang.is_default === 1;
      });
      var defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;
      return this.sellers.map(function (seller) {
        var translatedSeller = _objectSpread({}, seller);
        var translatedName = seller.name; // Fallback to main table name

        if (seller.translations && Array.isArray(seller.translations)) {
          // First try to find translation for current language
          var translation = seller.translations.find(function (t) {
            return t.language_id === _this3.currentLanguageId;
          });

          // If not found, try default language
          if (!translation && defaultLanguageId) {
            translation = seller.translations.find(function (t) {
              return t.language_id === defaultLanguageId;
            });
          }

          // Use translation name if available and not empty
          if (translation && translation.name && translation.name.trim() !== '') {
            translatedName = translation.name;
          }
        }
        translatedSeller.name = translatedName;
        return translatedSeller;
      });
    },
    pageEnd: function pageEnd() {
      return Math.min(this.currentPage * this.perPage, this.totalRows);
    }
  },
  mounted: function mounted() {},
  created: function created() {
    var _this4 = this;
    if (this.$roleSeller === this.login_user.role.name) {
      this.fields.forEach(function (field, index) {
        if (field.key === 'seller_name') {
          _this4.fields.splice(index, 1);
        }
      });
    }
    // Load languages first so we know currentLanguageId before mapping translations
    this.fetchActiveLanguages().then(function () {
      _this4.getRecords();
    })["catch"](function () {
      _this4.getRecords();
    });
  },
  methods: {
    // Fetch active languages and set current language ID
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this5 = this;
      return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.$apiUrl + '/active_languages').then(function (response) {
        if (response.data.data && Array.isArray(response.data.data)) {
          _this5.activeLanguages = response.data.data;
          var appLocale = window.appLocale || 'en';
          var currentLanguage = _this5.activeLanguages.find(function (lang) {
            return lang.code === appLocale;
          });
          if (currentLanguage) {
            _this5.currentLanguageId = currentLanguage.id;
          } else {
            var defaultLanguage = _this5.activeLanguages.find(function (lang) {
              return lang.is_default === 1;
            });
            if (defaultLanguage) {
              _this5.currentLanguageId = defaultLanguage.id;
            }
          }
        }
      })["catch"](function (error) {
        console.error('Error loading languages:', error);
      });
    },
    openLightbox: function openLightbox(image) {
      window.open(image, '_blank', 'noopener');
    },
    getRecords: function getRecords() {
      var _this6 = this;
      this.isLoading = true;
      var param = {
        "category": this.category,
        "seller": this.seller,
        "is_approved": 0
      };
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.$apiUrl + '/products', {
        params: param
      }).then(function (response) {
        _this6.isLoading = false;
        _this6.categories = response.data.data.categories;
        _this6.sellers = response.data.data.sellers;
        _this6.products = response.data.data.products;
        _this6.totalRows = _this6.products.length;
      });
    },
    updateStatusProduct: function updateStatusProduct(index, id) {
      var _this7 = this;
      this.$swal.fire({
        title: "Are you Sure?",
        text: "You want to change status.",
        confirmButtonText: "Yes, Sure",
        cancelButtonText: "Cancel",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#37a279',
        cancelButtonColor: '#d33'
      }).then(function (result) {
        if (result.value) {
          _this7.isLoading = true;
          var postData = {
            id: id
          };
          axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(_this7.$apiUrl + '/products/change', postData).then(function (response) {
            _this7.isLoading = false;
            _this7.getRecords();
            _this7.showMessage("success", response.data.message);
          });
        }
      });
    },
    deleteRecord: function deleteRecord(index, id) {
      var _this8 = this;
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
        if (result.value) {
          _this8.isLoading = true;
          var postData = {
            id: id
          };
          axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(_this8.$apiUrl + '/products/delete', postData).then(function (response) {
            _this8.isLoading = false;
            var data = response.data;
            _this8.products.splice(index, 1);
            //this.showSuccess(data.message);
            _this8.showMessage("success", data.message);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ApproveRequests.vue?vue&type=template&id=44e90ea2":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ApproveRequests.vue?vue&type=template&id=44e90ea2 ***!
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
    staticClass: "page-heading d-flex justify-content-between align-items-center mb-4"
  }, [_c("h3", {
    staticClass: "modern-page-title mb-0"
  }, [_vm._v(_vm._s(_vm.__("approve_requests")))]), _vm._v(" "), _c("nav", {
    attrs: {
      "aria-label": "breadcrumb"
    }
  }, [_c("ol", {
    staticClass: "breadcrumb mb-0"
  }, [_vm.isSellerRoute ? _c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("router-link", {
    staticClass: "text-muted",
    attrs: {
      to: "/seller/dashboard"
    }
  }, [_vm._v(_vm._s(_vm.__("dashboard")))])], 1) : _c("li", {
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
  }, [_vm._v(_vm._s(_vm.__("approve_requests")) + "\n                    ")])])])]), _vm._v(" "), _c("section", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "figma-main-section-card"
  }, [_c("div", {
    staticClass: "card-body p-0"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center flex-wrap gap-2 figma-action-bar-row"
  }, [_c("div", {
    staticClass: "flex-grow-1"
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
      placeholder: _vm.__("search") || "Search..."
    },
    domProps: {
      value: _vm.filter
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.filter = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("button", {
    staticClass: "btn btn-figma-filter d-flex align-items-center gap-2",
    "class": {
      active: _vm.showFilters
    },
    on: {
      click: function click($event) {
        _vm.showFilters = !_vm.showFilters;
      }
    }
  }, [_c("base-icon", {
    attrs: {
      name: "Funnel",
      width: "24",
      height: "24",
      useCurrentColor: ""
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("filters") || "Filters"))]), _vm._v(" "), _c("i", {
    staticClass: "bi ms-1",
    "class": _vm.showFilters ? "bi-chevron-up" : "bi-chevron-down"
  })], 1), _vm._v(" "), _c("b-dropdown", {
    staticClass: "column-dropdown",
    attrs: {
      variant: "link",
      "toggle-class": "text-decoration-none p-0 border-0",
      "no-caret": "",
      right: "",
      boundary: "viewport"
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("button", {
          staticClass: "btn btn-figma-columns d-flex align-items-center gap-2"
        }, [_c("base-icon", {
          attrs: {
            name: "SquareSplitHorizontal",
            width: "24",
            height: "24",
            useCurrentColor: ""
          }
        }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("Columns") || ""))])], 1)];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", {
    staticClass: "px-0 py-0 column-check-list-modern"
  }, [_c("div", {
    staticClass: "dropdown-header-custom"
  }, [_vm._v(_vm._s(_vm.__("Show Columns") || "Show Columns") + "\n                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "column-items-container"
  }, _vm._l(_vm.fields, function (field) {
    return _c("div", {
      key: field.key,
      staticClass: "column-item",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          field.visible = !field.visible;
        }
      }
    }, [_c("div", {
      staticClass: "custom-check-icon",
      "class": {
        active: field.visible
      }
    }, [field.visible ? _c("i", {
      staticClass: "fa fa-check"
    }) : _vm._e()]), _vm._v(" "), _c("span", {
      staticClass: "column-label"
    }, [_vm._v(_vm._s(field.label))])]);
  }), 0)])]), _vm._v(" "), _c("button", {
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
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh") || "Refresh"))])])], 1)]), _vm._v(" "), _c("b-collapse", {
    model: {
      value: _vm.showFilters,
      callback: function callback($$v) {
        _vm.showFilters = $$v;
      },
      expression: "showFilters"
    }
  }, [_c("div", {
    staticClass: "figma-filter-section"
  }, [_c("div", {
    staticClass: "row g-4"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "figma-filter-group"
  }, [_c("label", {
    staticClass: "figma-filter-label"
  }, [_vm._v(_vm._s(_vm.__("categories")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.category,
      expression: "category"
    }],
    staticClass: "form-control form-select modern-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.category = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.getRecords();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.__("all_categories")))]), _vm._v(" "), _vm._l(_vm.translatedCategories, function (category) {
    return _c("option", {
      domProps: {
        value: category.id
      }
    }, [_vm._v("\n                                                " + _vm._s(category.name) + "\n                                            ")]);
  })], 2)])]), _vm._v(" "), _vm.$roleSeller != _vm.login_user.role.name ? _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "figma-filter-group"
  }, [_c("label", {
    staticClass: "figma-filter-label"
  }, [_vm._v(_vm._s(_vm.__("sellers")))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seller,
      expression: "seller"
    }],
    staticClass: "form-control form-select modern-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.seller = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.getRecords();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.__("all_sellers")))]), _vm._v(" "), _vm._l(_vm.translatedSellers, function (seller) {
    return _c("option", {
      domProps: {
        value: seller.id
      }
    }, [_vm._v(_vm._s(seller.name))]);
  })], 2)])]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("b-table", {
    staticClass: "figma-order-table mb-0",
    attrs: {
      items: _vm.translatedProducts,
      fields: _vm.visibleFields,
      "current-page": _vm.currentPage,
      "per-page": _vm.perPage,
      filter: _vm.filter,
      "filter-included-fields": _vm.filterOn,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      "sort-direction": _vm.sortDirection,
      bordered: false,
      busy: _vm.isLoading,
      stacked: "md",
      "show-empty": "",
      "tbody-tr-class": function tbodyTrClass() {
        return "figma-tr align-middle";
      },
      small: ""
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
          staticClass: "text-center text-black my-2"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        }), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.__("loading")) + "...")])], 1)];
      },
      proxy: true
    }, {
      key: "cell(seller_name)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(row.item.seller_name) + "\n                            ")];
      }
    }, {
      key: "cell(image)",
      fn: function fn(row) {
        return [_c("img", {
          attrs: {
            src: _vm.$storageUrl + row.item.image,
            alt: "Image",
            height: "50"
          },
          on: {
            click: function click($event) {
              return _vm.openLightbox(_vm.$storageUrl + row.item.image);
            }
          }
        })];
      }
    }, {
      key: "cell(measurement)",
      fn: function fn(row) {
        return [_vm._v("\n\n                                " + _vm._s(row.item.measurement) + " "), row.item.stock_unit ? _c("span", [_vm._v(_vm._s(row.item.stock_unit))]) : _vm._e()];
      }
    }, {
      key: "cell(stock)",
      fn: function fn(row) {
        return [row.item.is_unlimited_stock ? _c("span", [_vm._v(_vm._s(_vm.__("unlimited")))]) : [_vm._v("\n                                    " + _vm._s(row.item.stock) + "\n                                ")]];
      }
    }, {
      key: "cell(availability)",
      fn: function fn(row) {
        return [_vm.$can("product_update") ? _c("a", {
          staticClass: "btn btn-sm",
          on: {
            click: function click($event) {
              return _vm.updateStatusProduct(row.index, row.item.id);
            }
          }
        }, [row.item.status == 1 ? _c("span", {
          staticClass: "primary-toggal"
        }, [_c("i", {
          staticClass: "fa fa-toggle-on fa-2x"
        })]) : _c("span", {
          staticClass: "text-danger"
        }, [_c("i", {
          staticClass: "fa fa-toggle-off fa-2x"
        })])]) : _vm._e()];
      }
    }, {
      key: "cell(status)",
      fn: function fn(row) {
        return [row.item.status == 1 ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.__("available")))]) : _vm._e(), _vm._v(" "), row.item.status == 0 ? _c("span", {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.__("sold_out")))]) : _vm._e()];
      }
    }, {
      key: "cell(indicator)",
      fn: function fn(row) {
        return [row.item.indicator == 0 ? _c("span", {
          staticClass: "badge bg-info"
        }, [_vm._v(_vm._s(_vm.__("none")))]) : _vm._e(), _vm._v(" "), row.item.indicator == 1 ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.__("veg")))]) : _vm._e(), _vm._v(" "), row.item.indicator == 2 ? _c("span", {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.__("non_veg")))]) : _vm._e()];
      }
    }, {
      key: "cell(is_approved)",
      fn: function fn(row) {
        return [row.item.is_approved == 1 ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.__("approved")))]) : _vm._e(), _vm._v(" "), row.item.is_approved == 0 ? _c("span", {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.__("not_approved")))]) : _vm._e()];
      }
    }, {
      key: "cell(return_status)",
      fn: function fn(row) {
        return [row.item.return_status == 0 ? _c("span", {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.__("not_allowed")))]) : _vm._e(), _vm._v(" "), row.item.return_status == 1 ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.__("allowed")))]) : _vm._e()];
      }
    }, {
      key: "cell(cancelable_status)",
      fn: function fn(row) {
        return [row.item.cancelable_status === 0 ? _c("span", {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.__("not_allowed")))]) : _vm._e(), _vm._v(" "), row.item.cancelable_status == 1 ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.__("allowed")))]) : _vm._e()];
      }
    }, {
      key: "cell(till_status)",
      fn: function fn(row) {
        return [row.item.till_status == "0" ? _c("span", {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.__("not_applicable")))]) : _vm._e(), _vm._v(" "), row.item.till_status == "2" ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(row.item.till_status_name))]) : _vm._e(), _vm._v(" "), row.item.till_status == "3" ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(row.item.till_status_name))]) : _vm._e(), _vm._v(" "), row.item.till_status == "4" ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(row.item.till_status_name))]) : _vm._e(), _vm._v(" "), row.item.till_status == "6" ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(row.item.till_status_name))]) : _vm._e()];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2"
        }, [_vm.$roleSeller == _vm.login_user.role.name ? [_c("router-link", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn",
          attrs: {
            to: {
              name: "SellerViewProduct",
              params: {
                id: row.item.id,
                record: row.item
              }
            },
            title: _vm.__("view")
          }
        }, [_c("base-icon", {
          attrs: {
            name: "Eye",
            hoverName: "Type=Hover (1)",
            width: "24",
            height: "24"
          }
        })], 1), _vm._v(" "), _vm.$can("product_update") ? _c("router-link", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn",
          attrs: {
            to: {
              name: "SellerEditProduct",
              params: {
                id: row.item.id,
                record: row.item
              }
            },
            title: _vm.__("edit")
          }
        }, [_c("base-icon", {
          attrs: {
            name: "edit icon",
            hoverName: "edit Hover",
            width: "24",
            height: "24"
          }
        })], 1) : _vm._e()] : [_c("router-link", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn",
          attrs: {
            to: {
              name: "ViewProduct",
              params: {
                id: row.item.id,
                record: row.item
              }
            },
            title: _vm.__("view")
          }
        }, [_c("base-icon", {
          attrs: {
            name: "Eye",
            hoverName: "Type=Hover (1)",
            width: "24",
            height: "24"
          }
        })], 1), _vm._v(" "), _vm.$can("product_update") ? _c("router-link", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn",
          attrs: {
            to: {
              name: "EditProduct",
              params: {
                id: row.item.id,
                record: row.item
              }
            },
            title: _vm.__("edit")
          }
        }, [_c("base-icon", {
          attrs: {
            name: "edit icon",
            hoverName: "edit Hover",
            width: "24",
            height: "24"
          }
        })], 1) : _vm._e()], _vm._v(" "), _vm.$can("product_delete") ? _c("button", {
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
              return _vm.deleteRecord(row.index, row.item.product_variant_id);
            }
          }
        }, [_c("base-icon", {
          attrs: {
            name: "Type=Default",
            hoverName: "Type=Hover",
            width: "24",
            height: "24"
          }
        })], 1) : _vm._e()], 2)];
      }
    }])
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "figma-table-footer"
  }, [_c("div", {
    staticClass: "showing-results-text"
  }, [_vm._v("\n                        " + _vm._s(_vm.__("Showing Result")) + " : "), _c("span", {
    staticClass: "showing-bold"
  }, [_vm._v(_vm._s(_vm.pageEnd))]), _vm._v(" " + _vm._s(_vm.__("of") || "of") + " "), _c("span", {
    staticClass: "showing-bold"
  }, [_vm._v(_vm._s(_vm.totalRows))])]), _vm._v(" "), _c("b-pagination", {
    staticClass: "figma-pagination mb-0",
    attrs: {
      "total-rows": _vm.totalRows,
      "per-page": _vm.perPage,
      align: "right"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/Product/ApproveRequests.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/Product/ApproveRequests.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApproveRequests_vue_vue_type_template_id_44e90ea2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApproveRequests.vue?vue&type=template&id=44e90ea2 */ "./resources/js/views/Product/ApproveRequests.vue?vue&type=template&id=44e90ea2");
/* harmony import */ var _ApproveRequests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApproveRequests.vue?vue&type=script&lang=js */ "./resources/js/views/Product/ApproveRequests.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApproveRequests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApproveRequests_vue_vue_type_template_id_44e90ea2__WEBPACK_IMPORTED_MODULE_0__.render,
  _ApproveRequests_vue_vue_type_template_id_44e90ea2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product/ApproveRequests.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product/ApproveRequests.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Product/ApproveRequests.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApproveRequests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApproveRequests.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ApproveRequests.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApproveRequests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Product/ApproveRequests.vue?vue&type=template&id=44e90ea2":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Product/ApproveRequests.vue?vue&type=template&id=44e90ea2 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApproveRequests_vue_vue_type_template_id_44e90ea2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApproveRequests_vue_vue_type_template_id_44e90ea2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApproveRequests_vue_vue_type_template_id_44e90ea2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApproveRequests.vue?vue&type=template&id=44e90ea2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ApproveRequests.vue?vue&type=template&id=44e90ea2");


/***/ })

}]);