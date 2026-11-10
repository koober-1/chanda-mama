<template>
  <b-modal
    v-model="visible"
    size="xl"
    title="School Physical Coupon Passes & Dynamic Template Manager"
    hide-footer
    no-close-on-backdrop
    @hidden="$emit('close')"
  >
    <div class="school-coupons-wrapper">
      <!-- Top Navigation Tabs -->
      <ul class="nav nav-pills mb-4 gap-2 border-bottom pb-3">
        <li class="nav-item">
          <button
            class="nav-link font-weight-bold"
            :class="{ active: activeTab === 'generate', 'btn-primary': activeTab === 'generate' }"
            @click="activeTab = 'generate'"
          >
            <i class="fa fa-magic mr-1"></i> Generate New School Batch
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link font-weight-bold"
            :class="{ active: activeTab === 'batches', 'btn-primary': activeTab === 'batches' }"
            @click="activeTab = 'batches'; loadBatches();"
          >
            <i class="fa fa-list mr-1"></i> All School Batches & Printouts ({{ totalBatches }})
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link font-weight-bold"
            :class="{ active: activeTab === 'templates', 'btn-primary': activeTab === 'templates' }"
            @click="activeTab = 'templates'; loadTemplates();"
          >
            <i class="fa fa-paint-brush mr-1"></i> Templates & Variable Positions ({{ templates.length }})
          </button>
        </li>
      </ul>

      <!-- ========================================== -->
      <!-- TAB 1: GENERATE NEW BATCH                  -->
      <!-- ========================================== -->
      <div v-if="activeTab === 'generate'">
        <div class="row">
          <!-- Form Section -->
          <div class="col-lg-6">
            <div class="card shadow-sm border-0 mb-4">
              <div class="card-body">
                <h5 class="card-title text-primary font-weight-bold mb-3">
                  <i class="fa fa-graduation-cap mr-1"></i> Create School Coupon Pass Batch
                </h5>
                <form @submit.prevent="generateCoupons">
                  <!-- Template Selection -->
                  <div class="form-group mb-3">
                    <label class="font-weight-bold">Select Card Template <span class="text-danger">*</span></label>
                    <select v-model="selectedTemplateId" class="form-control" @change="onTemplateChange">
                      <option v-for="t in templates" :key="t.id" :value="t.id">
                        {{ t.name }} {{ t.is_default ? '(Default)' : '' }}
                      </option>
                    </select>
                    <small class="text-muted">
                      Want to upload a blank template or adjust text positions? Use the 
                      <a href="javascript:void(0)" @click="activeTab = 'templates'" class="font-weight-bold text-primary">Templates & Variable Positions</a> tab.
                    </small>
                  </div>

                  <div class="form-group mb-3">
                    <label class="font-weight-bold">School Name <span class="text-danger">*</span></label>
                    <input
                      v-model="form.school_name"
                      type="text"
                      class="form-control"
                      placeholder="e.g. DWPS SCHOOL"
                      required
                    />
                    <small class="text-muted">Printed inside the School Name variable space on each card.</small>
                  </div>

                  <div class="row mb-3">
                    <div class="col-md-6">
                      <label class="font-weight-bold">Number of Coupons (Count) <span class="text-danger">*</span></label>
                      <input
                        v-model.number="form.coupon_count"
                        type="number"
                        class="form-control"
                        min="1"
                        max="5000"
                        placeholder="e.g. 100, 500, 1000"
                        required
                      />
                      <small class="text-muted">Quantity to print (A4 has 4 cards/sheet)</small>
                    </div>
                    <div class="col-md-6">
                      <label class="font-weight-bold">Code Prefix (Optional)</label>
                      <input
                        v-model="form.prefix"
                        type="text"
                        class="form-control text-uppercase"
                        maxlength="3"
                        placeholder="E.G. DPS"
                      />
                      <small class="text-muted">Up to 3 letters (rest is 6-char unique)</small>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-md-6">
                      <label class="font-weight-bold">Coupon Worth / Discount (₹) <span class="text-danger">*</span></label>
                      <input
                        v-model.number="form.discount"
                        type="number"
                        class="form-control"
                        min="1"
                        step="0.01"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="font-weight-bold">Minimum Purchase Amount (₹) <span class="text-danger">*</span></label>
                      <input
                        v-model.number="form.min_order_amount"
                        type="number"
                        class="form-control"
                        min="1"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group mb-3">
                    <label class="font-weight-bold">Custom Note / Expiry Text (Optional)</label>
                    <input
                      v-model="form.custom_note"
                      type="text"
                      class="form-control"
                      :placeholder="defaultCustomNotePlaceholder"
                    />
                    <small class="text-muted">Printed in the custom variable space (e.g. Valid till 31-03-2027)</small>
                  </div>

                  <div class="row mb-4">
                    <div class="col-md-6">
                      <label class="font-weight-bold">Start Date</label>
                      <input v-model="form.start_date" type="date" class="form-control" />
                    </div>
                    <div class="col-md-6">
                      <label class="font-weight-bold">Expiry Date <span class="text-danger">*</span></label>
                      <input v-model="form.end_date" type="date" class="form-control" required />
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-success btn-lg btn-block font-weight-bold shadow-sm"
                    :disabled="isGenerating"
                  >
                    <span v-if="isGenerating">
                      <i class="fa fa-spinner fa-spin mr-1"></i> Generating {{ form.coupon_count }} Unique Coupons...
                    </span>
                    <span v-else>
                      <i class="fa fa-cogs mr-1"></i> Generate {{ form.coupon_count }} Coupons & Prepare PDF
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <!-- Live Visual Preview Section -->
          <div class="col-lg-6">
            <div class="card shadow-sm border-0 mb-4 bg-light">
              <div class="card-body">
                <h5 class="card-title text-dark font-weight-bold mb-1 text-center">
                  Live 3x4 Card Visual Preview
                </h5>
                <p class="text-muted text-center small mb-3">
                  All 5 variables dynamically rendered on <strong>{{ activeTemplate.name || 'Selected Template' }}</strong>:
                </p>

                <!-- Interactive Card Preview -->
                <div class="preview-card-viewport mx-auto mb-3">
                  <div class="preview-card-box">
                    <img :src="activeTemplate.image_url" class="preview-bg" alt="Coupon Template" />

                    <!-- Variable 1: School Name -->
                    <div
                      v-if="currentConfig.school_name && currentConfig.school_name.enabled"
                      class="var-box"
                      :style="getVarStyle(currentConfig.school_name)"
                    >
                      {{ form.school_name || 'SCHOOL NAME HERE' }}
                    </div>

                    <!-- Variable 2: Coupon Code -->
                    <div
                      v-if="currentConfig.coupon_code && currentConfig.coupon_code.enabled"
                      class="var-box"
                      :style="getVarStyle(currentConfig.coupon_code)"
                    >
                      {{ sampleCodeFormatted }}
                    </div>

                    <!-- Variable 3: Coupon Worth / Discount -->
                    <div
                      v-if="currentConfig.coupon_worth && currentConfig.coupon_worth.enabled"
                      class="var-box"
                      :style="getVarStyle(currentConfig.coupon_worth)"
                    >
                      {{ (currentConfig.coupon_worth.prefix || '') + (form.discount || 50) + (currentConfig.coupon_worth.suffix || '') }}
                    </div>

                    <!-- Variable 4: Minimum Purchase Amount -->
                    <div
                      v-if="currentConfig.min_purchase && currentConfig.min_purchase.enabled"
                      class="var-box"
                      :style="getVarStyle(currentConfig.min_purchase)"
                    >
                      {{ (currentConfig.min_purchase.prefix || '') + (form.min_order_amount || 499) + (currentConfig.min_purchase.suffix || '') }}
                    </div>

                    <!-- Variable 5: Custom Variable / Expiry -->
                    <div
                      v-if="currentConfig.custom_variable && currentConfig.custom_variable.enabled"
                      class="var-box"
                      :style="getVarStyle(currentConfig.custom_variable)"
                    >
                      {{ form.custom_note || defaultCustomNote }}
                    </div>
                  </div>
                </div>

                <!-- Print Specifications Info Box -->
                <div class="alert alert-info py-2 px-3 mb-0 small">
                  <div class="font-weight-bold mb-1"><i class="fa fa-info-circle mr-1"></i> Print & Pass Specifications:</div>
                  <ul class="mb-0 pl-3">
                    <li><strong>Sheet Format:</strong> Standard A4 Portrait (4 cards per sheet, 94mm x 70.5mm each).</li>
                    <li><strong>Single-Use Pass:</strong> Each 6-character code can be redeemed exactly once.</li>
                    <li><strong>Export Formats:</strong> Interactive Print Preview (Direct Browser Print) + Multi-Page PDF + Excel.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- TAB 2: BATCHES & PRINTOUTS                 -->
      <!-- ========================================== -->
      <div v-if="activeTab === 'batches'">
        <div class="card shadow-sm border-0">
          <div class="card-body p-0">
            <div class="p-3 d-flex justify-content-between align-items-center flex-wrap gap-2 border-bottom">
              <div class="input-group" style="max-width: 320px;">
                <input
                  v-model="batchSearch"
                  type="text"
                  class="form-control"
                  placeholder="Search by school name..."
                  @input="loadBatches()"
                />
              </div>
              <button class="btn btn-outline-secondary btn-sm" @click="loadBatches()">
                <i class="fa fa-refresh mr-1"></i> Refresh
              </button>
            </div>

            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="thead-light">
                  <tr>
                    <th>#Batch</th>
                    <th>School Name</th>
                    <th>Template</th>
                    <th>Discount</th>
                    <th>Min Order</th>
                    <th>Total Passes</th>
                    <th>Redeemed</th>
                    <th>Remaining</th>
                    <th>Validity</th>
                    <th class="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="isLoadingBatches">
                    <td colspan="10" class="text-center py-4">
                      <b-spinner small></b-spinner> Loading batches...
                    </td>
                  </tr>
                  <tr v-else-if="batches.length === 0">
                    <td colspan="10" class="text-center py-4 text-muted">
                      No school coupon batches generated yet. Click "Generate New School Batch" to create one.
                    </td>
                  </tr>
                  <tr v-for="b in batches" :key="b.id">
                    <td><span class="badge badge-secondary">#{{ b.id }}</span></td>
                    <td class="font-weight-bold text-dark">
                      {{ b.school_name }}
                      <div v-if="b.custom_note" class="small text-muted font-italic">{{ b.custom_note }}</div>
                    </td>
                    <td>
                      <span class="badge badge-info">{{ (b.template && b.template.name) ? b.template.name : 'Default 3x4' }}</span>
                    </td>
                    <td class="text-success font-weight-bold">₹{{ parseFloat(b.discount).toFixed(2) }}</td>
                    <td>₹{{ parseFloat(b.minimum_order_amount).toFixed(2) }}</td>
                    <td><span class="badge badge-primary">{{ b.total_coupons }}</span></td>
                    <td><span class="badge badge-success">{{ b.redeemed_count }}</span></td>
                    <td><span class="badge badge-warning text-dark">{{ b.remaining_count }}</span></td>
                    <td class="small">{{ b.start_date || 'Now' }} to {{ b.end_date }}</td>
                    <td class="text-right">
                      <div class="btn-group btn-group-sm">
                        <!-- DIRECT PRINT PREVIEW BUTTON -->
                        <button
                          class="btn text-white font-weight-bold"
                          style="background: #0B4F94;"
                          title="Interactive Print Preview & Direct Browser Print"
                          @click="openPrintPreview(b)"
                        >
                          <i class="fa fa-print mr-1"></i> Print Preview
                        </button>
                        <a
                          :href="'/api/school_coupons/download_pdf/' + b.id"
                          target="_blank"
                          class="btn btn-danger"
                          title="Download Multi-Page Printable PDF"
                        >
                          <i class="fa fa-file-pdf-o"></i> PDF
                        </a>
                        <a
                          :href="'/api/school_coupons/download_excel/' + b.id"
                          target="_blank"
                          class="btn btn-success"
                          title="Download Excel Ledger"
                        >
                          <i class="fa fa-file-excel-o"></i> Excel
                        </a>
                        <button class="btn btn-info" @click="viewBatchCodes(b)" title="Inspect Individual Codes">
                          <i class="fa fa-eye"></i>
                        </button>
                        <button class="btn btn-outline-danger" @click="deleteBatch(b)" title="Delete Batch">
                          <i class="fa fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- TAB 3: TEMPLATES & VARIABLE POSITIONS      -->
      <!-- ========================================== -->
      <div v-if="activeTab === 'templates'">
        <div class="row">
          <!-- Template Selector & Upload Section -->
          <div class="col-12 mb-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div>
              <h5 class="font-weight-bold text-dark mb-0">
                <i class="fa fa-sliders mr-1 text-primary"></i> Coupon Templates & Variable Position Mapper
              </h5>
              <small class="text-muted">
                Upload your blank coupon graphics and set the exact coordinates for School Name, Code, Worth, Min Purchase, and Custom Note.
              </small>
            </div>
            <div class="d-flex gap-2">
              <button class="btn btn-outline-primary btn-sm" @click="initNewTemplate">
                <i class="fa fa-plus mr-1"></i> Upload Blank / New Template
              </button>
            </div>
          </div>

          <!-- Template List Cards -->
          <div class="col-lg-4">
            <div class="card shadow-sm border-0 mb-4">
              <div class="card-header bg-white font-weight-bold border-bottom">
                Saved Templates ({{ templates.length }})
              </div>
              <div class="list-group list-group-flush" style="max-height: 520px; overflow-y: auto;">
                <div
                  v-for="t in templates"
                  :key="t.id"
                  class="list-group-item list-group-item-action d-flex align-items-center justify-content-between p-2"
                  :class="{ 'border-primary bg-light': editingTemplate.id === t.id }"
                  style="cursor: pointer;"
                  @click="selectTemplateForEdit(t)"
                >
                  <div class="d-flex align-items-center gap-2">
                    <img :src="t.image_url" style="width: 55px; height: 42px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;" />
                    <div>
                      <div class="font-weight-bold text-dark small">{{ t.name }}</div>
                      <span v-if="t.is_default" class="badge badge-success" style="font-size: 10px;">DEFAULT</span>
                    </div>
                  </div>
                  <div>
                    <button
                      v-if="!t.is_default"
                      class="btn btn-outline-danger btn-sm p-1 ml-1"
                      title="Delete"
                      @click.stop="deleteTemplate(t)"
                    >
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Template Editor & Visual Mapper -->
          <div class="col-lg-8">
            <div class="card shadow-sm border-0 mb-4">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="font-weight-bold text-primary mb-0">
                    <i class="fa fa-pencil mr-1"></i> Edit Template & Variable Coordinates
                  </h6>
                  <button
                    class="btn btn-primary font-weight-bold btn-sm shadow-sm"
                    :disabled="isSavingTemplate"
                    @click="saveTemplate"
                  >
                    <i class="fa fa-save mr-1"></i> Save Template & Positions
                  </button>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="font-weight-bold small">Template Name <span class="text-danger">*</span></label>
                    <input v-model="editingTemplate.name" type="text" class="form-control form-control-sm" placeholder="e.g. Yellow Red 3x4 Blank" />
                  </div>
                  <div class="col-md-4">
                    <label class="font-weight-bold small">Upload Blank Graphic</label>
                    <input type="file" accept="image/*" class="form-control-file small" @change="onTemplateImageUpload" />
                  </div>
                  <div class="col-md-2 d-flex align-items-end">
                    <div class="custom-control custom-checkbox pb-1">
                      <input id="isDefaultCheck" v-model="editingTemplate.is_default" type="checkbox" class="custom-control-input" />
                      <label class="custom-control-label small font-weight-bold" for="isDefaultCheck">Default</label>
                    </div>
                  </div>
                </div>

                <!-- Interactive Canvas Coordinate Viewer -->
                <div class="text-center mb-2">
                  <span class="badge badge-dark">Visual Coordinate Mapper (Real-Time Preview)</span>
                </div>
                <div class="preview-card-viewport mx-auto mb-3" style="max-width: 440px;">
                  <div class="preview-card-box">
                    <img :src="editingTemplatePreviewUrl" class="preview-bg" alt="Template Preview" />

                    <!-- Var 1 Box -->
                    <div
                      v-if="editingConfig.school_name && editingConfig.school_name.enabled"
                      class="var-box active-var"
                      :style="getVarStyle(editingConfig.school_name)"
                    >
                      [School Name]
                    </div>

                    <!-- Var 2 Box -->
                    <div
                      v-if="editingConfig.coupon_code && editingConfig.coupon_code.enabled"
                      class="var-box active-var"
                      :style="getVarStyle(editingConfig.coupon_code)"
                    >
                      [Code: X7K9P2]
                    </div>

                    <!-- Var 3 Box -->
                    <div
                      v-if="editingConfig.coupon_worth && editingConfig.coupon_worth.enabled"
                      class="var-box active-var"
                      :style="getVarStyle(editingConfig.coupon_worth)"
                    >
                      {{ (editingConfig.coupon_worth.prefix || '') + '45' + (editingConfig.coupon_worth.suffix || '') }}
                    </div>

                    <!-- Var 4 Box -->
                    <div
                      v-if="editingConfig.min_purchase && editingConfig.min_purchase.enabled"
                      class="var-box active-var"
                      :style="getVarStyle(editingConfig.min_purchase)"
                    >
                      {{ (editingConfig.min_purchase.prefix || '') + '520' + (editingConfig.min_purchase.suffix || '') }}
                    </div>

                    <!-- Var 5 Box -->
                    <div
                      v-if="editingConfig.custom_variable && editingConfig.custom_variable.enabled"
                      class="var-box active-var"
                      :style="getVarStyle(editingConfig.custom_variable)"
                    >
                      [Valid till: 31-03-2027]
                    </div>
                  </div>
                </div>

                <!-- Variable Position & Style Sliders -->
                <div class="accordion" id="varSettingsAccordion">
                  <!-- Variable Selector Tabs -->
                  <ul class="nav nav-tabs nav-justified mb-3 small font-weight-bold">
                    <li class="nav-item">
                      <a class="nav-link" :class="{ active: activeVarKey === 'school_name' }" href="javascript:void(0)" @click="activeVarKey = 'school_name'">
                        🏷️ 1. School Name
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" :class="{ active: activeVarKey === 'coupon_code' }" href="javascript:void(0)" @click="activeVarKey = 'coupon_code'">
                        🎟️ 2. Coupon Code
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" :class="{ active: activeVarKey === 'coupon_worth' }" href="javascript:void(0)" @click="activeVarKey = 'coupon_worth'">
                        💰 3. Coupon Worth
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" :class="{ active: activeVarKey === 'min_purchase' }" href="javascript:void(0)" @click="activeVarKey = 'min_purchase'">
                        🛒 4. Min Purchase
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" :class="{ active: activeVarKey === 'custom_variable' }" href="javascript:void(0)" @click="activeVarKey = 'custom_variable'">
                        📝 5. Custom Note
                      </a>
                    </li>
                  </ul>

                  <!-- Selected Variable Controls -->
                  <div v-if="editingConfig[activeVarKey]" class="p-3 bg-light rounded border">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <span class="font-weight-bold text-dark">{{ editingConfig[activeVarKey].label }} Controls</span>
                      <div class="custom-control custom-switch">
                        <input :id="'enabled_' + activeVarKey" v-model="editingConfig[activeVarKey].enabled" type="checkbox" class="custom-control-input" />
                        <label class="custom-control-label small font-weight-bold" :for="'enabled_' + activeVarKey">Enabled</label>
                      </div>
                    </div>

                    <div class="row g-2">
                      <div class="col-md-6 mb-2">
                        <label class="small text-muted d-flex justify-content-between">
                          <span>X Position (Left): <strong>{{ editingConfig[activeVarKey].x }}%</strong></span>
                        </label>
                        <input v-model.number="editingConfig[activeVarKey].x" type="range" class="form-control-range" min="0" max="100" step="0.5" />
                      </div>
                      <div class="col-md-6 mb-2">
                        <label class="small text-muted d-flex justify-content-between">
                          <span>Y Position (Top): <strong>{{ editingConfig[activeVarKey].y }}%</strong></span>
                        </label>
                        <input v-model.number="editingConfig[activeVarKey].y" type="range" class="form-control-range" min="0" max="100" step="0.5" />
                      </div>

                      <div class="col-md-6 mb-2">
                        <label class="small text-muted d-flex justify-content-between">
                          <span>Width: <strong>{{ editingConfig[activeVarKey].width }}%</strong></span>
                        </label>
                        <input v-model.number="editingConfig[activeVarKey].width" type="range" class="form-control-range" min="5" max="100" step="1" />
                      </div>
                      <div class="col-md-6 mb-2">
                        <label class="small text-muted d-flex justify-content-between">
                          <span>Height: <strong>{{ editingConfig[activeVarKey].height }}%</strong></span>
                        </label>
                        <input v-model.number="editingConfig[activeVarKey].height" type="range" class="form-control-range" min="2" max="30" step="0.5" />
                      </div>

                      <div class="col-md-4 mb-2">
                        <label class="small text-muted">Font Size (pt)</label>
                        <input v-model.number="editingConfig[activeVarKey].font_size" type="number" class="form-control form-control-sm" min="8" max="40" />
                      </div>
                      <div class="col-md-4 mb-2">
                        <label class="small text-muted">Font Color</label>
                        <input v-model="editingConfig[activeVarKey].color" type="color" class="form-control form-control-sm p-0" />
                      </div>
                      <div class="col-md-4 mb-2">
                        <label class="small text-muted">Align</label>
                        <select v-model="editingConfig[activeVarKey].align" class="form-control form-control-sm">
                          <option value="center">Center</option>
                          <option value="left">Left</option>
                          <option value="right">Right</option>
                        </select>
                      </div>

                      <div class="col-md-6 mb-2" v-if="activeVarKey === 'coupon_worth' || activeVarKey === 'min_purchase'">
                        <label class="small text-muted">Prefix (e.g. ₹ )</label>
                        <input v-model="editingConfig[activeVarKey].prefix" type="text" class="form-control form-control-sm" />
                      </div>
                      <div class="col-md-6 mb-2" v-if="activeVarKey === 'coupon_worth' || activeVarKey === 'min_purchase'">
                        <label class="small text-muted">Suffix (e.g. /-)</label>
                        <input v-model="editingConfig[activeVarKey].suffix" type="text" class="form-control form-control-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detail Modal: View Codes for Batch -->
      <b-modal v-model="showCodesModal" size="lg" :title="'Codes in Batch #' + selectedBatch.id + ' (' + selectedBatch.school_name + ')'" ok-only>
        <div class="table-responsive" style="max-height: 450px;">
          <table class="table table-sm table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Coupon Code</th>
                <th>Discount</th>
                <th>Min Order</th>
                <th>Status</th>
                <th>Redeemed By</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(code, i) in batchCodes" :key="code.id">
                <td>{{ i + 1 }}</td>
                <td class="font-weight-bold text-primary">{{ code.promo_code }}</td>
                <td>₹{{ code.discount }}</td>
                <td>₹{{ code.minimum_order_amount }}</td>
                <td>
                  <span v-if="code.is_used" class="badge badge-success">Redeemed</span>
                  <span v-else class="badge badge-secondary">Active</span>
                </td>
                <td class="small">
                  <div v-if="code.is_used">{{ code.user_name }} ({{ code.user_mobile }})</div>
                  <div v-else class="text-muted">-</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-modal>
    </div>

    <!-- ============================================================== -->
    <!-- DIRECT PRINT PREVIEW MODAL (A4 MULTI-PAGE SHEETS PREVIEW)       -->
    <!-- ============================================================== -->
    <b-modal
      v-model="showPrintPreviewModal"
      size="xl"
      hide-footer
      no-close-on-backdrop
      dialog-class="direct-print-modal-dialog"
    >
      <template #modal-title>
        <div class="d-flex align-items-center gap-2">
          <i class="fa fa-print text-primary"></i>
          <span>Direct Print Layout Preview: <strong>{{ printBatch.school_name }}</strong></span>
          <span class="badge badge-primary ml-2">{{ printCoupons.length }} Passes ({{ printSheets.length }} A4 Sheets)</span>
        </div>
      </template>

      <!-- Print Action Bar -->
      <div class="d-flex justify-content-between align-items-center mb-3 p-2 bg-light rounded border sticky-top shadow-sm no-print">
        <div class="d-flex align-items-center gap-2">
          <span class="small font-weight-bold text-dark">
            <i class="fa fa-file-text-o mr-1"></i> Format: 4 Cards per A4 Sheet (3" x 4")
          </span>
          <span class="badge badge-secondary">{{ printSheets.length }} Total Pages</span>
        </div>
        <div class="d-flex gap-2">
          <!-- PRINT DIRECTLY (Browser Native Print Dialog) -->
          <button
            class="btn btn-success font-weight-bold shadow-sm d-flex align-items-center gap-1"
            @click="triggerDirectPrint"
          >
            <i class="fa fa-print fa-lg"></i>
            <span>Print All {{ printSheets.length }} Sheet(s) (Direct Print)</span>
          </button>
          <!-- DOWNLOAD PDF -->
          <a
            :href="'/api/school_coupons/download_pdf/' + printBatch.id"
            target="_blank"
            class="btn btn-danger font-weight-bold"
          >
            <i class="fa fa-download mr-1"></i> Download PDF
          </a>
          <!-- CLOSE -->
          <button class="btn btn-outline-secondary" @click="showPrintPreviewModal = false">
            <i class="fa fa-times mr-1"></i> Close
          </button>
        </div>
      </div>

      <!-- Loading Indicator -->
      <div v-if="isLoadingPrintData" class="text-center py-5">
        <b-spinner variant="primary"></b-spinner>
        <div class="mt-2 font-weight-bold text-muted">Preparing Print Layout & Rendering Cards...</div>
      </div>

      <!-- A4 Sheets Container -->
      <div v-else id="print-sheets-container" class="print-viewport-bg">
        <div
          v-for="(sheet, sheetIndex) in printSheets"
          :key="'sheet_' + sheetIndex"
          class="a4-sheet-wrapper mb-4"
        >
          <!-- Sheet Page Header Indicator on Screen -->
          <div class="sheet-indicator text-center text-muted small font-weight-bold mb-1 no-print">
            <i class="fa fa-file-o mr-1"></i> A4 Sheet {{ sheetIndex + 1 }} of {{ printSheets.length }} (Passes #{{ sheetIndex * 4 + 1 }} to #{{ Math.min((sheetIndex + 1) * 4, printCoupons.length) }})
          </div>

          <!-- The Real A4 Sheet (2x2 Grid) -->
          <div class="printable-a4-sheet">
            <div
              v-for="(coupon, cardIdx) in sheet"
              :key="'c_' + coupon.id"
              class="print-card-item"
            >
              <!-- Card Background Template Image -->
              <img :src="printTemplate.image_url" class="print-card-bg" alt="Coupon Template" />

              <!-- Variable 1: School Name -->
              <div
                v-if="printConfig.school_name && printConfig.school_name.enabled"
                class="print-var-box"
                :style="getVarStyle(printConfig.school_name)"
              >
                {{ printBatch.school_name }}
              </div>

              <!-- Variable 2: Individual Card Unique Coupon Code -->
              <div
                v-if="printConfig.coupon_code && printConfig.coupon_code.enabled"
                class="print-var-box"
                :style="getVarStyle(printConfig.coupon_code)"
              >
                {{ formatCode(coupon.promo_code) }}
              </div>

              <!-- Variable 3: Coupon Worth / Discount -->
              <div
                v-if="printConfig.coupon_worth && printConfig.coupon_worth.enabled"
                class="print-var-box"
                :style="getVarStyle(printConfig.coupon_worth)"
              >
                {{ (printConfig.coupon_worth.prefix || '') + parseFloat(printBatch.discount) + (printConfig.coupon_worth.suffix || '') }}
              </div>

              <!-- Variable 4: Minimum Purchase Amount -->
              <div
                v-if="printConfig.min_purchase && printConfig.min_purchase.enabled"
                class="print-var-box"
                :style="getVarStyle(printConfig.min_purchase)"
              >
                {{ (printConfig.min_purchase.prefix || '') + parseFloat(printBatch.minimum_order_amount) + (printConfig.min_purchase.suffix || '') }}
              </div>

              <!-- Variable 5: Custom Variable / Expiry -->
              <div
                v-if="printConfig.custom_variable && printConfig.custom_variable.enabled"
                class="print-var-box"
                :style="getVarStyle(printConfig.custom_variable)"
              >
                {{ printBatch.custom_note || ('Valid till ' + printBatch.end_date) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </b-modal>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      visible: true,
      activeTab: "generate",
      isGenerating: false,
      isLoadingBatches: false,
      isSavingTemplate: false,

      // Templates list
      templates: [],
      selectedTemplateId: null,
      defaultConfig: {},

      // Generation Form
      form: {
        school_name: "",
        coupon_count: 100,
        prefix: "",
        discount: 45,
        min_order_amount: 520,
        custom_note: "",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date(Date.now() + 90 * 24 * 60 * 1000).toISOString().slice(0, 10),
      },

      // Batches list
      batches: [],
      totalBatches: 0,
      batchSearch: "",

      // Batch Inspector Modal
      showCodesModal: false,
      selectedBatch: {},
      batchCodes: [],

      // Template Editor State
      editingTemplate: {
        id: null,
        name: "",
        image_url: "",
        is_default: false,
      },
      editingTemplateFile: null,
      editingTemplatePreviewUrl: "",
      editingConfig: {},
      activeVarKey: "school_name",

      // Direct Print Layout Preview State
      showPrintPreviewModal: false,
      isLoadingPrintData: false,
      printBatch: {},
      printTemplate: {},
      printConfig: {},
      printCoupons: [],
    };
  },
  computed: {
    activeTemplate() {
      if (!this.templates.length) return {};
      const found = this.templates.find((t) => t.id === this.selectedTemplateId);
      return found || this.templates[0] || {};
    },
    currentConfig() {
      if (this.activeTemplate && this.activeTemplate.parsed_config) {
        return this.activeTemplate.parsed_config;
      }
      return this.defaultConfig || {};
    },
    sampleCodeFormatted() {
      const p = (this.form.prefix || "").toUpperCase();
      const needed = Math.max(2, 6 - p.length);
      const randomPart = "X7K9P2".slice(0, needed);
      return (p + randomPart).split("").join(" ");
    },
    defaultCustomNote() {
      if (this.form.end_date) {
        return "Valid till " + this.form.end_date;
      }
      return "Shop More... Save More...";
    },
    defaultCustomNotePlaceholder() {
      return "e.g. Valid till " + this.form.end_date;
    },
    // Chunks all coupons into sheets of 4 cards each
    printSheets() {
      const sheets = [];
      const list = this.printCoupons || [];
      for (let i = 0; i < list.length; i += 4) {
        sheets.push(list.slice(i, i + 4));
      }
      return sheets;
    },
  },
  created() {
    this.loadTemplates().then(() => {
      this.loadBatches();
    });
  },
  methods: {
    formatCode(code) {
      if (!code) return "";
      return code.split("").join(" ");
    },

    // -------------------------------------------------------------
    // DIRECT PRINT PREVIEW
    // -------------------------------------------------------------
    openPrintPreview(batch) {
      this.printBatch = batch;
      this.isLoadingPrintData = true;
      this.showPrintPreviewModal = true;

      axios
        .get(this.$apiUrl + "/school_coupons/print_data/" + batch.id)
        .then((res) => {
          this.isLoadingPrintData = false;
          if (res.data.status && res.data.data) {
            this.printBatch = res.data.data.batch;
            this.printTemplate = res.data.data.template || {};
            this.printConfig = res.data.data.config || {};
            this.printCoupons = res.data.data.coupons || [];
          } else {
            this.$swal.fire("Error", "Could not load print data", "error");
          }
        })
        .catch((err) => {
          this.isLoadingPrintData = false;
          this.$swal.fire("Error", err.message || "Failed to load print preview", "error");
        });
    },

    triggerDirectPrint() {
      // Trigger native browser print dialog for the current print preview
      window.print();
    },

    // -------------------------------------------------------------
    // TEMPLATE MANAGEMENT
    // -------------------------------------------------------------
    loadTemplates() {
      return axios
        .get(this.$apiUrl + "/school_coupons/templates")
        .then((res) => {
          if (res.data.status && res.data.data) {
            this.templates = res.data.data.templates || [];
            this.defaultConfig = res.data.data.default_config || {};

            // Set selected template
            if (!this.selectedTemplateId && this.templates.length) {
              const def = this.templates.find((t) => t.is_default) || this.templates[0];
              this.selectedTemplateId = def.id;
              this.selectTemplateForEdit(def);
            }
          }
        })
        .catch((err) => {
          console.error("Error loading coupon templates:", err);
        });
    },
    onTemplateChange() {
      const t = this.templates.find((x) => x.id === this.selectedTemplateId);
      if (t) {
        this.selectTemplateForEdit(t);
      }
    },
    selectTemplateForEdit(t) {
      this.editingTemplate = {
        id: t.id,
        name: t.name,
        image_url: t.image_url,
        is_default: !!t.is_default,
      };
      this.editingTemplateFile = null;
      this.editingTemplatePreviewUrl = t.image_url;
      this.editingConfig = JSON.parse(JSON.stringify(t.parsed_config || this.defaultConfig));
    },
    initNewTemplate() {
      this.editingTemplate = {
        id: null,
        name: "New Blank Coupon Template",
        image_url: this.templates.length ? this.templates[0].image_url : "",
        is_default: false,
      };
      this.editingTemplateFile = null;
      this.editingTemplatePreviewUrl = this.editingTemplate.image_url;
      this.editingConfig = JSON.parse(JSON.stringify(this.defaultConfig));
      this.activeVarKey = "school_name";
    },
    onTemplateImageUpload(e) {
      const file = e.target.files[0];
      if (file) {
        this.editingTemplateFile = file;
        this.editingTemplatePreviewUrl = URL.createObjectURL(file);
      }
    },
    saveTemplate() {
      if (!this.editingTemplate.name) {
        this.$swal.fire("Error", "Please enter a template name.", "error");
        return;
      }

      this.isSavingTemplate = true;
      const formData = new FormData();
      if (this.editingTemplate.id) {
        formData.append("id", this.editingTemplate.id);
      }
      formData.append("name", this.editingTemplate.name);
      formData.append("is_default", this.editingTemplate.is_default ? 1 : 0);
      formData.append("variables_config", JSON.stringify(this.editingConfig));

      if (this.editingTemplateFile) {
        formData.append("image", this.editingTemplateFile);
      }

      axios
        .post(this.$apiUrl + "/school_coupons/templates/save", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          this.isSavingTemplate = false;
          if (res.data.status) {
            this.$swal.fire("Saved", "Template and variable coordinates saved successfully!", "success");
            this.loadTemplates();
          } else {
            this.$swal.fire("Error", res.data.message || "Failed to save template", "error");
          }
        })
        .catch((err) => {
          this.isSavingTemplate = false;
          this.$swal.fire("Error", err.message || "Failed to save template", "error");
        });
    },
    deleteTemplate(t) {
      this.$swal
        .fire({
          title: "Delete Template?",
          text: `Are you sure you want to delete "${t.name}"?`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          confirmButtonText: "Yes, delete",
        })
        .then((result) => {
          if (result.value) {
            axios
              .post(this.$apiUrl + "/school_coupons/templates/delete", { id: t.id })
              .then((res) => {
                if (res.data.status) {
                  this.$swal.fire("Deleted", res.data.message, "success");
                  this.loadTemplates();
                } else {
                  this.$swal.fire("Error", res.data.message, "error");
                }
              });
          }
        });
    },

    // -------------------------------------------------------------
    // VARIABLE STYLE HELPER (Translates percentage coordinates to CSS)
    // -------------------------------------------------------------
    getVarStyle(conf) {
      if (!conf) return {};
      return {
        position: "absolute",
        left: conf.x + "%",
        top: conf.y + "%",
        width: conf.width + "%",
        height: conf.height + "%",
        lineHeight: "1.2",
        display: "flex",
        alignItems: "center",
        justifyContent:
          conf.align === "left" ? "flex-start" : conf.align === "right" ? "flex-end" : "center",
        textAlign: conf.align || "center",
        fontSize: (conf.font_size || 12) + "px",
        color: conf.color || "#0B4F94",
        fontWeight: conf.font_weight || "bold",
        backgroundColor: conf.bg_color || "transparent",
        letterSpacing: conf.letter_spacing ? conf.letter_spacing + "px" : "normal",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        zIndex: 5,
      };
    },

    // -------------------------------------------------------------
    // GENERATE BATCH
    // -------------------------------------------------------------
    generateCoupons() {
      this.isGenerating = true;
      const payload = {
        school_name: this.form.school_name,
        coupon_template_id: this.selectedTemplateId,
        total_coupons: this.form.coupon_count,
        discount: this.form.discount,
        minimum_order_amount: this.form.min_order_amount,
        start_date: this.form.start_date,
        end_date: this.form.end_date,
        code_prefix: this.form.prefix,
        custom_note: this.form.custom_note,
      };

      axios
        .post(this.$apiUrl + "/school_coupons/generate", payload)
        .then((res) => {
          this.isGenerating = false;
          if (res.data.status) {
            const data = res.data.data;
            this.$swal.fire({
              title: "Success!",
              text: `${this.form.coupon_count} unique coupons generated for ${this.form.school_name}!`,
              icon: "success",
              showCancelButton: true,
              confirmButtonText: "🖨️ Direct Print Preview",
              cancelButtonText: "View Batches",
              confirmButtonColor: "#0B4F94",
            }).then((choice) => {
              if (choice.value) {
                this.openPrintPreview(data.batch);
              }
              this.activeTab = "batches";
              this.loadBatches();
            });
          } else {
            this.$swal.fire("Error", res.data.message || "Failed to generate coupons", "error");
          }
        })
        .catch((err) => {
          this.isGenerating = false;
          this.$swal.fire("Error", err.message || "Generation failed", "error");
        });
    },

    // -------------------------------------------------------------
    // BATCH LIST & CODE INSPECTOR
    // -------------------------------------------------------------
    loadBatches() {
      this.isLoadingBatches = true;
      axios
        .get(this.$apiUrl + "/school_coupons?search=" + (this.batchSearch || ""))
        .then((res) => {
          this.isLoadingBatches = false;
          if (res.data.status && res.data.data) {
            this.batches = res.data.data.batches || [];
            this.totalBatches = res.data.data.total || this.batches.length;
          }
        })
        .catch(() => {
          this.isLoadingBatches = false;
        });
    },
    viewBatchCodes(batch) {
      this.selectedBatch = batch;
      axios.get(this.$apiUrl + "/school_coupons/codes/" + batch.id).then((res) => {
        if (res.data.status && res.data.data) {
          this.batchCodes = res.data.data.codes || [];
          this.showCodesModal = true;
        }
      });
    },
    deleteBatch(batch) {
      this.$swal
        .fire({
          title: "Delete Batch?",
          text: `Delete batch for "${batch.school_name}"? This cannot be undone.`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          confirmButtonText: "Yes, delete",
        })
        .then((result) => {
          if (result.value) {
            axios.post(this.$apiUrl + "/school_coupons/delete", { id: batch.id }).then((res) => {
              if (res.data.status) {
                this.$swal.fire("Deleted", res.data.message, "success");
                this.loadBatches();
              } else {
                this.$swal.fire("Error", res.data.message, "error");
              }
            });
          }
        });
    },
  },
};
</script>

