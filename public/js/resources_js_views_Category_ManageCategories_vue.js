"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Category_ManageCategories_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/TranslationHelper.js */ "./resources/js/mixins/TranslationHelper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    inlineMode: {
      type: Boolean,
      "default": false
    },
    record: {
      type: Object,
      "default": null
    },
    categoryLevel: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      isLoading: false,
      isLoadingData: true,
      // Start with loading state
      image: null,
      // Basic fields
      id: this.record ? this.record.id : null,
      slug: this.record ? this.record.slug : null,
      image_url: this.record ? this.record.image_url : null,
      status: this.record ? this.record.status : 1,
      parent_id: this.record ? this.record.parent_id : 0,
      error: null,
      parent_categories: null,
      // Multi-language support
      activeLanguageTab: 0,
      translations: {},
      defaultLanguageId: null,
      languages: [],
      translatableFields: ['name', 'meta_title', 'meta_keywords', 'schema_markup', 'meta_description'],
      loadingEmpty: false,
      loadingOverwrite: false
    };
  },
  mixins: [_mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.$apiUrl = '/api';
  },
  computed: {
    modal_title: function modal_title() {
      var label = 'Category';
      if (this.categoryLevel === 1) label = 'Sub Category';else if (this.categoryLevel === 2) label = 'Sub Sub Category';else if (this.categoryLevel >= 3) label = 'Sub Sub Sub Category';
      return this.id ? "Edit ".concat(label) : "Add ".concat(label);
    },
    dynamicNameLabel: function dynamicNameLabel() {
      if (this.categoryLevel === 1) return 'Sub Category Name';
      if (this.categoryLevel === 2) return 'Sub Sub Category Name';
      if (this.categoryLevel >= 3) return 'Sub Sub Sub Category Name';
      return 'Category Name';
    },
    dynamicNamePlaceholder: function dynamicNamePlaceholder() {
      if (this.categoryLevel === 1) return 'Enter Sub Category Name';
      if (this.categoryLevel === 2) return 'Enter Sub Sub Category Name';
      if (this.categoryLevel >= 3) return 'Enter Sub Sub Sub Category Name';
      return 'Enter Category Name';
    },
    defaultLanguage: function defaultLanguage() {
      var _this = this;
      return this.languages.find(function (language) {
        return Number(language.id) === Number(_this.defaultLanguageId);
      }) || null;
    }
  },
  methods: {
    // Used by TranslationHelper mixin (Translate buttons). Validates default language is filled.
    validateDefaultLanguageForTranslation: function validateDefaultLanguageForTranslation() {
      return this.validateDefaultLanguage();
    },
    deferDataLoad: function deferDataLoad() {
      var _this2 = this;
      this.isLoadingData = true;

      // Load languages and parent categories in parallel
      Promise.all([this.fetchActiveLanguages(), this.getParentCategories()]).then(function () {
        // Find default language
        var defaultLang = _this2.languages.find(function (lang) {
          return lang.is_default === 1;
        });
        if (defaultLang) {
          _this2.defaultLanguageId = defaultLang.id;
        }

        // Initialize translations efficiently (single operation)
        _this2.initializeTranslations();

        // Load translations only if editing
        if (_this2.id) {
          return _this2.loadCategoryWithTranslations();
        } else {
          // For new category, no translations to load
          _this2.isLoadingData = false;
        }
      })["catch"](function (error) {
        console.error('Error loading data:', error);
        _this2.isLoadingData = false;
      });
    },
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        // Fetch from API directly - no caching
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(_this3.$apiUrl + '/active_languages').then(function (response) {
          if (response.data.data) {
            _this3.languages = response.data.data;
            resolve(_this3.languages);
          } else {
            reject(new Error('No languages found'));
          }
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    initializeTranslations: function initializeTranslations() {
      // Create all translations in one object assignment
      var allTranslations = {};
      this.languages.forEach(function (language) {
        allTranslations[language.id] = {
          name: '',
          meta_title: '',
          meta_keywords: '',
          schema_markup: '',
          meta_description: ''
        };
      });
      // Single reactive assignment
      this.translations = allTranslations;
    },
    loadCategoryWithTranslations: function loadCategoryWithTranslations() {
      var _this4 = this;
      return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/categories', {
        params: {
          id: this.id
        }
      }).then(function (response) {
        if (response.data.data) {
          // Response is now an array of categories, get the first one (filtered by id)
          var categories = Array.isArray(response.data.data) ? response.data.data : [response.data.data];
          var category = categories.length > 0 ? categories[0] : null;
          if (!category) {
            _this4.isLoadingData = false;
            return;
          }

          // Load base data
          _this4.slug = category.slug;
          _this4.parent_id = category.parent_id;
          _this4.image_url = category.image_url;
          _this4.status = category.status;

          // Load translations from the category object
          var updatedTranslations = _objectSpread({}, _this4.translations);
          if (category.translations && Array.isArray(category.translations)) {
            category.translations.forEach(function (trans) {
              var langId = trans.language_id;
              updatedTranslations[langId] = {
                name: trans.name || '',
                meta_title: trans.meta_title || '',
                meta_keywords: trans.meta_keywords || '',
                schema_markup: trans.schema_markup || '',
                meta_description: trans.meta_description || ''
              };
            });
          }
          _this4.languages.forEach(function (language) {
            if (!updatedTranslations[language.id] || !updatedTranslations[language.id].name) {
              if (language.is_default) {
                updatedTranslations[language.id] = {
                  name: category.name || '',
                  meta_title: category.meta_title || '',
                  meta_keywords: category.meta_keywords || '',
                  schema_markup: category.schema_markup || '',
                  meta_description: category.meta_description || ''
                };
              }
            }
          });

          // Single assignment for reactivity
          _this4.translations = updatedTranslations;
        }
        _this4.isLoadingData = false;
      })["catch"](function (error) {
        _this4.isLoadingData = false;
        throw error;
      });
    },
    createSlug: function createSlug() {
      var _this5 = this;
      if (!this.defaultLanguageId) return;
      var name = this.translations[this.defaultLanguageId].name;
      if (name !== "") {
        var slug = name.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

        // Check for uniqueness
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + "/categories/check-slug/".concat(slug)).then(function (response) {
          if (response.data.unique) {
            _this5.slug = slug;
          } else {
            _this5.slug = slug + '-' + response.data.count;
          }
        })["catch"](function (error) {
          console.error('Error checking slug uniqueness: ' + error);
        });
      }
    },
    getParentCategories: function getParentCategories() {
      var _this6 = this;
      return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/categories/options', {
        params: {
          exclude_id: this.record ? this.record.id : 0
        }
      }).then(function (response) {
        _this6.parent_categories = response.data;
      });
    },
    showModal: function showModal() {
      if (!this.inlineMode && this.$refs['my-modal']) {
        this.$refs['my-modal'].show();
      }
    },
    hideModal: function hideModal() {
      if (this.inlineMode) {
        this.$emit('modalClose');
      } else if (this.$refs['my-modal']) {
        this.$refs['my-modal'].hide();
      }
    },
    handleDragOver: function handleDragOver(event) {
      event.preventDefault();
      event.currentTarget.classList.add('bg-green-300');
      event.currentTarget.classList.remove('bg-gray-100');
    },
    handleDragLeave: function handleDragLeave(event) {
      event.preventDefault();
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    dropFile: function dropFile(event) {
      event.preventDefault();

      // Get the file input element (handle array case from lazy-loaded tabs)
      var fileInputRef = this.$refs.file_image;
      var fileInput = Array.isArray(fileInputRef) ? fileInputRef[0] : fileInputRef;
      if (fileInput) {
        fileInput.files = event.dataTransfer.files;
        this.handleFileUpload();
      }
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    handleFileUpload: function handleFileUpload() {
      // Get the file input element (handle array case from lazy-loaded tabs)
      var fileInputRef = this.$refs.file_image;
      var fileInput = Array.isArray(fileInputRef) ? fileInputRef[0] : fileInputRef;

      // Check if fileInput exists and has files
      if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        return;
      }
      var file = fileInput.files[0];

      // Reset previous error message
      this.error = null;

      // Check if a file was selected
      if (!file) return;

      // Perform image validation
      var validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        this.error = "Invalid file type. Please upload a JPEG, PNG, JPG, GIF, WEBP or SVG image.";
        return;
      }
      var maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        this.error = "File size exceeds the maximum allowed limit (2MB).";
        return;
      }

      // Create a URL for the uploaded image and display it
      this.imageUrl = URL.createObjectURL(file);
      this.image = file;
      this.image_url = URL.createObjectURL(file);
    },
    validateDefaultLanguage: function validateDefaultLanguage() {
      if (!this.defaultLanguageId) {
        this.showError(__('default_language_not_found'));
        return false;
      }
      var defaultTranslation = this.translations[this.defaultLanguageId];

      // Check required fields for default language - show generic message for any missing field
      if (!defaultTranslation.name || defaultTranslation.name.trim() === '') {
        this.switchToDefaultLanguageTab();
        this.showError(__('please_fill_default_language_required_fields'));
        return false;
      }
      if (!this.id && !this.image && !this.image_url) {
        this.switchToDefaultLanguageTab();
        this.showError(__('please_fill_default_language_required_fields'));
        return false;
      }
      return true;
    },
    triggerFileInput: function triggerFileInput() {
      var _this7 = this;
      // Use nextTick to ensure DOM is ready
      this.$nextTick(function () {
        var fileInput = _this7.$refs.file_image;
        if (fileInput) {
          // Handle both direct element and array of elements
          var element = Array.isArray(fileInput) ? fileInput[0] : fileInput;
          if (element && element.click) {
            element.click();
          }
        }
      });
    },
    // Switches to default language tab so user sees the required fields. Caller shows the specific error.
    switchToDefaultLanguageTab: function switchToDefaultLanguageTab() {
      var _this8 = this;
      var defaultLangIndex = this.languages.findIndex(function (lang) {
        return lang.id === _this8.defaultLanguageId;
      });
      if (defaultLangIndex !== -1) {
        this.activeLanguageTab = defaultLangIndex;
      }
    },
    saveRecord: function saveRecord() {
      var _this9 = this;
      if (!this.validateDefaultLanguage()) return;
      var vm = this;
      this.isLoading = true;
      var languagesToSave = [];
      var defaultLang = this.languages.find(function (lang) {
        return lang.is_default;
      });

      // Add default language first
      if (defaultLang) {
        languagesToSave.push(defaultLang);
      }

      // Add other languages that have data
      this.languages.forEach(function (language) {
        if (language.is_default) return; // Skip default, already added

        var translation = _this9.translations[language.id];
        var hasData = _this9.translatableFields.some(function (field) {
          var val = translation[field];
          return val != null && String(val).trim() !== '';
        });
        if (hasData || _this9.id) {
          languagesToSave.push(language);
        }
      });

      // Save sequentially: default language first, then others
      var saveSequentially = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var categoryId, i, language, translation, formData, url, response, _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.p = _context.n) {
              case 0:
                categoryId = _this9.id; // For edit mode
                i = 0;
              case 1:
                if (!(i < languagesToSave.length)) {
                  _context.n = 6;
                  break;
                }
                language = languagesToSave[i];
                translation = _this9.translations[language.id];
                formData = new FormData(); // Basic fields
                if (categoryId) {
                  formData.append('id', categoryId);
                }
                formData.append('language_id', language.id);
                formData.append('slug', _this9.slug);
                formData.append('status', _this9.status);
                formData.append('parent_id', parseInt(_this9.parent_id) || 0);

                // Translatable fields
                formData.append('name', translation.name || '');
                formData.append('meta_title', translation.meta_title || '');
                formData.append('meta_keywords', translation.meta_keywords || '');
                formData.append('schema_markup', translation.schema_markup || '');
                formData.append('meta_description', translation.meta_description || '');

                // Image (only send with default language)
                if (language.is_default && _this9.image) {
                  formData.append('image', _this9.image);
                }
                url = _this9.$apiUrl + '/categories/save';
                if (categoryId) {
                  url = _this9.$apiUrl + '/categories/update';
                }
                _context.p = 2;
                _context.n = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(url, formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });
              case 3:
                response = _context.v;
                // If this was the first save (default language), get the category ID
                if (!categoryId && response.data.data && response.data.data.id) {
                  categoryId = response.data.data.id;
                }
                _context.n = 5;
                break;
              case 4:
                _context.p = 4;
                _t = _context.v;
                console.error('Save failed:', _t);
                throw _t;
              case 5:
                i++;
                _context.n = 1;
                break;
              case 6:
                return _context.a(2, true);
            }
          }, _callee, null, [[2, 4]]);
        }));
        return function saveSequentially() {
          return _ref.apply(this, arguments);
        };
      }();

      // Execute sequential save
      saveSequentially().then(function () {
        var message = __('category_saved_successfully') || 'Category saved successfully';
        // Emit to parent only (parent shows toast once)
        vm.$emit('saved', message);
        // Notify other pages to refresh list only (no toast)
        vm.$eventBus.$emit('categorySaved');
        vm.hideModal();
        vm.$router.push({
          path: '/manage_categories'
        });
      })["catch"](function (error) {
        vm.isLoading = false;
        if (error.response && error.response.data && error.response.data.message) {
          vm.showError(error.response.data.message);
        } else if (error.request && error.request.statusText) {
          vm.showError(error.request.statusText);
        } else if (error.message) {
          vm.showError(error.message);
        } else {
          vm.showError(__('something_went_wrong'));
        }
      });
    }
  },
  mounted: function mounted() {
    var _this0 = this;
    this.showModal();
    this.$nextTick(function () {
      _this0.deferDataLoad();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/TranslationHelper.js */ "./resources/js/mixins/TranslationHelper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    record: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      isLoading: false,
      isLoadingData: true,
      // Start with loading state
      image: null,
      // Basic fields
      id: this.record ? this.record.id : null,
      slug: this.record ? this.record.slug : null,
      image_url: this.record ? this.record.image_url : null,
      status: this.record ? this.record.status : 1,
      parent_id: this.record ? this.record.parent_id : 0,
      parent_category_id: 0,
      parent_subcategory_id: 0,
      error: null,
      parent_categories: [],
      parent_subcategories: [],
      parent_sub_subcategories: [],
      // Multi-language support
      activeLanguageTab: 0,
      translations: {},
      defaultLanguageId: null,
      languages: [],
      translatableFields: ['name', 'meta_title', 'meta_keywords', 'schema_markup', 'meta_description'],
      loadingEmpty: false,
      loadingOverwrite: false
    };
  },
  mixins: [_mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.$apiUrl = '/api';
  },
  computed: {
    modal_title: function modal_title() {
      var title = this.id ? 'Edit Sub Sub Sub Category' : 'Add Sub Sub Sub Category';
      return title;
    },
    defaultLanguage: function defaultLanguage() {
      var _this = this;
      return this.languages.find(function (language) {
        return Number(language.id) === Number(_this.defaultLanguageId);
      }) || null;
    },
    filteredParentSubcategories: function filteredParentSubcategories() {
      var _this2 = this;
      return this.parent_subcategories.filter(function (subcategory) {
        return Number(subcategory.parent_id) === Number(_this2.parent_category_id);
      });
    },
    filteredParentSubSubcategories: function filteredParentSubSubcategories() {
      var _this3 = this;
      return this.parent_sub_subcategories.filter(function (subSubcategory) {
        return Number(subSubcategory.parent_id) === Number(_this3.parent_subcategory_id);
      });
    }
  },
  watch: {
    parent_category_id: function parent_category_id() {
      var _this4 = this;
      var hasSelectedSubcategory = this.filteredParentSubcategories.some(function (subcategory) {
        return Number(subcategory.id) === Number(_this4.parent_subcategory_id);
      });
      if (!hasSelectedSubcategory) {
        this.parent_subcategory_id = 0;
        this.parent_id = 0;
      }
    },
    parent_subcategory_id: function parent_subcategory_id() {
      var _this5 = this;
      var hasSelectedSubSubcategory = this.filteredParentSubSubcategories.some(function (subSubcategory) {
        return Number(subSubcategory.id) === Number(_this5.parent_id);
      });
      if (!hasSelectedSubSubcategory) {
        this.parent_id = 0;
      }
    }
  },
  methods: {
    // Used by TranslationHelper mixin (Translate buttons). Validates default language is filled.
    validateDefaultLanguageForTranslation: function validateDefaultLanguageForTranslation() {
      return this.validateDefaultLanguage();
    },
    deferDataLoad: function deferDataLoad() {
      var _this6 = this;
      this.isLoadingData = true;

      // Load languages and parent subcategories in parallel
      Promise.all([this.fetchActiveLanguages(), this.getParentSubcategories()]).then(function () {
        // Find default language
        var defaultLang = _this6.languages.find(function (lang) {
          return lang.is_default === 1;
        });
        if (defaultLang) {
          _this6.defaultLanguageId = defaultLang.id;
        }

        // Initialize translations efficiently (single operation)
        _this6.initializeTranslations();

        // Load translations only if editing
        if (_this6.id) {
          return _this6.loadCategoryWithTranslations();
        } else {
          // For new category, no translations to load
          _this6.isLoadingData = false;
        }
      })["catch"](function (error) {
        console.error('Error loading data:', error);
        _this6.isLoadingData = false;
      });
    },
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this7 = this;
      return new Promise(function (resolve, reject) {
        // Fetch from API directly - no caching
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(_this7.$apiUrl + '/active_languages').then(function (response) {
          if (response.data.data) {
            _this7.languages = response.data.data;
            resolve(_this7.languages);
          } else {
            reject(new Error('No languages found'));
          }
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    initializeTranslations: function initializeTranslations() {
      // Create all translations in one object assignment
      var allTranslations = {};
      this.languages.forEach(function (language) {
        allTranslations[language.id] = {
          name: '',
          meta_title: '',
          meta_keywords: '',
          schema_markup: '',
          meta_description: ''
        };
      });
      // Single reactive assignment
      this.translations = allTranslations;
    },
    loadCategoryWithTranslations: function loadCategoryWithTranslations() {
      var _this8 = this;
      return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/sub_sub_subcategories', {
        params: {
          id: this.id
        }
      }).then(function (response) {
        if (response.data.data) {
          // Response is now an array of categories, get the first one (filtered by id)
          var categories = Array.isArray(response.data.data) ? response.data.data : [response.data.data];
          var category = categories.length > 0 ? categories[0] : null;
          if (!category) {
            _this8.isLoadingData = false;
            return;
          }

          // Load base data
          _this8.slug = category.slug;
          _this8.parent_id = category.parent_id;
          _this8.setParentCategoryChainFromSubSubcategory();
          _this8.image_url = category.image_url;
          _this8.status = category.status;

          // Load translations from the category object
          var updatedTranslations = _objectSpread({}, _this8.translations);
          if (category.translations && Array.isArray(category.translations)) {
            category.translations.forEach(function (trans) {
              var langId = trans.language_id;
              updatedTranslations[langId] = {
                name: trans.name || '',
                meta_title: trans.meta_title || '',
                meta_keywords: trans.meta_keywords || '',
                schema_markup: trans.schema_markup || '',
                meta_description: trans.meta_description || ''
              };
            });
          }
          _this8.languages.forEach(function (language) {
            if (!updatedTranslations[language.id] || !updatedTranslations[language.id].name) {
              if (language.is_default) {
                updatedTranslations[language.id] = {
                  name: category.name || '',
                  meta_title: category.meta_title || '',
                  meta_keywords: category.meta_keywords || '',
                  schema_markup: category.schema_markup || '',
                  meta_description: category.meta_description || ''
                };
              }
            }
          });

          // Single assignment for reactivity
          _this8.translations = updatedTranslations;
        }
        _this8.isLoadingData = false;
      })["catch"](function (error) {
        _this8.isLoadingData = false;
        throw error;
      });
    },
    createSlug: function createSlug() {
      var _this9 = this;
      if (!this.defaultLanguageId) return Promise.resolve();
      var name = this.translations[this.defaultLanguageId].name;
      if (name !== "") {
        var slug = name.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

        // Check for uniqueness
        return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + "/categories/check-slug/".concat(slug)).then(function (response) {
          if (response.data.unique) {
            _this9.slug = slug;
          } else {
            _this9.slug = slug + '-' + response.data.count;
          }
        })["catch"](function (error) {
          console.error('Error checking slug uniqueness: ' + error);
          // Fallback: use slug without uniqueness check
          _this9.slug = slug;
        });
      }
      return Promise.resolve();
    },
    getParentSubcategories: function getParentSubcategories() {
      var _this0 = this;
      return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/categories', {
        params: {
          status: 1,
          limit: 1000
        }
      }).then(function (response) {
        var data = response.data || {};
        var allCategories = Array.isArray(data.data) ? data.data : [];
        var categoryMap = allCategories.reduce(function (map, category) {
          map[category.id] = category;
          return map;
        }, {});
        _this0.parent_categories = allCategories.filter(function (cat) {
          return Number(cat.parent_id) === 0;
        });
        _this0.parent_subcategories = allCategories.filter(function (cat) {
          var parent = categoryMap[cat.parent_id];
          return Number(cat.parent_id) > 0 && parent && Number(parent.parent_id) === 0;
        });
        var subcategoryIds = _this0.parent_subcategories.map(function (cat) {
          return Number(cat.id);
        });
        _this0.parent_sub_subcategories = allCategories.filter(function (cat) {
          return subcategoryIds.includes(Number(cat.parent_id));
        });
        _this0.setParentCategoryChainFromSubSubcategory();
      });
    },
    setParentCategoryChainFromSubSubcategory: function setParentCategoryChainFromSubSubcategory() {
      var _this1 = this;
      var selectedSubSubcategory = this.parent_sub_subcategories.find(function (subSubcategory) {
        return Number(subSubcategory.id) === Number(_this1.parent_id);
      });
      this.parent_subcategory_id = selectedSubSubcategory ? selectedSubSubcategory.parent_id : 0;
      var selectedSubcategory = this.parent_subcategories.find(function (subcategory) {
        return Number(subcategory.id) === Number(_this1.parent_subcategory_id);
      });
      this.parent_category_id = selectedSubcategory ? selectedSubcategory.parent_id : 0;
    },
    showModal: function showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    handleDragOver: function handleDragOver(event) {
      event.preventDefault();
      event.currentTarget.classList.add('bg-green-300');
      event.currentTarget.classList.remove('bg-gray-100');
    },
    handleDragLeave: function handleDragLeave(event) {
      event.preventDefault();
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    dropFile: function dropFile(event) {
      event.preventDefault();

      // Get the file input element (handle array case from lazy-loaded tabs)
      var fileInputRef = this.$refs.file_image;
      var fileInput = Array.isArray(fileInputRef) ? fileInputRef[0] : fileInputRef;
      if (fileInput) {
        fileInput.files = event.dataTransfer.files;
        this.handleFileUpload();
      }
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    handleFileUpload: function handleFileUpload() {
      // Get the file input element (handle array case from lazy-loaded tabs)
      var fileInputRef = this.$refs.file_image;
      var fileInput = Array.isArray(fileInputRef) ? fileInputRef[0] : fileInputRef;

      // Check if fileInput exists and has files
      if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        return;
      }
      var file = fileInput.files[0];

      // Reset previous error message
      this.error = null;

      // Check if a file was selected
      if (!file) return;

      // Perform image validation
      var validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        this.error = "Invalid file type. Please upload a JPEG, PNG, JPG, GIF, WEBP or SVG image.";
        return;
      }
      var maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        this.error = "File size exceeds the maximum allowed limit (2MB).";
        return;
      }

      // Create a URL for the uploaded image and display it
      this.imageUrl = URL.createObjectURL(file);
      this.image = file;
      this.image_url = URL.createObjectURL(file);
    },
    validateDefaultLanguage: function validateDefaultLanguage() {
      if (!this.defaultLanguageId) {
        this.showError(__('default_language_not_found'));
        return false;
      }
      var defaultTranslation = this.translations[this.defaultLanguageId];

      // Check required fields for default language - show generic message for any missing field
      if (!defaultTranslation.name || defaultTranslation.name.trim() === '') {
        this.switchToDefaultLanguageTab();
        this.showError(__('please_fill_default_language_required_fields'));
        return false;
      }
      if (Number(this.parent_category_id) === 0) {
        this.switchToDefaultLanguageTab();
        this.showError(__('please select parent category'));
        return false;
      }
      if (Number(this.parent_subcategory_id) === 0) {
        this.switchToDefaultLanguageTab();
        this.showError('Please select Sub Category');
        return false;
      }
      if (Number(this.parent_id) === 0) {
        this.switchToDefaultLanguageTab();
        this.showError('Please select Sub Sub Category');
        return false;
      }
      return true;
    },
    triggerFileInput: function triggerFileInput() {
      var _this10 = this;
      // Use nextTick to ensure DOM is ready
      this.$nextTick(function () {
        var fileInput = _this10.$refs.file_image;
        if (fileInput) {
          // Handle both direct element and array of elements
          var element = Array.isArray(fileInput) ? fileInput[0] : fileInput;
          if (element && element.click) {
            element.click();
          }
        }
      });
    },
    // Switches to default language tab so user sees the required fields. Caller shows the specific error.
    switchToDefaultLanguageTab: function switchToDefaultLanguageTab() {
      var _this11 = this;
      var defaultLangIndex = this.languages.findIndex(function (lang) {
        return lang.id === _this11.defaultLanguageId;
      });
      if (defaultLangIndex !== -1) {
        this.activeLanguageTab = defaultLangIndex;
      }
    },
    saveRecord: function () {
      var _saveRecord = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this12 = this;
        var vm, languagesToSave, defaultLang, saveSequentially;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (this.validateDefaultLanguage()) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              vm = this; // Generate slug before saving
              _context2.n = 2;
              return this.createSlug();
            case 2:
              this.isLoading = true;
              languagesToSave = [];
              defaultLang = this.languages.find(function (lang) {
                return lang.is_default;
              }); // Add default language first
              if (defaultLang) {
                languagesToSave.push(defaultLang);
              }

              // Add other languages that have data
              this.languages.forEach(function (language) {
                if (language.is_default) return; // Skip default, already added

                var translation = _this12.translations[language.id];
                var hasData = _this12.translatableFields.some(function (field) {
                  var val = translation[field];
                  return val != null && String(val).trim() !== '';
                });
                if (hasData || _this12.id) {
                  languagesToSave.push(language);
                }
              });

              // Save sequentially: default language first, then others
              saveSequentially = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                  var categoryId, i, language, translation, formData, url, response, _t;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.p = _context.n) {
                      case 0:
                        categoryId = _this12.id; // For edit mode
                        i = 0;
                      case 1:
                        if (!(i < languagesToSave.length)) {
                          _context.n = 7;
                          break;
                        }
                        language = languagesToSave[i];
                        translation = _this12.translations[language.id];
                        formData = new FormData(); // Basic fields
                        if (categoryId) {
                          formData.append('id', categoryId);
                        }
                        formData.append('language_id', language.id);
                        formData.append('slug', _this12.slug);
                        formData.append('status', _this12.status);
                        formData.append('parent_id', parseInt(_this12.parent_id) || 0);

                        // Translatable fields
                        formData.append('name', translation.name || '');
                        formData.append('subtitle', '');
                        formData.append('meta_title', translation.meta_title || '');
                        formData.append('meta_keywords', translation.meta_keywords || '');
                        formData.append('schema_markup', translation.schema_markup || '');
                        formData.append('meta_description', translation.meta_description || '');

                        // Image (only send with default language)
                        if (language.is_default && _this12.image) {
                          formData.append('image', _this12.image);
                        }
                        url = _this12.$apiUrl + '/sub_sub_subcategories/save';
                        if (categoryId) {
                          url = _this12.$apiUrl + '/sub_sub_subcategories/update';
                        }
                        _context.p = 2;
                        _context.n = 3;
                        return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(url, formData, {
                          headers: {
                            'Content-Type': 'multipart/form-data'
                          }
                        });
                      case 3:
                        response = _context.v;
                        if (!(!response.data || Number(response.data.status) !== 1)) {
                          _context.n = 4;
                          break;
                        }
                        throw new Error(response.data && response.data.message || __('something_went_wrong'));
                      case 4:
                        // If this was the first save (default language), get the category ID
                        if (!categoryId && response.data.data && response.data.data.id) {
                          categoryId = response.data.data.id;
                        }
                        _context.n = 6;
                        break;
                      case 5:
                        _context.p = 5;
                        _t = _context.v;
                        console.error('Save failed:', _t);
                        throw _t;
                      case 6:
                        i++;
                        _context.n = 1;
                        break;
                      case 7:
                        return _context.a(2, true);
                    }
                  }, _callee, null, [[2, 5]]);
                }));
                return function saveSequentially() {
                  return _ref.apply(this, arguments);
                };
              }(); // Execute sequential save
              saveSequentially().then(function () {
                var message = 'Sub Sub Sub Category saved successfully';
                // Emit to parent only (parent shows toast once)
                vm.$emit('saved', message);
                // Notify other pages to refresh list only (no toast)
                vm.$eventBus.$emit('categorySaved');
                vm.hideModal();
                if (vm.$route.name !== 'manage_categories') {
                  vm.$router.push({
                    path: '/manage_sub_sub_subcategories'
                  });
                }
              })["catch"](function (error) {
                vm.isLoading = false;
                if (error.response && error.response.data && error.response.data.message) {
                  vm.showError(error.response.data.message);
                } else if (error.request && error.request.statusText) {
                  vm.showError(error.request.statusText);
                } else if (error.message) {
                  vm.showError(error.message);
                } else {
                  vm.showError(__('something_went_wrong'));
                }
              });
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function saveRecord() {
        return _saveRecord.apply(this, arguments);
      }
      return saveRecord;
    }()
  },
  mounted: function mounted() {
    var _this13 = this;
    this.showModal();
    this.$nextTick(function () {
      _this13.deferDataLoad();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/TranslationHelper.js */ "./resources/js/mixins/TranslationHelper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    record: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      isLoading: false,
      isLoadingData: true,
      // Start with loading state
      image: null,
      // Basic fields
      id: this.record ? this.record.id : null,
      slug: this.record ? this.record.slug : null,
      image_url: this.record ? this.record.image_url : null,
      status: this.record ? this.record.status : 1,
      parent_id: this.record ? this.record.parent_id : 0,
      parent_category_id: 0,
      error: null,
      parent_categories: [],
      parent_subcategories: [],
      // Multi-language support
      activeLanguageTab: 0,
      translations: {},
      defaultLanguageId: null,
      languages: [],
      translatableFields: ['name', 'meta_title', 'meta_keywords', 'schema_markup', 'meta_description'],
      loadingEmpty: false,
      loadingOverwrite: false
    };
  },
  mixins: [_mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.$apiUrl = '/api';
  },
  computed: {
    modal_title: function modal_title() {
      var title = this.id ? __('Edit sub sub category') : __('Add Sub Sub category');
      return title;
    },
    defaultLanguage: function defaultLanguage() {
      var _this = this;
      return this.languages.find(function (language) {
        return Number(language.id) === Number(_this.defaultLanguageId);
      }) || null;
    },
    filteredParentSubcategories: function filteredParentSubcategories() {
      var _this2 = this;
      return this.parent_subcategories.filter(function (subcategory) {
        return Number(subcategory.parent_id) === Number(_this2.parent_category_id);
      });
    }
  },
  watch: {
    parent_category_id: function parent_category_id() {
      var _this3 = this;
      var hasSelectedSubcategory = this.filteredParentSubcategories.some(function (subcategory) {
        return Number(subcategory.id) === Number(_this3.parent_id);
      });
      if (!hasSelectedSubcategory) {
        this.parent_id = 0;
      }
    }
  },
  methods: {
    // Used by TranslationHelper mixin (Translate buttons). Validates default language is filled.
    validateDefaultLanguageForTranslation: function validateDefaultLanguageForTranslation() {
      return this.validateDefaultLanguage();
    },
    deferDataLoad: function deferDataLoad() {
      var _this4 = this;
      this.isLoadingData = true;

      // Load languages and parent subcategories in parallel
      Promise.all([this.fetchActiveLanguages(), this.getParentSubcategories()]).then(function () {
        // Find default language
        var defaultLang = _this4.languages.find(function (lang) {
          return lang.is_default === 1;
        });
        if (defaultLang) {
          _this4.defaultLanguageId = defaultLang.id;
        }

        // Initialize translations efficiently (single operation)
        _this4.initializeTranslations();

        // Load translations only if editing
        if (_this4.id) {
          return _this4.loadCategoryWithTranslations();
        } else {
          // For new category, no translations to load
          _this4.isLoadingData = false;
        }
      })["catch"](function (error) {
        console.error('Error loading data:', error);
        _this4.isLoadingData = false;
      });
    },
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this5 = this;
      return new Promise(function (resolve, reject) {
        // Fetch from API directly - no caching
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(_this5.$apiUrl + '/active_languages').then(function (response) {
          if (response.data.data) {
            _this5.languages = response.data.data;
            resolve(_this5.languages);
          } else {
            reject(new Error('No languages found'));
          }
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    initializeTranslations: function initializeTranslations() {
      // Create all translations in one object assignment
      var allTranslations = {};
      this.languages.forEach(function (language) {
        allTranslations[language.id] = {
          name: '',
          meta_title: '',
          meta_keywords: '',
          schema_markup: '',
          meta_description: ''
        };
      });
      // Single reactive assignment
      this.translations = allTranslations;
    },
    loadCategoryWithTranslations: function loadCategoryWithTranslations() {
      var _this6 = this;
      return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/categories', {
        params: {
          id: this.id
        }
      }).then(function (response) {
        if (response.data.data) {
          // Response is now an array of categories, get the first one (filtered by id)
          var categories = Array.isArray(response.data.data) ? response.data.data : [response.data.data];
          var category = categories.length > 0 ? categories[0] : null;
          if (!category) {
            _this6.isLoadingData = false;
            return;
          }

          // Load base data
          _this6.slug = category.slug;
          _this6.parent_id = category.parent_id;
          _this6.setParentCategoryFromSubcategory();
          _this6.image_url = category.image_url;
          _this6.status = category.status;

          // Load translations from the category object
          var updatedTranslations = _objectSpread({}, _this6.translations);
          if (category.translations && Array.isArray(category.translations)) {
            category.translations.forEach(function (trans) {
              var langId = trans.language_id;
              updatedTranslations[langId] = {
                name: trans.name || '',
                meta_title: trans.meta_title || '',
                meta_keywords: trans.meta_keywords || '',
                schema_markup: trans.schema_markup || '',
                meta_description: trans.meta_description || ''
              };
            });
          }
          _this6.languages.forEach(function (language) {
            if (!updatedTranslations[language.id] || !updatedTranslations[language.id].name) {
              if (language.is_default) {
                updatedTranslations[language.id] = {
                  name: category.name || '',
                  meta_title: category.meta_title || '',
                  meta_keywords: category.meta_keywords || '',
                  schema_markup: category.schema_markup || '',
                  meta_description: category.meta_description || ''
                };
              }
            }
          });

          // Single assignment for reactivity
          _this6.translations = updatedTranslations;
        }
        _this6.isLoadingData = false;
      })["catch"](function (error) {
        _this6.isLoadingData = false;
        throw error;
      });
    },
    createSlug: function createSlug() {
      var _this7 = this;
      if (!this.defaultLanguageId) return Promise.resolve();
      var name = this.translations[this.defaultLanguageId].name;
      if (name !== "") {
        var slug = name.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

        // Check for uniqueness
        return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + "/categories/check-slug/".concat(slug)).then(function (response) {
          if (response.data.unique) {
            _this7.slug = slug;
          } else {
            _this7.slug = slug + '-' + response.data.count;
          }
        })["catch"](function (error) {
          console.error('Error checking slug uniqueness: ' + error);
          // Fallback: use slug without uniqueness check
          _this7.slug = slug;
        });
      }
      return Promise.resolve();
    },
    getParentSubcategories: function getParentSubcategories() {
      var _this8 = this;
      return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/categories', {
        params: {
          status: 1,
          limit: 1000
        }
      }).then(function (response) {
        var data = response.data || {};
        var allCategories = Array.isArray(data.data) ? data.data : [];
        var categoryMap = allCategories.reduce(function (map, category) {
          map[category.id] = category;
          return map;
        }, {});
        _this8.parent_categories = allCategories.filter(function (cat) {
          return Number(cat.parent_id) === 0;
        });
        _this8.parent_subcategories = allCategories.filter(function (cat) {
          var parent = categoryMap[cat.parent_id];
          return Number(cat.parent_id) > 0 && parent && Number(parent.parent_id) === 0;
        });
        _this8.setParentCategoryFromSubcategory();
      });
    },
    setParentCategoryFromSubcategory: function setParentCategoryFromSubcategory() {
      var _this9 = this;
      var selectedSubcategory = this.parent_subcategories.find(function (subcategory) {
        return Number(subcategory.id) === Number(_this9.parent_id);
      });
      this.parent_category_id = selectedSubcategory ? selectedSubcategory.parent_id : 0;
    },
    showModal: function showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    handleDragOver: function handleDragOver(event) {
      event.preventDefault();
      event.currentTarget.classList.add('bg-green-300');
      event.currentTarget.classList.remove('bg-gray-100');
    },
    handleDragLeave: function handleDragLeave(event) {
      event.preventDefault();
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    dropFile: function dropFile(event) {
      event.preventDefault();

      // Get the file input element (handle array case from lazy-loaded tabs)
      var fileInputRef = this.$refs.file_image;
      var fileInput = Array.isArray(fileInputRef) ? fileInputRef[0] : fileInputRef;
      if (fileInput) {
        fileInput.files = event.dataTransfer.files;
        this.handleFileUpload();
      }
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    handleFileUpload: function handleFileUpload() {
      // Get the file input element (handle array case from lazy-loaded tabs)
      var fileInputRef = this.$refs.file_image;
      var fileInput = Array.isArray(fileInputRef) ? fileInputRef[0] : fileInputRef;

      // Check if fileInput exists and has files
      if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        return;
      }
      var file = fileInput.files[0];

      // Reset previous error message
      this.error = null;

      // Check if a file was selected
      if (!file) return;

      // Perform image validation
      var validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        this.error = "Invalid file type. Please upload a JPEG, PNG, JPG, GIF, WEBP or SVG image.";
        return;
      }
      var maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        this.error = "File size exceeds the maximum allowed limit (2MB).";
        return;
      }

      // Create a URL for the uploaded image and display it
      this.imageUrl = URL.createObjectURL(file);
      this.image = file;
      this.image_url = URL.createObjectURL(file);
    },
    validateDefaultLanguage: function validateDefaultLanguage() {
      if (!this.defaultLanguageId) {
        this.showError(__('default_language_not_found'));
        return false;
      }
      var defaultTranslation = this.translations[this.defaultLanguageId];

      // Check required fields for default language - show generic message for any missing field
      if (!defaultTranslation.name || defaultTranslation.name.trim() === '') {
        this.switchToDefaultLanguageTab();
        this.showError(__('please_fill_default_language_required_fields'));
        return false;
      }
      if (Number(this.parent_category_id) === 0) {
        this.switchToDefaultLanguageTab();
        this.showError(__('please select parent category'));
        return false;
      }
      if (Number(this.parent_id) === 0) {
        this.switchToDefaultLanguageTab();
        this.showError('Please select Sub Category');
        return false;
      }
      if (!this.id && !this.image && !this.image_url) {
        this.switchToDefaultLanguageTab();
        this.showError(__('please_fill_default_language_required_fields'));
        return false;
      }
      return true;
    },
    triggerFileInput: function triggerFileInput() {
      var _this0 = this;
      // Use nextTick to ensure DOM is ready
      this.$nextTick(function () {
        var fileInput = _this0.$refs.file_image;
        if (fileInput) {
          // Handle both direct element and array of elements
          var element = Array.isArray(fileInput) ? fileInput[0] : fileInput;
          if (element && element.click) {
            element.click();
          }
        }
      });
    },
    // Switches to default language tab so user sees the required fields. Caller shows the specific error.
    switchToDefaultLanguageTab: function switchToDefaultLanguageTab() {
      var _this1 = this;
      var defaultLangIndex = this.languages.findIndex(function (lang) {
        return lang.id === _this1.defaultLanguageId;
      });
      if (defaultLangIndex !== -1) {
        this.activeLanguageTab = defaultLangIndex;
      }
    },
    saveRecord: function () {
      var _saveRecord = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this10 = this;
        var vm, languagesToSave, defaultLang, saveSequentially;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (this.validateDefaultLanguage()) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              vm = this; // Generate slug before saving
              _context2.n = 2;
              return this.createSlug();
            case 2:
              this.isLoading = true;
              languagesToSave = [];
              defaultLang = this.languages.find(function (lang) {
                return lang.is_default;
              }); // Add default language first
              if (defaultLang) {
                languagesToSave.push(defaultLang);
              }

              // Add other languages that have data
              this.languages.forEach(function (language) {
                if (language.is_default) return; // Skip default, already added

                var translation = _this10.translations[language.id];
                var hasData = _this10.translatableFields.some(function (field) {
                  var val = translation[field];
                  return val != null && String(val).trim() !== '';
                });
                if (hasData || _this10.id) {
                  languagesToSave.push(language);
                }
              });

              // Save sequentially: default language first, then others
              saveSequentially = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                  var categoryId, i, language, translation, formData, url, response, _t;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.p = _context.n) {
                      case 0:
                        categoryId = _this10.id; // For edit mode
                        i = 0;
                      case 1:
                        if (!(i < languagesToSave.length)) {
                          _context.n = 6;
                          break;
                        }
                        language = languagesToSave[i];
                        translation = _this10.translations[language.id];
                        formData = new FormData(); // Basic fields
                        if (categoryId) {
                          formData.append('id', categoryId);
                        }
                        formData.append('language_id', language.id);
                        formData.append('slug', _this10.slug);
                        formData.append('status', _this10.status);
                        formData.append('parent_id', parseInt(_this10.parent_id) || 0);

                        // Translatable fields
                        formData.append('name', translation.name || '');
                        formData.append('meta_title', translation.meta_title || '');
                        formData.append('meta_keywords', translation.meta_keywords || '');
                        formData.append('schema_markup', translation.schema_markup || '');
                        formData.append('meta_description', translation.meta_description || '');

                        // Image (only send with default language)
                        if (language.is_default && _this10.image) {
                          formData.append('image', _this10.image);
                        }
                        url = _this10.$apiUrl + '/categories/save';
                        if (categoryId) {
                          url = _this10.$apiUrl + '/categories/update';
                        }
                        _context.p = 2;
                        _context.n = 3;
                        return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(url, formData, {
                          headers: {
                            'Content-Type': 'multipart/form-data'
                          }
                        });
                      case 3:
                        response = _context.v;
                        // If this was the first save (default language), get the category ID
                        if (!categoryId && response.data.data && response.data.data.id) {
                          categoryId = response.data.data.id;
                        }
                        _context.n = 5;
                        break;
                      case 4:
                        _context.p = 4;
                        _t = _context.v;
                        console.error('Save failed:', _t);
                        throw _t;
                      case 5:
                        i++;
                        _context.n = 1;
                        break;
                      case 6:
                        return _context.a(2, true);
                    }
                  }, _callee, null, [[2, 4]]);
                }));
                return function saveSequentially() {
                  return _ref.apply(this, arguments);
                };
              }(); // Execute sequential save
              saveSequentially().then(function () {
                var message = __('Sub sub category saved successfully') || 'Sub sub category saved successfully';
                // Emit to parent only (parent shows toast once)
                vm.$emit('saved', message);
                // Notify other pages to refresh list only (no toast)
                vm.$eventBus.$emit('categorySaved');
                vm.hideModal();
                if (vm.$route.name !== 'manage_categories') {
                  vm.$router.push({
                    path: '/manage_sub_subcategories'
                  });
                }
              })["catch"](function (error) {
                vm.isLoading = false;
                if (error.response && error.response.data && error.response.data.message) {
                  vm.showError(error.response.data.message);
                } else if (error.request && error.request.statusText) {
                  vm.showError(error.request.statusText);
                } else if (error.message) {
                  vm.showError(error.message);
                } else {
                  vm.showError(__('something_went_wrong'));
                }
              });
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function saveRecord() {
        return _saveRecord.apply(this, arguments);
      }
      return saveRecord;
    }()
  },
  mounted: function mounted() {
    var _this11 = this;
    this.showModal();
    this.$nextTick(function () {
      _this11.deferDataLoad();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/TranslationHelper.js */ "./resources/js/mixins/TranslationHelper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    record: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      isLoading: false,
      isLoadingData: true,
      // Start with loading state
      image: null,
      // Basic fields
      id: this.record ? this.record.id : null,
      slug: this.record ? this.record.slug : null,
      image_url: this.record ? this.record.image_url : null,
      status: this.record ? this.record.status : 1,
      parent_id: this.record ? this.record.parent_id : 0,
      error: null,
      parent_categories: null,
      // Multi-language support
      activeLanguageTab: 0,
      translations: {},
      defaultLanguageId: null,
      languages: [],
      translatableFields: ['name', 'meta_title', 'meta_keywords', 'schema_markup', 'meta_description'],
      loadingEmpty: false,
      loadingOverwrite: false
    };
  },
  mixins: [_mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.$apiUrl = '/api';
  },
  computed: {
    modal_title: function modal_title() {
      var title = this.id ? __('Edit Sub Category') : __('Add Sub Category');
      return title;
    },
    defaultLanguage: function defaultLanguage() {
      var _this = this;
      return this.languages.find(function (language) {
        return Number(language.id) === Number(_this.defaultLanguageId);
      }) || null;
    }
  },
  methods: {
    // Used by TranslationHelper mixin (Translate buttons). Validates default language is filled.
    validateDefaultLanguageForTranslation: function validateDefaultLanguageForTranslation() {
      return this.validateDefaultLanguage();
    },
    deferDataLoad: function deferDataLoad() {
      var _this2 = this;
      this.isLoadingData = true;

      // Load languages and parent categories in parallel
      Promise.all([this.fetchActiveLanguages(), this.getParentCategories()]).then(function () {
        // Find default language
        var defaultLang = _this2.languages.find(function (lang) {
          return lang.is_default === 1;
        });
        if (defaultLang) {
          _this2.defaultLanguageId = defaultLang.id;
        }

        // Initialize translations efficiently (single operation)
        _this2.initializeTranslations();

        // Load translations only if editing
        if (_this2.id) {
          return _this2.loadCategoryWithTranslations();
        } else {
          // For new category, no translations to load
          _this2.isLoadingData = false;
        }
      })["catch"](function (error) {
        console.error('Error loading data:', error);
        _this2.isLoadingData = false;
      });
    },
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        // Fetch from API directly - no caching
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(_this3.$apiUrl + '/active_languages').then(function (response) {
          if (response.data.data) {
            _this3.languages = response.data.data;
            resolve(_this3.languages);
          } else {
            reject(new Error('No languages found'));
          }
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    initializeTranslations: function initializeTranslations() {
      // Create all translations in one object assignment
      var allTranslations = {};
      this.languages.forEach(function (language) {
        allTranslations[language.id] = {
          name: '',
          meta_title: '',
          meta_keywords: '',
          schema_markup: '',
          meta_description: ''
        };
      });
      // Single reactive assignment
      this.translations = allTranslations;
    },
    loadCategoryWithTranslations: function loadCategoryWithTranslations() {
      var _this4 = this;
      return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/categories', {
        params: {
          id: this.id
        }
      }).then(function (response) {
        if (response.data.data) {
          // Response is now an array of categories, get the first one (filtered by id)
          var categories = Array.isArray(response.data.data) ? response.data.data : [response.data.data];
          var category = categories.length > 0 ? categories[0] : null;
          if (!category) {
            _this4.isLoadingData = false;
            return;
          }

          // Load base data
          _this4.slug = category.slug;
          _this4.parent_id = category.parent_id;
          _this4.image_url = category.image_url;
          _this4.status = category.status;

          // Load translations from the category object
          var updatedTranslations = _objectSpread({}, _this4.translations);
          if (category.translations && Array.isArray(category.translations)) {
            category.translations.forEach(function (trans) {
              var langId = trans.language_id;
              updatedTranslations[langId] = {
                name: trans.name || '',
                meta_title: trans.meta_title || '',
                meta_keywords: trans.meta_keywords || '',
                schema_markup: trans.schema_markup || '',
                meta_description: trans.meta_description || ''
              };
            });
          }
          _this4.languages.forEach(function (language) {
            if (!updatedTranslations[language.id] || !updatedTranslations[language.id].name) {
              if (language.is_default) {
                updatedTranslations[language.id] = {
                  name: category.name || '',
                  meta_title: category.meta_title || '',
                  meta_keywords: category.meta_keywords || '',
                  schema_markup: category.schema_markup || '',
                  meta_description: category.meta_description || ''
                };
              }
            }
          });

          // Single assignment for reactivity
          _this4.translations = updatedTranslations;
        }
        _this4.isLoadingData = false;
      })["catch"](function (error) {
        _this4.isLoadingData = false;
        throw error;
      });
    },
    createSlug: function createSlug() {
      var _this5 = this;
      if (!this.defaultLanguageId) return Promise.resolve();
      var name = this.translations[this.defaultLanguageId].name;
      if (name !== "") {
        var slug = name.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

        // Check for uniqueness
        return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + "/categories/check-slug/".concat(slug)).then(function (response) {
          if (response.data.unique) {
            _this5.slug = slug;
          } else {
            _this5.slug = slug + '-' + response.data.count;
          }
        })["catch"](function (error) {
          console.error('Error checking slug uniqueness: ' + error);
          // Fallback: use slug without uniqueness check
          _this5.slug = slug;
        });
      }
      return Promise.resolve();
    },
    getParentCategories: function getParentCategories() {
      var _this6 = this;
      return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/categories', {
        params: {
          parent_id: 0,
          status: 1,
          limit: 1000
        }
      }).then(function (response) {
        var data = response.data || {};
        var categories = (Array.isArray(data.data) ? data.data : []).filter(function (cat) {
          return Number(cat.parent_id) === 0;
        });

        // Generate options HTML
        var optionsHtml = "<option value='0'>" + __('select parent category') + "</option>";
        categories.forEach(function (cat) {
          optionsHtml += "<option value='".concat(cat.id, "' ").concat(_this6.parent_id == cat.id ? 'selected' : '', ">").concat(cat.name, "</option>");
        });
        _this6.parent_categories = optionsHtml;
      });
    },
    showModal: function showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    handleDragOver: function handleDragOver(event) {
      event.preventDefault();
      event.currentTarget.classList.add('bg-green-300');
      event.currentTarget.classList.remove('bg-gray-100');
    },
    handleDragLeave: function handleDragLeave(event) {
      event.preventDefault();
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    dropFile: function dropFile(event) {
      event.preventDefault();

      // Get the file input element (handle array case from lazy-loaded tabs)
      var fileInputRef = this.$refs.file_image;
      var fileInput = Array.isArray(fileInputRef) ? fileInputRef[0] : fileInputRef;
      if (fileInput) {
        fileInput.files = event.dataTransfer.files;
        this.handleFileUpload();
      }
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    handleFileUpload: function handleFileUpload() {
      // Get the file input element (handle array case from lazy-loaded tabs)
      var fileInputRef = this.$refs.file_image;
      var fileInput = Array.isArray(fileInputRef) ? fileInputRef[0] : fileInputRef;

      // Check if fileInput exists and has files
      if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        return;
      }
      var file = fileInput.files[0];

      // Reset previous error message
      this.error = null;

      // Check if a file was selected
      if (!file) return;

      // Perform image validation
      var validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        this.error = "Invalid file type. Please upload a JPEG, PNG, JPG, GIF, WEBP or SVG image.";
        return;
      }
      var maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        this.error = "File size exceeds the maximum allowed limit (2MB).";
        return;
      }

      // Create a URL for the uploaded image and display it
      this.imageUrl = URL.createObjectURL(file);
      this.image = file;
      this.image_url = URL.createObjectURL(file);
    },
    validateDefaultLanguage: function validateDefaultLanguage() {
      if (!this.defaultLanguageId) {
        this.showError(__('default_language_not_found'));
        return false;
      }
      var defaultTranslation = this.translations[this.defaultLanguageId];

      // Check required fields for default language - show generic message for any missing field
      if (!defaultTranslation.name || defaultTranslation.name.trim() === '') {
        this.switchToDefaultLanguageTab();
        this.showError(__('please_fill_default_language_required_fields'));
        return false;
      }
      if (this.parent_id == 0) {
        this.switchToDefaultLanguageTab();
        this.showError(__('please select parent category'));
        return false;
      }
      if (!this.id && !this.image && !this.image_url) {
        this.switchToDefaultLanguageTab();
        this.showError(__('please_fill_default_language_required_fields'));
        return false;
      }
      return true;
    },
    triggerFileInput: function triggerFileInput() {
      var _this7 = this;
      // Use nextTick to ensure DOM is ready
      this.$nextTick(function () {
        var fileInput = _this7.$refs.file_image;
        if (fileInput) {
          // Handle both direct element and array of elements
          var element = Array.isArray(fileInput) ? fileInput[0] : fileInput;
          if (element && element.click) {
            element.click();
          }
        }
      });
    },
    // Switches to default language tab so user sees the required fields. Caller shows the specific error.
    switchToDefaultLanguageTab: function switchToDefaultLanguageTab() {
      var _this8 = this;
      var defaultLangIndex = this.languages.findIndex(function (lang) {
        return lang.id === _this8.defaultLanguageId;
      });
      if (defaultLangIndex !== -1) {
        this.activeLanguageTab = defaultLangIndex;
      }
    },
    saveRecord: function () {
      var _saveRecord = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this9 = this;
        var vm, languagesToSave, defaultLang, saveSequentially;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (this.validateDefaultLanguage()) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              vm = this; // Generate slug before saving
              _context2.n = 2;
              return this.createSlug();
            case 2:
              this.isLoading = true;
              languagesToSave = [];
              defaultLang = this.languages.find(function (lang) {
                return lang.is_default;
              }); // Add default language first
              if (defaultLang) {
                languagesToSave.push(defaultLang);
              }

              // Add other languages that have data
              this.languages.forEach(function (language) {
                if (language.is_default) return; // Skip default, already added

                var translation = _this9.translations[language.id];
                var hasData = _this9.translatableFields.some(function (field) {
                  var val = translation[field];
                  return val != null && String(val).trim() !== '';
                });
                if (hasData || _this9.id) {
                  languagesToSave.push(language);
                }
              });

              // Save sequentially: default language first, then others
              saveSequentially = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                  var categoryId, i, language, translation, formData, url, response, _t;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.p = _context.n) {
                      case 0:
                        categoryId = _this9.id; // For edit mode
                        i = 0;
                      case 1:
                        if (!(i < languagesToSave.length)) {
                          _context.n = 6;
                          break;
                        }
                        language = languagesToSave[i];
                        translation = _this9.translations[language.id];
                        formData = new FormData(); // Basic fields
                        if (categoryId) {
                          formData.append('id', categoryId);
                        }
                        formData.append('language_id', language.id);
                        formData.append('slug', _this9.slug || '');
                        formData.append('status', _this9.status);
                        formData.append('parent_id', parseInt(_this9.parent_id) || 0);
                        console.log('Saving category with parent_id:', _this9.parent_id, 'for language:', language.id);

                        // Translatable fields
                        formData.append('name', translation.name || '');
                        formData.append('meta_title', translation.meta_title || '');
                        formData.append('meta_keywords', translation.meta_keywords || '');
                        formData.append('schema_markup', translation.schema_markup || '');
                        formData.append('meta_description', translation.meta_description || '');

                        // Image (only send with default language)
                        if (language.is_default && _this9.image) {
                          formData.append('image', _this9.image);
                        }
                        url = _this9.$apiUrl + '/categories/save';
                        if (categoryId) {
                          url = _this9.$apiUrl + '/categories/update';
                        }
                        _context.p = 2;
                        _context.n = 3;
                        return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(url, formData, {
                          headers: {
                            'Content-Type': 'multipart/form-data'
                          }
                        });
                      case 3:
                        response = _context.v;
                        console.log('Save response:', response.data);

                        // If this was the first save (default language), get the category ID
                        if (!categoryId && response.data.data && response.data.data.id) {
                          categoryId = response.data.data.id;
                        }
                        _context.n = 5;
                        break;
                      case 4:
                        _context.p = 4;
                        _t = _context.v;
                        console.error('Save failed:', _t);
                        if (_t.response) {
                          console.error('Error response:', _t.response.data);
                        }
                        throw _t;
                      case 5:
                        i++;
                        _context.n = 1;
                        break;
                      case 6:
                        return _context.a(2, true);
                    }
                  }, _callee, null, [[2, 4]]);
                }));
                return function saveSequentially() {
                  return _ref.apply(this, arguments);
                };
              }(); // Execute sequential save
              saveSequentially().then(function () {
                var message = __('sub category saved successfully') || 'Sub category saved successfully';
                // Emit to parent only (parent shows toast once)
                vm.$emit('saved', message);
                // Notify other pages to refresh list only (no toast)
                vm.$eventBus.$emit('categorySaved');
                vm.hideModal();
                if (vm.$route.name !== 'manage_categories') {
                  vm.$router.push({
                    path: '/manage_subcategories'
                  });
                }
              })["catch"](function (error) {
                vm.isLoading = false;
                if (error.response && error.response.data && error.response.data.message) {
                  vm.showError(error.response.data.message);
                } else if (error.request && error.request.statusText) {
                  vm.showError(error.request.statusText);
                } else if (error.message) {
                  vm.showError(error.message);
                } else {
                  vm.showError(__('something_went_wrong'));
                }
              });
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function saveRecord() {
        return _saveRecord.apply(this, arguments);
      }
      return saveRecord;
    }()
  },
  mounted: function mounted() {
    var _this0 = this;
    this.showModal();
    this.$nextTick(function () {
      _this0.deferDataLoad();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageCategories.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageCategories.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue */ "./resources/js/views/Category/Edit.vue");
/* harmony import */ var _ManageSubcategories_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageSubcategories.vue */ "./resources/js/views/Category/ManageSubcategories.vue");
/* harmony import */ var _ManageSubSubcategories_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageSubSubcategories.vue */ "./resources/js/views/Category/ManageSubSubcategories.vue");
/* harmony import */ var _ManageSubSubSubcategories_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ManageSubSubSubcategories.vue */ "./resources/js/views/Category/ManageSubSubSubcategories.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    'app-edit-record': _Edit_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'app-manage-subcategories': _ManageSubcategories_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'app-manage-sub-subcategories': _ManageSubSubcategories_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'app-manage-sub-sub-subcategories': _ManageSubSubSubcategories_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      fields: [{
        key: 'id',
        label: 'Sr. No.',
        "class": 'text-center',
        sortable: true,
        sortDirection: 'asc'
      }, {
        key: 'name',
        label: this.$titleLabel('name'),
        "class": 'text-center',
        sortable: true
      }, {
        key: 'image',
        label: this.$titleLabel('image'),
        "class": 'text-center'
      }, {
        key: 'actions',
        label: this.$titleLabel('actions'),
        "class": 'text-center'
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: this.$perPage,
      pageOptions: this.$pageOptions,
      sortBy: 'id',
      sortDesc: true,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      page: 1,
      categories: [],
      isLoading: false,
      sectionStyle: 'style_1',
      max_visible_categories: 12,
      max_col_in_single_row: 3,
      create_new: null,
      create_new_sub_category: false,
      create_new_sub_sub_category: false,
      create_new_sub_sub_sub_category: false,
      edit_record: null,
      settingModalShow: false,
      currentLanguageId: null,
      activeLanguages: [],
      latestRequestId: 0,
      previewImageUrl: null,
      selectedCategory: null,
      selectedCategoryTree: null,
      treeLoading: false,
      parentCategoryStack: [],
      // Settings Modal Data
      settingsLoading: false,
      settingsCategories: [],
      settingsInlineEditRecord: null,
      settingsInlineCreate: false,
      settingsActiveTabLevel: 0
    };
  },
  computed: {
    dynamicAddLabel: function dynamicAddLabel() {
      var len = this.parentCategoryStack.length;
      if (len === 0) return 'Add Category';
      if (len === 1) return 'Add Sub Category';
      if (len === 2) return 'Add Sub Sub Category';
      return 'Add Sub Sub Sub Category';
    },
    sortOptions: function sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    },
    pageStart: function pageStart() {
      if (this.totalRows === 0) return 0;
      return (this.currentPage - 1) * this.perPage + 1;
    },
    pageEnd: function pageEnd() {
      return Math.min(this.currentPage * this.perPage, this.totalRows);
    },
    filteredCategories: function filteredCategories() {
      var list = Array.isArray(this.categories) ? this.categories : [];
      var query = this.filter ? this.filter.toLowerCase() : '';
      return list.filter(function (category) {
        var name = (category.name || '').toString().toLowerCase();
        var subtitle = (category.subtitle || '').toString().toLowerCase();
        return name.includes(query) || subtitle.includes(query);
      });
    },
    // Computed property to transform categories with translated fields based on current app_locale
    translatedCategories: function translatedCategories() {
      var _this = this;
      // Guard: ensure categories is an array to avoid "Cannot read properties of undefined (reading 'length')"
      var list = Array.isArray(this.categories) ? this.categories : [];
      if (!this.currentLanguageId || list.length === 0) {
        return list;
      }

      // Transform each category to use translated fields
      return list.map(function (category) {
        var translatedCategory = _objectSpread({}, category);
        if (category.translations && Array.isArray(category.translations)) {
          var translation = category.translations.find(function (t) {
            return t.language_id === _this.currentLanguageId;
          });

          // Use translated name if available and not empty, otherwise fallback to main table name
          if (translation && translation.name && translation.name.trim() !== '') {
            translatedCategory.name = translation.name;
          }

          // Use translated subtitle if available and not empty, otherwise fallback to main table subtitle
          if (translation && translation.subtitle && translation.subtitle.trim() !== '') {
            translatedCategory.subtitle = translation.subtitle;
          }
        }
        return translatedCategory;
      });
    },
    flattenedSettingsCategories: function flattenedSettingsCategories() {
      var _this2 = this;
      var list = this.settingsCategories || [];

      // Apply translation fallback
      var translatedList = list.map(function (category) {
        var translatedCategory = _objectSpread({}, category);
        if (category.translations && Array.isArray(category.translations)) {
          var translation = category.translations.find(function (t) {
            return t.language_id === _this2.currentLanguageId;
          });
          if (translation && translation.name && translation.name.trim() !== '') {
            translatedCategory.name = translation.name;
          }
        }
        return translatedCategory;
      });
      var map = {};
      translatedList.forEach(function (cat) {
        return map[cat.id] = _objectSpread(_objectSpread({}, cat), {}, {
          children: []
        });
      });
      var roots = [];
      translatedList.forEach(function (cat) {
        if (cat.parent_id === 0 || !map[cat.parent_id]) {
          roots.push(map[cat.id]);
        } else {
          map[cat.parent_id].children.push(map[cat.id]);
        }
      });

      // recursive flatten
      var result = [];
      function flatten(nodes, level) {
        nodes.forEach(function (node) {
          result.push(_objectSpread(_objectSpread({}, node), {}, {
            level: level
          }));
          if (node.children && node.children.length > 0) {
            flatten(node.children, level + 1);
          }
        });
      }
      flatten(roots, 0);
      return result;
    },
    filteredSettingsCategoriesByTab: function filteredSettingsCategoriesByTab() {
      var _this3 = this;
      return this.flattenedSettingsCategories.filter(function (cat) {
        return cat.level === _this3.settingsActiveTabLevel;
      });
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {
      this.showCreateModal();
    },
    currentPage: function currentPage(newPage) {
      this.getCategories();
    },
    perPage: function perPage(newPerPage) {
      this.getCategories();
    },
    filter: function filter(newFilter, oldFilter) {
      if (this.currentPage === 1) {
        this.getCategories();
      } else {
        this.currentPage = 1;
      }
    }
  },
  created: function created() {
    var _this4 = this;
    this.showCreateModal();
    this.fetchActiveLanguages().then(function () {
      _this4.getCategories();
    });
  },
  methods: _defineProperty(_defineProperty(_defineProperty(_defineProperty({
    getParentName: function getParentName(parentId) {
      var parent = this.flattenedSettingsCategories.find(function (c) {
        return c.id === parentId;
      });
      return parent ? parent.name : '-';
    },
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this5 = this;
      return axios.get(this.$apiUrl + '/active_languages').then(function (response) {
        if (response.data.data && Array.isArray(response.data.data)) {
          _this5.activeLanguages = response.data.data;
          var appLocale = window.appLocale || 'en';

          // Find language ID for current app_locale code
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
    getCategories: function getCategories() {
      var _this6 = this;
      this.isLoading = true;
      this.latestRequestId++;
      var currentRequestId = this.latestRequestId;
      var currentParentId = this.parentCategoryStack.length > 0 ? this.parentCategoryStack[this.parentCategoryStack.length - 1].id : 0;
      var params = {
        offset: this.currentPage,
        limit: this.perPage,
        filter: this.filter,
        parent_id: currentParentId,
        status: null,
        // Explicitly request all categories (active and inactive)
        _t: Date.now()
      };
      axios.get(this.$apiUrl + '/categories', {
        params: params
      }).then(function (response) {
        if (currentRequestId !== _this6.latestRequestId) {
          return; // Discard stale/out-of-order response
        }
        _this6.isLoading = false;
        var data = response.data || {};
        // Always set to array so .length and table empty state work; avoid undefined
        _this6.categories = Array.isArray(data.data) ? data.data : [];
        _this6.totalRows = typeof data.total === 'number' ? data.total : 0;
      })["catch"](function () {
        if (currentRequestId !== _this6.latestRequestId) {
          return; // Discard stale/out-of-order response
        }
        _this6.isLoading = false;
        _this6.categories = [];
        _this6.totalRows = 0;
      });
    },
    hideModal: function hideModal() {
      var _this7 = this;
      this.create_new = false;
      this.create_new_sub_category = false;
      this.create_new_sub_sub_category = false;
      this.create_new_sub_sub_sub_category = false;
      this.edit_record = null;
      setTimeout(function () {
        _this7.$emit('closed');
      }, 500);
    },
    openAddModal: function openAddModal() {
      if (this.parentCategoryStack.length > 0) {
        var currentParentId = this.parentCategoryStack[this.parentCategoryStack.length - 1].id;
        this.edit_record = {
          id: null,
          parent_id: currentParentId,
          status: 1
        };
        this.create_new = false;
      } else {
        this.create_new = true;
        this.edit_record = null;
      }
    },
    enterCategory: function enterCategory(category) {
      this.parentCategoryStack.push(category);
      this.currentPage = 1;
      this.getCategories();
    },
    goToRoot: function goToRoot() {
      this.parentCategoryStack = [];
      this.currentPage = 1;
      this.getCategories();
    },
    goToLevel: function goToLevel(index) {
      this.parentCategoryStack = this.parentCategoryStack.slice(0, index + 1);
      this.currentPage = 1;
      this.getCategories();
    },
    openSettingsModal: function openSettingsModal() {
      this.fetchSettingsCategories();
      this.$refs['settings-modal'].show();
    },
    onSettingsModalClose: function onSettingsModalClose() {
      this.settingsInlineEditRecord = null;
      this.settingsInlineCreate = false;
    },
    closeSettingsInlineForm: function closeSettingsInlineForm() {
      this.settingsInlineEditRecord = null;
      this.settingsInlineCreate = false;
    },
    onSettingsInlineSaved: function onSettingsInlineSaved() {
      this.closeSettingsInlineForm();
      this.fetchSettingsCategories();
      this.getCategories(); // Refresh main table as well
    },
    editSettingsCategory: function editSettingsCategory(category) {
      this.settingsInlineEditRecord = category;
    },
    fetchSettingsCategories: function fetchSettingsCategories() {
      var _this8 = this;
      this.settingsLoading = true;
      var params = {
        offset: 1,
        limit: 1000,
        status: null
      };
      axios.get(this.$apiUrl + '/categories', {
        params: params
      }).then(function (response) {
        if (response.data.data && Array.isArray(response.data.data)) {
          _this8.settingsCategories = response.data.data;
        } else if (response.data.data && Array.isArray(response.data.data.categories)) {
          _this8.settingsCategories = response.data.data.categories;
        }
      })["catch"](function (error) {
        console.error('Error fetching settings categories:', error);
      })["finally"](function () {
        _this8.settingsLoading = false;
      });
    },
    deleteCategory: function deleteCategory(index, id) {
      var _this9 = this;
      var fromSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
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
          _this9.isLoading = true;
          var postData = {
            id: id
          };
          axios.post(_this9.$apiUrl + '/categories/delete', postData).then(function (response) {
            _this9.isLoading = false;
            var data = response.data;
            if (index !== null) {
              _this9.categories.splice(index, 1);
            }
            _this9.showMessage('success', data.message);
            if (fromSettings) {
              _this9.fetchSettingsCategories();
            }
            _this9.getCategories();
          });
        }
      });
    },
    showCreateModal: function showCreateModal() {
      var create = this.$route.params.create;
      if (create) {
        this.create_new = true;
      }
    }
  }, "hideModal", function hideModal() {
    this.create_new = false;
    this.edit_record = false;
    this.$router.push({
      path: '/manage_categories'
    });
  }), "onCategorySaved", function onCategorySaved(message) {
    this.showMessage('success', message);
    this.getCategories();
    this.create_new = null;
  }), "openImageModal", function openImageModal(imageUrl) {
    this.previewImageUrl = imageUrl;
    this.$refs['image-modal'].show();
  }), "viewCategoryTree", function viewCategoryTree(category) {
    var _this0 = this;
    this.selectedCategory = category;
    this.selectedCategoryTree = null;
    this.treeLoading = true;
    if (this.$refs['tree-modal']) {
      this.$refs['tree-modal'].show();
    }
    axios.get(this.$apiUrl + '/categories/tree/' + category.id).then(function (response) {
      _this0.treeLoading = false;
      var data = response.data || {};
      if (data.data) {
        _this0.selectedCategoryTree = data.data;
      } else {
        _this0.selectedCategoryTree = category;
      }
    })["catch"](function (error) {
      _this0.treeLoading = false;
      _this0.selectedCategoryTree = category;
      console.error('Error loading category tree:', error);
    });
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditSubSubSubcategory_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditSubSubSubcategory.vue */ "./resources/js/views/Category/EditSubSubSubcategory.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isModal: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    'app-edit-record': _EditSubSubSubcategory_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      fields: [{
        key: 'id',
        label: 'Sr. No.',
        "class": 'text-center',
        sortable: true,
        sortDirection: 'asc'
      }, {
        key: 'name',
        label: this.$titleLabel('name'),
        "class": 'text-center',
        sortable: true
      }, {
        key: 'parent_category',
        label: this.$titleLabel('parent_category'),
        "class": 'text-center'
      }, {
        key: 'parent_subcategory',
        label: 'Sub Category',
        "class": 'text-center'
      }, {
        key: 'parent_sub_subcategory',
        label: 'Sub Sub Category',
        "class": 'text-center'
      }, {
        key: 'image',
        label: this.$titleLabel('image'),
        "class": 'text-center'
      }, {
        key: 'actions',
        label: this.$titleLabel('actions'),
        "class": 'text-center'
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: this.$perPage,
      pageOptions: this.$pageOptions,
      sortBy: 'id',
      sortDesc: true,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      page: 1,
      categories: [],
      parentCategories: [],
      subcategories: [],
      subSubcategories: [],
      hasParentCategories: false,
      hasSubcategories: false,
      hasSubSubcategories: false,
      isLoading: false,
      sectionStyle: 'style_1',
      max_visible_categories: 12,
      max_col_in_single_row: 3,
      create_new: null,
      edit_record: null,
      settingModalShow: false,
      currentLanguageId: null,
      activeLanguages: [],
      latestRequestId: 0,
      previewImageUrl: null
    };
  },
  computed: {
    sortOptions: function sortOptions() {
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    },
    pageStart: function pageStart() {
      if (this.totalRows === 0) return 0;
      return (this.currentPage - 1) * this.perPage + 1;
    },
    pageEnd: function pageEnd() {
      return Math.min(this.currentPage * this.perPage, this.totalRows);
    },
    translatedCategories: function translatedCategories() {
      var _this = this;
      var list = Array.isArray(this.categories) ? this.categories : [];
      if (!this.currentLanguageId || list.length === 0) {
        return list;
      }
      return list.map(function (category) {
        var translatedCategory = _objectSpread({}, category);
        if (category.translations && Array.isArray(category.translations)) {
          var translation = category.translations.find(function (t) {
            return t.language_id === _this.currentLanguageId;
          });
          if (translation && translation.name && translation.name.trim() !== '') {
            translatedCategory.name = translation.name;
          }
        }
        return translatedCategory;
      });
    },
    paginatedTranslatedCategories: function paginatedTranslatedCategories() {
      return this.translatedCategories;
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {
      this.showCreateModal();
    },
    currentPage: function currentPage(newPage) {
      this.getCategories();
    },
    perPage: function perPage(newPerPage) {
      this.getCategories();
    },
    filter: function filter(newFilter, oldFilter) {
      if (newFilter === oldFilter) {
        return;
      }
      if (this.currentPage === 1) {
        this.getCategories();
      } else {
        this.currentPage = 1;
      }
    }
  },
  created: function created() {
    var _this2 = this;
    this.showCreateModal();
    this.fetchActiveLanguages().then(function () {
      _this2.getParentCategories().then(function () {
        _this2.getSubcategories().then(function () {
          _this2.getSubSubcategories().then(function () {
            _this2.getCategories();
          });
        });
      });
    });
  },
  methods: {
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this3 = this;
      return axios.get(this.$apiUrl + '/active_languages').then(function (response) {
        if (response.data.data && Array.isArray(response.data.data)) {
          _this3.activeLanguages = response.data.data;
          var appLocale = window.appLocale || 'en';
          var currentLanguage = _this3.activeLanguages.find(function (lang) {
            return lang.code === appLocale;
          });
          if (currentLanguage) {
            _this3.currentLanguageId = currentLanguage.id;
          } else {
            var defaultLanguage = _this3.activeLanguages.find(function (lang) {
              return lang.is_default === 1;
            });
            if (defaultLanguage) {
              _this3.currentLanguageId = defaultLanguage.id;
            }
          }
        }
      })["catch"](function (error) {
        console.error('Error loading languages:', error);
      });
    },
    getParentCategories: function getParentCategories() {
      var _this4 = this;
      return axios.get(this.$apiUrl + '/categories', {
        params: {
          parent_id: 0,
          status: 1,
          limit: 1000
        }
      }).then(function (response) {
        var data = response.data || {};
        _this4.parentCategories = Array.isArray(data.data) ? data.data : [];
        _this4.hasParentCategories = _this4.parentCategories.length > 0;
      })["catch"](function () {
        _this4.parentCategories = [];
        _this4.hasParentCategories = false;
      });
    },
    getSubcategories: function getSubcategories() {
      var _this5 = this;
      return axios.get(this.$apiUrl + '/categories', {
        params: {
          status: 1,
          limit: 1000
        }
      }).then(function (response) {
        var data = response.data || {};
        var allCategories = Array.isArray(data.data) ? data.data : [];
        var categoryMap = allCategories.reduce(function (map, category) {
          map[category.id] = category;
          return map;
        }, {});
        _this5.subcategories = allCategories.filter(function (cat) {
          var parent = categoryMap[cat.parent_id];
          return Number(cat.parent_id) > 0 && parent && Number(parent.parent_id) === 0;
        });
        _this5.hasSubcategories = _this5.subcategories.length > 0;
      })["catch"](function () {
        _this5.subcategories = [];
        _this5.hasSubcategories = false;
      });
    },
    getParentCategoryName: function getParentCategoryName(parentId) {
      var subSubcategory = this.subSubcategories.find(function (cat) {
        return Number(cat.id) === Number(parentId);
      });
      if (!subSubcategory) return '-';
      var subcategory = this.subcategories.find(function (cat) {
        return Number(cat.id) === Number(subSubcategory.parent_id);
      });
      if (!subcategory) return '-';
      var parent = this.parentCategories.find(function (cat) {
        return Number(cat.id) === Number(subcategory.parent_id);
      });
      return parent ? parent.name : '-';
    },
    getParentSubCategoryName: function getParentSubCategoryName(parentId) {
      var subSubcategory = this.subSubcategories.find(function (cat) {
        return Number(cat.id) === Number(parentId);
      });
      if (!subSubcategory) return '-';
      var parent = this.subcategories.find(function (cat) {
        return Number(cat.id) === Number(subSubcategory.parent_id);
      });
      return parent ? parent.name : '-';
    },
    getParentSubSubCategoryName: function getParentSubSubCategoryName(parentId) {
      var parent = this.subSubcategories.find(function (cat) {
        return Number(cat.id) === Number(parentId);
      });
      return parent ? parent.name : '-';
    },
    getSubSubcategories: function getSubSubcategories() {
      var _this6 = this;
      return axios.get(this.$apiUrl + '/categories', {
        params: {
          status: 1,
          limit: 1000
        }
      }).then(function (response) {
        var data = response.data || {};
        var allCategories = Array.isArray(data.data) ? data.data : [];
        var subcategoryIds = _this6.subcategories.map(function (cat) {
          return Number(cat.id);
        });
        _this6.subSubcategories = allCategories.filter(function (cat) {
          return subcategoryIds.includes(Number(cat.parent_id));
        });
        _this6.hasSubSubcategories = _this6.subSubcategories.length > 0;
      })["catch"](function () {
        _this6.subSubcategories = [];
        _this6.hasSubSubcategories = false;
      });
    },
    getCategories: function getCategories() {
      var _this7 = this;
      this.isLoading = true;
      this.latestRequestId++;
      var currentRequestId = this.latestRequestId;
      var params = {
        filter: this.filter,
        limit: this.perPage,
        offset: this.currentPage,
        _t: Date.now()
      };
      axios.get(this.$apiUrl + '/sub_sub_subcategories', {
        params: params
      }).then(function (response) {
        if (currentRequestId !== _this7.latestRequestId) {
          return;
        }
        _this7.isLoading = false;
        var data = response.data || {};
        _this7.categories = Array.isArray(data.data) ? data.data : [];
        _this7.totalRows = Number(data.total || 0);
      })["catch"](function () {
        if (currentRequestId !== _this7.latestRequestId) {
          return;
        }
        _this7.isLoading = false;
        _this7.categories = [];
        _this7.totalRows = 0;
      });
    },
    deleteCategory: function deleteCategory(index, id) {
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
          axios.post(_this8.$apiUrl + '/sub_sub_subcategories/delete', postData).then(function (response) {
            _this8.isLoading = false;
            var data = response.data;
            _this8.categories.splice(index, 1);
            _this8.showMessage('success', data.message);
          });
        }
      });
    },
    showCreateModal: function showCreateModal() {
      var create = this.$route.params.create;
      if (create) {
        this.create_new = true;
      }
    },
    hideModal: function hideModal() {
      this.create_new = false;
      this.edit_record = false;
      if (!this.isModal && this.$route.name !== 'manage_categories') {
        this.$router.push({
          path: '/manage_sub_sub_subcategories'
        });
      }
    },
    onCategorySaved: function onCategorySaved(message) {
      this.showMessage('success', message);
      this.getCategories();
      this.create_new = null;
    },
    openImageModal: function openImageModal(imageUrl) {
      this.previewImageUrl = imageUrl;
      this.$refs['image-modal'].show();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditSubSubcategory_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditSubSubcategory.vue */ "./resources/js/views/Category/EditSubSubcategory.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isModal: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    'app-edit-record': _EditSubSubcategory_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      fields: [{
        key: 'id',
        label: 'Sr. No.',
        "class": 'text-center',
        sortable: true,
        sortDirection: 'asc'
      }, {
        key: 'name',
        label: this.$titleLabel('name'),
        "class": 'text-center',
        sortable: true
      }, {
        key: 'parent_category',
        label: this.$titleLabel('parent_category'),
        "class": 'text-center'
      }, {
        key: 'parent_subcategory',
        label: 'Sub Category',
        "class": 'text-center'
      }, {
        key: 'image',
        label: this.$titleLabel('image'),
        "class": 'text-center'
      }, {
        key: 'actions',
        label: this.$titleLabel('actions'),
        "class": 'text-center'
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: this.$perPage,
      pageOptions: this.$pageOptions,
      sortBy: 'id',
      sortDesc: true,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      page: 1,
      categories: [],
      parentCategories: [],
      subcategories: [],
      hasParentCategories: false,
      hasSubcategories: false,
      isLoading: false,
      sectionStyle: 'style_1',
      max_visible_categories: 12,
      max_col_in_single_row: 3,
      create_new: null,
      edit_record: null,
      settingModalShow: false,
      currentLanguageId: null,
      activeLanguages: [],
      latestRequestId: 0,
      previewImageUrl: null
    };
  },
  computed: {
    sortOptions: function sortOptions() {
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    },
    pageStart: function pageStart() {
      if (this.totalRows === 0) return 0;
      return (this.currentPage - 1) * this.perPage + 1;
    },
    pageEnd: function pageEnd() {
      return Math.min(this.currentPage * this.perPage, this.totalRows);
    },
    translatedCategories: function translatedCategories() {
      var _this = this;
      var list = Array.isArray(this.categories) ? this.categories : [];
      if (!this.currentLanguageId || list.length === 0) {
        return list;
      }
      return list.map(function (category) {
        var translatedCategory = _objectSpread({}, category);
        if (category.translations && Array.isArray(category.translations)) {
          var translation = category.translations.find(function (t) {
            return t.language_id === _this.currentLanguageId;
          });
          if (translation && translation.name && translation.name.trim() !== '') {
            translatedCategory.name = translation.name;
          }
        }
        return translatedCategory;
      });
    },
    paginatedTranslatedCategories: function paginatedTranslatedCategories() {
      return this.translatedCategories;
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {
      this.showCreateModal();
    },
    currentPage: function currentPage(newPage) {
      this.getCategories();
    },
    perPage: function perPage(newPerPage) {
      this.getCategories();
    },
    filter: function filter(newFilter, oldFilter) {
      if (newFilter !== oldFilter) {
        this.currentPage = 1;
        this.getCategories();
      }
    }
  },
  created: function created() {
    var _this2 = this;
    this.showCreateModal();
    this.fetchActiveLanguages().then(function () {
      _this2.getParentCategories().then(function () {
        _this2.getSubcategories().then(function () {
          _this2.getCategories();
        });
      });
    });
  },
  methods: {
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this3 = this;
      return axios.get(this.$apiUrl + '/active_languages').then(function (response) {
        if (response.data.data && Array.isArray(response.data.data)) {
          _this3.activeLanguages = response.data.data;
          var appLocale = window.appLocale || 'en';
          var currentLanguage = _this3.activeLanguages.find(function (lang) {
            return lang.code === appLocale;
          });
          if (currentLanguage) {
            _this3.currentLanguageId = currentLanguage.id;
          } else {
            var defaultLanguage = _this3.activeLanguages.find(function (lang) {
              return lang.is_default === 1;
            });
            if (defaultLanguage) {
              _this3.currentLanguageId = defaultLanguage.id;
            }
          }
        }
      })["catch"](function (error) {
        console.error('Error loading languages:', error);
      });
    },
    getParentCategories: function getParentCategories() {
      var _this4 = this;
      return axios.get(this.$apiUrl + '/categories', {
        params: {
          parent_id: 0,
          status: 1,
          limit: 1000
        }
      }).then(function (response) {
        var data = response.data || {};
        _this4.parentCategories = Array.isArray(data.data) ? data.data : [];
        _this4.hasParentCategories = _this4.parentCategories.length > 0;
      })["catch"](function () {
        _this4.parentCategories = [];
        _this4.hasParentCategories = false;
      });
    },
    getSubcategories: function getSubcategories() {
      var _this5 = this;
      return axios.get(this.$apiUrl + '/categories', {
        params: {
          status: 1
        }
      }).then(function (response) {
        var data = response.data || {};
        var allCategories = Array.isArray(data.data) ? data.data : [];
        var categoryMap = allCategories.reduce(function (map, category) {
          map[category.id] = category;
          return map;
        }, {});
        _this5.subcategories = allCategories.filter(function (cat) {
          var parent = categoryMap[cat.parent_id];
          return Number(cat.parent_id) > 0 && parent && Number(parent.parent_id) === 0;
        });
        _this5.hasSubcategories = _this5.subcategories.length > 0;
      })["catch"](function () {
        _this5.subcategories = [];
        _this5.hasSubcategories = false;
      });
    },
    getParentCategoryName: function getParentCategoryName(parentId) {
      var subcategory = this.subcategories.find(function (cat) {
        return Number(cat.id) === Number(parentId);
      });
      if (!subcategory) return '-';
      var parent = this.parentCategories.find(function (cat) {
        return Number(cat.id) === Number(subcategory.parent_id);
      });
      return parent ? parent.name : '-';
    },
    getParentSubCategoryName: function getParentSubCategoryName(parentId) {
      var parent = this.subcategories.find(function (cat) {
        return Number(cat.id) === Number(parentId);
      });
      return parent ? parent.name : '-';
    },
    getCategories: function getCategories() {
      var _this6 = this;
      this.isLoading = true;
      this.latestRequestId++;
      var currentRequestId = this.latestRequestId;
      var params = {
        filter: this.filter,
        category_level: 'sub_subcategory',
        status: null,
        limit: this.perPage,
        offset: this.currentPage,
        _t: Date.now()
      };
      axios.get(this.$apiUrl + '/categories', {
        params: params
      }).then(function (response) {
        if (currentRequestId !== _this6.latestRequestId) {
          return;
        }
        _this6.isLoading = false;
        var data = response.data || {};
        _this6.categories = Array.isArray(data.data) ? data.data : [];
        _this6.totalRows = Number(data.total || 0);
      })["catch"](function () {
        if (currentRequestId !== _this6.latestRequestId) {
          return;
        }
        _this6.isLoading = false;
        _this6.categories = [];
        _this6.totalRows = 0;
      });
    },
    deleteCategory: function deleteCategory(index, id) {
      var _this7 = this;
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
          _this7.isLoading = true;
          var postData = {
            id: id
          };
          axios.post(_this7.$apiUrl + '/categories/delete', postData).then(function (response) {
            _this7.isLoading = false;
            var data = response.data;
            _this7.categories.splice(index, 1);
            _this7.showMessage('success', data.message);
          });
        }
      });
    },
    showCreateModal: function showCreateModal() {
      var create = this.$route.params.create;
      if (create) {
        this.create_new = true;
      }
    },
    hideModal: function hideModal() {
      this.create_new = false;
      this.edit_record = false;
      if (!this.isModal && this.$route.name !== 'manage_categories') {
        this.$router.push({
          path: '/manage_sub_subcategories'
        });
      }
    },
    onCategorySaved: function onCategorySaved(message) {
      this.showMessage('success', message);
      this.getCategories();
      this.create_new = null;
    },
    openImageModal: function openImageModal(imageUrl) {
      this.previewImageUrl = imageUrl;
      this.$refs['image-modal'].show();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubcategories.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubcategories.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditSubcategory_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditSubcategory.vue */ "./resources/js/views/Category/EditSubcategory.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isModal: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    'app-edit-record': _EditSubcategory_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      fields: [{
        key: 'id',
        label: 'Sr. No.',
        "class": 'text-center',
        sortable: true,
        sortDirection: 'asc'
      }, {
        key: 'name',
        label: this.$titleLabel('name'),
        "class": 'text-center',
        sortable: true
      }, {
        key: 'parent_category',
        label: this.$titleLabel('parent_category'),
        "class": 'text-center'
      }, {
        key: 'image',
        label: this.$titleLabel('image'),
        "class": 'text-center'
      }, {
        key: 'actions',
        label: this.$titleLabel('actions'),
        "class": 'text-center'
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: this.$perPage,
      pageOptions: this.$pageOptions,
      sortBy: 'id',
      sortDesc: true,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      page: 1,
      categories: [],
      parentCategories: [],
      hasParentCategories: false,
      isLoading: false,
      sectionStyle: 'style_1',
      max_visible_categories: 12,
      max_col_in_single_row: 3,
      create_new: null,
      edit_record: null,
      settingModalShow: false,
      currentLanguageId: null,
      activeLanguages: [],
      latestRequestId: 0,
      previewImageUrl: null
    };
  },
  computed: {
    sortOptions: function sortOptions() {
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    },
    pageStart: function pageStart() {
      if (this.totalRows === 0) return 0;
      return (this.currentPage - 1) * this.perPage + 1;
    },
    pageEnd: function pageEnd() {
      return Math.min(this.currentPage * this.perPage, this.totalRows);
    },
    translatedCategories: function translatedCategories() {
      var _this = this;
      var list = Array.isArray(this.categories) ? this.categories : [];
      if (!this.currentLanguageId || list.length === 0) {
        return list;
      }
      return list.map(function (category) {
        var translatedCategory = _objectSpread({}, category);
        if (category.translations && Array.isArray(category.translations)) {
          var translation = category.translations.find(function (t) {
            return t.language_id === _this.currentLanguageId;
          });
          if (translation && translation.name && translation.name.trim() !== '') {
            translatedCategory.name = translation.name;
          }
        }
        return translatedCategory;
      });
    },
    paginatedTranslatedCategories: function paginatedTranslatedCategories() {
      return this.translatedCategories;
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {
      this.showCreateModal();
    },
    currentPage: function currentPage(newPage) {
      this.getCategories();
    },
    perPage: function perPage(newPerPage) {
      this.getCategories();
    },
    filter: function filter(newFilter, oldFilter) {
      if (newFilter !== oldFilter) {
        this.currentPage = 1;
        this.getCategories();
      }
    }
  },
  created: function created() {
    var _this2 = this;
    this.showCreateModal();
    this.fetchActiveLanguages().then(function () {
      _this2.getParentCategories().then(function () {
        _this2.getCategories();
      });
    });
  },
  methods: {
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this3 = this;
      return axios.get(this.$apiUrl + '/active_languages').then(function (response) {
        if (response.data.data && Array.isArray(response.data.data)) {
          _this3.activeLanguages = response.data.data;
          var appLocale = window.appLocale || 'en';
          var currentLanguage = _this3.activeLanguages.find(function (lang) {
            return lang.code === appLocale;
          });
          if (currentLanguage) {
            _this3.currentLanguageId = currentLanguage.id;
          } else {
            var defaultLanguage = _this3.activeLanguages.find(function (lang) {
              return lang.is_default === 1;
            });
            if (defaultLanguage) {
              _this3.currentLanguageId = defaultLanguage.id;
            }
          }
        }
      })["catch"](function (error) {
        console.error('Error loading languages:', error);
      });
    },
    getParentCategories: function getParentCategories() {
      var _this4 = this;
      return axios.get(this.$apiUrl + '/categories', {
        params: {
          parent_id: 0,
          status: 1,
          limit: 1000
        }
      }).then(function (response) {
        var data = response.data || {};
        _this4.parentCategories = (Array.isArray(data.data) ? data.data : []).filter(function (cat) {
          return Number(cat.parent_id) === 0;
        });
        _this4.hasParentCategories = _this4.parentCategories.length > 0;
      })["catch"](function () {
        _this4.parentCategories = [];
        _this4.hasParentCategories = false;
      });
    },
    getParentCategoryName: function getParentCategoryName(parentId) {
      var parent = this.parentCategories.find(function (cat) {
        return Number(cat.id) === Number(parentId);
      });
      return parent ? parent.name : '-';
    },
    getCategories: function getCategories() {
      var _this5 = this;
      this.isLoading = true;
      this.latestRequestId++;
      var currentRequestId = this.latestRequestId;
      var params = {
        filter: this.filter,
        category_level: 'subcategory',
        status: null,
        limit: this.perPage,
        offset: this.currentPage,
        _t: Date.now()
      };
      axios.get(this.$apiUrl + '/categories', {
        params: params
      }).then(function (response) {
        if (currentRequestId !== _this5.latestRequestId) {
          return;
        }
        _this5.isLoading = false;
        var data = response.data || {};
        _this5.categories = Array.isArray(data.data) ? data.data : [];
        _this5.totalRows = Number(data.total || 0);
      })["catch"](function () {
        if (currentRequestId !== _this5.latestRequestId) {
          return;
        }
        _this5.isLoading = false;
        _this5.categories = [];
        _this5.totalRows = 0;
      });
    },
    deleteCategory: function deleteCategory(index, id) {
      var _this6 = this;
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
          _this6.isLoading = true;
          var postData = {
            id: id
          };
          axios.post(_this6.$apiUrl + '/categories/delete', postData).then(function (response) {
            _this6.isLoading = false;
            var data = response.data;
            _this6.categories.splice(index, 1);
            _this6.showMessage('success', data.message);
          });
        }
      });
    },
    showCreateModal: function showCreateModal() {
      var create = this.$route.params.create;
      if (create) {
        this.create_new = true;
      }
    },
    hideModal: function hideModal() {
      this.create_new = false;
      this.edit_record = false;
      if (!this.isModal && this.$route.name !== 'manage_categories') {
        this.$router.push({
          path: '/manage_subcategories'
        });
      }
    },
    onCategorySaved: function onCategorySaved(message) {
      this.showMessage('success', message);
      this.getCategories();
      this.create_new = null;
    },
    openImageModal: function openImageModal(imageUrl) {
      this.previewImageUrl = imageUrl;
      this.$refs['image-modal'].show();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=template&id=df3546e8&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=template&id=df3546e8&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.inlineMode ? _c("div", {
    staticClass: "category-inline-form p-3"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between mb-4 border-bottom pb-2"
  }, [_c("h5", {
    staticClass: "mb-0 fw-bold"
  }, [_vm._v(_vm._s(_vm.modal_title))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-outline-secondary",
    on: {
      click: function click($event) {
        return _vm.$emit("modalClose");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  })])]), _vm._v(" "), _vm.isLoadingData ? _c("div", {
    staticClass: "text-center p-5"
  }, [_c("b-spinner", {
    attrs: {
      label: "Loading..."
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.__("loading")))])], 1) : _c("form", {
    ref: "my-form",
    attrs: {
      novalidate: ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveRecord.apply(null, arguments);
      }
    }
  }, [_vm.defaultLanguage ? _c("div", [_vm._l([_vm.defaultLanguage], function (language) {
    return [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "form-group",
      "class": {
        required: language.is_default
      }
    }, [_c("label", [_vm._v(_vm._s(_vm.dynamicNameLabel))]), _vm._v(" "), language.is_default ? _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e(), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].name,
        expression: "translations[language.id].name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.dynamicNamePlaceholder
      },
      domProps: {
        value: _vm.translations[language.id].name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "name", $event.target.value);
        }
      }
    })]), _vm._v(" "), language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("image")))]), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]), _vm._v(" "), _c("p", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(_vm.__("please_choose_square_image_of_larger_than_350px_350px_and_smaller_than_550px_550px")))]), _vm._v(" "), _vm.error ? _c("span", {
      staticClass: "error"
    }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c("input", {
      ref: "file_image",
      refInFor: true,
      staticClass: "file-input",
      staticStyle: {
        display: "none"
      },
      attrs: {
        type: "file",
        name: "category_image",
        accept: "image/*"
      },
      on: {
        change: _vm.handleFileUpload
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "file-input-div bg-gray-100",
      on: {
        click: _vm.triggerFileInput,
        drop: _vm.dropFile,
        dragover: _vm.handleDragOver,
        dragleave: _vm.handleDragLeave
      }
    }, [_vm.image && _vm.image.name !== "" ? [_c("label", [_vm._v(_vm._s(_vm.__("selected_file_name")) + " " + _vm._s(_vm.image.name))])] : [_vm._m(0, true), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.__("drop_files_here_or_click_to_upload")))])]], 2), _vm._v(" "), _vm.image_url ? _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-4"
    }, [_c("img", {
      staticClass: "custom-image",
      attrs: {
        src: _vm.image_url,
        title: "Category Image",
        alt: "Category Image"
      }
    })])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_title")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_title,
        expression: "translations[language.id].meta_title"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_title")
      },
      domProps: {
        value: _vm.translations[language.id].meta_title
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_title", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_keywords")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_keywords,
        expression: "translations[language.id].meta_keywords"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_keywords")
      },
      domProps: {
        value: _vm.translations[language.id].meta_keywords
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_keywords", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("schema_markup")) + "\n                                "), _c("small", {
      staticClass: "d-inline-flex mb-3 px-2 py-1 text-muted bg-secondary bg-opacity-10 border border-secondary border-opacity-10 rounded-2",
      attrs: {
        id: "schema_markup_inline_" + language.id
      }
    }, [_c("i", {
      staticClass: "fa fa-info-circle"
    })]), _vm._v(" "), _c("b-popover", {
      attrs: {
        target: "schema_markup_inline_" + language.id,
        triggers: "hover",
        placement: "left"
      }
    }, [_c("p", [_vm._v("Schema markup helps search engines read and understand content.")])])], 1), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].schema_markup,
        expression: "translations[language.id].schema_markup"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_schema_markup")
      },
      domProps: {
        value: _vm.translations[language.id].schema_markup
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "schema_markup", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_description")))]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_description,
        expression: "translations[language.id].meta_description"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_description"),
        rows: "4"
      },
      domProps: {
        value: _vm.translations[language.id].meta_description
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_description", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.id && language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("status")))]), _vm._v(" "), _c("div", {
      staticClass: "col-md-9 text-left mt-1"
    }, [_c("b-form-radio-group", {
      attrs: {
        options: [{
          text: _vm.__("deactivate"),
          value: 0
        }, {
          text: _vm.__("activate"),
          value: 1
        }],
        buttons: "",
        "button-variant": "outline-primary"
      },
      model: {
        value: _vm.status,
        callback: function callback($$v) {
          _vm.status = $$v;
        },
        expression: "status"
      }
    })], 1)]) : _vm._e()])];
  })], 2) : _c("div", {
    staticClass: "text-center p-5"
  }, [_c("b-spinner", {
    attrs: {
      label: "Loading languages..."
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.__("loading_languages")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "text-end mt-4"
  }, [_c("b-button", {
    staticClass: "me-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("modalClose");
      }
    }
  }, [_vm._v(_vm._s(_vm.__("cancel")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary",
      disabled: _vm.isLoading
    },
    on: {
      click: _vm.saveRecord
    }
  }, [_vm._v(_vm._s(_vm.__("save")) + "\n                     "), _vm.isLoading ? _c("b-spinner", {
    attrs: {
      small: "",
      label: "Spinning"
    }
  }) : _vm._e()], 1)], 1)])]) : _c("b-modal", {
    ref: "my-modal",
    attrs: {
      title: _vm.modal_title,
      scrollable: "",
      "no-close-on-backdrop": "",
      "no-fade": "",
      "static": "",
      size: "xl"
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
  }, [_vm._v(_vm._s(_vm.__("save")) + "\n                "), _vm.isLoading ? _c("b-spinner", {
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
  }, [_vm._v(_vm._s(_vm.__("cancel")))])], 1), _vm._v(" "), _vm.isLoadingData ? _c("div", {
    staticClass: "text-center p-5"
  }, [_c("b-spinner", {
    attrs: {
      label: "Loading..."
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.__("loading")))])], 1) : _c("form", {
    ref: "my-form",
    attrs: {
      novalidate: ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveRecord.apply(null, arguments);
      }
    }
  }, [_vm.defaultLanguage ? _c("div", [_vm._l([_vm.defaultLanguage], function (language) {
    return [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "form-group",
      "class": {
        required: language.is_default
      }
    }, [_c("label", [_vm._v(_vm._s(_vm.dynamicNameLabel))]), _vm._v(" "), language.is_default ? _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e(), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].name,
        expression: "translations[language.id].name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.dynamicNamePlaceholder
      },
      domProps: {
        value: _vm.translations[language.id].name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "name", $event.target.value);
        }
      }
    })]), _vm._v(" "), language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("image")))]), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]), _vm._v(" "), _c("p", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(_vm.__("please_choose_square_image_of_larger_than_350px_350px_and_smaller_than_550px_550px")))]), _vm._v(" "), _vm.error ? _c("span", {
      staticClass: "error"
    }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c("input", {
      ref: "file_image",
      refInFor: true,
      staticClass: "file-input",
      staticStyle: {
        display: "none"
      },
      attrs: {
        type: "file",
        name: "category_image",
        accept: "image/*"
      },
      on: {
        change: _vm.handleFileUpload
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "file-input-div bg-gray-100",
      on: {
        click: _vm.triggerFileInput,
        drop: _vm.dropFile,
        dragover: _vm.handleDragOver,
        dragleave: _vm.handleDragLeave
      }
    }, [_vm.image && _vm.image.name !== "" ? [_c("label", [_vm._v(_vm._s(_vm.__("selected_file_name")) + " " + _vm._s(_vm.image.name))])] : [_c("label", [_c("i", {
      staticClass: "fa fa-cloud-upload-alt fa-2x"
    })]), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.__("drop_files_here_or_click_to_upload")))])]], 2), _vm._v(" "), _vm.image_url ? _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-4"
    }, [_c("img", {
      staticClass: "custom-image",
      attrs: {
        src: _vm.image_url,
        title: "Category Image",
        alt: "Category Image"
      }
    })])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_title")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_title,
        expression: "translations[language.id].meta_title"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_title")
      },
      domProps: {
        value: _vm.translations[language.id].meta_title
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_title", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_keywords")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_keywords,
        expression: "translations[language.id].meta_keywords"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_keywords")
      },
      domProps: {
        value: _vm.translations[language.id].meta_keywords
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_keywords", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("schema_markup")) + "\n                                "), _c("small", {
      staticClass: "d-inline-flex mb-3 px-2 py-1 text-muted bg-secondary bg-opacity-10 border border-secondary border-opacity-10 rounded-2",
      attrs: {
        id: "schema_markup_" + language.id
      }
    }, [_c("i", {
      staticClass: "fa fa-info-circle"
    })]), _vm._v(" "), _c("b-popover", {
      attrs: {
        target: "schema_markup_" + language.id,
        triggers: "hover",
        placement: "left"
      }
    }, [_c("p", [_vm._v("Schema markup, also known as structured data, is the language search engines use\n                                        to read and\n                                        understand the content on your pages. By language, we mean a semantic vocabulary\n                                        (code) that helps\n                                        search engines characterize and categorize the content of web pages. Learn more\n                                        about schema markup\n                                        and generate it for your website using the "), _c("a", {
      attrs: {
        href: "https://www.rankranger.com/schema-markup-generator",
        target: "_blank"
      }
    }, [_vm._v("Rank Ranger Schema\n                                            Markup Generator")])])])], 1), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].schema_markup,
        expression: "translations[language.id].schema_markup"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_schema_markup")
      },
      domProps: {
        value: _vm.translations[language.id].schema_markup
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "schema_markup", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_description")))]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_description,
        expression: "translations[language.id].meta_description"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_description"),
        rows: "4"
      },
      domProps: {
        value: _vm.translations[language.id].meta_description
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_description", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.id && language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("status")))]), _vm._v(" "), _c("div", {
      staticClass: "col-md-9 text-left mt-1"
    }, [_c("b-form-radio-group", {
      attrs: {
        options: [{
          text: _vm.__("deactivate"),
          value: 0
        }, {
          text: _vm.__("activate"),
          value: 1
        }],
        buttons: "",
        "button-variant": "outline-primary"
      },
      model: {
        value: _vm.status,
        callback: function callback($$v) {
          _vm.status = $$v;
        },
        expression: "status"
      }
    })], 1)]) : _vm._e()])];
  })], 2) : _c("div", {
    staticClass: "text-center p-5"
  }, [_c("b-spinner", {
    attrs: {
      label: "Loading languages..."
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.__("loading_languages")))])], 1), _vm._v(" "), _c("button", {
    ref: "dummy_submit",
    staticStyle: {
      display: "none"
    }
  })])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("i", {
    staticClass: "fa fa-cloud-upload-alt fa-2x"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=template&id=63518742&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=template&id=63518742&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "static": "",
      size: "xl"
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
  }, [_vm._v(_vm._s(_vm.__("cancel")))])], 1), _vm._v(" "), _vm.isLoadingData ? _c("div", {
    staticClass: "text-center p-5"
  }, [_c("b-spinner", {
    attrs: {
      label: "Loading..."
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.__("loading")))])], 1) : _c("form", {
    ref: "my-form",
    attrs: {
      novalidate: ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveRecord.apply(null, arguments);
      }
    }
  }, [_vm.defaultLanguage ? _c("div", [_vm._l([_vm.defaultLanguage], function (language) {
    return [_c("div", {
      key: language.id,
      staticClass: "row"
    }, [language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("category"))), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.parent_category_id,
        expression: "parent_category_id"
      }],
      staticClass: "form-control form-select",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.parent_category_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
        }
      }
    }, [_c("option", {
      attrs: {
        value: "0"
      }
    }, [_vm._v(_vm._s(_vm.__("select parent category")))]), _vm._v(" "), _vm._l(_vm.parent_categories, function (category) {
      return _c("option", {
        key: category.id,
        domProps: {
          value: category.id
        }
      }, [_vm._v("\n                                " + _vm._s(category.name) + "\n                            ")]);
    })], 2)]) : _vm._e(), _vm._v(" "), language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v("Sub Category"), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.parent_subcategory_id,
        expression: "parent_subcategory_id"
      }],
      staticClass: "form-control form-select",
      attrs: {
        disabled: Number(_vm.parent_category_id) === 0
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.parent_subcategory_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
        }
      }
    }, [_c("option", {
      attrs: {
        value: "0"
      }
    }, [_vm._v("Select Sub Category")]), _vm._v(" "), _vm._l(_vm.filteredParentSubcategories, function (subcategory) {
      return _c("option", {
        key: subcategory.id,
        domProps: {
          value: subcategory.id
        }
      }, [_vm._v("\n                                " + _vm._s(subcategory.name) + "\n                            ")]);
    })], 2)]) : _vm._e(), _vm._v(" "), language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v("Sub Sub Category"), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.parent_id,
        expression: "parent_id"
      }],
      staticClass: "form-control form-select",
      attrs: {
        disabled: Number(_vm.parent_subcategory_id) === 0
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.parent_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
        }
      }
    }, [_c("option", {
      attrs: {
        value: "0"
      }
    }, [_vm._v("Select Sub Sub Category")]), _vm._v(" "), _vm._l(_vm.filteredParentSubSubcategories, function (subSubcategory) {
      return _c("option", {
        key: subSubcategory.id,
        domProps: {
          value: subSubcategory.id
        }
      }, [_vm._v("\n                                " + _vm._s(subSubcategory.name) + "\n                            ")]);
    })], 2)]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "form-group",
      "class": {
        required: language.is_default
      }
    }, [_c("label", [_vm._v("Sub Sub Sub Category Name")]), _vm._v(" "), language.is_default ? _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e(), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].name,
        expression: "translations[language.id].name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: "Enter Sub Sub Sub Category Name"
      },
      domProps: {
        value: _vm.translations[language.id].name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "name", $event.target.value);
        }
      }
    })]), _vm._v(" "), language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("image")))]), _vm._v(" "), _c("p", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(_vm.__("please_choose_square_image_of_larger_than_350px_350px_and_smaller_than_550px_550px")))]), _vm._v(" "), _vm.error ? _c("span", {
      staticClass: "error"
    }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c("input", {
      ref: "file_image",
      refInFor: true,
      staticClass: "file-input",
      staticStyle: {
        display: "none"
      },
      attrs: {
        type: "file",
        name: "category_image",
        accept: "image/*"
      },
      on: {
        change: _vm.handleFileUpload
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "file-input-div bg-gray-100",
      on: {
        click: _vm.triggerFileInput,
        drop: _vm.dropFile,
        dragover: _vm.handleDragOver,
        dragleave: _vm.handleDragLeave
      }
    }, [_vm.image && _vm.image.name !== "" ? [_c("label", [_vm._v(_vm._s(_vm.__("selected_file_name")) + " " + _vm._s(_vm.image.name))])] : [_c("label", [_c("i", {
      staticClass: "fa fa-cloud-upload-alt fa-2x"
    })]), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.__("drop_files_here_or_click_to_upload")))])]], 2), _vm._v(" "), _vm.image_url ? _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-4"
    }, [_c("img", {
      staticClass: "custom-image",
      attrs: {
        src: _vm.image_url,
        title: "Category Image",
        alt: "Category Image"
      }
    })])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_title")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_title,
        expression: "translations[language.id].meta_title"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_title")
      },
      domProps: {
        value: _vm.translations[language.id].meta_title
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_title", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_keywords")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_keywords,
        expression: "translations[language.id].meta_keywords"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_keywords")
      },
      domProps: {
        value: _vm.translations[language.id].meta_keywords
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_keywords", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("schema_markup")) + "\n                            "), _c("small", {
      staticClass: "d-inline-flex mb-3 px-2 py-1 text-muted bg-secondary bg-opacity-10 border border-secondary border-opacity-10 rounded-2",
      attrs: {
        id: "schema_markup_" + language.id
      }
    }, [_c("i", {
      staticClass: "fa fa-info-circle"
    })]), _vm._v(" "), _c("b-popover", {
      attrs: {
        target: "schema_markup_" + language.id,
        triggers: "hover",
        placement: "left"
      }
    }, [_c("p", [_vm._v("Schema markup, also known as structured data, is the language search engines use\n                                    to read and\n                                    understand the content on your pages. By language, we mean a semantic vocabulary\n                                    (code) that helps\n                                    search engines characterize and categorize the content of web pages. Learn more\n                                    about schema markup\n                                    and generate it for your website using the "), _c("a", {
      attrs: {
        href: "https://www.rankranger.com/schema-markup-generator",
        target: "_blank"
      }
    }, [_vm._v("Rank Ranger Schema\n                                        Markup Generator")])])])], 1), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].schema_markup,
        expression: "translations[language.id].schema_markup"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_schema_markup")
      },
      domProps: {
        value: _vm.translations[language.id].schema_markup
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "schema_markup", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_description")))]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_description,
        expression: "translations[language.id].meta_description"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_description"),
        rows: "4"
      },
      domProps: {
        value: _vm.translations[language.id].meta_description
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_description", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.id && language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("status")))]), _vm._v(" "), _c("div", {
      staticClass: "col-md-9 text-left mt-1"
    }, [_c("b-form-radio-group", {
      attrs: {
        options: [{
          text: _vm.__("deactivate"),
          value: 0
        }, {
          text: _vm.__("activate"),
          value: 1
        }],
        buttons: "",
        "button-variant": "outline-primary"
      },
      model: {
        value: _vm.status,
        callback: function callback($$v) {
          _vm.status = $$v;
        },
        expression: "status"
      }
    })], 1)]) : _vm._e()])];
  })], 2) : _c("div", {
    staticClass: "text-center p-5"
  }, [_c("b-spinner", {
    attrs: {
      label: "Loading languages..."
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.__("loading_languages")))])], 1), _vm._v(" "), _c("button", {
    ref: "dummy_submit",
    staticStyle: {
      display: "none"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=template&id=24d9bb8a&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=template&id=24d9bb8a&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "static": "",
      size: "xl"
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
  }, [_vm._v(_vm._s(_vm.__("cancel")))])], 1), _vm._v(" "), _vm.isLoadingData ? _c("div", {
    staticClass: "text-center p-5"
  }, [_c("b-spinner", {
    attrs: {
      label: "Loading..."
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.__("loading")))])], 1) : _c("form", {
    ref: "my-form",
    attrs: {
      novalidate: ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveRecord.apply(null, arguments);
      }
    }
  }, [_vm.defaultLanguage ? _c("div", [_vm._l([_vm.defaultLanguage], function (language) {
    return [_c("div", {
      staticClass: "row"
    }, [language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("category"))), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.parent_category_id,
        expression: "parent_category_id"
      }],
      staticClass: "form-control form-select",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.parent_category_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
        }
      }
    }, [_c("option", {
      attrs: {
        value: "0"
      }
    }, [_vm._v(_vm._s(_vm.__("select parent category")))]), _vm._v(" "), _vm._l(_vm.parent_categories, function (category) {
      return _c("option", {
        key: category.id,
        domProps: {
          value: category.id
        }
      }, [_vm._v("\n                                " + _vm._s(category.name) + "\n                            ")]);
    })], 2)]) : _vm._e(), _vm._v(" "), language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v("Sub Category"), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.parent_id,
        expression: "parent_id"
      }],
      staticClass: "form-control form-select",
      attrs: {
        disabled: Number(_vm.parent_category_id) === 0
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.parent_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
        }
      }
    }, [_c("option", {
      attrs: {
        value: "0"
      }
    }, [_vm._v("Select Sub Category")]), _vm._v(" "), _vm._l(_vm.filteredParentSubcategories, function (subcategory) {
      return _c("option", {
        key: subcategory.id,
        domProps: {
          value: subcategory.id
        }
      }, [_vm._v("\n                                " + _vm._s(subcategory.name) + "\n                            ")]);
    })], 2)]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "form-group",
      "class": {
        required: language.is_default
      }
    }, [_c("label", [_vm._v(_vm._s(_vm.__("Sub Sub category name")))]), _vm._v(" "), language.is_default ? _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e(), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].name,
        expression: "translations[language.id].name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter sub sub category name")
      },
      domProps: {
        value: _vm.translations[language.id].name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "name", $event.target.value);
        }
      }
    })]), _vm._v(" "), language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("image")))]), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]), _vm._v(" "), _c("p", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(_vm.__("please_choose_square_image_of_larger_than_350px_350px_and_smaller_than_550px_550px")))]), _vm._v(" "), _vm.error ? _c("span", {
      staticClass: "error"
    }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c("input", {
      ref: "file_image",
      refInFor: true,
      staticClass: "file-input",
      staticStyle: {
        display: "none"
      },
      attrs: {
        type: "file",
        name: "category_image",
        accept: "image/*"
      },
      on: {
        change: _vm.handleFileUpload
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "file-input-div bg-gray-100",
      on: {
        click: _vm.triggerFileInput,
        drop: _vm.dropFile,
        dragover: _vm.handleDragOver,
        dragleave: _vm.handleDragLeave
      }
    }, [_vm.image && _vm.image.name !== "" ? [_c("label", [_vm._v(_vm._s(_vm.__("selected_file_name")) + " " + _vm._s(_vm.image.name))])] : [_c("label", [_c("i", {
      staticClass: "fa fa-cloud-upload-alt fa-2x"
    })]), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.__("drop_files_here_or_click_to_upload")))])]], 2), _vm._v(" "), _vm.image_url ? _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-4"
    }, [_c("img", {
      staticClass: "custom-image",
      attrs: {
        src: _vm.image_url,
        title: "Category Image",
        alt: "Category Image"
      }
    })])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_title")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_title,
        expression: "translations[language.id].meta_title"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_title")
      },
      domProps: {
        value: _vm.translations[language.id].meta_title
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_title", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_keywords")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_keywords,
        expression: "translations[language.id].meta_keywords"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_keywords")
      },
      domProps: {
        value: _vm.translations[language.id].meta_keywords
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_keywords", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("schema_markup")) + "\n                            "), _c("small", {
      staticClass: "d-inline-flex mb-3 px-2 py-1 text-muted bg-secondary bg-opacity-10 border border-secondary border-opacity-10 rounded-2",
      attrs: {
        id: "schema_markup_" + language.id
      }
    }, [_c("i", {
      staticClass: "fa fa-info-circle"
    })]), _vm._v(" "), _c("b-popover", {
      attrs: {
        target: "schema_markup_" + language.id,
        triggers: "hover",
        placement: "left"
      }
    }, [_c("p", [_vm._v("Schema markup, also known as structured data, is the language search engines use\n                                    to read and\n                                    understand the content on your pages. By language, we mean a semantic vocabulary\n                                    (code) that helps\n                                    search engines characterize and categorize the content of web pages. Learn more\n                                    about schema markup\n                                    and generate it for your website using the "), _c("a", {
      attrs: {
        href: "https://www.rankranger.com/schema-markup-generator",
        target: "_blank"
      }
    }, [_vm._v("Rank Ranger Schema\n                                        Markup Generator")])])])], 1), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].schema_markup,
        expression: "translations[language.id].schema_markup"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_schema_markup")
      },
      domProps: {
        value: _vm.translations[language.id].schema_markup
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "schema_markup", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_description")))]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_description,
        expression: "translations[language.id].meta_description"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_description"),
        rows: "4"
      },
      domProps: {
        value: _vm.translations[language.id].meta_description
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_description", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.id && language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("status")))]), _vm._v(" "), _c("div", {
      staticClass: "col-md-9 text-left mt-1"
    }, [_c("b-form-radio-group", {
      attrs: {
        options: [{
          text: _vm.__("deactivate"),
          value: 0
        }, {
          text: _vm.__("activate"),
          value: 1
        }],
        buttons: "",
        "button-variant": "outline-primary"
      },
      model: {
        value: _vm.status,
        callback: function callback($$v) {
          _vm.status = $$v;
        },
        expression: "status"
      }
    })], 1)]) : _vm._e()])];
  })], 2) : _c("div", {
    staticClass: "text-center p-5"
  }, [_c("b-spinner", {
    attrs: {
      label: "Loading languages..."
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.__("loading_languages")))])], 1), _vm._v(" "), _c("button", {
    ref: "dummy_submit",
    staticStyle: {
      display: "none"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=template&id=326f2c42&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=template&id=326f2c42&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "static": "",
      size: "xl"
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
  }, [_vm._v(_vm._s(_vm.__("cancel")))])], 1), _vm._v(" "), _vm.isLoadingData ? _c("div", {
    staticClass: "text-center p-5"
  }, [_c("b-spinner", {
    attrs: {
      label: "Loading..."
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.__("loading")))])], 1) : _c("form", {
    ref: "my-form",
    attrs: {
      novalidate: ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveRecord.apply(null, arguments);
      }
    }
  }, [_vm.defaultLanguage ? _c("div", [_vm._l([_vm.defaultLanguage], function (language) {
    return [_c("div", {
      staticClass: "row"
    }, [language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("parent_category"))), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.parent_id,
        expression: "parent_id"
      }],
      staticClass: "form-control form-select",
      domProps: {
        innerHTML: _vm._s(_vm.parent_categories)
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.parent_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
        }
      }
    })]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "form-group",
      "class": {
        required: language.is_default
      }
    }, [_c("label", [_vm._v(_vm._s(_vm.__("Sub Category Name")))]), _vm._v(" "), language.is_default ? _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e(), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].name,
        expression: "translations[language.id].name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter sub category name")
      },
      domProps: {
        value: _vm.translations[language.id].name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "name", $event.target.value);
        }
      }
    })]), _vm._v(" "), language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("image")))]), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]), _vm._v(" "), _c("p", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(_vm.__("please_choose_square_image_of_larger_than_350px_350px_and_smaller_than_550px_550px")))]), _vm._v(" "), _vm.error ? _c("span", {
      staticClass: "error"
    }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c("input", {
      ref: "file_image",
      refInFor: true,
      staticClass: "file-input",
      staticStyle: {
        display: "none"
      },
      attrs: {
        type: "file",
        name: "category_image",
        accept: "image/*"
      },
      on: {
        change: _vm.handleFileUpload
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "file-input-div bg-gray-100",
      on: {
        click: _vm.triggerFileInput,
        drop: _vm.dropFile,
        dragover: _vm.handleDragOver,
        dragleave: _vm.handleDragLeave
      }
    }, [_vm.image && _vm.image.name !== "" ? [_c("label", [_vm._v(_vm._s(_vm.__("selected_file_name")) + " " + _vm._s(_vm.image.name))])] : [_c("label", [_c("i", {
      staticClass: "fa fa-cloud-upload-alt fa-2x"
    })]), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.__("drop_files_here_or_click_to_upload")))])]], 2), _vm._v(" "), _vm.image_url ? _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-4"
    }, [_c("img", {
      staticClass: "custom-image",
      attrs: {
        src: _vm.image_url,
        title: "Category Image",
        alt: "Category Image"
      }
    })])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_title")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_title,
        expression: "translations[language.id].meta_title"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_title")
      },
      domProps: {
        value: _vm.translations[language.id].meta_title
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_title", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_keywords")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_keywords,
        expression: "translations[language.id].meta_keywords"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_keywords")
      },
      domProps: {
        value: _vm.translations[language.id].meta_keywords
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_keywords", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("schema_markup")) + "\n                            "), _c("small", {
      staticClass: "d-inline-flex mb-3 px-2 py-1 text-muted bg-secondary bg-opacity-10 border border-secondary border-opacity-10 rounded-2",
      attrs: {
        id: "schema_markup_" + language.id
      }
    }, [_c("i", {
      staticClass: "fa fa-info-circle"
    })]), _vm._v(" "), _c("b-popover", {
      attrs: {
        target: "schema_markup_" + language.id,
        triggers: "hover",
        placement: "left"
      }
    }, [_c("p", [_vm._v("Schema markup, also known as structured data, is the language search engines use\n                                    to read and\n                                    understand the content on your pages. By language, we mean a semantic vocabulary\n                                    (code) that helps\n                                    search engines characterize and categorize the content of web pages. Learn more\n                                    about schema markup\n                                    and generate it for your website using the "), _c("a", {
      attrs: {
        href: "https://www.rankranger.com/schema-markup-generator",
        target: "_blank"
      }
    }, [_vm._v("Rank Ranger Schema\n                                        Markup Generator")])])])], 1), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].schema_markup,
        expression: "translations[language.id].schema_markup"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_schema_markup")
      },
      domProps: {
        value: _vm.translations[language.id].schema_markup
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "schema_markup", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_description")))]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.translations[language.id].meta_description,
        expression: "translations[language.id].meta_description"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_description"),
        rows: "4"
      },
      domProps: {
        value: _vm.translations[language.id].meta_description
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.translations[language.id], "meta_description", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.id && language.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("status")))]), _vm._v(" "), _c("div", {
      staticClass: "col-md-9 text-left mt-1"
    }, [_c("b-form-radio-group", {
      attrs: {
        options: [{
          text: _vm.__("deactivate"),
          value: 0
        }, {
          text: _vm.__("activate"),
          value: 1
        }],
        buttons: "",
        "button-variant": "outline-primary"
      },
      model: {
        value: _vm.status,
        callback: function callback($$v) {
          _vm.status = $$v;
        },
        expression: "status"
      }
    })], 1)]) : _vm._e()])];
  })], 2) : _c("div", {
    staticClass: "text-center p-5"
  }, [_c("b-spinner", {
    attrs: {
      label: "Loading languages..."
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.__("loading_languages")))])], 1), _vm._v(" "), _c("button", {
    ref: "dummy_submit",
    staticStyle: {
      display: "none"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageCategories.vue?vue&type=template&id=35266163":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageCategories.vue?vue&type=template&id=35266163 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("h3", {
    staticClass: "modern-page-title mb-0"
  }, [_vm._v(_vm._s(_vm.__("manage_categories")))]), _vm._v(" "), _c("nav", {
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
  }, [_vm._v(_vm._s(_vm.__("manage_categories")))])])])])]), _vm._v(" "), _c("section", {
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
      placeholder: _vm.__("search")
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
    staticClass: "d-flex gap-2 align-items-center flex-wrap"
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
        return _vm.getCategories();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-refresh"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh")))])]), _vm._v(" "), _vm.$can("category_create") ? _c("button", {
    staticClass: "btn btn-figma-columns d-flex align-items-center gap-2",
    on: {
      click: _vm.openAddModal
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.dynamicAddLabel))])]) : _vm._e(), _vm._v(" "), _vm.$can("category_update") ? _c("b-dropdown", {
    attrs: {
      variant: "secondary",
      right: "",
      "toggle-class": "d-flex align-items-center gap-2"
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("i", {
          staticClass: "fa fa-cog"
        }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("settings")))])];
      },
      proxy: true
    }], null, false, 2215263585)
  }, [_vm._v(" "), _c("b-dropdown-item", {
    on: {
      click: function click($event) {
        _vm.create_new_sub_category = true;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus me-2 text-primary"
  }), _vm._v(" Manage Sub Categories\n                                ")]), _vm._v(" "), _c("b-dropdown-item", {
    on: {
      click: function click($event) {
        _vm.create_new_sub_sub_category = true;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus me-2 text-primary"
  }), _vm._v(" Manage Sub Sub Categories\n                                ")]), _vm._v(" "), _c("b-dropdown-item", {
    on: {
      click: function click($event) {
        _vm.create_new_sub_sub_sub_category = true;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus me-2 text-primary"
  }), _vm._v(" Manage Sub Sub Sub Categories\n                                ")])], 1) : _vm._e()], 1)]), _vm._v(" "), _vm.parentCategoryStack.length > 0 ? _c("div", {
    staticClass: "px-3 py-2 bg-light border-bottom"
  }, [_c("nav", {
    attrs: {
      "aria-label": "breadcrumb"
    }
  }, [_c("ol", {
    staticClass: "breadcrumb mb-0",
    staticStyle: {
      background: "transparent",
      padding: "0"
    }
  }, [_c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    staticClass: "text-primary",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.goToRoot();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-home"
  }), _vm._v(" Main Categories")])]), _vm._v(" "), _vm._l(_vm.parentCategoryStack, function (cat, index) {
    return _c("li", {
      key: cat.id,
      staticClass: "breadcrumb-item",
      "class": {
        active: index === _vm.parentCategoryStack.length - 1
      }
    }, [index < _vm.parentCategoryStack.length - 1 ? _c("a", {
      staticClass: "text-primary",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.goToLevel(index);
        }
      }
    }, [_vm._v(_vm._s(cat.name))]) : _c("span", [_vm._v(_vm._s(cat.name))])]);
  })], 2)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("b-table", {
    staticClass: "mb-0",
    attrs: {
      items: _vm.translatedCategories,
      fields: _vm.fields,
      filter: _vm.filter,
      "filter-included-fields": _vm.filterOn,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      busy: _vm.isLoading,
      "show-empty": "",
      small: "",
      "empty-text": _vm.__("no_records_to_show"),
      "empty-filtered-text": _vm.__("no_records_to_show")
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
      key: "cell(name)",
      fn: function fn(row) {
        return [_vm.parentCategoryStack.length < 3 ? _c("span", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "text-primary font-weight-bold",
          staticStyle: {
            cursor: "pointer"
          },
          attrs: {
            title: "Click to view sub-categories"
          },
          on: {
            click: function click($event) {
              return _vm.enterCategory(row.item);
            }
          }
        }, [_vm._v("\n                                    " + _vm._s(row.item.name) + " "), _c("i", {
          staticClass: "fa fa-folder-open text-muted small ms-1"
        })]) : _c("span", {
          staticClass: "font-weight-bold"
        }, [_vm._v("\n                                    " + _vm._s(row.item.name) + "\n                                ")])];
      }
    }, {
      key: "cell(image)",
      fn: function fn(row) {
        return [_c("img", {
          staticStyle: {
            "object-fit": "cover",
            cursor: "pointer",
            "border-radius": "4px"
          },
          attrs: {
            src: row.item.image_url,
            height: "80",
            width: "80"
          },
          on: {
            click: function click($event) {
              return _vm.openImageModal(row.item.image_url);
            }
          }
        })];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2 justify-content-center"
        }, [_vm.parentCategoryStack.length < 3 ? _c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn text-primary",
          attrs: {
            title: "View Sub Categories"
          },
          on: {
            click: function click($event) {
              return _vm.enterCategory(row.item);
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-folder-open text-primary",
          staticStyle: {
            "font-size": "16px"
          }
        })]) : _vm._e(), _vm._v(" "), _vm.$can("category_update") ? _c("button", {
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
        })], 1) : _vm._e(), _vm._v(" "), _vm.$can("category_delete") ? _c("button", {
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
              return _vm.deleteCategory(row.index, row.item.id);
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
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "figma-table-footer flex-wrap gap-3"
  }, [_c("div", {
    staticClass: "showing-results-text small"
  }, [_vm._v("\n                            " + _vm._s(_vm.__("Showing Result")) + " : "), _c("span", {
    staticClass: "showing-bold"
  }, [_vm._v(_vm._s(_vm.pageEnd))]), _vm._v(" " + _vm._s(_vm.__("of")) + " "), _c("span", {
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
    on: {
      change: _vm.getCategories
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)])])])])]), _vm._v(" "), _vm.create_new || _vm.edit_record ? _c("app-edit-record", {
    attrs: {
      record: _vm.edit_record,
      "category-level": _vm.parentCategoryStack.length
    },
    on: {
      modalClose: function modalClose($event) {
        return _vm.hideModal();
      },
      saved: _vm.onCategorySaved
    }
  }) : _vm._e(), _vm._v(" "), _c("b-modal", {
    attrs: {
      title: "Manage Sub Categories",
      size: "xl",
      "hide-footer": "",
      centered: ""
    },
    model: {
      value: _vm.create_new_sub_category,
      callback: function callback($$v) {
        _vm.create_new_sub_category = $$v;
      },
      expression: "create_new_sub_category"
    }
  }, [_c("app-manage-subcategories", {
    attrs: {
      "is-modal": true
    }
  })], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      title: "Manage Sub Sub Categories",
      size: "xl",
      "hide-footer": "",
      centered: ""
    },
    model: {
      value: _vm.create_new_sub_sub_category,
      callback: function callback($$v) {
        _vm.create_new_sub_sub_category = $$v;
      },
      expression: "create_new_sub_sub_category"
    }
  }, [_c("app-manage-sub-subcategories", {
    attrs: {
      "is-modal": true
    }
  })], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      title: "Manage Sub Sub Sub Categories",
      size: "xl",
      "hide-footer": "",
      centered: ""
    },
    model: {
      value: _vm.create_new_sub_sub_sub_category,
      callback: function callback($$v) {
        _vm.create_new_sub_sub_sub_category = $$v;
      },
      expression: "create_new_sub_sub_sub_category"
    }
  }, [_c("app-manage-sub-sub-subcategories", {
    attrs: {
      "is-modal": true
    }
  })], 1), _vm._v(" "), _c("b-modal", {
    ref: "image-modal",
    attrs: {
      title: "",
      "hide-footer": "",
      size: "lg",
      centered: ""
    }
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("img", {
    staticStyle: {
      "max-width": "100%",
      "max-height": "500px"
    },
    attrs: {
      src: _vm.previewImageUrl
    }
  })])]), _vm._v(" "), _c("b-modal", {
    ref: "tree-modal",
    attrs: {
      title: "Related Categories Tree: " + (_vm.selectedCategory ? _vm.selectedCategory.name : ""),
      "hide-footer": "",
      size: "xl",
      centered: ""
    }
  }, [_vm.treeLoading ? _c("div", {
    staticClass: "text-center p-4"
  }, [_c("b-spinner", {
    staticClass: "align-middle text-primary",
    staticStyle: {
      width: "2.5rem",
      height: "2.5rem"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-2 text-muted fw-bold"
  }, [_vm._v("Loading subcategories...")])], 1) : _vm.selectedCategoryTree ? _c("div", {
    staticClass: "p-4 bg-light rounded",
    staticStyle: {
      "overflow-x": "auto"
    }
  }, [_c("div", {
    staticClass: "d-flex flex-column align-items-center text-center",
    staticStyle: {
      "min-width": "max-content"
    }
  }, [_c("div", {
    staticClass: "org-node border border-2 border-primary p-3 bg-white shadow-sm",
    staticStyle: {
      "min-width": "300px",
      "border-radius": "8px"
    }
  }, [_c("h4", {
    staticClass: "mb-2 fw-bold text-uppercase text-dark",
    staticStyle: {
      "letter-spacing": "1px"
    }
  }, [_vm._v(_vm._s(_vm.selectedCategoryTree.name))]), _vm._v(" "), _c("div", {
    staticClass: "badge bg-secondary mb-2 px-3 py-2"
  }, [_vm._v("MAIN CATEGORY")]), _vm._v(" "), _c("div", {
    staticClass: "mt-1"
  }, [_c("span", {
    "class": ["badge", _vm.selectedCategoryTree.status === 1 ? "bg-success" : "bg-danger"]
  }, [_vm._v("\n                            " + _vm._s(_vm.selectedCategoryTree.status === 1 ? "Active" : "Inactive") + "\n                        ")])])]), _vm._v(" "), _vm.selectedCategoryTree.all_childs && _vm.selectedCategoryTree.all_childs.length > 0 ? _c("div", {
    staticClass: "d-flex flex-row justify-content-center mt-3 gap-4"
  }, _vm._l(_vm.selectedCategoryTree.all_childs, function (sub) {
    return _c("div", {
      key: sub.id,
      staticClass: "d-flex flex-column align-items-center"
    }, [_c("i", {
      staticClass: "fa fa-arrow-down text-muted mb-3 fs-5"
    }), _vm._v(" "), _c("div", {
      staticClass: "org-node border border-2 border-secondary p-3 bg-white shadow-sm",
      staticStyle: {
        "min-width": "220px",
        "border-radius": "6px"
      }
    }, [_c("h6", {
      staticClass: "fw-bold text-uppercase mb-2 text-dark",
      staticStyle: {
        "letter-spacing": "0.5px"
      }
    }, [_vm._v(_vm._s(sub.name))]), _vm._v(" "), _c("div", {
      staticClass: "badge bg-secondary mb-2"
    }, [_vm._v("SUB CATEGORY")]), _vm._v(" "), _c("div", {
      staticClass: "mt-1"
    }, [_c("span", {
      "class": ["badge", sub.status === 1 ? "bg-success" : "bg-danger"],
      staticStyle: {
        "font-size": "10px"
      }
    }, [_vm._v("\n                                    " + _vm._s(sub.status === 1 ? "Active" : "Inactive") + "\n                                ")])])]), _vm._v(" "), sub.all_childs && sub.all_childs.length > 0 ? _c("div", {
      staticClass: "d-flex flex-row justify-content-center mt-3 gap-3"
    }, _vm._l(sub.all_childs, function (subSub) {
      return _c("div", {
        key: subSub.id,
        staticClass: "d-flex flex-column align-items-center"
      }, [_c("i", {
        staticClass: "fa fa-arrow-down text-muted mb-3"
      }), _vm._v(" "), _c("div", {
        staticClass: "org-node border border-1 border-secondary p-2 bg-white shadow-sm",
        staticStyle: {
          "min-width": "160px",
          "border-radius": "4px"
        }
      }, [_c("div", {
        staticClass: "fw-bold text-uppercase mb-2 text-dark",
        staticStyle: {
          "font-size": "13px"
        }
      }, [_vm._v(_vm._s(subSub.name))]), _vm._v(" "), _c("div", {
        staticClass: "badge bg-secondary mb-1",
        staticStyle: {
          "font-size": "10px"
        }
      }, [_vm._v("SUB SUB CATEGORY")]), _vm._v(" "), _c("div", {
        staticClass: "mt-1"
      }, [_c("span", {
        "class": ["badge", subSub.status === 1 ? "bg-success" : "bg-danger"],
        staticStyle: {
          "font-size": "9px"
        }
      }, [_vm._v("\n                                            " + _vm._s(subSub.status === 1 ? "Active" : "Inactive") + "\n                                        ")])])]), _vm._v(" "), subSub.all_childs && subSub.all_childs.length > 0 ? _c("div", {
        staticClass: "d-flex flex-row justify-content-center mt-3 gap-2"
      }, _vm._l(subSub.all_childs, function (subSubSub) {
        return _c("div", {
          key: subSubSub.id,
          staticClass: "d-flex flex-column align-items-center"
        }, [_c("i", {
          staticClass: "fa fa-arrow-down text-muted mb-3",
          staticStyle: {
            "font-size": "12px"
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "org-node border border-1 border-light p-2 shadow-sm bg-white",
          staticStyle: {
            "min-width": "130px",
            "border-radius": "4px"
          }
        }, [_c("div", {
          staticClass: "fw-medium text-uppercase mb-1 text-dark",
          staticStyle: {
            "font-size": "11px"
          }
        }, [_vm._v(_vm._s(subSubSub.name))]), _vm._v(" "), _c("div", {
          staticClass: "text-muted mb-1",
          staticStyle: {
            "font-size": "9px"
          }
        }, [_vm._v("(SUB SUB SUB)")]), _vm._v(" "), _c("div", {
          staticClass: "mt-1"
        }, [_c("span", {
          "class": ["badge", subSubSub.status === 1 ? "bg-success" : "bg-danger"],
          staticStyle: {
            "font-size": "9px"
          }
        }, [_vm._v("\n                                                    " + _vm._s(subSubSub.status === 1 ? "Active" : "Inactive") + "\n                                                ")])])])]);
      }), 0) : _vm._e()]);
    }), 0) : _vm._e()]);
  }), 0) : _c("div", {
    staticClass: "text-muted mt-4"
  }, [_c("i", {
    staticClass: "fa fa-info-circle me-1"
  }), _vm._v(" No sub-categories available.\n                ")])])]) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=template&id=6229b325":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=template&id=6229b325 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [!_vm.isModal ? _c("div", {
    staticClass: "page-title mb-2"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("h3", {
    staticClass: "modern-page-title mb-0"
  }, [_vm._v("Sub Sub Sub Category")]), _vm._v(" "), _c("nav", {
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
  }, [_vm._v("Sub Sub Sub Category")])])])])]) : _vm._e(), _vm._v(" "), _c("section", {
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
      placeholder: _vm.__("search")
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
    staticClass: "d-flex gap-2 align-items-center flex-wrap"
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
        return _vm.getCategories();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-refresh"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh")))])]), _vm._v(" "), _vm.$can("category_create") && _vm.hasParentCategories && _vm.hasSubcategories && _vm.hasSubSubcategories ? _c("button", {
    staticClass: "btn btn-figma-columns d-flex align-items-center gap-2",
    on: {
      click: function click($event) {
        _vm.create_new = true;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" "), _c("span", [_vm._v("Add Sub Sub Sub Category")])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("b-table", {
    staticClass: "mb-0",
    attrs: {
      items: _vm.paginatedTranslatedCategories,
      fields: _vm.fields,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      busy: _vm.isLoading,
      "show-empty": "",
      small: "",
      "empty-text": _vm.__("no_records_to_show"),
      "empty-filtered-text": _vm.__("no_records_to_show")
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
      key: "cell(image)",
      fn: function fn(row) {
        return [_c("img", {
          staticStyle: {
            "object-fit": "cover",
            cursor: "pointer",
            "border-radius": "4px"
          },
          attrs: {
            src: row.item.image_url,
            height: "80",
            width: "80"
          },
          on: {
            click: function click($event) {
              return _vm.openImageModal(row.item.image_url);
            }
          }
        })];
      }
    }, {
      key: "cell(parent_category)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(_vm.getParentCategoryName(row.item.parent_id)) + "\n                            ")];
      }
    }, {
      key: "cell(parent_subcategory)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(_vm.getParentSubCategoryName(row.item.parent_id)) + "\n                            ")];
      }
    }, {
      key: "cell(parent_sub_subcategory)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(_vm.getParentSubSubCategoryName(row.item.parent_id)) + "\n                            ")];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2 justify-content-center"
        }, [_vm.$can("category_update") ? _c("button", {
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
        })], 1) : _vm._e(), _vm._v(" "), _vm.$can("category_delete") ? _c("button", {
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
              return _vm.deleteCategory(row.index, row.item.id);
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
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "figma-table-footer flex-wrap gap-3"
  }, [_c("div", {
    staticClass: "showing-results-text small"
  }, [_vm._v("\n                            " + _vm._s(_vm.__("Showing Result")) + " : "), _c("span", {
    staticClass: "showing-bold"
  }, [_vm._v(_vm._s(_vm.pageEnd))]), _vm._v(" " + _vm._s(_vm.__("of")) + " "), _c("span", {
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
    on: {
      change: _vm.getCategories
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)])])])])]), _vm._v(" "), _vm.create_new || _vm.edit_record ? _c("app-edit-record", {
    attrs: {
      record: _vm.edit_record
    },
    on: {
      modalClose: function modalClose($event) {
        return _vm.hideModal();
      },
      saved: _vm.onCategorySaved
    }
  }) : _vm._e(), _vm._v(" "), _c("b-modal", {
    ref: "image-modal",
    attrs: {
      title: "",
      "hide-footer": "",
      size: "lg",
      centered: ""
    }
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("img", {
    staticStyle: {
      "max-width": "100%",
      "max-height": "500px"
    },
    attrs: {
      src: _vm.previewImageUrl
    }
  })])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=template&id=0936fa03":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=template&id=0936fa03 ***!
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
  return _c("div", [_c("div", {
    staticClass: "page-heading"
  }, [!_vm.isModal ? _c("div", {
    staticClass: "page-title mb-2"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("h3", {
    staticClass: "modern-page-title mb-0"
  }, [_vm._v("Sub Sub Category")]), _vm._v(" "), _c("nav", {
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
  }, [_vm._v("Sub Sub Category")])])])])]) : _vm._e(), _vm._v(" "), _c("section", {
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
      placeholder: _vm.__("search")
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
    staticClass: "d-flex gap-2 align-items-center flex-wrap"
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
        return _vm.getCategories();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-refresh"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh")))])]), _vm._v(" "), _vm.$can("category_create") && _vm.hasParentCategories && _vm.hasSubcategories ? _c("button", {
    staticClass: "btn btn-figma-columns d-flex align-items-center gap-2",
    on: {
      click: function click($event) {
        _vm.create_new = true;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("Add Sub Sub category")))])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("b-table", {
    staticClass: "mb-0",
    attrs: {
      items: _vm.paginatedTranslatedCategories,
      fields: _vm.fields,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      busy: _vm.isLoading,
      "show-empty": "",
      small: "",
      "empty-text": _vm.__("no_records_to_show"),
      "empty-filtered-text": _vm.__("no_records_to_show")
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
      key: "cell(image)",
      fn: function fn(row) {
        return [_c("img", {
          staticStyle: {
            "object-fit": "cover",
            cursor: "pointer",
            "border-radius": "4px"
          },
          attrs: {
            src: row.item.image_url,
            height: "80",
            width: "80"
          },
          on: {
            click: function click($event) {
              return _vm.openImageModal(row.item.image_url);
            }
          }
        })];
      }
    }, {
      key: "cell(parent_category)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(_vm.getParentCategoryName(row.item.parent_id)) + "\n                            ")];
      }
    }, {
      key: "cell(parent_subcategory)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(_vm.getParentSubCategoryName(row.item.parent_id)) + "\n                            ")];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2 justify-content-center"
        }, [_vm.$can("category_update") ? _c("button", {
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
        })], 1) : _vm._e(), _vm._v(" "), _vm.$can("category_delete") ? _c("button", {
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
              return _vm.deleteCategory(row.index, row.item.id);
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
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "figma-table-footer flex-wrap gap-3"
  }, [_c("div", {
    staticClass: "showing-results-text small"
  }, [_vm._v("\n                            " + _vm._s(_vm.__("Showing Result")) + " : "), _c("span", {
    staticClass: "showing-bold"
  }, [_vm._v(_vm._s(_vm.pageEnd))]), _vm._v(" " + _vm._s(_vm.__("of")) + " "), _c("span", {
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
    on: {
      change: _vm.getCategories
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)])])])])]), _vm._v(" "), _vm.create_new || _vm.edit_record ? _c("app-edit-record", {
    attrs: {
      record: _vm.edit_record
    },
    on: {
      modalClose: function modalClose($event) {
        return _vm.hideModal();
      },
      saved: _vm.onCategorySaved
    }
  }) : _vm._e(), _vm._v(" "), _c("b-modal", {
    ref: "image-modal",
    attrs: {
      title: "",
      "hide-footer": "",
      size: "lg",
      centered: ""
    }
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("img", {
    staticStyle: {
      "max-width": "100%",
      "max-height": "500px"
    },
    attrs: {
      src: _vm.previewImageUrl
    }
  })])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubcategories.vue?vue&type=template&id=40144fe5":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubcategories.vue?vue&type=template&id=40144fe5 ***!
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
  }, [!_vm.isModal ? _c("div", {
    staticClass: "page-title mb-2"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("h3", {
    staticClass: "modern-page-title mb-0"
  }, [_vm._v("Sub Category")]), _vm._v(" "), _c("nav", {
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
  }, [_vm._v("Sub Category")])])])])]) : _vm._e(), _vm._v(" "), _c("section", {
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
      placeholder: _vm.__("search")
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
    staticClass: "d-flex gap-2 align-items-center flex-wrap"
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
        return _vm.getCategories();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-refresh"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh")))])]), _vm._v(" "), _vm.$can("category_create") && _vm.hasParentCategories ? _c("button", {
    staticClass: "btn btn-figma-columns d-flex align-items-center gap-2",
    on: {
      click: function click($event) {
        _vm.create_new = true;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("Add Subcategory")))])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-0"
  }, [_c("b-table", {
    staticClass: "mb-0",
    attrs: {
      items: _vm.paginatedTranslatedCategories,
      fields: _vm.fields,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      busy: _vm.isLoading,
      "show-empty": "",
      small: "",
      "empty-text": _vm.__("no_records_to_show"),
      "empty-filtered-text": _vm.__("no_records_to_show")
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
      key: "cell(image)",
      fn: function fn(row) {
        return [_c("img", {
          staticStyle: {
            "object-fit": "cover",
            cursor: "pointer",
            "border-radius": "4px"
          },
          attrs: {
            src: row.item.image_url,
            height: "80",
            width: "80"
          },
          on: {
            click: function click($event) {
              return _vm.openImageModal(row.item.image_url);
            }
          }
        })];
      }
    }, {
      key: "cell(parent_category)",
      fn: function fn(row) {
        return [_vm._v("\n                                " + _vm._s(_vm.getParentCategoryName(row.item.parent_id)) + "\n                            ")];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2 justify-content-center"
        }, [_vm.$can("category_update") ? _c("button", {
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
        })], 1) : _vm._e(), _vm._v(" "), _vm.$can("category_delete") ? _c("button", {
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
              return _vm.deleteCategory(row.index, row.item.id);
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
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "figma-table-footer flex-wrap gap-3"
  }, [_c("div", {
    staticClass: "showing-results-text small"
  }, [_vm._v("\n                            " + _vm._s(_vm.__("Showing Result")) + " : "), _c("span", {
    staticClass: "showing-bold"
  }, [_vm._v(_vm._s(_vm.pageEnd))]), _vm._v(" " + _vm._s(_vm.__("of")) + " "), _c("span", {
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
    on: {
      change: _vm.getCategories
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)])])])])]), _vm._v(" "), _vm.create_new || _vm.edit_record ? _c("app-edit-record", {
    attrs: {
      record: _vm.edit_record
    },
    on: {
      modalClose: function modalClose($event) {
        return _vm.hideModal();
      },
      saved: _vm.onCategorySaved
    }
  }) : _vm._e(), _vm._v(" "), _c("b-modal", {
    ref: "image-modal",
    attrs: {
      title: "",
      "hide-footer": "",
      size: "lg",
      centered: ""
    }
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("img", {
    staticStyle: {
      "max-width": "100%",
      "max-height": "500px"
    },
    attrs: {
      src: _vm.previewImageUrl
    }
  })])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/mixins/TranslationHelper.js":
