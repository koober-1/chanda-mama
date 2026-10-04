"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Blogs_BlogCategories_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Blogs/BlogCategories.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Blogs/BlogCategories.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
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
  mixins: [_mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  name: 'BlogCategories',
  data: function data() {
    var _ref;
    return _ref = {
      tabsKey: 0,
      isLoadingData: true,
      categories: [],
      activeLangTab: 0,
      languages: [],
      create_new: false,
      edit_record: {},
      isSubmitting: false,
      form: {
        slug: '',
        status: 1,
        translations: {}
      },
      isLoading: false
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "isSubmitting", false), "filter", ''), "filterOn", ['id', 'name', 'slug', 'status']), "sortBy", 'id'), "sortDesc", true), "sortDirection", 'desc'), "fields", [{
      key: 'id',
      label: __('id'),
      sortable: true,
      "class": 'text-center'
    }, {
      key: 'name',
      label: __('name'),
      sortable: true,
      "class": 'text-center'
    }, {
      key: 'slug',
      label: __('slug'),
      "class": 'text-center'
    }, {
      key: 'blogs_count',
      label: __('blogs_count'),
      "class": 'text-center'
    }, {
      key: 'status',
      label: __('status'),
      "class": 'text-center'
    }, {
      key: 'actions',
      label: __('actions'),
      "class": 'text-center'
    }]), "perPage", 10), "currentPage", 1), "totalRows", 0), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "currentLanguageId", null), "activeLanguages", []), "translatableFields", ['name', 'meta_title', 'meta_keywords', 'meta_description']), "translateSuccessMessage", ''), "loadingEmpty", false), "loadingOverwrite", false), "pageOptions", [5, 10, 15, 20, 25, 50, 100]);
  },
  computed: {
    pageStart: function pageStart() {
      if (this.totalRows === 0) return 0;
      return (this.currentPage - 1) * this.perPage + 1;
    },
    pageEnd: function pageEnd() {
      return Math.min(this.currentPage * this.perPage, this.totalRows);
    },
    defaultLanguageId: function defaultLanguageId() {
      var d = this.languages.find(function (l) {
        return l.is_default === 1;
      });
      return d ? d.id : null;
    },
    translations: function translations() {
      return this.form.translations || {};
    },
    translatedCategories: function translatedCategories() {
      var _this = this;
      if (!this.currentLanguageId || !Array.isArray(this.categories)) {
        return this.categories;
      }
      return this.categories.map(function (category) {
        var translated = _objectSpread({}, category);
        if (Array.isArray(category.translations)) {
          var tr = category.translations.find(function (t) {
            return t.language_id === _this.currentLanguageId;
          });
          if (tr) {
            var _tr$name, _tr$meta_title, _tr$meta_keywords, _tr$meta_description;
            if ((_tr$name = tr.name) !== null && _tr$name !== void 0 && _tr$name.trim()) translated.name = tr.name;
            if ((_tr$meta_title = tr.meta_title) !== null && _tr$meta_title !== void 0 && _tr$meta_title.trim()) translated.meta_title = tr.meta_title;
            if ((_tr$meta_keywords = tr.meta_keywords) !== null && _tr$meta_keywords !== void 0 && _tr$meta_keywords.trim()) translated.meta_keywords = tr.meta_keywords;
            if ((_tr$meta_description = tr.meta_description) !== null && _tr$meta_description !== void 0 && _tr$meta_description.trim()) translated.meta_description = tr.meta_description;
          }
        }
        return translated;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.fetchActiveLanguages().then(function () {
      _this2.getBlogCategories();
    });
    if (!this.languages.length) {
      this.getLanguages();
    }
  },
  methods: {
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var res, appLocale, currentLang, def, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(_this3.$apiUrl + '/active_languages');
            case 1:
              res = _context.v;
              if (res.data.status === 1 && Array.isArray(res.data.data)) {
                _this3.activeLanguages = res.data.data;
                appLocale = window.appLocale || 'en';
                currentLang = _this3.activeLanguages.find(function (l) {
                  return l.code === appLocale;
                });
                if (currentLang) {
                  _this3.currentLanguageId = currentLang.id;
                } else {
                  def = _this3.activeLanguages.find(function (l) {
                    return l.is_default === 1;
                  });
                  if (def) _this3.currentLanguageId = def.id;
                }
              }
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Language load failed', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    onModalHidden: function onModalHidden() {
      this.resetForm();
      this.edit_record = {};
      this.activeLangTab = this.getDefaultLangIndex();
      this.tabsKey++;
    },
    // change 
    getDefaultLangIndex: function getDefaultLangIndex() {
      var index = this.languages.findIndex(function (l) {
        return l.is_default === 1;
      });
      return index !== -1 ? index : 0;
    },
    //change 
    openAddModal: function openAddModal() {
      this.edit_record = {};
      this.resetForm();
      this.activeLangTab = this.getDefaultLangIndex();
      this.tabsKey++;
      this.create_new = true;
    },
    getLanguages: function getLanguages() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var res, unique, map;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(_this4.$apiUrl + '/active_languages');
            case 1:
              res = _context2.v;
              // Remove duplicates by ID
              unique = [];
              map = new Set();
              res.data.data.forEach(function (lang) {
                if (!map.has(lang.id)) {
                  map.add(lang.id);
                  unique.push(lang);
                }
              });
              _this4.languages = unique;
              _this4.initTranslations();
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    generateSlug: function generateSlug(langId) {
      var name = this.form.translations[langId].name;
      if (!name) return;
      this.form.slug = name.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    },
    getBlogCategories: function getBlogCategories() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var params, response, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _this5.isLoading = true;
              _context3.p = 1;
              params = {
                offset: (_this5.currentPage - 1) * _this5.perPage,
                limit: _this5.perPage,
                search: _this5.filter
              };
              _context3.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(_this5.$apiUrl + '/blog_categories', {
                params: params
              });
            case 2:
              response = _context3.v;
              if (response.data.status === 1) {
                _this5.categories = response.data.data;
                _this5.totalRows = response.data.total;
              } else {
                _this5.showMessage("error", response.data.message);
              }
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              _this5.showError(__('something_went_wrong'));
            case 4:
              _context3.p = 4;
              _this5.isLoading = false;
              return _context3.f(4);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3, 4, 5]]);
      }))();
    },
    createSlug: function createSlug(langId) {
      var name = this.form.translations[langId].name;
      if (!name) return;
      this.form.slug = name.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    },
    openCreateModal: function openCreateModal() {
      this.resetForm();
      this.showModal = true;
    },
    openEditModal: function openEditModal(item) {
      var _this6 = this;
      this.editId = item.id;
      this.form.status = item.status;
      item.translations.forEach(function (t) {
        _this6.form.translations[t.language_id] = {
          name: t.name,
          meta_title: t.meta_title,
          meta_keywords: t.meta_keywords,
          meta_description: t.meta_description
        };
      });
      this.showModal = true;
    },
    saveCategory: function saveCategory() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var defaultLang, defaultTranslation, filteredTranslations, payload, url, res, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              // Validate default language name
              defaultLang = _this7.languages.find(function (l) {
                return l.is_default;
              });
              if (defaultLang) {
                _context4.n = 1;
                break;
              }
              _this7.showError(__('default_language_not_found'));
              _this7.isSubmitting = false;
              return _context4.a(2);
            case 1:
              defaultTranslation = _this7.form.translations[defaultLang.id];
              if (!(!defaultTranslation || !defaultTranslation.name || defaultTranslation.name.trim() === '')) {
                _context4.n = 2;
                break;
              }
              _this7.showError(__('please_fill_default_language_required_fields'));
              _this7.activeLangTab = _this7.getDefaultLangIndex();
              _this7.isSubmitting = false;
              return _context4.a(2);
            case 2:
              _this7.isSubmitting = true;

              // Filter translations to only include those with actual data
              // Ensure language IDs are sent as integers to match backend expectations
              filteredTranslations = {}; // First, always add default language translation (it's required)
              filteredTranslations[defaultLang.id] = {
                name: defaultTranslation.name.trim() || '',
                meta_title: defaultTranslation.meta_title || '',
                meta_keywords: defaultTranslation.meta_keywords || '',
                meta_description: defaultTranslation.meta_description || ''
              };

              // Then add other languages that have data
              Object.keys(_this7.form.translations).forEach(function (langId) {
                var langIdInt = parseInt(langId);

                // Skip default language as we already added it
                if (langIdInt === defaultLang.id) {
                  return;
                }
                var tr = _this7.form.translations[langId];

                // Check if translation has any meaningful data
                var hasData = tr.name && tr.name.trim() !== '' || tr.meta_title && tr.meta_title.trim() !== '' || tr.meta_keywords && tr.meta_keywords.trim() !== '' || tr.meta_description && tr.meta_description.trim() !== '';
                if (hasData) {
                  filteredTranslations[langIdInt] = {
                    name: tr.name || '',
                    meta_title: tr.meta_title || '',
                    meta_keywords: tr.meta_keywords || '',
                    meta_description: tr.meta_description || ''
                  };
                }
              });

              // Final validation: Ensure default language translation exists with name
              if (!(!filteredTranslations[defaultLang.id] || !filteredTranslations[defaultLang.id].name || filteredTranslations[defaultLang.id].name.trim() === '')) {
                _context4.n = 3;
                break;
              }
              _this7.showError(__('please_fill_default_language_required_fields'));
              _this7.activeLangTab = _this7.getDefaultLangIndex();
              _this7.isSubmitting = false;
              return _context4.a(2);
            case 3:
              payload = {
                id: _this7.edit_record.id || null,
                slug: _this7.form.slug,
                status: _this7.form.status,
                translations: filteredTranslations
              };
              url = _this7.edit_record.id ? '/blog_categories/update' : '/blog_categories/save';
              _context4.p = 4;
              _context4.n = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(_this7.$apiUrl + url, payload);
            case 5:
              res = _context4.v;
              if (res.data.status === 1) {
                _this7.$toast.success(res.data.message);
                _this7.create_new = false;
                _this7.getBlogCategories();
                _this7.resetForm();
              } else {
                _this7.showError(res.data.message);
              }
              _context4.n = 7;
              break;
            case 6:
              _context4.p = 6;
              _t3 = _context4.v;
              _this7.showError(__('something_went_wrong'));
            case 7:
              _context4.p = 7;
              _this7.isSubmitting = false;
              return _context4.f(7);
            case 8:
              return _context4.a(2);
          }
        }, _callee4, null, [[4, 6, 7, 8]]);
      }))();
    },
    deleteCategory: function deleteCategory(id) {
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
      }).then(/*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(result) {
          var res, _t4;
          return _regenerator().w(function (_context5) {
            while (1) switch (_context5.p = _context5.n) {
              case 0:
                if (result.value) {
                  _context5.n = 1;
                  break;
                }
                return _context5.a(2);
              case 1:
                _context5.p = 1;
                _context5.n = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(_this8.$apiUrl + '/blog_categories/delete/' + id);
              case 2:
                res = _context5.v;
                if (res.data.status === 1) {
                  _this8.$toast.success(res.data.message);
                  _this8.getBlogCategories();
                } else {
                  _this8.$toast.error(res.data.message);
                }
                _context5.n = 4;
                break;
              case 3:
                _context5.p = 3;
                _t4 = _context5.v;
                _this8.showError(__('something_went_wrong'));
              case 4:
                return _context5.a(2);
            }
          }, _callee5, null, [[1, 3]]);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    },
    initTranslations: function initTranslations() {
      var _this9 = this;
      this.form.translations = {};
      this.languages.forEach(function (lang) {
        _this9.$set(_this9.form.translations, lang.id, {
          name: '',
          meta_title: '',
          meta_keywords: '',
          meta_description: ''
        });
      });
    },
    resetForm: function resetForm() {
      var _this0 = this;
      this.form.slug = '';
      this.form.status = 1;
      Object.keys(this.form.translations).forEach(function (id) {
        _this0.form.translations[id].name = '';
        _this0.form.translations[id].meta_title = '';
        _this0.form.translations[id].meta_keywords = '';
        _this0.form.translations[id].meta_description = '';
      });
      this.edit_record = {};
    },
    closeModal: function closeModal() {
      this.showModal = false;
      this.resetForm();
    }
  },
  watch: {
    edit_record: function edit_record(val) {
      var _this1 = this;
      if (!(val !== null && val !== void 0 && val.id)) return;
      this.tabsKey++;
      this.form.slug = val.slug;
      this.form.status = val.status;

      // Get default language for fallback
      var defaultLang = this.languages.find(function (l) {
        return l.is_default;
      });

      // Load translations from API response - only populate languages that have translations
      if (Array.isArray(val.translations) && val.translations.length > 0) {
        val.translations.forEach(function (tr) {
          if (_this1.form.translations[tr.language_id]) {
            // Only populate if translation has data
            var hasData = tr.name && tr.name.trim() !== '';
            if (hasData) {
              _this1.form.translations[tr.language_id] = {
                name: tr.name || '',
                meta_title: tr.meta_title || '',
                meta_keywords: tr.meta_keywords || '',
                meta_description: tr.meta_description || ''
              };
            }
          }
        });
      }

      // Apply fallback only for default language if no translation exists
      // Other languages will remain empty if no translation exists
      if (defaultLang) {
        var defaultTranslation = this.form.translations[defaultLang.id];

        // Check if default language translation is missing or empty
        var isMissing = !defaultTranslation || !defaultTranslation.name || defaultTranslation.name.trim() === '';
        if (isMissing) {
          // Use main table data as fallback only for default language
          this.form.translations[defaultLang.id] = {
            name: val.name || '',
            meta_title: val.meta_title || '',
            meta_keywords: val.meta_keywords || '',
            meta_description: val.meta_description || ''
          };
        } else {
          // Fill in any empty fields in default language translation with main table data
          this.form.translations[defaultLang.id] = {
            name: defaultTranslation.name || val.name || '',
            meta_title: defaultTranslation.meta_title || val.meta_title || '',
            meta_keywords: defaultTranslation.meta_keywords || val.meta_keywords || '',
            meta_description: defaultTranslation.meta_description || val.meta_description || ''
          };
        }
      }
      this.activeLangTab = this.getDefaultLangIndex();
      this.create_new = true;
    },
    currentPage: function currentPage() {
      this.getBlogCategories();
    },
    perPage: function perPage() {
      this.getBlogCategories();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Blogs/BlogCategories.vue?vue&type=template&id=ac7e704a":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Blogs/BlogCategories.vue?vue&type=template&id=ac7e704a ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-6 order-md-1 order-last"
  }, [_c("h3", [_vm._v(_vm._s(_vm.__("blog_categories")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 order-md-2 order-first"
  }, [_c("nav", {
    staticClass: "breadcrumb-header float-start float-lg-end",
    attrs: {
      "aria-label": "breadcrumb"
    }
  }, [_c("ol", {
    staticClass: "breadcrumb"
  }, [_c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard"
    }
  }, [_vm._v(_vm._s(_vm.__("dashboard")))])], 1), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active",
    attrs: {
      "aria-current": "page"
    }
  }, [_vm._v(_vm._s(_vm.__("blog_categories")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-12 order-md-1 order-last"
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
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.filter = $event.target.value;
      }, function ($event) {
        _vm.currentPage = 1;
        _vm.getBlogCategories();
      }]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 align-items-center flex-wrap"
  }, [_vm.$can("blog_category_create") ? _c("button", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover",
      modifiers: {
        hover: true
      }
    }],
    staticClass: "btn btn-figma-filter d-flex align-items-center gap-2",
    attrs: {
      title: _vm.__("add_new_category")
    },
    on: {
      click: _vm.openAddModal
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("add_category")))])]) : _vm._e(), _vm._v(" "), _c("button", {
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
        return _vm.getBlogCategories();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-refresh"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("b-table", {
    staticClass: "figma-table mb-0",
    attrs: {
      items: _vm.translatedCategories,
      fields: _vm.fields,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      "sort-direction": _vm.sortDirection,
      bordered: false,
      busy: _vm.isLoading,
      stacked: "md",
      "show-empty": "",
      small: "",
      "tbody-tr-class": function tbodyTrClass() {
        return "figma-tr align-middle";
      }
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
      key: "cell(status)",
      fn: function fn(row) {
        return [row.item.status == 1 ? _c("span", {
          staticClass: "badge bg-success"
        }, [_vm._v(_vm._s(_vm.__("active")))]) : _vm._e(), _vm._v(" "), row.item.status == 0 ? _c("span", {
          staticClass: "badge bg-danger"
        }, [_vm._v(_vm._s(_vm.__("deactive")))]) : _vm._e()];
      }
    }, {
      key: "cell(blogs_count)",
      fn: function fn(row) {
        return [_c("span", {
          staticClass: "badge bg-info"
        }, [_vm._v(_vm._s(row.item.active_blogs_count || 0))])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2 justify-content-center"
        }, [_vm.$can("blog_category_update") ? _c("button", {
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
        })], 1) : _vm._e(), _vm._v(" "), _vm.$can("blog_category_delete") ? _c("button", {
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
              return _vm.deleteCategory(row.item.id);
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
    staticClass: "figma-table-footer flex-wrap gap-3 mt-4"
  }, [_c("div", {
    staticClass: "showing-results-text small"
  }, [_vm._v("\n                " + _vm._s(_vm.__("Showing Result")) + " : "), _c("span", {
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
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)])])])])])]), _vm._v(" "), _c("b-modal", {
    attrs: {
      title: _vm.edit_record.id ? _vm.__("edit_category") : _vm.__("add_category"),
      size: "lg",
      "hide-footer": true
    },
    on: {
      hidden: _vm.onModalHidden
    },
    model: {
      value: _vm.create_new,
      callback: function callback($$v) {
        _vm.create_new = $$v;
      },
      expression: "create_new"
    }
  }, [_c("form", {
    attrs: {
      novalidate: ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveCategory.apply(null, arguments);
      }
    }
  }, [_c("b-tabs", {
    key: _vm.tabsKey,
    attrs: {
      "content-class": "mt-3"
    },
    model: {
      value: _vm.activeLangTab,
      callback: function callback($$v) {
        _vm.activeLangTab = $$v;
      },
      expression: "activeLangTab"
    }
  }, _vm._l(_vm.languages, function (lang, index) {
    return _c("b-tab", {
      key: lang.id,
      scopedSlots: _vm._u([{
        key: "title",
        fn: function fn() {
          return [_c("span", {
            "class": {
              "text-primary": lang.is_default
            }
          }, [_vm._v("\n              " + _vm._s(lang.name) + "\n            ")])];
        },
        proxy: true
      }], null, true)
    }, [_vm._v(" "), lang.is_default && _vm.languages.length > 1 ? _c("div", {
      staticClass: "mb-3"
    }, [_c("b-button", {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }],
      staticClass: "mr-2",
      attrs: {
        size: "sm",
        variant: "outline-primary",
        title: _vm.__("only_empty_fields_will_be_translated_existing_content_will_not_be_changed"),
        disabled: _vm.loadingEmpty
      },
      on: {
        click: function click($event) {
          return _vm.translateEmpty(lang);
        }
      }
    }, [!_vm.loadingEmpty ? _c("span", [_vm._v(_vm._s(_vm.__("translate_empty_fields")))]) : _c("b-spinner", {
      attrs: {
        small: ""
      }
    })], 1), _vm._v(" "), _c("b-button", {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }],
      attrs: {
        size: "sm",
        variant: "outline-danger",
        title: _vm.__("all_fields_will_be_translated_and_existing_content_will_be_overwritten"),
        disabled: _vm.loadingOverwrite
      },
      on: {
        click: function click($event) {
          return _vm.translateOverwrite(lang);
        }
      }
    }, [!_vm.loadingOverwrite ? _c("span", [_vm._v(_vm._s(_vm.__("translate_and_overwrite")))]) : _c("b-spinner", {
      attrs: {
        small: ""
      }
    })], 1), _vm._v(" "), _vm.translateSuccessMessage ? _c("div", {
      staticClass: "text-success mt-2 font-weight-bold"
    }, [_vm._v("\n              " + _vm._s(_vm.translateSuccessMessage) + "\n            ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), lang.is_default ? _c("div", {
      staticClass: "d-flex align-items-end mb-3"
    }, [_c("div", {
      staticClass: "form-group flex-grow-1 me-2"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("category_name")))]), _vm._v(" "), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.translations[lang.id].name,
        expression: "form.translations[lang.id].name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        required: "",
        placeholder: _vm.__("enter_category_name")
      },
      domProps: {
        value: _vm.form.translations[lang.id].name
      },
      on: {
        keyup: function keyup($event) {
          return _vm.createSlug(lang.id);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.form.translations[lang.id], "name", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group flex-grow-1"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("slug")))]), _vm._v(" "), _c("i", {
      staticClass: "text-danger"
    }, [_vm._v("*")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.slug,
        expression: "form.slug"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_slug"),
        required: ""
      },
      domProps: {
        value: _vm.form.slug
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.form, "slug", $event.target.value);
        }
      }
    })])]) : _vm._e(), _vm._v(" "), !lang.is_default ? _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("category_name")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.translations[lang.id].name,
        expression: "form.translations[lang.id].name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_category_name")
      },
      domProps: {
        value: _vm.form.translations[lang.id].name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.form.translations[lang.id], "name", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_title")))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.translations[lang.id].meta_title,
        expression: "form.translations[lang.id].meta_title"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: _vm.__("enter_meta_title")
      },
      domProps: {
        value: _vm.form.translations[lang.id].meta_title
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.form.translations[lang.id], "meta_title", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-6"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_keywords")))]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.translations[lang.id].meta_keywords,
        expression: "form.translations[lang.id].meta_keywords"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: _vm.__("enter_meta_keywords"),
        rows: "3"
      },
      domProps: {
        value: _vm.form.translations[lang.id].meta_keywords
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.form.translations[lang.id], "meta_keywords", $event.target.value);
        }
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-6"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", [_vm._v(_vm._s(_vm.__("meta_description")))]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.translations[lang.id].meta_description,
        expression: "form.translations[lang.id].meta_description"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: _vm.__("enter_meta_description"),
        rows: "3"
      },
      domProps: {
        value: _vm.form.translations[lang.id].meta_description
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.form.translations[lang.id], "meta_description", $event.target.value);
        }
      }
    })])])]), _vm._v(" "), lang.is_default ? _c("div", {
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
        value: _vm.form.status,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "status", $$v);
        },
        expression: "form.status"
      }
    })], 1)]) : _vm._e()]);
  }), 1), _vm._v(" "), _c("div", {
    staticClass: "form-group d-flex justify-content-end gap-2"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.create_new = false;
        _vm.resetForm();
      }
    }
  }, [_vm._v(_vm._s(_vm.__("cancel")))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit",
      disabled: _vm.isSubmitting
    }
  }, [_vm.isSubmitting ? _c("span", [_vm._v(_vm._s(_vm.__("saving")) + "...")]) : _c("span", [_vm._v(_vm._s(_vm.__("save")))])])])], 1)])], 1);
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

/***/ "./resources/js/views/Blogs/BlogCategories.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/Blogs/BlogCategories.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlogCategories_vue_vue_type_template_id_ac7e704a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogCategories.vue?vue&type=template&id=ac7e704a */ "./resources/js/views/Blogs/BlogCategories.vue?vue&type=template&id=ac7e704a");
/* harmony import */ var _BlogCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogCategories.vue?vue&type=script&lang=js */ "./resources/js/views/Blogs/BlogCategories.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogCategories_vue_vue_type_template_id_ac7e704a__WEBPACK_IMPORTED_MODULE_0__.render,
  _BlogCategories_vue_vue_type_template_id_ac7e704a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Blogs/BlogCategories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Blogs/BlogCategories.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Blogs/BlogCategories.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogCategories.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Blogs/BlogCategories.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Blogs/BlogCategories.vue?vue&type=template&id=ac7e704a":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Blogs/BlogCategories.vue?vue&type=template&id=ac7e704a ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCategories_vue_vue_type_template_id_ac7e704a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCategories_vue_vue_type_template_id_ac7e704a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCategories_vue_vue_type_template_id_ac7e704a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogCategories.vue?vue&type=template&id=ac7e704a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Blogs/BlogCategories.vue?vue&type=template&id=ac7e704a");


/***/ })

}]);