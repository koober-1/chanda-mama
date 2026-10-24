<template>
    <div>
        <div class="page-heading">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>{{ __('manage_citys_center_points_latitude_longitude') }}</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/dashboard">{{ __('dashboard') }}</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{{ __('manage_cities') }}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-12 order-md-1 order-last">
                    <div class="figma-main-section-card">
                        <div class="card-body p-0">
                            <div
                                class="d-flex justify-content-between align-items-center flex-wrap gap-2 figma-action-bar-row">
                                <div class="d-flex align-items-center gap-2 flex-grow-1 flex-wrap">
                                    <div class="figma-search-container" style="min-width: 250px;">
                                        <i class="fa fa-search text-muted"></i>
                                        <input v-model="filter" type="text" class="figma-search-input"
                                            :placeholder="__('search')">
                                    </div>
                                </div>
                                <div class="d-flex gap-2 align-items-center flex-wrap">
                                    <router-link to="/cities/create"
                                        class="btn btn-figma-filter d-flex align-items-center gap-2"
                                        v-if="$can('city_create')">
                                        <i class="fa fa-plus"></i>
                                        <span>{{ __('add_new_city') }}</span>
                                    </router-link>
                                    <button class="btn btn-figma-filter d-flex align-items-center gap-2"
                                        @click="getRecords()" v-b-tooltip.hover :title="__('refresh')">
                                        <i class="fa fa-refresh"></i>
                                        <span>{{ __('refresh') }}</span>
                                    </button>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <b-table id="my-table" ref="table" :items="translatedCities" :fields="fields"
                                    :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy"
                                    :sort-desc.sync="sortDesc" :sort-direction="sortDirection"
                                    @sort-changed="getRecords" :bordered="false" :busy="isLoading" stacked="md"
                                    show-empty small empty-text="There are no cities to show" :key="tableKey"
                                    class="figma-table mb-0" :tbody-tr-class="() => 'figma-tr align-middle'">
                                    <template #table-busy>
                                        <div class="text-center text-black my-2">
                                            <b-spinner class="align-middle"></b-spinner>
                                            <strong>{{ __('loading') }}...</strong>
                                        </div>
                                    </template>
                                    <template #cell(geolocation_type)="row">
                                        <div class="d-flex align-items-center gap-1">
                                            <span v-if="getShapeInfo(row.item).type === 'multi'"
                                                class="badge bg-light-info text-info fw-bold d-inline-flex align-items-center gap-1 px-2 py-1">
                                                <i class="fa fa-map-o"></i> Multi-Area
                                                <small class="text-muted ms-1">({{ getShapeInfo(row.item).count }} areas)</small>
                                            </span>
                                            <span v-else-if="getShapeInfo(row.item).type === 'polygon'"
                                                class="badge bg-light-success text-success fw-bold d-inline-flex align-items-center gap-1 px-2 py-1">
                                                <i class="fa fa-pencil-square-o"></i> Polygon
                                                <small v-if="getShapeInfo(row.item).count > 0" class="text-muted ms-1">
                                                    ({{ getShapeInfo(row.item).count }} pts)
                                                </small>
                                            </span>
                                            <span v-else-if="getShapeInfo(row.item).type === 'circle'"
                                                class="badge bg-light-primary text-primary fw-bold d-inline-flex align-items-center gap-1 px-2 py-1">
                                                <i class="fa fa-circle-o"></i> Circle
                                                <small v-if="row.item.radius" class="text-muted ms-1">
                                                    ({{ formatRadius(row.item.radius) }})
                                                </small>
                                            </span>
                                            <span v-else class="badge bg-light text-muted px-2 py-1">
                                                Not Drawn
                                            </span>
                                        </div>
                                    </template>
                                    <template #cell(actions)="row">
                                        <div class="d-flex gap-2">
                                            <button class="figma-action-btn" v-b-tooltip.hover
                                                :title="__('view_serviceable_area') || 'View Serviceable Area'"
                                                @click="previewBoundary(row.item)"
                                                v-if="row.item.boundary_points || (row.item.latitude && row.item.longitude)">
                                                <base-icon name="Eye" hoverName="Type=Hover (1)" width="24"
                                                    height="24" />
                                            </button>
                                            <router-link
                                                :to="{ name: 'EditCity', params: { id: row.item.id, record: row.item } }"
                                                v-b-tooltip.hover :title="__('edit')" class="figma-action-btn"
                                                v-if="$can('city_update')">
                                                <base-icon name="edit icon" hoverName="edit Hover" width="24"
                                                    height="24" />
                                            </router-link>
                                            <button class="figma-action-btn figma-delete-btn" v-b-tooltip.hover
                                                :title="__('delete')" @click="deleteRecord(row.index, row.item.id)"
                                                v-if="$can('city_delete')">
                                                <base-icon name="Type=Default" hoverName="Type=Hover" width="24"
                                                    height="24" />
                                            </button>
                                        </div>
                                    </template>
                                </b-table>
                            </div>

                            <!-- Serviceable Area Preview Modal -->
                            <b-modal id="boundary-preview-modal" v-model="showBoundaryModal"
                                :title="selectedCity ? `${selectedCity.name} - Serviceable Area Preview` : 'Serviceable Area'"
                                size="lg" ok-only ok-title="Close" ok-variant="secondary" centered @hidden="clearPreviewOverlays">
                                <div v-if="selectedCity">
                                    <div class="d-flex justify-content-between align-items-center mb-2 px-1 small flex-wrap gap-2">
                                        <div>
                                            <strong>Type:</strong> 
                                            <span class="badge" :class="getBadgeClass(selectedCity)">
                                                {{ getShapeInfo(selectedCity).text }}
                                            </span>
                                            <span v-if="getShapeInfo(selectedCity).details" class="ms-2 text-muted">
                                                ({{ getShapeInfo(selectedCity).details }})
                                            </span>
                                        </div>
                                        <div class="text-muted text-truncate" style="max-width: 350px;">
                                            <i class="fa fa-map-pin text-danger me-1"></i> {{ selectedCity.formatted_address || `${selectedCity.latitude}, ${selectedCity.longitude}` }}
                                        </div>
                                    </div>
                                    <div style="height: 450px; width: 100%; border-radius: 6px; overflow: hidden; border: 1px solid #dee2e6;">
                                        <GmapMap :zoom="12" :center="previewCenter" style="width: 100%; height: 100%;" ref="previewMapRef">
                                            <GmapMarker v-if="previewCenter.lat && previewCenter.lng" :position="previewCenter" />
                                        </GmapMap>
                                    </div>
                                </div>
                            </b-modal>

                            <div class="figma-table-footer flex-wrap gap-3 mt-4">
                                <div class="showing-results-text small">
                                    {{ __('Showing Result') }} : <span class="showing-bold">{{ pageEnd }}</span> {{ __('of') }} <span
                                        class="showing-bold">{{ totalRows
                                        }}</span>
                                </div>
                                <div class="d-flex align-items-center gap-3">
                                    <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage"
                                        align="right" class="figma-pagination mb-0" hide-goto-end-buttons hide-ellipsis
                                        prev-text="<" next-text=">" @change="getRecords"></b-pagination>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