/*!**************************************************!*\
  !*** ./resources/js/mixins/TranslationHelper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    translateEmpty: function translateEmpty(language) {
      var _this = this;
      this.$root.$emit('bv::hide::tooltip');
      if (typeof this.validateDefaultLanguageForTranslation === "function") {
        if (!this.validateDefaultLanguageForTranslation()) return;
      }
      if (this.hasOwnProperty("loadingEmpty")) {
        this.loadingEmpty = true;
      } else {
        this.isTranslating = true;
      }
      var fields = this.translatableFields || [];

      // Check if any field is empty in non-default language tabs
      var hasEmptyFields = this.checkNonDefaultLanguagesHaveEmptyFields(fields);
      if (!hasEmptyFields) {
        // All fields in all non-default languages already have values
        var errorMsg = __("translation_error_all_fields_filled") || "All fields already have values. There is nothing to translate.";
        if (this.hasOwnProperty("loadingEmpty")) {
          this.loadingEmpty = false;
        } else {
          this.isTranslating = false;
        }
        this.showError(errorMsg);
        return;
      }
      this.translateEmptyHelper(language, fields).then(function () {
        _this.showSuccess(__("translation_completed_successfully") || "Translation completed successfully");
      })["catch"](function () {
        // Error handling is done in translateEmptyHelper
      })["finally"](function () {
        if (_this.hasOwnProperty("loadingEmpty")) {
          _this.loadingEmpty = false;
        } else {
          _this.isTranslating = false;
        }
      });
    },
    translateOverwrite: function translateOverwrite(language) {
      var _this2 = this;
      this.$root.$emit('bv::hide::tooltip');
      if (typeof this.validateDefaultLanguageForTranslation === "function") {
        if (!this.validateDefaultLanguageForTranslation()) return;
      }
      if (this.hasOwnProperty("loadingOverwrite")) {
        this.loadingOverwrite = true;
      } else {
        this.isTranslating = true;
      }
      var fields = this.translatableFields || [];
      this.translateOverwriteHelper(language, fields).then(function () {
        _this2.showSuccess(__("translation_overwritten_successfully") || "Translation overwritten successfully");
      })["finally"](function () {
        if (_this2.hasOwnProperty("loadingOverwrite")) {
          _this2.loadingOverwrite = false;
        } else {
          _this2.isTranslating = false;
        }
      });
    },
    getDefaultLanguageData: function getDefaultLanguageData() {
      if (this.translations && this.translations[this.defaultLanguageId]) {
        return this.translations[this.defaultLanguageId];
      } else if (this.form && this.form[this.defaultLanguageId]) {
        return this.form[this.defaultLanguageId];
      }
      return {};
    },
    checkNonDefaultLanguagesHaveEmptyFields: function checkNonDefaultLanguagesHaveEmptyFields() {
      var fieldsToTranslate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      // Determine target object (translations or form)
      var targetObj = null;
      if (this.translations) {
        targetObj = this.translations;
      } else if (this.form) {
        targetObj = this.form;
      }
      if (!targetObj || !this.languages || this.languages.length <= 1) {
        return true; // If no languages or only one language, allow translation
      }
      var fields = fieldsToTranslate.length > 0 ? fieldsToTranslate : this.translatableFields || [];
      if (fields.length === 0) {
        return true; // If no fields to check, allow translation
      }

      // Check if any non-default language has at least one empty field
      var _iterator = _createForOfIteratorHelper(this.languages),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var lang = _step.value;
          if (lang.is_default) continue; // Skip default language

          var langData = targetObj[lang.id];
          if (!langData) {
            return true; // If language data doesn't exist, there are empty fields
          }

          // Check if any field is empty for this language
          var _iterator2 = _createForOfIteratorHelper(fields),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var field = _step2.value;
              var value = langData[field];
              if (value === null || value === undefined || value === "" || typeof value === "string" && value.trim() === "") {
                return true; // Found at least one empty field
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false; // All fields in all non-default languages have values
    },
    translateEmptyHelper: function translateEmptyHelper(language) {
      var _this3 = this;
      var fieldsToTranslate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var source = this.getDefaultLanguageData();
      if (!source || Object.keys(source).length === 0) {
        var errorMsg = __("default_language_data_missing");
        this.showError(errorMsg);
        return Promise.reject("default_language_data_missing");
      }

      // Determine target object (translations or form)
      var targetObj = null;
      if (this.translations) {
        targetObj = this.translations;
      } else if (this.form) {
        targetObj = this.form;
      }
      var dataToSend = {};
      if (fieldsToTranslate.length > 0) {
        fieldsToTranslate.forEach(function (field) {
          dataToSend[field] = source[field];
        });
      } else {
        Object.keys(source).forEach(function (key) {
          if (_typeof(source[key]) !== "object") {
            dataToSend[key] = source[key];
          }
        });
      }

      // Check if all fields in dataToSend are null or empty
      var allFieldsNull = Object.keys(dataToSend).length > 0 && Object.keys(dataToSend).every(function (field) {
        var value = dataToSend[field];
        return value === null || value === undefined || value === "" || typeof value === "string" && value.trim() === "";
      });
      if (allFieldsNull) {
        var _errorMsg = __("translation_error_all_fields_empty") || "All fields are empty. Please fill at least one field in default language before translating.";
        this.showError(_errorMsg);
        return Promise.reject(new Error(_errorMsg));
      }
      return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/languages/translate-empty", {
        target_language: language.code,
        data: dataToSend
      }).then(function (res) {
        if (res.data.status === 0) {
          throw new Error(res.data.message || __("something_went_wrong"));
        }
        var allTranslations = res.data.data;
        _this3.languages.forEach(function (lang) {
          if (lang.is_default) return; // skip default language

          var translated = allTranslations[lang.code];
          if (!translated) return;
          Object.keys(translated).forEach(function (field) {
            if (targetObj && targetObj[lang.id]) {
              if (!targetObj[lang.id][field] || targetObj[lang.id][field] === "") {
                _this3.$set(targetObj[lang.id], field, translated[field]);
              }
            }
          });
        });
        if (typeof _this3.convertTagNamesToIds === "function") {
          _this3.$nextTick(function () {
            _this3.convertTagNamesToIds();
          });
        }
        return res;
      })["catch"](function (error) {
        var msg = error.message;
        if (error.response && error.response.data && error.response.data.message) {
          msg = error.response.data.message;
        }
        var errorMessage = msg || __("something_went_wrong");
        _this3.showError(errorMessage);
        throw error;
      });
    },
    translateOverwriteHelper: function translateOverwriteHelper(language) {
      var _this4 = this;
      var fieldsToTranslate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var source = this.getDefaultLanguageData();
      if (!source || Object.keys(source).length === 0) {
        var errorMsg = __("default_language_data_missing");
        this.showError(errorMsg);
        return Promise.reject("default_language_data_missing");
      }

      // Determine target object (translations or form)
      var targetObj = null;
      if (this.translations) {
        targetObj = this.translations;
      } else if (this.form) {
        targetObj = this.form;
      }
      var dataToSend = {};
      if (fieldsToTranslate.length > 0) {
        fieldsToTranslate.forEach(function (field) {
          dataToSend[field] = source[field];
        });
      } else {
        Object.keys(source).forEach(function (key) {
          if (_typeof(source[key]) !== "object") {
            dataToSend[key] = source[key];
          }
        });
      }

      // Check if all fields in dataToSend are null or empty
      var allFieldsNull = Object.keys(dataToSend).length > 0 && Object.keys(dataToSend).every(function (field) {
        var value = dataToSend[field];
        return value === null || value === undefined || value === "" || typeof value === "string" && value.trim() === "";
      });
      if (allFieldsNull) {
        var _errorMsg2 = __("translation_error_all_fields_empty") || "All fields are empty. Please fill at least one field in default language before translating.";
        this.showError(_errorMsg2);
        return Promise.reject(new Error(_errorMsg2));
      }
      return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/languages/translate-overwrite", {
        target_language: language.code,
        data: dataToSend
      }).then(function (res) {
        if (res.data.status === 0) {
          throw new Error(res.data.message || __("something_went_wrong"));
        }
        var allTranslations = res.data.data;
        _this4.languages.forEach(function (lang) {
          if (lang.is_default) return;
          var translated = allTranslations[lang.code];
          if (!translated) return;
          Object.keys(translated).forEach(function (field) {
            if (targetObj && targetObj[lang.id]) {
              _this4.$set(targetObj[lang.id], field, translated[field]);
            }
          });
        });
        if (typeof _this4.convertTagNamesToIds === "function") {
          _this4.$nextTick(function () {
            _this4.convertTagNamesToIds();
          });
        }
        return res;
      })["catch"](function (error) {
        var msg = error.message;
        if (error.response && error.response.data && error.response.data.message) {
          msg = error.response.data.message;
        }
        var errorMessage = msg || __("something_went_wrong");
        _this4.showError(errorMessage);
        throw error;
      })["finally"](function () {
        _this4.isLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.image_preview[data-v-df3546e8] {\r\n    margin-top: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.image_preview[data-v-63518742] {\r\n    margin-top: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.image_preview[data-v-24d9bb8a] {\r\n    margin-top: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.image_preview[data-v-326f2c42] {\r\n    margin-top: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_df3546e8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_df3546e8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_df3546e8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubSubcategory_vue_vue_type_style_index_0_id_63518742_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubSubcategory_vue_vue_type_style_index_0_id_63518742_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubSubcategory_vue_vue_type_style_index_0_id_63518742_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubcategory_vue_vue_type_style_index_0_id_24d9bb8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubcategory_vue_vue_type_style_index_0_id_24d9bb8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubcategory_vue_vue_type_style_index_0_id_24d9bb8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubcategory_vue_vue_type_style_index_0_id_326f2c42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubcategory_vue_vue_type_style_index_0_id_326f2c42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubcategory_vue_vue_type_style_index_0_id_326f2c42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Category/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Category/Edit.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_df3546e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=df3546e8&scoped=true */ "./resources/js/views/Category/Edit.vue?vue&type=template&id=df3546e8&scoped=true");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/views/Category/Edit.vue?vue&type=script&lang=js");
