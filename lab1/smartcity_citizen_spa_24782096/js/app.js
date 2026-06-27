// ============================================================
// app.js - Logika & Render Konten Tiap Halaman
// ============================================================

// Variable global untuk mode edit
let editingReportId = null;
let currentTab = 'my_reports';
let currentPage = 1;

// ============================================================
// renderNavbar
// ============================================================
function renderNavbar() {
    const navMenus = document.getElementById('nav-menus');
    if (!navMenus) return;

    if (isLoggedIn()) {
        const username = localStorage.getItem('username') || 'Warga';
        const initial  = username.charAt(0).toUpperCase();

        navMenus.innerHTML = `
            <div class="user-chip">
                <div class="user-avatar">${initial}</div>
                ${username}
            </div>
            <button class="btn btn-sm btn-outline-secondary" onclick="logout()">
                <i class="bi bi-box-arrow-right me-1"></i>Keluar
            </button>
        `;
    } else {
        navMenus.innerHTML = `
            <a href="#login" class="btn btn-sm btn-primary">
                <i class="bi bi-lightning-charge me-1"></i>Masuk
            </a>
        `;
    }
}

// ============================================================
// loadDashboardData - Ambil data dari API lalu render
// ============================================================
async function loadDashboardData(tab = currentTab, page = currentPage) {
    currentTab = tab;
    currentPage = page;

    const response = await requestAPI(`/api/report/?tab=${tab}&page=${page}`, 'GET');

    if (response && response.status === 200) {
        const data = await response.json();

        // Ekstraksi data paginasi
        const reports     = data.results ?? [];
        const totalCount  = data.count ?? 0;
        const totalPages  = Math.ceil(totalCount / 10);

        // Update UI
        renderList(reports, tab);
        renderPagination(totalPages);
        loadSummaryStats();

    } else {
        const listContainer = document.getElementById('listContainer');
        if (listContainer) {
            listContainer.innerHTML = `
                <div class="col-12 text-center text-muted p-5">
                    <i class="bi bi-exclamation-triangle fs-1"></i>
                    <p>Gagal memuat data laporan.</p>
                </div>
            `;
        }
        const paginationContainer = document.getElementById('paginationContainer');
        if (paginationContainer) paginationContainer.innerHTML = '';
    }
}