import { VuejsDatatableFactory } from 'vuejs-datatable';
import axios from "axios";
import moment from "moment";
import { computed } from 'vue';

export default {
    components: {
        VuejsDatatableFactory,
    },
    data: function () {
        return {
            isLoading: false,

            fields: [
                { key: 'id', label: __('id'), sortable: true, sortDirection: 'desc' },
                { key: 'name', label: __('name'), sortable: true, sortDirection: 'desc' },
                { key: 'zone', label: __('zone'), sortable: true, sortDirection: 'desc' },
                { key: 'state', label: __('state'), sortable: true, sortDirection: 'desc' },
                { key: 'latitude', label: __('latitude'), sortable: true, sortDirection: 'desc' },
                { key: 'longitude', label: __('longitude'), sortable: true, sortDirection: 'desc' },
                { key: 'geolocation_type', label: __('geolocation_type'), sortable: true, sortDirection: 'desc' },
                { key: 'actions', label: __('actions') }
            ],

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
            tableKey: 0, // For forcing table re-render
            currentLanguageId: null,
            activeLanguages: [],
            showBoundaryModal: false,
            selectedCity: null,
            previewCenter: { lat: 0, lng: 0 },
            previewOverlays: [],
        }
    },
    beforeDestroy() {
        this.clearPreviewOverlays();
    },
    mounted() {
    },
    created() {
        this.fetchActiveLanguages().then(() => {
            this.getRecords();
        });
    },
    computed: {
        pageEnd() {
            return Math.min(this.currentPage * this.perPage, this.totalRows);
        },
        translatedCities() {
            if (!this.currentLanguageId || !Array.isArray(this.cities)) return this.cities;

            return this.cities.map(city => {
                const c = { ...city };
                if (city.translations && Array.isArray(city.translations)) {
                    const translation = city.translations.find(t => t.language_id === this.currentLanguageId);
                    if (translation && translation.zone && translation.zone.trim() !== '') {
                        c.zone = translation.zone;
                    }
                }
                return c;
            });
        }
    },

    watch: {
        currentPage(newPage) {
            this.getRecords();
        },
        perPage(newPerPage) {
            this.getRecords();
        },
        filter(newFilter, oldFilter) {
            this.currentPage = 1;
            this.getRecords();
        }
    },
    methods: {
        fetchActiveLanguages() {
            return axios.get(this.$apiUrl + '/active_languages')
                .then(response => {
                    if (response.data.data && Array.isArray(response.data.data)) {
                        this.activeLanguages = response.data.data;

                        const appLocale = window.appLocale || 'en';
                        const currentLanguage = this.activeLanguages.find(
                            lang => lang.code === appLocale
                        );

                        if (currentLanguage) {
                            this.currentLanguageId = currentLanguage.id;
                        } else {
                            const defaultLanguage = this.activeLanguages.find(
                                lang => lang.is_default === 1
                            );
                            if (defaultLanguage) this.currentLanguageId = defaultLanguage.id;
                        }
                    }
                }).catch(err => console.error('Error loading languages:', err));
        },

        getRecords() {
            this.isLoading = true
            let vm = this;

            // Calculate proper offset for CityApiController
            const calculatedOffset = this.perPage * (this.currentPage - 1);

            const params = {
                offset: calculatedOffset,
                limit: this.perPage,
                search: this.filter,
                sort_by: this.sortBy,
                sort_dir: this.sortDirection
            };

            axios.get(this.$apiUrl + '/cities', { params })
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;

                    // Handle the nested response structure from CityApiController
                    this.cities = data.data.cities || [];
                    this.totalRows = data.data.total || 0;

                    // Force table re-render
                    this.tableKey++;

                }).catch(error => {
                    vm.isLoading = false;

                    if (error?.request?.statusText) {
                        this.showError(error?.request?.statusText);
                    } else if (error.message) {
                        this.showError(error.message);
                    } else {
                        this.showError(__('something_went_wrong'));
                    }
                });
        },

        deleteRecord(index, id) {
            this.$swal.fire({
                title: __('are_you_sure'),
                text: __('you_want_be_able_to_revert_this'),
                confirmButtonText: __('yes_sure'),
                cancelButtonText: __('cancel'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#37a279',
                cancelButtonColor: '#d33',
            }).then(result => {
                if (result.value) {
                    this.isLoading = true
                    let postData = {
                        id: id
                    }
                    axios.post(this.$apiUrl + '/cities/delete', postData)
                        .then((response) => {
                            this.isLoading = false
                            let data = response.data;
                            this.cities.splice(index, 1)
                            this.showMessage('success', data.message);
                        });
                }
            });
        },

        formatRadius(meters) {
            const m = parseFloat(meters);
            if (!m || isNaN(m)) return '';
            if (m >= 1000) {
                return (m / 1000).toFixed(1) + ' km';
            }
            return Math.round(m) + ' m';
        },

        getPointsCount(boundaryPoints) {
            if (!boundaryPoints) return 0;
            try {
                const pts = typeof boundaryPoints === 'string' ? JSON.parse(boundaryPoints) : boundaryPoints;
                if (!Array.isArray(pts)) return 0;
                if (pts.length > 0 && Array.isArray(pts[0])) {
                    return pts.reduce((sum, p) => sum + (Array.isArray(p) ? p.length : 0), 0);
                }
                return pts.length;
            } catch (e) {
                return 0;
            }
        },

        getShapeInfo(city) {
            if (!city) return { type: 'none', count: 0, text: 'Not Drawn', details: '' };

            let bp = city.boundary_points;
            if (typeof bp === 'string' && bp.trim() !== '') {
                try {
                    bp = JSON.parse(bp);
                } catch (e) {
                    bp = null;
                }
            }

            // Check if multi-shapes (array of polygons / circles)
            if (Array.isArray(bp) && bp.length > 0 && (Array.isArray(bp[0]) || (bp[0] && typeof bp[0] === 'object' && bp[0].type === 'circle'))) {
                let polyCount = 0;
                let circleCount = 0;
                let totalPolyPoints = 0;
                bp.forEach(s => {
                    if (Array.isArray(s)) {
                        polyCount++;
                        totalPolyPoints += s.length;
                    } else if (s && s.type === 'circle') {
                        circleCount++;
                    }
                });

                const total = polyCount + circleCount;
                if (total > 1) {
                    const parts = [];
                    if (polyCount > 0) parts.push(`${polyCount} polygon${polyCount > 1 ? 's' : ''}`);
                    if (circleCount > 0) parts.push(`${circleCount} circle${circleCount > 1 ? 's' : ''}`);
                    return {
                        type: 'multi',
                        count: total,
                        text: `Multi-Area (${total})`,
                        details: parts.join(' + ')
                    };
                } else if (total === 1) {
                    if (circleCount === 1) {
                        const c = bp.find(s => s && s.type === 'circle');
                        const rad = c && c.radius ? this.formatRadius(c.radius) : (city.radius ? this.formatRadius(city.radius) : '');
                        return {
                            type: 'circle',
                            count: 1,
                            text: 'Circle',
                            details: rad ? `Radius: ${rad}` : ''
                        };
                    } else if (polyCount === 1) {
                        return {
                            type: 'polygon',
                            count: totalPolyPoints,
                            text: `Polygon (${totalPolyPoints} pts)`,
                            details: `${totalPolyPoints} points`
                        };
                    }
                }
            }

            // Single polygon
            if (city.geolocation_type === 'polygon' || (Array.isArray(bp) && bp.length >= 3 && bp[0] && bp[0].lat !== undefined)) {
                const count = Array.isArray(bp) ? bp.length : 0;
                return {
                    type: 'polygon',
                    count: count,
                    text: count > 0 ? `Polygon (${count} pts)` : 'Polygon',
                    details: count > 0 ? `${count} points` : ''
                };
            }

            // Single circle
            if (city.geolocation_type === 'circle' || (Array.isArray(bp) && bp.length === 1 && bp[0] && bp[0].lat !== undefined) || city.radius) {
                const rad = this.formatRadius(city.radius);
                return {
                    type: 'circle',
                    count: 1,
                    text: rad ? `Circle (${rad})` : 'Circle',
                    details: rad ? `Radius: ${rad}` : ''
                };
            }

            return { type: 'none', count: 0, text: 'Not Drawn', details: '' };
        },

        getBadgeClass(city) {
            const info = this.getShapeInfo(city);
            if (info.type === 'multi') return 'bg-info text-white';
            if (info.type === 'polygon') return 'bg-success text-white';
            if (info.type === 'circle') return 'bg-primary text-white';
            return 'bg-secondary text-white';
        },

        previewBoundary(city) {
            this.selectedCity = city;
            this.showBoundaryModal = true;
            const lat = parseFloat(city.latitude);
            const lng = parseFloat(city.longitude);
            if (!isNaN(lat) && !isNaN(lng)) {
                this.previewCenter = { lat, lng };
            }

            this.$nextTick(() => {
                if (this.$refs.previewMapRef) {
                    this.$refs.previewMapRef.$mapPromise.then(map => {
                        setTimeout(() => {
                            if (window.google && window.google.maps) {
                                google.maps.event.trigger(map, 'resize');
                            }
                            this.renderPreviewOverlay(map, city);
                        }, 150);
                    });
                }
            });
        },

        clearPreviewOverlays() {
            if (this.previewOverlays && this.previewOverlays.length > 0) {
                this.previewOverlays.forEach(o => {
                    if (o && typeof o.setMap === 'function') {
                        o.setMap(null);
                    }
                });
            }
            this.previewOverlays = [];
        },

        renderPreviewOverlay(map, city) {
            this.clearPreviewOverlays();
            if (!window.google || !window.google.maps || !city) return;

            let boundaryPoints = city.boundary_points;
            if (typeof boundaryPoints === 'string' && boundaryPoints.trim() !== '') {
                try {
                    boundaryPoints = JSON.parse(boundaryPoints);
                } catch (e) {
                    boundaryPoints = null;
                }
            }

            const bounds = new google.maps.LatLngBounds();

            // Case 1: Multi-polygon and circles collection
            if (Array.isArray(boundaryPoints) && boundaryPoints.length > 0 &&
                (Array.isArray(boundaryPoints[0]) || (boundaryPoints[0] && typeof boundaryPoints[0] === 'object' && boundaryPoints[0].type === 'circle'))) {
                boundaryPoints.forEach(shape => {
                    if (Array.isArray(shape) && shape.length >= 3) {
                        const polygonPoints = shape.map(p => ({
                            lat: parseFloat(p.lat),
                            lng: parseFloat(p.lng)
                        })).filter(p => !isNaN(p.lat) && !isNaN(p.lng));

                        if (polygonPoints.length >= 3) {
                            const poly = new google.maps.Polygon({
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
                            polygonPoints.forEach(pt => bounds.extend(pt));
                        }
                    } else if (shape && shape.type === 'circle' && shape.center) {
                        const cLat = parseFloat(shape.center.lat);
                        const cLng = parseFloat(shape.center.lng);
                        if (!isNaN(cLat) && !isNaN(cLng)) {
                            const center = { lat: cLat, lng: cLng };
                            const radiusMeters = parseFloat(shape.radius) || 15000;
                            const circle = new google.maps.Circle({
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
                const polygonPoints = boundaryPoints.map(p => ({
                    lat: parseFloat(p.lat),
                    lng: parseFloat(p.lng)
                })).filter(p => !isNaN(p.lat) && !isNaN(p.lng));

                if (polygonPoints.length >= 3) {
                    const poly = new google.maps.Polygon({
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
                    polygonPoints.forEach(pt => bounds.extend(pt));
                    map.fitBounds(bounds);
                    return;
                }
            }

            // Case 3: Single Circle Serviceable Area
            const points = Array.isArray(boundaryPoints) ? boundaryPoints : (boundaryPoints ? [boundaryPoints] : []);
            const centerLat = points.length > 0 && points[0].lat !== undefined
                ? parseFloat(points[0].lat)
                : parseFloat(city.latitude);
            const centerLng = points.length > 0 && points[0].lng !== undefined
                ? parseFloat(points[0].lng)
                : parseFloat(city.longitude);

            if (!isNaN(centerLat) && !isNaN(centerLng)) {
                const center = { lat: centerLat, lng: centerLng };
                const radiusMeters = parseFloat(city.radius) || 15000;

                const circle = new google.maps.Circle({
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

        centerMapToCity(map, city) {
            const lat = parseFloat(city.latitude);
            const lng = parseFloat(city.longitude);
            if (!isNaN(lat) && !isNaN(lng)) {
                map.setCenter({ lat, lng });
                map.setZoom(12);
            }
        },
    }
};
</script>
