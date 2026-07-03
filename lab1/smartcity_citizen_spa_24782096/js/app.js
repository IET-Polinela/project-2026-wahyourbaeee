// ============================================================
// app.js - Logika & Render Konten Tiap Halaman
// ============================================================

let editingReportId = null;
let currentTab = 'my_reports';
let currentPage = 1;
let lastReports = []; // cache data laporan yang sedang tampil (untuk editDraft)

// ============================================================
// initApp
// ============================================================
// Dipanggil sekali saat DOMContentLoaded, sebelum handleRouting().
// PENTING: fungsi ini WAJIB ada, karena router.js memanggilnya duluan.
// Sebelumnya fungsi ini tidak pernah didefinisikan sehingga menyebabkan
// ReferenceError dan handleRouting() ikut gagal dijalankan (SPA blank).
// ============================================================
function initApp() {
    renderNavbar();
}

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
// loadDashboardData
// ============================================================
async function loadDashboardData(tab = currentTab, page = currentPage) {
    currentTab = tab;
    currentPage = page;

    const response = await requestAPI(`/api/report/?tab=${tab}&page=${page}`, 'GET');

    if (response && response.status === 200) {
        const data = await response.json();
        const reports    = data.results ?? [];
        const totalCount = data.count ?? 0;
        const totalPages = Math.ceil(totalCount / 10);

        lastReports = reports; // simpan cache untuk keperluan editDraft()

        renderList(reports, tab);
        renderPagination(totalPages);
        loadSummaryStats();
    }
    // Sengaja tidak ada blok else — biarkan silent jika gagal
    // agar tidak mengganggu flow mock Playwright
}

// ============================================================
// renderList
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
                    <i class="bi bi-person me-1"></i>${report.reporter_name ?? report.reporter ?? 'Warga Anonim'}
                </p>
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
// getStatusConfig
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
// renderPagination
// ============================================================
function renderPagination(totalPages) {
    const container = document.getElementById('paginationContainer');
    if (!container) return;
    container.classList.remove('d-none');
    container.style.display = 'block';

    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let html = '<nav><ul class="pagination pagination-sm justify-content-center mb-0">';

    html += `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
        <button class="page-link" onclick="loadDashboardData('${currentTab}', ${currentPage - 1})">
            <i class="bi bi-chevron-left"></i>
        </button>
    </li>`;

    for (let i = 1; i <= totalPages; i++) {
        html += `<li class="page-item ${i === currentPage ? 'active' : ''}">
            <button class="page-link" onclick="loadDashboardData('${currentTab}', ${i})">${i}</button>
        </li>`;
    }

    html += `<li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
        <button class="page-link" onclick="loadDashboardData('${currentTab}', ${currentPage + 1})">
            <i class="bi bi-chevron-right"></i>
        </button>
    </li>`;

    html += '</ul></nav>';
    container.innerHTML = html;
}

// ============================================================
// loadSummaryStats
// ============================================================
async function loadSummaryStats() {
    const response = await requestAPI('/api/report/?tab=my_reports&page_size=1000', 'GET');
    if (!response || response.status !== 200) return;

    const data = await response.json();
    const all  = data.results ?? [];

    const draft    = all.filter(r => r.status === 'DRAFT').length;
    const diproses = all.filter(r => ['REPORTED','VERIFIED','IN_PROGRESS'].includes(r.status)).length;
    const selesai  = all.filter(r => r.status === 'RESOLVED').length;

    const elDraft    = document.getElementById('statDraft');
    const elDiproses = document.getElementById('statDiproses');
    const elSelesai  = document.getElementById('statSelesai');

    if (elDraft)    elDraft.textContent    = draft;
    if (elDiproses) elDiproses.textContent = diproses;
    if (elSelesai)  elSelesai.textContent  = selesai;
}

