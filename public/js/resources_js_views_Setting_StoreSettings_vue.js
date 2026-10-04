(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Setting_StoreSettings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Auth.js */ "./resources/js/Auth.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datatable */ "./node_modules/vuejs-datatable/dist/vuejs-datatable.esm.js");
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_Country_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../config/Country.json */ "./config/Country.json");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Multiselect: (vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default())
  },
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty({
      addressTranslations: {
        store_address: {}
      },
      storeTranslations: {
        app_name: {},
        copyright_details: {}
      },
      activeTab: 'store_setting',
      appTranslations: {
        app_mode_customer_remark: {},
        app_mode_seller_remark: {},
        app_mode_delivery_boy_remark: {}
      },
      isLoadingLanguages: false,
      languages: [],
      defaultLanguageId: null,
      activeLanguageTab: 0,
      translations: {},
      login_user: _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].user,
      isLoading: false,
      translateSuccessMessage: '',
      loadingEmpty: false,
      loadingOverwrite: false,
      city: "",
      cities: [],
      store_settings: {},
      countryCodeOptions: _config_Country_json__WEBPACK_IMPORTED_MODULE_5__.map(function (c) {
        return {
          value: c.dial_code,
          label: "".concat(c.name, " (").concat(c.dial_code, ")"),
          code: c.code
        };
      }),
      login_settings: {
        phone_login: 0,
        phone_auth_otp: 0,
        phone_auth_password: 0,
        firebase_authentication: 0,
        custom_sms_gateway_otp_based: 0
      },
      refer_earn_settings: {},
      record: null,
      timezone_options: null,
      currency_codes: null,
      logo_url: "",
      logo_name: "",
      panel_login_background_img_url: "",
      panel_login_background_img_name: "",
      fssai_lic_img_url: "",
      fssai_lic_img_name: "",
      isSendingTestEmail: false,
      validationCategoryError: null,
      validationBrandError: null,
      validationSellerError: null,
      validationCountryError: null,
      mobilevalidationError: null,
      Logoerror: null,
      Panel_login_background_imgerror: null,
      Fssaierror: null,
      tabs: [__('store_setting'), __('address_setting'), __('other_setting'), __('delivery_boy_setting'), __('app_setting'), __('frontend_home_setting'), __('smtp_mail_setting'), __('third_party_api_credentials'), __('seller_setting'), __('login_setting'), __('cart_setting'), __('refer_earn_setting')]
    }, "activeTab", __('store_setting')), "dateFormatDefs", [{
      value: 'd-m-Y',
      labelPrefix: 'DD-MM-YYYY'
    }, {
      value: 'm-d-Y',
      labelPrefix: 'MM-DD-YYYY'
    }, {
      value: 'Y-m-d',
      labelPrefix: 'YYYY-MM-DD'
    }, {
      value: 'd/m/Y',
      labelPrefix: 'DD/MM/YYYY'
    }, {
      value: 'm/d/Y',
      labelPrefix: 'MM/DD/YYYY'
    }, {
      value: 'd M Y',
      labelPrefix: 'DD Mon YYYY'
    }, {
      value: 'M d, Y',
      labelPrefix: 'Mon DD, YYYY'
    }]), "timeFormatDefs", [{
      value: 'H:i',
      labelPrefix: '24-hour'
    }, {
      value: 'h:i A',
      labelPrefix: '12-hour'
    }, {
      value: 'h:i a',
      labelPrefix: '12-hour'
    }, {
      value: 'H:i:s',
      labelPrefix: '24-hour with seconds'
    }, {
      value: 'h:i:s A',
      labelPrefix: '12-hour with seconds'
    }]);
  },
  computed: {
    // Hide third party credential values in demo mode, except for auth user id 1
    shouldHideThirdPartyValues: function shouldHideThirdPartyValues() {
      return this.$isDemo == 1 && (!this.login_user || this.login_user.id !== 1);
    },
    // Date format options with current date preview
    dateFormatOptions: function dateFormatOptions() {
      var now = new Date();
      var pad = function pad(n) {
        return String(n).padStart(2, '0');
      };
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var d = pad(now.getDate());
      var m = pad(now.getMonth() + 1);
      var Y = now.getFullYear();
      var M = months[now.getMonth()];
      var formatters = {
        'd-m-Y': "".concat(d, "-").concat(m, "-").concat(Y),
        'm-d-Y': "".concat(m, "-").concat(d, "-").concat(Y),
        'Y-m-d': "".concat(Y, "-").concat(m, "-").concat(d),
        'd/m/Y': "".concat(d, "/").concat(m, "/").concat(Y),
        'm/d/Y': "".concat(m, "/").concat(d, "/").concat(Y),
        'd M Y': "".concat(d, " ").concat(M, " ").concat(Y),
        'M d, Y': "".concat(M, " ").concat(d, ", ").concat(Y)
      };
      return this.dateFormatDefs.map(function (opt) {
        return {
          value: opt.value,
          label: "".concat(opt.labelPrefix, " (").concat(formatters[opt.value], ")")
        };
      });
    },
    // Time format options with current time preview
    timeFormatOptions: function timeFormatOptions() {
      var now = new Date();
      var pad = function pad(n) {
        return String(n).padStart(2, '0');
      };
      var h24 = now.getHours();
      var h12 = h24 % 12 || 12;
      var i = pad(now.getMinutes());
      var s = pad(now.getSeconds());
      var A = h24 >= 12 ? 'PM' : 'AM';
      var a = h24 >= 12 ? 'pm' : 'am';
      var formatters = {
        'H:i': "".concat(pad(h24), ":").concat(i),
        'h:i A': "".concat(pad(h12), ":").concat(i, " ").concat(A),
        'h:i a': "".concat(pad(h12), ":").concat(i, " ").concat(a),
        'H:i:s': "".concat(pad(h24), ":").concat(i, ":").concat(s),
        'h:i:s A': "".concat(pad(h12), ":").concat(i, ":").concat(s, " ").concat(A)
      };
      return this.timeFormatDefs.map(function (opt) {
        return {
          value: opt.value,
          label: "".concat(opt.labelPrefix, " (").concat(formatters[opt.value], ")")
        };
      });
    }
  },
  watch: {
    'login_settings.phone_auth_otp': function login_settingsPhone_auth_otp(newValue) {
      if (newValue == 1) {
        this.login_settings.phone_auth_password = 0;
        this.login_settings.phone_auth_otp = 1;
      }
    },
    'login_settings.phone_auth_password': function login_settingsPhone_auth_password(newValue) {
      if (newValue == 1) {
        this.login_settings.phone_auth_otp = 0;
        this.login_settings.phone_auth_password = 1;
      }
    },
    'login_settings.firebase_authentication': function login_settingsFirebase_authentication(newValue) {
      if (newValue == 1) {
        this.login_settings.custom_sms_gateway_otp_based = 0;
        this.login_settings.firebase_authentication = 1;
      }
    },
    'login_settings.custom_sms_gateway_otp_based': function login_settingsCustom_sms_gateway_otp_based(newValue) {
      if (newValue == 1) {
        this.login_settings.firebase_authentication = 0;
        this.login_settings.custom_sms_gateway_otp_based = 1;
      }
    },
    'store_settings.google_place_api_key': function store_settingsGoogle_place_api_key(newValue) {
      this.store_settings.apiKey = newValue;
    },
    'store_settings.google_map_api_key': function store_settingsGoogle_map_api_key(newValue) {
      this.store_settings.googleMapApiKey = newValue;
    },
    'store_settings.one_seller_cart': function store_settingsOne_seller_cart(newValue) {
      if (newValue == 0) {
        this.store_settings.self_pickup_mode = 0;
      }
    }
  },
  created: function created() {
    this.bootstrap();
  },
  methods: {
    onCountryCodeChange: function onCountryCodeChange() {
      var _this = this;
      var selected = this.countryCodeOptions.find(function (opt) {
        return opt.value === _this.store_settings.country_code;
      });
      this.store_settings.nation_code = selected ? selected.code : '';
    },
    onLogoUpload: function onLogoUpload(event) {
      var file = event.target.files[0];
      if (!file) return;
      this.logo_file = file; // <-- ADD THIS
      this.logo_name = file.name;
      this.logo_url = URL.createObjectURL(file);
      this.Logoerror = '';
    },
    onFssaiUpload: function onFssaiUpload(event) {
      var file = event.target.files[0];
      if (!file) return;
      this.fssai_lic_img_file = file;
      this.fssai_lic_img_name = file.name;
      this.fssai_lic_img_url = URL.createObjectURL(file);
      this.Fssaierror = '';
    },
    onPanelLoginBgUpload: function onPanelLoginBgUpload(event) {
      var file = event.target.files[0];
      if (!file) return;
      this.panel_login_background_img_file = file;
      this.panel_login_background_img_name = file.name;
      this.panel_login_background_img_url = URL.createObjectURL(file);
      this.Panel_login_background_imgerror = '';
    },
    bootstrap: function bootstrap() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _this2.isLoading = true;
              _context.n = 1;
              return _this2.fetchActiveLanguages();
            case 1:
              _context.n = 2;
              return _this2.getCities();
            case 2:
              _context.n = 3;
              return _this2.getStoreSetting();
            case 3:
              _context.p = 3;
              _this2.isLoading = false;
              return _context.f(3);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0,, 3, 4]]);
      }))();
    },
    safeJson: function safeJson(value) {
      if (!value) return null;
      try {
        var parsed = JSON.parse(value);
        return _typeof(parsed) === 'object' ? parsed : null;
      } catch (e) {
        return null; // not JSON
      }
    },
    dropFile: function dropFile(event) {
      event.preventDefault();
      this.$refs.logo.files = event.dataTransfer.files;
      this.handleLogoUpload();
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    dropFileFssaiLicImg: function dropFileFssaiLicImg(event) {
      event.preventDefault();
      this.$refs.fssai_lic_img.files = event.dataTransfer.files;
      this.handleFssaiLicImgUpload(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    dropFilePanelLoginackground_imgImg: function dropFilePanelLoginackground_imgImg(event) {
      event.preventDefault();
      this.$refs.panel_login_background_img.files = event.dataTransfer.files;
      this.handlePanelLoginBackgroundImgUpload(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    handleLogoUpload: function handleLogoUpload() {
      var file = this.$refs.logo.files[0];

      // Reset previous error message
      this.error = null;

      // Check if a file was selected
      if (!file) return;

      // Perform image validation
      var validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        this.Logoerror = "Invalid file type. Please upload a JPEG, PNG, JPG,  GIF, WEBP or SVG image.";
        return;
      }
      var maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        this.Logoerror = "File size exceeds the maximum allowed limit (2MB).";
        return;
      }

      // Create a URL for the uploaded image and display it
      this.store_settings.logo = this.$refs.logo.files[0];
      this.logo_url = URL.createObjectURL(this.store_settings.logo);
      this.logo_name = this.store_settings.logo.name;
    },
    handleFssaiLicImgUpload: function handleFssaiLicImgUpload() {
      var file = this.$refs.fssai_lic_img.files[0];

      // Reset previous error message
      this.error = null;

      // Check if a file was selected
      if (!file) return;

      // Perform image validation
      var validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        this.Fssaierror = "Invalid file type. Please upload a JPEG, PNG, JPG,  GIF, WEBP or SVG image.";
        return;
      }
      var maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        this.Fssaierror = "File size exceeds the maximum allowed limit (2MB).";
        return;
      }
      this.store_settings.fssai_lic_img = this.$refs.fssai_lic_img.files[0];
      this.fssai_lic_img_url = URL.createObjectURL(this.store_settings.fssai_lic_img);
      this.fssai_lic_img_name = this.store_settings.fssai_lic_img.name;
    },
    handlePanelLoginBackgroundImgUpload: function handlePanelLoginBackgroundImgUpload() {
      var file = this.$refs.panel_login_background_img.files[0];

      // Reset previous error message
      this.error = null;

      // Check if a file was selected
      if (!file) return;

      // Perform image validation
      var validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        this.Panel_login_background_imgerror = "Invalid file type. Please upload a JPEG, PNG, JPG,  GIF, WEBP or SVG image.";
        return;
      }
      var maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        this.Panel_login_background_imgerror = "File size exceeds the maximum allowed limit (2MB).";
        return;
      }

      // Create a URL for the uploaded image and display it
      this.store_settings.panel_login_background_img = this.$refs.panel_login_background_img.files[0];
      this.panel_login_background_img_url = URL.createObjectURL(this.store_settings.panel_login_background_img);
      this.panel_login_background_img_name = this.store_settings.panel_login_background_img.name;
    },
    validateInput: function validateInput() {
      var count_category_section_in_homepage = this.store_settings.count_category_section_in_homepage;
      if (count_category_section_in_homepage < 1) {
        this.validationCategoryError = "Category count must be greater than 0.";
      } else {
        this.validationCategoryError = null;
      }
      var count_brand_section_in_homepage = this.store_settings.count_brand_section_in_homepage;
      if (count_brand_section_in_homepage < 1) {
        this.validationBrandError = "Brand count must be greater than 0.";
      } else {
        this.validationBrandError = null;
      }
      var count_seller_section_in_homepage = this.store_settings.count_seller_section_in_homepage;
      if (count_seller_section_in_homepage < 1) {
        this.validationSellerError = "Seller count must be greater than 0.";
      } else {
        this.validationSellerError = null;
      }
      var count_country_section_in_homepage = this.store_settings.count_country_section_in_homepage;
      if (count_country_section_in_homepage < 1) {
        this.validationCountryError = "Country count must be greater than 0.";
      } else {
        this.validationCountryError = null;
      }
    },
    validateMobileNumber: function validateMobileNumber() {
      var mobileNumber = this.store_settings.support_number;
      if (!/^\d{1,16}$/.test(mobileNumber)) {
        this.mobilevalidationError = "Support Number must be maximum 16 digits numbers.";
        this.store_settings.support_number = null;
      } else {
        this.mobilevalidationError = null;
      }
    },
    getCities: function getCities() {
      var _this3 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(this.$apiUrl + '/cities').then(function (response) {
        _this3.isLoading = false;
        var data = response.data;
        _this3.cities = data.data.cities || [];
        if (_this3.deliveryBoys.id) {
          _this3.city = _this3.cities.filter(function (item) {
            return item.id === _this3.record.city_id;
          });
        }
      })["catch"](function (error) {
        _this3.isLoading = false;
        if (error.request.statusText) {
          _this3.showError(error.request.statusText);
        } else if (error.message) {
          _this3.showError(error.message);
        } else {
          _this3.showError("Something went wrong!");
        }
      });
    },
    // Get selected city id: city can be object (from multiselect) or array (from getStoreSetting filter)
    setCityId: function setCityId() {
      var c = Array.isArray(this.city) ? this.city[0] : this.city;
      this.store_settings.default_city_id = c && c.id != null ? c.id : 0;
    },
    getStoreSetting: function getStoreSetting() {
      var _this4 = this;
      var url = this.$apiUrl + '/store_settings';
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url).then(function (response) {
        _this4.store_settings = response.data.data.store_settingsObject;
        _this4.timezone_options = response.data.data.timezone_options;
        _this4.currency_codes = response.data.data.currency_code.country;
        _this4.record = response.data.data.store_settings;
        _this4.record.map(function (item, index) {
          if (item.value === '0' || item.value === '1') {
            _this4.store_settings[item.variable] = item.value === '0' ? 0 : 1;
          } else {
            _this4.store_settings[item.variable] = item.value;
          }
        });

        // Sync nation_code from country_code on load
        if (_this4.store_settings.country_code && !_this4.store_settings.nation_code) {
          var _matched = _this4.countryCodeOptions.find(function (opt) {
            return opt.value === _this4.store_settings.country_code;
          });
          if (_matched) {
            _this4.store_settings.nation_code = _matched.code;
          }
        }
        _this4.login_record = response.data.data.login_settings;
        // Guard: login_record must be an array before mapping
        if (Array.isArray(_this4.login_record)) {
          _this4.login_record.map(function (item, index) {
            if (item.value === '0' || item.value === '1') {
              _this4.login_settings[item.variable] = item.value === '0' ? 0 : 1;
            } else {
              _this4.login_settings[item.variable] = item.value;
            }
          });
        }
        _this4.refer_earn_record = response.data.data.refer_earn_settings;
        // Guard: refer_earn_record must be an array before mapping
        if (Array.isArray(_this4.refer_earn_record)) {
          _this4.refer_earn_record.map(function (item, index) {
            if (item.value === '0' || item.value === '1') {
              _this4.refer_earn_settings[item.variable] = item.value === '0' ? 0 : 1;
            } else {
              _this4.refer_earn_settings[item.variable] = item.value;
            }
          });
        }

        // Single object for multiselect; filter() returned array and broke setCityId (array.id is undefined)
        var matched = _this4.cities.find(function (item) {
          return item.id === parseInt(_this4.store_settings.default_city_id, 10);
        });
        _this4.city = matched || null;
        if (_this4.store_settings.logo != "") {
          _this4.logo_url = _this4.$storageUrl + _this4.store_settings.logo;
        } else {
          _this4.logo_url = _this4.$baseUrl + '/images/logo.png';
        }
        if (_this4.store_settings.fssai_lic_img != "") {
          _this4.fssai_lic_img_url = _this4.$storageUrl + _this4.store_settings.fssai_lic_img;
        } else {
          _this4.fssai_lic_img_url = _this4.$baseUrl + '/images/fssai_lic_img.png';
        }
        if (_this4.store_settings.panel_login_background_img != "") {
          _this4.panel_login_background_img_url = _this4.$storageUrl + _this4.store_settings.panel_login_background_img;
        } else {
          _this4.panel_login_background_img_url = _this4.$baseUrl + '/images/panel_login_background_img.png';
        }
        // Guard against null/undefined before replace — a crash here aborts the whole callback
        var copyrightRaw = _this4.store_settings.copyright_details ? _this4.store_settings.copyright_details.replace(/<br\s*\/?>/g, '\n') : '';
        var secretKey = "ewgrrtoecaemr";

        // Decrypt google_place_api_key (wrap in try/catch — throws if not valid AES encrypted)
        try {
          if (_this4.store_settings.google_place_api_key) {
            var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_4___default().AES.decrypt(_this4.store_settings.google_place_api_key, secretKey);
            var decrypted = bytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_4___default().enc).Utf8);
            if (decrypted) _this4.store_settings.google_place_api_key = decrypted;
          }
        } catch (e) {
          console.warn('google_place_api_key decrypt failed:', e);
        }

        // Decrypt google_map_api_key
        try {
          if (_this4.store_settings.google_map_api_key) {
            var mapBytes = crypto_js__WEBPACK_IMPORTED_MODULE_4___default().AES.decrypt(_this4.store_settings.google_map_api_key, secretKey);
            var decryptedMap = mapBytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_4___default().enc).Utf8);
            if (decryptedMap) _this4.store_settings.google_map_api_key = decryptedMap;
          }
        } catch (e) {
          console.warn('google_map_api_key decrypt failed:', e);
        }
        var copyrightJson = _this4.safeJson(copyrightRaw);
        if (Array.isArray(_this4.languages) && _this4.languages.length) {
          _this4.languages.forEach(function (lang) {
            if (copyrightJson) {
              // Apply br-replace per language value (safe — applied to text, not raw JSON)
              var val = (copyrightJson[lang.code] || '').replace(/<br\s*\/?>/g, '\n');
              _this4.$set(_this4.storeTranslations.copyright_details, lang.code, val);
            } else {
              _this4.$set(_this4.storeTranslations.copyright_details, lang.code, lang.is_default ? copyrightRaw || '' : '');
            }
          });
        }
        _this4.addressTranslations.store_address = {};
        var storeAddressRaw = _this4.store_settings.store_address || '';
        var storeAddressJson = _this4.safeJson(storeAddressRaw);
        if (Array.isArray(_this4.languages) && _this4.languages.length) {
          _this4.languages.forEach(function (lang) {
            if (storeAddressJson) {
              _this4.$set(_this4.addressTranslations.store_address, lang.code, storeAddressJson[lang.code] || '');
            } else {
              _this4.$set(_this4.addressTranslations.store_address, lang.code, lang.is_default ? storeAddressRaw || '' : '');
            }
          });
        }
        var remarkFields = ['app_mode_customer_remark', 'app_mode_seller_remark', 'app_mode_delivery_boy_remark'];
        if (Array.isArray(_this4.languages) && _this4.languages.length) {
          remarkFields.forEach(function (field) {
            // Always initialize object
            if (!_this4.appTranslations[field]) {
              _this4.$set(_this4.appTranslations, field, {});
            }
            var rawValue = _this4.store_settings[field] || '';
            var jsonValue = _this4.safeJson(rawValue);
            _this4.languages.forEach(function (lang) {
              if (jsonValue) {
                _this4.$set(_this4.appTranslations[field], lang.code, jsonValue[lang.code] || '');
              } else {
                _this4.$set(_this4.appTranslations[field], lang.code, lang.is_default ? rawValue || '' : '');
              }
            });
          });
        }
      });
    },
    saveAppSetting: function saveAppSetting() {
      var _this5 = this;
      this.isLoading = true;
      var formData = new FormData();

      // Normal fields
      var normalFields = ['app_mode_customer', 'app_mode_seller', 'app_mode_delivery_boy', 'playstore_url', 'appstore_url', 'is_version_system_on', 'required_force_update', 'current_version', 'ios_is_version_system_on', 'ios_required_force_update', 'ios_current_version'];
      normalFields.forEach(function (field) {
        if (_this5.store_settings[field] !== undefined) {
          formData.append(field, _this5.store_settings[field]);
        }
      });

      // Default language required check
      var defaultLang = this.languages.find(function (lang) {
        return lang.is_default;
      });

      // Remark is only required when its corresponding toggle is ON
      var conditionalRequiredFields = [{
        key: 'app_mode_customer_remark',
        label: 'Customer Remark',
        toggle: 'app_mode_customer'
      }, {
        key: 'app_mode_seller_remark',
        label: 'Seller Remark',
        toggle: 'app_mode_seller'
      }, {
        key: 'app_mode_delivery_boy_remark',
        label: 'Delivery Boy Remark',
        toggle: 'app_mode_delivery_boy'
      }];
      for (var _i = 0, _conditionalRequiredF = conditionalRequiredFields; _i < _conditionalRequiredF.length; _i++) {
        var _this$appTranslations;
        var field = _conditionalRequiredF[_i];
        // Skip validation if the toggle is off
        if (this.store_settings[field.toggle] != 1) continue;
        var value = (_this$appTranslations = this.appTranslations[field.key]) === null || _this$appTranslations === void 0 ? void 0 : _this$appTranslations[defaultLang.code];
        if (!value || !value.trim()) {
          this.showError("".concat(field.label, " (default language) is required!"));
          this.isLoading = false;
          return;
        }
      }

      // Helper to clean multilingual content (default required, others optional)
      var cleanLangObject = function cleanLangObject() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var cleaned = {};
        Object.keys(obj).forEach(function (lang) {
          var value = obj[lang];
          if (typeof value === 'string') {
            value = value.replace(/\r?\n|\r/g, ' ').replace(/\s+/g, ' ').trim();
          }
          // Default language must exist, others can be empty
          cleaned[lang] = value || '';
        });
        return cleaned;
      };

      // Append multilingual fields
      formData.append('app_mode_customer_remark', JSON.stringify(cleanLangObject(this.appTranslations.app_mode_customer_remark)));
      formData.append('app_mode_seller_remark', JSON.stringify(cleanLangObject(this.appTranslations.app_mode_seller_remark)));
      formData.append('app_mode_delivery_boy_remark', JSON.stringify(cleanLangObject(this.appTranslations.app_mode_delivery_boy_remark)));
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(this.$apiUrl + '/store_settings/save_app_setting', formData).then(function (res) {
        if (res.data.status === 1) {
          _this5.showMessage('success', res.data.message);
          _this5.getStoreSetting();
          setTimeout(function () {
            _this5.$swal.close();
            _this5.isLoading = false;
            _this5.$router.push({
              path: '/store_settings'
            });
          }, 2000);
        } else {
          _this5.showError(res.data.message);
          _this5.isLoading = false;
        }
      })["catch"](function (error) {
        var _error$response;
        _this5.isLoading = false;
        if (error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && (_error$response = _error$response.data) !== null && _error$response !== void 0 && _error$response.message) {
          _this5.showError(error.response.data.message);
        } else if (error.message) {
          _this5.showError(error.message);
        } else {
          _this5.showError(__('something_went_wrong'));
        }
      });
    },
    // Save other settings

    saveOtherSetting: function saveOtherSetting() {
      var _this6 = this;
      this.isLoading = true;
      var formData = new FormData();

      // Add only other settings (includes date/time format for global display)
      var otherFields = ['max_cart_items_count', 'min_order_amount', 'low_stock_limit', 'product_rating', 'few_quantity_left_alert', 'date_format', 'time_format', 'country_code', 'nation_code', 'is_delivery_charge_refundable'];
      otherFields.forEach(function (field) {
        if (_this6.store_settings[field] !== undefined) {
          formData.append(field, _this6.store_settings[field]);
        }
      });
      var url = this.$apiUrl + '/store_settings/save_other_setting';
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, formData).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this6.showMessage("success", data.message);
          _this6.getStoreSetting();
          setTimeout(function () {
            vm.$swal.close();
            vm.isLoading = false;
            vm.$router.push({
              path: '/store_settings'
            });
          }, 2000);
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        _this6.isLoading = false;
        if (error.request.statusText) {
          _this6.showError(error.request.statusText);
        } else if (error.message) {
          _this6.showError(error.message);
        } else {
          _this6.showError("Something went wrong!");
        }
        vm.isLoading = false;
      });
    },
    // Save delivery boy settings
    saveDeliveryBoySetting: function saveDeliveryBoySetting() {
      var _this7 = this;
      this.isLoading = true;
      var formData = new FormData();

      // Add only delivery boy settings
      var deliveryBoyFields = ['delivery_boy_bonus_settings', 'delivery_boy_bonus_type', 'delivery_boy_bonus_percentage', 'delivery_boy_bonus_min_amount', 'delivery_boy_bonus_max_amount', 'generate_otp'];
      deliveryBoyFields.forEach(function (field) {
        if (_this7.store_settings[field] !== undefined) {
          formData.append(field, _this7.store_settings[field]);
        }
      });
      var url = this.$apiUrl + '/store_settings/save_delivery_boy_setting';
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, formData).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this7.showMessage("success", data.message);
          _this7.getStoreSetting();
          setTimeout(function () {
            vm.$swal.close();
            vm.isLoading = false;
            vm.$router.push({
              path: '/store_settings'
            });
          }, 2000);
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        _this7.isLoading = false;
        if (error.request.statusText) {
          _this7.showError(error.request.statusText);
        } else if (error.message) {
          _this7.showError(error.message);
        } else {
          _this7.showError("Something went wrong!");
        }
        vm.isLoading = false;
      });
    },
    // Save app settings
    saveStoreBasicSetting: function saveStoreBasicSetting() {
      var _this8 = this;
      this.isLoading = true;
      var formData = new FormData();

      // Normal fields (default only)
      var normalFields = ['app_name', 'system_configurations', 'system_timezone_gmt', 'system_configurations_id', 'support_number', 'support_email'];
      normalFields.forEach(function (field) {
        if (_this8.store_settings[field] !== undefined) {
          formData.append(field, _this8.store_settings[field]);
        }
      });

      // Default language required check
      var defaultLang = this.languages.find(function (lang) {
        return lang.is_default;
      });
      if (!this.storeTranslations.copyright_details[defaultLang.code]) {
        this.showError('Copyright Details (default language) are required!');
        this.isLoading = false;
        return;
      }

      // Multilingual fields
      var cleanLangObject = function cleanLangObject() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var cleaned = {};
        Object.keys(obj).forEach(function (lang) {
          var value = obj[lang];
          if (typeof value === 'string') {
            value = value.replace(/\r?\n|\r/g, ' ').replace(/\s+/g, ' ').trim();
          }
          cleaned[lang] = value || '';
        });
        return cleaned;
      };

      //   formData.append('app_name', JSON.stringify(cleanLangObject(this.storeTranslations.app_name)));
      formData.append('copyright_details', JSON.stringify(cleanLangObject(this.storeTranslations.copyright_details)));

      // Files (default language only)
      if (this.logo_file) formData.append('logo', this.logo_file);
      if (this.fssai_lic_img_file) formData.append('fssai_lic_img', this.fssai_lic_img_file);
      if (this.panel_login_background_img_file) formData.append('panel_login_background_img', this.panel_login_background_img_file);
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(this.$apiUrl + '/store_settings/save_store_basic_setting', formData).then(function (res) {
        if (res.data.status === 1) {
          _this8.showMessage('success', res.data.message);
          _this8.getStoreSetting();
        } else {
          _this8.showError(res.data.message);
        }
        _this8.isLoading = false;
      })["catch"](function (err) {
        var _err$response;
        _this8.isLoading = false;
        _this8.showError((err === null || err === void 0 || (_err$response = err.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.message) || err.message || __('something_went_wrong'));
      });
    },
    // Save address settings (store address, map, currency, timezone, default city)
    saveAddressSetting: function saveAddressSetting() {
      var _this9 = this;
      this.isLoading = true;
      var vm = this;

      // Ensure default_city_id is set from multiselect before submit
      this.setCityId();
      var formData = new FormData();

      // Translatable: store_address as JSON
      var cleanLangObject = function cleanLangObject() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var cleaned = {};
        Object.keys(obj).forEach(function (lang) {
          var value = obj[lang];
          if (typeof value === 'string') {
            value = value.replace(/\r?\n|\r/g, ' ').replace(/\s+/g, ' ').trim();
          }
          cleaned[lang] = value || '';
        });
        return cleaned;
      };
      formData.append('store_address', JSON.stringify(cleanLangObject(this.addressTranslations.store_address)));

      // Non-translatable address fields
      var addressFields = ['map_latitude', 'map_longitude', 'currency', 'currency_code', 'decimal_point', 'system_timezone', 'default_city_id'];
      addressFields.forEach(function (field) {
        if (_this9.store_settings[field] !== undefined) {
          formData.append(field, _this9.store_settings[field]);
        }
      });
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(this.$apiUrl + '/store_settings/save_address_setting', formData).then(function (res) {
        if (res.data.status === 1) {
          _this9.showMessage('success', res.data.message);
          _this9.getStoreSetting();
        } else {
          _this9.showError(res.data.message);
        }
        vm.isLoading = false;
      })["catch"](function (err) {
        var _err$response2;
        vm.isLoading = false;
        _this9.showError((err === null || err === void 0 || (_err$response2 = err.response) === null || _err$response2 === void 0 || (_err$response2 = _err$response2.data) === null || _err$response2 === void 0 ? void 0 : _err$response2.message) || err.message || __('something_went_wrong'));
      });
    },
    // Save frontend home settings
    saveFrontendHomeSetting: function saveFrontendHomeSetting() {
      var _this0 = this;
      this.isLoading = true;
      var formData = new FormData();

      // Add only frontend home settings
      var frontendHomeFields = ['is_category_section_in_homepage', 'count_category_section_in_homepage', 'is_brand_section_in_homepage', 'count_brand_section_in_homepage', 'is_seller_section_in_homepage', 'count_seller_section_in_homepage', 'is_country_section_in_homepage', 'count_country_section_in_homepage'];
      frontendHomeFields.forEach(function (field) {
        if (_this0.store_settings[field] !== undefined) {
          formData.append(field, _this0.store_settings[field]);
        }
      });
      var url = this.$apiUrl + '/store_settings/save_frontend_home_setting';
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, formData).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this0.showMessage("success", data.message);
          _this0.getStoreSetting();
          setTimeout(function () {
            vm.$swal.close();
            vm.isLoading = false;
            vm.$router.push({
              path: '/store_settings'
            });
          }, 2000);
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        _this0.isLoading = false;
        if (error.request.statusText) {
          _this0.showError(error.request.statusText);
        } else if (error.message) {
          _this0.showError(error.message);
        } else {
          _this0.showError("Something went wrong!");
        }
        vm.isLoading = false;
      });
    },
    // Save SMTP mail settings
    saveSmtpMailSetting: function saveSmtpMailSetting() {
      var _this1 = this;
      this.isLoading = true;
      var formData = new FormData();

      // Add only SMTP mail settings
      var smtpFields = ['mailer', 'smtp_from_mail', 'smtp_reply_to', 'smtp_email_password', 'smtp_host', 'smtp_port', 'smtp_content_type', 'smtp_encryption_type'];
      smtpFields.forEach(function (field) {
        if (_this1.store_settings[field] !== undefined) {
          formData.append(field, _this1.store_settings[field]);
        }
      });
      var url = this.$apiUrl + '/store_settings/save_smtp_mail_setting';
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, formData).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this1.showMessage("success", data.message);
          _this1.getStoreSetting();
          setTimeout(function () {
            vm.$swal.close();
            vm.isLoading = false;
            vm.$router.push({
              path: '/store_settings'
            });
          }, 2000);
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        _this1.isLoading = false;
        if (error.request.statusText) {
          _this1.showError(error.request.statusText);
        } else if (error.message) {
          _this1.showError(error.message);
        } else {
          _this1.showError("Something went wrong!");
        }
        vm.isLoading = false;
      });
    },
    // Save third party API settings
    saveThirdPartyApiSetting: function saveThirdPartyApiSetting() {
      var _this10 = this;
      this.isLoading = true;
      var formData = new FormData();
      var apiFields = ['google_place_api_key', 'google_map_api_key', 'apiKey', 'googleMapApiKey', 'text_gen_key'];
      apiFields.forEach(function (field) {
        if (_this10.store_settings[field] !== undefined) {
          var value = _this10.store_settings[field];

          // Only encrypt google_place_api_key and google_map_api_key
          // apiKey and googleMapApiKey should remain unencrypted (original values)
          if ((field === "google_place_api_key" || field === "google_map_api_key") && value) {
            var secretKey = "ewgrrtoecaemr";
            value = crypto_js__WEBPACK_IMPORTED_MODULE_4___default().AES.encrypt(value, secretKey).toString();
          }
          formData.append(field, value);
        }
      });
      var url = this.$apiUrl + '/store_settings/save_third_party_api_setting';
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, formData).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this10.showMessage("success", data.message);
          _this10.getStoreSetting();
          setTimeout(function () {
            vm.$swal.close();
            vm.isLoading = false;
            vm.$router.push({
              path: '/store_settings'
            });
          }, 2000);
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        _this10.isLoading = false;
        if (error.request.statusText) {
          _this10.showError(error.request.statusText);
        } else if (error.message) {
          _this10.showError(error.message);
        } else {
          _this10.showError("Something went wrong!");
        }
        vm.isLoading = false;
      });
    },
    // Save seller settings
    saveSellerSetting: function saveSellerSetting() {
      var _this11 = this;
      this.isLoading = true;
      var formData = new FormData();

      // Add only seller settings
      var sellerFields = ['one_seller_cart', 'seller_commission', 'self_pickup_mode'];
      sellerFields.forEach(function (field) {
        if (_this11.store_settings[field] !== undefined) {
          formData.append(field, _this11.store_settings[field]);
        }
      });
      var url = this.$apiUrl + '/store_settings/save_seller_setting';
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, formData).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this11.showMessage("success", data.message);
          _this11.getStoreSetting();
          setTimeout(function () {
            vm.$swal.close();
            vm.isLoading = false;
            vm.$router.push({
              path: '/store_settings'
            });
          }, 2000);
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        _this11.isLoading = false;
        if (error.request.statusText) {
          _this11.showError(error.request.statusText);
        } else if (error.message) {
          _this11.showError(error.message);
        } else {
          _this11.showError("Something went wrong!");
        }
        vm.isLoading = false;
      });
    },
    // Save cart settings
    saveCartSetting: function saveCartSetting() {
      var _this12 = this;
      this.isLoading = true;
      var formData = new FormData();

      // Add only cart settings
      var cartFields = ['cart_notification', 'notification_delay_after_cart_addition', 'notification_interval', 'notification_stop_time'];
      cartFields.forEach(function (field) {
        if (_this12.store_settings[field] !== undefined) {
          formData.append(field, _this12.store_settings[field]);
        }
      });
      var url = this.$apiUrl + '/store_settings/save_cart_setting';
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, formData).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this12.showMessage("success", data.message);
          _this12.getStoreSetting();
          setTimeout(function () {
            vm.$swal.close();
            vm.isLoading = false;
            vm.$router.push({
              path: '/store_settings'
            });
          }, 2000);
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        _this12.isLoading = false;
        if (error.request.statusText) {
          _this12.showError(error.request.statusText);
        } else if (error.message) {
          _this12.showError(error.message);
        } else {
          _this12.showError("Something went wrong!");
        }
        vm.isLoading = false;
      });
    },
    saveRecordLoginSetting: function saveRecordLoginSetting() {
      var _this13 = this;
      this.isLoading = true;
      var login_settingsObject = this.login_settings;
      var formData = new FormData();
      for (var key in login_settingsObject) {
        formData.append(key, login_settingsObject[key]);
      }
      var url = this.$apiUrl + '/store_settings/save_login_setting';
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, formData).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this13.showMessage("success", data.message);
          _this13.getStoreSetting();
          setTimeout(function () {
            vm.$swal.close();
            vm.isLoading = false;
            window.location.reload();
            vm.$router.push({
              path: '/store_settings'
            });
          }, 2000);
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        _this13.isLoading = false;
        if (error.request.statusText) {
          _this13.showError(error.request.statusText);
        } else if (error.message) {
          _this13.showError(error.message);
        } else {
          _this13.showError("Something went wrong!");
        }
        vm.isLoading = false;
      });
    },
    saveReferEarnSetting: function saveReferEarnSetting() {
      var _this14 = this;
      this.isLoading = true;
      var refer_earn_settingsObject = this.refer_earn_settings;
      var formData = new FormData();
      for (var key in refer_earn_settingsObject) {
        formData.append(key, refer_earn_settingsObject[key]);
      }
      var url = this.$apiUrl + '/store_settings/save_refer_earn_setting';
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, formData).then(function (res) {
        var data = res.data;
        if (data.status === 1) {
          _this14.showMessage("success", data.message);
          _this14.getStoreSetting();
          setTimeout(function () {
            vm.$swal.close();
            vm.isLoading = false;
            window.location.reload();
            vm.$router.push({
              path: '/store_settings'
            });
          }, 2000);
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        _this14.isLoading = false;
        if (error.request.statusText) {
          _this14.showError(error.request.statusText);
        } else if (error.message) {
          _this14.showError(error.message);
        } else {
          _this14.showError("Something went wrong!");
        }
        vm.isLoading = false;
      });
    },
    // Test mail uses smtp_from_mail as SMTP username. For Gmail that must be your Gmail address; for SendGrid use host smtp.sendgrid.net and username "apikey".
    testMail: function testMail() {
      var _this15 = this;
      var data = {
        'mailer': this.store_settings.mailer,
        'email': this.store_settings.test_email,
        'host': this.store_settings.smtp_host,
        'username': this.store_settings.smtp_from_mail,
        'password': this.store_settings.smtp_email_password,
        'port': this.store_settings.smtp_port,
        'encryption': this.store_settings.smtp_encryption_type,
        'support_email': this.store_settings.support_email,
        'app_name': this.store_settings.app_name
      };
      var url = this.$apiUrl + '/store_settings/test_mail';
      var vm = this;
      vm.isSendingTestEmail = true;
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, data).then(function (res) {
        vm.isSendingTestEmail = false;
        var data = res.data;
        if (data.status === 1) {
          _this15.showMessage("success", data.message);
        } else {
          vm.showError(data.message);
          vm.isLoading = false;
        }
      })["catch"](function (error) {
        vm.isSendingTestEmail = false;
        if (error.request.statusText) {
          _this15.showError(error.request.statusText);
        } else if (error.message) {
          _this15.showError(error.message);
        } else {
          _this15.showError("Something went wrong!");
        }
      });
    },
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this16 = this;
      if (this.languages.length) {
        return Promise.resolve(this.languages);
      }
      this.isLoadingLanguages = true;
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(this.$apiUrl + '/active_languages').then(function (res) {
        _this16.languages = res.data.data || [];
        var def = _this16.languages.find(function (l) {
          return l.is_default == 1;
        });
        _this16.defaultLanguageId = def ? def.id : null;

        // init empty translation shells ONCE
        _this16.initTranslationShells();
        return _this16.languages;
      })["finally"](function () {
        _this16.isLoadingLanguages = false;
      });
    },
    initTranslationShells: function initTranslationShells() {
      var _this17 = this;
      this.languages.forEach(function (lang) {
        _this17.$set(_this17.storeTranslations.app_name, lang.code, '');
        _this17.$set(_this17.storeTranslations.copyright_details, lang.code, '');
        _this17.$set(_this17.appTranslations.app_mode_customer_remark, lang.code, '');
        _this17.$set(_this17.appTranslations.app_mode_seller_remark, lang.code, '');
        _this17.$set(_this17.appTranslations.app_mode_delivery_boy_remark, lang.code, '');
      });
    },
    _translateCodeKeyed: function _translateCodeKeyed(sourceData, applyTo, fields, emptyOnly) {
      var _this18 = this;
      var defaultLang = this.languages.find(function (l) {
        return l.is_default;
      });
      if (!defaultLang || !defaultLang.code) {
        this.showError(__('default_language_data_missing') || 'Default language not found');
        return Promise.reject();
      }
      if (Object.keys(sourceData).length === 0) {
        this.showError(__('default_language_data_missing') || 'No content in default language to translate');
        return Promise.reject();
      }
      if (emptyOnly) {
        var hasEmptyField = false;
        var _iterator = _createForOfIteratorHelper(fields),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var field = _step.value;
            var targetObj = applyTo[field];
            if (!targetObj || _typeof(targetObj) !== 'object') continue;
            var _iterator2 = _createForOfIteratorHelper(this.languages),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var lang = _step2.value;
                if (lang.is_default) continue;
                var val = targetObj[lang.code];
                if (!val || String(val).trim() === '') {
                  hasEmptyField = true;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
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
      return axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(this.$apiUrl + '/' + (emptyOnly ? 'languages/translate-empty' : 'languages/translate-overwrite'), {
        target_language: defaultLang.code,
        data: sourceData
      }).then(function (res) {
        var allTranslations = res.data.data || {};
        _this18.languages.forEach(function (lang) {
          if (lang.is_default) return;
          var translated = allTranslations[lang.code];
          if (!translated) return;
          fields.forEach(function (field) {
            var val = translated[field];
            if (val == null) return;
            if (applyTo[field] && _typeof(applyTo[field]) === 'object') {
              if (emptyOnly && applyTo[field][lang.code]) return;
              _this18.$set(applyTo[field], lang.code, val);
            }
          });
        });
        _this18.translateSuccessMessage = emptyOnly ? __('translation_completed_successfully') || 'Translation completed successfully' : __('translation_overwritten_successfully') || 'Translation overwritten successfully';
        setTimeout(function () {
          _this18.translateSuccessMessage = '';
        }, 5000);
      })["catch"](function (err) {
        var _err$response3;
        var msg = ((_err$response3 = err.response) === null || _err$response3 === void 0 || (_err$response3 = _err$response3.data) === null || _err$response3 === void 0 ? void 0 : _err$response3.message) || err.message || __('something_went_wrong');
        _this18.showError(msg);
        throw err;
      })["finally"](function () {
        if (emptyOnly) _this18.loadingEmpty = false;else _this18.loadingOverwrite = false;
      });
    },
    translateEmptyStoreSetting: function translateEmptyStoreSetting(language) {
      var _this$languages$find;
      if (!language || !language.is_default) return;
      var code = (_this$languages$find = this.languages.find(function (l) {
        return l.is_default;
      })) === null || _this$languages$find === void 0 ? void 0 : _this$languages$find.code;
      if (!code) return;
      var source = {
        copyright_details: this.storeTranslations.copyright_details[code] || ''
      };
      var applyTo = {
        copyright_details: this.storeTranslations.copyright_details
      };
      this._translateCodeKeyed(source, applyTo, ['copyright_details'], true);
    },
    translateOverwriteStoreSetting: function translateOverwriteStoreSetting(language) {
      var _this$languages$find2;
      if (!language || !language.is_default) return;
      var code = (_this$languages$find2 = this.languages.find(function (l) {
        return l.is_default;
      })) === null || _this$languages$find2 === void 0 ? void 0 : _this$languages$find2.code;
      if (!code) return;
      var source = {
        copyright_details: this.storeTranslations.copyright_details[code] || ''
      };
      var applyTo = {
        copyright_details: this.storeTranslations.copyright_details
      };
      this._translateCodeKeyed(source, applyTo, ['copyright_details'], false);
    },
    translateEmptyAddressSetting: function translateEmptyAddressSetting(language) {
      var _this$languages$find3;
      if (!language || !language.is_default) return;
      var code = (_this$languages$find3 = this.languages.find(function (l) {
        return l.is_default;
      })) === null || _this$languages$find3 === void 0 ? void 0 : _this$languages$find3.code;
      if (!code) return;
      var source = {
        store_address: this.addressTranslations.store_address[code] || ''
      };
      var applyTo = {
        store_address: this.addressTranslations.store_address
      };
      this._translateCodeKeyed(source, applyTo, ['store_address'], true);
    },
    translateOverwriteAddressSetting: function translateOverwriteAddressSetting(language) {
      var _this$languages$find4;
      if (!language || !language.is_default) return;
      var code = (_this$languages$find4 = this.languages.find(function (l) {
        return l.is_default;
      })) === null || _this$languages$find4 === void 0 ? void 0 : _this$languages$find4.code;
      if (!code) return;
      var source = {
        store_address: this.addressTranslations.store_address[code] || ''
      };
      var applyTo = {
        store_address: this.addressTranslations.store_address
      };
      this._translateCodeKeyed(source, applyTo, ['store_address'], false);
    },
    translateEmptyAppSetting: function translateEmptyAppSetting(language) {
      var _this$languages$find5;
      if (!language || !language.is_default) return;
      var code = (_this$languages$find5 = this.languages.find(function (l) {
        return l.is_default;
      })) === null || _this$languages$find5 === void 0 ? void 0 : _this$languages$find5.code;
      if (!code) return;
      var source = {
        app_mode_customer_remark: this.appTranslations.app_mode_customer_remark[code] || '',
        app_mode_seller_remark: this.appTranslations.app_mode_seller_remark[code] || '',
        app_mode_delivery_boy_remark: this.appTranslations.app_mode_delivery_boy_remark[code] || ''
      };
      var applyTo = this.appTranslations;
      this._translateCodeKeyed(source, applyTo, ['app_mode_customer_remark', 'app_mode_seller_remark', 'app_mode_delivery_boy_remark'], true);
    },
    translateOverwriteAppSetting: function translateOverwriteAppSetting(language) {
      var _this$languages$find6;
      if (!language || !language.is_default) return;
      var code = (_this$languages$find6 = this.languages.find(function (l) {
        return l.is_default;
      })) === null || _this$languages$find6 === void 0 ? void 0 : _this$languages$find6.code;
      if (!code) return;
      var source = {
        app_mode_customer_remark: this.appTranslations.app_mode_customer_remark[code] || '',
        app_mode_seller_remark: this.appTranslations.app_mode_seller_remark[code] || '',
        app_mode_delivery_boy_remark: this.appTranslations.app_mode_delivery_boy_remark[code] || ''
      };
      var applyTo = this.appTranslations;
      this._translateCodeKeyed(source, applyTo, ['app_mode_customer_remark', 'app_mode_seller_remark', 'app_mode_delivery_boy_remark'], false);
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=template&id=3d8e2876&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=template&id=3d8e2876&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",[_c("div",{staticClass:"page-heading"},[_c("div",{staticClass:"page-title"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[_c("h3",[_vm._v(_vm._s(_vm.__("store_settings")))])]),_vm._v(" "),_c("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[_c("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[_c("ol",{staticClass:"breadcrumb"},[_c("li",{staticClass:"breadcrumb-item"},[_c("router-link",{attrs:{to:"/dashboard"}},[_vm._v(_vm._s(_vm.__("dashboard")))])],1),_vm._v(" "),_c("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[_vm._v(_vm._s(_vm.__("store_settings")))])])])])])]),_vm._v(" "),_c("section",{staticClass:"section"},[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("update_system_settings")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12 vertical-tabs-container"},[_c("div",{staticClass:"tab-buttons"},_vm._l(_vm.tabs,function(tab,index){return _c("button",{key:index,"class":{active:_vm.activeTab===tab},on:{click:function click($event){_vm.activeTab=tab;}}},[_vm._v("\n                                    "+_vm._s(tab)+"\n                                ")]);}),0),_vm._v(" "),_c("div",{staticClass:"tab-content"},[_vm.activeTab===_vm.__("store_setting")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("store_setting")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("form",{attrs:{method:"post",enctype:"multipart/form-data",novalidate:""},on:{submit:function submit($event){$event.preventDefault();return _vm.saveStoreBasicSetting.apply(null,arguments);}}},[_c("b-tabs",{attrs:{"content-class":"mt-3",lazy:false},model:{value:_vm.activeLanguageTab,callback:function callback($$v){_vm.activeLanguageTab=$$v;},expression:"activeLanguageTab"}},_vm._l(_vm.languages,function(language){return _c("b-tab",{key:language.id,scopedSlots:_vm._u([{key:"title",fn:function fn(){return[_c("span",{"class":{"text-primary font-weight-bold":language.is_default}},[_vm._v("\n                                                                "+_vm._s(language.name)+"\n                                                            ")])];},proxy:true}],null,true)},[_vm._v(" "),language.is_default&&_vm.languages.length>1?_c("div",{staticClass:"mb-3"},[_c("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],staticClass:"mr-2",attrs:{size:"sm",variant:"outline-primary",title:"Only empty fields will be translated.",disabled:_vm.loadingEmpty||_vm.loadingOverwrite},on:{click:function click($event){return _vm.translateEmptyStoreSetting(language);}}},[!_vm.loadingEmpty?_c("span",[_vm._v(_vm._s(_vm.__("translate_empty_fields")))]):_c("b-spinner",{attrs:{small:""}})],1),_vm._v(" "),_c("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],attrs:{size:"sm",variant:"outline-danger",title:"All fields will be translated and overwritten.",disabled:_vm.loadingEmpty||_vm.loadingOverwrite},on:{click:function click($event){return _vm.translateOverwriteStoreSetting(language);}}},[!_vm.loadingOverwrite?_c("span",[_vm._v(_vm._s(_vm.__("translate_and_overwrite")))]):_c("b-spinner",{attrs:{small:""}})],1),_vm._v(" "),_vm.translateSuccessMessage?_c("div",{staticClass:"text-success mt-2 font-weight-bold"},[_vm._v(_vm._s(_vm.translateSuccessMessage))]):_vm._e()],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"row"},[language.is_default?[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.system_configurations,expression:"store_settings.system_configurations"}],attrs:{type:"hidden"},domProps:{value:_vm.store_settings.system_configurations},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"system_configurations",$event.target.value);}}}),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.system_timezone_gmt,expression:"store_settings.system_timezone_gmt"}],attrs:{type:"hidden"},domProps:{value:_vm.store_settings.system_timezone_gmt},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"system_timezone_gmt",$event.target.value);}}}),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.system_configurations_id,expression:"store_settings.system_configurations_id"}],attrs:{type:"hidden"},domProps:{value:_vm.store_settings.system_configurations_id},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"system_configurations_id",$event.target.value);}}})]:_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-12 col-md-4 mb-3 mt-0"},[_c("label",{attrs:{"for":"app_name"}},[_vm._v(_vm._s(_vm.__("app_name"))+":")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.app_name,expression:"store_settings.app_name"}],staticClass:"form-control",attrs:{type:"text",required:"",name:"app_name",id:"app_name",placeholder:"Name of the App - used in whole system"},domProps:{value:_vm.store_settings.app_name},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"app_name",$event.target.value);}}})]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-12 col-md-4 mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("support_number")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.support_number,expression:"store_settings.support_number"}],staticClass:"form-control",attrs:{type:"text",inputmode:"numeric"},domProps:{value:_vm.store_settings.support_number},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"support_number",$event.target.value);},_vm.validateMobileNumber]}}),_vm._v(" "),_vm.mobilevalidationError?_c("span",{staticClass:"error"},[_vm._v("\n                                                                    "+_vm._s(_vm.mobilevalidationError)+"\n                                                                ")]):_vm._e()]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-12 col-md-4 mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("support_email")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.support_email,expression:"store_settings.support_email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:_vm.store_settings.support_email},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"support_email",$event.target.value);}}})]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-12 col-md-4 mb-3 mt-0"},[_c("label",[_vm._v(_vm._s(_vm.__("logo")))]),_vm._v(" "),_c("input",{staticClass:"file-input",attrs:{type:"file",id:"logo_".concat(language.code),accept:"image/*"},on:{change:function change($event){return _vm.onLogoUpload($event);}}}),_vm._v(" "),_c("label",{staticClass:"file-input-div",attrs:{"for":"logo_".concat(language.code)}},[_vm.Logoerror?_c("span",{staticClass:"error"},[_vm._v(_vm._s(_vm.Logoerror))]):_vm._e(),_vm._v(" "),_vm.logo_name?[_vm._v("\n                                                                                "+_vm._s(_vm.__("selected_file_name"))+" "+_vm._s(_vm.logo_name)+"\n                                                                            ")]:[_c("i",{staticClass:"fa fa-cloud-upload-alt fa-2x"}),_vm._v("\n                                                                                "+_vm._s(_vm.__("drop_files_here_or_click_to_upload"))+"\n                                                                            ")]],2),_vm._v(" "),_vm.logo_url?_c("img",{staticClass:"img-fluid store-settings-img-preview",attrs:{src:_vm.logo_url}}):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"form-group col-12 col-md-4 mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("fssai_lic_image")))]),_vm._v(" "),_c("input",{staticClass:"file-input",attrs:{type:"file",id:"fssaiLicImg_".concat(language.code),accept:"image/*"},on:{change:function change($event){return _vm.onFssaiUpload($event);}}}),_vm._v(" "),_c("label",{staticClass:"file-input-div",attrs:{"for":"fssaiLicImg_".concat(language.code)}},[_vm.Fssaierror?_c("span",{staticClass:"error"},[_vm._v(_vm._s(_vm.Fssaierror))]):_vm._e(),_vm._v(" "),_vm.fssai_lic_img_name?[_vm._v("\n                                                                                "+_vm._s(_vm.__("selected_file_name"))+" "+_vm._s(_vm.fssai_lic_img_name)+"\n                                                                            ")]:[_c("i",{staticClass:"fa fa-cloud-upload-alt fa-2x"}),_vm._v("\n                                                                                "+_vm._s(_vm.__("drop_files_here_or_click_to_upload"))+"\n                                                                            ")]],2),_vm._v(" "),_vm.fssai_lic_img_url?_c("img",{staticClass:"img-fluid store-settings-img-preview",attrs:{src:_vm.fssai_lic_img_url}}):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"form-group col-12 col-md-4 mb-3"},[_c("label",[_vm._v(_vm._s(_vm.__("panel_login_background_img")))]),_vm._v(" "),_c("input",{staticClass:"file-input",attrs:{type:"file",id:"panelLoginBgImg_".concat(language.code),accept:"image/*"},on:{change:function change($event){return _vm.onPanelLoginBgUpload($event);}}}),_vm._v(" "),_c("label",{staticClass:"file-input-div",attrs:{"for":"panelLoginBgImg_".concat(language.code)}},[_vm.Panel_login_background_imgerror?_c("span",{staticClass:"error"},[_vm._v(_vm._s(_vm.Panel_login_background_imgerror))]):_vm._e(),_vm._v(" "),_vm.panel_login_background_img_name?[_vm._v("\n                                                                                "+_vm._s(_vm.__("selected_file_name"))+" "+_vm._s(_vm.panel_login_background_img_name)+"\n                                                                            ")]:[_c("i",{staticClass:"fa fa-cloud-upload-alt fa-2x"}),_vm._v("\n                                                                                "+_vm._s(_vm.__("drop_files_here_or_click_to_upload"))+"\n                                                                            ")]],2),_vm._v(" "),_vm.panel_login_background_img_url?_c("img",{staticClass:"img-fluid store-settings-img-preview",attrs:{src:_vm.panel_login_background_img_url}}):_vm._e()])])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",[_vm._v(_vm._s(_vm.__("copyright_details")))]),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.storeTranslations.copyright_details[language.code],expression:"storeTranslations.copyright_details[language.code]"}],staticClass:"form-control",attrs:{rows:"4",placeholder:_vm.__("enter_copyright_details_here")},domProps:{value:_vm.storeTranslations.copyright_details[language.code]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.storeTranslations.copyright_details,language.code,$event.target.value);}}})])],2)]);}),1),_vm._v(" "),_vm.$can("manage_store_settings")?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading}},[_vm._v("\n                                                    "+_vm._s(_vm.__("update"))+"\n                                                    "),_vm.isLoading?_c("b-spinner",{attrs:{small:""}}):_vm._e()],1):_vm._e()],1)])])]):_vm._e(),_vm._v(" "),_vm.activeTab===_vm.__("address_setting")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("store_address_settings")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.saveAddressSetting.apply(null,arguments);}}},[_c("b-tabs",{attrs:{"content-class":"mt-3",lazy:false},model:{value:_vm.activeLanguageTab,callback:function callback($$v){_vm.activeLanguageTab=$$v;},expression:"activeLanguageTab"}},_vm._l(_vm.languages,function(language){return _c("b-tab",{key:language.id,scopedSlots:_vm._u([{key:"title",fn:function fn(){return[_c("span",{"class":{"text-primary font-weight-bold":language.is_default}},[_vm._v("\n                                                                "+_vm._s(language.name)+"\n                                                            ")])];},proxy:true}],null,true)},[_vm._v(" "),language.is_default&&_vm.languages.length>1?_c("div",{staticClass:"mb-3"},[_c("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],staticClass:"mr-2",attrs:{size:"sm",variant:"outline-primary",title:"Only empty fields will be translated.",disabled:_vm.loadingEmpty||_vm.loadingOverwrite},on:{click:function click($event){return _vm.translateEmptyAddressSetting(language);}}},[!_vm.loadingEmpty?_c("span",[_vm._v(_vm._s(_vm.__("translate_empty_fields")))]):_c("b-spinner",{attrs:{small:""}})],1),_vm._v(" "),_c("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],attrs:{size:"sm",variant:"outline-danger",title:"All fields will be translated and overwritten.",disabled:_vm.loadingEmpty||_vm.loadingOverwrite},on:{click:function click($event){return _vm.translateOverwriteAddressSetting(language);}}},[!_vm.loadingOverwrite?_c("span",[_vm._v(_vm._s(_vm.__("translate_and_overwrite")))]):_c("b-spinner",{attrs:{small:""}})],1),_vm._v(" "),_vm.translateSuccessMessage?_c("div",{staticClass:"text-success mt-2 font-weight-bold"},[_vm._v(_vm._s(_vm.translateSuccessMessage))]):_vm._e()],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-12 col-md-6 mt-0"},[_c("label",{attrs:{"for":"store_address"}},[_vm._v(_vm._s(_vm.__("address"))+"\n                                                                ")]),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.addressTranslations.store_address[language.code],expression:"addressTranslations.store_address[language.code]"}],staticClass:"form-control",attrs:{name:"store_address",id:"store_address",rows:"2"},domProps:{value:_vm.addressTranslations.store_address[language.code]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.addressTranslations.store_address,language.code,$event.target.value);}}})]),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-12 col-md-6"},[_c("label",{attrs:{"for":"map_latitude"}},[_vm._v(" "+_vm._s(_vm.__("latitude")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.map_latitude,expression:"store_settings.map_latitude"}],staticClass:"form-control",attrs:{type:"text",required:"",name:"map_latitude",id:"map_latitude",placeholder:_vm.__("latitude")},domProps:{value:_vm.store_settings.map_latitude},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"map_latitude",$event.target.value);}}})]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-12 col-md-6"},[_c("label",{attrs:{"for":"map_longitude"}},[_vm._v(" "+_vm._s(_vm.__("longitude")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.map_longitude,expression:"store_settings.map_longitude"}],staticClass:"form-control",attrs:{type:"text",required:"",name:"map_longitude",id:"map_longitude",placeholder:_vm.__("longitude")},domProps:{value:_vm.store_settings.map_longitude},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"map_longitude",$event.target.value);}}})]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-12 col-md-6"},[_c("label",{attrs:{"for":"currency"}},[_vm._v(" "+_vm._s(_vm.__("store_currency"))+"(Symbol or\n                                                                    Code-$ or USD):")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.currency,expression:"store_settings.currency"}],staticClass:"form-control",attrs:{type:"text",required:"",name:"currency",id:"currency",placeholder:"Either Symbol or Code - For Example $ or USD"},domProps:{value:_vm.store_settings.currency},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"currency",$event.target.value);}}})]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-12 col-md-6"},[_c("label",{attrs:{"for":"currency_code"}},[_vm._v(" "+_vm._s(_vm.__("currency_code")))]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.currency_code,expression:"store_settings.currency_code"}],staticClass:"form-control form-select",attrs:{required:"",name:"currency_code",id:"currency_code"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.store_settings,"currency_code",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:""}},[_vm._v("Select Country Currency Code\n                                                                    ")]),_vm._v(" "),_vm._l(_vm.currency_codes,function(code){return code.currencyCode!==""?_c("option",{domProps:{value:code.currencyCode}},[_vm._v("\n                                                                        "+_vm._s(code.currencyCode+" - "+code.countryName)+"\n                                                                    ")]):_vm._e();})],2)]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-12 col-md-6"},[_c("label",{attrs:{"for":"decimal_point"}},[_vm._v(_vm._s(_vm.__("decimal_point")))]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.decimal_point,expression:"store_settings.decimal_point"}],staticClass:"form-control form-select",attrs:{required:"",name:"decimal_point",id:"decimal_point"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.store_settings,"decimal_point",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:""}},[_vm._v(_vm._s(_vm.__("select_currency_decimal_point")))]),_vm._v(" "),_c("option",{attrs:{value:"0"}},[_vm._v("0")]),_vm._v(" "),_c("option",{attrs:{value:"1"}},[_vm._v("1")]),_vm._v(" "),_c("option",{attrs:{value:"2"}},[_vm._v("2")])])]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-12 col-md-6"},[_c("label",{staticClass:"system_timezone",attrs:{"for":"system_timezone"}},[_vm._v(_vm._s(_vm.__("system_timezone")))]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.system_timezone,expression:"store_settings.system_timezone"}],staticClass:"form-control form-select",attrs:{name:"system_timezone",id:"system_timezone"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.store_settings,"system_timezone",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},_vm._l(_vm.timezone_options,function(timezone_option){return _c("option",{attrs:{"data-gmt":timezone_option[1]},domProps:{value:timezone_option[2]}},[_vm._v("\n                                                                        "+_vm._s(timezone_option[2])+" - GMT "+_vm._s(timezone_option[1])+" -\n                                                                        "+_vm._s(timezone_option[0])+"\n                                                                    ")]);}),0)]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-12 col-md-6"},[_c("label",{attrs:{"for":"city_name"}},[_vm._v(_vm._s(_vm.__("default_city")))]),_vm._v(" "),_c("multiselect",{attrs:{options:_vm.cities,placeholder:"Select & Search City",label:"name","track-by":"name",id:"city_name",required:""},on:{close:_vm.setCityId},scopedSlots:_vm._u([{key:"singleLabel",fn:function fn(props){return[_c("span",{staticClass:"option__desc"},[_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.name))])])];}},{key:"option",fn:function fn(props){return[_c("div",{staticClass:"option__desc"},[_c("span",{staticClass:"option__title"},[_vm._v(_vm._s(props.option.formatted_address))])])];}}],null,true),model:{value:_vm.city,callback:function callback($$v){_vm.city=$$v;},expression:"city"}}),_vm._v(" "),_vm.cities.length===0?_c("p",{staticClass:"text-muted"},[_vm._v("\n                                                                    "+_vm._s(_vm.__("city_not_found"))+". "),_vm.$can("city_create")?_c("router-link",{staticClass:"text-muted",attrs:{target:"_blank",to:"/cities/create"}},[_vm._v("Add new city\n                                                                        here.")]):_vm._e()],1):_vm._e()],1):_vm._e()])]);}),1),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_vm.$can("manage_store_settings")?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading}},[_vm._v(_vm._s(_vm.__("update"))+"\n                                                            "),_vm.isLoading?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1):_vm._e()],1)])],1)])])]):_vm._e(),_vm._v(" "),_vm.activeTab===_vm.__("other_setting")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("other_setting")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.saveOtherSetting.apply(null,arguments);}}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6 mt-0"},[_c("label",{attrs:{"for":"max_cart_items_count"}},[_vm._v(" "+_vm._s(_vm.__("maximum_items_allowed_in_cart"))+" ")]),_vm._v(" "),_c("i",{staticClass:"text-danger"},[_vm._v("*")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.max_cart_items_count,expression:"store_settings.max_cart_items_count"}],staticClass:"form-control",attrs:{type:"number",required:"",name:"max_cart_items_count",id:"max_cart_items_count",placeholder:"Maximum Items Allowed In Cart",min:"1"},domProps:{value:_vm.store_settings.max_cart_items_count},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"max_cart_items_count",$event.target.value);}}}),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("( "+_vm._s(_vm.__("maximum_items_user_can_add_to_cart_at_once"))+")")])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"min_order_amount"}},[_vm._v(" "+_vm._s(_vm.__("minimum_order_amount")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.min_order_amount,expression:"store_settings.min_order_amount"}],staticClass:"form-control",attrs:{type:"number",name:"min_order_amount",id:"min_order_amount",placeholder:_vm.__("minimum_order_amount"),min:"0"},domProps:{value:_vm.store_settings.min_order_amount},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"min_order_amount",$event.target.value);}}})]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"is_delivery_charge_refundable"}},[_vm._v(_vm._s(_vm.__("is_delivery_charge_refundable")))]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch mt-2"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.is_delivery_charge_refundable,expression:"store_settings.is_delivery_charge_refundable"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_delivery_charge_refundable","true-value":1,"false-value":0},domProps:{checked:Array.isArray(_vm.store_settings.is_delivery_charge_refundable)?_vm._i(_vm.store_settings.is_delivery_charge_refundable,null)>-1:_vm._q(_vm.store_settings.is_delivery_charge_refundable,1)},on:{change:function change($event){var $$a=_vm.store_settings.is_delivery_charge_refundable,$$el=$event.target,$$c=$$el.checked?1:0;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"is_delivery_charge_refundable",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"is_delivery_charge_refundable",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"is_delivery_charge_refundable",$$c);}}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":"is_delivery_charge_refundable"}},[_vm._v("\n                                                                "+_vm._s(_vm.store_settings.is_delivery_charge_refundable?_vm.__("yes"):_vm.__("no"))+"\n                                                            ")])])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"low_stock_limit"}},[_vm._v(_vm._s(_vm.__("low_stock_limit")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.low_stock_limit,expression:"store_settings.low_stock_limit"}],staticClass:"form-control",attrs:{type:"number",required:"",name:"low_stock_limit",id:"low_stock_limit",placeholder:"Product low stock limit"},domProps:{value:_vm.store_settings.low_stock_limit},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"low_stock_limit",$event.target.value);}}}),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(" ( "+_vm._s(_vm.__("product_will_be_considered_as_low_stock_if_stock_goes_below_this_limit"))+" ) ")])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"rating"}},[_vm._v(_vm._s(_vm.__("product_rating")))]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.product_rating,expression:"store_settings.product_rating"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"rating",id:"rating"},domProps:{checked:Array.isArray(_vm.store_settings.product_rating)?_vm._i(_vm.store_settings.product_rating,null)>-1:_vm._q(_vm.store_settings.product_rating,"1")},on:{change:function change($event){var $$a=_vm.store_settings.product_rating,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"product_rating",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"product_rating",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"product_rating",$$c);}}}})]),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(" ( "+_vm._s(_vm.__("enable_and_disable_product_rating_system"))+" )\n                                                        ")])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"few_quantity_left_alert"}},[_vm._v(_vm._s(_vm.__("few_quantity_left_alert")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.few_quantity_left_alert,expression:"store_settings.few_quantity_left_alert"}],staticClass:"form-control",attrs:{type:"number",name:"few_quantity_left_alert",id:"few_quantity_left_alert",placeholder:"Few Quantity Left Alert",min:"1"},domProps:{value:_vm.store_settings.few_quantity_left_alert},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"few_quantity_left_alert",$event.target.value);}}}),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(" ( "+_vm._s(_vm.__("will_show_few_quantity_left_in_product_cart"))+" )\n                                                        ")])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"date_format"}},[_vm._v(_vm._s(_vm.__("date_format")))]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.date_format,expression:"store_settings.date_format"}],staticClass:"form-control form-select",attrs:{name:"date_format",id:"date_format"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.store_settings,"date_format",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},_vm._l(_vm.dateFormatOptions,function(opt){return _c("option",{key:opt.value,domProps:{value:opt.value}},[_vm._v(_vm._s(opt.label))]);}),0),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(" ("+_vm._s(_vm.__("date_displayed_everywhere_in_this_format"))+")")])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"time_format"}},[_vm._v(_vm._s(_vm.__("time_format")))]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.time_format,expression:"store_settings.time_format"}],staticClass:"form-control form-select",attrs:{name:"time_format",id:"time_format"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.store_settings,"time_format",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},_vm._l(_vm.timeFormatOptions,function(opt){return _c("option",{key:opt.value,domProps:{value:opt.value}},[_vm._v(_vm._s(opt.label))]);}),0),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(" ("+_vm._s(_vm.__("time_displayed_everywhere_in_this_format"))+")")])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"country_code"}},[_vm._v(_vm._s(_vm.__("country_code")))]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.country_code,expression:"store_settings.country_code"}],staticClass:"form-control form-select",attrs:{name:"country_code",id:"country_code"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.store_settings,"country_code",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.onCountryCodeChange]}},[_c("option",{attrs:{value:""}},[_vm._v(_vm._s(_vm.__("select")))]),_vm._v(" "),_vm._l(_vm.countryCodeOptions,function(opt){return _c("option",{key:opt.value,domProps:{value:opt.value}},[_vm._v(_vm._s(opt.label))]);})],2),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(" ("+_vm._s(_vm.__("it_will_used_as_default_country_code_for_phone_numbers"))+")")])])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_vm.$can("manage_store_settings")?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading}},[_vm._v(_vm._s(_vm.__("update"))+"\n                                                            "),_vm.isLoading?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1):_vm._e()],1)])])])])]):_vm._e(),_vm._v(" "),_vm.activeTab===_vm.__("delivery_boy_setting")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("delivery_boy_setting")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.saveDeliveryBoySetting.apply(null,arguments);}}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6 mt-0"},[_c("label",{attrs:{"for":"delivery_boy_bonus_settings"}},[_vm._v(_vm._s(_vm.__("bonus_settings")))]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.delivery_boy_bonus_settings,expression:"store_settings.delivery_boy_bonus_settings"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"delivery_boy_bonus_settings",id:"delivery_boy_bonus_settings"},domProps:{checked:Array.isArray(_vm.store_settings.delivery_boy_bonus_settings)?_vm._i(_vm.store_settings.delivery_boy_bonus_settings,null)>-1:_vm._q(_vm.store_settings.delivery_boy_bonus_settings,"1")},on:{change:function change($event){var $$a=_vm.store_settings.delivery_boy_bonus_settings,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"delivery_boy_bonus_settings",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"delivery_boy_bonus_settings",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"delivery_boy_bonus_settings",$$c);}}}})])]),_vm._v(" "),_vm.store_settings.delivery_boy_bonus_settings==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"delivery_boy_bonus_type"}},[_vm._v(_vm._s(_vm.__("bonus_type")))]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.delivery_boy_bonus_type,expression:"store_settings.delivery_boy_bonus_type"}],staticClass:"form-control form-select",attrs:{name:"delivery_boy_bonus_type",id:"delivery_boy_bonus_type"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.store_settings,"delivery_boy_bonus_type",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:""}},[_vm._v(_vm._s(_vm.__("select")))]),_vm._v(" "),_c("option",{attrs:{value:"1"}},[_vm._v(_vm._s(_vm.__("commission")))]),_vm._v(" "),_c("option",{attrs:{value:"0"}},[_vm._v(_vm._s(_vm.__("fixed"))+"/"+_vm._s(_vm.__("salaried"))+"\n                                                            ")])])]):_vm._e(),_vm._v(" "),_vm.store_settings.delivery_boy_bonus_settings==1&&_vm.store_settings.delivery_boy_bonus_type==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"delivery_boy_bonus_percentage"}},[_vm._v(_vm._s(_vm.__("delivery_boy_bonus_percentage"))+"(%)")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.delivery_boy_bonus_percentage,expression:"store_settings.delivery_boy_bonus_percentage"}],staticClass:"form-control",attrs:{type:"number",min:"0.1",max:"100",step:"0.1",name:"delivery_boy_bonus_percentage",id:"delivery_boy_bonus_percentage",placeholder:"Delivery Boy Bonus"},domProps:{value:_vm.store_settings.delivery_boy_bonus_percentage},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"delivery_boy_bonus_percentage",$event.target.value);}}})]):_vm._e(),_vm._v(" "),_vm.store_settings.delivery_boy_bonus_settings==1&&_vm.store_settings.delivery_boy_bonus_type==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"delivery_boy_bonus_min_amount"}},[_vm._v(_vm._s(_vm.__("minimum_bonus_amount")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.delivery_boy_bonus_min_amount,expression:"store_settings.delivery_boy_bonus_min_amount"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"0.1",required:"",name:"delivery_boy_bonus_min_amount",id:"delivery_boy_bonus_min_amount",placeholder:"Minimum bonus amount"},domProps:{value:_vm.store_settings.delivery_boy_bonus_min_amount},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"delivery_boy_bonus_min_amount",$event.target.value);}}}),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(_vm._s(_vm.__("set_0_if_you_want_to_remove_limit"))+".")])]):_vm._e(),_vm._v(" "),_vm.store_settings.delivery_boy_bonus_settings==1&&_vm.store_settings.delivery_boy_bonus_type==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"delivery_boy_bonus_max_amount"}},[_vm._v(_vm._s(_vm.__("maximum_bonus_amount")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.delivery_boy_bonus_max_amount,expression:"store_settings.delivery_boy_bonus_max_amount"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"0.1",required:"",name:"delivery_boy_bonus_max_amount",id:"delivery_boy_bonus_max_amount",placeholder:"Maximum bonus amount"},domProps:{value:_vm.store_settings.delivery_boy_bonus_max_amount},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"delivery_boy_bonus_max_amount",$event.target.value);}}}),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(_vm._s(_vm.__("set_0_if_you_want_to_remove_limit"))+".")])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"generate_otp"}},[_vm._v(_vm._s(_vm.__("Order Delivery OTP System")))]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.generate_otp,expression:"store_settings.generate_otp"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"generate_otp",id:"generate_otp"},domProps:{checked:Array.isArray(_vm.store_settings.generate_otp)?_vm._i(_vm.store_settings.generate_otp,null)>-1:_vm._q(_vm.store_settings.generate_otp,"1")},on:{change:function change($event){var $$a=_vm.store_settings.generate_otp,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"generate_otp",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"generate_otp",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"generate_otp",$$c);}}}})])])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_vm.$can("manage_store_settings")?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading}},[_vm._v(_vm._s(_vm.__("update"))+"\n                                                            "),_vm.isLoading?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1):_vm._e()],1)])])])])]):_vm._e(),_vm._v(" "),_vm.activeTab===_vm.__("app_setting")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("app_setting")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(_vm._s(_vm.__("in_this_mode_you_can_set_your_app_in_maitenance_and_that_application_will_not_work_till_not_disabled_from_here")))]),_vm._v(" "),_c("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.saveAppSetting.apply(null,arguments);}}},[_c("b-tabs",{attrs:{"content-class":"mt-3",lazy:false},model:{value:_vm.activeLanguageTab,callback:function callback($$v){_vm.activeLanguageTab=$$v;},expression:"activeLanguageTab"}},_vm._l(_vm.languages,function(language){return _c("b-tab",{key:language.id,scopedSlots:_vm._u([{key:"title",fn:function fn(){return[_c("span",{"class":{"text-primary font-weight-bold":language.is_default}},[_vm._v("\n                                                                "+_vm._s(language.name)+"\n                                                            ")])];},proxy:true}],null,true)},[_vm._v(" "),language.is_default&&_vm.languages.length>1?_c("div",{staticClass:"mb-3"},[_c("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],staticClass:"mr-2",attrs:{size:"sm",variant:"outline-primary",title:"Only empty fields will be translated.",disabled:_vm.loadingEmpty||_vm.loadingOverwrite},on:{click:function click($event){return _vm.translateEmptyAppSetting(language);}}},[!_vm.loadingEmpty?_c("span",[_vm._v(_vm._s(_vm.__("translate_empty_fields")))]):_c("b-spinner",{attrs:{small:""}})],1),_vm._v(" "),_c("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],attrs:{size:"sm",variant:"outline-danger",title:"All fields will be translated and overwritten.",disabled:_vm.loadingEmpty||_vm.loadingOverwrite},on:{click:function click($event){return _vm.translateOverwriteAppSetting(language);}}},[!_vm.loadingOverwrite?_c("span",[_vm._v(_vm._s(_vm.__("translate_and_overwrite")))]):_c("b-spinner",{attrs:{small:""}})],1),_vm._v(" "),_vm.translateSuccessMessage?_c("div",{staticClass:"text-success mt-2 font-weight-bold"},[_vm._v(_vm._s(_vm.translateSuccessMessage))]):_vm._e()],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6 mt-0"},[_c("label",{attrs:{"for":"app_mode_customer"}},[_vm._v(_vm._s(_vm.__("customer_app"))+"\n                                                                    "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("(\n                                                                        "+_vm._s(_vm.__("enable"))+"/"+_vm._s(_vm.__("disable"))+"\n                                                                        )")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.app_mode_customer,expression:"store_settings.app_mode_customer"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"app_mode_customer",id:"app_mode_customer"},domProps:{checked:Array.isArray(_vm.store_settings.app_mode_customer)?_vm._i(_vm.store_settings.app_mode_customer,null)>-1:_vm._q(_vm.store_settings.app_mode_customer,"1")},on:{change:function change($event){var $$a=_vm.store_settings.app_mode_customer,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"app_mode_customer",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"app_mode_customer",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"app_mode_customer",$$c);}}}})]),_vm._v(" "),_vm.store_settings.app_mode_customer==1?_c("div",{staticClass:"form-floating mb-3"},[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.appTranslations.app_mode_customer_remark[language.code],expression:"appTranslations.app_mode_customer_remark[language.code]"}],staticClass:"form-control",attrs:{name:"message",id:"app_mode_customer_remark",placeholder:"Enter Notification Message Here!"},domProps:{value:_vm.appTranslations.app_mode_customer_remark[language.code]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.appTranslations.app_mode_customer_remark,language.code,$event.target.value);}}}),_vm._v(" "),_c("label",{attrs:{"for":"app_mode_customer_remark"}},[_vm._v(_vm._s(_vm.__("customer_app_remark")))])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"app_mode_seller"}},[_vm._v(_vm._s(_vm.__("seller_app"))+"\n                                                                    "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("(\n                                                                        "+_vm._s(_vm.__("enable"))+"/"+_vm._s(_vm.__("disable"))+"\n                                                                        )")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.app_mode_seller,expression:"store_settings.app_mode_seller"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"app_mode_seller",id:"app_mode_seller"},domProps:{checked:Array.isArray(_vm.store_settings.app_mode_seller)?_vm._i(_vm.store_settings.app_mode_seller,null)>-1:_vm._q(_vm.store_settings.app_mode_seller,"1")},on:{change:function change($event){var $$a=_vm.store_settings.app_mode_seller,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"app_mode_seller",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"app_mode_seller",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"app_mode_seller",$$c);}}}})]),_vm._v(" "),_vm.store_settings.app_mode_seller==1?_c("div",{staticClass:"form-floating mb-3"},[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.appTranslations.app_mode_seller_remark[language.code],expression:"appTranslations.app_mode_seller_remark[language.code]"}],staticClass:"form-control",attrs:{name:"message",id:"app_mode_seller_remark",placeholder:"Enter Notification Message Here!"},domProps:{value:_vm.appTranslations.app_mode_seller_remark[language.code]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.appTranslations.app_mode_seller_remark,language.code,$event.target.value);}}}),_vm._v(" "),_c("label",{attrs:{"for":"app_mode_seller_remark"}},[_vm._v(_vm._s(_vm.__("seller_app_remark")))])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"app_mode_delivery_boy"}},[_vm._v(_vm._s(_vm.__("delivery_boy_app"))),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("(\n                                                                        "+_vm._s(_vm.__("enable"))+"/"+_vm._s(_vm.__("disable"))+"\n                                                                        )")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.app_mode_delivery_boy,expression:"store_settings.app_mode_delivery_boy"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"app_mode_delivery_boy",id:"app_mode_delivery_boy"},domProps:{checked:Array.isArray(_vm.store_settings.app_mode_delivery_boy)?_vm._i(_vm.store_settings.app_mode_delivery_boy,null)>-1:_vm._q(_vm.store_settings.app_mode_delivery_boy,"1")},on:{change:function change($event){var $$a=_vm.store_settings.app_mode_delivery_boy,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"app_mode_delivery_boy",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"app_mode_delivery_boy",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"app_mode_delivery_boy",$$c);}}}})]),_vm._v(" "),_vm.store_settings.app_mode_delivery_boy==1?_c("div",{staticClass:"form-floating mb-3"},[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.appTranslations.app_mode_delivery_boy_remark[language.code],expression:"appTranslations.app_mode_delivery_boy_remark[language.code]"}],staticClass:"form-control",attrs:{name:"message",id:"app_mode_delivery_boy_remark",placeholder:"Enter Notification Message Here!"},domProps:{value:_vm.appTranslations.app_mode_delivery_boy_remark[language.code]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.appTranslations.app_mode_delivery_boy_remark,language.code,$event.target.value);}}}),_vm._v(" "),_c("label",{attrs:{"for":"app_mode_delivery_boy_remark"}},[_vm._v(_vm._s(_vm.__("delivery_boy_app_remark")))])]):_vm._e()]),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"playstore_url"}},[_vm._v(_vm._s(_vm.__("playstore_url")))]),_c("br"),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.playstore_url,expression:"store_settings.playstore_url"}],staticClass:"form-control",attrs:{type:"url",name:"playstore_url",id:"playstore_url",placeholder:_vm.__("playstore_url")},domProps:{value:_vm.store_settings.playstore_url},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"playstore_url",$event.target.value);}}})]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"appstore_url"}},[_vm._v(_vm._s(_vm.__("appstore_url")))]),_c("br"),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.appstore_url,expression:"store_settings.appstore_url"}],staticClass:"form-control",attrs:{type:"url",name:"appstore_url",id:"appstore_url",placeholder:_vm.__("appstore_url")},domProps:{value:_vm.store_settings.appstore_url},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"appstore_url",$event.target.value);}}})]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"mt-3"},[_c("div",{staticClass:"row"},[language.is_default?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"is_version_system_on"}},[_vm._v(_vm._s(_vm.__("android_version_system_status")))]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.is_version_system_on,expression:"store_settings.is_version_system_on"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"is_version_system_on",id:"is_version_system_on"},domProps:{checked:Array.isArray(_vm.store_settings.is_version_system_on)?_vm._i(_vm.store_settings.is_version_system_on,null)>-1:_vm._q(_vm.store_settings.is_version_system_on,"1")},on:{change:function change($event){var $$a=_vm.store_settings.is_version_system_on,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"is_version_system_on",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"is_version_system_on",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"is_version_system_on",$$c);}}}})])]):_vm._e(),_vm._v(" "),_vm.store_settings.is_version_system_on==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"required_force_update"}},[_vm._v(_vm._s(_vm.__("android_required_force_update")))]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.required_force_update,expression:"store_settings.required_force_update"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"required_force_update",id:"required_force_update"},domProps:{checked:Array.isArray(_vm.store_settings.required_force_update)?_vm._i(_vm.store_settings.required_force_update,null)>-1:_vm._q(_vm.store_settings.required_force_update,"1")},on:{change:function change($event){var $$a=_vm.store_settings.required_force_update,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"required_force_update",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"required_force_update",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"required_force_update",$$c);}}}})])]):_vm._e(),_vm._v(" "),_vm.store_settings.is_version_system_on==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"current_version"}},[_vm._v(_vm._s(_vm.__("android_current_version_of_app")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.current_version,expression:"store_settings.current_version"}],staticClass:"form-control",attrs:{type:"text",required:"",name:"current_version",id:"current_version",placeholder:"Current Version"},domProps:{value:_vm.store_settings.current_version},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"current_version",$event.target.value);}}})]):_vm._e()])]):_vm._e(),_vm._v(" "),language.is_default?_c("div",{staticClass:"mb-3"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"ios_is_version_system_on"}},[_vm._v(_vm._s(_vm.__("ios_version_system_status")))]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.ios_is_version_system_on,expression:"store_settings.ios_is_version_system_on"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"ios_is_version_system_on",id:"ios_is_version_system_on"},domProps:{checked:Array.isArray(_vm.store_settings.ios_is_version_system_on)?_vm._i(_vm.store_settings.ios_is_version_system_on,null)>-1:_vm._q(_vm.store_settings.ios_is_version_system_on,"1")},on:{change:function change($event){var $$a=_vm.store_settings.ios_is_version_system_on,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"ios_is_version_system_on",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"ios_is_version_system_on",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"ios_is_version_system_on",$$c);}}}})])]),_vm._v(" "),_vm.store_settings.ios_is_version_system_on==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"ios_required_force_update"}},[_vm._v(_vm._s(_vm.__("ios_required_force_update")))]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.ios_required_force_update,expression:"store_settings.ios_required_force_update"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"ios_required_force_update",id:"ios_required_force_update"},domProps:{checked:Array.isArray(_vm.store_settings.ios_required_force_update)?_vm._i(_vm.store_settings.ios_required_force_update,null)>-1:_vm._q(_vm.store_settings.ios_required_force_update,"1")},on:{change:function change($event){var $$a=_vm.store_settings.ios_required_force_update,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"ios_required_force_update",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"ios_required_force_update",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"ios_required_force_update",$$c);}}}})])]):_vm._e(),_vm._v(" "),_vm.store_settings.ios_is_version_system_on==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"ios_current_version"}},[_vm._v(_vm._s(_vm.__("ios_current_version_of_app")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.ios_current_version,expression:"store_settings.ios_current_version"}],staticClass:"form-control",attrs:{type:"text",required:"",name:"ios_current_version",id:"ios_current_version",placeholder:"IOS Current Version"},domProps:{value:_vm.store_settings.ios_current_version},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"ios_current_version",$event.target.value);}}})]):_vm._e()])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_vm.$can("manage_store_settings")?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading}},[_vm._v(_vm._s(_vm.__("update"))+"\n                                                                    "),_vm.isLoading?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1):_vm._e()],1)])]);}),1)],1)])])]):_vm._e(),_vm._v(" "),_vm.activeTab===_vm.__("frontend_home_setting")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("frontend_home_setting")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(_vm._s(_vm.__("in_this_mode_you_can_set_your_app_web_home_page"))+".")]),_vm._v(" "),_c("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.saveFrontendHomeSetting.apply(null,arguments);}}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6 mt-0"},[_c("label",{attrs:{"for":""}},[_vm._v(_vm._s(_vm.__("display_category_section_in_home_page"))+"? ")]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.is_category_section_in_homepage,expression:"store_settings.is_category_section_in_homepage"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"is_category_section_in_homepage",id:"is_category_section_in_homepage"},domProps:{checked:Array.isArray(_vm.store_settings.is_category_section_in_homepage)?_vm._i(_vm.store_settings.is_category_section_in_homepage,null)>-1:_vm._q(_vm.store_settings.is_category_section_in_homepage,"1")},on:{change:function change($event){var $$a=_vm.store_settings.is_category_section_in_homepage,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"is_category_section_in_homepage",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"is_category_section_in_homepage",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"is_category_section_in_homepage",$$c);}}}})]),_vm._v(" "),_vm.store_settings.is_category_section_in_homepage==1?_c("div",{staticClass:"mt-2"},[_c("label",{attrs:{"for":"count_category_section_in_homepage"}},[_vm._v(_vm._s(_vm.__("count_category_display_in_homepage")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.count_category_section_in_homepage,expression:"store_settings.count_category_section_in_homepage"}],staticClass:"form-control",attrs:{type:"number",name:"message",id:"count_category_section_in_homepage",min:1,required:_vm.store_settings.is_category_section_in_homepage==1,placeholder:"Enter Category Number Here!"},domProps:{value:_vm.store_settings.count_category_section_in_homepage},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"count_category_section_in_homepage",$event.target.value);},_vm.validateInput]}}),_vm._v(" "),_vm.validationCategoryError?_c("span",{staticClass:"error"},[_vm._v(_vm._s(_vm.validationCategoryError))]):_vm._e()]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":""}},[_vm._v(_vm._s(_vm.__("display_brand_section_in_home_page"))+"? ")]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.is_brand_section_in_homepage,expression:"store_settings.is_brand_section_in_homepage"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"is_brand_section_in_homepage",id:"is_brand_section_in_homepage"},domProps:{checked:Array.isArray(_vm.store_settings.is_brand_section_in_homepage)?_vm._i(_vm.store_settings.is_brand_section_in_homepage,null)>-1:_vm._q(_vm.store_settings.is_brand_section_in_homepage,"1")},on:{change:function change($event){var $$a=_vm.store_settings.is_brand_section_in_homepage,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"is_brand_section_in_homepage",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"is_brand_section_in_homepage",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"is_brand_section_in_homepage",$$c);}}}})]),_vm._v(" "),_vm.store_settings.is_brand_section_in_homepage==1?_c("div",{staticClass:"mt-2"},[_c("label",{attrs:{"for":"count_brand_section_in_homepage"}},[_vm._v(_vm._s(_vm.__("count_brand_display_in_homepage")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.count_brand_section_in_homepage,expression:"store_settings.count_brand_section_in_homepage"}],staticClass:"form-control",attrs:{type:"number",name:"message",id:"count_brand_section_in_homepage",min:1,required:_vm.store_settings.is_brand_section_in_homepage==1,placeholder:"Enter Brand Number Here!"},domProps:{value:_vm.store_settings.count_brand_section_in_homepage},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"count_brand_section_in_homepage",$event.target.value);},_vm.validateInput]}}),_vm._v(" "),_vm.validationBrandError?_c("span",{staticClass:"error"},[_vm._v(_vm._s(_vm.validationBrandError))]):_vm._e()]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":""}},[_vm._v(_vm._s(_vm.__("display_seller_section_in_home_page"))+"?")]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.is_seller_section_in_homepage,expression:"store_settings.is_seller_section_in_homepage"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"is_seller_section_in_homepage",id:"is_seller_section_in_homepage"},domProps:{checked:Array.isArray(_vm.store_settings.is_seller_section_in_homepage)?_vm._i(_vm.store_settings.is_seller_section_in_homepage,null)>-1:_vm._q(_vm.store_settings.is_seller_section_in_homepage,"1")},on:{change:function change($event){var $$a=_vm.store_settings.is_seller_section_in_homepage,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"is_seller_section_in_homepage",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"is_seller_section_in_homepage",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"is_seller_section_in_homepage",$$c);}}}})]),_vm._v(" "),_vm.store_settings.is_seller_section_in_homepage==1?_c("div",{staticClass:"mt-2"},[_c("label",{attrs:{"for":"count_seller_section_in_homepage"}},[_vm._v(_vm._s(_vm.__("count_seller_display_in_homepage")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.count_seller_section_in_homepage,expression:"store_settings.count_seller_section_in_homepage"}],staticClass:"form-control",attrs:{type:"number",name:"message",id:"count_seller_section_in_homepage",min:1,required:_vm.store_settings.is_seller_section_in_homepage==1,placeholder:"Enter Seller Number Here!"},domProps:{value:_vm.store_settings.count_seller_section_in_homepage},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"count_seller_section_in_homepage",$event.target.value);},_vm.validateInput]}}),_vm._v(" "),_vm.validationSellerError?_c("span",{staticClass:"error"},[_vm._v(_vm._s(_vm.validationSellerError))]):_vm._e()]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":""}},[_vm._v(_vm._s(_vm.__("display_country_section_in_home_page"))+"? ")]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.is_country_section_in_homepage,expression:"store_settings.is_country_section_in_homepage"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"is_country_section_in_homepage",id:"is_country_section_in_homepage"},domProps:{checked:Array.isArray(_vm.store_settings.is_country_section_in_homepage)?_vm._i(_vm.store_settings.is_country_section_in_homepage,null)>-1:_vm._q(_vm.store_settings.is_country_section_in_homepage,"1")},on:{change:function change($event){var $$a=_vm.store_settings.is_country_section_in_homepage,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"is_country_section_in_homepage",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"is_country_section_in_homepage",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"is_country_section_in_homepage",$$c);}}}})]),_vm._v(" "),_vm.store_settings.is_country_section_in_homepage==1?_c("div",{staticClass:"mt-2"},[_c("label",{attrs:{"for":"count_country_section_in_homepage"}},[_vm._v(_vm._s(_vm.__("count_country_display_in_homepage")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.count_country_section_in_homepage,expression:"store_settings.count_country_section_in_homepage"}],staticClass:"form-control",attrs:{type:"number",name:"message",id:"count_country_section_in_homepage",min:1,required:_vm.store_settings.is_country_section_in_homepage==1,placeholder:"Enter Country Number Here!"},domProps:{value:_vm.store_settings.count_country_section_in_homepage},on:{input:[function($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"count_country_section_in_homepage",$event.target.value);},_vm.validateInput]}}),_vm._v(" "),_vm.validationCountryError?_c("span",{staticClass:"error"},[_vm._v(_vm._s(_vm.validationCountryError))]):_vm._e()]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_vm.$can("manage_store_settings")?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading}},[_vm._v(_vm._s(_vm.__("update"))+"\n                                                            "),_vm.isLoading?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1):_vm._e()],1)])])])])]):_vm._e(),_vm._v(" "),_vm.activeTab===_vm.__("smtp_mail_setting")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("smtp_mail_setting")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.saveSmtpMailSetting.apply(null,arguments);}}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6 mt-0"},[_c("label",{attrs:{"for":"mailer"}},[_vm._v(_vm._s(_vm.__("mailer"))+":")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.mailer,expression:"store_settings.mailer"}],staticClass:"form-control form-select",attrs:{required:"",name:"mailer",id:"mailer"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.store_settings,"mailer",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:"smtp"}},[_vm._v("SMTP")]),_vm._v(" "),_c("option",{attrs:{value:"sendmail"}},[_vm._v("Sendmail")])]),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("( "+_vm._s(_vm.__("select_mail_driver"))+")")])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"smtp_from_mail"}},[_vm._v(_vm._s(_vm.__("from_email_id"))+":")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.smtp_from_mail,expression:"store_settings.smtp_from_mail"}],staticClass:"form-control",attrs:{type:"text",required:"",name:"smtp_from_mail",id:"smtp_from_mail",placeholder:"From SMTP Email ID"},domProps:{value:_vm.store_settings.smtp_from_mail},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"smtp_from_mail",$event.target.value);}}}),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("( "+_vm._s(_vm.__("this_email_id_will_be_used_in_smtp_mail_system"))+")")])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"smtp_reply_to"}},[_vm._v(_vm._s(_vm.__("reply_to_email_id"))+":")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.smtp_reply_to,expression:"store_settings.smtp_reply_to"}],staticClass:"form-control",attrs:{type:"email",required:"",name:"smtp_reply_to",id:"smtp_reply_to",placeholder:"From SMTP Email ID"},domProps:{value:_vm.store_settings.smtp_reply_to},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"smtp_reply_to",$event.target.value);}}}),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("("+_vm._s(_vm.__("this_email_id_will_be_used_in_smtp_mail_system"))+")")])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"smtp_email_password"}},[_vm._v(_vm._s(_vm.__("smtp_email_password"))+": ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.smtp_email_password,expression:"store_settings.smtp_email_password"}],staticClass:"form-control",attrs:{type:"text",required:"",name:"smtp_email_password",id:"smtp_email_password",placeholder:"Enter your SMTP email password"},domProps:{value:_vm.store_settings.smtp_email_password},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"smtp_email_password",$event.target.value);}}})]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"smtp_host"}},[_vm._v(_vm._s(_vm.__("smtp_host"))+": ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.smtp_host,expression:"store_settings.smtp_host"}],staticClass:"form-control",attrs:{type:"text",required:"",name:"smtp_host",id:"smtp_host",placeholder:"SMTP Host address"},domProps:{value:_vm.store_settings.smtp_host},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"smtp_host",$event.target.value);}}})]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"smtp_port"}},[_vm._v(_vm._s(_vm.__("smtp_port"))+":")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.smtp_port,expression:"store_settings.smtp_port"}],staticClass:"form-control",attrs:{type:"text",required:"",name:"smtp_port",id:"smtp_port",placeholder:"SMTP Port"},domProps:{value:_vm.store_settings.smtp_port},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"smtp_port",$event.target.value);}}})]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"smtp_content_type"}},[_vm._v(_vm._s(_vm.__("smtp_email_content_type"))+": ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.smtp_content_type,expression:"store_settings.smtp_content_type"}],staticClass:"form-control form-select",attrs:{name:"smtp_content_type",id:"smtp_content_type"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.store_settings,"smtp_content_type",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:""}},[_vm._v(_vm._s(_vm.__("select_smtp_email_content_tpe")))]),_vm._v(" "),_c("option",{attrs:{value:"html"}},[_vm._v(_vm._s(_vm.__("html")))]),_vm._v(" "),_c("option",{attrs:{value:"text"}},[_vm._v(_vm._s(_vm.__("text")))])])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"smtp_encryption_type"}},[_vm._v(_vm._s(_vm.__("smtp_encryption"))+": ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.smtp_encryption_type,expression:"store_settings.smtp_encryption_type"}],staticClass:"form-control form-select",attrs:{name:"smtp_encryption_type",id:"smtp_encryption_type"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.store_settings,"smtp_encryption_type",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:""}},[_vm._v(_vm._s(_vm.__("select_smtp_encryption_type"))+"\n                                                            ")]),_vm._v(" "),_c("option",{attrs:{value:"tls"}},[_vm._v(_vm._s(_vm.__("tls")))]),_vm._v(" "),_c("option",{attrs:{value:"ssl"}},[_vm._v(_vm._s(_vm.__("ssl")))])])])]),_vm._v(" "),_c("hr"),_vm._v(" "),_c("div",{staticClass:"row"},[_c("h6",[_vm._v(_vm._s(_vm.__("email_test")))]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("div",{staticClass:"d-flex gap-3"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.test_email,expression:"store_settings.test_email"}],staticClass:"form-control",attrs:{type:"text",name:"test_email",placeholder:"Enter Email Address for Test"},domProps:{value:_vm.store_settings.test_email},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"test_email",$event.target.value);}}}),_vm._v(" "),_c("b-button",{staticClass:"m-0 text-nowrap",attrs:{type:"button",variant:"primary",disabled:_vm.isSendingTestEmail},on:{click:_vm.testMail}},[_vm._v("\n                                                                "+_vm._s(_vm.__("test_mail"))+"\n                                                                "),_vm.isSendingTestEmail?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1)],1)])]),_vm._v(" "),_c("div",{staticClass:"row mt-3"},[_c("div",{staticClass:"form-group col-md-6"},[_vm.$can("manage_store_settings")?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading}},[_vm._v(_vm._s(_vm.__("update"))+"\n                                                            "),_vm.isLoading?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1):_vm._e()],1)])])])])]):_vm._e(),_vm._v(" "),_vm.activeTab===_vm.__("third_party_api_credentials")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("third_party_api_credentials")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.saveThirdPartyApiSetting.apply(null,arguments);}}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6 mt-0"},[_c("label",{attrs:{"for":"google_place_api_key"}},[_vm._v(_vm._s(_vm.__("place_api_key")))]),_vm._v(" "),_c("input",{staticClass:"form-control",attrs:{type:"text",name:"google_place_api_key",id:"google_place_api_key",placeholder:_vm.shouldHideThirdPartyValues?_vm.__("demo_mode"):"Google Place Api Key",readonly:_vm.shouldHideThirdPartyValues},domProps:{value:_vm.shouldHideThirdPartyValues?"":_vm.store_settings.google_place_api_key},on:{input:function input($event){!_vm.shouldHideThirdPartyValues&&(_vm.store_settings.google_place_api_key=$event.target.value);}}}),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.apiKey,expression:"store_settings.apiKey"}],staticClass:"form-control",attrs:{type:"hidden",name:"apiKey",id:"apiKey",placeholder:"apiKey"},domProps:{value:_vm.store_settings.apiKey},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"apiKey",$event.target.value);}}})]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"google_map_api_key"}},[_vm._v(_vm._s(_vm.__("map_api_key")))]),_vm._v(" "),_c("input",{staticClass:"form-control",attrs:{type:"text",name:"google_map_api_key",id:"google_map_api_key",placeholder:_vm.shouldHideThirdPartyValues?_vm.__("demo_mode"):"Google Map Api Key",readonly:_vm.shouldHideThirdPartyValues},domProps:{value:_vm.shouldHideThirdPartyValues?"":_vm.store_settings.google_map_api_key},on:{input:function input($event){!_vm.shouldHideThirdPartyValues&&(_vm.store_settings.google_map_api_key=$event.target.value);}}}),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.googleMapApiKey,expression:"store_settings.googleMapApiKey"}],staticClass:"form-control",attrs:{type:"hidden",name:"googleMapApiKey",id:"googleMapApiKey",placeholder:"googleMapApiKey"},domProps:{value:_vm.store_settings.googleMapApiKey},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"googleMapApiKey",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"text_gen_key "}},[_vm._v(_vm._s(_vm.__("gemini_key")))]),_vm._v(" "),_c("input",{staticClass:"form-control",attrs:{type:"text",name:"text_gen_key",id:"text_gen_key",placeholder:_vm.shouldHideThirdPartyValues?_vm.__("demo_mode"):"Gemini Key",readonly:_vm.shouldHideThirdPartyValues},domProps:{value:_vm.shouldHideThirdPartyValues?"":_vm.store_settings.text_gen_key},on:{input:function input($event){!_vm.shouldHideThirdPartyValues&&(_vm.store_settings.text_gen_key=$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_vm.$can("manage_store_settings")&&(_vm.$isDemo!=1||_vm.login_user&&_vm.login_user.id===1)?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading||_vm.shouldHideThirdPartyValues}},[_vm._v(_vm._s(_vm.__("update"))+"\n                                                            "),_vm.isLoading?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1):_vm._e()],1)])])])])]):_vm._e(),_vm._v(" "),_vm.activeTab===_vm.__("seller_setting")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("seller_setting")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.saveSellerSetting.apply(null,arguments);}}},[_c("div",{staticClass:"row -align-items-center"},[_c("div",{staticClass:"form-group col-md-6 mt-0"},[_c("label",{attrs:{"for":"one_seller_cart"}},[_vm._v(_vm._s(_vm.__("one_seller_cart"))),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("( "+_vm._s(_vm.__("enable"))+"/"+_vm._s(_vm.__("disable"))+"\n                                                                )")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.one_seller_cart,expression:"store_settings.one_seller_cart"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"one_seller_cart",id:"one_seller_cart"},domProps:{checked:Array.isArray(_vm.store_settings.one_seller_cart)?_vm._i(_vm.store_settings.one_seller_cart,null)>-1:_vm._q(_vm.store_settings.one_seller_cart,"1")},on:{change:function change($event){var $$a=_vm.store_settings.one_seller_cart,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"one_seller_cart",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"one_seller_cart",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"one_seller_cart",$$c);}}}})])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"seller_commission"}},[_vm._v(_vm._s(_vm.__("seller_commission")))]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.seller_commission,expression:"store_settings.seller_commission"}],staticClass:"form-control",attrs:{type:"number",name:"seller_commission",id:"seller_commission",placeholder:"Seller Commission",step:"0.1",min:"0",max:"100"},domProps:{value:_vm.store_settings.seller_commission},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"seller_commission",$event.target.value);}}})]),_vm._v(" "),_vm.store_settings.one_seller_cart==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"self_pickup_mode"}},[_vm._v(_vm._s(_vm.__("self_pickup_mode"))),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("( "+_vm._s(_vm.__("enable"))+"/"+_vm._s(_vm.__("disable"))+"\n                                                                )")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.self_pickup_mode,expression:"store_settings.self_pickup_mode"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"self_pickup_mode",id:"self_pickup_mode"},domProps:{checked:Array.isArray(_vm.store_settings.self_pickup_mode)?_vm._i(_vm.store_settings.self_pickup_mode,null)>-1:_vm._q(_vm.store_settings.self_pickup_mode,"1")},on:{change:function change($event){var $$a=_vm.store_settings.self_pickup_mode,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"self_pickup_mode",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"self_pickup_mode",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"self_pickup_mode",$$c);}}}})]),_vm._v(" "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(_vm._s(_vm.__("self_pickup_mode_description")))])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_vm.$can("manage_store_settings")?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading}},[_vm._v(_vm._s(_vm.__("update"))+"\n                                                            "),_vm.isLoading?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1):_vm._e()],1)])])])])]):_vm._e(),_vm._v(" "),_vm.activeTab===_vm.__("login_setting")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("login_setting")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.saveRecordLoginSetting.apply(null,arguments);}}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6 mb-3"},[_c("label",{attrs:{"for":"phone_login"}},[_vm._v(_vm._s(_vm.__("phone_login"))+"\n                                                            "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("( "+_vm._s(_vm.__("enable"))+"/"+_vm._s(_vm.__("disable"))+"\n                                                                )")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.login_settings.phone_login,expression:"login_settings.phone_login"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"phone_login",id:"phone_login"},domProps:{checked:Array.isArray(_vm.login_settings.phone_login)?_vm._i(_vm.login_settings.phone_login,null)>-1:_vm._q(_vm.login_settings.phone_login,"1")},on:{change:function change($event){var $$a=_vm.login_settings.phone_login,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.login_settings,"phone_login",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.login_settings,"phone_login",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.login_settings,"phone_login",$$c);}}}})])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"google_login"}},[_vm._v(_vm._s(_vm.__("google_login"))+"\n                                                            "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("( "+_vm._s(_vm.__("enable"))+"/"+_vm._s(_vm.__("disable"))+"\n                                                                )")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.login_settings.google_login,expression:"login_settings.google_login"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"google_login",id:"google_login"},domProps:{checked:Array.isArray(_vm.login_settings.google_login)?_vm._i(_vm.login_settings.google_login,null)>-1:_vm._q(_vm.login_settings.google_login,"1")},on:{change:function change($event){var $$a=_vm.login_settings.google_login,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.login_settings,"google_login",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.login_settings,"google_login",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.login_settings,"google_login",$$c);}}}})])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"apple_login"}},[_vm._v(_vm._s(_vm.__("apple_login"))+"\n                                                            "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("( "+_vm._s(_vm.__("enable"))+"/"+_vm._s(_vm.__("disable"))+"\n                                                                )")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.login_settings.apple_login,expression:"login_settings.apple_login"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"apple_login",id:"apple_login"},domProps:{checked:Array.isArray(_vm.login_settings.apple_login)?_vm._i(_vm.login_settings.apple_login,null)>-1:_vm._q(_vm.login_settings.apple_login,"1")},on:{change:function change($event){var $$a=_vm.login_settings.apple_login,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.login_settings,"apple_login",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.login_settings,"apple_login",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.login_settings,"apple_login",$$c);}}}})])]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"apple_login"}},[_vm._v(_vm._s(_vm.__("email_login"))+"\n                                                            "),_c("span",{staticClass:"text text-primary font-size-13"},[_vm._v("( "+_vm._s(_vm.__("enable"))+"/"+_vm._s(_vm.__("disable"))+"\n                                                                )")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.login_settings.email_login,expression:"login_settings.email_login"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"email_login",id:"email_login"},domProps:{checked:Array.isArray(_vm.login_settings.email_login)?_vm._i(_vm.login_settings.email_login,null)>-1:_vm._q(_vm.login_settings.email_login,"1")},on:{change:function change($event){var $$a=_vm.login_settings.email_login,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.login_settings,"email_login",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.login_settings,"email_login",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.login_settings,"email_login",$$c);}}}})])]),_vm._v(" "),_vm.login_settings.phone_login=="1"?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"phone_auth_otp"}},[_vm._v(_vm._s(_vm.__("phone_auth_otp"))+"\n                                                            "),_c("small",[_vm._v("[ "+_vm._s(_vm.__("enable"))+" / "+_vm._s(_vm.__("disable"))+" ]\n                                                            ")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.login_settings.phone_auth_otp,expression:"login_settings.phone_auth_otp"}],staticClass:"form-check-input",attrs:{id:"phone_auth_otp",type:"checkbox","true-value":"1","false-value":"0"},domProps:{checked:Array.isArray(_vm.login_settings.phone_auth_otp)?_vm._i(_vm.login_settings.phone_auth_otp,null)>-1:_vm._q(_vm.login_settings.phone_auth_otp,"1")},on:{change:function change($event){var $$a=_vm.login_settings.phone_auth_otp,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.login_settings,"phone_auth_otp",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.login_settings,"phone_auth_otp",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.login_settings,"phone_auth_otp",$$c);}}}})])]):_vm._e(),_vm._v(" "),_vm.login_settings.phone_login=="1"?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"phone_auth_password"}},[_vm._v(_vm._s(_vm.__("phone_auth_password"))+"\n                                                            "),_c("small",[_vm._v("[ "+_vm._s(_vm.__("enable"))+" / "+_vm._s(_vm.__("disable"))+" ]\n                                                            ")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.login_settings.phone_auth_password,expression:"login_settings.phone_auth_password"}],staticClass:"form-check-input",attrs:{id:"phone_auth_password",type:"checkbox","true-value":"1","false-value":"0"},domProps:{checked:Array.isArray(_vm.login_settings.phone_auth_password)?_vm._i(_vm.login_settings.phone_auth_password,null)>-1:_vm._q(_vm.login_settings.phone_auth_password,"1")},on:{change:function change($event){var $$a=_vm.login_settings.phone_auth_password,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.login_settings,"phone_auth_password",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.login_settings,"phone_auth_password",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.login_settings,"phone_auth_password",$$c);}}}})])]):_vm._e(),_vm._v(" "),_vm.login_settings.phone_auth_otp=="1"||_vm.login_settings.phone_auth_password=="1"?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"firebase_authentication"}},[_vm._v(_vm._s(_vm.__("firebase_authentication"))+"\n                                                            "),_c("small",[_vm._v("[ "+_vm._s(_vm.__("enable"))+" / "+_vm._s(_vm.__("disable"))+" ]\n                                                            ")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.login_settings.firebase_authentication,expression:"login_settings.firebase_authentication"}],staticClass:"form-check-input",attrs:{id:"firebase_authentication",type:"checkbox","true-value":"1","false-value":"0"},domProps:{checked:Array.isArray(_vm.login_settings.firebase_authentication)?_vm._i(_vm.login_settings.firebase_authentication,null)>-1:_vm._q(_vm.login_settings.firebase_authentication,"1")},on:{change:function change($event){var $$a=_vm.login_settings.firebase_authentication,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.login_settings,"firebase_authentication",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.login_settings,"firebase_authentication",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.login_settings,"firebase_authentication",$$c);}}}})])]):_vm._e(),_vm._v(" "),_vm.login_settings.phone_auth_otp=="1"||_vm.login_settings.phone_auth_password=="1"?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"custom_sms_gateway_otp_based"}},[_vm._v(_vm._s(_vm.__("custom_sms_gateway_otp_based"))+"\n                                                            "),_c("small",[_vm._v("[ "+_vm._s(_vm.__("enable"))+" / "+_vm._s(_vm.__("disable"))+" ]\n                                                            ")])]),_c("br"),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.login_settings.custom_sms_gateway_otp_based,expression:"login_settings.custom_sms_gateway_otp_based"}],staticClass:"form-check-input",attrs:{id:"custom_sms_gateway_otp_based",type:"checkbox","true-value":"1","false-value":"0"},domProps:{checked:Array.isArray(_vm.login_settings.custom_sms_gateway_otp_based)?_vm._i(_vm.login_settings.custom_sms_gateway_otp_based,null)>-1:_vm._q(_vm.login_settings.custom_sms_gateway_otp_based,"1")},on:{change:function change($event){var $$a=_vm.login_settings.custom_sms_gateway_otp_based,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.login_settings,"custom_sms_gateway_otp_based",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.login_settings,"custom_sms_gateway_otp_based",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.login_settings,"custom_sms_gateway_otp_based",$$c);}}}})])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_vm.$can("manage_store_settings")?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading}},[_vm._v("\n                                                            "+_vm._s(_vm.__("update"))+"\n                                                            "),_vm.isLoading?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1):_vm._e()],1)])])])])]):_vm._e(),_vm._v(" "),_vm.activeTab===_vm.__("cart_setting")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("cart_setting")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.saveCartSetting.apply(null,arguments);}}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6 mt-0"},[_c("label",{attrs:{"for":"low_stock_limit"}},[_vm._v(_vm._s(_vm.__("cart_notification"))+"\n                                                        ")]),_vm._v(" "),_c("i",{staticClass:"fa fa-question-circle tooltip-icon"},[_c("span",{staticClass:"tooltip-text"},[_vm._v(_vm._s(_vm.__("product_will_be_add_incart_without_login")))])]),_vm._v(" "),_c("div",{staticClass:"form-check form-switch"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.cart_notification,expression:"store_settings.cart_notification"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"1","false-value":"0",name:"cart_notification",id:"cart_notification"},domProps:{checked:Array.isArray(_vm.store_settings.cart_notification)?_vm._i(_vm.store_settings.cart_notification,null)>-1:_vm._q(_vm.store_settings.cart_notification,"1")},on:{change:function change($event){var $$a=_vm.store_settings.cart_notification,$$el=$event.target,$$c=$$el.checked?"1":"0";if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.store_settings,"cart_notification",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.store_settings,"cart_notification",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.store_settings,"cart_notification",$$c);}}}})])]),_vm._v(" "),_vm.store_settings.cart_notification==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"notification_delay_after_cart_addition"}},[_vm._v(" "+_vm._s(_vm.__("notification_delay_after_cart_addition")))]),_vm._v(" "),_c("i",{staticClass:"text-danger"},[_vm._v("* ")]),_c("i",{staticClass:"fa fa-question-circle tooltip-icon"},[_c("span",{staticClass:"tooltip-text"},[_vm._v(_vm._s(_vm.__("notification_delay_after_cart_addition_tooltip")))])]),_vm._v(" "),_c("div",{staticClass:"input-group"},[_c("div",{staticClass:"input-group-prepend"},[_c("div",{staticClass:"input-group-text myDivClass",staticStyle:{height:"42px"}},[_c("span",{staticClass:"mySpanClass"},[_vm._v(_vm._s(_vm.__("minutes")))])])]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.notification_delay_after_cart_addition,expression:"store_settings.notification_delay_after_cart_addition"}],staticClass:"form-control",staticStyle:{height:"42px"},attrs:{type:"number",name:"notification_delay_after_cart_addition",id:"notification_delay_after_cart_addition",min:"0"},domProps:{value:_vm.store_settings.notification_delay_after_cart_addition},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"notification_delay_after_cart_addition",$event.target.value);}}})])]):_vm._e(),_vm._v(" "),_vm.store_settings.cart_notification==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"notification_interval"}},[_vm._v(" "+_vm._s(_vm.__("notification_interval")))]),_vm._v(" "),_c("i",{staticClass:"text-danger"},[_vm._v("* ")]),_c("i",{staticClass:"fa fa-question-circle tooltip-icon"},[_c("span",{staticClass:"tooltip-text"},[_vm._v(_vm._s(_vm.__("notification_delay_after_cart_addition_tooltip")))])]),_vm._v(" "),_c("div",{staticClass:"input-group"},[_c("div",{staticClass:"input-group-prepend"},[_c("div",{staticClass:"input-group-text myDivClass",staticStyle:{height:"42px"}},[_c("span",{staticClass:"mySpanClass"},[_vm._v(_vm._s(_vm.__("minutes")))])])]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.notification_interval,expression:"store_settings.notification_interval"}],staticClass:"form-control",staticStyle:{height:"42px"},attrs:{type:"number",name:"notification_interval",id:"notification_interval",min:"0"},domProps:{value:_vm.store_settings.notification_interval},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"notification_interval",$event.target.value);}}})])]):_vm._e(),_vm._v(" "),_vm.store_settings.cart_notification==1?_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"notification_stop_time"}},[_vm._v(" "+_vm._s(_vm.__("notification_stop_time")))]),_vm._v(" "),_c("i",{staticClass:"text-danger"},[_vm._v("* ")]),_c("i",{staticClass:"fa fa-question-circle tooltip-icon"},[_c("span",{staticClass:"tooltip-text"},[_vm._v(_vm._s(_vm.__("notification_stop_time_tooltip")))])]),_vm._v(" "),_c("div",{staticClass:"input-group"},[_c("div",{staticClass:"input-group-prepend"},[_c("div",{staticClass:"input-group-text myDivClass",staticStyle:{height:"42px"}},[_c("span",{staticClass:"mySpanClass"},[_vm._v(_vm._s(_vm.__("minutes")))])])]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.store_settings.notification_stop_time,expression:"store_settings.notification_stop_time"}],staticClass:"form-control",staticStyle:{height:"42px"},attrs:{type:"number",name:"notification_stop_time",id:"notification_stop_time",min:"0"},domProps:{value:_vm.store_settings.notification_stop_time},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.store_settings,"notification_stop_time",$event.target.value);}}})])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_vm.$can("manage_store_settings")?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading}},[_vm._v(_vm._s(_vm.__("update"))+"\n                                                            "),_vm.isLoading?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1):_vm._e()],1)])])])])]):_vm._e(),_vm._v(" "),_vm.activeTab===_vm.__("refer_earn_setting")?_c("div",[_c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("h4",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.__("refer_earn_setting")))])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.saveReferEarnSetting.apply(null,arguments);}}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6 mt-0"},[_c("label",{attrs:{"for":"referral_min_order_amount"}},[_vm._v(_vm._s(_vm.__("minimum_order_for_referral")))]),_c("br"),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.refer_earn_settings.referral_min_order_amount,expression:"refer_earn_settings.referral_min_order_amount"}],staticClass:"form-control",attrs:{type:"number",name:"referral_min_order_amount",id:"referral_min_order_amount",placeholder:_vm.__("minimum_order_for_referral")},domProps:{value:_vm.refer_earn_settings.referral_min_order_amount},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.refer_earn_settings,"referral_min_order_amount",$event.target.value);}}})]),_vm._v(" "),_c("div",{staticClass:"form-group col-md-6"},[_c("label",{attrs:{"for":"referral_credit_first_order"}},[_vm._v(_vm._s(_vm.__("referral_credit_first_order")))]),_c("br"),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.refer_earn_settings.referral_credit_first_order,expression:"refer_earn_settings.referral_credit_first_order"}],staticClass:"form-control",attrs:{type:"number",name:"referral_credit_first_order",id:"referral_credit_first_order",placeholder:_vm.__("referral_credit_first_order")},domProps:{value:_vm.refer_earn_settings.referral_credit_first_order},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.refer_earn_settings,"referral_credit_first_order",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"form-group col-md-6"},[_vm.$can("manage_store_settings")?_c("b-button",{attrs:{type:"submit",variant:"primary",disabled:_vm.isLoading}},[_vm._v("\n                                                            "+_vm._s(_vm.__("update"))+"\n                                                            "),_vm.isLoading?_c("b-spinner",{attrs:{small:"",label:"Spinning"}}):_vm._e()],1):_vm._e()],1)])])])])]):_vm._e()])])])])])])])]);};var staticRenderFns=[function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"text text-primary font-size-13"},[_vm._v(" ( "),_c("b",[_vm._v("TLS:\n                                                            ")]),_vm._v("587 "),_c("b",[_vm._v("SSL: ")]),_vm._v("465 )")]);}];render._withStripped=true;

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.file-input-div[data-v-3d8e2876] {\r\n    word-break: break-all;\r\n    overflow-wrap: break-word;\n}\r\n\r\n/* Limit Store Setting tab image preview size (Logo, FSSAI, Panel login background) */\n.store-settings-img-preview[data-v-3d8e2876] {\r\n    max-width: 200px;\r\n    max-height: 150px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    display: block;\r\n    margin-top: 0.5rem;\n}\r\n\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreSettings_vue_vue_type_style_index_0_id_3d8e2876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreSettings_vue_vue_type_style_index_0_id_3d8e2876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreSettings_vue_vue_type_style_index_0_id_3d8e2876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Setting/StoreSettings.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/Setting/StoreSettings.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StoreSettings_vue_vue_type_template_id_3d8e2876_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreSettings.vue?vue&type=template&id=3d8e2876&scoped=true */ "./resources/js/views/Setting/StoreSettings.vue?vue&type=template&id=3d8e2876&scoped=true");
/* harmony import */ var _StoreSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreSettings.vue?vue&type=script&lang=js */ "./resources/js/views/Setting/StoreSettings.vue?vue&type=script&lang=js");
/* harmony import */ var _StoreSettings_vue_vue_type_style_index_0_id_3d8e2876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css */ "./resources/js/views/Setting/StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StoreSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _StoreSettings_vue_vue_type_template_id_3d8e2876_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _StoreSettings_vue_vue_type_template_id_3d8e2876_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3d8e2876",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Setting/StoreSettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Setting/StoreSettings.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Setting/StoreSettings.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StoreSettings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Setting/StoreSettings.vue?vue&type=template&id=3d8e2876&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/Setting/StoreSettings.vue?vue&type=template&id=3d8e2876&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreSettings_vue_vue_type_template_id_3d8e2876_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreSettings_vue_vue_type_template_id_3d8e2876_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreSettings_vue_vue_type_template_id_3d8e2876_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StoreSettings.vue?vue&type=template&id=3d8e2876&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=template&id=3d8e2876&scoped=true");