/* harmony import */ var _Edit_vue_vue_type_style_index_0_id_df3546e8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css */ "./resources/js/views/Category/Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_df3546e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_df3546e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "df3546e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Category/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Category/EditSubSubSubcategory.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/Category/EditSubSubSubcategory.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditSubSubSubcategory_vue_vue_type_template_id_63518742_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditSubSubSubcategory.vue?vue&type=template&id=63518742&scoped=true */ "./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=template&id=63518742&scoped=true");
/* harmony import */ var _EditSubSubSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditSubSubSubcategory.vue?vue&type=script&lang=js */ "./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=script&lang=js");
/* harmony import */ var _EditSubSubSubcategory_vue_vue_type_style_index_0_id_63518742_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css */ "./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditSubSubSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditSubSubSubcategory_vue_vue_type_template_id_63518742_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _EditSubSubSubcategory_vue_vue_type_template_id_63518742_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "63518742",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Category/EditSubSubSubcategory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Category/EditSubSubcategory.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/Category/EditSubSubcategory.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditSubSubcategory_vue_vue_type_template_id_24d9bb8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditSubSubcategory.vue?vue&type=template&id=24d9bb8a&scoped=true */ "./resources/js/views/Category/EditSubSubcategory.vue?vue&type=template&id=24d9bb8a&scoped=true");
/* harmony import */ var _EditSubSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditSubSubcategory.vue?vue&type=script&lang=js */ "./resources/js/views/Category/EditSubSubcategory.vue?vue&type=script&lang=js");
/* harmony import */ var _EditSubSubcategory_vue_vue_type_style_index_0_id_24d9bb8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css */ "./resources/js/views/Category/EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditSubSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditSubSubcategory_vue_vue_type_template_id_24d9bb8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _EditSubSubcategory_vue_vue_type_template_id_24d9bb8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "24d9bb8a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Category/EditSubSubcategory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Category/EditSubcategory.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/Category/EditSubcategory.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditSubcategory_vue_vue_type_template_id_326f2c42_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditSubcategory.vue?vue&type=template&id=326f2c42&scoped=true */ "./resources/js/views/Category/EditSubcategory.vue?vue&type=template&id=326f2c42&scoped=true");
/* harmony import */ var _EditSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditSubcategory.vue?vue&type=script&lang=js */ "./resources/js/views/Category/EditSubcategory.vue?vue&type=script&lang=js");
/* harmony import */ var _EditSubcategory_vue_vue_type_style_index_0_id_326f2c42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css */ "./resources/js/views/Category/EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditSubcategory_vue_vue_type_template_id_326f2c42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _EditSubcategory_vue_vue_type_template_id_326f2c42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "326f2c42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Category/EditSubcategory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Category/ManageCategories.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/Category/ManageCategories.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ManageCategories_vue_vue_type_template_id_35266163__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageCategories.vue?vue&type=template&id=35266163 */ "./resources/js/views/Category/ManageCategories.vue?vue&type=template&id=35266163");
/* harmony import */ var _ManageCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageCategories.vue?vue&type=script&lang=js */ "./resources/js/views/Category/ManageCategories.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManageCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageCategories_vue_vue_type_template_id_35266163__WEBPACK_IMPORTED_MODULE_0__.render,
  _ManageCategories_vue_vue_type_template_id_35266163__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Category/ManageCategories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Category/ManageSubSubSubcategories.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Category/ManageSubSubSubcategories.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ManageSubSubSubcategories_vue_vue_type_template_id_6229b325__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageSubSubSubcategories.vue?vue&type=template&id=6229b325 */ "./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=template&id=6229b325");
