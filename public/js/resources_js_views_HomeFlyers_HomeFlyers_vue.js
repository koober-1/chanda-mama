"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_HomeFlyers_HomeFlyers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['record'],
  data: function data() {
    var _this$record$sort_ord, _this$record$status;
    return {
      isLoading: false,
      id: this.record ? this.record.id : null,
      name: this.record ? this.record.name || '' : '',
      image: null,
      image_url: this.record ? this.record.image_url : null,
      sort_order: this.record ? (_this$record$sort_ord = this.record.sort_order) !== null && _this$record$sort_ord !== void 0 ? _this$record$sort_ord : 0 : 0,
      status: this.record ? (_this$record$status = this.record.status) !== null && _this$record$status !== void 0 ? _this$record$status : 1 : 1
    };
  },
  computed: {
    modal_title: function modal_title() {
      return (this.id ? __('edit') : __('add')) + ' Home Flyer';
    }
  },
  methods: {
    showModal: function showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    dropFile: function dropFile(event) {
      event.preventDefault();
      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        this.$refs.file_image.files = event.dataTransfer.files;
        this.handleFileUpload();
      }
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    handleFileUpload: function handleFileUpload() {
      if (this.$refs.file_image.files && this.$refs.file_image.files.length > 0) {
        this.image = this.$refs.file_image.files[0];
        this.image_url = URL.createObjectURL(this.image);
      }
    },
    saveRecord: function saveRecord() {
      var _this = this;
      var vm = this;
      if (!this.id && !this.image) {
        this.showError('Please select a flyer image.');
        return;
      }
      this.isLoading = true;
      var formData = new FormData();
      if (this.id) {
        formData.append('id', this.id);
      }
      formData.append('name', this.name || '');
      if (this.image) {
        formData.append('image', this.image);
      }
      formData.append('sort_order', this.sort_order !== null && this.sort_order !== '' ? this.sort_order : 0);
      formData.append('status', this.status);
      var url = this.$apiUrl + '/home_flyers/save';
      if (this.id) {
        url = this.$apiUrl + '/home_flyers/update';
      }
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this.$eventBus.$emit('FlyerSaved', data.message);
          _this.hideModal();
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        vm.isLoading = false;
        if (error.response && error.response.data && error.response.data.message) {
          _this.showError(error.response.data.message);
        } else if (error.message) {
          _this.showError(error.message);
        } else {
          _this.showError(__('something_went_wrong'));
        }
      });
    }
  },
  mounted: function mounted() {
    this.showModal();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue */ "./resources/js/views/HomeFlyers/Edit.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    'app-edit-record': _Edit_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      create_new: false,
      edit_record: null,
      fields: [{
        key: 'id',
        label: 'ID',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'image',
        label: 'Flyer Image (1200×650)',
        "class": 'text-center'
      }, {
        key: 'name',
        label: 'Title',
        sortable: true
      }, {
        key: 'sort_order',
        label: 'Display Order',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'status',
        label: __('status'),
        "class": 'text-center'
      }, {
        key: 'actions',
        label: __('actions'),
        "class": 'text-center'
      }],
      flyers: [],
      totalRows: 0,
      currentPage: 1,
      perPage: this.$perPage || 10,
      sortBy: 'sort_order',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      isLoading: false
    };
  },
  computed: {
    pageEnd: function pageEnd() {
      return Math.min(this.currentPage * this.perPage, this.totalRows);
    }
  },
  created: function created() {
    var _this = this;
    this._flyerSavedHandler = function (message) {
      _this.showMessage('success', message);
      _this.getFlyers();
    };
    this.$eventBus.$on('FlyerSaved', this._flyerSavedHandler);
    this.getFlyers();
  },
  beforeDestroy: function beforeDestroy() {
    this.$eventBus.$off('FlyerSaved', this._flyerSavedHandler);
  },
  methods: {
    getFlyers: function getFlyers() {
      var _this2 = this;
      this.isLoading = true;
      var url = this.$apiUrl + '/home_flyers/list';
      if (this.filter) {
        url += '?filter=' + encodeURIComponent(this.filter);
      }
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
        _this2.isLoading = false;
        var resData = response.data;
        _this2.flyers = resData.data || [];
        _this2.totalRows = _this2.flyers.length;
      })["catch"](function () {
        _this2.isLoading = false;
        _this2.flyers = [];
        _this2.totalRows = 0;
      });
    },
    toggleStatus: function toggleStatus(item) {
      var _this3 = this;
      var newStatus = item.status === 1 ? 0 : 1;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(this.$apiUrl + '/home_flyers/update_status', {
        id: item.id,
        status: newStatus
      }).then(function (res) {
        if (res.data.status === 1) {
          item.status = newStatus;
          _this3.showMessage('success', res.data.message);
        } else {
          _this3.showError(res.data.message);
        }
      })["catch"](function () {
        _this3.showError(__('something_went_wrong'));
      });
    },
    deleteFlyer: function deleteFlyer(index, id) {
      var _this4 = this;
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
          _this4.isLoading = true;
          axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(_this4.$apiUrl + '/home_flyers/delete', {
            id: id
          }).then(function (res) {
            _this4.isLoading = false;
            if (res.data.status === 1) {
              _this4.flyers.splice(index, 1);
              _this4.totalRows = _this4.flyers.length;
              _this4.showMessage('success', res.data.message);
            } else {
              _this4.showError(res.data.message);
            }
          })["catch"](function () {
            _this4.isLoading = false;
            _this4.showError(__('something_went_wrong'));
          });
        }
      });
    },
    hideModal: function hideModal() {
      this.create_new = false;
      this.edit_record = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=template&id=1b7c9810&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=template&id=1b7c9810&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    ref: "my-modal",
    attrs: {
      title: _vm.modal_title,
      scrollable: "",
      "no-close-on-backdrop": "",
      "no-fade": "",
      "static": ""
    },
    on: {
      hidden: function hidden($event) {
        return _vm.$emit("modalClose");
      }
    }
  }, [_c("div", {
    attrs: {
      slot: "modal-footer"
    },
    slot: "modal-footer"
  }, [_c("b-button", {
    attrs: {
      variant: "primary",
      disabled: _vm.isLoading
    },
    on: {
      click: function click($event) {
        return _vm.$refs["dummy_submit"].click();
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.__("save")) + "\n            "), _vm.isLoading ? _c("b-spinner", {
    attrs: {
      small: "",
      label: "Spinning"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "secondary"
    },
    on: {
      click: _vm.hideModal
    }
  }, [_vm._v(_vm._s(_vm.__("cancel")))])], 1), _vm._v(" "), _c("form", {
    ref: "my-form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveRecord.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "form-group col-12"
  }, [_c("label", [_vm._v("Flyer Title "), _c("span", {
    staticClass: "text-muted"
  }, [_vm._v("(Optional)")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "e.g. Festival Special Offer Flyer"
    },
    domProps: {
      value: _vm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-12"
  }, [_c("label", [_vm._v("Flyer Image "), !_vm.id ? _c("i", {
    staticClass: "text-danger"
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "alert alert-info py-2 px-3 mb-2",
    staticStyle: {
      "font-size": "13px"
    }
  }, [_c("i", {
    staticClass: "fa fa-info-circle mr-1"
  }), _vm._v("\n                    Recommended image dimension: "), _c("strong", [_vm._v("1200 × 650 pixels")]), _vm._v(" (JPG, PNG, WEBP, GIF, Max: 10MB)\n                ")]), _vm._v(" "), _c("input", {
    ref: "file_image",
    staticClass: "file-input",
    attrs: {
      type: "file",
      name: "flyer_image",
      accept: "image/*"
    },
    on: {
      change: _vm.handleFileUpload
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "file-input-div bg-gray-100",
    on: {
      click: function click($event) {
        return _vm.$refs.file_image.click();
      },
      drop: _vm.dropFile,
      dragover: _vm.$dragoverFile,
      dragleave: _vm.$dragleaveFile
    }
  }, [_vm.image && _vm.image.name !== "" ? [_c("label", {
    staticClass: "mb-0 text-success"
  }, [_c("i", {
    staticClass: "fa fa-check-circle mr-1"
  }), _vm._v(" " + _vm._s(_vm.image.name))])] : [_c("label", [_c("i", {
    staticClass: "fa fa-cloud-upload-alt fa-2x"
  })]), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.__("drop_files_here_or_click_to_upload")))])]], 2), _vm._v(" "), _vm.image_url ? _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "d-block text-muted small mb-1"
  }, [_vm._v("Preview:")]), _vm._v(" "), _c("div", {
    staticStyle: {
      border: "1px solid #e2e8f0",
      "border-radius": "8px",
      padding: "6px",
      background: "#fff",
      "max-width": "420px"
    }
  }, [_c("img", {
    staticStyle: {
      width: "100%",
      height: "auto",
      "aspect-ratio": "1200 / 650",
      "object-fit": "cover",
      "border-radius": "6px"
    },
    attrs: {
      src: _vm.image_url,
      alt: "Flyer Preview"
    }
  })])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-12"
  }, [_c("label", [_vm._v("Display / Sort Order "), _c("i", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sort_order,
      expression: "sort_order"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      step: "1",
      placeholder: "0",
      required: ""
    },
    domProps: {
      value: _vm.sort_order
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.sort_order = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Flyers will appear on the application in ascending order (0, 1, 2, ...).")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-12"
  }, [_c("label", {
    staticClass: "d-block"
  }, [_vm._v(_vm._s(_vm.__("status")) + " "), _c("i", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      options: [{
        text: _vm.__("active"),
        value: 1
      }, {
        text: _vm.__("deactive"),
        value: 0
      }],
      buttons: "",
      "button-variant": "outline-primary",
      required: ""
    },
    model: {
      value: _vm.status,
      callback: function callback($$v) {
        _vm.status = $$v;
      },
      expression: "status"
    }
  })], 1)]), _vm._v(" "), _c("button", {
    ref: "dummy_submit",
    staticStyle: {
      display: "none"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=template&id=f17b6980":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=template&id=f17b6980 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("Home Flyers")]), _vm._v(" "), _c("nav", {
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
  }, [_vm._v("Home Flyers")])])])]), _vm._v(" "), _c("section", {
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
      placeholder: _vm.__("search") || "Search flyers..."
    },
    domProps: {
      value: _vm.filter
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.filter = $event.target.value;
      }, _vm.getFlyers]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("button", {
    staticClass: "btn btn-figma-filter d-flex align-items-center gap-2",
    on: {
      click: function click($event) {
        _vm.create_new = true;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" "), _c("span", [_vm._v("Add New Flyer")])]), _vm._v(" "), _c("button", {
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
        return _vm.getFlyers();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-refresh"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("b-table", {
    staticClass: "figma-order-table mb-0",
    attrs: {
      items: _vm.flyers,
      fields: _vm.fields,
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
          staticClass: "text-center text-black my-4"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        }), _vm._v(" "), _c("strong", {
          staticClass: "ml-2"
        }, [_vm._v(_vm._s(_vm.__("loading")) + "...")])], 1)];
      },
      proxy: true
    }, {
      key: "empty",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center py-5"
        }, [_c("i", {
          staticClass: "fa fa-picture-o fa-3x text-muted mb-3 d-block"
        }), _vm._v(" "), _c("h5", {
          staticClass: "text-muted"
        }, [_vm._v("No Home Flyers Found")]), _vm._v(" "), _c("p", {
          staticClass: "text-secondary small"
        }, [_vm._v('Click "Add New Flyer" to upload 1200 × 650 flyer images for the application.')])])];
      },
      proxy: true
    }, {
      key: "cell(id)",
      fn: function fn(row) {
        return [_c("span", {
          staticClass: "font-weight-bold text-dark"
        }, [_vm._v("#" + _vm._s(row.item.id))])];
      }
    }, {
      key: "cell(image)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex align-items-center justify-content-center"
        }, [_c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "d-inline-block",
          attrs: {
            href: row.item.image_url,
            target: "_blank",
            title: "Click to view full size"
          }
        }, [_c("img", {
          staticStyle: {
            height: "55px",
            width: "100px",
            "object-fit": "cover",
            "border-radius": "6px",
            border: "1px solid #e2e8f0",
            "box-shadow": "0 1px 3px rgba(0,0,0,0.08)"
          },
          attrs: {
            src: row.item.image_url,
            alt: "Flyer"
          }
        })])])];
      }
    }, {
      key: "cell(name)",
      fn: function fn(row) {
        return [_c("span", [_vm._v(_vm._s(row.item.name ? row.item.name : "-"))])];
      }
    }, {
      key: "cell(sort_order)",
      fn: function fn(row) {
        return [_c("span", {
          staticClass: "badge bg-light text-dark border px-2 py-1 font-weight-bold",
          staticStyle: {
            "font-size": "13px"
          }
        }, [_vm._v("\n                                    " + _vm._s(row.item.sort_order) + "\n                                ")])];
      }
    }, {
      key: "cell(status)",
      fn: function fn(row) {
        return [_c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "btn btn-sm",
          "class": row.item.status === 1 ? "btn-outline-success" : "btn-outline-danger",
          staticStyle: {
            "border-radius": "20px",
            "font-size": "12px",
            padding: "3px 12px",
            "min-width": "85px"
          },
          attrs: {
            title: "Click to toggle active/inactive"
          },
          on: {
            click: function click($event) {
              return _vm.toggleStatus(row.item);
            }
          }
        }, [_c("i", {
          staticClass: "fa mr-1",
          "class": row.item.status === 1 ? "fa-check-circle" : "fa-times-circle"
        }), _vm._v("\n                                    " + _vm._s(row.item.status === 1 ? _vm.__("active") : _vm.__("deactive")) + "\n                                ")])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2 justify-content-center"
        }, [_c("button", {
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
              _vm.edit_record = row.item;
            }
          }
        }, [_c("base-icon", {
          attrs: {
            name: "edit icon",
            hoverName: "edit Hover",
            width: "24",
            height: "24"
          }
        })], 1), _vm._v(" "), _c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn figma-delete-btn",
          attrs: {
            title: _vm.__("delete")
          },
          on: {
            click: function click($event) {
              return _vm.deleteFlyer(row.index, row.item.id);
            }
          }
        }, [_c("base-icon", {
          attrs: {
            name: "Type=Default",
            hoverName: "Type=Hover",
            width: "24",
            height: "24"
          }
        })], 1)])];
      }
    }])
  })], 1)]), _vm._v(" "), _vm.totalRows > 0 ? _c("div", {
    staticClass: "figma-table-footer"
  }, [_c("div", {
    staticClass: "showing-results-text"
  }, [_vm._v("\n                        " + _vm._s(_vm.__("Showing Result")) + " : "), _c("span", {
    staticClass: "showing-bold"
  }, [_vm._v(_vm._s(_vm.pageEnd))]), _vm._v("\n                        " + _vm._s(_vm.__("of") || "of") + " "), _c("span", {
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
  })], 1) : _vm._e()])])]), _vm._v(" "), _vm.create_new || _vm.edit_record ? _c("app-edit-record", {
    attrs: {
      record: _vm.edit_record
    },
    on: {
      modalClose: function modalClose($event) {
        return _vm.hideModal();
      }
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.file-input-div[data-v-1b7c9810] {\n    border: 2px dashed #cbd5e1;\n    border-radius: 8px;\n    padding: 24px;\n    text-align: center;\n    cursor: pointer;\n    transition: all 0.2s ease;\n}\n.file-input-div[data-v-1b7c9810]:hover {\n    border-color: #3b82f6;\n    background-color: #f1f5f9;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_1b7c9810_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_1b7c9810_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_1b7c9810_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/HomeFlyers/Edit.vue":
/*!************************************************!*\
  !*** ./resources/js/views/HomeFlyers/Edit.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_1b7c9810_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=1b7c9810&scoped=true */ "./resources/js/views/HomeFlyers/Edit.vue?vue&type=template&id=1b7c9810&scoped=true");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/views/HomeFlyers/Edit.vue?vue&type=script&lang=js");
/* harmony import */ var _Edit_vue_vue_type_style_index_0_id_1b7c9810_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css */ "./resources/js/views/HomeFlyers/Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_1b7c9810_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_1b7c9810_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1b7c9810",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/HomeFlyers/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/HomeFlyers/HomeFlyers.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/HomeFlyers/HomeFlyers.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeFlyers_vue_vue_type_template_id_f17b6980__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeFlyers.vue?vue&type=template&id=f17b6980 */ "./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=template&id=f17b6980");
/* harmony import */ var _HomeFlyers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeFlyers.vue?vue&type=script&lang=js */ "./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeFlyers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeFlyers_vue_vue_type_template_id_f17b6980__WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeFlyers_vue_vue_type_template_id_f17b6980__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/HomeFlyers/HomeFlyers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/HomeFlyers/Edit.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/views/HomeFlyers/Edit.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeFlyers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeFlyers.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeFlyers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/HomeFlyers/Edit.vue?vue&type=template&id=1b7c9810&scoped=true":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/HomeFlyers/Edit.vue?vue&type=template&id=1b7c9810&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_1b7c9810_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_1b7c9810_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_1b7c9810_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=1b7c9810&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=template&id=1b7c9810&scoped=true");


/***/ }),

/***/ "./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=template&id=f17b6980":
/*!************************************************************************************!*\
  !*** ./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=template&id=f17b6980 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeFlyers_vue_vue_type_template_id_f17b6980__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeFlyers_vue_vue_type_template_id_f17b6980__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeFlyers_vue_vue_type_template_id_f17b6980__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeFlyers.vue?vue&type=template&id=f17b6980 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/HomeFlyers.vue?vue&type=template&id=f17b6980");


/***/ }),

/***/ "./resources/js/views/HomeFlyers/Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/HomeFlyers/Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_1b7c9810_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeFlyers/Edit.vue?vue&type=style&index=0&id=1b7c9810&scoped=true&lang=css");


/***/ })

}]);