/***/ }),

/***/ "./resources/js/views/Setting/StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/Setting/StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreSettings_vue_vue_type_style_index_0_id_3d8e2876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Setting/StoreSettings.vue?vue&type=style&index=0&id=3d8e2876&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.js ***!
  \******************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=89)}([function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(35),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},function(t,e,n){var r=n(59),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},function(t,e,n){var r=n(4),i=n(43).f,o=n(30),s=n(11),u=n(33),a=n(95),l=n(66);t.exports=function(t,e){var n,c,f,p,h,d=t.target,v=t.global,g=t.stat;if(n=v?r:g?r[d]||u(d,{}):(r[d]||{}).prototype)for(c in e){if(p=e[c],t.dontCallGetSet?(h=i(n,c),f=h&&h.value):f=n[c],!l(v?c:d+(g?".":"#")+c,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;a(p,f)}(t.sham||f&&f.sham)&&o(p,"sham",!0),s(n,c,p,t)}}},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(e,n(139))},function(t,e,n){var r=n(0);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(t,e,n){var r=n(8),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not an object")}},function(t,e,n){var r=n(1),i=n(14),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},function(t,e,n){var r=n(2),i=n(59),o=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===o}:function(t){return"object"==typeof t?null!==t:r(t)}},function(t,e,n){var r=n(4),i=n(47),o=n(7),s=n(75),u=n(72),a=n(76),l=i("wks"),c=r.Symbol,f=c&&c.for,p=a?c:c&&c.withoutSetter||s;t.exports=function(t){if(!o(l,t)||!u&&"string"!=typeof l[t]){var e="Symbol."+t;u&&o(c,t)?l[t]=c[t]:l[t]=a&&f?f(e):p(e)}return l[t]}},function(t,e,n){var r=n(123);t.exports=function(t){return r(t.length)}},function(t,e,n){var r=n(2),i=n(13),o=n(104),s=n(33);t.exports=function(t,e,n,u){u||(u={});var a=u.enumerable,l=void 0!==u.name?u.name:e;if(r(n)&&o(n,l,u),u.global)a?t[e]=n:s(e,n);else{try{u.unsafe?t[e]&&(a=!0):delete t[e]}catch(t){}a?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},function(t,e,n){var r=n(35),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},function(t,e,n){var r=n(5),i=n(62),o=n(77),s=n(6),u=n(50),a=TypeError,l=Object.defineProperty,c=Object.getOwnPropertyDescriptor;e.f=r?o?function(t,e,n){if(s(t),e=u(e),s(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=c(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(s(t),e=u(e),s(n),i)try{return l(t,e,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(24),i=Object;t.exports=function(t){return i(r(t))}},function(t,e,n){var r=n(1),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},function(t,e,n){var r=n(0),i=n(9),o=n(23),s=i("species");t.exports=function(t){return o>=51||!r(function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},function(t,e,n){var r=n(4),i=n(2),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},function(t,e,n){var r=n(15);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(39),i=n(24);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(29),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},function(t,e,n){var r=n(100),i=n(1),o=n(39),s=n(14),u=n(10),a=n(28),l=i([].push),c=function(t){var e=1==t,n=2==t,i=3==t,c=4==t,f=6==t,p=7==t,h=5==t||f;return function(d,v,g,y){for(var b,m,x=s(d),_=o(x),O=r(v,g),w=u(_),S=0,E=y||a,k=e?E(d,w):n||p?E(d,0):void 0;w>S;S++)if((h||S in _)&&(b=_[S],m=O(b,S,x),t))if(e)k[S]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return S;case 2:l(k,b)}else switch(t){case 4:return!1;case 7:l(k,b)}return f?-1:i||c?c:k}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},function(t,e){var n=TypeError;t.exports=function(t){if(t>9007199254740991)throw n("Maximum allowed index exceeded");return t}},function(t,e,n){var r,i,o=n(4),s=n(97),u=o.process,a=o.Deno,l=u&&u.versions||a&&a.version,c=l&&l.v8;c&&(r=c.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(i=+r[1]),t.exports=i},function(t,e,n){var r=n(40),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},function(t,e,n){var r=n(2),i=n(74),o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not a function")}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){var n=[][t];return!!n&&r(function(){n.call(null,e||function(){return 1},1)})}},function(t,e,n){"use strict";var r=n(5),i=n(18),o=TypeError,s=Object.getOwnPropertyDescriptor,u=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,e){if(i(t)&&!s(t,"length").writable)throw o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},function(t,e,n){var r=n(94);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},function(t,e,n){var r=n(51),i=n(2),o=n(15),s=n(9),u=s("toStringTag"),a=Object,l="Arguments"==o(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(t){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=a(t),u))?n:l?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},function(t,e,n){var r=n(5),i=n(13),o=n(31);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(50),i=n(13),o=n(31);t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},function(t,e,n){var r=n(4),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(0);t.exports=!r(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})},function(t,e,n){var r=n(5),i=n(7),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,u=i(o,"name"),a=u&&"something"===function(){}.name,l=u&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:l}},function(t,e,n){var r=n(15),i=n(1);t.exports=function(t){if("Function"===r(t))return i(t)}},function(t,e){t.exports={}},function(t,e,n){var r=n(1),i=n(0),o=n(15),s=Object,u=r("".split);t.exports=i(function(){return!s("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?u(t,""):s(t)}:s},function(t,e){t.exports=function(t){return null===t||void 0===t}},function(t,e,n){var r=n(17),i=n(2),o=n(44),s=n(76),u=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,u(t))}},function(t,e,n){var r,i=n(6),o=n(107),s=n(34),u=n(38),a=n(101),l=n(60),c=n(70),f=c("IE_PROTO"),p=function(){},h=function(t){return"<script>"+t+"<\/script>"},d=function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){var t,e=l("iframe");return e.style.display="none",a.appendChild(e),e.src=String("javascript:"),t=e.contentWindow.document,t.open(),t.write(h("document.F=Object")),t.close(),t.F},g=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}g="undefined"!=typeof document?document.domain&&r?d(r):v():d(r);for(var t=s.length;t--;)delete g.prototype[s[t]];return g()};u[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=i(t),n=new p,p.prototype=null,n[f]=t):n=g(),void 0===e?n:o.f(n,e)}},function(t,e,n){var r=n(5),i=n(12),o=n(110),s=n(31),u=n(19),a=n(50),l=n(7),c=n(62),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=u(t),e=a(e),c)try{return f(t,e)}catch(t){}if(l(t,e))return s(!i(o.f,t,e),t[e])}},function(t,e,n){var r=n(1);t.exports=r({}.isPrototypeOf)},function(t,e,n){"use strict";var r=n(12),i=n(1),o=n(20),s=n(69),u=n(117),a=n(47),l=n(42),c=n(64).get,f=n(118),p=n(119),h=a("native-string-replace",String.prototype.replace),d=RegExp.prototype.exec,v=d,g=i("".charAt),y=i("".indexOf),b=i("".replace),m=i("".slice),x=function(){var t=/a/,e=/b*/g;return r(d,t,"a"),r(d,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),_=u.BROKEN_CARET,O=void 0!==/()??/.exec("")[1];(x||O||_||f||p)&&(v=function(t){var e,n,i,u,a,f,p,w=this,S=c(w),E=o(t),k=S.raw;if(k)return k.lastIndex=w.lastIndex,e=r(v,k,E),w.lastIndex=k.lastIndex,e;var L=S.groups,P=_&&w.sticky,j=r(s,w),T=w.source,V=0,A=E;if(P&&(j=b(j,"y",""),-1===y(j,"g")&&(j+="g"),A=m(E,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==g(E,w.lastIndex-1))&&(T="(?: "+T+")",A=" "+A,V++),n=new RegExp("^(?:"+T+")",j)),O&&(n=new RegExp("^"+T+"$(?!\\s)",j)),x&&(i=w.lastIndex),u=r(d,P?n:w,A),P?u?(u.input=m(u.input,V),u[0]=m(u[0],V),u.index=w.lastIndex,w.lastIndex+=u[0].length):w.lastIndex=0:x&&u&&(w.lastIndex=w.global?u.index+u[0].length:i),O&&u&&u.length>1&&r(h,u[0],n,function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(u[a]=void 0)}),u&&L)for(u.groups=f=l(null),a=0;a<L.length;a++)p=L[a],f[p[0]]=u[p[1]];return u}),t.exports=v},function(t,e,n){var r=n(4),i=n(33),o=r["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=o},function(t,e,n){var r=n(103),i=n(46);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},function(t,e,n){var r=n(49),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},function(t,e,n){var r=n(105);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},function(t,e,n){var r=n(73),i=n(41);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},function(t,e,n){var r=n(9),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},function(t,e,n){"use strict";var r=n(5),i=n(4),o=n(1),s=n(66),u=n(11),a=n(7),l=n(102),c=n(44),f=n(41),p=n(73),h=n(0),d=n(67).f,v=n(43).f,g=n(13).f,y=n(122),b=n(71).trim,m=i.Number,x=m.prototype,_=i.TypeError,O=o("".slice),w=o("".charCodeAt),S=function(t){var e=p(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,n,r,i,o,s,u,a,l=p(t,"number");if(f(l))throw _("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=b(l),43===(e=w(l,0))||45===e){if(88===(n=w(l,2))||120===n)return NaN}else if(48===e){switch(w(l,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(o=O(l,2),s=o.length,u=0;u<s;u++)if((a=w(o,u))<48||a>i)return NaN;return parseInt(o,r)}return+l};if(s("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var k,L=function(t){var e=arguments.length<1?0:m(S(t)),n=this;return c(x,n)&&h(function(){y(n)})?l(Object(e),n,L):e},P=r?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;P.length>j;j++)a(m,k=P[j])&&!a(L,k)&&g(L,k,v(m,k));L.prototype=x,x.constructor=L,u(i,"Number",L,{constructor:!0})}},function(t,e,n){"use strict";var r=n(3),i=n(45);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},function(t,e,n){"use strict";function r(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function i(t){return function(){return!t.apply(void 0,arguments)}}function o(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function s(t,e,n,r){return t.filter(function(t){return o(r(t,n),e)})}function u(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(n){return n.reduce(function(n,r){return r[t]&&r[t].length?(n.push({$groupLabel:r[e],$isLabel:!0}),n.concat(r[t])):n},[])}}function l(t,e,r,i,o){return function(u){return u.map(function(u){var a;if(!u[r])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var l=s(u[r],t,e,o);return l.length?(a={},n.i(f.a)(a,i,u[i]),n.i(f.a)(a,r,l),a):[]})}}var c=n(88),f=n(87),p=n(129),h=(n.n(p),n(82)),d=(n.n(h),n(81)),v=(n.n(d),n(83)),g=(n.n(v),n(84)),y=(n.n(g),n(128)),b=(n.n(y),n(135)),m=(n.n(b),n(127)),x=(n.n(m),n(132)),_=(n.n(x),n(131)),O=(n.n(_),n(125)),w=(n.n(O),n(130)),S=(n.n(w),n(52)),E=(n.n(S),n(53)),k=(n.n(E),n(85)),L=(n.n(k),n(134)),P=(n.n(L),n(80)),j=(n.n(P),n(79)),T=(n.n(j),n(133)),V=(n.n(T),n(126)),A=(n.n(V),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}});e.a={data:function(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return r(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),n=this.options.concat();return n=this.internalSearch?this.groupValues?this.filterAndFlat(n,e,this.label):s(n,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(n):n,n=this.hideSelected?n.filter(i(this.isSelected)):n,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?n.push({isTag:!0,label:t}):n.unshift({isTag:!0,label:t})),n.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null))},search:function(){this.$emit("search-change",this.search,this.id)}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(t,e,n){return A(l(e,n,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return A(a(this.groupValues,this.groupLabel),u)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isOptionDisabled:function(t){return!!t.$isDisabled},getOptionLabel:function(t){if(r(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return r(e)?"":e},select:function(t,e){if(t.$isLabel&&this.groupSelect)return void this.selectGroup(t);if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isDisabled||t.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.multiple?this.$emit("input",this.internalValue.concat([t]),this.id):this.$emit("input",t,this.id),this.$emit("select",t,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup:function(t){var e=this,n=this.options.find(function(n){return n[e.groupLabel]===t.$groupLabel});if(n){if(this.wholeGroupSelected(n)){this.$emit("remove",n[this.groupValues],this.id);var r=this.trackBy?n[this.groupValues].map(function(t){return t[e.trackBy]}):n[this.groupValues],i=this.internalValue.filter(function(t){return-1===r.indexOf(e.trackBy?t[e.trackBy]:t)});this.$emit("input",i,this.id)}else{var o=n[this.groupValues].filter(function(t){return!(e.isOptionDisabled(t)||e.isSelected(t))});this.max&&o.splice(this.max-this.internalValue.length),this.$emit("select",o,this.id),this.$emit("input",this.internalValue.concat(o),this.id)}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected:function(t){var e=this;return t[this.groupValues].every(function(t){return e.isSelected(t)||e.isOptionDisabled(t)})},wholeGroupDisabled:function(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!t.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var r="object"===n.i(c.a)(t)?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.multiple){var i=this.internalValue.slice(0,r).concat(this.internalValue.slice(r+1));this.$emit("input",i,this.id)}else this.$emit("input",null,this.id);this.$emit("remove",t,this.id),this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(function(){return t.$refs.search&&t.$refs.search.focus()})):this.preventAutofocus||void 0!==this.$el&&this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?null!==this.$refs.search&&void 0!==this.$refs.search&&this.$refs.search.blur():void 0!==this.$el&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,n){"use strict";var r=n(52),i=(n.n(r),n(53)),o=(n.n(i),n(85)),s=(n.n(o),n(82)),u=(n.n(s),n(81)),a=(n.n(u),n(83)),l=(n.n(a),n(84)),c=(n.n(l),n(79));n.n(c);e.a={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1},pointer:function(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight:function(t,e){var n=this;if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":e.$isLabel}];var r=this.options.find(function(t){return t[n.groupLabel]===e.$groupLabel});return r&&!this.wholeGroupDisabled(r)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(r)}]:"multiselect__option--disabled"},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,n){"use strict";var r=n(52),i=(n.n(r),n(80)),o=(n.n(i),n(54)),s=n(55);e.a={name:"vue-multiselect",mixins:[o.a,s.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and ".concat(t," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup:function(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible:function(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return!(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){return this.searchable||this.multiple&&this.value&&this.value.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}}},function(t,e,n){var r=n(19),i=n(48),o=n(10),s=function(t){return function(e,n,s){var u,a=r(e),l=o(a),c=i(s,l);if(t&&n!=n){for(;l>c;)if((u=a[c++])!=u)return!0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,n){"use strict";var r=n(74),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))}},function(t,e){var n="object"==typeof document&&document.all,r=void 0===n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:r}},function(t,e,n){var r=n(4),i=n(8),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},function(t,e,n){var r=n(25),i=n(40);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},function(t,e,n){var r=n(5),i=n(0),o=n(60);t.exports=!r&&!i(function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),i=n(2),o=n(46),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},function(t,e,n){var r,i,o,s=n(124),u=n(4),a=n(8),l=n(30),c=n(7),f=n(46),p=n(70),h=n(38),d=u.TypeError,v=u.WeakMap,g=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!a(e)||(n=i(e)).type!==t)throw d("Incompatible receiver, "+t+" required");return n}};if(s||f.state){var b=f.state||(f.state=new v);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw d("Object already initialized");return e.facade=t,b.set(t,e),e},i=function(t){return b.get(t)||{}},o=function(t){return b.has(t)}}else{var m=p("state");h[m]=!0,r=function(t,e){if(c(t,m))throw d("Object already initialized");return e.facade=t,l(t,m,e),e},i=function(t){return c(t,m)?t[m]:{}},o=function(t){return c(t,m)}}t.exports={set:r,get:i,has:o,enforce:g,getterFor:y}},function(t,e,n){var r=n(1),i=n(0),o=n(2),s=n(29),u=n(17),a=n(63),l=function(){},c=[],f=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,h=r(p.exec),d=!p.exec(l),v=function(t){if(!o(t))return!1;try{return f(l,c,t),!0}catch(t){return!1}},g=function(t){if(!o(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!h(p,a(t))}catch(t){return!0}};g.sham=!0,t.exports=!f||i(function(){var t;return v(v.call)||!v(Object)||!v(function(){t=!0})||t})?g:v},function(t,e,n){var r=n(0),i=n(2),o=/#|\.prototype\./,s=function(t,e){var n=a[u(t)];return n==c||n!=l&&(i(e)?r(e):!!e)},u=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=s.data={},l=s.NATIVE="N",c=s.POLYFILL="P";t.exports=s},function(t,e,n){var r=n(68),i=n(34),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(1),i=n(7),o=n(19),s=n(57).indexOf,u=n(38),a=r([].push);t.exports=function(t,e){var n,r=o(t),l=0,c=[];for(n in r)!i(u,n)&&i(r,n)&&a(c,n);for(;e.length>l;)i(r,n=e[l++])&&(~s(c,n)||a(c,n));return c}},function(t,e,n){"use strict";var r=n(6);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(47),i=n(75),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e,n){var r=n(1),i=n(24),o=n(20),s=n(78),u=r("".replace),a="["+s+"]",l=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),f=function(t){return function(e){var n=o(i(e));return 1&t&&(n=u(n,l,"")),2&t&&(n=u(n,c,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},function(t,e,n){var r=n(23),i=n(0);t.exports=!!Object.getOwnPropertySymbols&&!i(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41})},function(t,e,n){var r=n(12),i=n(8),o=n(41),s=n(61),u=n(113),a=n(9),l=TypeError,c=a("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,a=s(t,c);if(a){if(void 0===e&&(e="default"),n=r(a,t,e),!i(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},function(t,e){var n=String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},function(t,e,n){var r=n(1),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},function(t,e,n){var r=n(72);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(5),i=n(0);t.exports=r&&i(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var r=n(3),i=n(21).find,o=n(91),s=!0;"find"in[]&&Array(1).find(function(){s=!1}),r({target:"Array",proto:!0,forced:s},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},function(t,e,n){"use strict";var r=n(3),i=n(18),o=n(65),s=n(8),u=n(48),a=n(10),l=n(19),c=n(32),f=n(9),p=n(16),h=n(93),d=p("slice"),v=f("species"),g=Array,y=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,f,p=l(this),d=a(p),b=u(t,d),m=u(void 0===e?d:e,d);if(i(p)&&(n=p.constructor,o(n)&&(n===g||i(n.prototype))?n=void 0:s(n)&&null===(n=n[v])&&(n=void 0),n===g||void 0===n))return h(p,b,m);for(r=new(void 0===n?g:n)(y(m-b,0)),f=0;b<m;b++,f++)b in p&&c(r,f,p[b]);return r.length=f,r}})},function(t,e,n){var r=n(1),i=n(11),o=Date.prototype,s=r(o.toString),u=r(o.getTime);"Invalid Date"!=String(new Date(NaN))&&i(o,"toString",function(){var t=u(this);return t===t?s(this):"Invalid Date"})},function(t,e,n){var r=n(11),i=n(98),o=Error.prototype;o.toString!==i&&r(o,"toString",i)},function(t,e,n){var r=n(51),i=n(11),o=n(112);r||i(Object.prototype,"toString",o,{unsafe:!0})},function(t,e,n){"use strict";var r=n(36).PROPER,i=n(11),o=n(6),s=n(20),u=n(0),a=n(116),l=RegExp.prototype,c=l.toString,f=u(function(){return"/a/b"!=c.call({source:"a",flags:"b"})}),p=r&&"toString"!=c.name;(f||p)&&i(RegExp.prototype,"toString",function(){var t=o(this);return"/"+s(t.source)+"/"+s(a(t))},{unsafe:!0})},function(t,e,n){"use strict";var r=n(12),i=n(99),o=n(6),s=n(40),u=n(24),a=n(120),l=n(20),c=n(61),f=n(115);i("search",function(t,e,n){return[function(e){var n=u(this),i=s(e)?void 0:c(e,t);return i?r(i,e,n):new RegExp(e)[t](l(n))},function(t){var r=o(this),i=l(t),s=n(e,r,i);if(s.done)return s.value;var u=r.lastIndex;a(u,0)||(r.lastIndex=0);var c=f(r,i);return a(r.lastIndex,u)||(r.lastIndex=u),null===c?-1:c.index}]})},function(t,e,n){"use strict";function r(t){n(136)}var i=n(56),o=n(138),s=n(137),u=r,a=s(i.a,o.a,!1,u,null,null);e.a=a.exports},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=r},function(t,e,n){"use strict";function r(t){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(86),i=n(54),o=n(55);n.d(e,"Multiselect",function(){return r.a}),n.d(e,"multiselectMixin",function(){return i.a}),n.d(e,"pointerMixin",function(){return o.a}),e.default=r.a},function(t,e,n){var r=n(2),i=String,o=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+i(t)+" as a prototype")}},function(t,e,n){var r=n(9),i=n(42),o=n(13).f,s=r("unscopables"),u=Array.prototype;void 0==u[s]&&o(u,s,{configurable:!0,value:i(null)}),t.exports=function(t){u[s][t]=!0}},function(t,e,n){var r=n(25),i=n(14),o=n(39),s=n(10),u=TypeError,a=function(t){return function(e,n,a,l){r(n);var c=i(e),f=o(c),p=s(c),h=t?p-1:0,d=t?-1:1;if(a<2)for(;;){if(h in f){l=f[h],h+=d;break}if(h+=d,t?h<0:p<=h)throw u("Reduce of empty array with no initial value")}for(;t?h>=0:p>h;h+=d)h in f&&(l=n(l,f[h],h,c));return l}};t.exports={left:a(!1),right:a(!0)}},function(t,e,n){var r=n(1);t.exports=r([].slice)},function(t,e,n){var r=n(18),i=n(65),o=n(8),s=n(9),u=s("species"),a=Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===a||r(e.prototype))?e=void 0:o(e)&&null===(e=e[u])&&(e=void 0)),void 0===e?a:e}},function(t,e,n){var r=n(7),i=n(114),o=n(43),s=n(13);t.exports=function(t,e,n){for(var u=i(e),a=s.f,l=o.f,c=0;c<u.length;c++){var f=u[c];r(t,f)||n&&r(n,f)||a(t,f,l(e,f))}}},function(t,e,n){var r=n(15),i=n(4);t.exports="process"==r(i.process)},function(t,e,n){var r=n(17);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(5),i=n(0),o=n(6),s=n(42),u=n(106),a=Error.prototype.toString,l=i(function(){if(r){var t=s(Object.defineProperty({},"name",{get:function(){return this===t}}));if("true"!==a.call(t))return!0}return"2: 1"!==a.call({message:1,name:2})||"Error"!==a.call({})});t.exports=l?function(){var t=o(this),e=u(t.name,"Error"),n=u(t.message);return e?n?e+": "+n:e:n}:a},function(t,e,n){"use strict";n(53);var r=n(37),i=n(11),o=n(45),s=n(0),u=n(9),a=n(30),l=u("species"),c=RegExp.prototype;t.exports=function(t,e,n,f){var p=u(t),h=!s(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=h&&!s(function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e});if(!h||!d||n){var v=r(/./[p]),g=e(p,""[t],function(t,e,n,i,s){var u=r(t),a=e.exec;return a===o||a===c.exec?h&&!s?{done:!0,value:v(e,n,i)}:{done:!0,value:u(n,e,i)}:{done:!1}});i(String.prototype,t,g[0]),i(c,p,g[1])}f&&a(c[p],"sham",!0)}},function(t,e,n){var r=n(37),i=n(25),o=n(35),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(17);t.exports=r("document","documentElement")},function(t,e,n){var r=n(2),i=n(8),o=n(111);t.exports=function(t,e,n){var s,u;return o&&r(s=e.constructor)&&s!==n&&i(u=s.prototype)&&u!==n.prototype&&o(t,u),t}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),i=n(2),o=n(7),s=n(5),u=n(36).CONFIGURABLE,a=n(63),l=n(64),c=l.enforce,f=l.get,p=Object.defineProperty,h=s&&!r(function(){return 8!==p(function(){},"length",{value:8}).length}),d=String(String).split("String"),v=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||u&&t.name!==e)&&(s?p(t,"name",{value:e,configurable:!0}):t.name=e),h&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=c(t);return o(r,"source")||(r.source=d.join("string"==typeof e?e:"")),t};Function.prototype.toString=v(function(){return i(this)&&f(this).source||a(this)},"toString")},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?r:n)(e)}},function(t,e,n){var r=n(20);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},function(t,e,n){var r=n(5),i=n(77),o=n(13),s=n(6),u=n(19),a=n(109);e.f=r&&!i?Object.defineProperties:function(t,e){s(t);for(var n,r=u(e),i=a(e),l=i.length,c=0;l>c;)o.f(t,n=i[c++],r[n]);return t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(68),i=n(34);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(1),i=n(6),o=n(90);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},function(t,e,n){"use strict";var r=n(51),i=n(29);t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},function(t,e,n){var r=n(12),i=n(2),o=n(8),s=TypeError;t.exports=function(t,e){var n,u;if("string"===e&&i(n=t.toString)&&!o(u=r(n,t)))return u;if(i(n=t.valueOf)&&!o(u=r(n,t)))return u;if("string"!==e&&i(n=t.toString)&&!o(u=r(n,t)))return u;throw s("Can't convert object to primitive value")}},function(t,e,n){var r=n(17),i=n(1),o=n(67),s=n(108),u=n(6),a=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=s.f;return n?a(e,n(t)):e}},function(t,e,n){var r=n(12),i=n(6),o=n(2),s=n(15),u=n(45),a=TypeError;t.exports=function(t,e){var n=t.exec;if(o(n)){var l=r(n,t,e);return null!==l&&i(l),l}if("RegExp"===s(t))return r(u,t,e);throw a("RegExp#exec called on incompatible receiver")}},function(t,e,n){var r=n(12),i=n(7),o=n(44),s=n(69),u=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in u||i(t,"flags")||!o(u,t)?e:r(s,t)}},function(t,e,n){var r=n(0),i=n(4),o=i.RegExp,s=r(function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")}),u=s||r(function(){return!o("a","y").sticky}),a=s||r(function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")});t.exports={BROKEN_CARET:a,MISSED_STICKY:u,UNSUPPORTED_Y:s}},function(t,e,n){var r=n(0),i=n(4),o=i.RegExp;t.exports=r(function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})},function(t,e,n){var r=n(0),i=n(4),o=i.RegExp;t.exports=r(function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){var r=n(36).PROPER,i=n(0),o=n(78),s="​᠎";t.exports=function(t){return i(function(){return!!o[t]()||s[t]()!==s||r&&o[t].name!==t})}},function(t,e,n){var r=n(1);t.exports=r(1..valueOf)},function(t,e,n){var r=n(49),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(4),i=n(2),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},function(t,e,n){"use strict";var r=n(3),i=n(0),o=n(18),s=n(8),u=n(14),a=n(10),l=n(22),c=n(32),f=n(28),p=n(16),h=n(9),d=n(23),v=h("isConcatSpreadable"),g=d>=51||!i(function(){var t=[];return t[v]=!1,t.concat()[0]!==t}),y=p("concat"),b=function(t){if(!s(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)};r({target:"Array",proto:!0,arity:1,forced:!g||!y},{concat:function(t){var e,n,r,i,o,s=u(this),p=f(s,0),h=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?s:arguments[e],b(o))for(i=a(o),l(h+i),n=0;n<i;n++,h++)n in o&&c(p,h,o[n]);else l(h+1),c(p,h++,o);return p.length=h,p}})},function(t,e,n){"use strict";var r=n(3),i=n(21).every;r({target:"Array",proto:!0,forced:!n(26)("every")},{every:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(21).filter;r({target:"Array",proto:!0,forced:!n(16)("filter")},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(37),o=n(57).indexOf,s=n(26),u=i([].indexOf),a=!!u&&1/u([1],1,-0)<0,l=s("indexOf");r({target:"Array",proto:!0,forced:a||!l},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return a?u(this,t,e)||0:o(this,t,e)}})},function(t,e,n){n(3)({target:"Array",stat:!0},{isArray:n(18)})},function(t,e,n){"use strict";var r=n(3),i=n(21).map;r({target:"Array",proto:!0,forced:!n(16)("map")},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(14),o=n(10),s=n(27),u=n(22),a=n(0),l=a(function(){return 4294967297!==[].push.call({length:4294967296},1)}),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||c},{push:function(t){var e=i(this),n=o(e),r=arguments.length;u(n+r);for(var a=0;a<r;a++)e[n]=arguments[a],n++;return s(e,n),n}})},function(t,e,n){"use strict";var r=n(3),i=n(92).left,o=n(26),s=n(23),u=n(96),a=o("reduce"),l=!u&&s>79&&s<83;r({target:"Array",proto:!0,forced:!a||l},{reduce:function(t){var e=arguments.length;return i(this,t,e,e>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(14),o=n(48),s=n(49),u=n(10),a=n(27),l=n(22),c=n(28),f=n(32),p=n(58),h=n(16),d=h("splice"),v=Math.max,g=Math.min;r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,r,h,d,y,b,m=i(this),x=u(m),_=o(t,x),O=arguments.length;for(0===O?n=r=0:1===O?(n=0,r=x-_):(n=O-2,r=g(v(s(e),0),x-_)),l(x+n-r),h=c(m,r),d=0;d<r;d++)(y=_+d)in m&&f(h,d,m[y]);if(h.length=r,n<r){for(d=_;d<x-r;d++)y=d+r,b=d+n,y in m?m[b]=m[y]:p(m,b);for(d=x;d>x-r+n;d--)p(m,d-1)}else if(n>r)for(d=x-r;d>_;d--)y=d+r-1,b=d+n-1,y in m?m[b]=m[y]:p(m,b);for(d=0;d<n;d++)m[d+_]=arguments[d+2];return a(m,x-r+n),h}})},function(t,e,n){"use strict";var r=n(3),i=n(14),o=n(10),s=n(27),u=n(58),a=n(22),l=1!==[].unshift(0),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||c},{unshift:function(t){var e=i(this),n=o(e),r=arguments.length;if(r){a(n+r);for(var l=n;l--;){var c=l+r;l in e?e[c]=e[l]:u(e,c)}for(var f=0;f<r;f++)e[f]=arguments[f]}return s(e,n+r)}})},function(t,e,n){"use strict";var r=n(3),i=n(71).trim;r({target:"String",proto:!0,forced:n(121)("trim")},{trim:function(){return i(this)}})},function(t,e){},function(t,e){t.exports=function(t,e,n,r,i,o){var s,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,u=t.default);var l="function"==typeof u?u.options:u;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=r),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:u,options:l}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove,"multiselect--has-options-group":t.hasOptionGroup},attrs:{tabindex:t.searchable?-1:t.tabindex,role:"combobox","aria-owns":"listbox-"+t.id},on:{focus:function(e){return t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:e.target!==e.currentTarget?null:(e.preventDefault(),t.pointerForward())},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:e.target!==e.currentTarget?null:(e.preventDefault(),t.pointerBackward())}],keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:(e.stopPropagation(),e.target!==e.currentTarget?null:t.addPointerElement(e))},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.deactivate()}}},[t._t("caret",function(){return[n("div",{staticClass:"multiselect__select",on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t.toggle()}}})]},{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),n("div",{ref:"tags",staticClass:"multiselect__tags"},[t._t("selection",function(){return[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValues,function(e,r){return[t._t("tag",function(){return[n("span",{key:r,staticClass:"multiselect__tag"},[n("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),n("i",{staticClass:"multiselect__tag-icon",attrs:{tabindex:"1"},on:{keypress:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),t.removeElement(e))},mousedown:function(n){return n.preventDefault(),t.removeElement(e)}}})])]},{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[t._t("limit",function(){return[n("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})]})]:t._e()]},{search:t.search,remove:t.removeElement,values:t.visibleValues,isOpen:t.isOpen}),t._v(" "),n("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",function(){return[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})]})],2),t._v(" "),t.searchable?n("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"off",spellcheck:"false",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex,"aria-controls":"listbox-"+t.id},domProps:{value:t.search},on:{input:function(e){return t.updateSearch(e.target.value)},focus:function(e){return e.preventDefault(),t.activate()},blur:function(e){return e.preventDefault(),t.deactivate()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.deactivate()},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:(e.preventDefault(),t.pointerForward())},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:(e.preventDefault(),t.pointerBackward())},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:(e.stopPropagation(),t.removeLastElement())}],keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:t.addPointerElement(e))}}}):t._e(),t._v(" "),t.isSingleLabelVisible?n("span",{staticClass:"multiselect__single",on:{mousedown:function(e){return e.preventDefault(),t.toggle.apply(null,arguments)}}},[t._t("singleLabel",function(){return[[t._v(t._s(t.currentOptionLabel))]]},{option:t.singleValue})],2):t._e(),t._v(" "),t.isPlaceholderVisible?n("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(e){return e.preventDefault(),t.toggle.apply(null,arguments)}}},[t._t("placeholder",function(){return[t._v("\n          "+t._s(t.placeholder)+"\n        ")]})],2):t._e()],2),t._v(" "),n("transition",{attrs:{name:"multiselect"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[n("ul",{staticClass:"multiselect__content",style:t.contentStyle,attrs:{role:"listbox",id:"listbox-"+t.id}},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?n("li",[n("span",{staticClass:"multiselect__option"},[t._t("maxElements",function(){return[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")]})],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,r){return n("li",{key:r,staticClass:"multiselect__element",attrs:{id:t.id+"-"+r,role:e&&(e.$isLabel||e.$isDisabled)?null:"option"}},[e&&(e.$isLabel||e.$isDisabled)?t._e():n("span",{staticClass:"multiselect__option",class:t.optionHighlight(r,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(n){return n.stopPropagation(),t.select(e)},mouseenter:function(e){return e.target!==e.currentTarget?null:t.pointerSet(r)}}},[t._t("option",function(){return[n("span",[t._v(t._s(t.getOptionLabel(e)))])]},{option:e,search:t.search,index:r})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?n("span",{staticClass:"multiselect__option",class:t.groupHighlight(r,e),attrs:{"data-select":t.groupSelect&&t.selectGroupLabelText,"data-deselect":t.groupSelect&&t.deselectGroupLabelText},on:{mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.groupSelect&&t.pointerSet(r)},mousedown:function(n){return n.preventDefault(),t.selectGroup(e)}}},[t._t("option",function(){return[n("span",[t._v(t._s(t.getOptionLabel(e)))])]},{option:e,search:t.search,index:r})],2):t._e()])}):t._e(),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noResult",function(){return[t._v("No elements found. Consider changing the search query.")]},{search:t.search})],2)]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoOptions&&(0===t.options.length||!0===t.hasOptionGroup&&0===t.filteredOptions.length)&&!t.search&&!t.loading,expression:"showNoOptions && ((options.length === 0 || (hasOptionGroup === true && filteredOptions.length === 0)) && !search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noOptions",function(){return[t._v("List is empty.")]})],2)]),t._v(" "),t._t("afterList")],2)])])],2)},i=[],o={render:r,staticRenderFns:i};e.a=o},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])});

