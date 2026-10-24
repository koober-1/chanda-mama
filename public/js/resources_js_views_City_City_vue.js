"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_City_City_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/City/City.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/City/City.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuejs_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datatable */ "./node_modules/vuejs-datatable/dist/vuejs-datatable.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
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
      isLoading: false,
      fields: [{
        key: 'id',
        label: __('id'),
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'name',
        label: __('name'),
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'zone',
        label: __('zone'),
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'state',
        label: __('state'),
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'latitude',
        label: __('latitude'),
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'longitude',
        label: __('longitude'),
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'geolocation_type',
        label: __('geolocation_type'),
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'actions',
        label: __('actions')
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: this.$perPage,
      pageOptions: this.$pageOptions,
      offset: 0,
      sortBy: 'id',
      sortDesc: true,
      sortDirection: 'desc',
      filter: null,
      filterOn: [],
      cities: [],
      tableKey: 0,
      // For forcing table re-render
      currentLanguageId: null,
      activeLanguages: [],
      showBoundaryModal: false,
      selectedCity: null,
      previewCenter: {
        lat: 0,
        lng: 0
      },
      previewOverlays: []
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.clearPreviewOverlays();
  },
  mounted: function mounted() {},
  created: function created() {
    var _this = this;
    this.fetchActiveLanguages().then(function () {
      _this.getRecords();
    });
  },
  computed: {
    pageEnd: function pageEnd() {
      return Math.min(this.currentPage * this.perPage, this.totalRows);
    },
    translatedCities: function translatedCities() {
      var _this2 = this;
      if (!this.currentLanguageId || !Array.isArray(this.cities)) return this.cities;
      return this.cities.map(function (city) {
        var c = _objectSpread({}, city);
        if (city.translations && Array.isArray(city.translations)) {
          var translation = city.translations.find(function (t) {
            return t.language_id === _this2.currentLanguageId;
          });
          if (translation && translation.zone && translation.zone.trim() !== '') {
            c.zone = translation.zone;
          }
        }
        return c;
      });
    }
  },
  watch: {
    currentPage: function currentPage(newPage) {
      this.getRecords();
    },
    perPage: function perPage(newPerPage) {
      this.getRecords();
    },
    filter: function filter(newFilter, oldFilter) {
      this.currentPage = 1;
      this.getRecords();
    }
  },
  methods: {
    fetchActiveLanguages: function fetchActiveLanguages() {
      var _this3 = this;
      return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.$apiUrl + '/active_languages').then(function (response) {
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
            if (defaultLanguage) _this3.currentLanguageId = defaultLanguage.id;
          }
        }
      })["catch"](function (err) {
        return console.error('Error loading languages:', err);
      });
    },
    getRecords: function getRecords() {
      var _this4 = this;
      this.isLoading = true;
      var vm = this;

      // Calculate proper offset for CityApiController
      var calculatedOffset = this.perPage * (this.currentPage - 1);
      var params = {
        offset: calculatedOffset,
        limit: this.perPage,
        search: this.filter,
        sort_by: this.sortBy,
        sort_dir: this.sortDirection
      };
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.$apiUrl + '/cities', {
        params: params
      }).then(function (response) {
        _this4.isLoading = false;
        var data = response.data;

        // Handle the nested response structure from CityApiController
        _this4.cities = data.data.cities || [];
        _this4.totalRows = data.data.total || 0;

        // Force table re-render
        _this4.tableKey++;
      })["catch"](function (error) {
        var _error$request;
        vm.isLoading = false;
        if (error !== null && error !== void 0 && (_error$request = error.request) !== null && _error$request !== void 0 && _error$request.statusText) {
          var _error$request2;
          _this4.showError(error === null || error === void 0 || (_error$request2 = error.request) === null || _error$request2 === void 0 ? void 0 : _error$request2.statusText);
        } else if (error.message) {
          _this4.showError(error.message);
        } else {
          _this4.showError(__('something_went_wrong'));
        }
      });
    },
    deleteRecord: function deleteRecord(index, id) {
      var _this5 = this;
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
          _this5.isLoading = true;
          var postData = {
            id: id
          };
          axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(_this5.$apiUrl + '/cities/delete', postData).then(function (response) {
            _this5.isLoading = false;
            var data = response.data;
            _this5.cities.splice(index, 1);
            _this5.showMessage('success', data.message);
          });
        }
      });
    },
    formatRadius: function formatRadius(meters) {
      var m = parseFloat(meters);
      if (!m || isNaN(m)) return '';
      if (m >= 1000) {
        return (m / 1000).toFixed(1) + ' km';
      }
      return Math.round(m) + ' m';
    },
    getPointsCount: function getPointsCount(boundaryPoints) {
      if (!boundaryPoints) return 0;
      try {
        var pts = typeof boundaryPoints === 'string' ? JSON.parse(boundaryPoints) : boundaryPoints;
        if (!Array.isArray(pts)) return 0;
        if (pts.length > 0 && Array.isArray(pts[0])) {
          return pts.reduce(function (sum, p) {
            return sum + (Array.isArray(p) ? p.length : 0);
          }, 0);
        }
        return pts.length;
      } catch (e) {
        return 0;
      }
    },
    getShapeInfo: function getShapeInfo(city) {
      if (!city) return {
        type: 'none',
        count: 0,
        text: 'Not Drawn',
        details: ''
      };
      var bp = city.boundary_points;
      if (typeof bp === 'string' && bp.trim() !== '') {
        try {
          bp = JSON.parse(bp);
        } catch (e) {
          bp = null;
        }
      }

      // Check if multi-shapes (array of polygons / circles)
      if (Array.isArray(bp) && bp.length > 0 && (Array.isArray(bp[0]) || bp[0] && _typeof(bp[0]) === 'object' && bp[0].type === 'circle')) {
        var polyCount = 0;
        var circleCount = 0;
        var totalPolyPoints = 0;
        bp.forEach(function (s) {
          if (Array.isArray(s)) {
            polyCount++;
            totalPolyPoints += s.length;
          } else if (s && s.type === 'circle') {
            circleCount++;
          }
        });
        var total = polyCount + circleCount;
        if (total > 1) {
          var parts = [];
          if (polyCount > 0) parts.push("".concat(polyCount, " polygon").concat(polyCount > 1 ? 's' : ''));
          if (circleCount > 0) parts.push("".concat(circleCount, " circle").concat(circleCount > 1 ? 's' : ''));
          return {
            type: 'multi',
            count: total,
            text: "Multi-Area (".concat(total, ")"),
            details: parts.join(' + ')
          };
        } else if (total === 1) {
          if (circleCount === 1) {
            var c = bp.find(function (s) {
              return s && s.type === 'circle';
            });
            var rad = c && c.radius ? this.formatRadius(c.radius) : city.radius ? this.formatRadius(city.radius) : '';
            return {
              type: 'circle',
              count: 1,
              text: 'Circle',
              details: rad ? "Radius: ".concat(rad) : ''
            };
          } else if (polyCount === 1) {
            return {
              type: 'polygon',
              count: totalPolyPoints,
              text: "Polygon (".concat(totalPolyPoints, " pts)"),
              details: "".concat(totalPolyPoints, " points")
            };
          }
        }
      }

      // Single polygon
      if (city.geolocation_type === 'polygon' || Array.isArray(bp) && bp.length >= 3 && bp[0] && bp[0].lat !== undefined) {
        var count = Array.isArray(bp) ? bp.length : 0;
        return {
          type: 'polygon',
          count: count,
          text: count > 0 ? "Polygon (".concat(count, " pts)") : 'Polygon',
          details: count > 0 ? "".concat(count, " points") : ''
        };
      }

      // Single circle
      if (city.geolocation_type === 'circle' || Array.isArray(bp) && bp.length === 1 && bp[0] && bp[0].lat !== undefined || city.radius) {
        var _rad = this.formatRadius(city.radius);
        return {
          type: 'circle',
          count: 1,
          text: _rad ? "Circle (".concat(_rad, ")") : 'Circle',
          details: _rad ? "Radius: ".concat(_rad) : ''
        };
      }
      return {
        type: 'none',
        count: 0,
        text: 'Not Drawn',
        details: ''
      };
    },
    getBadgeClass: function getBadgeClass(city) {
      var info = this.getShapeInfo(city);
      if (info.type === 'multi') return 'bg-info text-white';
      if (info.type === 'polygon') return 'bg-success text-white';
      if (info.type === 'circle') return 'bg-primary text-white';
      return 'bg-secondary text-white';
    },
    previewBoundary: function previewBoundary(city) {
      var _this6 = this;
      this.selectedCity = city;
      this.showBoundaryModal = true;
      var lat = parseFloat(city.latitude);
      var lng = parseFloat(city.longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        this.previewCenter = {
          lat: lat,
          lng: lng
        };
      }
      this.$nextTick(function () {
        if (_this6.$refs.previewMapRef) {
          _this6.$refs.previewMapRef.$mapPromise.then(function (map) {
            setTimeout(function () {
              if (window.google && window.google.maps) {
                google.maps.event.trigger(map, 'resize');
              }
              _this6.renderPreviewOverlay(map, city);
            }, 150);
          });
        }
      });
    },
    clearPreviewOverlays: function clearPreviewOverlays() {
      if (this.previewOverlays && this.previewOverlays.length > 0) {
        this.previewOverlays.forEach(function (o) {
          if (o && typeof o.setMap === 'function') {
            o.setMap(null);
          }
        });
      }
      this.previewOverlays = [];
    },
    renderPreviewOverlay: function renderPreviewOverlay(map, city) {
      var _this7 = this;
      this.clearPreviewOverlays();
      if (!window.google || !window.google.maps || !city) return;
      var boundaryPoints = city.boundary_points;
      if (typeof boundaryPoints === 'string' && boundaryPoints.trim() !== '') {
        try {
          boundaryPoints = JSON.parse(boundaryPoints);
        } catch (e) {
          boundaryPoints = null;
        }
      }
      var bounds = new google.maps.LatLngBounds();

      // Case 1: Multi-polygon and circles collection
      if (Array.isArray(boundaryPoints) && boundaryPoints.length > 0 && (Array.isArray(boundaryPoints[0]) || boundaryPoints[0] && _typeof(boundaryPoints[0]) === 'object' && boundaryPoints[0].type === 'circle')) {
        boundaryPoints.forEach(function (shape) {
          if (Array.isArray(shape) && shape.length >= 3) {
            var polygonPoints = shape.map(function (p) {
              return {
                lat: parseFloat(p.lat),
                lng: parseFloat(p.lng)
              };
            }).filter(function (p) {
              return !isNaN(p.lat) && !isNaN(p.lng);
            });
            if (polygonPoints.length >= 3) {
              var poly = new google.maps.Polygon({
                paths: polygonPoints,
                strokeColor: '#000000',
                strokeOpacity: 0.85,
                strokeWeight: 2,
                fillColor: '#666666',
                fillOpacity: 0.35,
                map: map,
                zIndex: 1
              });
              _this7.previewOverlays.push(poly);
              polygonPoints.forEach(function (pt) {
                return bounds.extend(pt);
              });
            }
          } else if (shape && shape.type === 'circle' && shape.center) {
            var cLat = parseFloat(shape.center.lat);
            var cLng = parseFloat(shape.center.lng);
            if (!isNaN(cLat) && !isNaN(cLng)) {
              var center = {
                lat: cLat,
                lng: cLng
              };
              var radiusMeters = parseFloat(shape.radius) || 15000;
              var circle = new google.maps.Circle({
                strokeColor: '#000000',
                strokeOpacity: 0.85,
                strokeWeight: 2,
                fillColor: '#666666',
                fillOpacity: 0.35,
                map: map,
                center: center,
                radius: radiusMeters,
                zIndex: 1
              });
              _this7.previewOverlays.push(circle);
              if (circle.getBounds) {
                bounds.union(circle.getBounds());
              } else {
                bounds.extend(center);
              }
            }
          }
        });
        if (!bounds.isEmpty()) {
          map.fitBounds(bounds);
        } else {
          this.centerMapToCity(map, city);
        }
        return;
      }

      // Case 2: Single Polygon
      if (Array.isArray(boundaryPoints) && boundaryPoints.length >= 3 && boundaryPoints[0] && boundaryPoints[0].lat !== undefined) {
        var polygonPoints = boundaryPoints.map(function (p) {
          return {
            lat: parseFloat(p.lat),
            lng: parseFloat(p.lng)
          };
        }).filter(function (p) {
          return !isNaN(p.lat) && !isNaN(p.lng);
        });
        if (polygonPoints.length >= 3) {
          var poly = new google.maps.Polygon({
            paths: polygonPoints,
            strokeColor: '#000000',
            strokeOpacity: 0.85,
            strokeWeight: 2,
            fillColor: '#666666',
            fillOpacity: 0.35,
            map: map,
            zIndex: 1
          });
          this.previewOverlays.push(poly);
          polygonPoints.forEach(function (pt) {
            return bounds.extend(pt);
          });
          map.fitBounds(bounds);
          return;
        }
      }

      // Case 3: Single Circle Serviceable Area
      var points = Array.isArray(boundaryPoints) ? boundaryPoints : boundaryPoints ? [boundaryPoints] : [];
      var centerLat = points.length > 0 && points[0].lat !== undefined ? parseFloat(points[0].lat) : parseFloat(city.latitude);
      var centerLng = points.length > 0 && points[0].lng !== undefined ? parseFloat(points[0].lng) : parseFloat(city.longitude);
      if (!isNaN(centerLat) && !isNaN(centerLng)) {
        var center = {
          lat: centerLat,
          lng: centerLng
        };
        var radiusMeters = parseFloat(city.radius) || 15000;
        var circle = new google.maps.Circle({
          strokeColor: '#000000',
          strokeOpacity: 0.85,
          strokeWeight: 2,
          fillColor: '#666666',
          fillOpacity: 0.35,
          map: map,
          center: center,
          radius: radiusMeters,
          zIndex: 1
        });
        this.previewOverlays.push(circle);
        if (circle.getBounds) {
          map.fitBounds(circle.getBounds());
        } else {
          map.setCenter(center);
          map.setZoom(12);
        }
      }
    },
    centerMapToCity: function centerMapToCity(map, city) {
      var lat = parseFloat(city.latitude);
      var lng = parseFloat(city.longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        map.setCenter({
          lat: lat,
          lng: lng
        });
        map.setZoom(12);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/City/City.vue?vue&type=template&id=54801220":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/City/City.vue?vue&type=template&id=54801220 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("h3", [_vm._v(_vm._s(_vm.__("manage_citys_center_points_latitude_longitude")))])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v(_vm._s(_vm.__("manage_cities")))])])])])]), _vm._v(" "), _c("div", {
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
    staticClass: "d-flex align-items-center gap-2 flex-grow-1 flex-wrap"
  }, [_c("div", {
    staticClass: "figma-search-container",
    staticStyle: {
      "min-width": "250px"
    }
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
  }, [_vm.$can("city_create") ? _c("router-link", {
    staticClass: "btn btn-figma-filter d-flex align-items-center gap-2",
    attrs: {
      to: "/cities/create"
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("add_new_city")))])]) : _vm._e(), _vm._v(" "), _c("button", {
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
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.__("refresh")))])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("b-table", {
    key: _vm.tableKey,
    ref: "table",
    staticClass: "figma-table mb-0",
    attrs: {
      id: "my-table",
      items: _vm.translatedCities,
      fields: _vm.fields,
      filter: _vm.filter,
      "filter-included-fields": _vm.filterOn,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      "sort-direction": _vm.sortDirection,
      bordered: false,
      busy: _vm.isLoading,
      stacked: "md",
      "show-empty": "",
      small: "",
      "empty-text": "There are no cities to show",
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
      },
      "sort-changed": _vm.getRecords
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
      key: "cell(geolocation_type)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex align-items-center gap-1"
        }, [_vm.getShapeInfo(row.item).type === "multi" ? _c("span", {
          staticClass: "badge bg-light-info text-info fw-bold d-inline-flex align-items-center gap-1 px-2 py-1"
        }, [_c("i", {
          staticClass: "fa fa-map-o"
        }), _vm._v(" Multi-Area\n                                            "), _c("small", {
          staticClass: "text-muted ms-1"
        }, [_vm._v("(" + _vm._s(_vm.getShapeInfo(row.item).count) + " areas)")])]) : _vm.getShapeInfo(row.item).type === "polygon" ? _c("span", {
          staticClass: "badge bg-light-success text-success fw-bold d-inline-flex align-items-center gap-1 px-2 py-1"
        }, [_c("i", {
          staticClass: "fa fa-pencil-square-o"
        }), _vm._v(" Polygon\n                                            "), _vm.getShapeInfo(row.item).count > 0 ? _c("small", {
          staticClass: "text-muted ms-1"
        }, [_vm._v("\n                                                (" + _vm._s(_vm.getShapeInfo(row.item).count) + " pts)\n                                            ")]) : _vm._e()]) : _vm.getShapeInfo(row.item).type === "circle" ? _c("span", {
          staticClass: "badge bg-light-primary text-primary fw-bold d-inline-flex align-items-center gap-1 px-2 py-1"
        }, [_c("i", {
          staticClass: "fa fa-circle-o"
        }), _vm._v(" Circle\n                                            "), row.item.radius ? _c("small", {
          staticClass: "text-muted ms-1"
        }, [_vm._v("\n                                                (" + _vm._s(_vm.formatRadius(row.item.radius)) + ")\n                                            ")]) : _vm._e()]) : _c("span", {
          staticClass: "badge bg-light text-muted px-2 py-1"
        }, [_vm._v("\n                                            Not Drawn\n                                        ")])])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex gap-2"
        }, [row.item.boundary_points || row.item.latitude && row.item.longitude ? _c("button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "figma-action-btn",
          attrs: {
            title: _vm.__("view_serviceable_area") || "View Serviceable Area"
          },
          on: {
            click: function click($event) {
              return _vm.previewBoundary(row.item);
            }
          }
        }, [_c("base-icon", {
          attrs: {
            name: "Eye",
            hoverName: "Type=Hover (1)",
            width: "24",
            height: "24"
          }
        })], 1) : _vm._e(), _vm._v(" "), _vm.$can("city_update") ? _c("router-link", {
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
              name: "EditCity",
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
        })], 1) : _vm._e(), _vm._v(" "), _vm.$can("city_delete") ? _c("button", {
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
              return _vm.deleteRecord(row.index, row.item.id);
            }
          }
        }, [_c("base-icon", {
          attrs: {
            name: "Type=Default",
            hoverName: "Type=Hover",
            width: "24",
            height: "24"
          }
        })], 1) : _vm._e()], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "boundary-preview-modal",
      title: _vm.selectedCity ? "".concat(_vm.selectedCity.name, " - Serviceable Area Preview") : "Serviceable Area",
      size: "lg",
      "ok-only": "",
      "ok-title": "Close",
      "ok-variant": "secondary",
      centered: ""
    },
    on: {
      hidden: _vm.clearPreviewOverlays
    },
    model: {
      value: _vm.showBoundaryModal,
      callback: function callback($$v) {
        _vm.showBoundaryModal = $$v;
      },
      expression: "showBoundaryModal"
    }
  }, [_vm.selectedCity ? _c("div", [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-2 px-1 small flex-wrap gap-2"
  }, [_c("div", [_c("strong", [_vm._v("Type:")]), _vm._v(" "), _c("span", {
    staticClass: "badge",
    "class": _vm.getBadgeClass(_vm.selectedCity)
  }, [_vm._v("\n                                            " + _vm._s(_vm.getShapeInfo(_vm.selectedCity).text) + "\n                                        ")]), _vm._v(" "), _vm.getShapeInfo(_vm.selectedCity).details ? _c("span", {
    staticClass: "ms-2 text-muted"
  }, [_vm._v("\n                                            (" + _vm._s(_vm.getShapeInfo(_vm.selectedCity).details) + ")\n                                        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "text-muted text-truncate",
    staticStyle: {
      "max-width": "350px"
    }
  }, [_c("i", {
    staticClass: "fa fa-map-pin text-danger me-1"
  }), _vm._v(" " + _vm._s(_vm.selectedCity.formatted_address || "".concat(_vm.selectedCity.latitude, ", ").concat(_vm.selectedCity.longitude)) + "\n                                    ")])]), _vm._v(" "), _c("div", {
    staticStyle: {
      height: "450px",
      width: "100%",
      "border-radius": "6px",
      overflow: "hidden",
      border: "1px solid #dee2e6"
    }
  }, [_c("GmapMap", {
    ref: "previewMapRef",
    staticStyle: {
      width: "100%",
      height: "100%"
    },
    attrs: {
      zoom: 12,
      center: _vm.previewCenter
    }
  }, [_vm.previewCenter.lat && _vm.previewCenter.lng ? _c("GmapMarker", {
    attrs: {
      position: _vm.previewCenter
    }
  }) : _vm._e()], 1)], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "figma-table-footer flex-wrap gap-3 mt-4"
  }, [_c("div", {
    staticClass: "showing-results-text small"
  }, [_vm._v("\n                                " + _vm._s(_vm.__("Showing Result")) + " : "), _c("span", {
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
      change: _vm.getRecords
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)])], 1)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/City/City.vue":
/*!******************************************!*\
  !*** ./resources/js/views/City/City.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _City_vue_vue_type_template_id_54801220__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./City.vue?vue&type=template&id=54801220 */ "./resources/js/views/City/City.vue?vue&type=template&id=54801220");
/* harmony import */ var _City_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./City.vue?vue&type=script&lang=js */ "./resources/js/views/City/City.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _City_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _City_vue_vue_type_template_id_54801220__WEBPACK_IMPORTED_MODULE_0__.render,
  _City_vue_vue_type_template_id_54801220__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/City/City.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/City/City.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/views/City/City.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_City_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./City.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/City/City.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_City_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/City/City.vue?vue&type=template&id=54801220":
/*!************************************************************************!*\
  !*** ./resources/js/views/City/City.vue?vue&type=template&id=54801220 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_City_vue_vue_type_template_id_54801220__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_City_vue_vue_type_template_id_54801220__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_City_vue_vue_type_template_id_54801220__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./City.vue?vue&type=template&id=54801220 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/City/City.vue?vue&type=template&id=54801220");


/***/ })

}]);