/* harmony import */ var _ManageSubSubSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageSubSubSubcategories.vue?vue&type=script&lang=js */ "./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManageSubSubSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageSubSubSubcategories_vue_vue_type_template_id_6229b325__WEBPACK_IMPORTED_MODULE_0__.render,
  _ManageSubSubSubcategories_vue_vue_type_template_id_6229b325__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Category/ManageSubSubSubcategories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Category/ManageSubSubcategories.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/Category/ManageSubSubcategories.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ManageSubSubcategories_vue_vue_type_template_id_0936fa03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageSubSubcategories.vue?vue&type=template&id=0936fa03 */ "./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=template&id=0936fa03");
/* harmony import */ var _ManageSubSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageSubSubcategories.vue?vue&type=script&lang=js */ "./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManageSubSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageSubSubcategories_vue_vue_type_template_id_0936fa03__WEBPACK_IMPORTED_MODULE_0__.render,
  _ManageSubSubcategories_vue_vue_type_template_id_0936fa03__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Category/ManageSubSubcategories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Category/ManageSubcategories.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/Category/ManageSubcategories.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ManageSubcategories_vue_vue_type_template_id_40144fe5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageSubcategories.vue?vue&type=template&id=40144fe5 */ "./resources/js/views/Category/ManageSubcategories.vue?vue&type=template&id=40144fe5");
