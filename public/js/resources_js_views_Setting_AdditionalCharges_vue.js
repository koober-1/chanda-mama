"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Setting_AdditionalCharges_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      additionalCharges: [],
      languages: [],
      activeLanguageTab: 0,
      isLoading: false,
      isLoadingLanguages: false,
      translateSuccessMessage: '',
      loadingEmpty: false,
      loadingOverwrite: false
    };
  },
  methods: {
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this = this;
      if (this.languages.length) {
        return Promise.resolve(this.languages);
      }
      this.isLoadingLanguages = true;
      return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.$apiUrl + '/active_languages').then(function (res) {
        _this.languages = res.data.data || [];
        var def = _this.languages.find(function (l) {
          return l.is_default;
        });
        if (def) _this.defaultLanguageId = def.id;
      })["catch"](function () {
        _this.languages = [];
      })["finally"](function () {
        _this.isLoadingLanguages = false;
      });
    },
    getAdditionalCharges: function getAdditionalCharges() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.$apiUrl + '/additional_charges').then(function (res) {
        var data = res.data.data;
        if (!Array.isArray(data)) {
          _this2.additionalCharges = [];
          return;
        }
        var languages = _this2.languages && _this2.languages.length ? _this2.languages : [{
          code: 'en',
          is_default: 1
        }];
        _this2.additionalCharges = data.map(function (charge) {
          var titleObject = {};
          if (_typeof(charge.title) === 'object' && charge.title !== null) {
            languages.forEach(function (lang) {
              titleObject[lang.code] = charge.title[lang.code] != null ? String(charge.title[lang.code]) : '';
            });
          } else {
            languages.forEach(function (lang) {
              titleObject[lang.code] = '';
            });
          }
          var amount = parseFloat(charge.amount);
          return {
            id: charge.id || null,
            title: titleObject,
            amount: isNaN(amount) ? 0 : amount,
            charge_type: charge.charge_type || 'amount',
            is_refundable: charge.is_refundable === true || charge.is_refundable === 1,
            is_active: charge.is_active !== false && charge.is_active !== 0,
            applicable_on: Array.isArray(charge.applicable_on) ? charge.applicable_on.filter(function (v) {
              return v !== 'pos';
            }) : ['order', 'self_pickup']
          };
        });
      })["catch"](function () {
        _this2.additionalCharges = [];
      });
    },
    addCharge: function addCharge() {
      var newCharge = {
        id: null,
        title: {},
        amount: 0,
        charge_type: 'amount',
        is_refundable: false,
        is_active: true,
        applicable_on: ['order', 'self_pickup']
      };
      this.languages.forEach(function (lang) {
        newCharge.title[lang.code] = '';
      });
      this.additionalCharges.push(newCharge);
    },
    removeCharge: function removeCharge(index) {
      var _this3 = this;
      this.$swal.fire({
        title: __('are_you_sure'),
        text: __('you_wont_be_able_to_revert_this'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: __('yes_delete_it'),
        cancelButtonText: __('cancel')
      }).then(function (result) {
        if (result.isConfirmed) {
          _this3.additionalCharges.splice(index, 1);
        }
      });
    },
    saveAdditionalCharges: function saveAdditionalCharges() {
      var _this4 = this;
      this.isLoading = true;
      var defaultLang = this.languages.find(function (l) {
        return l.is_default;
      });
      if (!defaultLang) {
        this.showError('Default language not configured');
        this.isLoading = false;
        return;
      }
      for (var i = 0; i < this.additionalCharges.length; i++) {
        var value = this.additionalCharges[i].title[defaultLang.code];
        if (!value || !value.trim()) {
          this.showError("".concat(__('charge_title'), " (default language) is required for charge #").concat(i + 1));
          this.isLoading = false;
          return;
        }
      }
      var payload = this.additionalCharges.map(function (charge) {
        var cleanTitle = {};
        _this4.languages.forEach(function (lang) {
          var value = charge.title[lang.code] || '';
          value = value.replace(/\r?\n|\r/g, ' ').replace(/\s+/g, ' ').trim();
          cleanTitle[lang.code] = value;
        });
        return {
          id: charge.id || null,
          title: cleanTitle,
          amount: charge.amount || 0,
          charge_type: charge.charge_type || 'amount',
          is_refundable: charge.is_refundable ? true : false,
          is_active: charge.is_active ? true : false,
          applicable_on: charge.applicable_on || ['order', 'self_pickup']
        };
      });
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(this.$apiUrl + '/additional_charges/save', {
        additional_charges: JSON.stringify(payload)
      }).then(function (res) {
        if (res.data.status === 1) {
          _this4.showMessage('success', res.data.message);
          _this4.getAdditionalCharges();
        } else {
          _this4.showError(res.data.message);
        }
        _this4.isLoading = false;
      })["catch"](function (err) {
        var _err$response;
        _this4.isLoading = false;
        _this4.showError(((_err$response = err.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.message) || err.message || __('something_went_wrong'));
      });
    },
    _translateAdditionalCharges: function _translateAdditionalCharges(emptyOnly) {
      var _this5 = this;
      var defaultLang = this.languages.find(function (l) {
        return l.is_default;
      });
      if (!defaultLang || !defaultLang.code) {
        this.showError(__('default_language_data_missing') || 'Default language not found');
        return Promise.reject();
      }
      var source = {};
      this.additionalCharges.forEach(function (charge, i) {
        source['charge_' + i + '_title'] = charge.title[defaultLang.code] || '';
      });
      if (Object.values(source).every(function (v) {
        return !v || !String(v).trim();
      })) {
        this.showError(__('default_language_data_missing') || 'Fill charge titles in default language first');
        return Promise.reject();
      }
      if (emptyOnly) {
        var hasEmptyField = false;
        var _iterator = _createForOfIteratorHelper(this.languages),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var lang = _step.value;
            if (lang.is_default) continue;
            for (var i = 0; i < this.additionalCharges.length; i++) {
              var charge = this.additionalCharges[i];
              var val = charge.title[lang.code];
              if (!val || String(val).trim() === '') {
                hasEmptyField = true;
                break;
              }
            }
            if (hasEmptyField) break;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (!hasEmptyField) {
          this.showError(__('translation_error_all_fields_filled') || 'All fields already have values. There is nothing to translate.');
          return Promise.reject();
        }
      }
      this.translateSuccessMessage = '';
      if (emptyOnly) this.loadingEmpty = true;else this.loadingOverwrite = true;
      var url = emptyOnly ? 'languages/translate-empty' : 'languages/translate-overwrite';
      return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(this.$apiUrl + '/' + url, {
        target_language: defaultLang.code,
        data: source
      }).then(function (res) {
        var allTranslations = res.data.data || {};
        _this5.languages.forEach(function (lang) {
          if (lang.is_default) return;
          var translated = allTranslations[lang.code];
          if (!translated) return;
          _this5.additionalCharges.forEach(function (charge, i) {
            var key = 'charge_' + i + '_title';
            var val = translated[key];
            if (val == null) return;
            if (emptyOnly && charge.title[lang.code]) return;
            _this5.$set(charge.title, lang.code, val);
          });
        });
        _this5.translateSuccessMessage = emptyOnly ? __('translation_completed_successfully') || 'Translation completed successfully' : __('translation_overwritten_successfully') || 'Translation overwritten successfully';
        setTimeout(function () {
          _this5.translateSuccessMessage = '';
        }, 5000);
      })["catch"](function (err) {
        var _err$response2;
        _this5.showError(((_err$response2 = err.response) === null || _err$response2 === void 0 || (_err$response2 = _err$response2.data) === null || _err$response2 === void 0 ? void 0 : _err$response2.message) || err.message || __('something_went_wrong'));
        throw err;
      })["finally"](function () {
        if (emptyOnly) _this5.loadingEmpty = false;else _this5.loadingOverwrite = false;
      });
    },
    translateEmptyAdditionalCharges: function translateEmptyAdditionalCharges(language) {
      if (!language || !language.is_default) return;
      this._translateAdditionalCharges(true);
    },
    translateOverwriteAdditionalCharges: function translateOverwriteAdditionalCharges(language) {
      if (!language || !language.is_default) return;
      this._translateAdditionalCharges(false);
    }
  },
  mounted: function mounted() {
    var _this6 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _this6.isLoading = true;
            _context.p = 1;
            _context.n = 2;
            return _this6.fetchActiveLanguages();
          case 2:
            _context.n = 3;
            return _this6.getAdditionalCharges();
          case 3:
            _context.p = 3;
            _this6.isLoading = false;
            return _context.f(3);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1,, 3, 4]]);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=template&id=f6e0b92c&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=template&id=f6e0b92c&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "page-title"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-6 order-md-1 order-last"
  }, [_c("h3", [_vm._v(_vm._s(_vm.__("additional_charge")))])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v(_vm._s(_vm.__("additional_charge")) + "\n                            ")])])])])])]), _vm._v(" "), _c("section", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.__("additional_charge")))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveAdditionalCharges.apply(null, arguments);
      }
    }
  }, [_c("b-tabs", {
    attrs: {
      lazy: ""
    },
    model: {
      value: _vm.activeLanguageTab,
      callback: function callback($$v) {
        _vm.activeLanguageTab = $$v;
      },
      expression: "activeLanguageTab"
    }
  }, _vm._l(_vm.languages, function (language) {
    return _c("b-tab", {
      key: language.id,
      scopedSlots: _vm._u([{
        key: "title",
        fn: function fn() {
          return [_c("span", {
            "class": {
              "text-primary font-weight-bold": language.is_default
            }
          }, [_vm._v("\n                                        " + _vm._s(language.name) + "\n                                    ")])];
        },
        proxy: true
      }], null, true)
    }, [_vm._v(" "), language.is_default && _vm.languages.length > 1 ? _c("div", {
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
        title: "Only empty fields will be translated.",
        disabled: _vm.loadingEmpty || _vm.loadingOverwrite
      },
      on: {
        click: function click($event) {
          return _vm.translateEmptyAdditionalCharges(language);
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
        title: "All fields will be translated and overwritten.",
        disabled: _vm.loadingEmpty || _vm.loadingOverwrite
      },
      on: {
        click: function click($event) {
          return _vm.translateOverwriteAdditionalCharges(language);
        }
      }
    }, [!_vm.loadingOverwrite ? _c("span", [_vm._v(_vm._s(_vm.__("translate_and_overwrite")))]) : _c("b-spinner", {
      attrs: {
        small: ""
      }
    })], 1), _vm._v(" "), _vm.translateSuccessMessage ? _c("div", {
      staticClass: "text-success mt-2 font-weight-bold"
    }, [_vm._v("\n                                        " + _vm._s(_vm.translateSuccessMessage))]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm._l(_vm.additionalCharges, function (charge, index) {
      return _c("div", {
        key: index,
        staticClass: "charge-card mb-3 p-3 border rounded"
      }, [_c("div", {
        staticClass: "row align-items-end"
      }, [_c("div", {
        staticClass: "col-md-4"
      }, [_c("div", {
        staticClass: "form-group mb-2"
      }, [_c("label", [_vm._v(_vm._s(_vm.__("charge_title")) + " "), language.is_default ? _c("span", {
        staticClass: "text-danger"
      }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: charge.title[language.code],
          expression: "charge.title[language.code]"
        }],
        staticClass: "form-control",
        attrs: {
          type: "text",
          placeholder: _vm.__("charge_title"),
          required: language.is_default ? true : undefined
        },
        domProps: {
          value: charge.title[language.code]
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(charge.title, language.code, $event.target.value);
          }
        }
      })])]), _vm._v(" "), language.is_default ? [_c("div", {
        staticClass: "col-md-2"
      }, [_c("div", {
        staticClass: "form-group mb-2"
      }, [_c("label", [_vm._v(_vm._s(_vm.__("charge_type")))]), _vm._v(" "), _c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: charge.charge_type,
          expression: "charge.charge_type"
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
            _vm.$set(charge, "charge_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }
        }
      }, [_c("option", {
        attrs: {
          value: "amount"
        }
      }, [_vm._v(_vm._s(_vm.__("amount")))]), _vm._v(" "), _c("option", {
        attrs: {
          value: "percentage"
        }
      }, [_vm._v(_vm._s(_vm.__("percentage")))])])])]), _vm._v(" "), _c("div", {
        staticClass: "col-md-2"
      }, [_c("div", {
        staticClass: "form-group mb-2"
      }, [_c("label", [_vm._v(_vm._s(charge.charge_type === "percentage" ? _vm.__("percentage") : _vm.__("charge_amount")))]), _vm._v(" "), _c("div", {
        staticClass: "input-group"
      }, [_c("span", {
        staticClass: "input-group-text"
      }, [_vm._v("\n                                                            " + _vm._s(charge.charge_type === "percentage" ? "%" : _vm.$currency) + "\n                                                        ")]), _vm._v(" "), _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: charge.amount,
          expression: "charge.amount"
        }],
        staticClass: "form-control",
        attrs: {
          type: "number",
          id: "charge_amount_" + index,
          min: "0",
          max: charge.charge_type === "percentage" ? 100 : undefined,
          step: "0.01",
          required: ""
        },
        domProps: {
          value: charge.amount
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(charge, "amount", $event.target.value);
          }
        }
      })])])]), _vm._v(" "), _c("div", {
        staticClass: "col-md-2"
      }, [_c("div", {
        staticClass: "form-group mb-2"
      }, [_c("label", [_vm._v(_vm._s(_vm.__("refundable")))]), _vm._v(" "), _c("div", {
        staticClass: "form-check form-switch mt-1"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: charge.is_refundable,
          expression: "charge.is_refundable"
        }],
        staticClass: "form-check-input",
        attrs: {
          type: "checkbox",
          id: "refundable_" + index
        },
        domProps: {
          checked: Array.isArray(charge.is_refundable) ? _vm._i(charge.is_refundable, null) > -1 : charge.is_refundable
        },
        on: {
          change: function change($event) {
            var $$a = charge.is_refundable,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && _vm.$set(charge, "is_refundable", $$a.concat([$$v]));
              } else {
                $$i > -1 && _vm.$set(charge, "is_refundable", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.$set(charge, "is_refundable", $$c);
            }
          }
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "form-check-label",
        attrs: {
          "for": "refundable_" + index
        }
      }, [_vm._v("\n                                                            " + _vm._s(charge.is_refundable ? _vm.__("yes") : _vm.__("no")) + "\n                                                        ")])])])]), _vm._v(" "), _c("div", {
        staticClass: "col-md-1"
      }, [_c("div", {
        staticClass: "form-group mb-2"
      }, [_c("label", [_vm._v(_vm._s(_vm.__("status")))]), _vm._v(" "), _c("div", {
        staticClass: "form-check form-switch mt-1"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: charge.is_active,
          expression: "charge.is_active"
        }],
        staticClass: "form-check-input",
        attrs: {
          type: "checkbox",
          id: "status_" + index
        },
        domProps: {
          checked: Array.isArray(charge.is_active) ? _vm._i(charge.is_active, null) > -1 : charge.is_active
        },
        on: {
          change: function change($event) {
            var $$a = charge.is_active,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && _vm.$set(charge, "is_active", $$a.concat([$$v]));
              } else {
                $$i > -1 && _vm.$set(charge, "is_active", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.$set(charge, "is_active", $$c);
            }
          }
        }
      })])])]), _vm._v(" "), _c("div", {
        staticClass: "col-md-1 d-flex align-items-end mb-2"
      }, [_vm.$can("additional_charges_delete") ? _c("button", {
        directives: [{
          name: "b-tooltip",
          rawName: "v-b-tooltip.hover",
          modifiers: {
            hover: true
          }
        }],
        staticClass: "figma-action-btn figma-delete-btn",
        attrs: {
          type: "button",
          title: _vm.__("delete")
        },
        on: {
          click: function click($event) {
            return _vm.removeCharge(index);
          }
        }
      }, [_c("base-icon", {
        attrs: {
          name: "Type=Default",
          hoverName: "Type=Hover",
          width: "24",
          height: "24"
        }
      })], 1) : _vm._e()])] : _vm._e()], 2), _vm._v(" "), language.is_default ? _c("div", {
        staticClass: "row mt-1"
      }, [_c("div", {
        staticClass: "col-12"
      }, [_c("label", {
        staticClass: "me-3"
      }, [_vm._v(_vm._s(_vm.__("applicable_on")) + ":")]), _vm._v(" "), _c("div", {
        staticClass: "form-check form-check-inline"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: charge.applicable_on,
          expression: "charge.applicable_on"
        }],
        staticClass: "form-check-input",
        attrs: {
          type: "checkbox",
          id: "type_order_" + index,
          value: "order"
        },
        domProps: {
          checked: Array.isArray(charge.applicable_on) ? _vm._i(charge.applicable_on, "order") > -1 : charge.applicable_on
        },
        on: {
          change: function change($event) {
            var $$a = charge.applicable_on,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = "order",
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && _vm.$set(charge, "applicable_on", $$a.concat([$$v]));
              } else {
                $$i > -1 && _vm.$set(charge, "applicable_on", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.$set(charge, "applicable_on", $$c);
            }
          }
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "form-check-label",
        attrs: {
          "for": "type_order_" + index
        }
      }, [_vm._v(_vm._s(_vm.__("order")))])]), _vm._v(" "), _c("div", {
        staticClass: "form-check form-check-inline"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: charge.applicable_on,
          expression: "charge.applicable_on"
        }],
        staticClass: "form-check-input",
        attrs: {
          type: "checkbox",
          id: "type_self_pickup_" + index,
          value: "self_pickup"
        },
        domProps: {
          checked: Array.isArray(charge.applicable_on) ? _vm._i(charge.applicable_on, "self_pickup") > -1 : charge.applicable_on
        },
        on: {
          change: function change($event) {
            var $$a = charge.applicable_on,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = "self_pickup",
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && _vm.$set(charge, "applicable_on", $$a.concat([$$v]));
              } else {
                $$i > -1 && _vm.$set(charge, "applicable_on", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.$set(charge, "applicable_on", $$c);
            }
          }
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "form-check-label",
        attrs: {
          "for": "type_self_pickup_" + index
        }
      }, [_vm._v(_vm._s(_vm.__("self_pickup")))])])])]) : _vm._e()]);
    })], 2);
  }), 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3 d-flex justify-content-end"
  }, [_vm.$can("additional_charges_create") ? _c("button", {
    staticClass: "btn btn-success",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.addCharge
    }
  }, [_vm._v(_vm._s(_vm.__("add_charge")))]) : _vm._e()]), _vm._v(" "), _vm.$can("additional_charges_update") ? _c("b-button", {
    staticClass: "mt-3",
    attrs: {
      type: "submit",
      variant: "primary",
      disabled: _vm.isLoading
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.__("update")) + "\n                            "), _vm.isLoading ? _c("b-spinner", {
    attrs: {
      small: ""
    }
  }) : _vm._e()], 1) : _vm._e()], 1)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.charge-card[data-v-f6e0b92c] {\r\n    background: var(--bs-card-bg, #fafbfc);\r\n    border: 1px solid var(--bs-border-color, #dee2e6) !important;\r\n    transition: background-color 0.3s ease;\n}\nbody.theme-dark .charge-card[data-v-f6e0b92c] {\r\n    background: #1e293b !important;\r\n    border-color: #334155 !important;\n}\n.charge-card[data-v-f6e0b92c]:hover {\r\n    background: #f0f4f8;\n}\nbody.theme-dark .charge-card[data-v-f6e0b92c]:hover {\r\n    background: #232f42 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdditionalCharges_vue_vue_type_style_index_0_id_f6e0b92c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdditionalCharges_vue_vue_type_style_index_0_id_f6e0b92c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdditionalCharges_vue_vue_type_style_index_0_id_f6e0b92c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Setting/AdditionalCharges.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/Setting/AdditionalCharges.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdditionalCharges_vue_vue_type_template_id_f6e0b92c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdditionalCharges.vue?vue&type=template&id=f6e0b92c&scoped=true */ "./resources/js/views/Setting/AdditionalCharges.vue?vue&type=template&id=f6e0b92c&scoped=true");
/* harmony import */ var _AdditionalCharges_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdditionalCharges.vue?vue&type=script&lang=js */ "./resources/js/views/Setting/AdditionalCharges.vue?vue&type=script&lang=js");
/* harmony import */ var _AdditionalCharges_vue_vue_type_style_index_0_id_f6e0b92c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css */ "./resources/js/views/Setting/AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdditionalCharges_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdditionalCharges_vue_vue_type_template_id_f6e0b92c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AdditionalCharges_vue_vue_type_template_id_f6e0b92c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f6e0b92c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Setting/AdditionalCharges.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Setting/AdditionalCharges.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Setting/AdditionalCharges.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdditionalCharges_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdditionalCharges.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdditionalCharges_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Setting/AdditionalCharges.vue?vue&type=template&id=f6e0b92c&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/Setting/AdditionalCharges.vue?vue&type=template&id=f6e0b92c&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdditionalCharges_vue_vue_type_template_id_f6e0b92c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdditionalCharges_vue_vue_type_template_id_f6e0b92c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdditionalCharges_vue_vue_type_template_id_f6e0b92c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdditionalCharges.vue?vue&type=template&id=f6e0b92c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=template&id=f6e0b92c&scoped=true");


/***/ }),

/***/ "./resources/js/views/Setting/AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/views/Setting/AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdditionalCharges_vue_vue_type_style_index_0_id_f6e0b92c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/AdditionalCharges.vue?vue&type=style&index=0&id=f6e0b92c&scoped=true&lang=css");


/***/ })

}]);