// ============================================================
// renderList - Render kartu laporan
// ============================================================
function renderList(reports, tab) {
    const listContainer = document.getElementById('listContainer');
    if (!listContainer) return;

    if (reports.length === 0) {
        listContainer.innerHTML = `
            <div class="col-12 text-center text-muted p-5">
                <i class="bi bi-inbox fs-1"></i>
                <p class="mt-2">Belum ada laporan.</p>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = reports.map(report => {
        const statusConfig = getStatusConfig(report.status);
        const isOwner = report.is_owner;

        // Tombol edit hanya muncul kalau owner DAN status DRAFT
        const editBtn = (isOwner && report.status === 'DRAFT') ? `
            <button class="btn btn-sm btn-outline-warning" onclick="editDraft(${report.id})">
                <i class="bi bi-pencil me-1"></i>Edit
            </button>
        ` : '';

        return `
        <div class="col-12">
            <div class="card border-0 shadow-sm rounded-4 p-3">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <div>
                        <span class="badge rounded-pill" style="background:${statusConfig.color}">${statusConfig.label}</span>
                        <span class="badge bg-light text-muted border ms-1">${report.category}</span>
                    </div>
                    <small class="text-muted">${new Date(report.updated_at).toLocaleDateString('id-ID')}</small>
                </div>

                <h6 class="fw-bold mb-1">${report.title}</h6>
                <p class="text-muted small mb-2">${report.description}</p>
                <p class="text-muted small mb-2">
                    <i class="bi bi-geo-alt me-1"></i>${report.location}
                </p>
                <p class="text-muted small mb-2">
                    <i class="bi bi-person me-1"></i>${report.reporter}
                </p>

                <!-- Progress Bar -->
                <div class="mb-2">
                    <div class="progress" style="height:6px;">
                        <div class="progress-bar" role="progressbar"
                            style="width:${statusConfig.progress}%; background:${statusConfig.color};"
                            aria-valuenow="${statusConfig.progress}" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    <small class="text-muted">${statusConfig.label} · ${statusConfig.progress}%</small>
                </div>

                <div class="d-flex gap-2 mt-1">
                    ${editBtn}
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// ============================================================
// getStatusConfig - Warna & progress tiap status
// ============================================================
function getStatusConfig(status) {
    const map = {
        'DRAFT':       { label: 'Draft',       color: '#94a3b8', progress: 10  },
        'REPORTED':    { label: 'Dilaporkan',   color: '#3b82f6', progress: 30  },
        'VERIFIED':    { label: 'Diverifikasi', color: '#f59e0b', progress: 50  },
        'IN_PROGRESS': { label: 'Diproses',     color: '#8b5cf6', progress: 75  },
        'RESOLVED':    { label: 'Selesai',      color: '#10b981', progress: 100 },
    };
    return map[status] || { label: status, color: '#94a3b8', progress: 0 };
}

// ============================================================
// renderPagination - Tombol halaman
// ============================================================
function renderPagination(totalPages) {
    const container = document.getElementById('paginationContainer');
    if (!container) return;

    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let html = '<nav><ul class="pagination pagination-sm justify-content-center mb-0">';

    // Tombol Prev
    html += `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
        <button class="page-link" onclick="loadDashboardData('${currentTab}', ${currentPage - 1})">
            <i class="bi bi-chevron-left"></i>
        </button>
    </li>`;

    // Nomor halaman
    for (let i = 1; i <= totalPages; i++) {
        html += `<li class="page-item ${i === currentPage ? 'active' : ''}">
            <button class="page-link" onclick="loadDashboardData('${currentTab}', ${i})">${i}</button>
        </li>`;
    }

    // Tombol Next
    html += `<li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
        <button class="page-link" onclick="loadDashboardData('${currentTab}', ${currentPage + 1})">
            <i class="bi bi-chevron-right"></i>
        </button>
    </li>`;

    html += '</ul></nav>';
    container.innerHTML = html;
}

// ============================================================
// loadSummaryStats - Rekap status di sidebar
// ============================================================
async function loadSummaryStats() {
    const response = await requestAPI('/api/report/?tab=my_reports&page_size=1000', 'GET');
    if (!response || response.status !== 200) return;

    const data = await response.json();
    const all  = data.results ?? [];

    const draft     = all.filter(r => r.status === 'DRAFT').length;
    const diproses  = all.filter(r => ['REPORTED','VERIFIED','IN_PROGRESS'].includes(r.status)).length;
    const selesai   = all.filter(r => r.status === 'RESOLVED').length;

    const elDraft    = document.getElementById('statDraft');
    const elDiproses = document.getElementById('statDiproses');
    const elSelesai  = document.getElementById('statSelesai');

    if (elDraft)    elDraft.textContent    = draft;
    if (elDiproses) elDiproses.textContent = diproses;
    if (elSelesai)  elSelesai.textContent  = selesai;
}

// ============================================================
// editDraft - Isi form modal dengan data lama
// ============================================================
async function editDraft(id) {
    const response = await requestAPI(`/api/report/${id}/`, 'GET');
    if (!response || response.status !== 200) {
        showToast('Gagal mengambil data laporan.', 'danger');
        return;
    }

    const report = await response.json();

    // Isi form modal dengan data lama
    document.getElementById('inputTitle').value       = report.title;
    document.getElementById('inputCategory').value    = report.category;
    document.getElementById('inputDescription').value = report.description;
    document.getElementById('inputLocation').value    = report.location;

    // Set mode edit
    editingReportId = id;

    // Ubah judul modal
    document.getElementById('reportModalLabel').innerHTML =
        '<i class="bi bi-pencil-square me-2"></i>Edit Draft Laporan';

    // Tampilkan modal
    const modal = new bootstrap.Modal(document.getElementById('reportModal'));
    modal.show();
}

// ============================================================
// setupModalButtons - Setup tombol Simpan Draft & Ajukan
// ============================================================
function setupModalButtons() {
    const btnDraft  = document.getElementById('btnDraft');
    const btnSubmit = document.getElementById('btnSubmit');

    if (!btnDraft || !btnSubmit) return;

    btnDraft.onclick = () => submitReport('DRAFT');
    btnSubmit.onclick = () => submitReport('REPORTED');
}

async function submitReport(status) {
    const title       = document.getElementById('inputTitle')?.value.trim();
    const category    = document.getElementById('inputCategory')?.value;
    const description = document.getElementById('inputDescription')?.value.trim();
    const location    = document.getElementById('inputLocation')?.value.trim();

    if (!title || !category || !description || !location) {
        showToast('Semua field wajib diisi!', 'warning');
        return;
    }

    const bodyData = { title, category, description, location, status };
    const isEdit   = editingReportId !== null;
    const method   = isEdit ? 'PUT' : 'POST';
    const endpoint = isEdit ? `/api/report/${editingReportId}/` : '/api/report/';

    const response = await requestAPI(endpoint, method, bodyData);

    if (response && (response.status === 201 || response.status === 200)) {
        // Tutup modal
        bootstrap.Modal.getInstance(document.getElementById('reportModal'))?.hide();

        // Reset form & state
        document.getElementById('reportForm').reset();
        editingReportId = null;
        document.getElementById('reportModalLabel').innerHTML =
            '<i class="bi bi-pencil-square me-2"></i>Buat Laporan Baru';

        showToast(isEdit ? 'Laporan berhasil diperbarui!' : 'Laporan berhasil dibuat!', 'success');

        // Refresh data tanpa reload
        loadDashboardData(currentTab, currentPage);

    } else {
        const errData = await response.json();
        showToast('Gagal menyimpan: ' + JSON.stringify(errData), 'danger');
    }
}

// ============================================================
// initApp - Inisialisasi pertama saat halaman dimuat
// ============================================================
function initApp() {
    renderNavbar();
}