/* harmony import */ var _ManageSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageSubcategories.vue?vue&type=script&lang=js */ "./resources/js/views/Category/ManageSubcategories.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManageSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageSubcategories_vue_vue_type_template_id_40144fe5__WEBPACK_IMPORTED_MODULE_0__.render,
  _ManageSubcategories_vue_vue_type_template_id_40144fe5__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Category/ManageSubcategories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Category/Edit.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Category/Edit.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubSubSubcategory.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Category/EditSubSubcategory.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Category/EditSubSubcategory.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubSubcategory.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Category/EditSubcategory.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Category/EditSubcategory.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubcategory.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubcategory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Category/ManageCategories.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Category/ManageCategories.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageCategories.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageCategories.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubSubSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageSubSubSubcategories.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubSubSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageSubSubcategories.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Category/ManageSubcategories.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Category/ManageSubcategories.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageSubcategories.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubcategories.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubcategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Category/Edit.vue?vue&type=template&id=df3546e8&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/Category/Edit.vue?vue&type=template&id=df3546e8&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_df3546e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_df3546e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_df3546e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=df3546e8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=template&id=df3546e8&scoped=true");


/***/ }),

/***/ "./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=template&id=63518742&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=template&id=63518742&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubSubcategory_vue_vue_type_template_id_63518742_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubSubcategory_vue_vue_type_template_id_63518742_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubSubcategory_vue_vue_type_template_id_63518742_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubSubSubcategory.vue?vue&type=template&id=63518742&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=template&id=63518742&scoped=true");