<style scoped>
.school-coupons-wrapper {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.preview-card-viewport {
  width: 100%;
  max-width: 480px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #e0e0e0;
}

.preview-card-box {
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 Aspect Ratio (1024 x 768) */
  background: #ffffff;
  overflow: hidden;
}

.preview-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}

.var-box {
  user-select: none;
  box-sizing: border-box;
}

.active-var {
  border: 1px dashed rgba(11, 79, 148, 0.6);
  background-color: rgba(255, 255, 255, 0.6);
}

.nav-pills .nav-link {
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  color: #495057;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
}

.nav-pills .nav-link.active {
  background: linear-gradient(135deg, #0B4F94 0%, #1565C0 100%);
  color: #ffffff;
  border-color: #0B4F94;
}

/* ============================================================== */
/* PRINT VIEWPORT & REAL A4 SHEETS (SCREEN & PRINT STYLING)        */
/* ============================================================== */
.print-viewport-bg {
  background-color: #525659;
  padding: 25px 10px;
  border-radius: 8px;
  max-height: 75vh;
  overflow-y: auto;
}

.printable-a4-sheet {
  width: 210mm;
  height: 297mm;
  background: #ffffff;
  margin: 0 auto;
  padding: 8mm;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(2, 94mm);
  grid-template-rows: repeat(2, 70.5mm);
  column-gap: 6mm;
  row-gap: 8mm;
  align-content: start;
}

.print-card-item {
  position: relative;
  width: 94mm;
  height: 70.5mm;
  border: 1px dashed #b0c4de;
  overflow: hidden;
  box-sizing: border-box;
  background: #ffffff;
}

.print-card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}

.print-var-box {
  user-select: none;
  box-sizing: border-box;
}

/* ============================================================== */
/* NATIVE BROWSER PRINT (@MEDIA PRINT)                            */
/* ============================================================== */
@media print {
  body * {
    visibility: hidden;
  }

  #print-sheets-container,
  #print-sheets-container * {
    visibility: visible;
  }

  #print-sheets-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100% !important;
    background: transparent !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: visible !important;
    max-height: none !important;
  }

  .a4-sheet-wrapper {
    margin: 0 !important;
    padding: 0 !important;
    page-break-after: always !important;
    break-after: page !important;
  }

  .printable-a4-sheet {
    width: 210mm !important;
    height: 297mm !important;
    margin: 0 auto !important;
    padding: 8mm !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    box-sizing: border-box !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .print-card-item {
    border: 1px dashed #999999 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .no-print {
    display: none !important;
  }

  @page {
    size: A4 portrait;
    margin: 0;
  }
}
</style>
