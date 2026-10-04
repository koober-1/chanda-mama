(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Product_EditProduct_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/TranslationHelper.js */ "./resources/js/mixins/TranslationHelper.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ['record'],
  data: function data() {
    return {
      id: null,
      status: 1,
      languages: [],
      defaultLanguageId: null,
      activeTab: 0,
      form: {},
      image: "",
      image_url: "",
      error: null,
      isLoading: false,
      tabsKey: 0,
      // Translate buttons
      translatableFields: ['name'],
      loadingEmpty: false,
      loadingOverwrite: false
    };
  },
  watch: {
    record: {
      immediate: true,
      deep: true,
      handler: function handler(newVal) {
        if (newVal && newVal.id) {
          this.id = newVal.id;
          this.resetForm();
          // Only load brand data if languages are already loaded
          if (this.languages.length > 0) {
            this.loadBrandWithTranslations();
          }
        } else {
          this.id = null;
          this.resetForm();
        }
      }
    }
  },
  computed: {
    modal_title: function modal_title() {
      return this.id ? __('edit_brand') : __('add_brand');
    },
    defaultLanguage: function defaultLanguage() {
      var _this = this;
      return this.languages.find(function (language) {
        return Number(language.id) === Number(_this.defaultLanguageId);
      }) || null;
    }
  },
  methods: {
    resetForm: function resetForm() {
      var _this2 = this;
      this.form = {};
      this.image = "";
      this.image_url = "";
      this.status = 1;
      this.activeTab = 0;

      // re-init empty translations
      this.languages.forEach(function (lang) {
        _this2.$set(_this2.form, lang.id, {
          name: ''
        });
      });
    },
    showModal: function showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    dropFile: function dropFile(event) {
      event.preventDefault();
      this.$refs.file_image.files = event.dataTransfer.files;
      this.handleFileUpload();
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    handleFileUpload: function handleFileUpload(e) {
      var file = e.target.files[0];
      if (!file) return;
      this.error = null;
      var validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"];
      if (!validTypes.includes(file.type)) {
        this.error = "Invalid image type";
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        this.error = "Image must be less than 2MB";
        return;
      }
      this.image = file;
      this.image_url = URL.createObjectURL(file);
    },
    initializeForm: function initializeForm() {
      var _this3 = this;
      this.languages.forEach(function (lang) {
        if (!_this3.form[lang.id]) {
          _this3.$set(_this3.form, lang.id, {
            name: ''
          });
        }
      });
    },
    loadLanguages: function loadLanguages() {
      var _this4 = this;
      return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/active_languages').then(function (res) {
        _this4.languages = res.data.data;
        var defaultLang = _this4.languages.find(function (l) {
          return l.is_default;
        });
        _this4.defaultLanguageId = (defaultLang === null || defaultLang === void 0 ? void 0 : defaultLang.id) || null;

        // Initialize form for all languages
        _this4.initializeForm();

        // Load brand data if id exists (after languages are loaded)
        if (_this4.id) {
          return _this4.loadBrandWithTranslations();
        }
      });
    },
    loadBrandWithTranslations: function loadBrandWithTranslations() {
      var _this5 = this;
      if (!this.id) return;

      // Ensure languages are loaded first - if not, wait for them
      if (!this.languages.length) {
        return this.loadLanguages();
      }
      return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.$apiUrl + '/products/brands', {
        params: {
          id: this.id
        }
      }).then(function (res) {
        var brand = Array.isArray(res.data.data) ? res.data.data[0] : res.data.data;
        if (!brand) {
          console.error('Brand not found');
          return;
        }
        _this5.status = brand.status;
        _this5.image_url = brand.image_url || "";

        // Ensure all languages are initialized first
        _this5.initializeForm();

        // Process translations with fallback logic
        _this5.languages.forEach(function (lang) {
          var translation = Array.isArray(brand.translations) ? brand.translations.find(function (t) {
            return t.language_id === lang.id;
          }) : null;
          if (lang.is_default) {
            // For default language, use translation if exists, otherwise fallback to main table data
            _this5.$set(_this5.form, lang.id, {
              name: translation && translation.name && translation.name.trim() !== '' ? translation.name : brand.name || ''
            });
          } else {
            // For other languages, use translation if exists, otherwise empty
            _this5.$set(_this5.form, lang.id, {
              name: translation && translation.name ? translation.name : ''
            });
          }
        });
        _this5.tabsKey++;
      });
    },
    validateDefaultLanguage: function validateDefaultLanguage() {
      if (!this.defaultLanguageId) {
        this.showError(__('default_language_not_found'));
        return false;
      }
      var defaultForm = this.form[this.defaultLanguageId];

      // Check required fields for default language
      if (!defaultForm.name || defaultForm.name.trim() === '') {
        this.showError(__('please_fill_name_in_default_language') || __('please_fill_name_in_default_language'));
        this.switchToDefaultLanguageTab();
        return false;
      }

      // Check image for new brands
      if (!this.id && !this.image && !this.image_url) {
        this.showError(__('please_upload_brand_image') || __('please_upload_image'));
        this.switchToDefaultLanguageTab();
        return false;
      }
      return true;
    },
    validateDefaultLanguageForTranslation: function validateDefaultLanguageForTranslation() {
      var _this6 = this;
      var form = this.$refs['my-form'];
      if (form && !form.reportValidity()) {
        this.$nextTick(function () {
          return _this6.switchToDefaultLanguageTab();
        });
        return false;
      }
      return this.validateDefaultLanguage();
    },
    switchToDefaultLanguageTab: function switchToDefaultLanguageTab() {
      var _this7 = this;
      var defaultLangIndex = this.languages.findIndex(function (lang) {
        return lang.id === _this7.defaultLanguageId;
      });
      if (defaultLangIndex !== -1) {
        this.showError(__('please_fill_default_language_required_fields'));
        this.activeTab = defaultLangIndex;
      }
    },
    saveRecord: function saveRecord() {
      var _this8 = this;
      if (!this.validateDefaultLanguage()) return;
      var isUpdate = !!this.id; // check before saving
      this.isLoading = true;
      var languagesToSave = [];
      var defaultLang = this.languages.find(function (l) {
        return l.is_default;
      });
      if (defaultLang) languagesToSave.push(defaultLang);
      this.languages.forEach(function (lang) {
        if (lang.is_default) return;
        var name = _this8.form[lang.id].name;
        if (name && name.trim() !== '') languagesToSave.push(lang);
      });
      var saveSequentially = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var brandId, _i, _languagesToSave, _res$data$data, lang, fd, url, res;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                brandId = _this8.id;
                _i = 0, _languagesToSave = languagesToSave;
              case 1:
                if (!(_i < _languagesToSave.length)) {
                  _context.n = 4;
                  break;
                }
                lang = _languagesToSave[_i];
                fd = new FormData();
                if (brandId) fd.append('id', brandId);
                fd.append('language_id', lang.id);
                fd.append('name', _this8.form[lang.id].name);
                fd.append('status', _this8.status);
                if (lang.is_default && _this8.image) fd.append('image', _this8.image);
                url = brandId ? _this8.$apiUrl + '/products/brands/update' : _this8.$apiUrl + '/products/brands/save';
                _context.n = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(url, fd);
              case 2:
                res = _context.v;
                if (!brandId && (_res$data$data = res.data.data) !== null && _res$data$data !== void 0 && _res$data$data.id) brandId = res.data.data.id;
              case 3:
                _i++;
                _context.n = 1;
                break;
              case 4:
                return _context.a(2, brandId);
            }
          }, _callee);
        }));
        return function saveSequentially() {
          return _ref.apply(this, arguments);
        };
      }();
      saveSequentially().then(/*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(brandId) {
          var message;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                message = isUpdate ? __('brand_updated_successfully') : __('brand_saved_successfully');
                _this8.$emit('saved', message);
                _this8.id = brandId;
                _context2.n = 1;
                return _this8.loadBrandWithTranslations();
              case 1:
                _this8.tabsKey++;
                _this8.hideModal();
              case 2:
                return _context2.a(2);
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }())["finally"](function () {
        return _this8.isLoading = false;
      });
    }
  },
  mounted: function mounted() {
    this.loadLanguages();
    this.resetForm(); // here change 2 
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Auth.js */ "./resources/js/Auth.js");
/* harmony import */ var _mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/TranslationHelper.js */ "./resources/js/mixins/TranslationHelper.js");
/* harmony import */ var _Brands_Edit_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Brands/Edit.vue */ "./resources/js/views/Product/Brands/Edit.vue");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// import InputTag from 'vue-input-tag';






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
  // register the component
  components: {
    Multiselect: (vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default()),
    'editor': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditBrand: _Brands_Edit_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      login_user: _Auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].user,
      isLoading: false,
      isGeneratingAI: false,
      // Track AI content generation state
      isGeneratingCustomAI: false,
      // Track Custom Prompt AI generation state
      aiDebugInfo: null,
      showAiDebug: false,
      cacheTimer: null,
      cachedData: null,
      skipCache: false,
      name: '',
      slug: '',
      seller_id: '',
      brand: null,
      tax_id: 0,
      type: 'packet',
      has_variant: true,
      category_id: '',
      product_category_id: '',
      product_subcategory_id: '',
      product_sub_subcategory_id: '',
      product_sub_sub_subcategory_id: '',
      selected_categories: [],
      // For multi-category selection
      selected_sub_categories: [],
      // For sub categories selection
      selected_sub_sub_categories: [],
      // For sub sub categories selection
      product_type: '',
      made_in: '',
      tag: '',
      allowedOtherMediaTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'video/mp4'],
      maxOtherMediaSize: 3 * 1024 * 1024,
      colorVariantOptions: [{
        code: '#000000',
        value: '#000000',
        label: 'Black',
        emoji: '⚫'
      }, {
        code: '#FFFFFF',
        value: '#FFFFFF',
        label: 'White',
        emoji: '⚪'
      }, {
        code: '#FAF9F6',
        value: '#FAF9F6',
        label: 'Off White',
        emoji: '⚪'
      }, {
        code: '#808080',
        value: '#808080',
        label: 'Grey',
        emoji: '🔘'
      }, {
        code: '#D3D3D3',
        value: '#D3D3D3',
        label: 'Light Grey',
        emoji: '🔘'
      }, {
        code: '#5A5A5A',
        value: '#5A5A5A',
        label: 'Dark Grey',
        emoji: '🔘'
      }, {
        code: '#36454F',
        value: '#36454F',
        label: 'Charcoal',
        emoji: '⚫'
      }, {
        code: '#C0C0C0',
        value: '#C0C0C0',
        label: 'Silver',
        emoji: '🪙'
      }, {
        code: '#FF0000',
        value: '#FF0000',
        label: 'Red',
        emoji: '🔴'
      }, {
        code: '#DC143C',
        value: '#DC143C',
        label: 'Crimson',
        emoji: '🔴'
      }, {
        code: '#800000',
        value: '#800000',
        label: 'Maroon',
        emoji: '🍷'
      }, {
        code: '#800020',
        value: '#800020',
        label: 'Burgundy',
        emoji: '🍷'
      }, {
        code: '#722F37',
        value: '#722F37',
        label: 'Wine',
        emoji: '🍷'
      }, {
        code: '#FFC0CB',
        value: '#FFC0CB',
        label: 'Pink',
        emoji: '🌸'
      }, {
        code: '#F4C2C2',
        value: '#F4C2C2',
        label: 'Baby Pink',
        emoji: '🌸'
      }, {
        code: '#FF66CC',
        value: '#FF66CC',
        label: 'Rose Pink',
        emoji: '🌸'
      }, {
        code: '#FF00FF',
        value: '#FF00FF',
        label: 'Magenta',
        emoji: '🌺'
      }, {
        code: '#FF69B4',
        value: '#FF69B4',
        label: 'Hot Pink',
        emoji: '🌺'
      }, {
        code: '#FFE5B4',
        value: '#FFE5B4',
        label: 'Peach',
        emoji: '🍑'
      }, {
        code: '#FF7F50',
        value: '#FF7F50',
        label: 'Coral',
        emoji: '🧡'
      }, {
        code: '#FFA500',
        value: '#FFA500',
        label: 'Orange',
        emoji: '🟠'
      }, {
        code: '#B7410E',
        value: '#B7410E',
        label: 'Rust',
        emoji: '🟫'
      }, {
        code: '#FFFF00',
        value: '#FFFF00',
        label: 'Yellow',
        emoji: '🟡'
      }, {
        code: '#FFDB58',
        value: '#FFDB58',
        label: 'Mustard',
        emoji: '🌾'
      }, {
        code: '#FFF44F',
        value: '#FFF44F',
        label: 'Lemon Yellow',
        emoji: '🍋'
      }, {
        code: '#FFD700',
        value: '#FFD700',
        label: 'Gold',
        emoji: '✨'
      }, {
        code: '#0000FF',
        value: '#0000FF',
        label: 'Blue',
        emoji: '🔵'
      }, {
        code: '#000080',
        value: '#000080',
        label: 'Navy Blue',
        emoji: '🫐'
      }, {
        code: '#4169E1',
        value: '#4169E1',
        label: 'Royal Blue',
        emoji: '👑'
      }, {
        code: '#87CEEB',
        value: '#87CEEB',
        label: 'Sky Blue',
        emoji: '🩵'
      }, {
        code: '#89CFF0',
        value: '#89CFF0',
        label: 'Baby Blue',
        emoji: '🩵'
      }, {
        code: '#008080',
        value: '#008080',
        label: 'Teal',
        emoji: '🩵'
      }, {
        code: '#00FFFF',
        value: '#00FFFF',
        label: 'Cyan / Aqua',
        emoji: '🩵'
      }, {
        code: '#008000',
        value: '#008000',
        label: 'Green',
        emoji: '🟢'
      }, {
        code: '#006400',
        value: '#006400',
        label: 'Dark Green',
        emoji: '🌲'
      }, {
        code: '#556B2F',
        value: '#556B2F',
        label: 'Olive Green',
        emoji: '🫒'
      }, {
        code: '#98FF98',
        value: '#98FF98',
        label: 'Mint Green',
        emoji: '🌿'
      }, {
        code: '#32CD32',
        value: '#32CD32',
        label: 'Lime Green',
        emoji: '🍋'
      }, {
        code: '#004225',
        value: '#004225',
        label: 'Bottle Green',
        emoji: '🌲'
      }, {
        code: '#800080',
        value: '#800080',
        label: 'Purple',
        emoji: '🟣'
      }, {
        code: '#E6E6FA',
        value: '#E6E6FA',
        label: 'Lavender',
        emoji: '🪻'
      }, {
        code: '#8F00FF',
        value: '#8F00FF',
        label: 'Violet',
        emoji: '🟣'
      }, {
        code: '#8B4513',
        value: '#8B4513',
        label: 'Brown',
        emoji: '🟤'
      }, {
        code: '#3D1C02',
        value: '#3D1C02',
        label: 'Chocolate Brown',
        emoji: '🍫'
      }, {
        code: '#D2B48C',
        value: '#D2B48C',
        label: 'Tan',
        emoji: '🪵'
      }, {
        code: '#F5F5DC',
        value: '#F5F5DC',
        label: 'Beige',
        emoji: '🪵'
      }, {
        code: '#FFFDD0',
        value: '#FFFDD0',
        label: 'Cream',
        emoji: '🥛'
      }, {
        code: '#C3B091',
        value: '#C3B091',
        label: 'Khaki',
        emoji: '🪵'
      }, {
        code: '#B87333',
        value: '#B87333',
        label: 'Copper',
        emoji: '🪙'
      }, {
        code: '#CD7F32',
        value: '#CD7F32',
        label: 'Bronze',
        emoji: '🪙'
      }, {
        code: '#4A90E2',
        value: '#4A90E2',
        label: 'Multi Color',
        emoji: '🌈'
      }],
      return_status: 0,
      return_days: 1,
      cancelable_status: 0,
      till_status: "",
      cod_allowed_status: 1,
      max_allowed_quantity: 0,
      description: '',
      highlights: '',
      require_products_approval: 0,
      is_approved: 1,
      loose_stock: 0,
      loose_stock_unit_id: "",
      status: 1,
      is_unlimited_stock: 0,
      expiry_date_from: '',
      expiry_date_to: '',
      loose_purchase_price: 0,
      loose_discount_percentage: 0,
      tax_included_in_price: 0,
      pincode_ids_exc: null,
      sellers: null,
      taxes: null,
      units: [],
      brands: [],
      countries: [],
      categories: null,
      order_status: null,
      inputs: [{
        name: '',
        variant_name: '',
        packet_status: 1,
        packet_stock: 0,
        packet_stock_unit_id: '',
        discount_percentage: 0,
        discounted_price: 0,
        packet_sale_price: '',
        discount_mode: 'percent',
        loose_purchase_price: 0,
        loose_discount_percentage: 0,
        loose_discounted_price: 0,
        loose_sale_price: '',
        loose_discount_mode: 'percent',
        color_variant: '',
        color_name: '',
        color_custom_hex: '',
        expiry_date_from: '',
        expiry_date_to: '',
        barcodes: [''],
        barcodeError: '',
        images: [],
        loose_images: []
      }],
      image: null,
      main_image_path: "",
      main_image_name: "",
      other_images: null,
      images: [],
      variantImages: {},
      draggedMedia: null,
      id: null,
      record: null,
      clone: false,
      categoryOptions: '<option value="">' + __('select_category') + '</option>',
      productCategoryList: [],
      deleteImageIds: [],
      loggedUser: _Auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].user,
      isBarcodeValid: '',
      input: [],
      mainImageerror: null,
      otherImageerror: null,
      variantImageerror: null,
      barcode: "",
      meta_title: "",
      meta_keywords: "",
      schema_markup: "",
      meta_description: "",
      validationBarcodeMessage: "",
      useCustomPrompt: false,
      customPrompt: '',
      loading: false,
      textGenKey: '',
      // Multi-language support
      isLoadingLanguages: false,
      activeLanguageTab: 0,
      translations: {},
      defaultLanguageId: null,
      languages: [],
      currentLanguageId: null,
      activeLanguages: []
    }, "categories", []), "translatableFields", ['name', 'description', 'highlights', 'meta_title', 'meta_keywords', 'schema_markup', 'meta_description']), "translateSuccessMessage", ''), "loadingEmpty", false), "loadingOverwrite", false), "cacheTimer", null), "cachedData", null), "skipCache", false);
  },
  computed: {
    isSellerRoute: function isSellerRoute() {
      // Use this.$route to access the current route
      return this.$route.path.startsWith('/seller/');
    },
    // Computed property to safely access $roleSeller
    roleSeller: function roleSeller() {
      return this.$roleSeller !== undefined ? this.$roleSeller : '';
    },
    // Computed property to check if current user is seller
    isSellerRole: function isSellerRole() {
      try {
        return this.login_user && this.login_user.role && this.login_user.role.name && this.roleSeller && this.roleSeller === this.login_user.role.name;
      } catch (e) {
        return false;
      }
    },
    canUseAIGenerate: function canUseAIGenerate() {
      var user = _Auth_js__WEBPACK_IMPORTED_MODULE_2__["default"].user || this.login_user;
      return this.$isDemo != 1 && user && user.id == 1;
    },
    translatedSellers: function translatedSellers() {
      var _this = this;
      if (!this.currentLanguageId || !this.sellers || this.sellers.length === 0) {
        return this.sellers || [];
      }
      var defaultLanguage = this.activeLanguages.find(function (lang) {
        return lang.is_default === 1;
      });
      var defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;
      return this.sellers.map(function (seller) {
        var translatedSeller = _objectSpread({}, seller);
        var translatedName = seller.name;
        if (seller.translations && Array.isArray(seller.translations)) {
          var translation = seller.translations.find(function (t) {
            return t.language_id === _this.currentLanguageId;
          });
          if (!translation && defaultLanguageId) {
            translation = seller.translations.find(function (t) {
              return t.language_id === defaultLanguageId;
            });
          }
          if (translation && translation.name && translation.name.trim() !== '') {
            translatedName = translation.name;
          }
        }
        translatedSeller.name = translatedName;
        return translatedSeller;
      });
    },
    translatedBrands: function translatedBrands() {
      var _this2 = this;
      if (!this.currentLanguageId || !this.brands || this.brands.length === 0) {
        return this.brands || [];
      }
      var defaultLanguage = this.activeLanguages.find(function (lang) {
        return lang.is_default === 1;
      });
      var defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;
      return this.brands.map(function (brand) {
        var translatedBrand = _objectSpread({}, brand);
        var translatedTitle = brand.title || brand.name;
        if (brand.translations && Array.isArray(brand.translations)) {
          var translation = brand.translations.find(function (t) {
            return t.language_id === _this2.currentLanguageId;
          });
          if (!translation && defaultLanguageId) {
            translation = brand.translations.find(function (t) {
              return t.language_id === defaultLanguageId;
            });
          }
          if (translation && translation.title && translation.title.trim() !== '') {
            translatedTitle = translation.title;
          }
        }
        translatedBrand.name = translatedTitle;
        translatedBrand.title = translatedTitle;
        return translatedBrand;
      });
    },
    translatedTaxes: function translatedTaxes() {
      var _this3 = this;
      if (!this.currentLanguageId || !this.taxes || this.taxes.length === 0) {
        return this.taxes || [];
      }
      var defaultLanguage = this.activeLanguages.find(function (lang) {
        return lang.is_default === 1;
      });
      var defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;
      return this.taxes.map(function (tax) {
        var translatedTax = _objectSpread({}, tax);
        var translatedTitle = tax.title;
        if (tax.translations && Array.isArray(tax.translations)) {
          var translation = tax.translations.find(function (t) {
            return t.language_id === _this3.currentLanguageId;
          });
          if (!translation && defaultLanguageId) {
            translation = tax.translations.find(function (t) {
              return t.language_id === defaultLanguageId;
            });
          }
          if (translation && translation.title && translation.title.trim() !== '') {
            translatedTitle = translation.title;
          }
        }
        translatedTax.title = translatedTitle;
        return translatedTax;
      });
    },
    translatedCategories: function translatedCategories() {
      var _this4 = this;
      if (!this.currentLanguageId || !this.categories || this.categories.length === 0) {
        return this.categories || [];
      }
      var defaultLanguage = this.activeLanguages.find(function (lang) {
        return lang.is_default === 1;
      });
      var defaultLanguageId = defaultLanguage ? defaultLanguage.id : null;
      return this.categories.map(function (category) {
        var translatedCategory = _objectSpread({}, category);
        var translatedName = category.name;
        if (category.translations && Array.isArray(category.translations)) {
          var translation = category.translations.find(function (t) {
            return t.language_id === _this4.currentLanguageId;
          });
          if (!translation && defaultLanguageId) {
            translation = category.translations.find(function (t) {
              return t.language_id === defaultLanguageId;
            });
          }
          if (translation && translation.name && translation.name.trim() !== '') {
            translatedName = translation.name;
          }
        }
        translatedCategory.name = translatedName;
        return translatedCategory;
      });
    },
    categoryOptionsHtml: function categoryOptionsHtml() {
      return this.categoryOptions;
    },
    allCategoriesFlat: function allCategoriesFlat() {
      // Return all categories as a flat list for multi-select
      return this.productCategoryList.map(function (category) {
        return {
          id: category.id,
          name: category.name,
          parent_id: category.parent_id
        };
      });
    },
    mainCategories: function mainCategories() {
      return this.allCategoriesFlat.filter(function (c) {
        return !c.parent_id || c.parent_id == 0;
      });
    },
    filteredSubCategories: function filteredSubCategories() {
      if (!this.selected_categories || this.selected_categories.length === 0) return [];
      var selectedIds = this.selected_categories.map(function (c) {
        return c.id;
      });
      return this.allCategoriesFlat.filter(function (c) {
        return selectedIds.includes(c.parent_id);
      });
    },
    filteredSubSubCategories: function filteredSubSubCategories() {
      if (!this.selected_sub_categories || this.selected_sub_categories.length === 0) return [];
      var selectedIds = this.selected_sub_categories.map(function (c) {
        return c.id;
      });
      return this.allCategoriesFlat.filter(function (c) {
        return selectedIds.includes(c.parent_id);
      });
    },
    selectedProductCategoryId: function selectedProductCategoryId() {
      // Fallback for backward compatibility
      return this.product_sub_sub_subcategory_id || this.product_sub_subcategory_id || this.product_subcategory_id || this.product_category_id || '';
    }
  },
  created: function created() {
    var _this5 = this;
    this.id = this.$route.params.id || null;
    this.clone = this.$route.params.clone || false;
    this.fetchActiveLanguages().then(function () {
      _this5.getSellers();
      _this5.getTaxes();
      _this5.getUnits();
      _this5.getBrands();
      _this5.getCountries();
      _this5.getOrderStatus();
      _this5.getTextGenKey();
      if (_this5.isSellerRole) {
        _this5.seller_id = _this5.login_user.seller.id;
        _this5.getSeller();
      }
      _this5.getCategories();
      if (_this5.id) {
        _this5.getProduct();
      } else {
        _this5.restoreCache();
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.id && !this.clone && !this.skipCache) this.saveCache();
    if (this.cacheTimer) clearTimeout(this.cacheTimer);
  },
  methods: {
    handleBrandCreated: function handleBrandCreated(message) {
      // Re-fetch brands when a new one is created
      this.getBrands();
      this.showMessage("success", message);
    },
    validateDefaultLanguageForTranslation: function validateDefaultLanguageForTranslation() {
      var _this6 = this;
      var form = this.$refs['my-form'];

      // Trigger native browser validation UI
      if (form && !form.reportValidity()) {
        // Switch to default language tab so error field is visible
        this.$nextTick(function () {
          _this6.switchToDefaultLanguageTab();
        });
        return false;
      }

      // Also validate required fields specifically
      return this.validateDefaultLanguage();
    },
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this7 = this;
      this.isLoadingLanguages = true;
      return axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/active_languages').then(function (response) {
        if (response.data.data) {
          _this7.languages = response.data.data;
          _this7.activeLanguages = response.data.data;
          var defaultLang = _this7.languages.find(function (lang) {
            return lang.is_default === 1;
          });
          if (defaultLang) {
            _this7.defaultLanguageId = defaultLang.id;
          }

          // Get current language ID from app_locale
          var appLocale = window.appLocale || 'en';
          var currentLanguage = _this7.activeLanguages.find(function (lang) {
            return lang.code === appLocale;
          });
          if (currentLanguage) {
            _this7.currentLanguageId = currentLanguage.id;
          } else if (defaultLang) {
            _this7.currentLanguageId = defaultLang.id;
          }
          _this7.initializeTranslations();
          _this7.isLoadingLanguages = false;
        } else {
          _this7.isLoadingLanguages = false;
        }
      })["catch"](function (error) {
        console.error('Error loading languages:', error);
        _this7.isLoadingLanguages = false;
      });
    },
    initializeTranslations: function initializeTranslations() {
      var allTranslations = {};
      this.languages.forEach(function (language) {
        allTranslations[language.id] = {
          name: '',
          description: '',
          highlights: '',
          meta_title: '',
          meta_keywords: '',
          schema_markup: '',
          meta_description: ''
        };
      });
      this.translations = allTranslations;
    },
    // Handle input events for default language fields
    handleDefaultLanguageInput: function handleDefaultLanguageInput(fieldName, language) {
      if (language.is_default && this.translations[language.id]) {
        // Update the main data property with the translation value
        this[fieldName] = this.translations[language.id][fieldName];

        // Special handling for name field - also create slug
        if (fieldName === 'name') {
          this.createSlug();
        }
      }
    },
    getEditorConfig: function getEditorConfig() {
      var plugins = this.$editorPlugins && Array.isArray(this.$editorPlugins) ? this.$editorPlugins : ["autolink", "lists", "link", "image", "charmap", "anchor", "searchreplace", "visualblocks", "media", "table", "wordcount", "code", "codesample"];
      var toolbar = this.$editorToolbar || "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | charmap | code | removeformat";
      var fontSizes = this.$editorFont_size_formats || '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt';
      return _objectSpread({
        height: 400,
        plugins: plugins,
        toolbar: toolbar,
        font_size_formats: fontSizes
      }, this.$tinymceImageUploadOptions());
    },
    // Helper method to safely trigger file input click (handles refs in v-for)
    triggerRefClick: function triggerRefClick(refName) {
      var _this8 = this;
      this.$nextTick(function () {
        try {
          var ref = _this8.$refs[refName];
          if (!ref) {
            return;
          }
          // Handle array case (refs inside v-for)
          if (Array.isArray(ref)) {
            // Find first valid element in array
            for (var i = 0; i < ref.length; i++) {
              if (ref[i] && typeof ref[i].click === 'function') {
                ref[i].click();
                return;
              }
            }
            return;
          }
          // Handle single ref case
          if (typeof ref.click === 'function') {
            ref.click();
          }
        } catch (e) {
          console.warn('Error triggering file input click:', e);
        }
      });
    },
    validateDefaultLanguage: function validateDefaultLanguage() {
      if (!this.defaultLanguageId) {
        this.showError(__('default_language_not_found'));
        return false;
      }
      var defaultTranslation = this.translations[this.defaultLanguageId];
      if (!defaultTranslation.name || defaultTranslation.name.trim() === '') {
        this.showError(__('please_fill_product_name_in_default_language'));
        this.switchToDefaultLanguageTab();
        return false;
      }
      if (!defaultTranslation.description || defaultTranslation.description.trim() === '') {
        this.showError(__('please_fill_description_in_default_language'));
        this.switchToDefaultLanguageTab();
        return false;
      }
      return true;
    },
    switchToDefaultLanguageTab: function switchToDefaultLanguageTab() {
      var _this9 = this;
      var defaultLangIndex = this.languages.findIndex(function (lang) {
        return lang.id === _this9.defaultLanguageId;
      });
      if (defaultLangIndex !== -1) {
        this.activeLanguageTab = defaultLangIndex;
      }
    },
    loadTranslations: function loadTranslations() {
      var _this0 = this;
      if (!this.id) return;

      // Wait for languages to be loaded first
      if (this.languages.length === 0) {
        this.fetchActiveLanguages().then(function () {
          _this0.loadTranslationsData();
        });
        return;
      }
      this.loadTranslationsData();
    },
    // Load translations from API response (translations array with all language records)
    loadTranslationsData: function loadTranslationsData() {
      var _this1 = this;
      if (!this.record || !this.record.translations || !Array.isArray(this.record.translations)) {
        return;
      }
      var translationsArray = this.record.translations;
      this.languages.forEach(function (language) {
        var translation = translationsArray.find(function (t) {
          return t.language_id === language.id;
        });
        if (translation) {
          _this1.$set(_this1.translations[language.id], 'name', translation.name || '');
          _this1.$set(_this1.translations[language.id], 'description', translation.description || '');
          _this1.$set(_this1.translations[language.id], 'highlights', translation.highlights || '');
          _this1.$set(_this1.translations[language.id], 'meta_title', translation.meta_title || '');
          _this1.$set(_this1.translations[language.id], 'meta_keywords', translation.meta_keywords || '');
          _this1.$set(_this1.translations[language.id], 'schema_markup', translation.schema_markup || '');
          _this1.$set(_this1.translations[language.id], 'meta_description', translation.meta_description || '');
        }
      });
    },
    generateDescription: function generateDescription() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _this10$translations$;
        var productName, isPacket, input0, mrp, measurement, stock, isUnlimitedStock, apiKey, variants, productContext, customPrompt, response, data, parsed, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!(_this10.$isDemo == 1)) {
                _context.n = 1;
                break;
              }
              _this10.showError("This function is not available in demo mode.");
              return _context.a(2);
            case 1:
              productName = ((_this10$translations$ = _this10.translations[_this10.defaultLanguageId]) === null || _this10$translations$ === void 0 ? void 0 : _this10$translations$.name) || '';
              isPacket = _this10.type === 'packet';
              input0 = _this10.inputs && _this10.inputs.length > 0 ? _this10.inputs[0] : {};
              mrp = isPacket ? input0.packet_price : input0.loose_price;
              measurement = isPacket ? input0.packet_measurement : input0.loose_measurement;
              stock = isPacket ? input0.packet_stock : _this10.loose_stock;
              isUnlimitedStock = _this10.is_unlimited_stock == 1;
              if (productName) {
                _context.n = 2;
                break;
              }
              _this10.showMessage("error", "Please enter the product name.");
              return _context.a(2);
            case 2:
              if (_this10.brand) {
                _context.n = 3;
                break;
              }
              _this10.showMessage("error", "Please select a brand.");
              return _context.a(2);
            case 3:
              if (!(!_this10.image && !_this10.main_image_name && !_this10.main_image_path)) {
                _context.n = 4;
                break;
              }
              _this10.showMessage("error", "Please upload a product main image.");
              return _context.a(2);
            case 4:
              if (measurement) {
                _context.n = 5;
                break;
              }
              _this10.showMessage("error", "Please enter unit measurement.");
              return _context.a(2);
            case 5:
              if (mrp) {
                _context.n = 6;
                break;
              }
              _this10.showMessage("error", "Please enter MRP.");
              return _context.a(2);
            case 6:
              if (!(!isUnlimitedStock && (!stock || stock <= 0))) {
                _context.n = 7;
                break;
              }
              _this10.showMessage("error", "Please enter available quantity.");
              return _context.a(2);
            case 7:
              if (!(!_this10.selected_categories || _this10.selected_categories.length === 0)) {
                _context.n = 8;
                break;
              }
              _this10.showMessage("error", "Please select at least one category.");
              return _context.a(2);
            case 8:
              if (_this10.made_in) {
                _context.n = 9;
                break;
              }
              _this10.showMessage("error", "Please specify made in (country).");
              return _context.a(2);
            case 9:
              if (!(_this10.return_status === '' || _this10.return_status === null)) {
                _context.n = 10;
                break;
              }
              _this10.showMessage("error", "Please select if product is returnable.");
              return _context.a(2);
            case 10:
              if (!(_this10.cancelable_status === '' || _this10.cancelable_status === null)) {
                _context.n = 11;
                break;
              }
              _this10.showMessage("error", "Please select if product is cancelable.");
              return _context.a(2);
            case 11:
              apiKey = process.env.MIX_TEXT_GEN_KEY || 0;
              if (apiKey) {
                _context.n = 12;
                break;
              }
              _this10.showMessage("error", "Text generation API key is not configured.");
              return _context.a(2);
            case 12:
              variants = _this10.inputs.map(function (input) {
                return {
                  measurement: isPacket ? input.packet_measurement : input.loose_measurement,
                  price: isPacket ? input.packet_price : input.loose_price,
                  discounted_price: isPacket ? input.discounted_price : input.loose_discounted_price,
                  available_stock_quantity: isUnlimitedStock ? 'Unlimited' : isPacket ? input.packet_stock : _this10.loose_stock
                };
              });
              productContext = {
                name: productName,
                brand: _this10.brand.name || '',
                category: _this10.selected_categories.map(function (c) {
                  return c.name;
                }).join(', '),
                sub_category: _this10.selected_sub_categories ? _this10.selected_sub_categories.map(function (c) {
                  return c.name;
                }).join(', ') : '',
                sub_sub_category: _this10.selected_sub_sub_categories ? _this10.selected_sub_sub_categories.map(function (c) {
                  return c.name;
                }).join(', ') : '',
                made_in: _this10.made_in,
                returnable: _this10.return_status == 1 ? 'Yes' : 'No',
                cancelable: _this10.cancelable_status == 1 ? 'Yes' : 'No',
                variants: variants
              };
              customPrompt = _this10.useCustomPrompt && _this10.customPrompt.trim() ? _this10.customPrompt.trim() : null;
              _context.p = 13;
              _this10.isGeneratingAI = true;
              _this10.aiDebugInfo = "Sending request to Gemini API via backend...\nProduct Context:\n" + JSON.stringify(productContext, null, 2) + "\n\n";
              _context.n = 14;
              return axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(_this10.$apiUrl + '/products/google_gemini', {
                product_context: productContext,
                custom_prompt: customPrompt,
                source: 'web'
              });
            case 14:
              response = _context.v;
              data = response.data;
              _this10.aiDebugInfo += "Response received from Backend:\n" + JSON.stringify(data, null, 2) + "\n\n";
              if (data.status === 1 && data.data) {
                parsed = data.data;
                _this10.aiDebugInfo += "Successfully parsed JSON:\n" + JSON.stringify(parsed, null, 2);
                if (_this10.defaultLanguageId && _this10.translations[_this10.defaultLanguageId]) {
                  if (parsed.description) _this10.$set(_this10.translations[_this10.defaultLanguageId], 'description', parsed.description);
                  if (parsed.highlights) _this10.$set(_this10.translations[_this10.defaultLanguageId], 'highlights', parsed.highlights);
                  if (parsed.meta_title) _this10.$set(_this10.translations[_this10.defaultLanguageId], 'meta_title', parsed.meta_title);
                  if (parsed.meta_keywords) _this10.$set(_this10.translations[_this10.defaultLanguageId], 'meta_keywords', parsed.meta_keywords);
                  if (parsed.meta_description) _this10.$set(_this10.translations[_this10.defaultLanguageId], 'meta_description', parsed.meta_description);
                  if (parsed.schema_markup) _this10.$set(_this10.translations[_this10.defaultLanguageId], 'schema_markup', _typeof(parsed.schema_markup) === 'object' ? JSON.stringify(parsed.schema_markup) : parsed.schema_markup);
                }
                _this10.showMessage("success", "Content generated successfully!");
              } else if (data.message) {
                _this10.aiDebugInfo += "API ERROR:\n" + data.message;
                _this10.showMessage("error", "API Error: " + data.message);
              } else {
                _this10.aiDebugInfo += "Failed to generate content: Unexpected response structure.";
                _this10.showMessage("error", "Failed to generate content.");
              }
              _context.n = 16;
              break;
            case 15:
              _context.p = 15;
              _t = _context.v;
              _this10.aiDebugInfo += "NETWORK/REQUEST ERROR:\n" + _t.message;
              console.error(_t);
              _this10.showMessage("error", "An error occurred while generating the content.");
            case 16:
              _context.p = 16;
              _this10.isGeneratingAI = false;
              return _context.f(16);
            case 17:
              return _context.a(2);
          }
        }, _callee, null, [[13, 15, 16, 17]]);
      }))();
    },
    generateFromCustomPrompt: function generateFromCustomPrompt() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this11$languages$fin, _this11$translations$;
        var langId, productName, promptText, apiKey, hasVariants, isPacket, variantList, categoryNames, subCategoryNames, subSubCategoryNames, productContext, response, data, parsed, schemaStr, _error$response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!(_this11.$isDemo == 1)) {
                _context2.n = 1;
                break;
              }
              _this11.showError("This function is not available in demo mode.");
              return _context2.a(2);
            case 1:
              // Determine active or default language ID
              langId = _this11.defaultLanguageId || _this11.languages && ((_this11$languages$fin = _this11.languages.find(function (l) {
                return l.is_default;
              })) === null || _this11$languages$fin === void 0 ? void 0 : _this11$languages$fin.id) || (_this11.translations ? Object.keys(_this11.translations)[0] : null);
              productName = langId && _this11.translations && ((_this11$translations$ = _this11.translations[langId]) === null || _this11$translations$ === void 0 ? void 0 : _this11$translations$.name) || _this11.name || '';
              if (!(!productName || !productName.trim())) {
                _context2.n = 2;
                break;
              }
              _this11.showMessage("error", "Please enter the product name.");
              return _context2.a(2);
            case 2:
              if (!(!_this11.selected_categories || _this11.selected_categories.length === 0)) {
                _context2.n = 3;
                break;
              }
              _this11.showMessage("error", "Please select at least one category.");
              return _context2.a(2);
            case 3:
              promptText = _this11.customPrompt ? _this11.customPrompt.trim() : '';
              if (promptText) {
                _context2.n = 4;
                break;
              }
              _this11.showMessage("error", "Please enter your custom prompt.");
              return _context2.a(2);
            case 4:
              apiKey = process.env.MIX_TEXT_GEN_KEY || 0;
              if (apiKey) {
                _context2.n = 5;
                break;
              }
              _this11.showMessage("error", "Text generation API key is not configured.");
              return _context2.a(2);
            case 5:
              hasVariants = !!_this11.has_variant;
              isPacket = _this11.type === 'packet';
              variantList = [];
              if (hasVariants && _this11.inputs && _this11.inputs.length > 0) {
                variantList = _this11.inputs.map(function (input) {
                  var item = {};
                  if (input.variant_name) item.variant_name = input.variant_name;
                  var meas = isPacket ? input.packet_measurement : input.loose_measurement;
                  if (meas) item.measurement = meas;
                  var price = isPacket ? input.packet_price : input.loose_price;
                  if (price) item.price = price;
                  var color = input.color_name || (input.color_variant && input.color_variant !== '__custom__' ? input.color_variant : '');
                  if (color) item.color = color;
                  return Object.keys(item).length > 0 ? item : null;
                }).filter(Boolean);
              }
              categoryNames = _this11.selected_categories.map(function (c) {
                return c.name;
              }).join(', ');
              subCategoryNames = _this11.selected_sub_categories ? _this11.selected_sub_categories.map(function (c) {
                return c.name;
              }).join(', ') : '';
              subSubCategoryNames = _this11.selected_sub_sub_categories ? _this11.selected_sub_sub_categories.map(function (c) {
                return c.name;
              }).join(', ') : '';
              productContext = {
                name: productName.trim(),
                category: categoryNames,
                sub_category: subCategoryNames || undefined,
                sub_sub_category: subSubCategoryNames || undefined,
                brand: _this11.brand && _this11.brand.name ? _this11.brand.name : undefined,
                has_variants: hasVariants,
                product_structure: hasVariants ? 'Product with multiple variants' : 'Single product (no variants)',
                variants: hasVariants && variantList.length > 0 ? variantList : hasVariants ? 'Variants enabled' : 'Single product'
              };
              _context2.p = 6;
              _this11.isGeneratingCustomAI = true;
              _context2.n = 7;
              return axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(_this11.$apiUrl + '/products/google_gemini', {
                product_context: productContext,
                custom_prompt: promptText,
                source: 'web'
              });
            case 7:
              response = _context2.v;
              data = response.data;
              if (data.status === 1 && data.data) {
                parsed = data.data;
                if (langId && _this11.translations && _this11.translations[langId]) {
                  if (parsed.description) _this11.$set(_this11.translations[langId], 'description', parsed.description);
                  if (parsed.highlights) _this11.$set(_this11.translations[langId], 'highlights', parsed.highlights);
                  if (parsed.meta_title) _this11.$set(_this11.translations[langId], 'meta_title', parsed.meta_title);
                  if (parsed.meta_keywords) _this11.$set(_this11.translations[langId], 'meta_keywords', parsed.meta_keywords);
                  if (parsed.meta_description) _this11.$set(_this11.translations[langId], 'meta_description', parsed.meta_description);
                  if (parsed.schema_markup) {
                    schemaStr = _typeof(parsed.schema_markup) === 'object' ? JSON.stringify(parsed.schema_markup, null, 2) : parsed.schema_markup;
                    _this11.$set(_this11.translations[langId], 'schema_markup', schemaStr);
                  }
                }
                if (parsed.description) _this11.description = parsed.description;
                if (parsed.highlights) _this11.highlights = parsed.highlights;
                if (parsed.meta_title) _this11.meta_title = parsed.meta_title;
                if (parsed.meta_keywords) _this11.meta_keywords = parsed.meta_keywords;
                if (parsed.meta_description) _this11.meta_description = parsed.meta_description;
                if (parsed.schema_markup) {
                  _this11.schema_markup = _typeof(parsed.schema_markup) === 'object' ? JSON.stringify(parsed.schema_markup, null, 2) : parsed.schema_markup;
                }
                _this11.showMessage("success", "Description, highlights & meta settings generated successfully from custom prompt!");
              } else if (data.message) {
                _this11.showMessage("error", "API Error: " + data.message);
              } else {
                _this11.showMessage("error", "Failed to generate content.");
              }
              _context2.n = 9;
              break;
            case 8:
              _context2.p = 8;
              _t2 = _context2.v;
              console.error(_t2);
              _this11.showMessage("error", "An error occurred while generating content: " + (((_error$response = _t2.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _t2.message));
            case 9:
              _context2.p = 9;
              _this11.isGeneratingCustomAI = false;
              return _context2.f(9);
            case 10:
              return _context2.a(2);
          }
        }, _callee2, null, [[6, 8, 9, 10]]);
      }))();
    },
    createSlug: function createSlug() {
      if (this.name !== "") {
        this.slug = this.name.normalize("NFD") // Normalize Unicode
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/(?:[\0-\x08\x0E-\x1F!-,\.\/:-@\[-`\{-\x9F\xA1-\xA9\xAB-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u065F\u066A-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07BF\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u0890-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0965\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09E5\u09F2\u09F3\u09FA\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A65\u0A70\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AE5\u0AF0-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B65\u0B70\u0B78-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0BE5\u0BF3-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5E\u0C5F\u0C62-\u0C65\u0C70-\u0C77\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDB\u0CDF\u0CE2-\u0CE5\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57\u0D62-\u0D65\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DE5\u0DF0-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F1F\u0F34-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u104A-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u1368\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u17DF\u17EA-\u17EF\u17FA-\u180F\u181A-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A17-\u1A1F\u1A55-\u1A7F\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B4F\u1B5A-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BFF\u1C24-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C8B-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u206F\u2072\u2073\u207A-\u207E\u208A-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A-\u245F\u249C-\u24E9\u2500-\u2775\u2794-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFC\u2CFE\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u2FFF\u3001-\u3004\u3008-\u3020\u302A-\u3030\u3036\u3037\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u3191\u3196-\u319F\u31C0-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6F0-\uA716\uA720\uA721\uA789\uA78A\uA7DD-\uA7F0\uA802\uA806\uA80B\uA823-\uA82F\uA836-\uA83F\uA874-\uA881\uA8B4-\uA8CF\uA8DA-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9DA-\uA9DF\uA9E5\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD\uFEFE\uFF00-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEE0\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDBF\uDDF4-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC57\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1F\uDD3A-\uDD3F\uDD5A-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE3F\uDE49-\uDE5F\uDE7F\uDEA0-\uDEBF\uDEC8\uDEE5-\uDEEA\uDEF0-\uDEFF\uDF36-\uDF3F\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD24-\uDD2F\uDD3A-\uDD3F\uDD66-\uDD6E\uDD86-\uDE5F\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEC1\uDEC8-\uDEFF\uDF28-\uDF2F\uDF46-\uDF50\uDF55-\uDF6F\uDF82-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC51\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDD02\uDD27-\uDD35\uDD40-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDCF\uDDDB\uDDDD-\uDDE0\uDDF5-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDEEF\uDEFA-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDF7F\uDF8A\uDF8C\uDF8D\uDF8F\uDFB6\uDFB8-\uDFD0\uDFD2\uDFD4-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC4F\uDC5A-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEBF\uDECA-\uDECF\uDEE4-\uDEFF\uDF1B-\uDF2F\uDF3C-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFBF\uDFE1-\uDFEF\uDFFA-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC4F\uDC6D-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDD9F\uDDAA-\uDDAF\uDDDC-\uDDDF\uDDEA-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDF4F\uDF5A-\uDFAF\uDFB1-\uDFBF\uDFD5-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD812-\uD817\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD836\uD83D\uD83F\uD87C\uD87D\uD87F\uD88E-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDC5F]|\uD810[\uDFFB-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD818[\uDC00-\uDCFF\uDD1E-\uDD2F\uDD3A-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6F\uDEBF\uDECA-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDD3F\uDD6D-\uDD6F\uDD7A-\uDE3F\uDE97-\uDE9F\uDEB9\uDEBA\uDED4-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFF1\uDFF7-\uDFFF]|\uD823[\uDCD6-\uDCFE\uDD1F-\uDD7F\uDDF3-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD833[\uDC00-\uDCEF\uDCFA-\uDFFF]|\uD834[\uDC00-\uDEBF\uDED4-\uDEDF\uDEF4-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDEEF\uDEFA-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDCEF\uDCFA-\uDDCF\uDDEE\uDDEF\uDDFB-\uDEBF\uDEDF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5-\uDEFD\uDF00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD0-\uDCFF\uDD44-\uDD4A\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCAC\uDCB0\uDCB5-\uDD00\uDD2E\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEAE\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD88D[\uDC7A-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, '') // Keep letters, numbers, spaces, and hyphens (any language)
        .trim().replace(/\s+/g, '-') // Replace spaces with '-'
        .toLowerCase();
      }
    },
    fetchTags: function fetchTags(query) {
      var _this12 = this;
      if (query.length > 1) {
        axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/products/tags', {
          params: {
            search: query
          }
        }).then(function (response) {
          _this12.tagSuggestions = response.data;
        })["catch"](function (error) {
          console.error(error);
        });
      }
    },
    getBlankVariantInput: function getBlankVariantInput() {
      return {
        name: '',
        variant_name: '',
        packet_status: 1,
        packet_stock: 0,
        packet_stock_unit_id: '',
        discount_percentage: 0,
        discounted_price: 0,
        packet_sale_price: '',
        discount_mode: 'percent',
        loose_purchase_price: 0,
        loose_discount_percentage: 0,
        loose_discounted_price: 0,
        loose_sale_price: '',
        loose_discount_mode: 'percent',
        color_variant: '',
        color_name: '',
        color_custom_hex: '',
        expiry_date_from: '',
        expiry_date_to: '',
        barcodes: [''],
        barcodeError: '',
        images: [],
        loose_images: []
      };
    },
    addRow: function addRow() {
      var previous = this.inputs.length ? JSON.parse(JSON.stringify(this.inputs[this.inputs.length - 1])) : this.getBlankVariantInput();
      var duplicate = Object.assign(this.getBlankVariantInput(), previous, {
        id: '',
        barcodes: [''],
        barcodeError: '',
        images: [],
        loose_images: []
      });
      this.inputs.push(duplicate);
      vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(this.variantImages, this.inputs.length - 1, []);
    },
    remove: function remove(index) {
      var _this13 = this;
      var variant_id = this.inputs[index].id ? this.inputs[index].id : "";
      if (this.id && variant_id !== "") {
        this.$swal.fire({
          title: "Are you Sure?",
          text: "You want be able to revert this",
          confirmButtonText: "Yes, Sure",
          cancelButtonText: "Cancel",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#37a279',
          cancelButtonColor: '#d33'
        }).then(function (result) {
          if (result.value) {
            var postData = {
              id: variant_id
            };
            axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(_this13.$apiUrl + '/products/delete', postData).then(function (response) {
              var data = response.data;
              _this13.inputs.splice(index, 1);
              _this13.showSuccess(data.message);
            });
          }
        });
      } else {
        this.inputs.splice(index, 1);
      }
    },
    dropFile: function dropFile(event) {
      event.preventDefault();
      // Safely access file_image ref (can be array in v-for)
      var fileInput = Array.isArray(this.$refs.file_image) ? this.$refs.file_image[0] : this.$refs.file_image;
      if (fileInput) {
        fileInput.files = event.dataTransfer.files;
        this.fileImage(); // Trigger the onChange event manually
      }
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    fileImage: function fileImage() {
      // Safely access file_image ref (can be array in v-for)
      var fileInput = Array.isArray(this.$refs.file_image) ? this.$refs.file_image[0] : this.$refs.file_image;
      if (!fileInput) return;
      var file = fileInput.files[0];

      // Reset previous error message
      this.mainImageerror = null;

      // Check if a file was selected
      if (!file) return;

      // Perform image validation
      var validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"];
      if (!validTypes.includes(file.type)) {
        this.mainImageerror = "Invalid file type. Please upload a JPEG, PNG, JPG,  GIF or WEBP image.";
        this.main_image_path = "";
        this.main_image_name = "";
        return;
      }
      var maxSize = 3 * 1024 * 1024; // 3MB
      if (file.size > maxSize) {
        this.mainImageerror = "File size exceeds the maximum allowed limit (3MB).";
        this.main_image_path = "";
        this.main_image_name = "";
        return;
      }

      // Create a URL for the uploaded image and display it
      this.imageUrl = URL.createObjectURL(file);
      this.image = fileInput.files[0];
      this.main_image_path = URL.createObjectURL(this.image);
      this.main_image_name = this.image.name;
    },
    dropFileOtherImage: function dropFileOtherImage(event) {
      event.preventDefault();
      // Safely access file_other_images ref (can be array in v-for)
      var fileInput = Array.isArray(this.$refs.file_other_images) ? this.$refs.file_other_images[0] : this.$refs.file_other_images;
      if (fileInput) {
        fileInput.files = event.dataTransfer.files;
        this.otherImage(); // Trigger the onChange event manually
      }
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    removeOtherImage: function removeOtherImage(index) {
      if (this.images[index] && this.images[index].url) {
        URL.revokeObjectURL(this.images[index].url);
      }
      this.images.splice(index, 1);
    },
    isVideoMedia: function isVideoMedia(path) {
      return /\.(mp4)$/i.test(path || '');
    },
    otherImage: function otherImage() {
      this.otherImageerror = null;
      // Safely access file_other_images ref (can be array in v-for)
      var fileInput = Array.isArray(this.$refs.file_other_images) ? this.$refs.file_other_images[0] : this.$refs.file_other_images;
      if (!fileInput) return;
      var files = fileInput.files;
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (!this.allowedOtherMediaTypes.includes(file.type)) {
          this.otherImageerror = "Invalid file type. Please upload JPG, JPEG, PNG, GIF, WEBP images or MP4 videos.";
          fileInput.value = "";
          return;
        }
        if (file.size > this.maxOtherMediaSize) {
          this.otherImageerror = "Each product image or video must be 3 MB or smaller.";
          fileInput.value = "";
          return;
        }
        var image = {};
        image.url = URL.createObjectURL(file);
        image.name = file.name;
        image.file = file; // Store the actual file object
        image.isVideo = file.type === 'video/mp4';
        this.images.push(image);
      }
      fileInput.value = "";
    },
    openVariantImagePicker: function openVariantImagePicker(index, type) {
      var ref = this.$refs[type + '_variant_images_' + index];
      var input = Array.isArray(ref) ? ref[0] : ref;
      if (input) input.click();
    },
    variantImagesChanges: function variantImagesChanges(index) {
      var refName = this.type + '_variant_images_' + index;
      var ref = this.$refs[refName];
      var fileInput = Array.isArray(ref) ? ref[0] : ref;
      var files = fileInput && fileInput.files ? Array.from(fileInput.files) : [];
      var validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
      var maxSizeInBytes = 5 * 1024 * 1024;
      var tempImages = [];
      this.variantImageerror = null;
      vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(this.variantImages, index, []);
      var _iterator = _createForOfIteratorHelper(files),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var file = _step.value;
          var extension = file.name.split('.').pop().toLowerCase();
          if (!validExtensions.includes(extension)) {
            this.variantImageerror = "Invalid file type. Please upload a JPEG, PNG, JPG, GIF or WEBP image.";
            fileInput.value = '';
            return;
          }
          if (file.size > maxSizeInBytes) {
            this.variantImageerror = "Each variant image must be 5 MB or smaller.";
            fileInput.value = '';
            return;
          }
          tempImages.push({
            url: URL.createObjectURL(file),
            name: file.name,
            file: file
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(this.variantImages, index, tempImages);
    },
    getMediaList: function getMediaList(group) {
      var variantIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (group === 'other-new') return this.images;
      if (group === 'other-existing') return this.other_images || [];
      if (group === 'packet-new' || group === 'loose-new') return this.variantImages[variantIndex] || [];
      if (group === 'packet-existing') return this.inputs[variantIndex].images || [];
      if (group === 'loose-existing') return this.inputs[variantIndex].loose_images || [];
      return [];
    },
    getColorHex: function getColorHex(inputOrColor) {
      if (!inputOrColor) return '#000000';
      var color = '';
      if (_typeof(inputOrColor) === 'object') {
        if (inputOrColor.color_custom_hex) return String(inputOrColor.color_custom_hex).toUpperCase();
        color = inputOrColor.color_variant;
      } else {
        color = inputOrColor;
      }
      if (!color || color === '__custom__') return '#000000';
      var clean = String(color).trim();
      var hexMatch = clean.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b/);
      if (hexMatch) return hexMatch[0].toUpperCase();
      if (/^[0-9A-Fa-f]{6}$/.test(clean)) return ('#' + clean).toUpperCase();
      if (/^[0-9A-Fa-f]{3}$/.test(clean)) {
        return ('#' + clean[0] + clean[0] + clean[1] + clean[1] + clean[2] + clean[2]).toUpperCase();
      }
      var lower = clean.toLowerCase();
      var found = this.colorVariantOptions.find(function (opt) {
        return opt.label && opt.label.toLowerCase() === lower || opt.code && opt.code.toLowerCase() === lower || opt.value && opt.value.toLowerCase() === lower || opt.label && opt.label.toLowerCase().replace(/\s+/g, '_') === lower;
      });
      if (found && found.code) return found.code.toUpperCase();
      return '#000000';
    },
    getColorSelectValue: function getColorSelectValue(inputOrColor) {
      if (!inputOrColor) return '';
      var color = '';
      var customName = '';
      if (_typeof(inputOrColor) === 'object') {
        color = inputOrColor.color_variant;
        customName = inputOrColor.color_name;
      } else {
        color = inputOrColor;
      }
      if (!color && !customName) return '';
      if (color === '__custom__') return '__custom__';
      var clean = String(color).trim().toLowerCase();
      var hexMatch = clean.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b/);
      var hex = hexMatch ? hexMatch[0].toLowerCase() : '';
      var nameMatch = clean.match(/^(.*?)\s*\((#[0-9A-Fa-f]{3,6})\)$/);

      // 1. If format is "Name (#HEX)"
      if (nameMatch) {
        var name = nameMatch[1].trim().toLowerCase();
        var matchedHex = nameMatch[2].trim().toLowerCase();
        // If a custom name is explicitly provided and doesn't match the preset name
        if (customName && String(customName).trim().toLowerCase() !== name) {
          return '__custom__';
        }
        var preset = this.colorVariantOptions.find(function (option) {
          return option.label.toLowerCase() === name && option.code.toLowerCase() === matchedHex;
        });
        return preset ? preset.code : '__custom__';
      }

      // 2. If a custom name is explicitly provided, treat as custom unless exactly matching a preset
      if (customName && String(customName).trim()) {
        var trimmedCustomName = String(customName).trim().toLowerCase();
        var _preset = this.colorVariantOptions.find(function (option) {
          return option.label.toLowerCase() === trimmedCustomName && hex && option.code.toLowerCase() === hex;
        });
        return _preset ? _preset.code : '__custom__';
      }

      // 3. Match presets by hex or label
      var found = this.colorVariantOptions.find(function (option) {
        return hex && option.code && option.code.toLowerCase() === hex || option.code && option.code.toLowerCase() === clean || option.label && option.label.toLowerCase() === clean || option.value && option.value.toLowerCase() === clean;
      });
      if (found) return found.code;
      return '__custom__';
    },
    isCustomColor: function isCustomColor(inputOrColor) {
      if (!inputOrColor) return false;
      var color = '';
      var customName = '';
      if (_typeof(inputOrColor) === 'object') {
        color = inputOrColor.color_variant;
        customName = inputOrColor.color_name;
      } else {
        color = inputOrColor;
      }
      if (color === '__custom__') return true;
      if (customName && String(customName).trim()) return true;
      if (!color) return false;
      return this.getColorSelectValue(inputOrColor) === '__custom__';
    },
    getColorLabel: function getColorLabel(inputOrColor) {
      if (!inputOrColor) return '';
      var color = '';
      var customName = '';
      if (_typeof(inputOrColor) === 'object') {
        color = inputOrColor.color_variant;
        customName = inputOrColor.color_name;
      } else {
        color = inputOrColor;
      }
      if (!color && !customName) return '';
      if (color === '__custom__') {
        return customName ? "\uD83C\uDFA8 ".concat(customName) : '🎨 Custom Color';
      }
      var selectValue = this.getColorSelectValue(inputOrColor);
      if (selectValue && selectValue !== '__custom__') {
        var found = this.colorVariantOptions.find(function (opt) {
          return opt.code === selectValue;
        });
        if (found) return "".concat(found.emoji, " ").concat(found.label);
      }
      if (customName && String(customName).trim()) {
        return "\uD83C\uDFA8 ".concat(String(customName).trim());
      }
      var nameMatch = String(color).trim().match(/^(.*?)\s*\(#([0-9A-Fa-f]{3,6})\)$/);
      if (nameMatch && nameMatch[1].trim()) {
        return "\uD83C\uDFA8 ".concat(nameMatch[1].trim());
      }
      return '🎨 Custom Color';
    },
    getDisplayHex: function getDisplayHex(input) {
      if (!input || !input.color_variant || input.color_variant === '__custom__') return '';
      var hex = this.getColorHex(input);
      return hex && hex !== '#000000' ? hex : String(input.color_variant).startsWith('#') ? input.color_variant : '';
    },
    extractColorName: function extractColorName(val) {
      if (!val) return '';
      var str = String(val).trim();
      var match = str.match(/^(.*?)\s*\((#[0-9A-Fa-f]{3,6})\)$/);
      if (match) {
        var name = match[1].trim();
        if (name.toLowerCase() === 'custom color' || name.toLowerCase() === 'custom') return '';
        var _isPreset = this.colorVariantOptions.some(function (opt) {
          return opt.label.toLowerCase() === name.toLowerCase();
        });
        return _isPreset ? '' : name;
      }
      if (str.startsWith('#')) return '';
      var isPreset = this.colorVariantOptions.some(function (opt) {
        return opt.label.toLowerCase() === str.toLowerCase() || opt.code.toLowerCase() === str.toLowerCase();
      });
      if (isPreset) return '';
      return str;
    },
    handleColorChange: function handleColorChange(input, value) {
      if (value === '__custom__') {
        var currentHex = this.getColorHex(input);
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_variant', '__custom__');
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_custom_hex', currentHex && currentHex !== '#000000' ? currentHex : '#4A90E2');
      } else if (value) {
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_variant', value);
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_name', '');
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_custom_hex', '');
      } else {
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_variant', '');
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_name', '');
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_custom_hex', '');
      }
    },
    onColorPickerChange: function onColorPickerChange(input, hex) {
      if (hex) {
        var upperHex = hex.toUpperCase();
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_custom_hex', upperHex);
        if (!input.color_name || !String(input.color_name).trim()) {
          var preset = this.colorVariantOptions.find(function (opt) {
            return opt.code.toUpperCase() === upperHex;
          });
          if (preset) {
            vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_variant', preset.code);
            return;
          }
        }
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_variant', upperHex);
      }
    },
    onCustomTextInput: function onCustomTextInput(input, text) {
      var val = text ? text.trim() : '';
      vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_variant', val ? val : '__custom__');
    },
    onCustomNameInput: function onCustomNameInput(input, name) {
      vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_name', name);
      if (!input.color_variant || input.color_variant === '__custom__') {
        var hex = input.color_custom_hex || '#4A90E2';
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_custom_hex', hex);
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'color_variant', hex);
      }
    },
    getColorForSave: function getColorForSave(input) {
      if (!input) return '';
      var color = input.color_variant;
      if (!color && !input.color_name) return '';
      var hex = this.getColorHex(input);
      var selectValue = this.getColorSelectValue(input);
      var isPreset = selectValue && selectValue !== '__custom__';
      if (isPreset) {
        var found = this.colorVariantOptions.find(function (opt) {
          return opt.code === selectValue;
        });
        var label = found ? found.label : '';
        if (label && hex && hex !== '#000000') {
          return "".concat(label, " (").concat(hex, ")");
        }
        return label || hex;
      }

      // Custom color
      var customName = input.color_name ? String(input.color_name).trim() : '';
      if (customName && hex && hex !== '#000000') {
        return "".concat(customName, " (").concat(hex, ")");
      }
      if (customName) return customName;
      if (hex && hex !== '#000000') {
        return "Custom Color (".concat(hex, ")");
      }
      return hex || '';
    },
    getPresetColor: function getPresetColor(color) {
      return this.getColorSelectValue(color);
    },
    setVariantColor: function setVariantColor(input, color) {
      this.handleColorChange(input, color);
    },
    startMediaDrag: function startMediaDrag(group, index) {
      var variantIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.draggedMedia = {
        group: group,
        index: index,
        variantIndex: variantIndex
      };
    },
    endMediaDrag: function endMediaDrag() {
      this.draggedMedia = null;
    },
    dropMedia: function dropMedia(group, targetIndex) {
      var variantIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var dragged = this.draggedMedia;
      if (!dragged || dragged.group !== group || dragged.variantIndex !== variantIndex || dragged.index === targetIndex) {
        return this.endMediaDrag();
      }
      var images = this.getMediaList(group, variantIndex);
      var movedImage = images.splice(dragged.index, 1)[0];
      images.splice(targetIndex, 0, movedImage);
      images.forEach(function (image, index) {
        image.sort_order = index + 1;
      });
      if (group.indexOf('existing') !== -1) {
        this.saveMediaOrder(group, variantIndex, images);
      }
      this.endMediaDrag();
    },
    saveMediaOrder: function saveMediaOrder(group, variantIndex, images) {
      var _this14 = this;
      if (!this.id || !images.length) return;
      var variantId = group === 'other-existing' ? null : this.inputs[variantIndex].id;
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(this.$apiUrl + '/products/reorder_images', {
        product_id: this.id,
        variant_id: variantId,
        image_ids: images.map(function (image) {
          return image.id;
        })
      }).then(function (response) {
        if (!response.data || response.data.status !== 1) {
          _this14.showError(response.data && response.data.message || 'Unable to save image order.');
        }
      })["catch"](function () {
        return _this14.showError('Unable to save image order.');
      });
    },
    addVariantBarcode: function addVariantBarcode(input) {
      if (!Array.isArray(input.barcodes)) {
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'barcodes', ['']);
        return;
      }
      input.barcodes.push('');
    },
    removeVariantBarcode: function removeVariantBarcode(input, index) {
      if (Array.isArray(input.barcodes) && input.barcodes.length > 1) {
        input.barcodes.splice(index, 1);
      }
    },
    normalizeVariantBarcodes: function normalizeVariantBarcodes(input) {
      return (Array.isArray(input.barcodes) ? input.barcodes : []).map(function (barcode) {
        return String(barcode || '').trim();
      }).filter(function (barcode) {
        return barcode !== '';
      });
    },
    validateVariantDetails: function validateVariantDetails() {
      var barcodePattern = /^[A-Za-z0-9-]+$/;
      var seenBarcodes = new Set();
      var productBarcode = String(this.barcode || '').trim().toLowerCase();
      var _iterator2 = _createForOfIteratorHelper(this.inputs),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var input = _step2.value;
          vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'barcodeError', '');
          var mrp = this.toNumber(this.type === 'packet' ? input.packet_price : input.loose_price);
          var salePrice = this.toNumber(this.type === 'packet' ? input.packet_sale_price : input.loose_sale_price);
          var saleErrorKey = this.type === 'packet' ? 'validationErrorSalePrice' : 'validationErrorSalePriceLoose';
          if (salePrice < 0 || salePrice > mrp) {
            vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, saleErrorKey, 'Sale Price must be between 0 and MRP.');
            this.showError('Sale Price must be between 0 and MRP.');
            return false;
          }
          vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, saleErrorKey, null);
          var _iterator3 = _createForOfIteratorHelper(this.normalizeVariantBarcodes(input)),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var barcode = _step3.value;
              var normalized = barcode.toLowerCase();
              if (!barcodePattern.test(barcode)) {
                vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'barcodeError', 'Use only letters, numbers, and hyphens in barcodes.');
                this.showError(input.barcodeError);
                return false;
              }
              if (normalized === productBarcode || seenBarcodes.has(normalized)) {
                vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(input, 'barcodeError', 'Every product and variant barcode must be unique.');
                this.showError(input.barcodeError);
                return false;
              }
              seenBarcodes.add(normalized);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return true;
    },
    getSellerCategories: function getSellerCategories() {
      return this.getCategories();
    },
    getDefaultSellerId: function getDefaultSellerId() {
      if (this.isSellerRole && this.login_user && this.login_user.seller) {
        return this.login_user.seller.id;
      }
      return this.sellers && this.sellers.length > 0 ? this.sellers[0].id : '';
    },
    getSeller: function getSeller() {
      var _this15 = this;
      if (this.seller_id !== 0 && this.seller_id !== "" && !this.id) {
        this.isLoading = true;
        var param = {
          "seller_id": this.seller_id
        };
        axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/sellers/edit/' + this.seller_id, {
          params: param
        }).then(function (response) {
          _this15.isLoading = false, _this15.require_products_approval = response.data.data.require_products_approval;
          _this15.is_approved = _this15.require_products_approval == 0 ? 1 : 0;
        });
      }
    },
    getCategories: function getCategories() {
      var _this16 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/categories', {
        params: {
          status: 1,
          limit: 1000
        }
      }).then(function (response) {
        _this16.isLoading = false;
        var data = response.data || {};
        var categories = Array.isArray(data.data) ? data.data : data.data && Array.isArray(data.data.categories) ? data.data.categories : [];
        _this16.productCategoryList = categories;
        if (_this16.category_id) {
          _this16.setCategorySelectionFromSavedId(_this16.category_id);
        }
      })["catch"](function (error) {
        _this16.isLoading = false;
        _this16.productCategoryList = [];
      });
    },
    getSellers: function getSellers() {
      var _this17 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/sellers').then(function (response) {
        _this17.isLoading = false;
        var data = response.data;
        _this17.sellers = Array.isArray(data.data) ? data.data : [];
        if (!_this17.seller_id && _this17.sellers.length > 0) {
          _this17.seller_id = _this17.sellers[0].id;
          _this17.getSeller();
        }
      });
    },
    getTaxes: function getTaxes() {
      var _this18 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/products/taxes').then(function (response) {
        _this18.isLoading = false;
        var data = response.data;
        _this18.taxes = data.data;
      });
    },
    getUnits: function getUnits() {
      var _this19 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/units/get').then(function (response) {
        _this19.isLoading = false;
        var data = response.data;
        _this19.units = data.data;
      });
    },
    getBrands: function getBrands() {
      var _this20 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/products/brands/get').then(function (response) {
        _this20.isLoading = false;
        var data = response.data;
        _this20.brands = data.data;
        if (_this20.cachedData && _this20.cachedData.brand) {
          var foundBrand = _this20.brands.find(function (b) {
            return b.id === _this20.cachedData.brand.id;
          }) || null;
          // Update brand with translated name
          _this20.$nextTick(function () {
            if (foundBrand && _this20.translatedBrands && _this20.translatedBrands.length > 0) {
              var translatedBrand = _this20.translatedBrands.find(function (b) {
                return b.id === foundBrand.id;
              });
              if (translatedBrand) {
                _this20.brand = _objectSpread(_objectSpread({}, foundBrand), {}, {
                  name: translatedBrand.name,
                  title: translatedBrand.title
                });
              } else {
                _this20.brand = foundBrand;
              }
            } else {
              _this20.brand = foundBrand;
            }
          });
        }
      });
    },
    getCountries: function getCountries() {
      var _this21 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/countries/active').then(function (response) {
        _this21.isLoading = false;
        var data = response.data;
        _this21.countries = data.data;
        if (_this21.cachedData && _this21.cachedData.made_in) {
          _this21.made_in = _this21.countries.find(function (c) {
            return c.id === _this21.cachedData.made_in.id;
          }) || null;
        } else {
          // Set default to India
          _this21.made_in = _this21.countries.find(function (c) {
            return c.name === 'India';
          }) || null;
        }
      });
    },
    /**
     * Status label for dropdown. API returns status_name as object by lang code { en: "...", hi: "..." }.
     * Picks current app locale; fallback to status.status.
     */
    getStatusDisplayName: function getStatusDisplayName(status) {
      if (!status) return '';
      var sn = status.status_name;
      if (sn == null) return status.status || '';
      if (typeof sn === 'string') return sn.trim() || status.status || '';
      if (_typeof(sn) === 'object' && !Array.isArray(sn)) {
        var appLocale = window.appLocale || window.localStorage.getItem('lang') || 'en';
        var forLocale = sn[appLocale];
        if (forLocale != null && String(forLocale).trim() !== '') return String(forLocale).trim();
        var first = Object.values(sn).find(function (val) {
          return val != null && String(val).trim() !== '';
        });
        return first != null ? String(first).trim() : status.status || '';
      }
      return status.status || '';
    },
    getOrderStatus: function getOrderStatus() {
      var _this22 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/order_statuses').then(function (response) {
        _this22.isLoading = false;
        var data = response.data;
        var statusesToRemoveIds = [6, 7, 8];
        _this22.order_status = data.data.filter(function (status) {
          return !statusesToRemoveIds.includes(status.id);
        });
      });
    },
    getTextGenKey: function getTextGenKey() {
      var _this23 = this;
      // Get the text generation API key from store settings
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/store_settings').then(function (response) {
        var data = response.data.data;
        if (data.store_settings) {
          data.store_settings.forEach(function (item) {
            if (item.variable === 'text_gen_key') {
              _this23.textGenKey = item.value;
            }
          });
        }
      })["catch"](function (error) {
        console.error('Error fetching text generation key:', error);
      });
    },
    validateBarcode: function validateBarcode() {
      var barcodePattern = /^[A-Za-z0-9-]+$/;
      var barcode = String(this.barcode || '').trim();
      if (barcode === '') {
        this.validationBarcodeMessage = '';
        this.isBarcodeValid = false;
        return;
      }
      if (barcodePattern.test(barcode)) {
        this.validationBarcodeMessage = '';
        this.isBarcodeValid = true;
      } else {
        this.validationBarcodeMessage = 'Invalid Barcode Number.';
        this.isBarcodeValid = false;
      }
    },
    validateDiscountedPrice: function validateDiscountedPrice(input) {
      var discountedPrice = parseFloat(input.discounted_price);
      var actualPrice = parseFloat(input.packet_price);
      if (discountedPrice >= actualPrice) {
        input.validationErrorDiscountedPrice = "Discounted Price must be less than Actual Price";
        input.discounted_price = null;
      } else {
        input.validationErrorDiscountedPrice = null;
      }
    },
    validateDiscountedPriceLoose: function validateDiscountedPriceLoose(input) {
      var discountedPrice = parseFloat(input.loose_discounted_price);
      var actualPrice = parseFloat(input.loose_price);
      if (discountedPrice >= actualPrice) {
        input.validationErrorDiscountedPriceLoose = "Discounted Price must be less than Actual Price";
        input.loose_discounted_price = null;
      } else {
        input.validationErrorDiscountedPriceLoose = null;
      }
    },
    validateStockWithMeasurement: function validateStockWithMeasurement() {
      if (this.is_unlimited_stock == 1) {
        return true;
      }
      if (this.type === 'loose') {
        var totalStock = parseFloat(this.loose_stock);
        for (var i = 0; i < this.inputs.length; i++) {
          var measurement = parseFloat(this.inputs[i].loose_measurement);
          if (measurement > totalStock) {
            this.showError("Variant ".concat(i + 1, " measurement (").concat(measurement, ") cannot exceed total stock (").concat(totalStock, ")"));
            return false;
          }
        }
      }
      return true;
    },
    getProduct: function getProduct() {
      var _this24 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.$apiUrl + '/products/edit/' + this.id).then(function (response) {
        var data = response.data;
        if (data.status === 1) {
          var _this24$record$indica;
          _this24.record = data.data;
          _this24.name = _this24.record.name;
          _this24.slug = _this24.record.slug;
          _this24.barcode = _this24.record.barcode;
          if (_this24.clone) {
            _this24.name = '';
            _this24.slug = '';
            _this24.barcode = '';
          }
          _this24.seller_id = _this24.record.seller_id;
          _this24.getSellerCategories();
          _this24.getSeller();
          _this24.tax_id = _this24.record.tax_id;
          var foundBrand = _this24.brands.find(function (item) {
            return item.id === _this24.record.brand_id;
          });
          // Update brand with translated name after brands are loaded
          _this24.$nextTick(function () {
            if (foundBrand && _this24.translatedBrands && _this24.translatedBrands.length > 0) {
              var translatedBrand = _this24.translatedBrands.find(function (b) {
                return b.id === foundBrand.id;
              });
              if (translatedBrand) {
                _this24.brand = _objectSpread(_objectSpread({}, foundBrand), {}, {
                  name: translatedBrand.name,
                  title: translatedBrand.title
                });
              } else {
                _this24.brand = foundBrand;
              }
            } else {
              _this24.brand = foundBrand;
            }
          });
          _this24.type = _this24.record.type;
          _this24.category_id = _this24.record.category_id;

          // Load all categories (primary + additional) for multi-category selection
          _this24.selected_categories = [];
          _this24.selected_sub_categories = [];
          _this24.selected_sub_sub_categories = [];

          // --- START ROBUST CATEGORY PARSER ---
          var allCategoryIds = new Set();
          var parseIds = function parseIds(val) {
            if (!val) return;
            String(val).split(',').map(function (id) {
              return parseInt(id.trim());
            }).filter(function (id) {
              return !isNaN(id);
            }).forEach(function (id) {
              return allCategoryIds.add(id);
            });
          };
          parseIds(_this24.record.category_id);
          parseIds(_this24.record.additional_category_ids);
          parseIds(_this24.record.sub_category_id);
          parseIds(_this24.record.sub_sub_category_id);
          allCategoryIds.forEach(function (id) {
            var cat = _this24.productCategoryList.find(function (c) {
              return c.id === id;
            });
            if (cat) {
              var isRoot = !cat.parent_id || parseInt(cat.parent_id) === 0;
              if (isRoot) {
                if (!_this24.selected_categories.some(function (c) {
                  return c.id === cat.id;
                })) {
                  _this24.selected_categories.push(cat);
                }
              } else {
                var parent = _this24.productCategoryList.find(function (p) {
                  return p.id === parseInt(cat.parent_id);
                });
                if (parent && (!parent.parent_id || parseInt(parent.parent_id) === 0)) {
                  if (!_this24.selected_sub_categories.some(function (c) {
                    return c.id === cat.id;
                  })) {
                    _this24.selected_sub_categories.push(cat);
                  }
                } else if (parent) {
                  if (!_this24.selected_sub_sub_categories.some(function (c) {
                    return c.id === cat.id;
                  })) {
                    _this24.selected_sub_sub_categories.push(cat);
                  }
                }
              }
            }
          });
          // --- END ROBUST CATEGORY PARSER ---

          // Add primary category (Disabled because handled above)
          _this24.record.category_id = null;
          _this24.record.additional_category_ids = null;
          _this24.record.sub_category_id = null;
          _this24.record.sub_sub_category_id = null;

          // Add primary category
          if (_this24.record.category_id) {
            var primaryCategory = _this24.productCategoryList.find(function (cat) {
              return cat.id === _this24.record.category_id;
            });
            if (primaryCategory) {
              _this24.selected_categories.push(primaryCategory);
            }
          }

          // Add additional categories
          if (_this24.record.additional_category_ids) {
            var additionalIds = _this24.record.additional_category_ids.split(',').map(function (id) {
              return parseInt(id.trim());
            }).filter(function (id) {
              return !isNaN(id);
            });
            var additionalCategories = _this24.productCategoryList.filter(function (cat) {
              return additionalIds.includes(cat.id) && cat.id !== _this24.record.category_id;
            });

            // Categorize them into main, sub, sub-sub
            additionalCategories.forEach(function (cat) {
              if (!cat.parent_id || cat.parent_id == 0) {
                if (!_this24.selected_categories.some(function (c) {
                  return c.id === cat.id;
                })) {
                  _this24.selected_categories.push(cat);
                }
              } else {
                var parent = _this24.productCategoryList.find(function (p) {
                  return p.id === cat.parent_id;
                });
                if (parent && (!parent.parent_id || parent.parent_id == 0)) {
                  _this24.selected_sub_categories.push(cat);
                } else if (parent) {
                  _this24.selected_sub_sub_categories.push(cat);
                }
              }
            });
          }
          if (_this24.record.sub_category_id) {
            var subCatId = parseInt(_this24.record.sub_category_id);
            var subCategory = _this24.productCategoryList.find(function (cat) {
              return cat.id === subCatId;
            });
            if (subCategory && !_this24.selected_sub_categories.some(function (c) {
              return c.id === subCatId;
            })) {
              _this24.selected_sub_categories.push(subCategory);
            }
          }
          if (_this24.record.sub_sub_category_id) {
            var subSubCatId = parseInt(_this24.record.sub_sub_category_id);
            var subSubCategory = _this24.productCategoryList.find(function (cat) {
              return cat.id === subSubCatId;
            });
            if (subSubCategory && !_this24.selected_sub_sub_categories.some(function (c) {
              return c.id === subSubCatId;
            })) {
              _this24.selected_sub_sub_categories.push(subSubCategory);
            }
          }
          _this24.product_type = (_this24$record$indica = _this24.record.indicator) !== null && _this24$record$indica !== void 0 ? _this24$record$indica : "";

          // Load translations
          _this24.loadTranslations();
          _this24.made_in = _this24.countries.find(function (item) {
            return item.id == _this24.record.made_in;
          });
          _this24.tax_included_in_price = _this24.record.tax_included_in_price;
          _this24.return_status = _this24.record.return_status;
          _this24.return_days = _this24.record.return_days;
          _this24.cancelable_status = _this24.record.cancelable_status;
          _this24.till_status = _this24.record.till_status;
          _this24.cod_allowed_status = _this24.record.cod_allowed;
          _this24.max_allowed_quantity = _this24.record.total_allowed_quantity;
          _this24.description = _this24.record.description;
          _this24.highlights = _this24.record.highlights || '';
          _this24.is_approved = _this24.record.is_approved;
          _this24.status = _this24.record.status;
          _this24.is_unlimited_stock = _this24.record.is_unlimited_stock;
          _this24.main_image_path = _this24.$storageUrl + _this24.record.image;
          _this24.other_images = _this24.record.images;
          _this24.image = null;
          _this24.meta_title = _this24.record.meta_title;
          _this24.meta_keywords = _this24.record.meta_keywords;
          _this24.schema_markup = _this24.record.schema_markup;
          _this24.meta_description = _this24.record.meta_description;

          // Set default language translation from main record
          if (_this24.defaultLanguageId && _this24.translations[_this24.defaultLanguageId]) {
            _this24.translations[_this24.defaultLanguageId].name = _this24.name;
            _this24.translations[_this24.defaultLanguageId].description = _this24.description;
            _this24.translations[_this24.defaultLanguageId].highlights = _this24.highlights;
            _this24.translations[_this24.defaultLanguageId].meta_title = _this24.meta_title;
            _this24.translations[_this24.defaultLanguageId].meta_keywords = _this24.meta_keywords;
            _this24.translations[_this24.defaultLanguageId].schema_markup = _this24.schema_markup;
            _this24.translations[_this24.defaultLanguageId].meta_description = _this24.meta_description;
          }
          var vm = _this24;
          if (_this24.type == 'packet') {
            _this24.inputs = [];
            _this24.record.variants.forEach(function (item) {
              var variantData = {
                'id': item.id ? item.id : "",
                'variant_name': item.variant_name || '',
                'packet_measurement': item.measurement,
                'packet_price': item.price,
                'packet_purchase_price': item.purchase_price,
                'packet_sale_price': vm.getStoredSalePrice(item.price, item.discounted_price),
                'discounted_price': vm.getDiscountAmountFromSalePrice(item.price, item.discounted_price),
                'discount_percentage': item.discount_percentage || vm.getDiscountPercentFromSalePrice(item.price, item.discounted_price),
                'discount_mode': item.discount_percentage ? 'percent' : 'amount',
                'packet_stock': item.stock,
                'packet_stock_unit_id': item.stock_unit_id,
                'packet_status': item.status,
                'color_variant': item.color_variant || '',
                'color_name': vm.extractColorName(item.color_variant),
                'color_custom_hex': vm.getColorHex(item.color_variant),
                'expiry_date_from': item.expiry_date_from || '',
                'expiry_date_to': item.expiry_date_to || '',
                'images': item.images,
                'loose_images': [],
                'barcodes': item.barcodes && item.barcodes.length ? item.barcodes.map(function (barcode) {
                  return barcode.barcode;
                }) : [''],
                'barcodeError': ''
              };
              vm.inputs.push(variantData);
            });
          }
          if (_this24.type == 'loose') {
            var loose_stock = 0;
            var loose_stock_unit_id = 0;
            var status = 0;
            _this24.inputs = [];
            _this24.record.variants.forEach(function (item) {
              var _item$custom_title;
              var variantData = {
                'id': item.id ? item.id : "",
                'variant_name': item.variant_name || '',
                'loose_measurement': item.measurement,
                'loose_custom_title': (_item$custom_title = item.custom_title) !== null && _item$custom_title !== void 0 ? _item$custom_title : "",
                'loose_price': item.price,
                'loose_purchase_price': item.purchase_price || 0,
                'loose_sale_price': vm.getStoredSalePrice(item.price, item.discounted_price),
                'loose_discount_percentage': item.discount_percentage || vm.getDiscountPercentFromSalePrice(item.price, item.discounted_price),
                'loose_discounted_price': vm.getDiscountAmountFromSalePrice(item.price, item.discounted_price),
                'loose_discount_mode': item.discount_percentage ? 'percent' : 'amount',
                'packet_stock': item.stock,
                'color_variant': item.color_variant || '',
                'color_name': vm.extractColorName(item.color_variant),
                'color_custom_hex': vm.getColorHex(item.color_variant),
                'expiry_date_from': item.expiry_date_from || '',
                'expiry_date_to': item.expiry_date_to || '',
                'loose_images': item.images,
                'images': [],
                'barcodes': item.barcodes && item.barcodes.length ? item.barcodes.map(function (barcode) {
                  return barcode.barcode;
                }) : [''],
                'barcodeError': ''
              };
              vm.inputs.push(variantData);
              loose_stock = item.stock;
              loose_stock_unit_id = item.stock_unit_id;
              status = item.status;
            });
            _this24.loose_stock = loose_stock;
            _this24.loose_stock_unit_id = loose_stock_unit_id;
            _this24.loose_purchase_price = _this24.record.variants[0] ? _this24.record.variants[0].purchase_price : 0;
            _this24.loose_discount_percentage = _this24.record.variants[0] ? _this24.record.variants[0].discount_percentage || _this24.getDiscountPercentFromSalePrice(_this24.record.variants[0].price, _this24.record.variants[0].discounted_price) : 0;
            _this24.status = status;
          }
        } else {
          _this24.showError(data.message);
          setTimeout(function () {
            _this24.$router.back();
          }, 1000);
        }
      })["catch"](function (error) {
        _this24.isLoading = false;
        if (error.message) {
          _this24.showError(error.message);
        } else {
          _this24.showError("Something went wrong!");
        }
      });
    },
    saveRecord: function saveRecord() {
      var _this25 = this;
      // Validate default language
      if (!this.validateDefaultLanguage()) {
        return;
      }

      // Validate category selection
      if (!this.selected_categories || this.selected_categories.length === 0) {
        this.showError(__('please_select_at_least_one_category'));
        return;
      }

      // Validate stock vs measurement
      if (!this.validateStockWithMeasurement()) {
        return;
      }

      // Validate editable sale prices and optional variant barcodes.
      if (!this.validateVariantDetails()) {
        return;
      }
      this.isLoading = true;
      var vm = this;

      // Get default language translation for main table
      var defaultLang = this.languages.find(function (lang) {
        return lang.is_default === 1;
      });
      if (!defaultLang) {
        vm.showError(__('default_language_not_found'));
        vm.isLoading = false;
        return;
      }
      var defaultTranslation = this.translations[defaultLang.id];
      var formData = new FormData();
      if (this.id) {
        formData.append('id', this.id);
        formData.append('deleteImageIds', JSON.stringify(this.deleteImageIds));
      }
      // Use default language values for main table
      formData.append('name', defaultTranslation.name || '');
      formData.append('slug', this.slug);
      formData.append('seller_id', this.seller_id || this.getDefaultSellerId());
      formData.append('tax_id', this.tax_id);
      formData.append('brand_id', this.brand ? this.brand.id : 0);
      formData.append('description', defaultTranslation.description || '');
      formData.append('highlights', defaultTranslation.highlights || '');
      formData.append('type', this.type);
      formData.append('is_unlimited_stock', this.is_unlimited_stock);
      formData.append('barcode', this.barcode != null && this.barcode !== undefined ? String(this.barcode).trim() : '');
      formData.append('meta_title', defaultTranslation.meta_title || '');
      formData.append('meta_keywords', defaultTranslation.meta_keywords || '');
      formData.append('schema_markup', defaultTranslation.schema_markup || '');
      formData.append('meta_description', defaultTranslation.meta_description || '');
      formData.append('has_variant', this.has_variant ? 1 : 0);

      /*packet*/
      if (this.type === 'packet') {
        var _loop = function _loop(_i) {
          formData.append('variant_id[]', _this25.inputs[_i].id ? _this25.inputs[_i].id : "");
          formData.append('packet_variant_name[]', _this25.inputs[_i].variant_name || '');
          formData.append('packet_color_variant[]', _this25.getColorForSave(_this25.inputs[_i]));
          formData.append('packet_color_name[]', _this25.inputs[_i].color_name || '');
          formData.append('packet_expiry_date_from[]', _this25.inputs[_i].expiry_date_from || '');
          formData.append('packet_expiry_date_to[]', _this25.inputs[_i].expiry_date_to || '');
          formData.append('packet_measurement[]', _this25.inputs[_i].packet_measurement || 1);
          formData.append('packet_price[]', _this25.inputs[_i].packet_price != undefined ? _this25.inputs[_i].packet_price : 0);
          formData.append('packet_purchase_price[]', _this25.inputs[_i].packet_purchase_price != undefined ? _this25.inputs[_i].packet_purchase_price : 0);
          formData.append('discounted_price[]', _this25.getPacketSalePriceRaw(_this25.inputs[_i]));
          formData.append('discount_percentage[]', _this25.getPacketDiscountPercentage(_this25.inputs[_i]));
          formData.append('packet_stock[]', _this25.inputs[_i].packet_stock != undefined ? _this25.inputs[_i].packet_stock : 0);
          formData.append('packet_stock_unit_id[]', _this25.inputs[_i].packet_stock_unit_id != undefined ? _this25.inputs[_i].packet_stock_unit_id : 0);
          formData.append('packet_status[]', _this25.getPacketStatusForSave(_this25.inputs[_i]));
          formData.append('variant_barcodes[]', JSON.stringify(_this25.normalizeVariantBarcodes(_this25.inputs[_i])));
          (_this25.variantImages[_i] || []).forEach(function (image) {
            formData.append('packet_variant_images_' + _i + '[]', image.file);
          });
        };
        for (var _i = 0; _i < this.inputs.length; _i++) {
          _loop(_i);
        }
      }

      /*loose*/
      if (this.type === 'loose') {
        var _loop2 = function _loop2(_i2) {
          formData.append('variant_id[]', _this25.inputs[_i2].id ? _this25.inputs[_i2].id : "");
          formData.append('loose_variant_name[]', _this25.inputs[_i2].variant_name || '');
          formData.append('loose_color_variant[]', _this25.getColorForSave(_this25.inputs[_i2]));
          formData.append('loose_color_name[]', _this25.inputs[_i2].color_name || '');
          formData.append('loose_expiry_date_from[]', _this25.inputs[_i2].expiry_date_from || '');
          formData.append('loose_expiry_date_to[]', _this25.inputs[_i2].expiry_date_to || '');
          formData.append('loose_measurement[]', _this25.inputs[_i2].loose_measurement || 1);
          formData.append('loose_custom_title[]', _this25.inputs[_i2].loose_custom_title);
          formData.append('loose_price[]', _this25.inputs[_i2].loose_price != undefined ? _this25.inputs[_i2].loose_price : 0);
          formData.append('loose_discounted_price[]', _this25.getLooseSalePriceRaw(_this25.inputs[_i2]));
          formData.append('loose_discount_percentage[]', _this25.getLooseDiscountPercentage(_this25.inputs[_i2]));
          formData.append('loose_purchase_price[]', _this25.inputs[_i2].loose_purchase_price != undefined ? _this25.inputs[_i2].loose_purchase_price : 0);
          formData.append('packet_stock[]', _this25.inputs[_i2].packet_stock != undefined ? _this25.inputs[_i2].packet_stock : 0);
          formData.append('variant_barcodes[]', JSON.stringify(_this25.normalizeVariantBarcodes(_this25.inputs[_i2])));
          (_this25.variantImages[_i2] || []).forEach(function (image) {
            formData.append('loose_variant_images_' + _i2 + '[]', image.file);
          });
        };
        for (var _i2 = 0; _i2 < this.inputs.length; _i2++) {
          _loop2(_i2);
        }
        formData.append('loose_stock', this.loose_stock);
        formData.append('loose_stock_unit_id', this.loose_stock_unit_id);
        formData.append('status', this.status);
      }
      formData.append('loose_stock', this.loose_stock != undefined ? this.loose_stock : 0);
      formData.append('loose_stock_unit_id', this.loose_stock_unit_id != undefined ? this.loose_stock_unit_id : 0);
      formData.append('status', this.status != undefined ? this.status : 0);
      formData.append('expiry_date_from', this.expiry_date_from || '');
      formData.append('expiry_date_to', this.expiry_date_to || '');

      // Handle multi-category selection
      var finalCategories = [];
      if (this.selected_categories) finalCategories.push.apply(finalCategories, _toConsumableArray(this.selected_categories));
      if (this.selected_sub_categories) finalCategories.push.apply(finalCategories, _toConsumableArray(this.selected_sub_categories));
      if (this.selected_sub_sub_categories) finalCategories.push.apply(finalCategories, _toConsumableArray(this.selected_sub_sub_categories));
      if (finalCategories.length > 0) {
        // Use the first selected main category as the primary category_id
        this.category_id = this.selected_categories[0] ? this.selected_categories[0].id : finalCategories[0].id;
        formData.append('category_id', this.category_id);
        if (this.selected_sub_categories && this.selected_sub_categories.length > 0) {
          formData.append('sub_category_id', this.selected_sub_categories.map(function (c) {
            return c.id;
          }).join(','));
        }
        if (this.selected_sub_sub_categories && this.selected_sub_sub_categories.length > 0) {
          formData.append('sub_sub_category_id', this.selected_sub_sub_categories.map(function (c) {
            return c.id;
          }).join(','));
        }

        // Send all selected categories as additional_category_ids
        var allCategoryIds = finalCategories.map(function (cat) {
          return cat.id;
        }).join(',');
        formData.append('additional_category_ids', allCategoryIds);
      } else {
        // Fallback to original logic if no categories selected
        this.category_id = this.selectedProductCategoryId;
        formData.append('category_id', this.category_id);
        if (this.product_subcategory_id) formData.append('sub_category_id', this.product_subcategory_id);
        if (this.product_sub_subcategory_id) formData.append('sub_sub_category_id', this.product_sub_subcategory_id);
        formData.append('additional_category_ids', '');
      }
      formData.append('product_type', this.product_type);
      formData.append('made_in', this.made_in ? this.made_in.id : 0);
      formData.append('shipping_type', this.shipping_type);
      formData.append('pincode_ids_exc', this.pincode_ids_exc);
      formData.append('return_status', this.return_status);
      var returnDaysToStore = parseInt(this.return_days, 10) > 0 ? this.return_days : 1;
      formData.append('return_days', returnDaysToStore);
      formData.append('cancelable_status', this.cancelable_status);
      formData.append('till_status', this.till_status);
      formData.append('cod_allowed_status', this.cod_allowed_status);
      formData.append('max_allowed_quantity', this.max_allowed_quantity);
      formData.append('is_approved', this.is_approved);
      formData.append('tax_included_in_price', this.tax_included_in_price);
      if (this.image instanceof File) {
        formData.append('image', this.image);
      }
      // Other Images - Use files from images array to maintain correct indexing
      for (var i = 0; i < this.images.length; i++) {
        var file = this.images[i].file;
        formData.append('other_images[]', file);
      }

      // Prepare translations array
      var allTranslations = [];
      this.languages.forEach(function (language) {
        var translation = _this25.translations[language.id];
        allTranslations.push({
          language_id: language.id,
          name: translation.name || '',
          description: translation.description || '',
          highlights: translation.highlights || '',
          meta_title: translation.meta_title || '',
          meta_keywords: translation.meta_keywords || '',
          schema_markup: translation.schema_markup || '',
          meta_description: translation.meta_description || ''
        });
      });
      formData.append('translations', JSON.stringify(allTranslations));
      var url = this.$apiUrl + '/products/save';
      if (this.clone) {
        url = this.$apiUrl + '/products/save';
      } else if (this.id) {
        url = this.$apiUrl + '/products/update';
      }
      axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this25.skipCache = true;
          localStorage.removeItem('product_form_cache');
          _this25.showMessage("success", data.message);
          setTimeout(function () {
            var _vm$loggedUser;
            vm.$swal.close();
            vm.isLoading = false;
            if (((_vm$loggedUser = vm.loggedUser) === null || _vm$loggedUser === void 0 || (_vm$loggedUser = _vm$loggedUser.role) === null || _vm$loggedUser === void 0 ? void 0 : _vm$loggedUser.name) === "Seller") {
              vm.$router.push({
                path: '/seller/manage_products'
              });
            } else {
              vm.$router.push({
                path: '/manage_products'
              });
            }
          }, 2000);
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        vm.isLoading = false;
        _this25.showError("Something went wrong!");
      });
    },
    deleteImage: function deleteImage(index, id, productImage) {
      var _this26 = this;
      var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      this.$swal.fire({
        title: "Are you Sure?",
        text: "You want be able to revert this",
        confirmButtonText: "Yes, Sure",
        cancelButtonText: "Cancel",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#37a279',
        cancelButtonColor: '#d33'
      }).then(function (result) {
        if (result.value) {
          _this26.deleteImageIds.push(id);
          if (productImage) {
            _this26.other_images.splice(index, 1);
          } else {
            if (_this26.type === 'packet') {
              _this26.inputs[key].images.splice(index, 1);
            } else {
              _this26.inputs[key].loose_images.splice(index, 1);
            }
          }
        }
      });
    },
    changeUnits: function changeUnits() {},
    setCategorySelectionFromSavedId: function setCategorySelectionFromSavedId(categoryId) {
      var selectedId = Number(categoryId);
      if (!selectedId || this.productCategoryList.length === 0) return;
      var categoryMap = this.productCategoryList.reduce(function (map, category) {
        map[Number(category.id)] = category;
        return map;
      }, {});
      var selected = categoryMap[selectedId];
      if (!selected) return;
      var parent = categoryMap[Number(selected.parent_id)];
      var grandParent = parent ? categoryMap[Number(parent.parent_id)] : null;
      if (Number(selected.parent_id) === 0) {
        this.product_category_id = selected.id;
        this.product_subcategory_id = '';
        this.product_sub_subcategory_id = '';
        this.product_sub_sub_subcategory_id = '';
      } else if (parent && Number(parent.parent_id) === 0) {
        this.product_category_id = parent.id;
        this.product_subcategory_id = selected.id;
        this.product_sub_subcategory_id = '';
        this.product_sub_sub_subcategory_id = '';
      } else if (parent && grandParent) {
        var greatGrandParent = grandParent ? categoryMap[Number(grandParent.parent_id)] : null;
        if (greatGrandParent) {
          this.product_category_id = greatGrandParent.id;
          this.product_subcategory_id = grandParent.id;
          this.product_sub_subcategory_id = parent.id;
          this.product_sub_sub_subcategory_id = selected.id;
        } else {
          this.product_category_id = grandParent.id;
          this.product_subcategory_id = parent.id;
          this.product_sub_subcategory_id = selected.id;
          this.product_sub_sub_subcategory_id = '';
        }
      }
    },
    hasValue: function hasValue(value) {
      return value !== null && value !== undefined && value !== '';
    },
    getSellingPrice: function getSellingPrice(price, discountPercent, discountAmount) {
      var discountMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'percent';
      var mrp = this.toNumber(price);
      if (mrp <= 0) return 0;
      if (discountMode === 'percent' && this.hasValue(discountPercent)) {
        return Math.max(mrp - mrp * this.toNumber(discountPercent) / 100, 0);
      }
      return Math.max(mrp - this.toNumber(discountAmount), 0);
    },
    getDiscountAmountFromSalePrice: function getDiscountAmountFromSalePrice(price, salePrice) {
      var mrp = this.toNumber(price);
      var sale = this.toNumber(salePrice);
      if (mrp <= 0 || sale <= 0 || sale >= mrp) return 0;
      return (mrp - sale).toFixed(2);
    },
    getDiscountPercentFromSalePrice: function getDiscountPercentFromSalePrice(price, salePrice) {
      var mrp = this.toNumber(price);
      var sale = this.toNumber(salePrice);
      if (mrp <= 0 || sale <= 0 || sale >= mrp) return 0;
      return (100 - sale * 100 / mrp).toFixed(2);
    },
    getStoredSalePrice: function getStoredSalePrice(price, salePrice) {
      var storedSalePrice = this.toNumber(salePrice);
      return this.formatMoney(storedSalePrice > 0 ? storedSalePrice : price);
    },
    toNumber: function toNumber(value) {
      var number = parseFloat(value);
      return Number.isFinite(number) ? number : 0;
    },
    formatMoney: function formatMoney(value) {
      var amount = this.toNumber(value);
      return amount.toFixed(2);
    },
    getPacketStatusForSave: function getPacketStatusForSave(input) {
      var stock = this.toNumber(input.packet_stock);
      var status = input.packet_status;
      if (Number(this.is_unlimited_stock) === 0 && stock <= 0) {
        return 0;
      }
      return status !== undefined && status !== '' ? status : 1;
    },
    getMarginPercent: function getMarginPercent(sellingPrice, purchasePrice) {
      var sale = this.toNumber(sellingPrice);
      var cost = this.toNumber(purchasePrice);
      if (cost <= 0) return sale > 0 ? '100.00' : '0.00';
      return ((sale - cost) / cost * 100).toFixed(2);
    },
    getPacketProfit: function getPacketProfit(input) {
      var sellingPrice = this.getPacketSalePriceRaw(input);
      var purchasePrice = this.toNumber(input.packet_purchase_price);
      return this.formatMoney(sellingPrice - purchasePrice);
    },
    getPacketSalePriceRaw: function getPacketSalePriceRaw(input) {
      if (this.hasValue(input.packet_sale_price)) {
        return Math.max(this.toNumber(input.packet_sale_price), 0);
      }
      return this.getSellingPrice(input.packet_price, input.discount_percentage, input.discounted_price, input.discount_mode || 'percent');
    },
    getPacketSalePrice: function getPacketSalePrice(input) {
      return this.formatMoney(this.getPacketSalePriceRaw(input));
    },
    getPacketProfitPercentage: function getPacketProfitPercentage(input) {
      var sellingPrice = this.getPacketSalePriceRaw(input);
      var purchasePrice = this.toNumber(input.packet_purchase_price);
      if (purchasePrice <= 0) return '0.00';
      return ((sellingPrice - purchasePrice) / purchasePrice * 100).toFixed(2);
    },
    getPacketDiscountPercentage: function getPacketDiscountPercentage(input) {
      var mrp = this.toNumber(input.packet_price);
      if (mrp <= 0) return '0.00';
      if ((input.discount_mode || 'percent') === 'amount') {
        return (this.toNumber(input.discounted_price) / mrp * 100).toFixed(2);
      }
      return this.formatMoney(input.discount_percentage);
    },
    setPacketDiscountMode: function setPacketDiscountMode(input, mode) {
      input.discount_mode = mode;
      input.validationErrorDiscountedPrice = null;
      var mrp = this.toNumber(input.packet_price);
      if (mode === 'amount' && mrp > 0 && this.toNumber(input.discounted_price) > mrp) {
        input.validationErrorDiscountedPrice = 'Discount amount must be less than MRP';
      }
      this.syncPacketSalePriceFromDiscount(input);
    },
    syncPacketSalePriceFromDiscount: function syncPacketSalePriceFromDiscount(input) {
      input.packet_sale_price = this.formatMoney(this.getSellingPrice(input.packet_price, input.discount_percentage, input.discounted_price, input.discount_mode || 'percent'));
      input.validationErrorSalePrice = null;
    },
    setPacketSalePrice: function setPacketSalePrice(input) {
      var mrp = this.toNumber(input.packet_price);
      var salePrice = this.toNumber(input.packet_sale_price);
      if (salePrice < 0 || salePrice > mrp) {
        input.validationErrorSalePrice = 'Sale Price must be between 0 and MRP.';
        return;
      }
      input.validationErrorSalePrice = null;
      input.discount_mode = 'amount';
      input.discounted_price = this.formatMoney(Math.max(mrp - salePrice, 0));
      input.discount_percentage = mrp > 0 ? this.formatMoney((mrp - salePrice) / mrp * 100) : '0.00';
    },
    getPacketMargin: function getPacketMargin(input) {
      var sellingPrice = this.getPacketSalePriceRaw(input);
      return this.getMarginPercent(sellingPrice, input.packet_purchase_price);
    },
    getLooseProfit: function getLooseProfit() {
      var _variant$loose_purcha;
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var variant = input || this.inputs[0] || {};
      var sellingPrice = this.getLooseSalePriceRaw(variant);
      var purchasePrice = this.toNumber((_variant$loose_purcha = variant.loose_purchase_price) !== null && _variant$loose_purcha !== void 0 ? _variant$loose_purcha : this.loose_purchase_price);
      return this.formatMoney(sellingPrice - purchasePrice);
    },
    getLooseSalePriceRaw: function getLooseSalePriceRaw(input) {
      if (this.hasValue(input.loose_sale_price)) {
        return Math.max(this.toNumber(input.loose_sale_price), 0);
      }
      return this.getSellingPrice(input.loose_price, input.loose_discount_percentage, input.loose_discounted_price, input.loose_discount_mode || 'percent');
    },
    getLooseSalePrice: function getLooseSalePrice() {
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var variant = input || this.inputs[0] || {};
      return this.formatMoney(this.getLooseSalePriceRaw(variant));
    },
    getLooseProfitPercentage: function getLooseProfitPercentage() {
      var _variant$loose_purcha2;
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var variant = input || this.inputs[0] || {};
      var sellingPrice = this.getLooseSalePriceRaw(variant);
      var purchasePrice = this.toNumber((_variant$loose_purcha2 = variant.loose_purchase_price) !== null && _variant$loose_purcha2 !== void 0 ? _variant$loose_purcha2 : this.loose_purchase_price);
      if (purchasePrice <= 0) return '0.00';
      return ((sellingPrice - purchasePrice) / purchasePrice * 100).toFixed(2);
    },
    getLooseDiscountPercentage: function getLooseDiscountPercentage(input) {
      var mrp = this.toNumber(input.loose_price);
      if (mrp <= 0) return '0.00';
      if ((input.loose_discount_mode || 'percent') === 'amount') {
        return (this.toNumber(input.loose_discounted_price) / mrp * 100).toFixed(2);
      }
      return this.formatMoney(input.loose_discount_percentage);
    },
    setLooseDiscountMode: function setLooseDiscountMode(input, mode) {
      input.loose_discount_mode = mode;
      input.validationErrorDiscountedPriceLoose = null;
      var mrp = this.toNumber(input.loose_price);
      if (mode === 'amount' && mrp > 0 && this.toNumber(input.loose_discounted_price) > mrp) {
        input.validationErrorDiscountedPriceLoose = 'Discount amount must be less than MRP';
      }
      this.syncLooseSalePriceFromDiscount(input);
    },
    syncLooseSalePriceFromDiscount: function syncLooseSalePriceFromDiscount(input) {
      input.loose_sale_price = this.formatMoney(this.getSellingPrice(input.loose_price, input.loose_discount_percentage, input.loose_discounted_price, input.loose_discount_mode || 'percent'));
      input.validationErrorSalePriceLoose = null;
    },
    setLooseSalePrice: function setLooseSalePrice(input) {
      var mrp = this.toNumber(input.loose_price);
      var salePrice = this.toNumber(input.loose_sale_price);
      if (salePrice < 0 || salePrice > mrp) {
        input.validationErrorSalePriceLoose = 'Sale Price must be between 0 and MRP.';
        return;
      }
      input.validationErrorSalePriceLoose = null;
      input.loose_discount_mode = 'amount';
      input.loose_discounted_price = this.formatMoney(Math.max(mrp - salePrice, 0));
      input.loose_discount_percentage = mrp > 0 ? this.formatMoney((mrp - salePrice) / mrp * 100) : '0.00';
    },
    getLooseMargin: function getLooseMargin() {
      var _variant$loose_purcha3;
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var variant = input || this.inputs[0] || {};
      var sellingPrice = this.getLooseSalePriceRaw(variant);
      return this.getMarginPercent(sellingPrice, (_variant$loose_purcha3 = variant.loose_purchase_price) !== null && _variant$loose_purcha3 !== void 0 ? _variant$loose_purcha3 : this.loose_purchase_price);
    },
    saveCache: function saveCache() {
      if (this.id || this.clone || this.skipCache) return;
      try {
        var data = {
          name: this.name,
          slug: this.slug,
          seller_id: this.seller_id,
          tax_id: this.tax_id,
          brand: this.brand ? {
            id: this.brand.id
          } : null,
          description: this.description,
          type: this.type,
          is_unlimited_stock: this.is_unlimited_stock,
          barcode: this.barcode,
          meta_title: this.meta_title,
          meta_keywords: this.meta_keywords,
          schema_markup: this.schema_markup,
          meta_description: this.meta_description,
          category_id: this.category_id,
          product_category_id: this.product_category_id,
          product_subcategory_id: this.product_subcategory_id,
          product_sub_subcategory_id: this.product_sub_subcategory_id,
          product_sub_sub_subcategory_id: this.product_sub_sub_subcategory_id,
          product_type: this.product_type,
          made_in: this.made_in ? {
            id: this.made_in.id
          } : null,
          return_status: this.return_status,
          return_days: parseInt(this.return_days, 10) > 0 ? this.return_days : 1,
          cancelable_status: this.cancelable_status,
          till_status: this.till_status,
          cod_allowed_status: this.cod_allowed_status,
          max_allowed_quantity: this.max_allowed_quantity,
          is_approved: this.is_approved,
          tax_included_in_price: this.tax_included_in_price,
          status: this.status,
          loose_stock: this.loose_stock,
          loose_stock_unit_id: this.loose_stock_unit_id,
          inputs: JSON.parse(JSON.stringify(this.inputs)),
          useCustomPrompt: this.useCustomPrompt,
          customPrompt: this.customPrompt,
          translations: JSON.parse(JSON.stringify(this.translations)),
          timestamp: Date.now()
        };
        localStorage.setItem('product_form_cache', JSON.stringify(data));
      } catch (e) {}
    },
    restoreCache: function restoreCache() {
      var _this27 = this;
      try {
        var cached = localStorage.getItem('product_form_cache');
        if (!cached) return;
        var data = JSON.parse(cached);
        if (data.timestamp && Date.now() - data.timestamp > 120000) {
          localStorage.removeItem('product_form_cache');
          return;
        }
        this.cachedData = data;
        Object.keys(data).forEach(function (key) {
          if (key === 'timestamp' || key === 'brand' || key === 'made_in' || key === 'translations') return;
          if (_this27.hasOwnProperty(key)) _this27[key] = data[key] !== undefined ? data[key] : _this27[key];
        });

        // Restore per-language translation data.
        // At this point initializeTranslations() has already run (it's called inside
        // fetchActiveLanguages before restoreCache), so this.translations already has
        // valid language-keyed slots we can safely overwrite.
        if (data.translations && this.languages && this.languages.length > 0) {
          this.languages.forEach(function (language) {
            if (data.translations[language.id]) {
              _this27.$set(_this27.translations, language.id, _objectSpread(_objectSpread({}, _this27.translations[language.id]), data.translations[language.id]));
            }
          });
        }
        if (data.brand && this.brands && this.brands.length) {
          var foundBrand = this.brands.find(function (b) {
            return b.id === data.brand.id;
          }) || null;
          // Update brand with translated name
          this.$nextTick(function () {
            if (foundBrand && _this27.translatedBrands && _this27.translatedBrands.length > 0) {
              var translatedBrand = _this27.translatedBrands.find(function (b) {
                return b.id === foundBrand.id;
              });
              if (translatedBrand) {
                _this27.brand = _objectSpread(_objectSpread({}, foundBrand), {}, {
                  name: translatedBrand.name,
                  title: translatedBrand.title
                });
              } else {
                _this27.brand = foundBrand;
              }
            } else {
              _this27.brand = foundBrand;
            }
          });
        }
        if (data.made_in && this.countries && this.countries.length) {
          this.made_in = this.countries.find(function (c) {
            return c.id === data.made_in.id;
          }) || null;
        }
        if (this.seller_id) {
          this.$nextTick(function () {
            _this27.getSellerCategories();
            _this27.getSeller();
          });
        }
      } catch (e) {
        localStorage.removeItem('product_form_cache');
      }
    },
    clearForm: function clearForm() {
      if (this.$refs['my-form']) this.$refs['my-form'].reset();
      Object.assign(this, {
        name: '',
        slug: '',
        seller_id: 0,
        tax_id: 0,
        brand: null,
        description: '',
        highlights: '',
        type: 'packet',
        has_variant: true,
        is_unlimited_stock: 0,
        barcode: '',
        meta_title: '',
        meta_keywords: '',
        schema_markup: '',
        meta_description: '',
        category_id: '',
        product_category_id: '',
        product_subcategory_id: '',
        product_sub_subcategory_id: '',
        product_sub_sub_subcategory_id: '',
        product_type: '',
        made_in: null,
        return_status: 0,
        return_days: 1,
        cancelable_status: 0,
        categoryOptions: '<option value="">' + __('select_category') + '</option>',
        till_status: '',
        cod_allowed_status: 1,
        max_allowed_quantity: 0,
        is_approved: 1,
        tax_included_in_price: 0,
        status: 1,
        loose_stock: 0,
        loose_stock_unit_id: '',
        inputs: [this.getBlankVariantInput()],
        image: null,
        main_image_path: '',
        main_image_name: '',
        other_images: null,
        images: [],
        variantImages: {},
        deleteImageIds: [],
        useCustomPrompt: false,
        customPrompt: '',
        activeLanguageTab: 0
      });
      this.initializeTranslations();
      localStorage.removeItem('product_form_cache');
    },
    debouncedSave: function debouncedSave() {
      var _this28 = this;
      if (this.cacheTimer) clearTimeout(this.cacheTimer);
      this.cacheTimer = setTimeout(function () {
        return _this28.saveCache();
      }, 500);
    },
    isCategorySelected: function isCategorySelected(option, list) {
      return list && list.some(function (item) {
        return item.id === option.id;
      });
    },
    onMainCategoriesChange: function onMainCategoriesChange(newVal) {
      if (this.selected_sub_categories && this.selected_sub_categories.length > 0) {
        var selectedIds = newVal.map(function (c) {
          return c.id;
        });
        this.selected_sub_categories = this.selected_sub_categories.filter(function (sc) {
          return selectedIds.includes(sc.parent_id);
        });
        this.onSubCategoriesChange(this.selected_sub_categories);
      }
    },
    onSubCategoriesChange: function onSubCategoriesChange(newVal) {
      if (this.selected_sub_sub_categories && this.selected_sub_sub_categories.length > 0) {
        var selectedIds = newVal.map(function (c) {
          return c.id;
        });
        this.selected_sub_sub_categories = this.selected_sub_sub_categories.filter(function (ssc) {
          return selectedIds.includes(ssc.parent_id);
        });
      }
    }
  },
  watch: {
    has_variant: function has_variant(newVal) {
      if (!newVal && this.inputs.length > 1) {
        this.inputs = [this.inputs[0]];
      }
    },
    // Watch currentLanguageId to update selected brand name when language changes
    currentLanguageId: function currentLanguageId(newVal, oldVal) {
      var _this29 = this;
      if (newVal && this.brand && this.translatedBrands && this.translatedBrands.length > 0) {
        // Find the translated brand from translatedBrands
        var translatedBrand = this.translatedBrands.find(function (b) {
          return b.id === _this29.brand.id;
        });
        if (translatedBrand) {
          // Update the brand object with translated name
          this.brand = _objectSpread(_objectSpread({}, this.brand), {}, {
            name: translatedBrand.name,
            title: translatedBrand.title
          });
        }
      }
    },
    // Watch translatedBrands to update selected brand when brands are loaded or language changes
    translatedBrands: {
      handler: function handler(newVal) {
        var _this30 = this;
        if (newVal && newVal.length > 0 && this.brand && this.brand.id) {
          // Find the translated brand from translatedBrands
          var translatedBrand = newVal.find(function (b) {
            return b.id === _this30.brand.id;
          });
          if (translatedBrand) {
            // Update the brand object with translated name
            this.brand = _objectSpread(_objectSpread({}, this.brand), {}, {
              name: translatedBrand.name,
              title: translatedBrand.title
            });
          }
        }
      },
      deep: true
    },
    // Auto-save form data to cache (debounced)
    name: function name() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    slug: function slug() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    seller_id: function seller_id() {
      if (this.seller_id) {
        this.getSellerCategories();
      }
      if (!this.id && !this.clone) this.debouncedSave();
    },
    tax_id: function tax_id() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    brand: {
      handler: function handler() {
        if (!this.id && !this.clone) this.debouncedSave();
      },
      deep: true
    },
    description: function description() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    type: function type() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    is_unlimited_stock: function is_unlimited_stock() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    barcode: function barcode() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    meta_title: function meta_title() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    meta_keywords: function meta_keywords() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    schema_markup: function schema_markup() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    meta_description: function meta_description() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    category_id: function category_id() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    product_category_id: function product_category_id() {
      var _this31 = this;
      var hasSubcategory = this.subCategoryOptions.some(function (category) {
        return Number(category.id) === Number(_this31.product_subcategory_id);
      });
      if (!hasSubcategory) {
        this.product_subcategory_id = '';
        this.product_sub_subcategory_id = '';
        this.product_sub_sub_subcategory_id = '';
      }
      if (!this.id && !this.clone) this.debouncedSave();
    },
    product_subcategory_id: function product_subcategory_id() {
      var _this32 = this;
      var hasSubSubcategory = this.subSubCategoryOptions.some(function (category) {
        return Number(category.id) === Number(_this32.product_sub_subcategory_id);
      });
      if (!hasSubSubcategory) {
        this.product_sub_subcategory_id = '';
        this.product_sub_sub_subcategory_id = '';
      }
      if (!this.id && !this.clone) this.debouncedSave();
    },
    product_sub_subcategory_id: function product_sub_subcategory_id() {
      var _this33 = this;
      var hasSubSubSubcategory = this.subSubSubCategoryOptions.some(function (category) {
        return Number(category.id) === Number(_this33.product_sub_sub_subcategory_id);
      });
      if (!hasSubSubSubcategory) {
        this.product_sub_sub_subcategory_id = '';
      }
      if (!this.id && !this.clone) this.debouncedSave();
    },
    product_sub_sub_subcategory_id: function product_sub_sub_subcategory_id() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    product_type: function product_type() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    made_in: {
      handler: function handler() {
        if (!this.id && !this.clone) this.debouncedSave();
      },
      deep: true
    },
    return_status: function return_status() {
      // When user turns off returnable, default return_days to 1 if empty/0
      if (Number(this.return_status) === 0 && (parseInt(this.return_days, 10) || 0) <= 0) {
        this.return_days = 1;
      }
      if (!this.id && !this.clone) this.debouncedSave();
    },
    return_days: function return_days() {
      // When days cleared or set to 0 (e.g. returnable off), keep default 1 in memory for next save
      if ((this.return_days === '' || this.return_days === null || parseInt(this.return_days, 10) <= 0) && Number(this.return_status) === 0) {
        this.return_days = 1;
      }
      if (!this.id && !this.clone) this.debouncedSave();
    },
    cancelable_status: function cancelable_status() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    till_status: function till_status() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    cod_allowed_status: function cod_allowed_status() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    max_allowed_quantity: function max_allowed_quantity() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    is_approved: function is_approved() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    tax_included_in_price: function tax_included_in_price() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    status: function status() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    loose_stock: function loose_stock() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    loose_stock_unit_id: function loose_stock_unit_id() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    inputs: {
      handler: function handler() {
        if (!this.id && !this.clone) this.debouncedSave();
      },
      deep: true
    },
    useCustomPrompt: function useCustomPrompt() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    customPrompt: function customPrompt() {
      if (!this.id && !this.clone) this.debouncedSave();
    },
    translations: {
      handler: function handler() {
        if (!this.id && !this.clone) this.debouncedSave();
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=template&id=64f39104&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=template&id=64f39104&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    key: _vm.id,
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
  }, [_vm._v("\n      " + _vm._s(_vm.__("save")) + "\n      "), _vm.isLoading ? _c("b-spinner", {
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
    attrs: {
      novalidate: ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveRecord.apply(null, arguments);
      }
    }
  }, [_vm.defaultLanguage ? _c("div", [_vm._l([_vm.defaultLanguage], function (lang) {
    return [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("name")))]), _vm._v(" "), lang.is_default ? _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e(), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form[lang.id].name,
        expression: "form[lang.id].name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_name"),
        required: lang.is_default ? true : undefined
      },
      domProps: {
        value: _vm.form[lang.id].name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.form[lang.id], "name", $event.target.value);
        }
      }
    })]), _vm._v(" "), lang.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("image")))]), _vm._v(" "), lang.is_default ? _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]) : _vm._e(), _vm._v(" "), _c("input", {
      staticClass: "d-none",
      attrs: {
        type: "file",
        id: "brand_image",
        accept: "image/*"
      },
      on: {
        change: _vm.handleFileUpload
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "file-input-div bg-gray-100",
      attrs: {
        "for": "brand_image"
      }
    }, [_vm.image && _vm.image.name ? [_vm._v("\n                " + _vm._s(_vm.__("selected_file_name")) + ": " + _vm._s(_vm.image.name) + "\n              ")] : [_c("i", {
      staticClass: "fa fa-cloud-upload-alt fa-2x"
    }), _c("br"), _vm._v("\n                " + _vm._s(_vm.__("drop_files_here_or_click_to_upload")) + "\n              ")]], 2), _vm._v(" "), _vm.image_url ? _c("div", {
      staticClass: "mt-2"
    }, [_c("img", {
      staticClass: "custom-image",
      attrs: {
        src: _vm.image_url
      }
    })]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.id && lang.is_default ? _c("div", {
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
    })], 1)]) : _vm._e()])];
  })], 2) : _vm._e(), _vm._v(" "), _c("button", {
    ref: "dummy_submit",
    staticStyle: {
      display: "none"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=template&id=a901b314&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=template&id=a901b314&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",[_c("div",{staticClass:"page-heading"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[_c("h3",[_vm.clone?[_vm._v("\n                            "+_vm._s(_vm.__("clone"))+"\n                        ")]:_vm.id?[_vm._v("\n                            "+_vm._s(_vm.__("edit"))+"\n                        ")]:[_vm._v("\n                            "+_vm._s(_vm.__("add"))+"\n                        ")],_vm._v("\n                        "+_vm._s(_vm.__("product"))+"\n                    ")],2)]),_vm._v(" "),_c("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[_c("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[_c("ol",{staticClass:"breadcrumb"},[_vm.isSellerRoute?_c("li",{staticClass:"breadcrumb-item"},[_c("router-link",{attrs:{to:"/seller/dashboard"}},[_vm._v(_vm._s(_vm.__("dashboard")))])],1):_c("li",{staticClass:"breadcrumb-item"},[_c("router-link",{attrs:{to:"/dashboard"}},[_vm._v(_vm._s(_vm.__("dashboard")))])],1),_vm._v(" "),_vm.isSellerRoute?_c("li",{staticClass:"breadcrumb-item"},[_c("router-link",{attrs:{to:"/seller/manage_products"}},[_vm._v(_vm._s(_vm.__("manage_products")))])],1):_c("li",{staticClass:"breadcrumb-item"},[_c("router-link",{attrs:{to:"/manage_products"}},[_vm._v(_vm._s(_vm.__("manage_products")))])],1),_vm._v(" "),_c("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[_vm.clone?[_vm._v("\n                                    "+_vm._s(_vm.__("clone"))+"\n                                ")]:_vm.id?[_vm._v("\n                                    "+_vm._s(_vm.__("edit"))+"\n                                ")]:[_vm._v("\n                                    "+_vm._s(_vm.__("add"))+"\n                                ")],_vm._v("\n                                "+_vm._s(_vm.__("product"))+"\n                            ")],2)])])])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12 col-md-12 order-md-1 order-last",attrs:{id:"mymodal"}},[_vm.isLoadingLanguages?_c("div",{staticClass:"text-center py-5"},[_c("b-spinner",{attrs:{label:"Loading..."}}),_vm._v(" "),_c("p",{staticClass:"mt-2"},[_vm._v("Loading languages...")])],1):_c("form",{ref:"my-form",staticClass:"modern-admin-form",on:{submit:function submit($event){$event.preventDefault();return _vm.saveRecord.apply(null,arguments);},keydown:function keydown($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter"))return null;return $event.preventDefault();}}},[_c("div",{staticClass:"product-layout",staticStyle:{display:"block"}},[_c("div",{staticClass:"card modern-card card-general"},[_c("div",{staticClass:"card-header border-bottom-0 pb-0"},[_c("h5",{staticClass:"fw-bold mb-0"},[_vm._v("Basic Information")]),_vm._v(" "),_c("span",{staticClass:"pull-right"},[_vm.isSellerRole?[_c("router-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],staticClass:"btn btn-primary",attrs:{to:"/seller/manage_products",title:"Manage Product"}},[_vm._v(_vm._s(_vm.__("manage_products")))])]:[_c("router-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],staticClass:"btn btn-primary",attrs:{to:"/manage_products",title:"Manage Product"}},[_vm._v(_vm._s(_vm.__("manage_products")))])]],2)]),_vm._v(" "),_c("div",{staticClass:"card-body"},[ false?0:_vm.isLoadingLanguages?_c("div",{staticClass:"text-center p-3 mb-3"},[_c("b-spinner",{attrs:{label:"Loading languages..."}})],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"row form-compact-row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",{attrs:{"for":"barcode"}},[_vm._v(_vm._s(_vm.__("barcode")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.barcode,expression:"barcode"}],staticClass:"form-control",attrs:{type:"text",id:"barcode",placeholder:_vm.__("barcode")},domProps:{value:_vm.barcode},on:{input:[function($event){if($event.target.composing)return;_vm.barcode=$event.target.value;},_vm.validateBarcode]}}),_vm._v(" "),_vm.validationBarcodeMessage?_c("p",{staticStyle:{color:"red"}},[_vm._v(_vm._s(_vm.validationBarcodeMessage))]):_vm.isBarcodeValid?_c("p",{staticStyle:{color:"green"}},[_vm._v("Barcode is valid!\n                                            ")]):_vm._e()])]),_vm._v(" "),_vm.defaultLanguageId?_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("product_name"))+" "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.translations[_vm.defaultLanguageId].name,expression:"translations[defaultLanguageId].name"}],staticClass:"form-control",attrs:{type:"text",placeholder:_vm.__("enter_product_name"),required:""},domProps:{value:_vm.translations[_vm.defaultLanguageId].name},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.translations[_vm.defaultLanguageId],"name",$event.target.value);}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-6 d-none"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("slug")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.slug,expression:"slug"}],staticClass:"form-control",attrs:{type:"text",placeholder:_vm.__("enter_product_slug"),readonly:""},domProps:{value:_vm.slug},on:{input:function input($event){if($event.target.composing)return;_vm.slug=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",{attrs:{"for":"tax_id"}},[_vm._v(_vm._s(_vm.__("tax")))]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.tax_id,expression:"tax_id"}],staticClass:"form-control",attrs:{id:"tax_id",name:"tax_id"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.tax_id=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c("option",{attrs:{value:"0"}},[_vm._v(_vm._s(_vm.__("select_tax")))]),_vm._v(" "),_vm._l(_vm.translatedTaxes,function(tax){return _c("option",{domProps:{value:tax.id}},[_vm._v("\n                                                    "+_vm._s(tax.title)+"\n                                                    ("+_vm._s(tax.percentage)+" %)")]);})],2)])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",{attrs:{"for":"brands"}},[_vm._v(_vm._s(_vm.__("brands")))]),_vm._v(" "),_c("div",{staticClass:"d-flex align-items-center gap-2"},[_c("multiselect",{staticStyle:{"flex-grow":"1"},attrs:{id:"brands",options:_vm.translatedBrands,placeholder:_vm.__("select_and_search_brands"),label:"name","track-by":"id",required:""},nativeOn:{keydown:function keydown($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter"))return null;$event.stopPropagation();}},scopedSlots:_vm._u([{key:"singleLabel",fn:function fn(props){return[_c("span",{staticClass:"option__desc"},[_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.name))])])];}},{key:"option",fn:function fn(props){return[_c("div",{staticClass:"option__desc"},[_c("span",{staticClass:"option__small"},[_c("img",{staticClass:"option__image",staticStyle:{height:"25px"},attrs:{src:props.option.image_url,alt:"Brand Logo"}})]),_vm._v(" "),_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.name))])])];}}]),model:{value:_vm.brand,callback:function callback($$v){_vm.brand=$$v;},expression:"brand"}}),_vm._v(" "),_c("button",{staticClass:"btn btn-primary",staticStyle:{height:"40px","min-width":"40px"},attrs:{type:"button"},on:{click:function click($event){return _vm.$refs.editBrandModal.showModal();}}},[_c("i",{staticClass:"fa fa-plus"})])],1)])])])])]),_vm._v(" "),_c("div",{staticClass:"card modern-card card-media mb-4"},[_vm._m(0),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row form-compact-row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("main_image"))+" "),!_vm.id?_c("i",{staticClass:"text-danger"},[_vm._v("*")]):_vm._e()]),_vm._v(" "),_c("input",{ref:"file_image",staticClass:"file-input",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:_vm.fileImage}}),_vm._v(" "),_c("div",{staticClass:"file-input-div bg-gray-100",on:{click:function click($event){return _vm.triggerRefClick("file_image");},drop:_vm.dropFile,dragover:_vm.$dragoverFile,dragleave:_vm.$dragleaveFile}},[_vm.main_image_name==""?[_vm._m(1),_vm._v(" "),_c("label",[_vm._v(_vm._s(_vm.__("drop_files_here_or_click_to_upload")))])]:[_c("label",[_vm._v(_vm._s(_vm.__("selected_file_name"))+" "+_vm._s(_vm.main_image_name))])]],2),_vm._v(" "),_c("span",{staticClass:"text text-primary"},[_vm._v(_vm._s(_vm.__("please_choose_square_image_of_larger_than_350px_350px_and_smaller_than_550px_550px")))]),_vm._v(" "),_vm.mainImageerror?_c("p",{staticClass:"error"},[_vm._v(_vm._s(_vm.mainImageerror))]):_vm._e(),_vm._v(" "),_vm.main_image_path?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-4"},[_c("img",{staticClass:"custom-image",attrs:{src:_vm.main_image_path,title:"Main Image",alt:"Main Image"}})])]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",{attrs:{"for":"other_images"}},[_vm._v(_vm._s(_vm.__("other_images_of_the_product")))]),_vm._v(" "),_c("input",{ref:"file_other_images",staticClass:"file-input",attrs:{type:"file",name:"other_images[]",accept:"image/jpeg,image/png,image/gif,image/webp,video/mp4",id:"other_images",multiple:""},on:{change:_vm.otherImage}}),_vm._v(" "),_c("div",{staticClass:"file-input-div bg-gray-100",on:{click:function click($event){return _vm.triggerRefClick("file_other_images");},drop:_vm.dropFileOtherImage,dragover:_vm.$dragoverFile,dragleave:_vm.$dragleaveFile}},[_vm.images.length===0?[_vm._m(2),_vm._v(" "),_c("label",[_vm._v(_vm._s(_vm.__("drop_files_here_or_click_to_upload")))])]:[_c("label",[_vm._v(_vm._s(_vm.images.length)+" files selected")]),_vm._v(" "),_vm._m(3)]],2),_vm._v(" "),_c("span",{staticClass:"text text-primary"},[_vm._v("Allowed media: JPG, JPEG, PNG, GIF, WEBP images or MP4 videos. Max 3 MB per file.")]),_vm._v(" "),_vm.otherImageerror?_c("p",{staticClass:"error"},[_vm._v(_vm._s(_vm.otherImageerror))]):_vm._e(),_vm._v(" "),_vm.images&&_vm.images.length!==0?_c("div",{staticClass:"row other-media-list"},[_c("h6",{staticClass:"mt-3"},[_vm._v("Selected Other Image List.")]),_vm._v(" "),_vm._l(_vm.images,function(image,index){return _vm.images.length!==0?_c("div",{key:"other_new_direct_"+index,staticClass:"col-md-4 image-container",attrs:{draggable:"true"},on:{dragstart:function dragstart($event){return _vm.startMediaDrag("other-new",index);},dragover:function dragover($event){$event.preventDefault();},drop:function drop($event){$event.preventDefault();return _vm.dropMedia("other-new",index);},dragend:_vm.endMediaDrag}},[_c("span",{staticClass:"media-order-badge"},[_vm._v(_vm._s((_vm.other_images||[]).length+index+1))]),_vm._v(" "),image.isVideo?_c("video",{staticClass:"img-thumbnail custom-image",attrs:{src:image.url,controls:"",muted:"",playsinline:"",title:"Selected Product Video"},domProps:{muted:true}}):_c("img",{staticClass:"img-thumbnail custom-image",attrs:{src:image.url,title:"Selected Other Image",alt:"Selected Other Image"}}),_vm._v(" "),_c("button",{staticClass:"btn btn-sm btn-danger btn-remove",attrs:{type:"button"},on:{click:function click($event){_vm.removeOtherImage(_vm.images.indexOf(image));}}},[_c("i",{staticClass:"fa fa-times-circle"})])]):_vm._e();}),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("button",{staticClass:"add-more-media-btn",attrs:{type:"button"},on:{click:function click($event){return _vm.triggerRefClick("file_other_images");}}},[_c("i",{staticClass:"fa fa-plus"}),_vm._v(" "),_c("span",[_vm._v("Add More")])])])],2):_vm._e(),_vm._v(" "),_vm.other_images&&_vm.other_images.length!==0?_c("div",{staticClass:"row"},[_c("h6",{staticClass:"mt-3"},[_vm._v("Uploaded Other Image List.")]),_vm._v(" "),_vm._l(_vm.other_images,function(image,index){return _vm.other_images.length!==0?_c("div",{key:"other_existing_direct_"+image.id,staticClass:"col-md-4 image-container",attrs:{draggable:"true"},on:{dragstart:function dragstart($event){return _vm.startMediaDrag("other-existing",index);},dragover:function dragover($event){$event.preventDefault();},drop:function drop($event){$event.preventDefault();return _vm.dropMedia("other-existing",index);},dragend:_vm.endMediaDrag}},[_c("span",{staticClass:"media-order-badge"},[_vm._v(_vm._s(image.sort_order||index+1))]),_vm._v(" "),_vm.isVideoMedia(image.image)?_c("video",{staticClass:"img-thumbnail custom-image",attrs:{src:_vm.$storageUrl+image.image,controls:"",muted:"",playsinline:"",title:"Product Video"},domProps:{muted:true}}):_c("img",{staticClass:"img-thumbnail custom-image",attrs:{src:_vm.$storageUrl+image.image,title:"Other Image",alt:"Other Image"}}),_vm._v(" "),_c("button",{staticClass:"btn btn-sm btn-danger btn-remove",attrs:{type:"button"},on:{click:function click($event){return _vm.deleteImage(index,image.id,true);}}},[_c("i",{staticClass:"fa fa-times-circle"})])]):_vm._e();})],2):_vm._e()])])])])])]),_vm._v(" "),_c("div",{staticClass:"card modern-card card-variants mb-4"},[_c("div",{staticClass:"card-header border-bottom-0 pb-0 d-flex justify-content-between align-items-center"},[_c("h5",{staticClass:"fw-bold mb-0"},[_vm._v("Pricing & Variants")]),_vm._v(" "),_vm.type==="packet"||_vm.type==="loose"?_c("div",{staticClass:"custom-control custom-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.has_variant,expression:"has_variant"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"hasVariantSwitch"},domProps:{checked:Array.isArray(_vm.has_variant)?_vm._i(_vm.has_variant,null)>-1:_vm.has_variant},on:{change:function change($event){var $$a=_vm.has_variant,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.has_variant=$$a.concat([$$v]));}else{$$i>-1&&(_vm.has_variant=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.has_variant=$$c;}}}}),_vm._v(" "),_c("label",{staticClass:"custom-control-label",attrs:{"for":"hasVariantSwitch"}},[_vm._v("Has Variants")])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"col-md-6 d-none"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_c("label",[_vm._v(_vm._s(_vm.__("product_variants"))+" "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]),_c("br"),_vm._v(" "),_c("b-form-radio-group",{attrs:{options:[{text:_vm.__("packet"),value:"packet"},{text:_vm.__("loose"),value:"loose"}],buttons:"","button-variant":"outline-primary"},model:{value:_vm.type,callback:function callback($$v){_vm.type=$$v;},expression:"type"}})],1),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_vm._m(4),_c("br"),_vm._v(" "),_c("b-form-radio-group",{attrs:{options:[{text:_vm.__("limited"),value:0},{text:_vm.__("unlimited"),value:1}],buttons:"","button-variant":"outline-primary"},model:{value:_vm.is_unlimited_stock,callback:function callback($$v){_vm.is_unlimited_stock=$$v;},expression:"is_unlimited_stock"}})],1)])])]),_vm._v(" "),_vm.has_variant&&_vm.type==="packet"?_c("div",{staticClass:"table-responsive mb-4"},[_c("table",{staticClass:"table table-bordered table-sm variant-table",staticStyle:{"font-size":"0.85rem","vertical-align":"middle"}},[_c("thead",{staticClass:"bg-light"},[_c("tr",[_c("th",{staticStyle:{width:"60px"}},[_vm._v("Image")]),_vm._v(" "),_c("th",{staticStyle:{"min-width":"150px"}},[_vm._v("Details (Name, Barcode, Color)")]),_vm._v(" "),_c("th",{staticStyle:{"min-width":"120px"}},[_vm._v("Unit & Meas.")]),_vm._v(" "),_c("th",{staticStyle:{"min-width":"120px"}},[_vm._v("Pur. Price & MRP")]),_vm._v(" "),_c("th",{staticStyle:{"min-width":"150px"}},[_vm._v("Discount & Sale Price")]),_vm._v(" "),_vm.is_unlimited_stock!=1?_c("th",{staticStyle:{"min-width":"100px"}},[_vm._v("Stock")]):_vm._e(),_vm._v(" "),_c("th",{staticStyle:{"min-width":"100px"}},[_vm._v("Profit")]),_vm._v(" "),_c("th",{staticStyle:{width:"50px"}},[_vm._v("Act")])])]),_vm._v(" "),_c("tbody",_vm._l(_vm.inputs,function(_input,k){return _c("tr",{key:"packet_table_"+k},[_c("td",{staticClass:"text-center p-1"},[_c("div",{staticClass:"variant-image-upload mx-auto",staticStyle:{width:"50px",height:"50px",border:"1px dashed #ccc",display:"flex","align-items":"center","justify-content":"center",cursor:"pointer"},attrs:{title:"Add/View Images"},on:{click:function click($event){return _vm.openVariantImagePicker(k,"packet");}}},[_vm.variantImages[k]&&_vm.variantImages[k].length?_c("img",{staticStyle:{width:"100%",height:"100%","object-fit":"cover"},attrs:{src:_vm.variantImages[k][0].url}}):_input.images&&_input.images.length?_c("img",{staticStyle:{width:"100%",height:"100%","object-fit":"cover"},attrs:{src:_vm.$storageUrl+_input.images[0].image}}):_c("i",{staticClass:"fa fa-image text-muted"})]),_vm._v(" "),(_vm.variantImages[k]?_vm.variantImages[k].length:0)+(_input.images?_input.images.length:0)>1?_c("small",{staticClass:"text-muted d-block",staticStyle:{"font-size":"10px"}},[_vm._v("\n                        +"+_vm._s((_vm.variantImages[k]?_vm.variantImages[k].length:0)+(_input.images?_input.images.length:0)-1)+" more\n                    ")]):_vm._e(),_vm._v(" "),_c("input",{ref:"packet_variant_images_"+k,refInFor:true,staticClass:"d-none",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:function change($event){return _vm.variantImagesChanges(k);}}})]),_vm._v(" "),_c("td",{staticClass:"p-1"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_input.variant_name,expression:"input.variant_name"}],staticClass:"form-control form-control-sm mb-1",attrs:{type:"text",placeholder:"Variant Name"},domProps:{value:_input.variant_name},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input,"variant_name",$event.target.value);}}}),_vm._v(" "),_input.barcodes?_c("input",{directives:[{name:"model",rawName:"v-model",value:_input.barcodes[0],expression:"input.barcodes[0]"}],staticClass:"form-control form-control-sm mb-1",attrs:{type:"text",placeholder:"Barcode"},domProps:{value:_input.barcodes[0]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input.barcodes,0,$event.target.value);}}}):_vm._e(),_vm._v(" "),_c("div",{staticClass:"color-picker-component"},[_c("div",{staticClass:"input-group input-group-sm"},[_c("span",{staticClass:"input-group-text p-0 overflow-hidden",staticStyle:{width:"32px",height:"31px","min-width":"32px",background:"#fff"},attrs:{title:"Click to open color palette"}},[_c("input",{staticClass:"color-picker-input-swatch border-0 p-0 w-100 h-100",staticStyle:{cursor:"pointer",background:"transparent"},attrs:{type:"color"},domProps:{value:_vm.getColorHex(_input)},on:{input:function input($event){return _vm.onColorPickerChange(_input,$event.target.value);}}})]),_vm._v(" "),_c("select",{staticClass:"form-control form-control-sm",domProps:{value:_vm.getColorSelectValue(_input)},on:{change:function change($event){return _vm.handleColorChange(_input,$event.target.value);}}},[_c("option",{attrs:{value:""}},[_vm._v("Select Color")]),_vm._v(" "),_vm._l(_vm.colorVariantOptions,function(color){return _c("option",{key:color.code,domProps:{value:color.code}},[_vm._v(_vm._s(color.emoji)+" "+_vm._s(color.label)+" ("+_vm._s(color.code)+")")]);}),_vm._v(" "),_c("option",{attrs:{value:"__custom__"}},[_vm._v("🎨 Other / Custom Color...")])],2)]),_vm._v(" "),(_input.color_variant||_input.color_name)&&_vm.getColorHex(_input)!=="#000000"?_c("div",{staticClass:"d-flex align-items-center mt-1 px-1 py-0 rounded border bg-light",staticStyle:{"font-size":"11px",height:"22px"}},[_c("span",{staticClass:"d-inline-block rounded-circle me-1 border shadow-sm",style:{width:"12px",height:"12px",minWidth:"12px",backgroundColor:_vm.getColorHex(_input)}}),_vm._v(" "),_c("span",{staticClass:"text-dark text-truncate me-1",staticStyle:{"font-size":"10px","font-weight":"500"}},[_vm._v(_vm._s(_vm.getColorLabel(_input)))]),_vm._v(" "),_c("span",{staticClass:"text-muted ms-auto font-monospace",staticStyle:{"font-size":"10px"}},[_vm._v(_vm._s(_vm.getColorHex(_input)))])]):_vm._e(),_vm._v(" "),_vm.isCustomColor(_input)?_c("div",{staticClass:"mt-1 p-1 rounded border bg-light"},[_vm._m(5,true),_vm._v(" "),_c("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"Color Name (e.g. Olive Green)",maxlength:"40"},domProps:{value:_input.color_name||""},on:{input:function input($event){return _vm.onCustomNameInput(_input,$event.target.value);}}})]):_vm._e()])]),_vm._v(" "),_c("td",{staticClass:"p-1"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:_input.packet_stock_unit_id,expression:"input.packet_stock_unit_id"}],staticClass:"form-control form-control-sm mb-1",on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_input,"packet_stock_unit_id",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.changeUnits();}]}},[_c("option",{attrs:{value:""}},[_vm._v("Unit")]),_vm._v(" "),_vm._l(_vm.units,function(unit,key){return _c("option",{domProps:{value:unit.id}},[_vm._v(_vm._s(unit.short_code))]);})],2),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input.packet_measurement,expression:"input.packet_measurement"}],staticClass:"form-control form-control-sm",attrs:{type:"number",min:"0",step:"any",placeholder:"Measurement"},domProps:{value:_input.packet_measurement},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input,"packet_measurement",$event.target.value);}}})]),_vm._v(" "),_c("td",{staticClass:"p-1"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_input.packet_purchase_price,expression:"input.packet_purchase_price"}],staticClass:"form-control form-control-sm mb-1",attrs:{type:"number",min:"0",step:"any",placeholder:"Pur. Price"},domProps:{value:_input.packet_purchase_price},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input,"packet_purchase_price",$event.target.value);}}}),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input.packet_price,expression:"input.packet_price"}],staticClass:"form-control form-control-sm border-primary",attrs:{type:"number",min:"0",step:"any",placeholder:"MRP *",required:""},domProps:{value:_input.packet_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input,"packet_price",$event.target.value);},function($event){return _vm.syncPacketSalePriceFromDiscount(_input);}]}})]),_vm._v(" "),_c("td",{staticClass:"p-1"},[_c("div",{staticClass:"input-group input-group-sm mb-1"},[_c("select",{staticClass:"form-select form-select-sm",staticStyle:{"max-width":"60px",padding:"0 5px"},domProps:{value:_input.discount_type||"percent"},on:{input:function input($event){_vm.$set(_input,"discount_type",$event.target.value);if($event.target.value==="percent"){_input.discounted_price="";_vm.setPacketDiscountMode(_input,"percent");}else{_input.discount_percentage="";_vm.setPacketDiscountMode(_input,"amount");}}}},[_c("option",{attrs:{value:"percent"}},[_vm._v("%")]),_vm._v(" "),_c("option",{attrs:{value:"amount"}},[_vm._v("Rs")])]),_vm._v(" "),(_input.discount_type||"percent")==="percent"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_input.discount_percentage,expression:"input.discount_percentage"}],staticClass:"form-control form-control-sm",attrs:{type:"number",min:"0",step:"any",placeholder:"Disc %"},domProps:{value:_input.discount_percentage},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input,"discount_percentage",$event.target.value);},function($event){return _vm.setPacketDiscountMode(_input,"percent");}]}}):_vm._e(),_vm._v(" "),(_input.discount_type||"percent")==="amount"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_input.discounted_price,expression:"input.discounted_price"}],staticClass:"form-control form-control-sm",attrs:{type:"number",min:"0",step:"any",placeholder:"Disc Rs"},domProps:{value:_input.discounted_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input,"discounted_price",$event.target.value);},function($event){return _vm.setPacketDiscountMode(_input,"amount");}]}}):_vm._e()]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input.packet_sale_price,expression:"input.packet_sale_price"}],staticClass:"form-control form-control-sm bg-light",attrs:{type:"number",min:"0",step:"any",placeholder:"Sale Price"},domProps:{value:_input.packet_sale_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input,"packet_sale_price",$event.target.value);},function($event){return _vm.setPacketSalePrice(_input);}]}}),_vm._v(" "),_input.validationErrorSalePrice?_c("span",{staticClass:"text-danger d-block",staticStyle:{"font-size":"10px"}},[_vm._v(_vm._s(_input.validationErrorSalePrice))]):_vm._e()]),_vm._v(" "),_vm.is_unlimited_stock!=1?_c("td",{staticClass:"p-1"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_input.packet_stock,expression:"input.packet_stock"}],staticClass:"form-control form-control-sm",attrs:{type:"number",step:"any",min:"0",placeholder:"Stock"},domProps:{value:_input.packet_stock},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input,"packet_stock",$event.target.value);}}})]):_vm._e(),_vm._v(" "),_c("td",{staticClass:"p-1"},[_c("input",{staticClass:"form-control form-control-sm mb-1 bg-light text-success",attrs:{type:"text",readonly:"",placeholder:"Prof %"},domProps:{value:_vm.getPacketProfitPercentage(_input)}}),_vm._v(" "),_c("input",{staticClass:"form-control form-control-sm bg-light text-success",attrs:{type:"text",readonly:"",placeholder:"Prof Rs"},domProps:{value:_vm.getPacketProfit(_input)}})]),_vm._v(" "),_c("td",{staticClass:"p-1 text-center"},[k!==0?_c("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function click($event){return _vm.remove(k);}}},[_c("i",{staticClass:"fa fa-times"})]):_vm._e()])]);}),0)]),_vm._v(" "),_c("button",{staticClass:"btn btn-sm btn-primary mt-2",attrs:{type:"button"},on:{click:_vm.addRow}},[_c("i",{staticClass:"fa fa-plus-square"}),_vm._v(" "+_vm._s(_vm.__("add_variant")))])]):_vm._e(),_vm._v(" "),_vm.has_variant&&_vm.type==="loose"?_c("div",{staticClass:"table-responsive mb-4"},[_c("table",{staticClass:"table table-bordered table-sm variant-table",staticStyle:{"font-size":"0.85rem","vertical-align":"middle"}},[_vm._m(6),_vm._v(" "),_c("tbody",_vm._l(_vm.inputs,function(_input2,k){return _c("tr",{key:"loose_table_"+k},[_c("td",{staticClass:"text-center p-1"},[_c("div",{staticClass:"variant-image-upload mx-auto",staticStyle:{width:"50px",height:"50px",border:"1px dashed #ccc",display:"flex","align-items":"center","justify-content":"center",cursor:"pointer"},attrs:{title:"Add/View Images"},on:{click:function click($event){return _vm.openVariantImagePicker(k,"loose");}}},[_vm.variantImages[k]&&_vm.variantImages[k].length?_c("img",{staticStyle:{width:"100%",height:"100%","object-fit":"cover"},attrs:{src:_vm.variantImages[k][0].url}}):_input2.loose_images&&_input2.loose_images.length?_c("img",{staticStyle:{width:"100%",height:"100%","object-fit":"cover"},attrs:{src:_vm.$storageUrl+_input2.loose_images[0].image}}):_c("i",{staticClass:"fa fa-image text-muted"})]),_vm._v(" "),(_vm.variantImages[k]?_vm.variantImages[k].length:0)+(_input2.loose_images?_input2.loose_images.length:0)>1?_c("small",{staticClass:"text-muted d-block",staticStyle:{"font-size":"10px"}},[_vm._v("\n                        +"+_vm._s((_vm.variantImages[k]?_vm.variantImages[k].length:0)+(_input2.loose_images?_input2.loose_images.length:0)-1)+" more\n                    ")]):_vm._e(),_vm._v(" "),_c("input",{ref:"loose_variant_images_"+k,refInFor:true,staticClass:"d-none",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:function change($event){return _vm.variantImagesChanges(k);}}})]),_vm._v(" "),_c("td",{staticClass:"p-1"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_input2.variant_name,expression:"input.variant_name"}],staticClass:"form-control form-control-sm mb-1",attrs:{type:"text",placeholder:"Variant Name"},domProps:{value:_input2.variant_name},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input2,"variant_name",$event.target.value);}}}),_vm._v(" "),_input2.barcodes?_c("input",{directives:[{name:"model",rawName:"v-model",value:_input2.barcodes[0],expression:"input.barcodes[0]"}],staticClass:"form-control form-control-sm mb-1",attrs:{type:"text",placeholder:"Barcode"},domProps:{value:_input2.barcodes[0]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input2.barcodes,0,$event.target.value);}}}):_vm._e(),_vm._v(" "),_c("div",{staticClass:"color-picker-component"},[_c("div",{staticClass:"input-group input-group-sm"},[_c("span",{staticClass:"input-group-text p-0 overflow-hidden",staticStyle:{width:"32px",height:"31px","min-width":"32px",background:"#fff"},attrs:{title:"Click to open color palette"}},[_c("input",{staticClass:"color-picker-input-swatch border-0 p-0 w-100 h-100",staticStyle:{cursor:"pointer",background:"transparent"},attrs:{type:"color"},domProps:{value:_vm.getColorHex(_input2)},on:{input:function input($event){return _vm.onColorPickerChange(_input2,$event.target.value);}}})]),_vm._v(" "),_c("select",{staticClass:"form-control form-control-sm",domProps:{value:_vm.getColorSelectValue(_input2)},on:{change:function change($event){return _vm.handleColorChange(_input2,$event.target.value);}}},[_c("option",{attrs:{value:""}},[_vm._v("Select Color")]),_vm._v(" "),_vm._l(_vm.colorVariantOptions,function(color){return _c("option",{key:color.code,domProps:{value:color.code}},[_vm._v(_vm._s(color.emoji)+" "+_vm._s(color.label)+" ("+_vm._s(color.code)+")")]);}),_vm._v(" "),_c("option",{attrs:{value:"__custom__"}},[_vm._v("🎨 Other / Custom Color...")])],2)]),_vm._v(" "),(_input2.color_variant||_input2.color_name)&&_vm.getColorHex(_input2)!=="#000000"?_c("div",{staticClass:"d-flex align-items-center mt-1 px-1 py-0 rounded border bg-light",staticStyle:{"font-size":"11px",height:"22px"}},[_c("span",{staticClass:"d-inline-block rounded-circle me-1 border shadow-sm",style:{width:"12px",height:"12px",minWidth:"12px",backgroundColor:_vm.getColorHex(_input2)}}),_vm._v(" "),_c("span",{staticClass:"text-dark text-truncate me-1",staticStyle:{"font-size":"10px","font-weight":"500"}},[_vm._v(_vm._s(_vm.getColorLabel(_input2)))]),_vm._v(" "),_c("span",{staticClass:"text-muted ms-auto font-monospace",staticStyle:{"font-size":"10px"}},[_vm._v(_vm._s(_vm.getColorHex(_input2)))])]):_vm._e(),_vm._v(" "),_vm.isCustomColor(_input2)?_c("div",{staticClass:"mt-1 p-1 rounded border bg-light"},[_vm._m(7,true),_vm._v(" "),_c("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"Color Name (e.g. Olive Green)",maxlength:"40"},domProps:{value:_input2.color_name||""},on:{input:function input($event){return _vm.onCustomNameInput(_input2,$event.target.value);}}})]):_vm._e()])]),_vm._v(" "),_c("td",{staticClass:"p-1"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.loose_stock_unit_id,expression:"loose_stock_unit_id"}],staticClass:"form-control form-control-sm mb-1",on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.loose_stock_unit_id=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c("option",{attrs:{value:""}},[_vm._v("Unit")]),_vm._v(" "),_vm._l(_vm.units,function(unit,key){return _c("option",{domProps:{value:unit.id}},[_vm._v(_vm._s(unit.short_code))]);})],2),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input2.loose_measurement,expression:"input.loose_measurement"}],staticClass:"form-control form-control-sm",attrs:{type:"number",step:"any",min:"0",placeholder:"Measurement"},domProps:{value:_input2.loose_measurement},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input2,"loose_measurement",$event.target.value);}}})]),_vm._v(" "),_c("td",{staticClass:"p-1"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_input2.loose_purchase_price,expression:"input.loose_purchase_price"}],staticClass:"form-control form-control-sm mb-1",attrs:{type:"number",step:"any",min:"0",placeholder:"Pur. Price"},domProps:{value:_input2.loose_purchase_price},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input2,"loose_purchase_price",$event.target.value);}}}),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input2.loose_price,expression:"input.loose_price"}],staticClass:"form-control form-control-sm border-primary",attrs:{type:"number",step:"any",min:"0",placeholder:"MRP *",required:""},domProps:{value:_input2.loose_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input2,"loose_price",$event.target.value);},function($event){return _vm.syncLooseSalePriceFromDiscount(_input2);}]}})]),_vm._v(" "),_c("td",{staticClass:"p-1"},[_c("div",{staticClass:"input-group input-group-sm mb-1"},[_c("select",{staticClass:"form-select form-select-sm",staticStyle:{"max-width":"60px",padding:"0 5px"},domProps:{value:_input2.discount_type||"percent"},on:{input:function input($event){_vm.$set(_input2,"discount_type",$event.target.value);if($event.target.value==="percent"){_input2.loose_discounted_price="";_vm.setLooseDiscountMode(_input2,"percent");}else{_input2.loose_discount_percentage="";_vm.setLooseDiscountMode(_input2,"amount");}}}},[_c("option",{attrs:{value:"percent"}},[_vm._v("%")]),_vm._v(" "),_c("option",{attrs:{value:"amount"}},[_vm._v("Rs")])]),_vm._v(" "),(_input2.discount_type||"percent")==="percent"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_input2.loose_discount_percentage,expression:"input.loose_discount_percentage"}],staticClass:"form-control form-control-sm",attrs:{type:"number",step:"any",min:"0",placeholder:"Disc %"},domProps:{value:_input2.loose_discount_percentage},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input2,"loose_discount_percentage",$event.target.value);},function($event){return _vm.setLooseDiscountMode(_input2,"percent");}]}}):_vm._e(),_vm._v(" "),(_input2.discount_type||"percent")==="amount"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_input2.loose_discounted_price,expression:"input.loose_discounted_price"}],staticClass:"form-control form-control-sm",attrs:{type:"number",step:"any",min:"0",placeholder:"Disc Rs"},domProps:{value:_input2.loose_discounted_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input2,"loose_discounted_price",$event.target.value);},function($event){return _vm.setLooseDiscountMode(_input2,"amount");}]}}):_vm._e()]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input2.loose_sale_price,expression:"input.loose_sale_price"}],staticClass:"form-control form-control-sm bg-light",attrs:{type:"number",step:"any",min:"0",placeholder:"Sale Price"},domProps:{value:_input2.loose_sale_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input2,"loose_sale_price",$event.target.value);},function($event){return _vm.setLooseSalePrice(_input2);}]}}),_vm._v(" "),_input2.validationErrorSalePriceLoose?_c("span",{staticClass:"text-danger d-block",staticStyle:{"font-size":"10px"}},[_vm._v(_vm._s(_input2.validationErrorSalePriceLoose))]):_vm._e()]),_vm._v(" "),_c("td",{staticClass:"p-1"},[_c("input",{staticClass:"form-control form-control-sm mb-1 bg-light text-success",attrs:{type:"text",readonly:"",placeholder:"Prof %"},domProps:{value:_vm.getLooseProfitPercentage(_input2)}}),_vm._v(" "),_c("input",{staticClass:"form-control form-control-sm bg-light text-success",attrs:{type:"text",readonly:"",placeholder:"Prof Rs"},domProps:{value:_vm.getLooseProfit(_input2)}})]),_vm._v(" "),_c("td",{staticClass:"p-1 text-center"},[k!==0?_c("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function click($event){return _vm.remove(k);}}},[_c("i",{staticClass:"fa fa-times"})]):_vm._e()])]);}),0)]),_vm._v(" "),_c("button",{staticClass:"btn btn-sm btn-primary mt-2",attrs:{type:"button"},on:{click:_vm.addRow}},[_c("i",{staticClass:"fa fa-plus-square"}),_vm._v(" "+_vm._s(_vm.__("add_variant")))])]):_vm._e(),_vm._v(" "),_vm._l(_vm.inputs,function(_input3,k){return _vm.type==="packet"&&!_vm.has_variant?_c("div",{key:k,staticClass:"variant-card modern-card mb-4",attrs:{id:"packate_div"}},[_vm.has_variant?_c("div",{staticClass:"variant-header d-flex justify-content-between align-items-center p-3 border-bottom"},[_c("h6",{staticClass:"mb-0 fw-bold text-primary"},[_vm._v("Variant "+_vm._s(k+1))]),_vm._v(" "),_c("div",[k===0?_c("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:_vm.addRow}},[_c("i",{staticClass:"fa fa-plus-square"}),_vm._v(" "+_vm._s(_vm.__("add_variant")))]):_vm._e(),_vm._v(" "),k!==0?_c("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function click($event){return _vm.remove(k);}}},[_c("i",{staticClass:"fa fa-times"}),_vm._v(" "+_vm._s(_vm.__("remove_variant")))]):_vm._e()])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"p-3"},[_c("div",{staticClass:"row form-compact-row"},[_vm.has_variant?_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_vm._m(8,true),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input3.variant_name,expression:"input.variant_name"}],staticClass:"form-control",attrs:{type:"text",maxlength:"255",placeholder:"Enter variant name"},domProps:{value:_input3.variant_name},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input3,"variant_name",$event.target.value);}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("unit"))+" "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_input3.packet_stock_unit_id,expression:"input.packet_stock_unit_id"}],staticClass:"form-control",on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_input3,"packet_stock_unit_id",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.changeUnits();}]}},[_c("option",{attrs:{value:""}},[_vm._v(_vm._s(_vm.__("select_unit")))]),_vm._v(" "),_vm._l(_vm.units,function(unit,key){return _c("option",{domProps:{value:unit.id}},[_vm._v(_vm._s(unit.short_code))]);})],2)])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("measurement")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input3.packet_measurement,expression:"input.packet_measurement"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"any",placeholder:"0"},domProps:{value:_input3.packet_measurement},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input3,"packet_measurement",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("Color Variant")]),_vm._v(" "),_c("div",{staticClass:"input-group"},[_c("span",{staticClass:"input-group-text p-0 overflow-hidden",staticStyle:{width:"42px",height:"38px","min-width":"42px",background:"#fff"},attrs:{title:"Click to open color palette"}},[_c("input",{staticClass:"color-picker-input-swatch border-0 p-0 w-100 h-100",staticStyle:{cursor:"pointer",background:"transparent"},attrs:{type:"color"},domProps:{value:_vm.getColorHex(_input3)},on:{input:function input($event){return _vm.onColorPickerChange(_input3,$event.target.value);}}})]),_vm._v(" "),_c("select",{staticClass:"form-control",domProps:{value:_vm.getColorSelectValue(_input3)},on:{change:function change($event){return _vm.handleColorChange(_input3,$event.target.value);}}},[_c("option",{attrs:{value:""}},[_vm._v("Select Color")]),_vm._v(" "),_vm._l(_vm.colorVariantOptions,function(color){return _c("option",{key:color.code,domProps:{value:color.code}},[_vm._v(_vm._s(color.emoji)+" "+_vm._s(color.label)+" ("+_vm._s(color.code)+")")]);}),_vm._v(" "),_c("option",{attrs:{value:"__custom__"}},[_vm._v("🎨 Other / Custom Color...")])],2)]),_vm._v(" "),(_input3.color_variant||_input3.color_name)&&_vm.getColorHex(_input3)!=="#000000"?_c("div",{staticClass:"d-flex align-items-center mt-2 px-2 py-1 rounded border bg-light",staticStyle:{"font-size":"13px"}},[_c("span",{staticClass:"d-inline-block rounded-circle me-2 border shadow-sm",style:{width:"16px",height:"16px",minWidth:"16px",backgroundColor:_vm.getColorHex(_input3)}}),_vm._v(" "),_c("span",{staticClass:"text-dark font-weight-medium me-2"},[_vm._v(_vm._s(_vm.getColorLabel(_input3)))]),_vm._v(" "),_c("span",{staticClass:"text-muted ms-auto font-monospace"},[_vm._v(_vm._s(_vm.getColorHex(_input3)))])]):_vm._e(),_vm._v(" "),_vm.isCustomColor(_input3)?_c("div",{staticClass:"mt-2 p-2 rounded border bg-light"},[_vm._m(9,true),_vm._v(" "),_c("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter color name (e.g. Olive Green, Midnight Blue)",maxlength:"50"},domProps:{value:_input3.color_name||""},on:{input:function input($event){return _vm.onCustomNameInput(_input3,$event.target.value);}}})]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("Purchase Price ( "+_vm._s(_vm.$currency)+" )\n                                                    "),_c("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],staticClass:"fa fa-info-circle text-muted",attrs:{title:"This field is used to calculate in your report"}})]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input3.packet_purchase_price,expression:"input.packet_purchase_price"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"any",placeholder:"0.00"},domProps:{value:_input3.packet_purchase_price},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input3,"packet_purchase_price",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("MRP ( "+_vm._s(_vm.$currency)+" ) "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input3.packet_price,expression:"input.packet_price"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"any",placeholder:"0.00",required:""},domProps:{value:_input3.packet_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input3,"packet_price",$event.target.value);},function($event){return _vm.syncPacketSalePriceFromDiscount(_input3);}]}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("Sale Price ( "+_vm._s(_vm.$currency)+" )")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input3.packet_sale_price,expression:"input.packet_sale_price"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"any",placeholder:"0.00"},domProps:{value:_input3.packet_sale_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input3,"packet_sale_price",$event.target.value);},function($event){return _vm.setPacketSalePrice(_input3);}]}}),_vm._v(" "),_input3.validationErrorSalePrice?_c("span",{staticClass:"error"},[_vm._v(_vm._s(_input3.validationErrorSalePrice))]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("Discount on MRP(%)")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input3.discount_percentage,expression:"input.discount_percentage"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"any",placeholder:"0.00"},domProps:{value:_input3.discount_percentage},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input3,"discount_percentage",$event.target.value);},function($event){return _vm.setPacketDiscountMode(_input3,"percent");}]}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("Discount on MRP(Rs)")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input3.discounted_price,expression:"input.discounted_price"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"any",placeholder:"0.00"},domProps:{value:_input3.discounted_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input3,"discounted_price",$event.target.value);},function($event){return _vm.setPacketDiscountMode(_input3,"amount");}]}}),_vm._v(" "),_input3.validationErrorDiscountedPrice?_c("span",{staticClass:"error"},[_vm._v(_vm._s(_input3.validationErrorDiscountedPrice))]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("Profit(%)")]),_vm._v(" "),_c("input",{staticClass:"form-control bg-light",attrs:{type:"text",readonly:""},domProps:{value:_vm.getPacketProfitPercentage(_input3)}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("Profit(Rs)")]),_vm._v(" "),_c("input",{staticClass:"form-control bg-light",attrs:{type:"text",readonly:""},domProps:{value:_vm.getPacketProfit(_input3)}})])]),_vm._v(" "),_vm.is_unlimited_stock!=1?_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_vm._m(10,true),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input3.packet_stock,expression:"input.packet_stock"}],staticClass:"form-control",attrs:{type:"number",step:"any",min:"0",placeholder:"0",name:"packate_stock[]"},domProps:{value:_input3.packet_stock},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input3,"packet_stock",$event.target.value);}}})])]):_vm._e(),_vm._v(" "),_vm._m(11,true),_vm._v(" "),_vm.has_variant?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"form-group mb-0 mt-3 border-top pt-3"},[_c("label",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm.__("variant_images"))+" "),_c("small",{staticClass:"text-muted"},[_vm._v("(Multiple allowed)")])]),_vm._v(" "),_c("input",{ref:"packet_variant_images_"+k,refInFor:true,staticClass:"d-none",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:function change($event){return _vm.variantImagesChanges(k);}}}),_vm._v(" "),_c("div",{staticClass:"variant-images-grid d-flex flex-wrap gap-2 mt-2"},[_c("div",{staticClass:"variant-image-upload",on:{click:function click($event){return _vm.openVariantImagePicker(k,"packet");},dragover:_vm.$dragoverFile,dragleave:_vm.$dragleaveFile}},[_c("i",{staticClass:"fa fa-plus fa-lg mb-1"}),_vm._v(" "),_c("span",{staticStyle:{"font-size":"0.8rem"}},[_vm._v("Add Images")])]),_vm._v(" "),_vm._l(_vm.variantImages[k]||[],function(image,index){return _c("div",{key:"packet_new_image_"+k+"_"+index,staticClass:"variant-image-preview",attrs:{draggable:"true"},on:{dragstart:function dragstart($event){return _vm.startMediaDrag("packet-new",index,k);},dragover:function dragover($event){$event.preventDefault();},drop:function drop($event){$event.preventDefault();return _vm.dropMedia("packet-new",index,k);},dragend:_vm.endMediaDrag}},[_c("span",{staticClass:"media-order-badge"},[_vm._v(_vm._s((_input3.images||[]).length+index+1))]),_vm._v(" "),_c("img",{staticClass:"img-thumbnail custom-image",attrs:{src:image.url}}),_vm._v(" "),_c("button",{staticClass:"btn btn-sm btn-danger btn-remove",attrs:{type:"button"},on:{click:function click($event){return _vm.variantImages[k].splice(index,1);}}},[_c("i",{staticClass:"fa fa-times"})])]);}),_vm._v(" "),_vm._l(_input3.images||[],function(image,index){return _c("div",{key:"packet_image_"+image.id,staticClass:"variant-image-preview",attrs:{draggable:"true"},on:{dragstart:function dragstart($event){return _vm.startMediaDrag("packet-existing",index,k);},dragover:function dragover($event){$event.preventDefault();},drop:function drop($event){$event.preventDefault();return _vm.dropMedia("packet-existing",index,k);},dragend:_vm.endMediaDrag}},[_c("span",{staticClass:"media-order-badge"},[_vm._v(_vm._s(image.sort_order||index+1))]),_vm._v(" "),_c("img",{staticClass:"img-thumbnail custom-image",attrs:{src:_vm.$storageUrl+image.image}}),_vm._v(" "),_c("button",{staticClass:"btn btn-sm btn-danger btn-remove",attrs:{type:"button"},on:{click:function click($event){return _vm.deleteImage(index,image.id,false,k);}}},[_c("i",{staticClass:"fa fa-times"})])]);})],2),_vm._v(" "),_vm.variantImageerror?_c("p",{staticClass:"error mt-2"},[_vm._v(_vm._s(_vm.variantImageerror))]):_vm._e()])]):_vm._e()])])]):_vm._e();}),_vm._v(" "),_vm._l(_vm.inputs,function(_input4,k){return _vm.type==="loose"&&!_vm.has_variant?_c("div",{key:k,staticClass:"variant-card modern-card mb-4",attrs:{id:"loose_div"}},[_vm.has_variant?_c("div",{staticClass:"variant-header d-flex justify-content-between align-items-center p-3 border-bottom"},[_c("h6",{staticClass:"mb-0 fw-bold text-primary"},[_vm._v("Variant "+_vm._s(k+1))]),_vm._v(" "),_c("div",[k===0?_c("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:_vm.addRow}},[_c("i",{staticClass:"fa fa-plus-square"}),_vm._v(" "+_vm._s(_vm.__("add_variant")))]):_vm._e(),_vm._v(" "),k!==0?_c("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function click($event){return _vm.remove(k);}}},[_c("i",{staticClass:"fa fa-times"}),_vm._v(" "+_vm._s(_vm.__("remove_variant")))]):_vm._e()])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"p-3"},[_c("div",{staticClass:"row form-compact-row"},[_vm.has_variant?_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3 loose_div"},[_vm._m(12,true),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input4.variant_name,expression:"input.variant_name"}],staticClass:"form-control",attrs:{type:"text",maxlength:"255",placeholder:"Enter variant name"},domProps:{value:_input4.variant_name},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input4,"variant_name",$event.target.value);}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("unit"))+" "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.loose_stock_unit_id,expression:"loose_stock_unit_id"}],staticClass:"form-control",attrs:{name:"loose_stock_unit_id"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.loose_stock_unit_id=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c("option",{attrs:{value:""}},[_vm._v(_vm._s(_vm.__("select_unit")))]),_vm._v(" "),_vm._l(_vm.units,function(unit,key){return _c("option",{domProps:{value:unit.id}},[_vm._v(_vm._s(unit.short_code))]);})],2)])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group loose_div"},[_c("label",[_vm._v(_vm._s(_vm.__("measurement")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input4.loose_measurement,expression:"input.loose_measurement"}],staticClass:"form-control",attrs:{type:"number",step:"any",min:"0",placeholder:"0"},domProps:{value:_input4.loose_measurement},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input4,"loose_measurement",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3 loose_div"},[_c("label",[_vm._v("Color Variant")]),_vm._v(" "),_c("div",{staticClass:"input-group"},[_c("span",{staticClass:"input-group-text p-0 overflow-hidden",staticStyle:{width:"42px",height:"38px","min-width":"42px",background:"#fff"},attrs:{title:"Click to open color palette"}},[_c("input",{staticClass:"color-picker-input-swatch border-0 p-0 w-100 h-100",staticStyle:{cursor:"pointer",background:"transparent"},attrs:{type:"color"},domProps:{value:_vm.getColorHex(_input4)},on:{input:function input($event){return _vm.onColorPickerChange(_input4,$event.target.value);}}})]),_vm._v(" "),_c("select",{staticClass:"form-control",domProps:{value:_vm.getColorSelectValue(_input4)},on:{change:function change($event){return _vm.handleColorChange(_input4,$event.target.value);}}},[_c("option",{attrs:{value:""}},[_vm._v("Select Color")]),_vm._v(" "),_vm._l(_vm.colorVariantOptions,function(color){return _c("option",{key:color.code,domProps:{value:color.code}},[_vm._v(_vm._s(color.emoji)+" "+_vm._s(color.label)+" ("+_vm._s(color.code)+")")]);}),_vm._v(" "),_c("option",{attrs:{value:"__custom__"}},[_vm._v("🎨 Other / Custom Color...")])],2)]),_vm._v(" "),(_input4.color_variant||_input4.color_name)&&_vm.getColorHex(_input4)!=="#000000"?_c("div",{staticClass:"d-flex align-items-center mt-2 px-2 py-1 rounded border bg-light",staticStyle:{"font-size":"13px"}},[_c("span",{staticClass:"d-inline-block rounded-circle me-2 border shadow-sm",style:{width:"16px",height:"16px",minWidth:"16px",backgroundColor:_vm.getColorHex(_input4)}}),_vm._v(" "),_c("span",{staticClass:"text-dark font-weight-medium me-2"},[_vm._v(_vm._s(_vm.getColorLabel(_input4)))]),_vm._v(" "),_c("span",{staticClass:"text-muted ms-auto font-monospace"},[_vm._v(_vm._s(_vm.getColorHex(_input4)))])]):_vm._e(),_vm._v(" "),_vm.isCustomColor(_input4)?_c("div",{staticClass:"mt-2 p-2 rounded border bg-light"},[_vm._m(13,true),_vm._v(" "),_c("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter color name (e.g. Olive Green, Midnight Blue)",maxlength:"50"},domProps:{value:_input4.color_name||""},on:{input:function input($event){return _vm.onCustomNameInput(_input4,$event.target.value);}}})]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3 loose_div"},[_c("label",[_vm._v("Purchase Price ( "+_vm._s(_vm.$currency)+" )")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input4.loose_purchase_price,expression:"input.loose_purchase_price"}],staticClass:"form-control",attrs:{type:"number",step:"any",min:"0",placeholder:"0.00"},domProps:{value:_input4.loose_purchase_price},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_input4,"loose_purchase_price",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3 loose_div"},[_c("label",[_vm._v("MRP ( "+_vm._s(_vm.$currency)+" ): "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input4.loose_price,expression:"input.loose_price"}],staticClass:"form-control",attrs:{type:"number",step:"any",min:"0",placeholder:"0.00",required:""},domProps:{value:_input4.loose_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input4,"loose_price",$event.target.value);},function($event){return _vm.syncLooseSalePriceFromDiscount(_input4);}]}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3 loose_div"},[_c("label",[_vm._v("Sale Price ( "+_vm._s(_vm.$currency)+" )")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input4.loose_sale_price,expression:"input.loose_sale_price"}],staticClass:"form-control",attrs:{type:"number",step:"any",min:"0",placeholder:"0.00"},domProps:{value:_input4.loose_sale_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input4,"loose_sale_price",$event.target.value);},function($event){return _vm.setLooseSalePrice(_input4);}]}}),_vm._v(" "),_input4.validationErrorSalePriceLoose?_c("span",{staticClass:"error"},[_vm._v(_vm._s(_input4.validationErrorSalePriceLoose))]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3 loose_div"},[_c("label",[_vm._v("Discount on MRP(%)")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input4.loose_discount_percentage,expression:"input.loose_discount_percentage"}],staticClass:"form-control",attrs:{type:"number",step:"any",min:"0",placeholder:"0.00"},domProps:{value:_input4.loose_discount_percentage},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input4,"loose_discount_percentage",$event.target.value);},function($event){return _vm.setLooseDiscountMode(_input4,"percent");}]}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3 loose_div"},[_c("label",[_vm._v("Discount on MRP(Rs)")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_input4.loose_discounted_price,expression:"input.loose_discounted_price"}],staticClass:"form-control",attrs:{type:"number",step:"any",min:"0",placeholder:"0.00"},domProps:{value:_input4.loose_discounted_price},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_input4,"loose_discounted_price",$event.target.value);},function($event){return _vm.setLooseDiscountMode(_input4,"amount");}]}}),_vm._v(" "),_input4.validationErrorDiscountedPriceLoose?_c("span",{staticClass:"error"},[_vm._v(_vm._s(_input4.validationErrorDiscountedPriceLoose))]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3 loose_div"},[_c("label",[_vm._v("Profit(%)")]),_vm._v(" "),_c("input",{staticClass:"form-control bg-light",attrs:{type:"text",readonly:""},domProps:{value:_vm.getLooseProfitPercentage(_input4)}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3 loose_div"},[_c("label",[_vm._v("Profit(Rs)")]),_vm._v(" "),_c("input",{staticClass:"form-control bg-light",attrs:{type:"text",readonly:""},domProps:{value:_vm.getLooseProfit(_input4)}})])]),_vm._v(" "),_vm._m(14,true),_vm._v(" "),k!==0?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"form-group loose_div"},[_vm.has_variant?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"form-group mb-0 mt-3 border-top pt-3"},[_c("label",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm.__("variant_images"))+" "),_c("small",{staticClass:"text-muted"},[_vm._v("(Multiple allowed)")])]),_vm._v(" "),_c("input",{ref:"loose_variant_images_"+k,refInFor:true,staticClass:"d-none",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:function change($event){return _vm.variantImagesChanges(k);}}}),_vm._v(" "),_c("div",{staticClass:"variant-images-grid d-flex flex-wrap gap-2 mt-2"},[_c("div",{staticClass:"variant-image-upload",on:{click:function click($event){return _vm.openVariantImagePicker(k,"loose");},dragover:_vm.$dragoverFile,dragleave:_vm.$dragleaveFile}},[_c("i",{staticClass:"fa fa-plus fa-lg mb-1"}),_vm._v(" "),_c("span",{staticStyle:{"font-size":"0.8rem"}},[_vm._v("Add Images")])]),_vm._v(" "),_vm._l(_vm.variantImages[k]||[],function(image,index){return _c("div",{key:"loose_new_image_"+k+"_"+index,staticClass:"variant-image-preview",attrs:{draggable:"true"},on:{dragstart:function dragstart($event){return _vm.startMediaDrag("loose-new",index,k);},dragover:function dragover($event){$event.preventDefault();},drop:function drop($event){$event.preventDefault();return _vm.dropMedia("loose-new",index,k);},dragend:_vm.endMediaDrag}},[_c("span",{staticClass:"media-order-badge"},[_vm._v(_vm._s((_input4.loose_images||[]).length+index+1))]),_vm._v(" "),_c("img",{staticClass:"img-thumbnail custom-image",attrs:{src:image.url}}),_vm._v(" "),_c("button",{staticClass:"btn btn-sm btn-danger btn-remove",attrs:{type:"button"},on:{click:function click($event){return _vm.variantImages[k].splice(index,1);}}},[_c("i",{staticClass:"fa fa-times"})])]);}),_vm._v(" "),_vm._l(_input4.loose_images||[],function(image,index){return _c("div",{key:"loose_image_"+image.id,staticClass:"variant-image-preview",attrs:{draggable:"true"},on:{dragstart:function dragstart($event){return _vm.startMediaDrag("loose-existing",index,k);},dragover:function dragover($event){$event.preventDefault();},drop:function drop($event){$event.preventDefault();return _vm.dropMedia("loose-existing",index,k);},dragend:_vm.endMediaDrag}},[_c("span",{staticClass:"media-order-badge"},[_vm._v(_vm._s(image.sort_order||index+1))]),_vm._v(" "),_c("img",{staticClass:"img-thumbnail custom-image",attrs:{src:_vm.$storageUrl+image.image}}),_vm._v(" "),_c("button",{staticClass:"btn btn-sm btn-danger btn-remove",attrs:{type:"button"},on:{click:function click($event){return _vm.deleteImage(index,image.id,false,k);}}},[_c("i",{staticClass:"fa fa-times"})])]);})],2),_vm._v(" "),_vm.variantImageerror?_c("p",{staticClass:"error mt-2"},[_vm._v(_vm._s(_vm.variantImageerror))]):_vm._e()])]):_vm._e()])]):_vm._e()]),_vm._v(" "),_vm.type==="loose"?_c("div",{staticClass:"row mt-3",attrs:{id:"loose_stock_div"}},[_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("purchase_price"))+" ( "+_vm._s(_vm.$currency)+" )\n                                                "),_c("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],staticClass:"fa fa-info-circle text-muted",attrs:{title:"This field is used to calculate in your report"}})]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.loose_purchase_price,expression:"loose_purchase_price"}],staticClass:"form-control",attrs:{type:"number",step:"any",min:"0",placeholder:"0.00"},domProps:{value:_vm.loose_purchase_price},on:{input:function input($event){if($event.target.composing)return;_vm.loose_purchase_price=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("Profit ( "+_vm._s(_vm.$currency)+" )")]),_vm._v(" "),_c("input",{staticClass:"form-control bg-light",attrs:{type:"text",readonly:""},domProps:{value:_vm.getLooseProfit()}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("Margin %")]),_vm._v(" "),_c("input",{staticClass:"form-control bg-light",attrs:{type:"text",readonly:""},domProps:{value:_vm.getLooseMargin()}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_vm.is_unlimited_stock!=1?_c("div",{staticClass:"form-group mb-3"},[_vm._m(15,true),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.loose_stock,expression:"loose_stock"}],staticClass:"form-control",attrs:{type:"number",step:"any",min:"0"},domProps:{value:_vm.loose_stock},on:{input:function input($event){if($event.target.composing)return;_vm.loose_stock=$event.target.value;}}}),_c("br")]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("unit"))+" "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.loose_stock_unit_id,expression:"loose_stock_unit_id"}],staticClass:"form-control",attrs:{name:"loose_stock_unit_id"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.loose_stock_unit_id=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c("option",{attrs:{value:""}},[_vm._v(_vm._s(_vm.__("select_unit")))]),_vm._v(" "),_vm._l(_vm.units,function(unit,key){return _c("option",{domProps:{value:unit.id}},[_vm._v(_vm._s(unit.short_code))]);})],2)])])]):_vm._e()])]):_vm._e();}),_vm._v(" "),_c("div",{staticClass:"card modern-card card-settings mb-4"},[_c("div",{staticClass:"card-header border-bottom-0 pb-0"},[_c("h5",{staticClass:"fw-bold mb-0"},[_vm._v(_vm._s(_vm.__("product_settings")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("categories"))+" "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("multiselect",{attrs:{options:_vm.mainCategories,placeholder:_vm.__("select_categories"),label:"name","track-by":"id",multiple:true,searchable:true,"close-on-select":false,taggable:false},on:{input:_vm.onMainCategoriesChange},scopedSlots:_vm._u([{key:"singleLabel",fn:function fn(props){return[_c("span",{staticClass:"option__desc"},[_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.name))])])];}},{key:"option",fn:function fn(props){return[_c("div",{staticClass:"option__desc d-flex align-items-center"},[_c("input",{staticClass:"me-2",attrs:{type:"checkbox"},domProps:{checked:_vm.isCategorySelected(props.option,_vm.selected_categories)}}),_vm._v(" "),_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.name))])])];}}]),model:{value:_vm.selected_categories,callback:function callback($$v){_vm.selected_categories=$$v;},expression:"selected_categories"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.__("select_one_or_more_categories_for_product")))])],1)]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("Sub Categories")]),_vm._v(" "),_c("multiselect",{attrs:{options:_vm.filteredSubCategories,placeholder:"Select Sub Categories",label:"name","track-by":"id",multiple:true,searchable:true,"close-on-select":false,taggable:false},on:{input:_vm.onSubCategoriesChange},scopedSlots:_vm._u([{key:"singleLabel",fn:function fn(props){return[_c("span",{staticClass:"option__desc"},[_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.name))])])];}},{key:"option",fn:function fn(props){return[_c("div",{staticClass:"option__desc d-flex align-items-center"},[_c("input",{staticClass:"me-2",attrs:{type:"checkbox"},domProps:{checked:_vm.isCategorySelected(props.option,_vm.selected_sub_categories)}}),_vm._v(" "),_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.name))])])];}}]),model:{value:_vm.selected_sub_categories,callback:function callback($$v){_vm.selected_sub_categories=$$v;},expression:"selected_sub_categories"}})],1)]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v("Sub Sub Categories")]),_vm._v(" "),_c("multiselect",{attrs:{options:_vm.filteredSubSubCategories,placeholder:"Select Sub Sub Categories",label:"name","track-by":"id",multiple:true,searchable:true,"close-on-select":false,taggable:false},scopedSlots:_vm._u([{key:"singleLabel",fn:function fn(props){return[_c("span",{staticClass:"option__desc"},[_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.name))])])];}},{key:"option",fn:function fn(props){return[_c("div",{staticClass:"option__desc d-flex align-items-center"},[_c("input",{staticClass:"me-2",attrs:{type:"checkbox"},domProps:{checked:_vm.isCategorySelected(props.option,_vm.selected_sub_sub_categories)}}),_vm._v(" "),_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.name))])])];}}]),model:{value:_vm.selected_sub_sub_categories,callback:function callback($$v){_vm.selected_sub_sub_categories=$$v;},expression:"selected_sub_sub_categories"}})],1)]),_vm._v(" "),_c("div",{staticClass:"col-md-3"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("product_type"))+" ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.product_type,expression:"product_type"}],staticClass:"form-control",on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.product_type=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c("option",{attrs:{value:""}},[_vm._v(_vm._s(_vm.__("select_type")))]),_vm._v(" "),_c("option",{attrs:{value:"1"}},[_vm._v(_vm._s(_vm.__("veg")))]),_vm._v(" "),_c("option",{attrs:{value:"2"}},[_vm._v(_vm._s(_vm.__("non_veg")))])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-3"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("status"))+" "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.status,expression:"status"}],staticClass:"form-control",attrs:{required:""},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.status=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c("option",{attrs:{value:""}},[_vm._v(_vm._s(_vm.__("select_status")))]),_vm._v(" "),_c("option",{attrs:{value:"1"}},[_vm._v(_vm._s(_vm.__("available")))]),_vm._v(" "),_c("option",{attrs:{value:"0"}},[_vm._v(_vm._s(_vm.__("sold_out")))])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-3"},[_c("div",{staticClass:"form-group mb-3"},[_vm._m(16),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.expiry_date_from,expression:"expiry_date_from"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:_vm.expiry_date_from},on:{input:function input($event){if($event.target.composing)return;_vm.expiry_date_from=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-3"},[_c("div",{staticClass:"form-group mb-3"},[_vm._m(17),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.expiry_date_to,expression:"expiry_date_to"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:_vm.expiry_date_to},on:{input:function input($event){if($event.target.composing)return;_vm.expiry_date_to=$event.target.value;}}})])]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.is_approved,expression:"is_approved"}],attrs:{type:"hidden"},domProps:{value:_vm.is_approved},on:{input:function input($event){if($event.target.composing)return;_vm.is_approved=$event.target.value;}}}),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",{attrs:{"for":"made_in"}},[_vm._v(_vm._s(_vm.__("made_in")))]),_vm._v(" "),_c("multiselect",{attrs:{id:"made_in",options:_vm.countries,placeholder:_vm.__("select_and_search_country_name"),label:"name","track-by":"name",required:""},scopedSlots:_vm._u([{key:"singleLabel",fn:function fn(props){return[_c("span",{staticClass:"option__desc"},[_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.name))])])];}},{key:"option",fn:function fn(props){return[_c("div",{staticClass:"option__desc"},[_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.name))]),_vm._v(" "),_c("span",{staticClass:"option__small"},[_vm._v("["+_vm._s(props.option.code)+"]")])])];}}]),model:{value:_vm.made_in,callback:function callback($$v){_vm.made_in=$$v;},expression:"made_in"}})],1)]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3 d-flex flex-wrap align-items-start gap-2"},[_c("div",[_c("label",[_vm._v(_vm._s(_vm.__("is_returnable")))]),_c("br"),_vm._v(" "),_c("b-form-radio-group",{attrs:{options:[{text:_vm.__("no"),value:0},{text:_vm.__("yes"),value:1}],buttons:"","button-variant":"outline-primary",required:""},model:{value:_vm.return_status,callback:function callback($$v){_vm.return_status=$$v;},expression:"return_status"}})],1),_vm._v(" "),_vm.return_status==1?_c("div",{staticClass:"ms-2"},[_c("label",{attrs:{"for":"return_day"}},[_vm._v(_vm._s(_vm.__("max_return_days")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.return_days,expression:"return_days"}],staticClass:"form-control",attrs:{type:"number",step:"any",min:_vm.return_status==1?1:0,required:_vm.return_status==1?true:undefined,id:"return_day",placeholder:_vm.__("number_of_days_to_return")},domProps:{value:_vm.return_days},on:{input:function input($event){if($event.target.composing)return;_vm.return_days=$event.target.value;}}})]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3 d-flex flex-wrap align-items-start gap-2"},[_c("div",[_c("label",[_vm._v(_vm._s(_vm.__("is_cancelable")))]),_c("br"),_vm._v(" "),_c("b-form-radio-group",{attrs:{options:[{text:_vm.__("no"),value:0},{text:_vm.__("yes"),value:1}],buttons:"","button-variant":"outline-primary"},model:{value:_vm.cancelable_status,callback:function callback($$v){_vm.cancelable_status=$$v;},expression:"cancelable_status"}})],1),_vm._v(" "),_vm.cancelable_status===1?_c("div",{staticClass:"ms-2"},[_c("label",{attrs:{"for":"till_status"}},[_vm._v(_vm._s(_vm.__("till_which_status"))+" "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.till_status,expression:"till_status"}],staticClass:"form-control",attrs:{id:"till_status",required:_vm.cancelable_status===1?true:undefined},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.till_status=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c("option",{attrs:{value:""}},[_vm._v(_vm._s(_vm.__("select_order_status")))]),_vm._v(" "),_vm._l(_vm.order_status,function(status){return _c("option",{domProps:{value:status.id}},[_vm._v(_vm._s(_vm.getStatusDisplayName(status))+"\n                                                    ")]);})],2)]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("is_cod_allowed")))]),_c("br"),_vm._v(" "),_c("b-form-radio-group",{attrs:{options:[{text:_vm.__("no"),value:0},{text:_vm.__("yes"),value:1}],buttons:"","button-variant":"outline-primary"},model:{value:_vm.cod_allowed_status,callback:function callback($$v){_vm.cod_allowed_status=$$v;},expression:"cod_allowed_status"}})],1)])])])]),_vm._v(" "),_vm.defaultLanguageId?_c("div",{staticClass:"card modern-card card-description mb-4"},[_vm._m(18),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"form-group mb-3 d-flex flex-wrap align-items-center"},[_c("button",{staticClass:"btn btn-outline-primary me-3 my-2 ai-generate-btn",attrs:{type:"button",disabled:_vm.isGeneratingAI||_vm.isGeneratingCustomAI},on:{click:_vm.generateDescription}},[_vm.isGeneratingAI?[_c("span",{staticClass:"ai-spinner me-2"}),_vm._v(" "),_c("span",{staticClass:"ai-text-animate"},[_vm._v("AI is\n                                                        generating...")])]:[_c("i",{staticClass:"fa fa-magic me-1"}),_vm._v("\n                                                    "+_vm._s(_vm.__("generate_description_with_ai"))+"\n                                                ")]],2),_vm._v(" "),_c("label",{staticClass:"my-2 d-flex align-items-center"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.useCustomPrompt,expression:"useCustomPrompt"}],staticClass:"me-2",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.useCustomPrompt)?_vm._i(_vm.useCustomPrompt,null)>-1:_vm.useCustomPrompt},on:{change:function change($event){var $$a=_vm.useCustomPrompt,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.useCustomPrompt=$$a.concat([$$v]));}else{$$i>-1&&(_vm.useCustomPrompt=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.useCustomPrompt=$$c;}}}}),_vm._v(" "),_c("span",{staticClass:"mt-1"},[_vm._v(_vm._s(_vm.__("use_custom_prompt")))])])])]),_vm._v(" "),_vm.useCustomPrompt?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card bg-light border-primary border-opacity-25 mb-3 shadow-none"},[_c("div",{staticClass:"card-body p-3"},[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-2"},[_c("label",{staticClass:"fw-bold mb-0 text-primary d-flex align-items-center"},[_c("i",{staticClass:"fa fa-comment-dots me-2"}),_vm._v(" "+_vm._s(_vm.__("custom_prompt"))+"\n                                                    ")]),_vm._v(" "),_vm._m(19)]),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.customPrompt,expression:"customPrompt"}],staticClass:"form-control mb-2",attrs:{rows:"3",placeholder:"e.g. Write a catchy and premium description highlighting durability, key features, and benefits. Include bullet highlights and optimize meta settings."},domProps:{value:_vm.customPrompt},on:{input:function input($event){if($event.target.composing)return;_vm.customPrompt=$event.target.value;}}}),_vm._v(" "),_c("div",{staticClass:"d-flex flex-wrap justify-content-between align-items-center gap-2"},[_c("div",{staticClass:"d-flex flex-wrap align-items-center gap-2 text-muted",staticStyle:{"font-size":"12px"}},[_vm._m(20),_vm._v(" "),_c("span",{staticClass:"badge bg-white text-dark border"},[_c("i",{staticClass:"fa fa-tags text-info me-1"}),_vm._v(" Auto-detects "+_vm._s(_vm.has_variant?"Variants":"Single Product")+"\n                                                        ")])]),_vm._v(" "),_c("button",{staticClass:"btn btn-primary ai-generate-btn shadow-sm",attrs:{type:"button",disabled:_vm.isGeneratingCustomAI||_vm.isGeneratingAI},on:{click:_vm.generateFromCustomPrompt}},[_vm.isGeneratingCustomAI?[_c("span",{staticClass:"ai-spinner me-2"}),_vm._v(" "),_c("span",{staticClass:"ai-text-animate"},[_vm._v("Generating Content...")])]:[_c("i",{staticClass:"fa fa-paper-plane me-1"}),_vm._v(" Generate with Custom Prompt\n                                                        ")]],2)])])])]):_vm._e(),_vm._v(" "),_vm.defaultLanguageId?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("description"))+" "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("editor",{attrs:{placeholder:_vm.__("enter_product_description"),init:_vm.getEditorConfig()},model:{value:_vm.translations[_vm.defaultLanguageId].description,callback:function callback($$v){_vm.$set(_vm.translations[_vm.defaultLanguageId],"description",$$v);},expression:"translations[defaultLanguageId].description"}})],1)]):_vm._e(),_vm._v(" "),_vm.defaultLanguageId?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"form-group mb-3"},[_vm._m(21),_vm._v(" "),_c("editor",{attrs:{placeholder:"Paste or enter product highlights",init:_vm.getEditorConfig()},model:{value:_vm.translations[_vm.defaultLanguageId].highlights,callback:function callback($$v){_vm.$set(_vm.translations[_vm.defaultLanguageId],"highlights",$$v);},expression:"translations[defaultLanguageId].highlights"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Pasted formatting, lists and spacing will be preserved.")])],1)]):_vm._e()])])]):_vm._e(),_vm._v(" "),_vm.defaultLanguageId?_c("div",{staticClass:"card modern-card card-seo mb-4"},[_c("div",{staticClass:"card-header border-bottom-0 pb-0"},[_c("h5",{staticClass:"fw-bold mb-0"},[_vm._v(_vm._s(_vm.__("seo_settings")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("meta_title"))+" ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.translations[_vm.defaultLanguageId].meta_title,expression:"translations[defaultLanguageId].meta_title"}],staticClass:"form-control",attrs:{type:"text",placeholder:_vm.__("enter_meta_title")},domProps:{value:_vm.translations[_vm.defaultLanguageId].meta_title},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.translations[_vm.defaultLanguageId],"meta_title",$event.target.value);}}})]),_vm._v(" "),_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("meta_keywords"))+" ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.translations[_vm.defaultLanguageId].meta_keywords,expression:"translations[defaultLanguageId].meta_keywords"}],staticClass:"form-control",attrs:{type:"text",placeholder:_vm.__("enter_meta_keywords")},domProps:{value:_vm.translations[_vm.defaultLanguageId].meta_keywords},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.translations[_vm.defaultLanguageId],"meta_keywords",$event.target.value);}}})]),_vm._v(" "),_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("schema_markup"))+" ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.translations[_vm.defaultLanguageId].schema_markup,expression:"translations[defaultLanguageId].schema_markup"}],staticClass:"form-control",attrs:{type:"text",placeholder:_vm.__("enter_schema_markup")},domProps:{value:_vm.translations[_vm.defaultLanguageId].schema_markup},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.translations[_vm.defaultLanguageId],"schema_markup",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"form-group mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("meta_description"))+" ")]),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.translations[_vm.defaultLanguageId].meta_description,expression:"translations[defaultLanguageId].meta_description"}],staticClass:"form-control",attrs:{type:"text",placeholder:_vm.__("enter_meta_description"),rows:"2"},domProps:{value:_vm.translations[_vm.defaultLanguageId].meta_description},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.translations[_vm.defaultLanguageId],"meta_description",$event.target.value);}}})])])])])]):_vm._e()],2),_vm._v(" "),_c("div",{staticClass:"sticky-bottom-bar"},[_c("div",{staticClass:"d-flex justify-content-end align-items-center"},[_c("button",{staticClass:"btn btn-light-secondary me-3",staticStyle:{"font-weight":"500",padding:"10px 24px"},attrs:{type:"button"},on:{click:_vm.clearForm}},[_vm._v(_vm._s(_vm.__("clear")))]),_vm._v(" "),_c("b-button",{staticClass:"btn-save",attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading},on:{keydown:function keydown($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter"))return null;return _vm.saveRecord.apply(null,arguments);}}},[_c("i",{staticClass:"fa fa-save me-2"}),_vm._v(" "+_vm._s(_vm.__("save_product"))+"\n                                    "),_vm.isLoading?_c("b-spinner",{staticClass:"ms-2",attrs:{small:"",label:"Spinning"}}):_vm._e()],1)],1)])])])])]),_vm._v(" "),_c("edit-brand",{ref:"editBrandModal",on:{saved:_vm.handleBrandCreated}})],1);};var staticRenderFns=[function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"card-header border-bottom-0 pb-0"},[_c("h5",{staticClass:"fw-bold mb-0"},[_vm._v("Media")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_c("i",{staticClass:"fa fa-cloud-upload-alt fa-2x"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_c("i",{staticClass:"fa fa-cloud-upload-alt fa-2x"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",[_c("small",[_vm._v("Use the + button below to add more.")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{staticClass:"control-label"},[_vm._v("Available Quantity "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"d-flex justify-content-between align-items-center mb-1"},[_c("span",{staticClass:"text-muted font-weight-bold",staticStyle:{"font-size":"9px","letter-spacing":"0.5px"}},[_vm._v("CUSTOM COLOR NAME:")]),_vm._v(" "),_c("span",{staticClass:"badge badge-light border text-muted py-0 px-1",staticStyle:{"font-size":"9px"}},[_vm._v("CUSTOM")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",{staticClass:"bg-light"},[_c("tr",[_c("th",{staticStyle:{width:"60px"}},[_vm._v("Image")]),_vm._v(" "),_c("th",{staticStyle:{"min-width":"150px"}},[_vm._v("Details (Name, Barcode, Color)")]),_vm._v(" "),_c("th",{staticStyle:{"min-width":"120px"}},[_vm._v("Unit & Meas.")]),_vm._v(" "),_c("th",{staticStyle:{"min-width":"120px"}},[_vm._v("Pur. Price & MRP")]),_vm._v(" "),_c("th",{staticStyle:{"min-width":"150px"}},[_vm._v("Discount & Sale Price")]),_vm._v(" "),_c("th",{staticStyle:{"min-width":"100px"}},[_vm._v("Profit")]),_vm._v(" "),_c("th",{staticStyle:{width:"50px"}},[_vm._v("Act")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"d-flex justify-content-between align-items-center mb-1"},[_c("span",{staticClass:"text-muted font-weight-bold",staticStyle:{"font-size":"9px","letter-spacing":"0.5px"}},[_vm._v("CUSTOM COLOR NAME:")]),_vm._v(" "),_c("span",{staticClass:"badge badge-light border text-muted py-0 px-1",staticStyle:{"font-size":"9px"}},[_vm._v("CUSTOM")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_vm._v("Variant Name "),_c("small",{staticClass:"text-muted"},[_vm._v("(Optional)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"d-flex justify-content-between align-items-center mb-1"},[_c("label",{staticClass:"mb-0 text-muted font-weight-bold",staticStyle:{"font-size":"11px","letter-spacing":"0.5px"}},[_vm._v("CUSTOM COLOR NAME:")]),_vm._v(" "),_c("span",{staticClass:"badge badge-light border text-muted"},[_vm._v("CUSTOM")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_vm._v("Available Quantity "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"form-group mb-3"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_vm._v("Variant Name "),_c("small",{staticClass:"text-muted"},[_vm._v("(Optional)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"d-flex justify-content-between align-items-center mb-1"},[_c("label",{staticClass:"mb-0 text-muted font-weight-bold",staticStyle:{"font-size":"11px","letter-spacing":"0.5px"}},[_vm._v("CUSTOM COLOR NAME:")]),_vm._v(" "),_c("span",{staticClass:"badge badge-light border text-muted"},[_vm._v("CUSTOM")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"form-group mb-3 loose_div"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_vm._v("Available Quantity "),_c("i",{staticClass:"text-danger"},[_vm._v("*")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_vm._v("Expiry Date From "),_c("small",{staticClass:"text-muted"},[_vm._v("(DD/MM/YYYY)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_vm._v("Expiry Date To "),_c("small",{staticClass:"text-muted"},[_vm._v("(DD/MM/YYYY)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"card-header border-bottom-0 pb-0"},[_c("h5",{staticClass:"fw-bold mb-0"},[_vm._v("Product Description & Highlights")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"badge bg-primary text-white",staticStyle:{"font-size":"11px"}},[_c("i",{staticClass:"fa fa-magic me-1"}),_vm._v(" Custom AI Generator\n                                                    ")]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"badge bg-white text-dark border"},[_c("i",{staticClass:"fa fa-check text-success me-1"}),_vm._v(" Required: Product Name, Category & Prompt\n                                                        ")]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_vm._v("Product Highlights "),_c("small",{staticClass:"text-muted"},[_vm._v("(Optional)")])]);}];render._withStripped=true;

/***/ }),

/***/ "./resources/js/mixins/TranslationHelper.js":
/*!**************************************************!*\
  !*** ./resources/js/mixins/TranslationHelper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image_preview[data-v-64f39104] {\r\n  margin-top: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Compact UI Overrides for Edit/Create Product Page */\n.page-wrapper[data-v-a901b314] {\r\n    font-size: 0.85rem;\n}\n.card-header[data-v-a901b314] {\r\n    padding: 0.5rem 1rem !important;\n}\n.card-header h5[data-v-a901b314] {\r\n    font-size: 1rem !important;\n}\n.card-body[data-v-a901b314] {\r\n    padding: 0.75rem 1rem !important;\n}\n.form-group.mb-3[data-v-a901b314] {\r\n    margin-bottom: 0.5rem !important;\n}\nlabel[data-v-a901b314] {\r\n    font-size: 0.75rem !important;\r\n    margin-bottom: 2px !important;\r\n    font-weight: 600;\r\n    color: #444;\n}\n.form-control[data-v-a901b314], .form-select[data-v-a901b314], select[data-v-a901b314] {\r\n    padding: 0.25rem 0.5rem !important;\r\n    font-size: 0.8rem !important;\r\n    height: auto !important;\r\n    min-height: 28px;\r\n    border-radius: 4px;\n}\n.btn[data-v-a901b314] {\r\n    padding: 0.25rem 0.6rem !important;\r\n    font-size: 0.8rem !important;\n}\ntextarea.form-control[data-v-a901b314] {\r\n    min-height: 60px;\n}\n.multiselect__tags[data-v-a901b314] {\r\n    min-height: 30px !important;\r\n    padding: 2px 40px 0 8px !important;\r\n    font-size: 0.8rem !important;\n}\n.multiselect__placeholder[data-v-a901b314] {\r\n    margin-bottom: 2px !important;\r\n    padding-top: 2px !important;\n}\n.multiselect__single[data-v-a901b314] {\r\n    margin-bottom: 2px !important;\n}\n.nav-tabs .nav-link[data-v-a901b314] {\r\n    padding: 0.3rem 0.8rem !important;\r\n    font-size: 0.85rem;\n}\n.input-group-text[data-v-a901b314] {\r\n    padding: 0.2rem 0.5rem;\r\n    font-size: 0.8rem;\n}\r\n\r\n/* AI Generate Button Styles */\n.ai-generate-btn[data-v-a901b314] {\r\n    position: relative;\r\n    min-width: 200px;\r\n    transition: all 0.3s ease;\n}\n.ai-generate-btn[data-v-a901b314]:disabled {\r\n    opacity: 0.9;\r\n    cursor: not-allowed;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n    border-color: #667eea;\r\n    color: white;\n}\r\n\r\n/* AI Spinner Animation */\n.ai-spinner[data-v-a901b314] {\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    border: 2px solid rgba(255, 255, 255, 0.3);\r\n    border-radius: 50%;\r\n    border-top-color: #fff;\r\n    animation: ai-spin-a901b314 0.8s ease-in-out infinite;\n}\n@keyframes ai-spin-a901b314 {\nto {\r\n        transform: rotate(360deg);\n}\n}\r\n\r\n/* AI Text Animation - Pulsing effect */\n.ai-text-animate[data-v-a901b314] {\r\n    animation: ai-pulse-a901b314 1.5s ease-in-out infinite;\n}\n.other-media-list[data-v-a901b314] {\r\n    row-gap: 12px;\n}\n.image-container[data-v-a901b314] {\r\n    position: relative;\n}\n.image-container[draggable=\"true\"][data-v-a901b314] {\r\n    cursor: grab;\n}\n.image-container[draggable=\"true\"][data-v-a901b314]:active {\r\n    cursor: grabbing;\r\n    opacity: 0.7;\n}\n.media-order-badge[data-v-a901b314] {\r\n    align-items: center;\r\n    background: #23364a;\r\n    border: 2px solid #fff;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    display: inline-flex;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    height: 26px;\r\n    justify-content: center;\r\n    left: 4px;\r\n    position: absolute;\r\n    top: 4px;\r\n    width: 26px;\r\n    z-index: 2;\n}\n.add-more-media-btn[data-v-a901b314] {\r\n    align-items: center;\r\n    aspect-ratio: 1 / 1;\r\n    background: #f8fafc;\r\n    border: 1px dashed #8aa0b8;\r\n    border-radius: 6px;\r\n    color: #53677d;\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-weight: 600;\r\n    gap: 8px;\r\n    justify-content: center;\r\n    min-height: 120px;\r\n    width: 100%;\n}\n.add-more-media-btn i[data-v-a901b314] {\r\n    font-size: 28px;\n}\n.add-more-media-btn[data-v-a901b314]:hover,\r\n.add-more-media-btn[data-v-a901b314]:focus {\r\n    background: #eef4fb;\r\n    border-color: #53677d;\r\n    color: #23364a;\n}\n@keyframes ai-pulse-a901b314 {\n0%,\r\n    100% {\r\n        opacity: 1;\n}\n50% {\r\n        opacity: 0.6;\n}\n}\r\n\r\n/* Modern Admin UI Styles */\n.modern-admin-form[data-v-a901b314] {\r\n    background-color: #f4f6f8;\r\n    padding: 15px;\r\n    border-radius: 8px;\n}\n.product-layout[data-v-a901b314] {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    gap: 24px;\r\n    overflow: visible !important;\n}\n.card-general[data-v-a901b314] { grid-column: 1 / 2; grid-row: 1;\n}\n.card-media[data-v-a901b314] { grid-column: 1 / 2; grid-row: 2;\n}\n.card-description[data-v-a901b314] { grid-column: 1 / 2; grid-row: 3;\n}\n.card-variants[data-v-a901b314] { grid-column: 1 / 2; grid-row: 4;\n}\n.card-seo[data-v-a901b314] { grid-column: 1 / 2; grid-row: 5;\n}\n.card-settings[data-v-a901b314] { grid-column: 2 / 3; grid-row: 1 / 6;\n}\n@media (max-width: 991px) {\n.product-layout[data-v-a901b314] {\r\n        grid-template-columns: 1fr;\n}\n.card-settings[data-v-a901b314] { grid-column: 1 / 2; grid-row: 2;\n}\n.card-media[data-v-a901b314] { grid-column: 1 / 2; grid-row: 3;\n}\n.card-description[data-v-a901b314] { grid-column: 1 / 2; grid-row: 4;\n}\n.card-variants[data-v-a901b314] { grid-column: 1 / 2; grid-row: 5;\n}\n.card-seo[data-v-a901b314] { grid-column: 1 / 2; grid-row: 6;\n}\n}\n.modern-card[data-v-a901b314] {\r\n    background: #ffffff;\r\n    border: 1px solid #e1e3e5;\r\n    border-radius: 12px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.04);\r\n    overflow: visible !important;\r\n    transition: box-shadow 0.2s ease-in-out;\n}\n.modern-card[data-v-a901b314]:hover {\r\n    box-shadow: 0 4px 12px rgba(0,0,0,0.05);\n}\n.modern-card .card-header[data-v-a901b314] {\r\n    padding: 20px 24px 10px;\r\n    background-color: transparent;\n}\n.modern-card .card-header h5[data-v-a901b314] {\r\n    font-size: 1.1rem;\r\n    margin: 0;\r\n    color: #202223;\n}\n.modern-card .card-body[data-v-a901b314] {\r\n    padding: 16px 24px 24px;\r\n    overflow: visible !important;\n}\n.form-compact-row .form-group[data-v-a901b314] {\r\n    margin-bottom: 12px !important;\n}\n.form-compact-row label[data-v-a901b314] {\r\n    font-weight: 600;\r\n    color: #202223;\r\n    margin-bottom: 6px;\r\n    font-size: 0.9rem;\n}\n.form-compact-row .form-control[data-v-a901b314], .form-compact-row .multiselect__tags[data-v-a901b314], .form-compact-row select.form-control[data-v-a901b314] {\r\n    border: 1px solid #c9cccf;\r\n    border-radius: 6px;\r\n    padding: 8px 12px;\r\n    height: 40px;\r\n    font-size: 0.95rem;\r\n    color: #202223;\n}\n.sticky-bottom-bar[data-v-a901b314] {\r\n    position: sticky;\r\n    bottom: 0;\r\n    background: #ffffff;\r\n    padding: 16px 24px;\r\n    border-top: 1px solid #e1e3e5;\r\n    box-shadow: 0 -2px 10px rgba(0,0,0,0.05);\r\n    z-index: 100;\r\n    margin-top: 30px;\r\n    border-radius: 0 0 12px 12px;\n}\n.btn-save[data-v-a901b314] {\r\n    background-color: #008060;\r\n    border-color: #008060;\r\n    font-weight: 600;\r\n    padding: 10px 30px;\r\n    border-radius: 6px;\r\n    color: white;\n}\n.btn-save[data-v-a901b314]:hover {\r\n    background-color: #006e52;\r\n    border-color: #006e52;\n}\r\n\r\n/* Variant Image UI */\n.variant-images-grid[data-v-a901b314] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 12px;\n}\n.variant-image-upload[data-v-a901b314] {\r\n    width: 80px;\r\n    height: 80px;\r\n    border: 1px dashed #c9cccf;\r\n    border-radius: 6px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    background: #f8fafc;\r\n    color: #5c5f62;\r\n    transition: all 0.2s;\n}\n.variant-image-upload[data-v-a901b314]:hover {\r\n    background: #eef4fb;\r\n    border-color: #008060;\r\n    color: #008060;\n}\n.variant-image-preview[data-v-a901b314] {\r\n    width: 80px;\r\n    height: 80px;\r\n    position: relative;\r\n    border-radius: 6px;\r\n    overflow: hidden;\r\n    border: 1px solid #e1e3e5;\n}\n.variant-image-preview img[data-v-a901b314] {\r\n    width: 100%;\r\n    height: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.variant-image-preview .btn-remove[data-v-a901b314] {\r\n    position: absolute;\r\n    top: 4px;\r\n    right: 4px;\r\n    padding: 2px 5px;\r\n    font-size: 10px;\r\n    border-radius: 4px;\r\n    background: rgba(255, 255, 255, 0.9);\r\n    color: #d82c0d;\r\n    border: 1px solid #e1e3e5;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,0.1);\r\n    opacity: 0;\r\n    transition: opacity 0.2s;\n}\n.variant-image-preview:hover .btn-remove[data-v-a901b314] {\r\n    opacity: 1;\n}\n.variant-image-preview .btn-remove[data-v-a901b314]:hover {\r\n    background: #d82c0d;\r\n    color: white;\n}\n.variant-card[data-v-a901b314] {\r\n    background: #fafbfb;\r\n    border: 1px solid #e1e3e5;\n}\r\n\r\n/* Compact UI Overrides for Create/Edit View */\n.modern-card[data-v-a901b314] {\r\n    padding: 1rem !important;\n}\n.modern-card h4.card-title[data-v-a901b314],\r\n.modern-card .card-title[data-v-a901b314],\r\n.card-header h4[data-v-a901b314] {\r\n    font-size: 1rem !important;\r\n    margin-bottom: 0.75rem !important;\n}\nlabel[data-v-a901b314] {\r\n    font-size: 0.75rem !important;\r\n    margin-bottom: 0.2rem !important;\r\n    font-weight: 600 !important;\n}\n.form-control[data-v-a901b314], .form-select[data-v-a901b314], select[data-v-a901b314], input[data-v-a901b314] {\r\n    font-size: 0.75rem !important;\r\n    padding: 0.25rem 0.5rem !important;\r\n    min-height: unset !important;\r\n    height: auto !important;\n}\n.btn[data-v-a901b314] {\r\n    font-size: 0.75rem !important;\r\n    padding: 0.3rem 0.75rem !important;\n}\n.form-group[data-v-a901b314] {\r\n    margin-bottom: 0.5rem !important;\n}\n.ql-editor[data-v-a901b314] {\r\n    font-size: 0.75rem !important;\r\n    min-height: 100px !important;\n}\nsmall.text-muted[data-v-a901b314] {\r\n    font-size: 0.7rem !important;\n}\np.error[data-v-a901b314] {\r\n    font-size: 0.75rem !important;\n}\ninput[type=\"color\"].color-picker-input-swatch[data-v-a901b314] {\r\n    padding: 0 !important;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    min-height: 24px !important;\r\n    border: none !important;\r\n    cursor: pointer !important;\r\n    background: transparent !important;\r\n    -webkit-appearance: none !important;\r\n    -moz-appearance: none !important;\r\n    appearance: none !important;\n}\ninput[type=\"color\"].color-picker-input-swatch[data-v-a901b314]::-webkit-color-swatch-wrapper {\r\n    padding: 0 !important;\n}\ninput[type=\"color\"].color-picker-input-swatch[data-v-a901b314]::-webkit-color-swatch {\r\n    border: 1px solid rgba(0, 0, 0, 0.2) !important;\r\n    border-radius: 4px !important;\n}\ninput[type=\"color\"].color-picker-input-swatch[data-v-a901b314]::-moz-color-swatch {\r\n    border: 1px solid rgba(0, 0, 0, 0.2) !important;\r\n    border-radius: 4px !important;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css ***!
  \**********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:40px;height:38px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;-ms-touch-action:manipulation;touch-action:manipulation}.multiselect{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{-webkit-box-sizing:border-box;box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input::-webkit-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver;background:inherit}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{-webkit-transition:all .15s ease;transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes spinning{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_64f39104_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_64f39104_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_64f39104_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_style_index_0_id_a901b314_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_style_index_0_id_a901b314_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_style_index_0_id_a901b314_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Product/Brands/Edit.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Product/Brands/Edit.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_64f39104_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=64f39104&scoped=true */ "./resources/js/views/Product/Brands/Edit.vue?vue&type=template&id=64f39104&scoped=true");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/views/Product/Brands/Edit.vue?vue&type=script&lang=js");
/* harmony import */ var _Edit_vue_vue_type_style_index_0_id_64f39104_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css */ "./resources/js/views/Product/Brands/Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_64f39104_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_64f39104_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "64f39104",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product/Brands/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product/EditProduct.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Product/EditProduct.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditProduct_vue_vue_type_template_id_a901b314_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=template&id=a901b314&scoped=true */ "./resources/js/views/Product/EditProduct.vue?vue&type=template&id=a901b314&scoped=true");
/* harmony import */ var _EditProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=script&lang=js */ "./resources/js/views/Product/EditProduct.vue?vue&type=script&lang=js");
/* harmony import */ var _EditProduct_vue_vue_type_style_index_0_id_a901b314_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css */ "./resources/js/views/Product/EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProduct_vue_vue_type_template_id_a901b314_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _EditProduct_vue_vue_type_template_id_a901b314_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a901b314",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product/EditProduct.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product/Brands/Edit.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Product/Brands/Edit.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Product/EditProduct.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Product/EditProduct.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProduct.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Product/Brands/Edit.vue?vue&type=template&id=64f39104&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Product/Brands/Edit.vue?vue&type=template&id=64f39104&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_64f39104_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_64f39104_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_64f39104_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=64f39104&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=template&id=64f39104&scoped=true");


/***/ }),

/***/ "./resources/js/views/Product/EditProduct.vue?vue&type=template&id=a901b314&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Product/EditProduct.vue?vue&type=template&id=a901b314&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_a901b314_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_a901b314_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_a901b314_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProduct.vue?vue&type=template&id=a901b314&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=template&id=a901b314&scoped=true");


/***/ }),

/***/ "./resources/js/views/Product/Brands/Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/Product/Brands/Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_64f39104_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Brands/Edit.vue?vue&type=style&index=0&id=64f39104&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/Product/EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/Product/EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_style_index_0_id_a901b314_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/EditProduct.vue?vue&type=style&index=0&id=a901b314&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.js ***!
  \******************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=89)}([function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(35),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},function(t,e,n){var r=n(59),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},function(t,e,n){var r=n(4),i=n(43).f,o=n(30),s=n(11),u=n(33),a=n(95),l=n(66);t.exports=function(t,e){var n,c,f,p,h,d=t.target,v=t.global,g=t.stat;if(n=v?r:g?r[d]||u(d,{}):(r[d]||{}).prototype)for(c in e){if(p=e[c],t.dontCallGetSet?(h=i(n,c),f=h&&h.value):f=n[c],!l(v?c:d+(g?".":"#")+c,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;a(p,f)}(t.sham||f&&f.sham)&&o(p,"sham",!0),s(n,c,p,t)}}},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(e,n(139))},function(t,e,n){var r=n(0);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(t,e,n){var r=n(8),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not an object")}},function(t,e,n){var r=n(1),i=n(14),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},function(t,e,n){var r=n(2),i=n(59),o=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===o}:function(t){return"object"==typeof t?null!==t:r(t)}},function(t,e,n){var r=n(4),i=n(47),o=n(7),s=n(75),u=n(72),a=n(76),l=i("wks"),c=r.Symbol,f=c&&c.for,p=a?c:c&&c.withoutSetter||s;t.exports=function(t){if(!o(l,t)||!u&&"string"!=typeof l[t]){var e="Symbol."+t;u&&o(c,t)?l[t]=c[t]:l[t]=a&&f?f(e):p(e)}return l[t]}},function(t,e,n){var r=n(123);t.exports=function(t){return r(t.length)}},function(t,e,n){var r=n(2),i=n(13),o=n(104),s=n(33);t.exports=function(t,e,n,u){u||(u={});var a=u.enumerable,l=void 0!==u.name?u.name:e;if(r(n)&&o(n,l,u),u.global)a?t[e]=n:s(e,n);else{try{u.unsafe?t[e]&&(a=!0):delete t[e]}catch(t){}a?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},function(t,e,n){var r=n(35),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},function(t,e,n){var r=n(5),i=n(62),o=n(77),s=n(6),u=n(50),a=TypeError,l=Object.defineProperty,c=Object.getOwnPropertyDescriptor;e.f=r?o?function(t,e,n){if(s(t),e=u(e),s(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=c(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(s(t),e=u(e),s(n),i)try{return l(t,e,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(24),i=Object;t.exports=function(t){return i(r(t))}},function(t,e,n){var r=n(1),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},function(t,e,n){var r=n(0),i=n(9),o=n(23),s=i("species");t.exports=function(t){return o>=51||!r(function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},function(t,e,n){var r=n(4),i=n(2),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},function(t,e,n){var r=n(15);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(39),i=n(24);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(29),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},function(t,e,n){var r=n(100),i=n(1),o=n(39),s=n(14),u=n(10),a=n(28),l=i([].push),c=function(t){var e=1==t,n=2==t,i=3==t,c=4==t,f=6==t,p=7==t,h=5==t||f;return function(d,v,g,y){for(var b,m,x=s(d),_=o(x),O=r(v,g),w=u(_),S=0,E=y||a,k=e?E(d,w):n||p?E(d,0):void 0;w>S;S++)if((h||S in _)&&(b=_[S],m=O(b,S,x),t))if(e)k[S]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return S;case 2:l(k,b)}else switch(t){case 4:return!1;case 7:l(k,b)}return f?-1:i||c?c:k}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},function(t,e){var n=TypeError;t.exports=function(t){if(t>9007199254740991)throw n("Maximum allowed index exceeded");return t}},function(t,e,n){var r,i,o=n(4),s=n(97),u=o.process,a=o.Deno,l=u&&u.versions||a&&a.version,c=l&&l.v8;c&&(r=c.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(i=+r[1]),t.exports=i},function(t,e,n){var r=n(40),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},function(t,e,n){var r=n(2),i=n(74),o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not a function")}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){var n=[][t];return!!n&&r(function(){n.call(null,e||function(){return 1},1)})}},function(t,e,n){"use strict";var r=n(5),i=n(18),o=TypeError,s=Object.getOwnPropertyDescriptor,u=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,e){if(i(t)&&!s(t,"length").writable)throw o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},function(t,e,n){var r=n(94);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},function(t,e,n){var r=n(51),i=n(2),o=n(15),s=n(9),u=s("toStringTag"),a=Object,l="Arguments"==o(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(t){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=a(t),u))?n:l?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},function(t,e,n){var r=n(5),i=n(13),o=n(31);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(50),i=n(13),o=n(31);t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},function(t,e,n){var r=n(4),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(0);t.exports=!r(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})},function(t,e,n){var r=n(5),i=n(7),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,u=i(o,"name"),a=u&&"something"===function(){}.name,l=u&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:l}},function(t,e,n){var r=n(15),i=n(1);t.exports=function(t){if("Function"===r(t))return i(t)}},function(t,e){t.exports={}},function(t,e,n){var r=n(1),i=n(0),o=n(15),s=Object,u=r("".split);t.exports=i(function(){return!s("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?u(t,""):s(t)}:s},function(t,e){t.exports=function(t){return null===t||void 0===t}},function(t,e,n){var r=n(17),i=n(2),o=n(44),s=n(76),u=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,u(t))}},function(t,e,n){var r,i=n(6),o=n(107),s=n(34),u=n(38),a=n(101),l=n(60),c=n(70),f=c("IE_PROTO"),p=function(){},h=function(t){return"<script>"+t+"<\/script>"},d=function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){var t,e=l("iframe");return e.style.display="none",a.appendChild(e),e.src=String("javascript:"),t=e.contentWindow.document,t.open(),t.write(h("document.F=Object")),t.close(),t.F},g=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}g="undefined"!=typeof document?document.domain&&r?d(r):v():d(r);for(var t=s.length;t--;)delete g.prototype[s[t]];return g()};u[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=i(t),n=new p,p.prototype=null,n[f]=t):n=g(),void 0===e?n:o.f(n,e)}},function(t,e,n){var r=n(5),i=n(12),o=n(110),s=n(31),u=n(19),a=n(50),l=n(7),c=n(62),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=u(t),e=a(e),c)try{return f(t,e)}catch(t){}if(l(t,e))return s(!i(o.f,t,e),t[e])}},function(t,e,n){var r=n(1);t.exports=r({}.isPrototypeOf)},function(t,e,n){"use strict";var r=n(12),i=n(1),o=n(20),s=n(69),u=n(117),a=n(47),l=n(42),c=n(64).get,f=n(118),p=n(119),h=a("native-string-replace",String.prototype.replace),d=RegExp.prototype.exec,v=d,g=i("".charAt),y=i("".indexOf),b=i("".replace),m=i("".slice),x=function(){var t=/a/,e=/b*/g;return r(d,t,"a"),r(d,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),_=u.BROKEN_CARET,O=void 0!==/()??/.exec("")[1];(x||O||_||f||p)&&(v=function(t){var e,n,i,u,a,f,p,w=this,S=c(w),E=o(t),k=S.raw;if(k)return k.lastIndex=w.lastIndex,e=r(v,k,E),w.lastIndex=k.lastIndex,e;var L=S.groups,P=_&&w.sticky,j=r(s,w),T=w.source,V=0,A=E;if(P&&(j=b(j,"y",""),-1===y(j,"g")&&(j+="g"),A=m(E,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==g(E,w.lastIndex-1))&&(T="(?: "+T+")",A=" "+A,V++),n=new RegExp("^(?:"+T+")",j)),O&&(n=new RegExp("^"+T+"$(?!\\s)",j)),x&&(i=w.lastIndex),u=r(d,P?n:w,A),P?u?(u.input=m(u.input,V),u[0]=m(u[0],V),u.index=w.lastIndex,w.lastIndex+=u[0].length):w.lastIndex=0:x&&u&&(w.lastIndex=w.global?u.index+u[0].length:i),O&&u&&u.length>1&&r(h,u[0],n,function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(u[a]=void 0)}),u&&L)for(u.groups=f=l(null),a=0;a<L.length;a++)p=L[a],f[p[0]]=u[p[1]];return u}),t.exports=v},function(t,e,n){var r=n(4),i=n(33),o=r["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=o},function(t,e,n){var r=n(103),i=n(46);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},function(t,e,n){var r=n(49),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},function(t,e,n){var r=n(105);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},function(t,e,n){var r=n(73),i=n(41);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},function(t,e,n){var r=n(9),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},function(t,e,n){"use strict";var r=n(5),i=n(4),o=n(1),s=n(66),u=n(11),a=n(7),l=n(102),c=n(44),f=n(41),p=n(73),h=n(0),d=n(67).f,v=n(43).f,g=n(13).f,y=n(122),b=n(71).trim,m=i.Number,x=m.prototype,_=i.TypeError,O=o("".slice),w=o("".charCodeAt),S=function(t){var e=p(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,n,r,i,o,s,u,a,l=p(t,"number");if(f(l))throw _("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=b(l),43===(e=w(l,0))||45===e){if(88===(n=w(l,2))||120===n)return NaN}else if(48===e){switch(w(l,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(o=O(l,2),s=o.length,u=0;u<s;u++)if((a=w(o,u))<48||a>i)return NaN;return parseInt(o,r)}return+l};if(s("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var k,L=function(t){var e=arguments.length<1?0:m(S(t)),n=this;return c(x,n)&&h(function(){y(n)})?l(Object(e),n,L):e},P=r?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;P.length>j;j++)a(m,k=P[j])&&!a(L,k)&&g(L,k,v(m,k));L.prototype=x,x.constructor=L,u(i,"Number",L,{constructor:!0})}},function(t,e,n){"use strict";var r=n(3),i=n(45);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},function(t,e,n){"use strict";function r(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function i(t){return function(){return!t.apply(void 0,arguments)}}function o(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function s(t,e,n,r){return t.filter(function(t){return o(r(t,n),e)})}function u(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(n){return n.reduce(function(n,r){return r[t]&&r[t].length?(n.push({$groupLabel:r[e],$isLabel:!0}),n.concat(r[t])):n},[])}}function l(t,e,r,i,o){return function(u){return u.map(function(u){var a;if(!u[r])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var l=s(u[r],t,e,o);return l.length?(a={},n.i(f.a)(a,i,u[i]),n.i(f.a)(a,r,l),a):[]})}}var c=n(88),f=n(87),p=n(129),h=(n.n(p),n(82)),d=(n.n(h),n(81)),v=(n.n(d),n(83)),g=(n.n(v),n(84)),y=(n.n(g),n(128)),b=(n.n(y),n(135)),m=(n.n(b),n(127)),x=(n.n(m),n(132)),_=(n.n(x),n(131)),O=(n.n(_),n(125)),w=(n.n(O),n(130)),S=(n.n(w),n(52)),E=(n.n(S),n(53)),k=(n.n(E),n(85)),L=(n.n(k),n(134)),P=(n.n(L),n(80)),j=(n.n(P),n(79)),T=(n.n(j),n(133)),V=(n.n(T),n(126)),A=(n.n(V),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}});e.a={data:function(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return r(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),n=this.options.concat();return n=this.internalSearch?this.groupValues?this.filterAndFlat(n,e,this.label):s(n,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(n):n,n=this.hideSelected?n.filter(i(this.isSelected)):n,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?n.push({isTag:!0,label:t}):n.unshift({isTag:!0,label:t})),n.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null))},search:function(){this.$emit("search-change",this.search,this.id)}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(t,e,n){return A(l(e,n,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return A(a(this.groupValues,this.groupLabel),u)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isOptionDisabled:function(t){return!!t.$isDisabled},getOptionLabel:function(t){if(r(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return r(e)?"":e},select:function(t,e){if(t.$isLabel&&this.groupSelect)return void this.selectGroup(t);if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isDisabled||t.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.multiple?this.$emit("input",this.internalValue.concat([t]),this.id):this.$emit("input",t,this.id),this.$emit("select",t,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup:function(t){var e=this,n=this.options.find(function(n){return n[e.groupLabel]===t.$groupLabel});if(n){if(this.wholeGroupSelected(n)){this.$emit("remove",n[this.groupValues],this.id);var r=this.trackBy?n[this.groupValues].map(function(t){return t[e.trackBy]}):n[this.groupValues],i=this.internalValue.filter(function(t){return-1===r.indexOf(e.trackBy?t[e.trackBy]:t)});this.$emit("input",i,this.id)}else{var o=n[this.groupValues].filter(function(t){return!(e.isOptionDisabled(t)||e.isSelected(t))});this.max&&o.splice(this.max-this.internalValue.length),this.$emit("select",o,this.id),this.$emit("input",this.internalValue.concat(o),this.id)}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected:function(t){var e=this;return t[this.groupValues].every(function(t){return e.isSelected(t)||e.isOptionDisabled(t)})},wholeGroupDisabled:function(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!t.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var r="object"===n.i(c.a)(t)?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.multiple){var i=this.internalValue.slice(0,r).concat(this.internalValue.slice(r+1));this.$emit("input",i,this.id)}else this.$emit("input",null,this.id);this.$emit("remove",t,this.id),this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(function(){return t.$refs.search&&t.$refs.search.focus()})):this.preventAutofocus||void 0!==this.$el&&this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?null!==this.$refs.search&&void 0!==this.$refs.search&&this.$refs.search.blur():void 0!==this.$el&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,n){"use strict";var r=n(52),i=(n.n(r),n(53)),o=(n.n(i),n(85)),s=(n.n(o),n(82)),u=(n.n(s),n(81)),a=(n.n(u),n(83)),l=(n.n(a),n(84)),c=(n.n(l),n(79));n.n(c);e.a={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1},pointer:function(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight:function(t,e){var n=this;if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":e.$isLabel}];var r=this.options.find(function(t){return t[n.groupLabel]===e.$groupLabel});return r&&!this.wholeGroupDisabled(r)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(r)}]:"multiselect__option--disabled"},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,n){"use strict";var r=n(52),i=(n.n(r),n(80)),o=(n.n(i),n(54)),s=n(55);e.a={name:"vue-multiselect",mixins:[o.a,s.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and ".concat(t," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup:function(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible:function(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return!(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){return this.searchable||this.multiple&&this.value&&this.value.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}}},function(t,e,n){var r=n(19),i=n(48),o=n(10),s=function(t){return function(e,n,s){var u,a=r(e),l=o(a),c=i(s,l);if(t&&n!=n){for(;l>c;)if((u=a[c++])!=u)return!0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,n){"use strict";var r=n(74),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))}},function(t,e){var n="object"==typeof document&&document.all,r=void 0===n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:r}},function(t,e,n){var r=n(4),i=n(8),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},function(t,e,n){var r=n(25),i=n(40);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},function(t,e,n){var r=n(5),i=n(0),o=n(60);t.exports=!r&&!i(function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),i=n(2),o=n(46),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},function(t,e,n){var r,i,o,s=n(124),u=n(4),a=n(8),l=n(30),c=n(7),f=n(46),p=n(70),h=n(38),d=u.TypeError,v=u.WeakMap,g=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!a(e)||(n=i(e)).type!==t)throw d("Incompatible receiver, "+t+" required");return n}};if(s||f.state){var b=f.state||(f.state=new v);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw d("Object already initialized");return e.facade=t,b.set(t,e),e},i=function(t){return b.get(t)||{}},o=function(t){return b.has(t)}}else{var m=p("state");h[m]=!0,r=function(t,e){if(c(t,m))throw d("Object already initialized");return e.facade=t,l(t,m,e),e},i=function(t){return c(t,m)?t[m]:{}},o=function(t){return c(t,m)}}t.exports={set:r,get:i,has:o,enforce:g,getterFor:y}},function(t,e,n){var r=n(1),i=n(0),o=n(2),s=n(29),u=n(17),a=n(63),l=function(){},c=[],f=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,h=r(p.exec),d=!p.exec(l),v=function(t){if(!o(t))return!1;try{return f(l,c,t),!0}catch(t){return!1}},g=function(t){if(!o(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!h(p,a(t))}catch(t){return!0}};g.sham=!0,t.exports=!f||i(function(){var t;return v(v.call)||!v(Object)||!v(function(){t=!0})||t})?g:v},function(t,e,n){var r=n(0),i=n(2),o=/#|\.prototype\./,s=function(t,e){var n=a[u(t)];return n==c||n!=l&&(i(e)?r(e):!!e)},u=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=s.data={},l=s.NATIVE="N",c=s.POLYFILL="P";t.exports=s},function(t,e,n){var r=n(68),i=n(34),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(1),i=n(7),o=n(19),s=n(57).indexOf,u=n(38),a=r([].push);t.exports=function(t,e){var n,r=o(t),l=0,c=[];for(n in r)!i(u,n)&&i(r,n)&&a(c,n);for(;e.length>l;)i(r,n=e[l++])&&(~s(c,n)||a(c,n));return c}},function(t,e,n){"use strict";var r=n(6);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(47),i=n(75),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e,n){var r=n(1),i=n(24),o=n(20),s=n(78),u=r("".replace),a="["+s+"]",l=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),f=function(t){return function(e){var n=o(i(e));return 1&t&&(n=u(n,l,"")),2&t&&(n=u(n,c,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},function(t,e,n){var r=n(23),i=n(0);t.exports=!!Object.getOwnPropertySymbols&&!i(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41})},function(t,e,n){var r=n(12),i=n(8),o=n(41),s=n(61),u=n(113),a=n(9),l=TypeError,c=a("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,a=s(t,c);if(a){if(void 0===e&&(e="default"),n=r(a,t,e),!i(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},function(t,e){var n=String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},function(t,e,n){var r=n(1),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},function(t,e,n){var r=n(72);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(5),i=n(0);t.exports=r&&i(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var r=n(3),i=n(21).find,o=n(91),s=!0;"find"in[]&&Array(1).find(function(){s=!1}),r({target:"Array",proto:!0,forced:s},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},function(t,e,n){"use strict";var r=n(3),i=n(18),o=n(65),s=n(8),u=n(48),a=n(10),l=n(19),c=n(32),f=n(9),p=n(16),h=n(93),d=p("slice"),v=f("species"),g=Array,y=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,f,p=l(this),d=a(p),b=u(t,d),m=u(void 0===e?d:e,d);if(i(p)&&(n=p.constructor,o(n)&&(n===g||i(n.prototype))?n=void 0:s(n)&&null===(n=n[v])&&(n=void 0),n===g||void 0===n))return h(p,b,m);for(r=new(void 0===n?g:n)(y(m-b,0)),f=0;b<m;b++,f++)b in p&&c(r,f,p[b]);return r.length=f,r}})},function(t,e,n){var r=n(1),i=n(11),o=Date.prototype,s=r(o.toString),u=r(o.getTime);"Invalid Date"!=String(new Date(NaN))&&i(o,"toString",function(){var t=u(this);return t===t?s(this):"Invalid Date"})},function(t,e,n){var r=n(11),i=n(98),o=Error.prototype;o.toString!==i&&r(o,"toString",i)},function(t,e,n){var r=n(51),i=n(11),o=n(112);r||i(Object.prototype,"toString",o,{unsafe:!0})},function(t,e,n){"use strict";var r=n(36).PROPER,i=n(11),o=n(6),s=n(20),u=n(0),a=n(116),l=RegExp.prototype,c=l.toString,f=u(function(){return"/a/b"!=c.call({source:"a",flags:"b"})}),p=r&&"toString"!=c.name;(f||p)&&i(RegExp.prototype,"toString",function(){var t=o(this);return"/"+s(t.source)+"/"+s(a(t))},{unsafe:!0})},function(t,e,n){"use strict";var r=n(12),i=n(99),o=n(6),s=n(40),u=n(24),a=n(120),l=n(20),c=n(61),f=n(115);i("search",function(t,e,n){return[function(e){var n=u(this),i=s(e)?void 0:c(e,t);return i?r(i,e,n):new RegExp(e)[t](l(n))},function(t){var r=o(this),i=l(t),s=n(e,r,i);if(s.done)return s.value;var u=r.lastIndex;a(u,0)||(r.lastIndex=0);var c=f(r,i);return a(r.lastIndex,u)||(r.lastIndex=u),null===c?-1:c.index}]})},function(t,e,n){"use strict";function r(t){n(136)}var i=n(56),o=n(138),s=n(137),u=r,a=s(i.a,o.a,!1,u,null,null);e.a=a.exports},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=r},function(t,e,n){"use strict";function r(t){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(86),i=n(54),o=n(55);n.d(e,"Multiselect",function(){return r.a}),n.d(e,"multiselectMixin",function(){return i.a}),n.d(e,"pointerMixin",function(){return o.a}),e.default=r.a},function(t,e,n){var r=n(2),i=String,o=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+i(t)+" as a prototype")}},function(t,e,n){var r=n(9),i=n(42),o=n(13).f,s=r("unscopables"),u=Array.prototype;void 0==u[s]&&o(u,s,{configurable:!0,value:i(null)}),t.exports=function(t){u[s][t]=!0}},function(t,e,n){var r=n(25),i=n(14),o=n(39),s=n(10),u=TypeError,a=function(t){return function(e,n,a,l){r(n);var c=i(e),f=o(c),p=s(c),h=t?p-1:0,d=t?-1:1;if(a<2)for(;;){if(h in f){l=f[h],h+=d;break}if(h+=d,t?h<0:p<=h)throw u("Reduce of empty array with no initial value")}for(;t?h>=0:p>h;h+=d)h in f&&(l=n(l,f[h],h,c));return l}};t.exports={left:a(!1),right:a(!0)}},function(t,e,n){var r=n(1);t.exports=r([].slice)},function(t,e,n){var r=n(18),i=n(65),o=n(8),s=n(9),u=s("species"),a=Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===a||r(e.prototype))?e=void 0:o(e)&&null===(e=e[u])&&(e=void 0)),void 0===e?a:e}},function(t,e,n){var r=n(7),i=n(114),o=n(43),s=n(13);t.exports=function(t,e,n){for(var u=i(e),a=s.f,l=o.f,c=0;c<u.length;c++){var f=u[c];r(t,f)||n&&r(n,f)||a(t,f,l(e,f))}}},function(t,e,n){var r=n(15),i=n(4);t.exports="process"==r(i.process)},function(t,e,n){var r=n(17);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(5),i=n(0),o=n(6),s=n(42),u=n(106),a=Error.prototype.toString,l=i(function(){if(r){var t=s(Object.defineProperty({},"name",{get:function(){return this===t}}));if("true"!==a.call(t))return!0}return"2: 1"!==a.call({message:1,name:2})||"Error"!==a.call({})});t.exports=l?function(){var t=o(this),e=u(t.name,"Error"),n=u(t.message);return e?n?e+": "+n:e:n}:a},function(t,e,n){"use strict";n(53);var r=n(37),i=n(11),o=n(45),s=n(0),u=n(9),a=n(30),l=u("species"),c=RegExp.prototype;t.exports=function(t,e,n,f){var p=u(t),h=!s(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=h&&!s(function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e});if(!h||!d||n){var v=r(/./[p]),g=e(p,""[t],function(t,e,n,i,s){var u=r(t),a=e.exec;return a===o||a===c.exec?h&&!s?{done:!0,value:v(e,n,i)}:{done:!0,value:u(n,e,i)}:{done:!1}});i(String.prototype,t,g[0]),i(c,p,g[1])}f&&a(c[p],"sham",!0)}},function(t,e,n){var r=n(37),i=n(25),o=n(35),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(17);t.exports=r("document","documentElement")},function(t,e,n){var r=n(2),i=n(8),o=n(111);t.exports=function(t,e,n){var s,u;return o&&r(s=e.constructor)&&s!==n&&i(u=s.prototype)&&u!==n.prototype&&o(t,u),t}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),i=n(2),o=n(7),s=n(5),u=n(36).CONFIGURABLE,a=n(63),l=n(64),c=l.enforce,f=l.get,p=Object.defineProperty,h=s&&!r(function(){return 8!==p(function(){},"length",{value:8}).length}),d=String(String).split("String"),v=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||u&&t.name!==e)&&(s?p(t,"name",{value:e,configurable:!0}):t.name=e),h&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=c(t);return o(r,"source")||(r.source=d.join("string"==typeof e?e:"")),t};Function.prototype.toString=v(function(){return i(this)&&f(this).source||a(this)},"toString")},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?r:n)(e)}},function(t,e,n){var r=n(20);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},function(t,e,n){var r=n(5),i=n(77),o=n(13),s=n(6),u=n(19),a=n(109);e.f=r&&!i?Object.defineProperties:function(t,e){s(t);for(var n,r=u(e),i=a(e),l=i.length,c=0;l>c;)o.f(t,n=i[c++],r[n]);return t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(68),i=n(34);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(1),i=n(6),o=n(90);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},function(t,e,n){"use strict";var r=n(51),i=n(29);t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},function(t,e,n){var r=n(12),i=n(2),o=n(8),s=TypeError;t.exports=function(t,e){var n,u;if("string"===e&&i(n=t.toString)&&!o(u=r(n,t)))return u;if(i(n=t.valueOf)&&!o(u=r(n,t)))return u;if("string"!==e&&i(n=t.toString)&&!o(u=r(n,t)))return u;throw s("Can't convert object to primitive value")}},function(t,e,n){var r=n(17),i=n(1),o=n(67),s=n(108),u=n(6),a=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=s.f;return n?a(e,n(t)):e}},function(t,e,n){var r=n(12),i=n(6),o=n(2),s=n(15),u=n(45),a=TypeError;t.exports=function(t,e){var n=t.exec;if(o(n)){var l=r(n,t,e);return null!==l&&i(l),l}if("RegExp"===s(t))return r(u,t,e);throw a("RegExp#exec called on incompatible receiver")}},function(t,e,n){var r=n(12),i=n(7),o=n(44),s=n(69),u=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in u||i(t,"flags")||!o(u,t)?e:r(s,t)}},function(t,e,n){var r=n(0),i=n(4),o=i.RegExp,s=r(function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")}),u=s||r(function(){return!o("a","y").sticky}),a=s||r(function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")});t.exports={BROKEN_CARET:a,MISSED_STICKY:u,UNSUPPORTED_Y:s}},function(t,e,n){var r=n(0),i=n(4),o=i.RegExp;t.exports=r(function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})},function(t,e,n){var r=n(0),i=n(4),o=i.RegExp;t.exports=r(function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){var r=n(36).PROPER,i=n(0),o=n(78),s="​᠎";t.exports=function(t){return i(function(){return!!o[t]()||s[t]()!==s||r&&o[t].name!==t})}},function(t,e,n){var r=n(1);t.exports=r(1..valueOf)},function(t,e,n){var r=n(49),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(4),i=n(2),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},function(t,e,n){"use strict";var r=n(3),i=n(0),o=n(18),s=n(8),u=n(14),a=n(10),l=n(22),c=n(32),f=n(28),p=n(16),h=n(9),d=n(23),v=h("isConcatSpreadable"),g=d>=51||!i(function(){var t=[];return t[v]=!1,t.concat()[0]!==t}),y=p("concat"),b=function(t){if(!s(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)};r({target:"Array",proto:!0,arity:1,forced:!g||!y},{concat:function(t){var e,n,r,i,o,s=u(this),p=f(s,0),h=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?s:arguments[e],b(o))for(i=a(o),l(h+i),n=0;n<i;n++,h++)n in o&&c(p,h,o[n]);else l(h+1),c(p,h++,o);return p.length=h,p}})},function(t,e,n){"use strict";var r=n(3),i=n(21).every;r({target:"Array",proto:!0,forced:!n(26)("every")},{every:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(21).filter;r({target:"Array",proto:!0,forced:!n(16)("filter")},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(37),o=n(57).indexOf,s=n(26),u=i([].indexOf),a=!!u&&1/u([1],1,-0)<0,l=s("indexOf");r({target:"Array",proto:!0,forced:a||!l},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return a?u(this,t,e)||0:o(this,t,e)}})},function(t,e,n){n(3)({target:"Array",stat:!0},{isArray:n(18)})},function(t,e,n){"use strict";var r=n(3),i=n(21).map;r({target:"Array",proto:!0,forced:!n(16)("map")},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(14),o=n(10),s=n(27),u=n(22),a=n(0),l=a(function(){return 4294967297!==[].push.call({length:4294967296},1)}),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||c},{push:function(t){var e=i(this),n=o(e),r=arguments.length;u(n+r);for(var a=0;a<r;a++)e[n]=arguments[a],n++;return s(e,n),n}})},function(t,e,n){"use strict";var r=n(3),i=n(92).left,o=n(26),s=n(23),u=n(96),a=o("reduce"),l=!u&&s>79&&s<83;r({target:"Array",proto:!0,forced:!a||l},{reduce:function(t){var e=arguments.length;return i(this,t,e,e>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(14),o=n(48),s=n(49),u=n(10),a=n(27),l=n(22),c=n(28),f=n(32),p=n(58),h=n(16),d=h("splice"),v=Math.max,g=Math.min;r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,r,h,d,y,b,m=i(this),x=u(m),_=o(t,x),O=arguments.length;for(0===O?n=r=0:1===O?(n=0,r=x-_):(n=O-2,r=g(v(s(e),0),x-_)),l(x+n-r),h=c(m,r),d=0;d<r;d++)(y=_+d)in m&&f(h,d,m[y]);if(h.length=r,n<r){for(d=_;d<x-r;d++)y=d+r,b=d+n,y in m?m[b]=m[y]:p(m,b);for(d=x;d>x-r+n;d--)p(m,d-1)}else if(n>r)for(d=x-r;d>_;d--)y=d+r-1,b=d+n-1,y in m?m[b]=m[y]:p(m,b);for(d=0;d<n;d++)m[d+_]=arguments[d+2];return a(m,x-r+n),h}})},function(t,e,n){"use strict";var r=n(3),i=n(14),o=n(10),s=n(27),u=n(58),a=n(22),l=1!==[].unshift(0),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||c},{unshift:function(t){var e=i(this),n=o(e),r=arguments.length;if(r){a(n+r);for(var l=n;l--;){var c=l+r;l in e?e[c]=e[l]:u(e,c)}for(var f=0;f<r;f++)e[f]=arguments[f]}return s(e,n+r)}})},function(t,e,n){"use strict";var r=n(3),i=n(71).trim;r({target:"String",proto:!0,forced:n(121)("trim")},{trim:function(){return i(this)}})},function(t,e){},function(t,e){t.exports=function(t,e,n,r,i,o){var s,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,u=t.default);var l="function"==typeof u?u.options:u;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=r),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:u,options:l}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove,"multiselect--has-options-group":t.hasOptionGroup},attrs:{tabindex:t.searchable?-1:t.tabindex,role:"combobox","aria-owns":"listbox-"+t.id},on:{focus:function(e){return t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:e.target!==e.currentTarget?null:(e.preventDefault(),t.pointerForward())},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:e.target!==e.currentTarget?null:(e.preventDefault(),t.pointerBackward())}],keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:(e.stopPropagation(),e.target!==e.currentTarget?null:t.addPointerElement(e))},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.deactivate()}}},[t._t("caret",function(){return[n("div",{staticClass:"multiselect__select",on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t.toggle()}}})]},{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),n("div",{ref:"tags",staticClass:"multiselect__tags"},[t._t("selection",function(){return[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValues,function(e,r){return[t._t("tag",function(){return[n("span",{key:r,staticClass:"multiselect__tag"},[n("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),n("i",{staticClass:"multiselect__tag-icon",attrs:{tabindex:"1"},on:{keypress:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),t.removeElement(e))},mousedown:function(n){return n.preventDefault(),t.removeElement(e)}}})])]},{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[t._t("limit",function(){return[n("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})]})]:t._e()]},{search:t.search,remove:t.removeElement,values:t.visibleValues,isOpen:t.isOpen}),t._v(" "),n("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",function(){return[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})]})],2),t._v(" "),t.searchable?n("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"off",spellcheck:"false",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex,"aria-controls":"listbox-"+t.id},domProps:{value:t.search},on:{input:function(e){return t.updateSearch(e.target.value)},focus:function(e){return e.preventDefault(),t.activate()},blur:function(e){return e.preventDefault(),t.deactivate()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.deactivate()},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:(e.preventDefault(),t.pointerForward())},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:(e.preventDefault(),t.pointerBackward())},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:(e.stopPropagation(),t.removeLastElement())}],keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:t.addPointerElement(e))}}}):t._e(),t._v(" "),t.isSingleLabelVisible?n("span",{staticClass:"multiselect__single",on:{mousedown:function(e){return e.preventDefault(),t.toggle.apply(null,arguments)}}},[t._t("singleLabel",function(){return[[t._v(t._s(t.currentOptionLabel))]]},{option:t.singleValue})],2):t._e(),t._v(" "),t.isPlaceholderVisible?n("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(e){return e.preventDefault(),t.toggle.apply(null,arguments)}}},[t._t("placeholder",function(){return[t._v("\n          "+t._s(t.placeholder)+"\n        ")]})],2):t._e()],2),t._v(" "),n("transition",{attrs:{name:"multiselect"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[n("ul",{staticClass:"multiselect__content",style:t.contentStyle,attrs:{role:"listbox",id:"listbox-"+t.id}},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?n("li",[n("span",{staticClass:"multiselect__option"},[t._t("maxElements",function(){return[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")]})],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,r){return n("li",{key:r,staticClass:"multiselect__element",attrs:{id:t.id+"-"+r,role:e&&(e.$isLabel||e.$isDisabled)?null:"option"}},[e&&(e.$isLabel||e.$isDisabled)?t._e():n("span",{staticClass:"multiselect__option",class:t.optionHighlight(r,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(n){return n.stopPropagation(),t.select(e)},mouseenter:function(e){return e.target!==e.currentTarget?null:t.pointerSet(r)}}},[t._t("option",function(){return[n("span",[t._v(t._s(t.getOptionLabel(e)))])]},{option:e,search:t.search,index:r})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?n("span",{staticClass:"multiselect__option",class:t.groupHighlight(r,e),attrs:{"data-select":t.groupSelect&&t.selectGroupLabelText,"data-deselect":t.groupSelect&&t.deselectGroupLabelText},on:{mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.groupSelect&&t.pointerSet(r)},mousedown:function(n){return n.preventDefault(),t.selectGroup(e)}}},[t._t("option",function(){return[n("span",[t._v(t._s(t.getOptionLabel(e)))])]},{option:e,search:t.search,index:r})],2):t._e()])}):t._e(),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noResult",function(){return[t._v("No elements found. Consider changing the search query.")]},{search:t.search})],2)]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoOptions&&(0===t.options.length||!0===t.hasOptionGroup&&0===t.filteredOptions.length)&&!t.search&&!t.loading,expression:"showNoOptions && ((options.length === 0 || (hasOptionGroup === true && filteredOptions.length === 0)) && !search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noOptions",function(){return[t._v("List is empty.")]})],2)]),t._v(" "),t._t("afterList")],2)])])],2)},i=[],o={render:r,staticRenderFns:i};e.a=o},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])});

/***/ })

}]);