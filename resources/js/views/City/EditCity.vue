<template>
    <div>
        <div class="page-heading">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>{{ __('manage_city') }}</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/dashboard">{{ __('dashboard') }}</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <template v-if="city.id">
                                    {{ __('edit') }}
                                </template>
                                <template v-else>
                                    {{ __('create') }}
                                </template>
                                {{ __('city') }}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-12 order-md-1 order-last">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>
                                <template v-if="city.id">{{ __('edit') }}</template>
                                <template v-else>{{ __('create') }}</template>
                                {{ __('city') }}
                            </h4>
                        </div>
                        <div class="card-body">
                            <form ref="my-form" @submit.prevent="saveRecord" novalidate>
                                <b-tabs :key="renderKey" v-model="activeLanguageTab" content-class="mt-3"
                                    v-if="languages.length > 0">

                                    <b-tab v-for="language in languages" :key="language.id" :title="language.name">
                                        <template #title>
                                            <span :class="{ 'text-primary font-weight-bold': language.is_default }">
                                                {{ language.name }}
                                            </span>
                                        </template>

                                        <!-- Translate buttons (skip if no language.name) -->
                                        <div class="mb-3"
                                            v-if="language.is_default && languages.length > 1 && language.name">
                                            <b-button size="sm" variant="outline-primary" class="mr-2"
                                                @click="translateEmpty(language)" v-b-tooltip.hover
                                                :title="__('only_empty_fields_will_be_translated_existing_content_will_not_be_changed')"
                                                :disabled="loadingEmpty">
                                                <span v-if="!loadingEmpty">{{ __('translate_empty_fields') }}</span>
                                                <b-spinner v-else small></b-spinner>
                                            </b-button>

                                            <b-button size="sm" variant="outline-danger"
                                                @click="translateOverwrite(language)" v-b-tooltip.hover
                                                :title="__('all_fields_will_be_translated_and_existing_content_will_be_overwritten')"
                                                :disabled="loadingOverwrite">
                                                <span v-if="!loadingOverwrite">{{ __('translate_and_overwrite')
                                                    }}</span>
                                                <b-spinner v-else small></b-spinner>
                                            </b-button>

                                            <div v-if="translateSuccessMessage"
                                                class="text-success mt-2 font-weight-bold">
                                                {{ translateSuccessMessage }}
                                            </div>
                                        </div>
                                        <!-- Translate buttons END -->

                                        <div class="form-group" v-if="language.is_default">
                                            <label for="city_name"> {{ __('search_city') }}</label>
                                            <GmapAutocomplete type="search" class="form-control"
                                                :placeholder="__('search_city_on_map')" @place_changed="setPlace"
                                                :options="{ fields: ['address_components', 'formatted_address', 'geometry', 'name', 'place_id', 'plus_code', 'types'], strictBounds: false }"
                                                id="city_name">
                                            </GmapAutocomplete>
                                            <input type="hidden" v-model="city.formatted_address">
                                            <span class="text text-primary">{{
                                                __('search_your_city_where_you_will_deliver_the_food_and_to_find_co_ordinates')
                                                }}</span>
                                        </div>

                                        <div class="form-group" v-if="language.is_default">
                                            <label for="latitude">{{ __('latitude') }} <span
                                                    class="text-danger text-sm">*</span></label>
                                            <input type="text" class="form-control" name="latitude" id="latitude"
                                                v-model="city.latitude" @change="onManualCoordinateChange" :placeholder="__('latitude')" required>
                                        </div>
                                        <div class="form-group" v-if="language.is_default">
                                            <label for="longitude"> {{ __('longitude') }}<span
                                                    class="text-danger text-sm">*</span></label>
                                            <input type="text" class="form-control" name="longitude" id="longitude"
                                                v-model="city.longitude" @change="onManualCoordinateChange" :placeholder="__('longitude')" required>
                                        </div>

                                        <div class="form-group" v-if="language.is_default">
                                            <label for="name"> {{ __('city_name') }}<span
                                                    class="text-danger text-sm">*</span></label>
                                            <input type="text" class="form-control" name="name" id="name"
                                                v-model="city.name" :placeholder="__('city_name')" required>
                                        </div>

                                        <div class="form-group" v-if="language.is_default">
                                            <label for="state"> {{ __('state_name') }}<span
                                                    class="text-danger text-sm">*</span></label>
                                            <input type="text" class="form-control" name="state" id="state"
                                                v-model="city.state" :placeholder="__('state_name')" required>
                                        </div>

                                        <div class="form-group" v-if="translations[language.id]">
                                            <label :for="'zone_' + language.id"> {{ __('zone_name') }}<span
                                                    v-if="language.is_default"
                                                    class="text-danger text-sm">*</span></label>
                                            <input type="text" class="form-control" name="zone"
                                                :id="'zone_' + language.id" v-model="translations[language.id].zone"
                                                :required="language.is_default == 1 ? true : undefined"
                                                :placeholder="__('zone_name')">
                                        </div>

                                        <div class="form-group" v-if="language.is_default">

                                            <label for="time_to_travel">{{ __('time_to_travel_1km') }} <span
                                                    class="text-danger text-sm">*</span> <small>(
                                                    {{ __('enter_in_minutes') }})</small>
                                            </label>
                                            <input type="number" class="form-control" name="time_to_travel"
                                                id="time_to_travel" min="0" max="999999999"
                                                v-model="city.time_to_travel" :placeholder="__('enter_time_to_travel_1km_in_minutes')"
                                                required>
                                        </div>

                                        <div class="form-group" v-if="language.is_default">
                                            <label for="min_amount_for_free_delivery">{{
                                                __('minimum_amount_for_free_delivery')
                                                }}<span class="text-danger text-xs">*</span> <small>[ {{ $currency }}
                                                    ]</small></label>
                                            <input type="number" class="form-control"
                                                name="min_amount_for_free_delivery" id="min_amount_for_free_delivery"
                                                v-model="city.min_amount_for_free_delivery"
                                                :placeholder="__('minimum_amount_for_free_delivery')" min="0"
                                                max="999999999" required>
                                        </div>

                                        <div class="form-group d-none" v-if="language.is_default">
                                            <label for="max_deliverable_distance"> {{ __('maximum_delivarable_distance')
                                                }}<span class="text-danger text-xs">*</span>
                                                <small>[Kilometre]</small></label>
                                            <input type="number" class="form-control" name="max_deliverable_distance"
                                                v-model="city.max_deliverable_distance"
                                                placeholder="Enter Delivarable Maximum Distance in km" min="0"
                                                max="999999999">
                                        </div>

                                        <div class="form-group" v-if="language.is_default">
                                            <label for="delivery_charge_method" class=" col-12 col-form-label">{{
                                                __('delivery_charge_methods') }} <span
                                                    class="text-danger text-sm">*</span></label>
                                            <select class="form-control form-select" name="delivery_charge_method"
                                                id="delivery_charge_method" v-model="city.delivery_charge_method"
                                                required>
                                                <option value="">{{ __('select_method') }}</option>
                                                <option value="fixed_charge">{{ __('fixed_delivery_charges') }}</option>
                                                <option value="per_km_charge">{{ __('per_km_delivery_charges') }}
                                                </option>
                                                <option value="range_wise_charges">{{ __('range_wise_delivery_charges')
                                                    }}</option>
                                            </select>
                                        </div>

                                        <div v-if="language.is_default">
                                            <div class="form-group"
                                                v-if="city.delivery_charge_method === 'fixed_charge'">
                                                <label for="fixed_charge"> {{ __('fix_delivery_charges') }}<span
                                                        class="text-danger text-sm">*</span></label>
                                                <input type="number" class="form-control" name="fixed_charge"
                                                    id="fixed_charge" v-model="city.fixed_charge"
                                                    :placeholder="__('fix_delivery_charges')" min="0" max="999999999"
                                                    step="any">
                                            </div>
                                            <div class="form-group"
                                                v-if="city.delivery_charge_method === 'per_km_charge'">
                                                <label for="per_km_charge">{{ __('per_km_delivery_charges') }}<span
                                                        class="text-danger text-sm">*</span> </label>
                                                <input type="number" class="form-control" name="per_km_charge"
                                                    id="per_km_charge" v-model="city.per_km_charge"
                                                    :placeholder="__('per_km_delivery_charges')" min="0" max="999999999"
                                                    step="any">
                                                <input type="text" class="form-control d-none" name="boundary_points"
                                                    id="boundary_points" v-model="city.boundary_points"
                                                    :placeholder="__('boundary_points')">
                                            </div>

                                            <div class="form-group col-sm-12"
                                                v-if="city.delivery_charge_method === 'range_wise_charges'">
                                                <label>{{ __('range_wise_delivery_charges') }}<span
                                                        class="text-danger text-sm">*
                                                    </span> <span class="text-secondary text-sm">{{ __('set_proper_ranges_for_delivery_charge_do_not_repeat_the_range_value_to_next_range_for_e_g_1_3_4_6') }}</span>
                                                </label>
                                                <div class="form-group row"
                                                    v-for="(range, index) in city.range_wise_charges"
                                                    :key="key = index + 1">
                                                    <div class="col-sm-1">{{ key }}.</div>
                                                    <div class="col-sm-3">
                                                        <input type="number" class="form-control" name="from_range[]"
                                                            id="from_range" v-model="range.from_range"
                                                            :placeholder="__('from_range')" min="0" max="999999999">
                                                    </div>
                                                    <div class="col-sm-1 btn btn-secondary">{{ __('to') }}</div>
                                                    <div class="col-sm-3">
                                                        <input type="number" class="form-control" name="to_range[]"
                                                            id="to_range" v-model="range.to_range"
                                                            :placeholder="__('to_range')" min="0" max="999999999">
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <input type="number" class="form-control" name="price[]"
                                                            id="price" v-model="range.price" :placeholder="__('price')" min="0"
                                                            max="999999999" step="any">
                                                    </div>

                                                    <div class="col-sm-1" v-if="index === 0">
                                                        <a v-b-tooltip.hover :title="__('add_row')" style="cursor: pointer;"
                                                            @click="addRow">
                                                            <i class="fa fa-plus-square fa-2x"></i>
                                                        </a>
                                                    </div>

                                                    <div class="col-sm-1" v-if="index !== 0">
                                                        <a v-b-tooltip.hover :title="__('remove_row')" style="cursor: pointer;"
                                                            @click="remove(index)">
                                                            <i class="fa fa-times fa-2x"></i>
                                                        </a>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </b-tab></b-tabs>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary"> {{ __('save') }}</button>
                                    <button type="reset" class="btn btn-secondary">{{ __('clear') }}</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <div class="card h-100 shadow-sm border-0">
                        <div class="card-header bg-white pb-2 d-flex justify-content-between align-items-center flex-wrap gap-2 border-bottom">
                            <div>
                                <h4 class="mb-0 text-dark font-weight-bold">{{ __('map_view') }}</h4>
                            </div>
                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                <button type="button" class="btn btn-sm text-white font-weight-bold shadow-sm" style="background-color: #f0ad4e; border-color: #eea236;" id="remove-line" @click="removeLastLine">
                                    {{ __('remove_newly_added_line') || 'Remove Newly Added Line' }}
                                </button>
                                <button type="button" class="btn btn-sm text-white font-weight-bold shadow-sm" style="background-color: #d9534f; border-color: #d43f3a;" id="clear-line" @click="clearMap">
                                    {{ __('clear_map') || 'Clear Map' }}
                                </button>
                                <button type="button" class="btn btn-sm text-white font-weight-bold shadow-sm" style="background-color: #5cb85c; border-color: #4cae4c;" id="add-line" @click="restoreOldMap">
                                    {{ __('restore_old_map') || 'Restore Old Map' }}
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <!-- Drawing Toolbar & Quick Mode Switchers -->
                            <div class="p-2 mb-2 bg-light rounded border d-flex justify-content-between align-items-center flex-wrap gap-2 shadow-sm">
                                <div class="d-flex align-items-center gap-2 flex-wrap">
                                    <div class="btn-group btn-group-sm" role="group">
                                        <button type="button" class="btn font-weight-bold" :class="activeDrawTool === null ? 'btn-primary' : 'btn-outline-secondary'" @click="setDrawingTool(null)" title="Stop drawing & pan or navigate the map">
                                            <i class="fa fa-hand-paper-o me-1"></i> Pan Map
                                        </button>
                                        <button type="button" class="btn font-weight-bold" :class="activeDrawTool === 'polygon' ? 'btn-primary' : 'btn-outline-secondary'" @click="setDrawingTool('polygon')" title="Draw custom polygon shapes anywhere on map">
                                            <i class="fa fa-pencil me-1"></i> Custom Polygon
                                        </button>
                                        <button type="button" class="btn font-weight-bold" :class="activeDrawTool === 'circle' ? 'btn-primary' : 'btn-outline-secondary'" @click="setDrawingTool('circle')" title="Draw custom radius circles anywhere on map">
                                            <i class="fa fa-circle-o me-1"></i> Customer Circle
                                        </button>
                                    </div>

                                    <!-- In-progress Polygon Finish/Cancel/Undo Controls -->
                                    <div v-if="activeDrawTool === 'polygon' && drawingPoints.length >= 3" class="btn-group btn-group-sm">
                                        <button type="button" class="btn btn-success font-weight-bold shadow-sm" @click="finishPolygonDrawing" title="Complete this polygon shape (you can draw more polygons after this)">
                                            <i class="fa fa-check me-1"></i> Finish Area ({{ drawingPoints.length }} points)
                                        </button>
                                        <button type="button" class="btn btn-warning text-dark font-weight-bold" @click="undoLastPoint" title="Undo / replace last clicked point">
                                            <i class="fa fa-undo me-1"></i> Undo Point
                                        </button>
                                        <button type="button" class="btn btn-outline-danger" @click="cancelCurrentDrawing" title="Cancel this shape">
                                            <i class="fa fa-times"></i>
                                        </button>
                                    </div>
                                    <div v-else-if="activeDrawTool === 'polygon' && drawingPoints.length > 0" class="d-flex align-items-center gap-1">
                                        <span class="badge bg-warning text-dark px-2 py-1">
                                            Points: {{ drawingPoints.length }} (Click 3+ to finish)
                                        </span>
                                        <button type="button" class="btn btn-xs btn-outline-warning py-1 px-2" @click="undoLastPoint" title="Undo / replace last point">
                                            <i class="fa fa-undo"></i> Undo
                                        </button>
                                        <button type="button" class="btn btn-xs btn-outline-danger py-1 px-2" @click="cancelCurrentDrawing" title="Cancel this shape">
                                            <i class="fa fa-times"></i> Cancel
                                        </button>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center gap-2 flex-wrap">
                                    <span class="badge bg-secondary font-weight-normal px-2 py-1">
                                        Selected Areas: <strong>{{ overlays.length }}</strong>
                                    </span>
                                    <button type="button" class="btn btn-xs btn-outline-primary py-1 px-2" @click="locateCurrentPosition" title="Detect your location">
                                        <i class="fa fa-crosshairs"></i> Current Location
                                    </button>
                                    <button type="button" class="btn btn-xs btn-outline-secondary py-1 px-2" @click="fitToBoundary" title="Fit map view to all areas">
                                        <i class="fa fa-arrows-alt"></i> Fit View
                                    </button>
                                </div>
                            </div>

                            <!-- Guidance Message -->
                            <div v-if="activeDrawTool === 'polygon'" class="alert alert-warning border py-2 px-3 mb-2 small d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <i class="fa fa-pencil text-dark me-1"></i>
                                    <span><strong>Polygon Drawing Mode:</strong> Map par click karke points add karein. Points ko drag karke replace/adjust kar sakte hain, ya <strong>Undo Point</strong> karein. Shape khatam karne ke liye <strong>Finish Area</strong> dabayein. Iske baad aap aur bhi multiple polygons bana sakte hain.</span>
                                </div>
                                <div class="d-flex align-items-center gap-1">
                                    <span class="badge bg-dark">{{ drawingPoints.length }} points</span>
                                    <button v-if="drawingPoints.length > 0" type="button" class="btn btn-xs btn-outline-dark py-0 px-1" @click="undoLastPoint" title="Remove last point">
                                        <i class="fa fa-undo"></i> Undo
                                    </button>
                                </div>
                            </div>
                            <div v-else-if="activeDrawTool === 'circle'" class="alert alert-info border py-2 px-3 mb-2 small d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <i class="fa fa-circle-o text-dark me-1"></i>
                                    <span><strong>Customer Circle Mode:</strong> Map par jahan circle banana hai wahan click karein. Ban jane ke baad circle ko drag ya resize kar sakte hain. Multiple circles bhi draw kar sakte hain.</span>
                                </div>
                            </div>
                            <div v-else class="alert alert-light-primary border py-2 px-3 mb-2 small text-muted d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <i class="fa fa-info-circle text-primary me-1"></i>
                                    <span><strong>Area Selection:</strong> <strong>Custom Polygon</strong> ya <strong>Customer Circle</strong> select karke map pe areas draw karein. Multiple areas supported hain.</span>
                                </div>
                                <div v-if="city.formatted_address" class="small text-truncate text-muted" style="max-width: 250px;" :title="city.formatted_address">
                                    <i class="fa fa-map-pin text-danger me-1"></i> {{ city.formatted_address }}
                                </div>
                            </div>

                            <div id="map" style="position: relative; overflow: hidden; border-radius: 8px; border: 1px solid #dee2e6;">
                                <GmapMap :zoom="12" :center="center" :mapTypeControl="true"
                                    @click="onMapClick" @dblclick="onMapDblClick"
                                    style="width: 100%; height: 650px;" ref="mapRef">
                                    <GmapMarker :key="index" v-for="(m, index) in markers"
                                        :position="google && m.position" @click="center = m.position" :clickable="true"
                                        :draggable="true" @dragend="onMarkerDragEnd" />
                                    <gmap-info-window :options="{
                                        maxWidth: 300,
                                        pixelOffset: { width: 0, height: -35 }
                                    }" :position="infoWindow.position" :opened="infoWindow.open"
                                        @closeclick="infoWindow.open = false">
                                        <div v-html="infoWindow.template"></div>
                                    </gmap-info-window>
                                </GmapMap>
                            </div>

                            <div class="form-group d-none mt-2">
                                <label class="control-label" for="vertices">{{ __('boundary_points') }}</label>
                                <textarea v-model="vertices" class="form-control" name="vertices" id="vertices" rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { gmapApi } from 'vue2-google-maps';
