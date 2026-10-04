import sys

file_path = r'd:\koober\chanda-mama\resources\js\views\Category\ManageCategories.vue'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_html = '''            <div v-else-if="selectedCategoryTree" class="p-4 bg-light rounded" style="overflow-x: auto;">
                <div class="d-flex flex-column align-items-center text-center" style="min-width: max-content;">
                    <!-- Level 1 (Main Category) -->
                    <div class="org-node border border-2 border-primary p-3 bg-white shadow-sm" style="min-width: 300px; border-radius: 8px;">
                        <h4 class="mb-2 fw-bold text-uppercase text-dark" style="letter-spacing: 1px;">{{ selectedCategoryTree.name }}</h4>
                        <div class="badge bg-secondary mb-2 px-3 py-2">MAIN CATEGORY</div>
                        <div class="mt-1">
                            <span :class="['badge', selectedCategoryTree.status === 1 ? 'bg-success' : 'bg-danger']">
                                {{ selectedCategoryTree.status === 1 ? 'Active' : 'Inactive' }}
                            </span>
                        </div>
                    </div>

                    <!-- Level 2 (Sub Categories) -->
                    <div v-if="selectedCategoryTree.all_childs && selectedCategoryTree.all_childs.length > 0" class="d-flex flex-row justify-content-center mt-3 gap-4">
                        <div v-for="sub in selectedCategoryTree.all_childs" :key="sub.id" class="d-flex flex-column align-items-center">
                            <i class="fa fa-arrow-down text-muted mb-3 fs-5"></i>
                            
                            <div class="org-node border border-2 border-secondary p-3 bg-white shadow-sm" style="min-width: 220px; border-radius: 6px;">
                                <h6 class="fw-bold text-uppercase mb-2 text-dark" style="letter-spacing: 0.5px;">{{ sub.name }}</h6>
                                <div class="badge bg-secondary mb-2">SUB CATEGORY</div>
                                <div class="mt-1">
                                    <span :class="['badge', sub.status === 1 ? 'bg-success' : 'bg-danger']" style="font-size: 10px;">
                                        {{ sub.status === 1 ? 'Active' : 'Inactive' }}
                                    </span>
                                </div>
                            </div>
                            
                            <!-- Level 3 (Sub Sub Categories) -->
                            <div v-if="sub.all_childs && sub.all_childs.length > 0" class="d-flex flex-row justify-content-center mt-3 gap-3">
                                <div v-for="subSub in sub.all_childs" :key="subSub.id" class="d-flex flex-column align-items-center">
                                    <i class="fa fa-arrow-down text-muted mb-3"></i>
                                    
                                    <div class="org-node border border-1 border-secondary p-2 bg-white shadow-sm" style="min-width: 160px; border-radius: 4px;">
                                        <div class="fw-bold text-uppercase mb-2 text-dark" style="font-size: 13px;">{{ subSub.name }}</div>
                                        <div class="badge bg-secondary mb-1" style="font-size: 10px;">SUB SUB CATEGORY</div>
                                        <div class="mt-1">
                                            <span :class="['badge', subSub.status === 1 ? 'bg-success' : 'bg-danger']" style="font-size: 9px;">
                                                {{ subSub.status === 1 ? 'Active' : 'Inactive' }}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <!-- Level 4 (Sub Sub Sub Categories) -->
                                    <div v-if="subSub.all_childs && subSub.all_childs.length > 0" class="d-flex flex-row justify-content-center mt-3 gap-2">
                                        <div v-for="subSubSub in subSub.all_childs" :key="subSubSub.id" class="d-flex flex-column align-items-center">
                                            <i class="fa fa-arrow-down text-muted mb-3" style="font-size: 12px;"></i>
                                            
                                            <div class="org-node border border-1 border-light p-2 shadow-sm bg-white" style="min-width: 130px; border-radius: 4px;">
                                                <div class="fw-medium text-uppercase mb-1 text-dark" style="font-size: 11px;">{{ subSubSub.name }}</div>
                                                <div class="text-muted mb-1" style="font-size: 9px;">(SUB SUB SUB)</div>
                                                <div class="mt-1">
                                                    <span :class="['badge', subSubSub.status === 1 ? 'bg-success' : 'bg-danger']" style="font-size: 9px;">
                                                        {{ subSubSub.status === 1 ? 'Active' : 'Inactive' }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="text-muted mt-4">
                        <i class="fa fa-info-circle me-1"></i> No sub-categories available.
                    </div>
                </div>
            </div>\n'''

lines[146:213] = [new_html]

style_start_idx = -1
for i, line in enumerate(lines):
    if '<style scoped>' in line:
        style_start_idx = i
        break

if style_start_idx != -1:
    lines = lines[:style_start_idx]

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)
