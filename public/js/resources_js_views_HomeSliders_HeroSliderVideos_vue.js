"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_HomeSliders_HeroSliderVideos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['record'],
  data: function data() {
    return {
      isLoading: false,
      id: this.record ? this.record.id : null,
      name: this.record ? this.record.name : "",
      display_location: this.record ? this.record.display_location || 'hero_section' : 'hero_section',
      video: null,
      video_url: this.record ? this.record.video_url : null,
      status: this.record ? this.record.status : 1,
      videoError: null,
      allowedTypes: ['video/mp4', 'video/webm', 'video/ogg'],
      maxSize: 20 * 1024 * 1024
    };
  },
  computed: {
    modal_title: function modal_title() {
      return (this.id ? __('edit') : __('add')) + ' Hero Slider Video';
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
      this.$refs.file_video.files = event.dataTransfer.files;
      this.handleFileUpload();
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    handleFileUpload: function handleFileUpload() {
      var file = this.$refs.file_video.files[0];
      this.videoError = null;
      if (!file) return;
      if (!this.allowedTypes.includes(file.type)) {
        this.videoError = 'Invalid video type. Please upload MP4, WEBM, or OGG.';
        this.$refs.file_video.value = '';
        return;
      }
      if (file.size > this.maxSize) {
        this.videoError = 'Video must be 20 MB or smaller.';
        this.$refs.file_video.value = '';
        return;
      }
      this.video = file;
      this.video_url = URL.createObjectURL(file);
    },
    saveRecord: function saveRecord() {
      var _this = this;
      if (!this.name || this.name.trim() === '') {
        this.showError('Please enter video name.');
        return;
      }
      if (!this.id && !this.video) {
        this.videoError = 'Please upload a hero slider video.';
        return;
      }
      if (this.videoError) return;
      this.isLoading = true;
      var formData = new FormData();
      if (this.id) formData.append('id', this.id);
      formData.append('name', this.name);
      formData.append('display_location', this.display_location);
      if (this.video) formData.append('video', this.video);
      formData.append('status', this.status);
      var url = this.id ? this.$apiUrl + '/hero_slider_videos/update' : this.$apiUrl + '/hero_slider_videos/save';
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this.$eventBus.$emit('HeroSliderVideoSaved', data.message);
          _this.hideModal();
        } else {
          _this.showError(data.message);
          _this.isLoading = false;
        }
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.showError(error.message || __('something_went_wrong'));
      });
    }
  },
  mounted: function mounted() {
    this.showModal();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeroSliderVideoEdit_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroSliderVideoEdit.vue */ "./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    'app-edit-record': _HeroSliderVideoEdit_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      create_new: false,
      edit_record: null,
      fields: [{
        key: 'id',
        label: 'Sr. No.',
        "class": 'text-center'
      }, {
        key: 'video',
        label: 'Video',
        "class": 'text-center'
      }, {
        key: 'slider_url',
        label: __('link'),
        "class": 'text-center'
      }, {
        key: 'status',
        label: __('status'),
        "class": 'text-center'
      }, {
        key: 'actions',
        label: __('actions')
      }],
      videos: [],
      totalRows: 1,
      currentPage: 1,
      perPage: this.$perPage,
      sortBy: '',
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
    this._videoSavedHandler = function (message) {
      _this.showMessage('success', message);
      _this.getVideos();
    };
    this.$eventBus.$on('HeroSliderVideoSaved', this._videoSavedHandler);
    this.getVideos();
  },
  beforeDestroy: function beforeDestroy() {
    this.$eventBus.$off('HeroSliderVideoSaved', this._videoSavedHandler);
  },
  methods: {
    getVideos: function getVideos() {
      var _this2 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/hero_slider_videos').then(function (response) {
        _this2.isLoading = false;
        _this2.videos = response.data.data || [];
        _this2.totalRows = _this2.videos.length;
      })["catch"](function () {
        _this2.isLoading = false;
        _this2.videos = [];
        _this2.totalRows = 0;
      });
    },
    deleteVideo: function deleteVideo(index, id) {
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
        if (result.value) {
          _this3.isLoading = true;
          axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(_this3.$apiUrl + '/hero_slider_videos/delete', {
            id: id
          }).then(function (response) {
            _this3.isLoading = false;
            _this3.videos.splice(index, 1);
            _this3.totalRows = _this3.videos.length;
            _this3.showMessage('success', response.data.message);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=template&id=a44ff482":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=template&id=a44ff482 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.__("save")) + "\n            "), _vm.isLoading ? _c("b-spinner", {
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
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Name "), _c("i", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter video name",
      required: ""
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
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Where to Display "), _c("i", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.display_location,
      expression: "display_location"
    }],
    staticClass: "form-control form-select",
    attrs: {
      required: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.display_location = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "hero_section"
    }
  }, [_vm._v("Hero Section")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "home_page"
    }
  }, [_vm._v("Home Page")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "category_page"
    }
  }, [_vm._v("Category Page")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "product_page"
    }
  }, [_vm._v("Product Page")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Video "), !_vm.id ? _c("i", {
    staticClass: "text-danger"
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("p", {
    staticClass: "text-muted"
  }, [_vm._v("Allowed video: MP4, WEBM, OGG. Max 20 MB.")]), _vm._v(" "), _c("input", {
    ref: "file_video",
    staticClass: "file-input",
    attrs: {
      type: "file",
      accept: "video/mp4,video/webm,video/ogg"
    },
    on: {
      change: _vm.handleFileUpload
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "file-input-div bg-gray-100",
    on: {
      click: function click($event) {
        return _vm.$refs.file_video.click();
      },
      drop: _vm.dropFile,
      dragover: _vm.$dragoverFile,
      dragleave: _vm.$dragleaveFile
    }
  }, [_vm.video && _vm.video.name !== "" ? [_c("label", [_vm._v(_vm._s(_vm.__("selected_file_name")) + _vm._s(_vm.video.name))])] : [_c("label", [_c("i", {
    staticClass: "fa fa-cloud-upload-alt fa-2x"
  })]), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.__("drop_files_here_or_click_to_upload")))])]], 2), _vm._v(" "), _vm.videoError ? _c("p", {
    staticClass: "error"
  }, [_vm._v(_vm._s(_vm.videoError))]) : _vm._e(), _vm._v(" "), _vm.video_url ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("video", {
    staticClass: "custom-slider-image",
    attrs: {
      src: _vm.video_url,
      controls: "",
      muted: "",
      playsinline: ""
    },
    domProps: {
      muted: true
    }
  })])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(_vm._s(_vm.__("status")))]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9 text-left mt-1"
  }, [_c("b-form-radio-group", {
    attrs: {
      options: [{
        text: _vm.__("deactive"),
        value: 0
      }, {
        text: _vm.__("active"),
        value: 1
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
  })], 1)])]), _vm._v(" "), _c("button", {
    ref: "dummy_submit",
    staticStyle: {
      display: "none"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=template&id=1210b4ae":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=template&id=1210b4ae ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("Manage Hero Slider Videos")]), _vm._v(" "), _c("nav", {
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
  }, [_vm._v("Manage Hero Slider Videos")])])])]), _vm._v(" "), _c("section", {
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
  }, [_vm.$can("home_slider_image_create") ? _c("button", {
    staticClass: "btn btn-figma-filter d-flex align-items-center gap-2",
    on: {
      click: function click($event) {
        _vm.create_new = true;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("add_new")))])]) : _vm._e(), _vm._v(" "), _c("button", {
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
        return _vm.getVideos();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-refresh"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("b-table", {
    staticClass: "figma-order-table mb-0",
    attrs: {
      items: _vm.videos,
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
          staticClass: "text-center text-black my-2"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        }), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.__("loading")) + "...")])], 1)];
      },
      proxy: true
    }, {
      key: "cell(id)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s((_vm.currentPage - 1) * _vm.perPage + row.index + 1) + "\n                            ")];
      }
    }, {
      key: "cell(video)",
      fn: function fn(row) {
        return [_c("video", {
          attrs: {
            src: row.item.video_url,
            height: "70",
            controls: "",
            muted: "",
            playsinline: ""
          },
          domProps: {
            muted: true
          }
        })];
      }
    }, {
      key: "cell(status)",
      fn: function fn(row) {
        return [row.item.status === 1 ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.__("active")))]) : _c("span", {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.__("deactive")))])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2"
        }, [_vm.$can("home_slider_image_update") ? _c("button", {
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
        })], 1) : _vm._e(), _vm._v(" "), _vm.$can("home_slider_image_delete") ? _c("button", {
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
              return _vm.deleteVideo(row.index, row.item.id);
            }
          }
        }, [_c("base-icon", {
          attrs: {
            name: "Type=Default",
            hoverName: "Type=Hover",
            width: "24",
            height: "24"
          }
        })], 1) : _vm._e()])];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), _vm.create_new || _vm.edit_record ? _c("app-edit-record", {
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

/***/ "./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeroSliderVideoEdit_vue_vue_type_template_id_a44ff482__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroSliderVideoEdit.vue?vue&type=template&id=a44ff482 */ "./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=template&id=a44ff482");
/* harmony import */ var _HeroSliderVideoEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroSliderVideoEdit.vue?vue&type=script&lang=js */ "./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeroSliderVideoEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroSliderVideoEdit_vue_vue_type_template_id_a44ff482__WEBPACK_IMPORTED_MODULE_0__.render,
  _HeroSliderVideoEdit_vue_vue_type_template_id_a44ff482__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/HomeSliders/HeroSliderVideoEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/HomeSliders/HeroSliderVideos.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/HomeSliders/HeroSliderVideos.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeroSliderVideos_vue_vue_type_template_id_1210b4ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroSliderVideos.vue?vue&type=template&id=1210b4ae */ "./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=template&id=1210b4ae");
/* harmony import */ var _HeroSliderVideos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroSliderVideos.vue?vue&type=script&lang=js */ "./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeroSliderVideos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroSliderVideos_vue_vue_type_template_id_1210b4ae__WEBPACK_IMPORTED_MODULE_0__.render,
  _HeroSliderVideos_vue_vue_type_template_id_1210b4ae__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/HomeSliders/HeroSliderVideos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderVideoEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeroSliderVideoEdit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderVideoEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderVideos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeroSliderVideos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderVideos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=template&id=a44ff482":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=template&id=a44ff482 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderVideoEdit_vue_vue_type_template_id_a44ff482__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderVideoEdit_vue_vue_type_template_id_a44ff482__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderVideoEdit_vue_vue_type_template_id_a44ff482__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeroSliderVideoEdit.vue?vue&type=template&id=a44ff482 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideoEdit.vue?vue&type=template&id=a44ff482");


/***/ }),

/***/ "./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=template&id=1210b4ae":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=template&id=1210b4ae ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderVideos_vue_vue_type_template_id_1210b4ae__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderVideos_vue_vue_type_template_id_1210b4ae__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSliderVideos_vue_vue_type_template_id_1210b4ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeroSliderVideos.vue?vue&type=template&id=1210b4ae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/HomeSliders/HeroSliderVideos.vue?vue&type=template&id=1210b4ae");


/***/ })

}]);