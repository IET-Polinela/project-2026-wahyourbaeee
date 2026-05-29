// ============================================================
// router.js - Hash-Based Routing SPA
// ============================================================

const routes = {

    // ---- Halaman Login ----
    '#login': `
        <div class="row justify-content-center mt-4">
            <div class="col-md-5 col-lg-4">
                <div class="card border-0 shadow-sm rounded-4 p-4">
                    <div class="text-center mb-4">
                        <div class="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-3"
                            style="width:52px;height:52px;background:linear-gradient(135deg,#1d4ed8,#06b6d4);box-shadow:0 4px 14px rgba(29,78,216,.3);">
                            <i class="bi bi-shield-lock-fill text-white fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-0">Login Warga</h5>
                        <p class="text-muted small mt-1">Smart City Portal · PIE 1416</p>
                    </div>

                    <form id="loginForm">
                        <div class="mb-3">
                            <label class="form-label fw-semibold small" for="loginUsername">Username</label>
                            <div class="input-group">
                                <span class="input-group-text bg-white">
                                    <i class="bi bi-person text-muted"></i>
                                </span>
                                <input type="text" id="loginUsername"
                                    class="form-control border-start-0"
                                    placeholder="Masukkan username" required>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label fw-semibold small" for="loginPassword">Password</label>
                            <div class="input-group">
                                <span class="input-group-text bg-white">
                                    <i class="bi bi-lock text-muted"></i>
                                </span>
                                <input type="password" id="loginPassword"
                                    class="form-control border-start-0"
                                    placeholder="Masukkan password" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">
                            <i class="bi bi-lightning-charge me-1"></i>Masuk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `,

    // ---- Halaman Dashboard (3-kolom responsive) ----
    '#dashboard': `
        <div class="row g-4">

            <!-- Kolom Kiri (25%) - Sidebar Aksi -->
            <aside class="col-12 col-lg-3">
                <div class="card border-0 shadow-sm rounded-4 p-3 sticky-top" style="top:80px;">
                    <h6 class="fw-bold mb-3 text-muted small text-uppercase ls-1">
                        <i class="bi bi-grid me-1"></i>Menu
                    </h6>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary btn-sm text-start rounded-3">
                            <i class="bi bi-plus-circle-fill me-2"></i>Laporan Baru
                        </button>
                        <button class="btn btn-light btn-sm text-start rounded-3 border">
                            <i class="bi bi-list-ul me-2 text-muted"></i>Riwayat Laporan
                        </button>
                        <button class="btn btn-light btn-sm text-start rounded-3 border">
                            <i class="bi bi-person me-2 text-muted"></i>Profil Saya
                        </button>
                        <hr class="my-1">
                        <button class="btn btn-light btn-sm text-start rounded-3 border text-danger" onclick="logout()">
                            <i class="bi bi-box-arrow-right me-2"></i>Keluar
                        </button>
                    </div>
                </div>
            </aside>

            <!-- Kolom Tengah (50%) - Konten Utama -->
            <section class="col-12 col-lg-6">
                <div class="card border-0 shadow-sm rounded-4 p-4 text-center">
                    <div class="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-3"
                        style="width:56px;height:56px;background:#f1f5f9;">
                        <i class="bi bi-inbox fs-3 text-muted"></i>
                    </div>
                    <h5 class="fw-bold">Selamat Datang!</h5>
                    <p class="text-muted small">
                        Koneksi API untuk data laporan akan diimplementasikan pada Lab 12.
                    </p>
                    <div class="alert alert-success d-flex align-items-center gap-2 text-start rounded-3 mt-2 mb-0">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span class="small">Login berhasil. Token JWT tersimpan di localStorage.</span>
                    </div>
                </div>
            </section>

            <!-- Kolom Kanan (25%) - Pengumuman -->
            <aside class="col-12 col-lg-3">
                <div class="card border-0 shadow-sm rounded-4 p-3 sticky-top" style="top:80px;">
                    <h6 class="fw-bold mb-3 text-muted small text-uppercase">
                        <i class="bi bi-megaphone me-1"></i>Pengumuman
                    </h6>
                    <div class="d-flex flex-column gap-2">
                        <div class="p-2 rounded-3 bg-light small">
                            <i class="bi bi-tools text-warning me-1"></i>
                            Pemeliharaan sistem setiap Minggu 00.00–02.00 WIB
                        </div>
                        <div class="p-2 rounded-3 bg-light small">
                            <i class="bi bi-bell-fill text-primary me-1"></i>
                            Lab 12: implementasi CRUD Laporan via API
                        </div>
                        <div class="p-2 rounded-3 bg-light small">
                            <i class="bi bi-info-circle text-info me-1"></i>
                            Gunakan token JWT untuk setiap request ke backend
                        </div>
                    </div>
                </div>
            </aside>

        </div>
    `,

    // ---- 404 ----
    '#404': `
        <div class="text-center mt-5">
            <i class="bi bi-exclamation-triangle-fill text-warning" style="font-size:4rem;"></i>
            <h3 class="mt-3 fw-bold">Halaman Tidak Ditemukan</h3>
            <p class="text-muted">Route yang kamu akses tidak tersedia.</p>
            <a href="#login" class="btn btn-primary mt-2">
                <i class="bi bi-arrow-left me-1"></i>Kembali ke Login
            </a>
        </div>
    `,
};

// ============================================================
// Handle routing
// ============================================================
function handleRouting() {
    const hash = window.location.hash || '#login';

    if (hash === '#dashboard' && !isLoggedIn()) {
        window.location.hash = '#login';
        return;
    }

    const content = routes[hash] || routes['#404'];
    document.getElementById('app-content').innerHTML = content;

    renderNavbar();

    if (hash === '#login' && typeof setupLoginForm === 'function') {
        setupLoginForm();
    }
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', function () {
    initApp();
    handleRouting();
});