import TranslationHelper from '../../mixins/TranslationHelper.js';

export default {
    mixins: [TranslationHelper],
    data: function () {
        return {

            center: { lat: 0, lng: 0 },
            currentPlace: null,
            markers: [],
            city: {
                id: "",
                latitude: "22.7195687",
                longitude: "75.8577258",
                name: "",
                state: "",
                zone: "",
                formatted_address: "",
                time_to_travel: "",
                min_amount_for_free_delivery: "",
                max_deliverable_distance: "",
                delivery_charge_method: "",
                fixed_charge: "",
                per_km_charge: "",
                range_wise_charges: [
                    { from_range: "", to_range: "", price: "" }
                ],
                boundary_points: "",
                geolocation_type: "circle",
                radius: 15000,
            },
            boundary_points: "",
            formatted_address: "",
            infoWindow: {
                position: { lat: 22.7195687, lng: 75.8577258 },
                open: false,
                template: ''
            },
            map: null,
            drawingManager: null,
            overlays: [],
            originalBoundaries: null,
            activeDrawTool: null, // null (pan mode), 'polygon', 'circle'
            drawingPolygon: null,
            drawingPoints: [],
            drawingMarkers: [],
            vertices: "",
            geolocation_type: "polygon",
            radius: 15000,
            googleMapsLoaded: false,
            languages: [],
            translations: {},
            defaultLanguageId: null,
            activeLanguageTab: 0,
            renderKey: 0,

            // Translate buttons
            translatableFields: ['zone'],
            translateSuccessMessage: '',
            loadingEmpty: false,
            loadingOverwrite: false,
        }
    },
    watch: {
        'city.latitude'(newVal) {
            if (newVal && this.city.longitude && this.map) {
                const lat = parseFloat(newVal);
                const lng = parseFloat(this.city.longitude);
                if (!isNaN(lat) && !isNaN(lng)) {
                    this.markers = [{ position: { lat, lng } }];
                    this.center = { lat, lng };
                }
            }
        },
        'city.longitude'(newVal) {
            if (newVal && this.city.latitude && this.map) {
                const lat = parseFloat(this.city.latitude);
                const lng = parseFloat(newVal);
                if (!isNaN(lat) && !isNaN(lng)) {
                    this.markers = [{ position: { lat, lng } }];
                    this.center = { lat, lng };
                }
            }
        }
    },
    mounted() {
        this.$refs.mapRef.$mapPromise.then((map) => {
            this.map = map;
            this.initDrawingManager();
            this.setMap();
            if (!this.city.id) {
                this.reverseGeocode(this.city.latitude, this.city.longitude);
            }
        });
        this.waitForGoogleMaps();
    },
    computed: {
        google() {
            return gmapApi(); // This will return the google object once the API is loaded
        },
        formattedRadius() {
            const r = parseFloat(this.city.radius || this.radius);
            if (!r || isNaN(r)) return '';
            if (r >= 1000) {
                return (r / 1000).toFixed(2) + ' km';
            }
            return Math.round(r) + ' m';
        },
        boundaryPointsCount() {
            if (!this.city.boundary_points) return 0;
            try {
                const pts = typeof this.city.boundary_points === 'string'
                    ? JSON.parse(this.city.boundary_points)
                    : this.city.boundary_points;
                return Array.isArray(pts) ? pts.length : 0;
            } catch (e) {
                return 0;
            }
        }
    },
    created: function () {
        this.city.id = this.$route.params.id;
        this.cityRecord = this.$route.params.record;
        this.$apiUrl = '/api';

        this.fetchActiveLanguages()
            .then(() => {
                this.initializeTranslations();

                if (this.city.id) {
                    this.loadCityWithTranslations();
                }


                this.isLoadingData = false;
            });

    },
    methods: {
        fetchActiveLanguages() {
            return axios.get(this.$apiUrl + '/active_languages')
                .then(response => {
                    this.languages = response.data.data;

                    const defaultLang = this.languages.find(l => l.is_default === 1);
                    if (defaultLang) {
                        this.defaultLanguageId = defaultLang.id;
                    }
                });
        },

        initializeTranslations() {
            const allTranslations = {};
            this.languages.forEach(language => {
                allTranslations[language.id] = {
                    name: '',
                    zone: '',
                };
            });
            this.translations = allTranslations;
        },
        validateDefaultLanguage() {

            // Validate normal city name
            if (!this.city.name || this.city.name.trim() === '') {
                this.showError("Please enter city name");
                this.switchToDefaultLanguageTab();
                return false;
            }

            // Validate default language zone
            const defaultTranslation = this.translations[this.defaultLanguageId];

            if (!defaultTranslation.zone || defaultTranslation.zone.trim() === '') {
                this.showError("Please enter zone name in default language");
                this.switchToDefaultLanguageTab();
                return false;
            }

            // Validate Time to travel 1 (km) - required
            if (this.city.time_to_travel === '' || this.city.time_to_travel === null || this.city.time_to_travel === undefined) {
                this.showError(__('time_to_travel_1km') + ' ' + __('is_required'));
                this.switchToDefaultLanguageTab(true);
                return false;
            }

            // Validate Minimum Amount for Free Delivery - required
            if (this.city.min_amount_for_free_delivery === '' || this.city.min_amount_for_free_delivery === null || this.city.min_amount_for_free_delivery === undefined) {
                this.showError(__('minimum_amount_for_free_delivery') + ' ' + __('is_required'));
                this.switchToDefaultLanguageTab(true);
                return false;
            }

            // Validate Delivery Charge Methods - required
            if (!this.city.delivery_charge_method || this.city.delivery_charge_method.trim() === '') {
                this.showError(__('delivery_charge_methods') + ' ' + __('is_required'));
                this.switchToDefaultLanguageTab(true);
                return false;
            }

            // Validate delivery charge method specific fields
            if (this.city.delivery_charge_method === 'fixed_charge') {
                if (this.city.fixed_charge === '' || this.city.fixed_charge === null || this.city.fixed_charge === undefined) {
                    this.showError(__('fix_delivery_charges') + ' ' + __('is_required'));
                    this.switchToDefaultLanguageTab(true);
                    return false;
                }
            } else if (this.city.delivery_charge_method === 'per_km_charge') {
                if (this.city.per_km_charge === '' || this.city.per_km_charge === null || this.city.per_km_charge === undefined) {
                    this.showError(__('per_km_delivery_charges') + ' ' + __('is_required'));
                    this.switchToDefaultLanguageTab(true);
                    return false;
                }
            } else if (this.city.delivery_charge_method === 'range_wise_charges') {
                const ranges = this.city.range_wise_charges || [];
                const hasValidRange = ranges.some(r => (r.from_range !== '' && r.from_range != null) && (r.to_range !== '' && r.to_range != null) && (r.price !== '' && r.price != null));
                if (!hasValidRange) {
                    this.showError(__('range_wise_delivery_charges') + ' ' + __('is_required'));
                    this.switchToDefaultLanguageTab(true);
                    return false;
                }
            }

            return true;
        },


        addRow() {
            this.city.range_wise_charges.push({ from_range: "", to_range: "", price: "" })
        },
        remove(index) {
            this.city.range_wise_charges.splice(index, 1)
        },
        setPlace(place) {
            if (!place || !place.geometry || !place.geometry.location) {
                return;
            }
            const lat = typeof place.geometry.location.lat === 'function' ? place.geometry.location.lat() : place.geometry.location.lat;
            const lng = typeof place.geometry.location.lng === 'function' ? place.geometry.location.lng() : place.geometry.location.lng;

            this.city.latitude = parseFloat(lat).toFixed(7);
            this.city.longitude = parseFloat(lng).toFixed(7);
            this.city.formatted_address = place.formatted_address || '';

            let cityName = place.name || '';
            let stateName = '';
            let zoneName = '';

            if (place.address_components && Array.isArray(place.address_components)) {
                place.address_components.forEach(component => {
                    const types = component.types || [];
                    if (types.includes("locality")) {
                        cityName = component.long_name;
                    } else if (!cityName && (types.includes("administrative_area_level_2") || types.includes("postal_town"))) {
                        cityName = component.long_name;
                    }

                    if (types.includes("administrative_area_level_1")) {
                        stateName = component.long_name;
                    }

                    if (types.includes("sublocality") || types.includes("sublocality_level_1") || types.includes("sublocality_level_2") || types.includes("neighborhood")) {
                        if (!zoneName) {
                            zoneName = component.long_name;
                        }
                    }
                });
            }

            if (cityName) {
                this.city.name = cityName;
            } else if (place.name) {
                this.city.name = place.name;
            }

            if (stateName) {
                this.city.state = stateName;
            } else if (place.formatted_address) {
                let addressArr = place.formatted_address.split(",");
                if (addressArr.length >= 2) {
                    this.city.state = addressArr[addressArr.length - 2].trim();
                }
            }

            if (zoneName && this.defaultLanguageId && this.translations[this.defaultLanguageId]) {
                this.translations[this.defaultLanguageId].zone = zoneName;
            }

            const marker = { lat: parseFloat(lat), lng: parseFloat(lng) };
            this.markers = [{ position: marker }];
            this.center = marker;
            this.infoWindow.position = marker;
            this.infoWindow.template = `<b>${this.city.name || 'Selected Location'}</b><br>${this.city.formatted_address}`;
            this.infoWindow.open = true;
        },

        reverseGeocode(lat, lng) {
            const numLat = parseFloat(lat);
            const numLng = parseFloat(lng);
            if (isNaN(numLat) || isNaN(numLng)) return;

            this.city.latitude = numLat.toFixed(7);
            this.city.longitude = numLng.toFixed(7);

            const marker = { lat: numLat, lng: numLng };
            this.markers = [{ position: marker }];
            this.center = marker;

            const googleObj = window.google || (this.google ? window.google : null);
            if (!googleObj || !googleObj.maps || !googleObj.maps.Geocoder) {
                this.infoWindow.position = marker;
                this.infoWindow.template = `<b>Coordinates</b><br>${this.city.latitude}, ${this.city.longitude}`;
                this.infoWindow.open = true;
                return;
            }

            const geocoder = new googleObj.maps.Geocoder();
            geocoder.geocode({ location: { lat: numLat, lng: numLng } }, (results, status) => {
                if (status === "OK" && results && results.length > 0) {
                    const place = results[0];
                    this.city.formatted_address = place.formatted_address || '';

                    let cityName = '';
                    let stateName = '';
                    let zoneName = '';

                    if (place.address_components && Array.isArray(place.address_components)) {
                        place.address_components.forEach(component => {
                            const types = component.types || [];
                            if (types.includes("locality")) {
                                cityName = component.long_name;
                            } else if (!cityName && (types.includes("administrative_area_level_2") || types.includes("postal_town"))) {
                                cityName = component.long_name;
                            }

                            if (types.includes("administrative_area_level_1")) {
                                stateName = component.long_name;
                            }

                            if (types.includes("sublocality") || types.includes("sublocality_level_1") || types.includes("sublocality_level_2") || types.includes("neighborhood")) {
                                if (!zoneName) {
                                    zoneName = component.long_name;
                                }
                            }
                        });
                    }

                    if (cityName) {
                        this.city.name = cityName;
                    }
                    if (stateName) {
                        this.city.state = stateName;
                    } else if (place.formatted_address) {
                        let addressArr = place.formatted_address.split(",");
                        if (addressArr.length >= 2) {
                            this.city.state = addressArr[addressArr.length - 2].trim();
                        }
                    }

                    if (zoneName && this.defaultLanguageId && this.translations[this.defaultLanguageId]) {
                        this.translations[this.defaultLanguageId].zone = zoneName;
                    }

                    this.infoWindow.position = marker;
                    this.infoWindow.template = `<b>${this.city.name || 'Selected Location'}</b><br>${this.city.formatted_address}`;
                    this.infoWindow.open = true;
                }
            });
        },

        onMapClick(event) {
            if (!event || !event.latLng) return;
            const lat = typeof event.latLng.lat === 'function' ? event.latLng.lat() : event.latLng.lat;
            const lng = typeof event.latLng.lng === 'function' ? event.latLng.lng() : event.latLng.lng;

            if (this.activeDrawTool === 'polygon') {
                this.addPolygonPoint({ lat, lng });
                return;
            }

            if (this.activeDrawTool === 'circle') {
                this.addCircleOverlay({ lat, lng });
                return;
            }

            this.reverseGeocode(lat, lng);
        },

        onMarkerDragEnd(event) {
            if (event && event.latLng) {
                const lat = typeof event.latLng.lat === 'function' ? event.latLng.lat() : event.latLng.lat;
                const lng = typeof event.latLng.lng === 'function' ? event.latLng.lng() : event.latLng.lng;
                this.reverseGeocode(lat, lng);
            }
        },

        locateCurrentPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        this.reverseGeocode(lat, lng);
                    },
                    (error) => {
                        console.warn("Geolocation error:", error);
                        this.showError("Unable to retrieve your current location. Please allow location permissions.");
                    }
                );
            } else {
                this.showError("Geolocation is not supported by your browser.");
            }
        },

        onManualCoordinateChange() {
            if (this.city.latitude && this.city.longitude) {
                const lat = parseFloat(this.city.latitude);
                const lng = parseFloat(this.city.longitude);
                if (!isNaN(lat) && !isNaN(lng)) {
                    this.reverseGeocode(lat, lng);
                }
            }
        },

        loadCityWithTranslations() {

            return axios.get(this.$apiUrl + '/cities/edit/' + this.city.id)
                .then(response => {

                    const city = response.data.data;

                    if (!city) {
                        this.showError("City not found");
                        return;
                    }

                    // Load base fields
                    Object.keys(this.city).forEach(key => {

                        if (key === 'range_wise_charges') {
                            this.city[key] = city[key] ? JSON.parse(city[key]) : [];
                        }
                        else if (key !== 'zone') {
                            this.city[key] = city[key] || '';
                        }

                    });
                    let updatedTranslations = { ...this.translations };

                    if (city.translations && Array.isArray(city.translations)) {

                        city.translations.forEach(trans => {

                            updatedTranslations[trans.language_id] = {
                                zone: trans.zone || ''
                            };

                        });
                    }

                    // Fallback for default language
                    this.languages.forEach(language => {

                        if (language.is_default) {

                            if (!updatedTranslations[language.id]?.zone) {

                                updatedTranslations[language.id] = {
                                    zone: city.zone || ''
                                };

                            }

                        }

                    });

                    this.translations = updatedTranslations;

                    // Force re-render 
                    this.renderKey++;

                    this.setMap();

                })
                .catch(error => {
                    console.error("Error loading city:", error);
                    this.showError("Failed to load city");
                });
        }
        ,

        validateDefaultLanguageForTranslation() {
            return this.validateDefaultLanguage();
        },

        ensureDrawingManager() {
            // Deprecated DrawingManager bypassed in favor of native Google Maps Polygon & Circle API
            return null;
        },

        initDrawingManager() {
            // Deprecated DrawingManager bypassed in favor of native Google Maps Polygon & Circle API
            return null;
        },

        setDrawingTool(tool) {
            this.activeDrawTool = tool;

            if (this.map) {
                if (tool === 'polygon' || tool === 'circle') {
                    this.map.setOptions({ draggableCursor: 'crosshair' });
                } else {
                    this.map.setOptions({ draggableCursor: null });
                }
            }

            if (tool !== 'polygon') {
                this.cancelCurrentDrawing();
            }
        },

        setDrawingMode(mode) {
            this.setDrawingTool(mode);
        },

        onMapDblClick() {
            if (this.activeDrawTool === 'polygon' && this.drawingPoints && this.drawingPoints.length >= 3) {
                this.finishPolygonDrawing();
            }
        },

        addPolygonPoint(point) {
            if (!this.map || !window.google || !window.google.maps) return;

            // If user clicks near the first point and we have at least 3 points, complete the polygon
            if (this.drawingPoints.length >= 3) {
                const firstPt = this.drawingPoints[0];
                const latDiff = Math.abs(firstPt.lat - point.lat);
                const lngDiff = Math.abs(firstPt.lng - point.lng);
                if (latDiff < 0.0015 && lngDiff < 0.0015) {
                    this.finishPolygonDrawing();
                    return;
                }
            }

            this.drawingPoints.push(point);

            // Add draggable point marker so user can drag to replace/reposition anytime
            const marker = new google.maps.Marker({
                position: point,
                map: this.map,
                draggable: true,
                cursor: 'move',
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 6,
                    fillColor: this.drawingPoints.length === 1 ? '#28a745' : '#007bff',
                    fillOpacity: 1,
                    strokeColor: '#ffffff',
                    strokeWeight: 2
                },
                title: this.drawingPoints.length === 1
                    ? 'First point (Click to close polygon, or drag to reposition)'
                    : `Point ${this.drawingPoints.length} (Drag to move/replace, right-click to delete)`,
                zIndex: 10
            });

            // When user drags any point marker, replace that point's coordinates in real-time
            google.maps.event.addListener(marker, 'drag', (e) => {
                const idx = this.drawingMarkers.indexOf(marker);
                if (idx !== -1) {
                    this.drawingPoints[idx] = {
                        lat: parseFloat(e.latLng.lat().toFixed(7)),
                        lng: parseFloat(e.latLng.lng().toFixed(7))
                    };
                    if (this.drawingPolygon) {
                        this.drawingPolygon.setPaths(this.drawingPoints);
                    }
                }
            });

            // Right-click on a point marker to delete that specific point
            google.maps.event.addListener(marker, 'rightclick', () => {
                const idx = this.drawingMarkers.indexOf(marker);
                if (idx !== -1) {
                    this.removeSpecificDrawingPoint(idx);
                }
            });

            // If clicking the first point marker, close polygon
            google.maps.event.addListener(marker, 'click', () => {
                const idx = this.drawingMarkers.indexOf(marker);
                if (idx === 0 && this.drawingPoints.length >= 3) {
                    this.finishPolygonDrawing();
                }
            });

            this.drawingMarkers.push(marker);

            if (this.drawingPoints.length === 1) {
                return;
            }

            if (!this.drawingPolygon) {
                this.drawingPolygon = new google.maps.Polygon({
                    paths: this.drawingPoints,
                    strokeColor: '#000000',
                    strokeOpacity: 0.85,
                    strokeWeight: 2,
                    fillColor: '#666666',
                    fillOpacity: 0.35,
                    map: this.map,
                    clickable: false,
                    editable: false,
                    zIndex: 2
                });
            } else {
                this.drawingPolygon.setPaths(this.drawingPoints);
            }
        },

        undoLastPoint() {
            if (!this.drawingPoints || this.drawingPoints.length === 0) return;
            this.removeSpecificDrawingPoint(this.drawingPoints.length - 1);
        },

        removeSpecificDrawingPoint(idx) {
            if (idx < 0 || idx >= this.drawingPoints.length) return;
            this.drawingPoints.splice(idx, 1);
            const m = this.drawingMarkers.splice(idx, 1)[0];
            if (m) m.setMap(null);

            if (this.drawingPoints.length === 0) {
                if (this.drawingPolygon) {
                    this.drawingPolygon.setMap(null);
                    this.drawingPolygon = null;
                }
            } else if (this.drawingPolygon) {
                this.drawingPolygon.setPaths(this.drawingPoints);
            }
            this.showMessage('info', 'Point removed');
        },

        finishPolygonDrawing() {
            if (!this.drawingPoints || this.drawingPoints.length < 3) {
                this.showError('Please click at least 3 points on the map to create a polygon.');
                return;
            }

            this.clearDrawingMarkers();

            if (this.drawingPolygon) {
                this.drawingPolygon.setMap(null);
                this.drawingPolygon = null;
            }

            // Create permanent editable polygon
            const poly = new google.maps.Polygon({
                paths: this.drawingPoints.map(p => ({ lat: p.lat, lng: p.lng })),
                strokeColor: '#000000',
                strokeOpacity: 0.85,
                strokeWeight: 2,
                fillColor: '#666666',
                fillOpacity: 0.35,
                map: this.map,
                editable: true,
                clickable: true,
                geodesic: true,
                zIndex: 1
            });
            poly.type = 'polygon';
            this.attachPolygonEvents(poly);
            this.overlays.push(poly);

            this.drawingPoints = [];
            this.updateAllBoundaries();
            this.showMessage('success', `Polygon area ${this.overlays.length} created! You can now draw another polygon or pan.`);
        },

        cancelCurrentDrawing() {
            this.clearDrawingMarkers();
            if (this.drawingPolygon) {
                this.drawingPolygon.setMap(null);
                this.drawingPolygon = null;
            }
            this.drawingPoints = [];
        },

        clearDrawingMarkers() {
            if (this.drawingMarkers && this.drawingMarkers.length > 0) {
                this.drawingMarkers.forEach(m => {
                    if (m) m.setMap(null);
                });
                this.drawingMarkers = [];
            }
        },

        addCircleOverlay(point) {
            if (!this.map || !window.google || !window.google.maps) return;

            const circle = new google.maps.Circle({
                strokeColor: '#000000',
                strokeOpacity: 0.85,
                strokeWeight: 2,
                fillColor: '#666666',
                fillOpacity: 0.35,
                map: this.map,
                center: point,
                radius: 15000,
                editable: true,
                draggable: true,
                clickable: true,
                zIndex: 1
            });
            circle.type = 'circle';
            this.attachCircleEvents(circle);
            this.overlays.push(circle);

            this.updateAllBoundaries();
            this.showMessage('success', 'Customer circle created! Drag center or resize edges to adjust.');
        },

        attachPolygonEvents(polygon) {
            if (!polygon || !polygon.getPath) return;
            const path = polygon.getPath();
            ['set_at', 'insert_at', 'remove_at'].forEach(eventName => {
                google.maps.event.addListener(path, eventName, () => {
                    this.updateAllBoundaries();
                });
            });

            // Right click on a vertex to delete it
            google.maps.event.addListener(polygon, 'rightclick', (event) => {
                if (event.vertex !== undefined) {
                    path.removeAt(event.vertex);
                    this.updateAllBoundaries();
                }
            });
        },

        attachCircleEvents(circle) {
            if (!circle) return;

            google.maps.event.addListener(circle, 'radius_changed', () => {
                this.updateAllBoundaries();
            });

            google.maps.event.addListener(circle, 'center_changed', () => {
                this.updateAllBoundaries();
            });
        },

        updateAllBoundaries() {
            if (!this.overlays || this.overlays.length === 0) {
                this.city.boundary_points = '';
                this.vertices = '';
                this.city.geolocation_type = '';
                this.city.radius = '';
                this.geolocation_type = '';
                this.radius = '';
                return;
            }

            if (this.overlays.length === 1) {
                const overlay = this.overlays[0];
                if (overlay.type === 'circle' || typeof overlay.getRadius === 'function') {
                    const center = overlay.getCenter();
                    const radius = Math.round(overlay.getRadius());
                    const centerLat = center ? parseFloat(center.lat().toFixed(7)) : parseFloat(this.city.latitude);
                    const centerLng = center ? parseFloat(center.lng().toFixed(7)) : parseFloat(this.city.longitude);
                    const pts = [{ lat: centerLat, lng: centerLng }];

                    this.city.radius = radius;
                    this.radius = radius;
                    this.city.geolocation_type = 'circle';
                    this.geolocation_type = 'circle';
                    this.city.boundary_points = JSON.stringify(pts);
                    this.vertices = this.city.boundary_points;
                    return;
                } else if (overlay.getPath) {
                    const path = overlay.getPath();
                    const pts = [];
                    for (let i = 0; i < path.getLength(); i++) {
                        const pt = path.getAt(i);
                        pts.push({
                            lat: parseFloat(pt.lat().toFixed(7)),
                            lng: parseFloat(pt.lng().toFixed(7))
                        });
                    }
                    this.city.geolocation_type = 'polygon';
                    this.geolocation_type = 'polygon';
                    this.city.boundary_points = JSON.stringify(pts);
                    this.vertices = this.city.boundary_points;
                    return;
                }
            }

            // Multiple Locations / Multi-polygon
            const shapes = [];
            this.overlays.forEach(overlay => {
                if (overlay.type === 'circle' || typeof overlay.getRadius === 'function') {
                    const center = overlay.getCenter();
                    const radius = Math.round(overlay.getRadius());
                    shapes.push({
                        type: 'circle',
                        center: {
                            lat: parseFloat(center.lat().toFixed(7)),
                            lng: parseFloat(center.lng().toFixed(7))
                        },
                        radius: radius
                    });
                } else if (overlay.getPath) {
                    const path = overlay.getPath();
                    const pts = [];
                    for (let i = 0; i < path.getLength(); i++) {
                        const pt = path.getAt(i);
                        pts.push({
                            lat: parseFloat(pt.lat().toFixed(7)),
                            lng: parseFloat(pt.lng().toFixed(7))
                        });
                    }
                    if (pts.length > 0) {
                        shapes.push(pts);
                    }
                }
            });

            this.city.geolocation_type = 'polygon';
            this.geolocation_type = 'polygon';
            this.city.boundary_points = JSON.stringify(shapes);
            this.vertices = this.city.boundary_points;
        },

        removeLastLine() {
            if (this.drawingPoints && this.drawingPoints.length > 0) {
                this.cancelCurrentDrawing();
                this.showMessage('info', 'Cancelled in-progress shape');
                return;
            }
            if (this.overlays && this.overlays.length > 0) {
                const last = this.overlays.pop();
                if (last) {
                    last.setMap(null);
                }
                this.updateAllBoundaries();
                this.showMessage('info', __('remove_newly_added_line') || 'Removed newly added area');
            } else {
                this.showError('No drawn lines or areas to remove');
            }
        },

        clearMap() {
            this.cancelCurrentDrawing();
            if (this.overlays && this.overlays.length > 0) {
                this.overlays.forEach(o => {
                    if (o) o.setMap(null);
                });
                this.overlays = [];
            }
            this.city.boundary_points = '';
            this.vertices = '';
            this.city.geolocation_type = '';
            this.city.radius = '';
            this.geolocation_type = '';
            this.radius = '';
            this.showMessage('info', __('clear_map') || 'Map cleared');
        },

        restoreOldMap() {
            if (!this.originalBoundaries) {
                this.showError('No saved boundary found to restore');
                return;
            }

            if (this.overlays && this.overlays.length > 0) {
                this.overlays.forEach(o => {
                    if (o) o.setMap(null);
                });
                this.overlays = [];
            }

            this.city.boundary_points = typeof this.originalBoundaries === 'string'
                ? this.originalBoundaries
                : JSON.stringify(this.originalBoundaries);
            this.vertices = this.city.boundary_points;

            this.renderSavedBoundaries();
            this.fitToBoundary();
            this.showMessage('success', __('restore_old_map') || 'Original map restored');
        },

        renderSavedBoundaries() {
            if (!this.map || !window.google || !window.google.maps || !this.city.boundary_points) {
                return;
            }

            if (this.overlays && this.overlays.length > 0) {
                this.overlays.forEach(o => {
                    if (o) o.setMap(null);
                });
                this.overlays = [];
            }

            let bp = this.city.boundary_points;
            if (typeof bp === 'string') {
                try {
                    bp = JSON.parse(bp);
                } catch (e) {
                    bp = null;
                }
            }

            if (!bp) return;

            if (this.originalBoundaries === null) {
                this.originalBoundaries = JSON.parse(JSON.stringify(bp));
            }

            // Case 1: Multi-polygon or list of shapes
            if (Array.isArray(bp) && bp.length > 0 && (Array.isArray(bp[0]) || (bp[0] && typeof bp[0] === 'object' && !bp[0].lat))) {
                bp.forEach(shape => {
                    if (Array.isArray(shape) && shape.length >= 3) {
                        const poly = new google.maps.Polygon({
                            paths: shape,
                            strokeColor: '#000000',
                            strokeOpacity: 0.85,
                            strokeWeight: 2,
                            fillColor: '#666666',
                            fillOpacity: 0.35,
                            map: this.map,
                            editable: true,
                            clickable: true,
                            geodesic: true,
                            zIndex: 1
                        });
                        poly.type = 'polygon';
                        this.attachPolygonEvents(poly);
                        this.overlays.push(poly);
                    } else if (shape && shape.type === 'circle' && shape.center) {
                        const circle = new google.maps.Circle({
                            strokeColor: '#000000',
                            strokeOpacity: 0.85,
                            strokeWeight: 2,
                            fillColor: '#666666',
                            fillOpacity: 0.35,
                            map: this.map,
                            center: shape.center,
                            radius: shape.radius || 15000,
                            editable: true,
                            draggable: true,
                            clickable: true,
                            zIndex: 1
                        });
                        circle.type = 'circle';
                        this.attachCircleEvents(circle);
                        this.overlays.push(circle);
                    }
                });
                return;
            }

            // Case 2: Single Polygon
            if (Array.isArray(bp) && bp.length >= 3 && bp[0].lat !== undefined) {
                const poly = new google.maps.Polygon({
                    paths: bp,
                    strokeColor: '#000000',
                    strokeOpacity: 0.85,
                    strokeWeight: 2,
                    fillColor: '#666666',
                    fillOpacity: 0.35,
                    map: this.map,
                    editable: true,
                    clickable: true,
                    geodesic: true,
                    zIndex: 1
                });
                poly.type = 'polygon';
                this.attachPolygonEvents(poly);
                this.overlays.push(poly);
                return;
            }

            // Case 3: Circle
            if (this.city.geolocation_type === 'circle' || (Array.isArray(bp) && bp.length === 1)) {
                const center = (Array.isArray(bp) && bp[0])
                    ? bp[0]
                    : { lat: parseFloat(this.city.latitude), lng: parseFloat(this.city.longitude) };
                const radius = parseFloat(this.city.radius) || 15000;
                const circle = new google.maps.Circle({
                    strokeColor: '#000000',
                    strokeOpacity: 0.85,
                    strokeWeight: 2,
                    fillColor: '#666666',
                    fillOpacity: 0.35,
                    map: this.map,
                    center: center,
                    radius: radius,
                    editable: true,
                    draggable: true,
                    clickable: true,
                    zIndex: 1
                });
                circle.type = 'circle';
                this.attachCircleEvents(circle);
                this.overlays.push(circle);
            }
        },

        fitToBoundary() {
            if (!this.map || !window.google || !window.google.maps) return;
            if (this.overlays && this.overlays.length > 0) {
                const bounds = new google.maps.LatLngBounds();
                this.overlays.forEach(overlay => {
                    if (overlay.getPath) {
                        const path = overlay.getPath();
                        for (let i = 0; i < path.getLength(); i++) {
                            bounds.extend(path.getAt(i));
                        }
                    } else if (overlay.getBounds) {
                        bounds.union(overlay.getBounds());
                    }
                });
                if (!bounds.isEmpty()) {
                    this.map.fitBounds(bounds);
                    return;
                }
            }
            if (this.markers.length > 0 && this.markers[0].position) {
                this.center = this.markers[0].position;
                this.map.setZoom(13);
            }
        },

        waitForGoogleMaps() {
            let attempts = 0;
            const checkGoogleMaps = setInterval(() => {
                attempts++;
                if ((window.google && window.google.maps) || (gmapApi() && gmapApi().maps)) {
                    this.googleMapsLoaded = true;
                    clearInterval(checkGoogleMaps);
                    if (this.map) {
                        this.setMap();
                    }
                }
                if (attempts > 30) {
                    clearInterval(checkGoogleMaps);
                }
            }, 100);
        },

        setMap() {
            if (!this.city.latitude || !this.city.longitude) {
                this.city.latitude = "22.7195687";
                this.city.longitude = "75.8577258";
            }

            const lat = parseFloat(this.city.latitude);
            const lng = parseFloat(this.city.longitude);

            if (isNaN(lat) || isNaN(lng)) {
                return;
            }

            const marker = { lat, lng };
            this.markers = [{ position: marker }];
            this.center = marker;

            this.infoWindow.position = marker;
            this.infoWindow.template = `<b>${this.city.name || 'Selected Location'}</b><br>${this.city.formatted_address || ''}`;

            if (!this.map || !window.google || !window.google.maps) {
                return;
            }

            if (!this.drawingManager) {
                this.initDrawingManager();
            }

            if (this.city.boundary_points) {
                this.renderSavedBoundaries();
                this.fitToBoundary();
            }
        },

        switchToDefaultLanguageTab(skipError = false) {
            const defaultLangIndex = this.languages.findIndex(language => language.id === this.defaultLanguageId);
            if (defaultLangIndex !== -1) {
                if (!skipError) {
                    this.showError(__('please_fill_default_language_required_fields'));
                }
                this.activeLanguageTab = defaultLangIndex;
            }
        },

        async saveRecord() {
            if (!this.validateDefaultLanguage()) return;

            this.updateAllBoundaries();

            // If no boundary drawn, but lat & lng exist, provide a default circular area
            if (!this.city.boundary_points || this.city.boundary_points === '' || this.city.boundary_points === '[]') {
                if (this.city.latitude && this.city.longitude) {
                    const lat = parseFloat(this.city.latitude);
                    const lng = parseFloat(this.city.longitude);
                    this.city.geolocation_type = 'circle';
                    this.city.radius = 15000;
                    this.city.boundary_points = JSON.stringify([{ lat: lat, lng: lng }]);
                } else {
                    this.showError("Please enter Latitude and Longitude");
                    return;
                }
            }

            this.isLoading = true;
            let cityId = this.city.id;

            const languagesToSave = [];
            const defaultLang = this.languages.find(l => l.is_default);
            if (defaultLang) {
                languagesToSave.push(defaultLang);
            }

            this.languages.forEach(language => {
                if (language.is_default) return;
                const trans = this.translations[language.id];
                if (trans && trans.zone && trans.zone.trim() !== '') {
                    languagesToSave.push(language);
                }
            });

            try {
                for (let language of languagesToSave) {
                    let formData = new FormData();

                    if (cityId && cityId !== "") {
                        formData.append("id", cityId);
                    }

                    if (language.is_default) {
                        for (let key in this.city) {
                            if (key === 'range_wise_charges') {
                                formData.append(key, JSON.stringify(this.city[key]));
                            } else if (key === 'boundary_points') {
                                let bp = this.city.boundary_points;
                                if (typeof bp !== 'string') {
                                    bp = JSON.stringify(bp);
                                }
                                formData.append("boundary_points", bp);
                            } else if (key === 'geolocation_type') {
                                formData.append("geolocation_type", this.city.geolocation_type || 'polygon');
                            } else if (key === 'radius') {
                                formData.append("radius", (this.city.radius !== undefined && this.city.radius !== null) ? this.city.radius : '');
                            } else {
                                formData.append(key, this.city[key] ?? '');
                            }
                        }
                    }

                    // Always send translation fields
                    formData.append("language_id", language.id);
                    formData.append("zone", this.translations[language.id]?.zone || '');

                    const response = await axios.post(this.$apiUrl + '/cities/save', formData);

                    if (!cityId && response.data.data?.id) {
                        cityId = response.data.data.id;
                    }
                }

                this.showMessage("success", __('city_saved_successfully'));

                setTimeout(() => {
                    this.$router.push({ path: '/cities' });
                }, 1500);

            } catch (error) {
                if (error.response?.data?.message) {
                    this.showError(error.response.data.message);
                } else {
                    this.showError("Something went wrong!");
                }
            } finally {
                this.isLoading = false;
            }
        }

    }
};
</script>