/***/ }),

/***/ "./resources/js/views/Category/EditSubSubcategory.vue?vue&type=template&id=24d9bb8a&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/Category/EditSubSubcategory.vue?vue&type=template&id=24d9bb8a&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubcategory_vue_vue_type_template_id_24d9bb8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubcategory_vue_vue_type_template_id_24d9bb8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubcategory_vue_vue_type_template_id_24d9bb8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubSubcategory.vue?vue&type=template&id=24d9bb8a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=template&id=24d9bb8a&scoped=true");


/***/ }),

/***/ "./resources/js/views/Category/EditSubcategory.vue?vue&type=template&id=326f2c42&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/Category/EditSubcategory.vue?vue&type=template&id=326f2c42&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubcategory_vue_vue_type_template_id_326f2c42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubcategory_vue_vue_type_template_id_326f2c42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubcategory_vue_vue_type_template_id_326f2c42_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubcategory.vue?vue&type=template&id=326f2c42&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=template&id=326f2c42&scoped=true");


/***/ }),

/***/ "./resources/js/views/Category/ManageCategories.vue?vue&type=template&id=35266163":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/Category/ManageCategories.vue?vue&type=template&id=35266163 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCategories_vue_vue_type_template_id_35266163__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCategories_vue_vue_type_template_id_35266163__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCategories_vue_vue_type_template_id_35266163__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageCategories.vue?vue&type=template&id=35266163 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageCategories.vue?vue&type=template&id=35266163");