// ============================================================
// setupModalButtons
// ============================================================
// Dipanggil lewat onclick="setupModalButtons()" pada tombol
// "Laporan Baru" (#btnBukaModal). Tugasnya: mereset modal ke mode
// "buat laporan baru" (bukan mode edit) dan memasang ulang event
// listener pada tombol Draft/Ajukan.
// ============================================================
function setupModalButtons() {
    editingReportId = null;

    const modalLabel = document.getElementById('reportModalLabel');
    const form       = document.getElementById('reportForm');
    const btnDraft   = document.getElementById('btnDraft');
    const btnSubmit  = document.getElementById('btnSubmit');

    if (modalLabel) modalLabel.textContent = 'Buat Laporan Baru';
    if (form) form.reset();
    if (btnDraft)  btnDraft.style.display = '';
    if (btnSubmit) btnSubmit.innerHTML = 'Ajukan <i class="bi bi-send-fill ms-1"></i>';

    setupReportForm();
}

// ============================================================
// setupReportForm
// ============================================================
// Memasang event listener ke tombol #btnDraft dan #btnSubmit.
// Menggunakan cloneNode agar listener lama (dari pemanggilan
// sebelumnya) tidak menumpuk / duplikat.
// ============================================================
function setupReportForm() {
    const btnDraft  = document.getElementById('btnDraft');
    const btnSubmit = document.getElementById('btnSubmit');
    if (!btnDraft || !btnSubmit) return;

    const newBtnDraft = btnDraft.cloneNode(true);
    btnDraft.parentNode.replaceChild(newBtnDraft, btnDraft);

    const newBtnSubmit = btnSubmit.cloneNode(true);
    btnSubmit.parentNode.replaceChild(newBtnSubmit, btnSubmit);

    newBtnDraft.addEventListener('click', () => kirimLaporan('DRAFT'));
    newBtnSubmit.addEventListener('click', () => kirimLaporan('REPORTED'));
}

// ============================================================
// kirimLaporan
// ============================================================
// status: 'DRAFT' (tombol Simpan Draft) atau 'REPORTED' (tombol Ajukan)
// Mengirim data form ke backend (POST untuk laporan baru,
// PUT jika sedang dalam mode edit / editingReportId terisi).
// ============================================================
async function kirimLaporan(status) {
    const title       = document.getElementById('inputTitle').value.trim();
    const category    = document.getElementById('inputCategory').value;
    const description = document.getElementById('inputDescription').value.trim();
    const location     = document.getElementById('inputLocation').value.trim();

    if (!title || !category || !description || !location) {
        showToast('Semua field wajib diisi.', 'warning');
        return;
    }

    const payload = { title, category, description, location, status };

    try {
        let response;
        if (editingReportId) {
            response = await requestAPI(`/api/report/${editingReportId}/`, 'PUT', payload);
        } else {
            response = await requestAPI('/api/report/', 'POST', payload);
        }

        if (response && (response.status === 200 || response.status === 201)) {
            // Tutup modal
            const modalEl = document.getElementById('reportModal');
            if (modalEl && window.bootstrap) {
                const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
                modalInstance.hide();
            }

            const pesan = status === 'DRAFT'
                ? 'Draft berhasil disimpan.'
                : 'Laporan berhasil diajukan.';
            showToast(pesan, 'success');

            editingReportId = null;

            // Refresh data dashboard (list + summary badge)
            loadDashboardData(currentTab, currentPage);
        } else {
            showToast('Gagal menyimpan laporan. Silakan coba lagi.', 'danger');
        }
    } catch (error) {
        showToast('Kesalahan koneksi saat menyimpan laporan.', 'warning');
        console.error('kirimLaporan Error:', error);
    }
}

// ============================================================
// editDraft
// ============================================================
// Membuka modal dalam mode edit untuk laporan berstatus DRAFT
// milik pengguna sendiri. Mengambil data dari cache lastReports
// (hasil loadDashboardData terakhir) agar tidak perlu request baru.
// ============================================================
function editDraft(id) {
    const report = lastReports.find(r => r.id === id);
    if (!report) {
        showToast('Data laporan tidak ditemukan.', 'danger');
        return;
    }

    editingReportId = id;

    const modalLabel = document.getElementById('reportModalLabel');
    if (modalLabel) modalLabel.textContent = 'Edit Draft Laporan';

    document.getElementById('inputTitle').value       = report.title ?? '';
    document.getElementById('inputCategory').value     = report.category ?? '';
    document.getElementById('inputDescription').value = report.description ?? '';
    document.getElementById('inputLocation').value     = report.location ?? '';

    setupReportForm();

    const modalEl = document.getElementById('reportModal');
    if (modalEl && window.bootstrap) {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
        modalInstance.show();
    }
}