/***/ }),

/***/ "./config/Country.json":
/*!*****************************!*\
  !*** ./config/Country.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Afghanistan","dial_code":"+93","code":"AF"},{"name":"Aland Islands","dial_code":"+358","code":"AX"},{"name":"Albania","dial_code":"+355","code":"AL"},{"name":"Algeria","dial_code":"+213","code":"DZ"},{"name":"AmericanSamoa","dial_code":"+1684","code":"AS"},{"name":"Andorra","dial_code":"+376","code":"AD"},{"name":"Angola","dial_code":"+244","code":"AO"},{"name":"Anguilla","dial_code":"+1264","code":"AI"},{"name":"Antarctica","dial_code":"+672","code":"AQ"},{"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},{"name":"Argentina","dial_code":"+54","code":"AR"},{"name":"Armenia","dial_code":"+374","code":"AM"},{"name":"Aruba","dial_code":"+297","code":"AW"},{"name":"Australia","dial_code":"+61","code":"AU"},{"name":"Austria","dial_code":"+43","code":"AT"},{"name":"Azerbaijan","dial_code":"+994","code":"AZ"},{"name":"Bahamas","dial_code":"+1242","code":"BS"},{"name":"Bahrain","dial_code":"+973","code":"BH"},{"name":"Bangladesh","dial_code":"+880","code":"BD"},{"name":"Barbados","dial_code":"+1246","code":"BB"},{"name":"Belarus","dial_code":"+375","code":"BY"},{"name":"Belgium","dial_code":"+32","code":"BE"},{"name":"Belize","dial_code":"+501","code":"BZ"},{"name":"Benin","dial_code":"+229","code":"BJ"},{"name":"Bermuda","dial_code":"+1441","code":"BM"},{"name":"Bhutan","dial_code":"+975","code":"BT"},{"name":"Bolivia, Plurinational State of","dial_code":"+591","code":"BO"},{"name":"Bosnia and Herzegovina","dial_code":"+387","code":"BA"},{"name":"Botswana","dial_code":"+267","code":"BW"},{"name":"Brazil","dial_code":"+55","code":"BR"},{"name":"British Indian Ocean Territory","dial_code":"+246","code":"IO"},{"name":"Brunei Darussalam","dial_code":"+673","code":"BN"},{"name":"Bulgaria","dial_code":"+359","code":"BG"},{"name":"Burkina Faso","dial_code":"+226","code":"BF"},{"name":"Burundi","dial_code":"+257","code":"BI"},{"name":"Cambodia","dial_code":"+855","code":"KH"},{"name":"Cameroon","dial_code":"+237","code":"CM"},{"name":"Canada","dial_code":"+1","code":"CA"},{"name":"Cape Verde","dial_code":"+238","code":"CV"},{"name":"Cayman Islands","dial_code":"+345","code":"KY"},{"name":"Central African Republic","dial_code":"+236","code":"CF"},{"name":"Chad","dial_code":"+235","code":"TD"},{"name":"Chile","dial_code":"+56","code":"CL"},{"name":"China","dial_code":"+86","code":"CN"},{"name":"Christmas Island","dial_code":"+61","code":"CX"},{"name":"Cocos (Keeling) Islands","dial_code":"+61","code":"CC"},{"name":"Colombia","dial_code":"+57","code":"CO"},{"name":"Comoros","dial_code":"+269","code":"KM"},{"name":"Congo","dial_code":"+242","code":"CG"},{"name":"Congo, The Democratic Republic of the Congo","dial_code":"+243","code":"CD"},{"name":"Cook Islands","dial_code":"+682","code":"CK"},{"name":"Costa Rica","dial_code":"+506","code":"CR"},{"name":"Cote d\'Ivoire","dial_code":"+225","code":"CI"},{"name":"Croatia","dial_code":"+385","code":"HR"},{"name":"Cuba","dial_code":"+53","code":"CU"},{"name":"Cyprus","dial_code":"+357","code":"CY"},{"name":"Czech Republic","dial_code":"+420","code":"CZ"},{"name":"Denmark","dial_code":"+45","code":"DK"},{"name":"Djibouti","dial_code":"+253","code":"DJ"},{"name":"Dominica","dial_code":"+1767","code":"DM"},{"name":"Dominican Republic","dial_code":"+1849","code":"DO"},{"name":"Ecuador","dial_code":"+593","code":"EC"},{"name":"Egypt","dial_code":"+20","code":"EG"},{"name":"El Salvador","dial_code":"+503","code":"SV"},{"name":"Equatorial Guinea","dial_code":"+240","code":"GQ"},{"name":"Eritrea","dial_code":"+291","code":"ER"},{"name":"Estonia","dial_code":"+372","code":"EE"},{"name":"Ethiopia","dial_code":"+251","code":"ET"},{"name":"Falkland Islands (Malvinas)","dial_code":"+500","code":"FK"},{"name":"Faroe Islands","dial_code":"+298","code":"FO"},{"name":"Fiji","dial_code":"+679","code":"FJ"},{"name":"Finland","dial_code":"+358","code":"FI"},{"name":"France","dial_code":"+33","code":"FR"},{"name":"French Guiana","dial_code":"+594","code":"GF"},{"name":"French Polynesia","dial_code":"+689","code":"PF"},{"name":"Gabon","dial_code":"+241","code":"GA"},{"name":"Gambia","dial_code":"+220","code":"GM"},{"name":"Georgia","dial_code":"+995","code":"GE"},{"name":"Germany","dial_code":"+49","code":"DE"},{"name":"Ghana","dial_code":"+233","code":"GH"},{"name":"Gibraltar","dial_code":"+350","code":"GI"},{"name":"Greece","dial_code":"+30","code":"GR"},{"name":"Greenland","dial_code":"+299","code":"GL"},{"name":"Grenada","dial_code":"+1473","code":"GD"},{"name":"Guadeloupe","dial_code":"+590","code":"GP"},{"name":"Guam","dial_code":"+1671","code":"GU"},{"name":"Guatemala","dial_code":"+502","code":"GT"},{"name":"Guernsey","dial_code":"+44","code":"GG"},{"name":"Guinea","dial_code":"+224","code":"GN"},{"name":"Guinea-Bissau","dial_code":"+245","code":"GW"},{"name":"Guyana","dial_code":"+595","code":"GY"},{"name":"Haiti","dial_code":"+509","code":"HT"},{"name":"Holy See (Vatican City State)","dial_code":"+379","code":"VA"},{"name":"Honduras","dial_code":"+504","code":"HN"},{"name":"Hong Kong","dial_code":"+852","code":"HK"},{"name":"Hungary","dial_code":"+36","code":"HU"},{"name":"Iceland","dial_code":"+354","code":"IS"},{"name":"India","dial_code":"+91","code":"IN"},{"name":"Indonesia","dial_code":"+62","code":"ID"},{"name":"Iran, Islamic Republic of Persian Gulf","dial_code":"+98","code":"IR"},{"name":"Iraq","dial_code":"+964","code":"IQ"},{"name":"Ireland","dial_code":"+353","code":"IE"},{"name":"Isle of Man","dial_code":"+44","code":"IM"},{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Italy","dial_code":"+39","code":"IT"},{"name":"Jamaica","dial_code":"+1876","code":"JM"},{"name":"Japan","dial_code":"+81","code":"JP"},{"name":"Jersey","dial_code":"+44","code":"JE"},{"name":"Jordan","dial_code":"+962","code":"JO"},{"name":"Kazakhstan","dial_code":"+77","code":"KZ"},{"name":"Kenya","dial_code":"+254","code":"KE"},{"name":"Kiribati","dial_code":"+686","code":"KI"},{"name":"Korea, Democratic People\'s Republic of Korea","dial_code":"+850","code":"KP"},{"name":"Korea, Republic of South Korea","dial_code":"+82","code":"KR"},{"name":"Kuwait","dial_code":"+965","code":"KW"},{"name":"Kyrgyzstan","dial_code":"+996","code":"KG"},{"name":"Laos","dial_code":"+856","code":"LA"},{"name":"Latvia","dial_code":"+371","code":"LV"},{"name":"Lebanon","dial_code":"+961","code":"LB"},{"name":"Lesotho","dial_code":"+266","code":"LS"},{"name":"Liberia","dial_code":"+231","code":"LR"},{"name":"Libyan Arab Jamahiriya","dial_code":"+218","code":"LY"},{"name":"Liechtenstein","dial_code":"+423","code":"LI"},{"name":"Lithuania","dial_code":"+370","code":"LT"},{"name":"Luxembourg","dial_code":"+352","code":"LU"},{"name":"Macao","dial_code":"+853","code":"MO"},{"name":"Macedonia","dial_code":"+389","code":"MK"},{"name":"Madagascar","dial_code":"+261","code":"MG"},{"name":"Malawi","dial_code":"+265","code":"MW"},{"name":"Malaysia","dial_code":"+60","code":"MY"},{"name":"Maldives","dial_code":"+960","code":"MV"},{"name":"Mali","dial_code":"+223","code":"ML"},{"name":"Malta","dial_code":"+356","code":"MT"},{"name":"Marshall Islands","dial_code":"+692","code":"MH"},{"name":"Martinique","dial_code":"+596","code":"MQ"},{"name":"Mauritania","dial_code":"+222","code":"MR"},{"name":"Mauritius","dial_code":"+230","code":"MU"},{"name":"Mayotte","dial_code":"+262","code":"YT"},{"name":"Mexico","dial_code":"+52","code":"MX"},{"name":"Micronesia, Federated States of Micronesia","dial_code":"+691","code":"FM"},{"name":"Moldova","dial_code":"+373","code":"MD"},{"name":"Monaco","dial_code":"+377","code":"MC"},{"name":"Mongolia","dial_code":"+976","code":"MN"},{"name":"Montenegro","dial_code":"+382","code":"ME"},{"name":"Montserrat","dial_code":"+1664","code":"MS"},{"name":"Morocco","dial_code":"+212","code":"MA"},{"name":"Mozambique","dial_code":"+258","code":"MZ"},{"name":"Myanmar","dial_code":"+95","code":"MM"},{"name":"Namibia","dial_code":"+264","code":"NA"},{"name":"Nauru","dial_code":"+674","code":"NR"},{"name":"Nepal","dial_code":"+977","code":"NP"},{"name":"Netherlands","dial_code":"+31","code":"NL"},{"name":"Netherlands Antilles","dial_code":"+599","code":"AN"},{"name":"New Caledonia","dial_code":"+687","code":"NC"},{"name":"New Zealand","dial_code":"+64","code":"NZ"},{"name":"Nicaragua","dial_code":"+505","code":"NI"},{"name":"Niger","dial_code":"+227","code":"NE"},{"name":"Nigeria","dial_code":"+234","code":"NG"},{"name":"Niue","dial_code":"+683","code":"NU"},{"name":"Norfolk Island","dial_code":"+672","code":"NF"},{"name":"Northern Mariana Islands","dial_code":"+1670","code":"MP"},{"name":"Norway","dial_code":"+47","code":"NO"},{"name":"Oman","dial_code":"+968","code":"OM"},{"name":"Pakistan","dial_code":"+92","code":"PK"},{"name":"Palau","dial_code":"+680","code":"PW"},{"name":"Palestinian Territory, Occupied","dial_code":"+970","code":"PS"},{"name":"Panama","dial_code":"+507","code":"PA"},{"name":"Papua New Guinea","dial_code":"+675","code":"PG"},{"name":"Paraguay","dial_code":"+595","code":"PY"},{"name":"Peru","dial_code":"+51","code":"PE"},{"name":"Philippines","dial_code":"+63","code":"PH"},{"name":"Pitcairn","dial_code":"+872","code":"PN"},{"name":"Poland","dial_code":"+48","code":"PL"},{"name":"Portugal","dial_code":"+351","code":"PT"},{"name":"Puerto Rico","dial_code":"+1939","code":"PR"},{"name":"Qatar","dial_code":"+974","code":"QA"},{"name":"Romania","dial_code":"+40","code":"RO"},{"name":"Russia","dial_code":"+7","code":"RU"},{"name":"Rwanda","dial_code":"+250","code":"RW"},{"name":"Reunion","dial_code":"+262","code":"RE"},{"name":"Saint Barthelemy","dial_code":"+590","code":"BL"},{"name":"Saint Helena, Ascension and Tristan Da Cunha","dial_code":"+290","code":"SH"},{"name":"Saint Kitts and Nevis","dial_code":"+1869","code":"KN"},{"name":"Saint Lucia","dial_code":"+1758","code":"LC"},{"name":"Saint Martin","dial_code":"+590","code":"MF"},{"name":"Saint Pierre and Miquelon","dial_code":"+508","code":"PM"},{"name":"Saint Vincent and the Grenadines","dial_code":"+1784","code":"VC"},{"name":"Samoa","dial_code":"+685","code":"WS"},{"name":"San Marino","dial_code":"+378","code":"SM"},{"name":"Sao Tome and Principe","dial_code":"+239","code":"ST"},{"name":"Saudi Arabia","dial_code":"+966","code":"SA"},{"name":"Senegal","dial_code":"+221","code":"SN"},{"name":"Serbia","dial_code":"+381","code":"RS"},{"name":"Seychelles","dial_code":"+248","code":"SC"},{"name":"Sierra Leone","dial_code":"+232","code":"SL"},{"name":"Singapore","dial_code":"+65","code":"SG"},{"name":"Slovakia","dial_code":"+421","code":"SK"},{"name":"Slovenia","dial_code":"+386","code":"SI"},{"name":"Solomon Islands","dial_code":"+677","code":"SB"},{"name":"Somalia","dial_code":"+252","code":"SO"},{"name":"South Africa","dial_code":"+27","code":"ZA"},{"name":"South Sudan","dial_code":"+211","code":"SS"},{"name":"South Georgia and the South Sandwich Islands","dial_code":"+500","code":"GS"},{"name":"Spain","dial_code":"+34","code":"ES"},{"name":"Sri Lanka","dial_code":"+94","code":"LK"},{"name":"Sudan","dial_code":"+249","code":"SD"},{"name":"Suriname","dial_code":"+597","code":"SR"},{"name":"Svalbard and Jan Mayen","dial_code":"+47","code":"SJ"},{"name":"Swaziland","dial_code":"+268","code":"SZ"},{"name":"Sweden","dial_code":"+46","code":"SE"},{"name":"Switzerland","dial_code":"+41","code":"CH"},{"name":"Syrian Arab Republic","dial_code":"+963","code":"SY"},{"name":"Taiwan","dial_code":"+886","code":"TW"},{"name":"Tajikistan","dial_code":"+992","code":"TJ"},{"name":"Tanzania, United Republic of Tanzania","dial_code":"+255","code":"TZ"},{"name":"Thailand","dial_code":"+66","code":"TH"},{"name":"Timor-Leste","dial_code":"+670","code":"TL"},{"name":"Togo","dial_code":"+228","code":"TG"},{"name":"Tokelau","dial_code":"+690","code":"TK"},{"name":"Tonga","dial_code":"+676","code":"TO"},{"name":"Trinidad and Tobago","dial_code":"+1868","code":"TT"},{"name":"Tunisia","dial_code":"+216","code":"TN"},{"name":"Turkey","dial_code":"+90","code":"TR"},{"name":"Turkmenistan","dial_code":"+993","code":"TM"},{"name":"Turks and Caicos Islands","dial_code":"+1649","code":"TC"},{"name":"Tuvalu","dial_code":"+688","code":"TV"},{"name":"Uganda","dial_code":"+256","code":"UG"},{"name":"Ukraine","dial_code":"+380","code":"UA"},{"name":"United Arab Emirates","dial_code":"+971","code":"AE"},{"name":"United Kingdom","dial_code":"+44","code":"GB"},{"name":"USA","dial_code":"+1","code":"US"},{"name":"Uruguay","dial_code":"+598","code":"UY"},{"name":"Uzbekistan","dial_code":"+998","code":"UZ"},{"name":"Vanuatu","dial_code":"+678","code":"VU"},{"name":"Venezuela, Bolivarian Republic of Venezuela","dial_code":"+58","code":"VE"},{"name":"Vietnam","dial_code":"+84","code":"VN"},{"name":"Virgin Islands, British","dial_code":"+1284","code":"VG"},{"name":"Virgin Islands, U.S.","dial_code":"+1340","code":"VI"},{"name":"Wallis and Futuna","dial_code":"+681","code":"WF"},{"name":"Yemen","dial_code":"+967","code":"YE"},{"name":"Zambia","dial_code":"+260","code":"ZM"},{"name":"Zimbabwe","dial_code":"+263","code":"ZW"}]');

/***/ })

}]);