/***/ }),

/***/ "./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=template&id=6229b325":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=template&id=6229b325 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubSubSubcategories_vue_vue_type_template_id_6229b325__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubSubSubcategories_vue_vue_type_template_id_6229b325__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubSubSubcategories_vue_vue_type_template_id_6229b325__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageSubSubSubcategories.vue?vue&type=template&id=6229b325 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubSubcategories.vue?vue&type=template&id=6229b325");


/***/ }),

/***/ "./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=template&id=0936fa03":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=template&id=0936fa03 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubSubcategories_vue_vue_type_template_id_0936fa03__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubSubcategories_vue_vue_type_template_id_0936fa03__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubSubcategories_vue_vue_type_template_id_0936fa03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageSubSubcategories.vue?vue&type=template&id=0936fa03 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubSubcategories.vue?vue&type=template&id=0936fa03");


/***/ }),

/***/ "./resources/js/views/Category/ManageSubcategories.vue?vue&type=template&id=40144fe5":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/Category/ManageSubcategories.vue?vue&type=template&id=40144fe5 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubcategories_vue_vue_type_template_id_40144fe5__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubcategories_vue_vue_type_template_id_40144fe5__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageSubcategories_vue_vue_type_template_id_40144fe5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageSubcategories.vue?vue&type=template&id=40144fe5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/ManageSubcategories.vue?vue&type=template&id=40144fe5");


/***/ }),

/***/ "./resources/js/views/Category/Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/Category/Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_df3546e8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/Edit.vue?vue&type=style&index=0&id=df3546e8&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubSubcategory_vue_vue_type_style_index_0_id_63518742_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubSubcategory.vue?vue&type=style&index=0&id=63518742&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/Category/EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/views/Category/EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubSubcategory_vue_vue_type_style_index_0_id_24d9bb8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubSubcategory.vue?vue&type=style&index=0&id=24d9bb8a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/Category/EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/views/Category/EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSubcategory_vue_vue_type_style_index_0_id_326f2c42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Category/EditSubcategory.vue?vue&type=style&index=0&id=326f2c42&scoped=true&lang=css");


/***/ })

}]);