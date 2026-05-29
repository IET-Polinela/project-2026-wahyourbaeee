// ============================================================
// router.js - Hash-Based Routing SPA
// ============================================================

// Definisi semua route beserta konten HTML-nya
const routes = {

    // ---- Halaman Login ----
    '#login': `
        <div class="row justify-content-center mt-5">
            <div class="col-md-4">
                <div class="card shadow-sm border-0 p-4">
                    <div class="text-center mb-4">
                        <i class="bi bi-shield-lock-fill text-primary" style="font-size: 2.5rem;"></i>
                        <h4 class="fw-bold mb-0 mt-2">Login Warga</h4>
                        <p class="text-muted small">Smart City Portal</p>
                    </div>
                    <div id="loginForm">
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Username</label>
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-person-fill"></i>
                                </span>
                                <input type="text" id="loginUsername"
                                    class="form-control"
                                    placeholder="Masukkan username"
                                    required>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label fw-semibold">Password</label>
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-lock-fill"></i>
                                </span>
                                <input type="password" id="loginPassword"
                                    class="form-control"
                                    placeholder="Masukkan password"
                                    required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 fw-bold">
                            <i class="bi bi-box-arrow-in-right me-1"></i>Masuk
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,

    // ---- Halaman Dashboard (3-kolom responsive) ----
    '#dashboard': `
        <div class="row g-4">

            <!-- Kolom Kiri (25%) - Sidebar Aksi -->
            <aside class="col-12 col-lg-3">
                <div class="card border-0 p-3 shadow-sm sticky-top" style="top: 20px;">
                    <h6 class="fw-bold mb-3">
                        <i class="bi bi-grid-fill me-2 text-primary"></i>Menu
                    </h6>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary btn-sm text-start">
                            <i class="bi bi-plus-circle-fill me-2"></i>Laporan Baru
                        </button>
                        <button class="btn btn-outline-secondary btn-sm text-start">
                            <i class="bi bi-list-ul me-2"></i>Riwayat Laporan
                        </button>
                        <button class="btn btn-outline-secondary btn-sm text-start">
                            <i class="bi bi-person-fill me-2"></i>Profil Saya
                        </button>
                    </div>
                </div>
            </aside>

            <!-- Kolom Tengah (50%) - Konten Utama -->
            <section class="col-12 col-lg-6">
                <div class="card border-0 p-4 shadow-sm text-center">
                    <i class="bi bi-inbox fs-1 text-muted"></i>
                    <h5 class="mt-3">Selamat Datang!</h5>
                    <p class="text-muted small">
                        Koneksi API untuk data laporan akan diimplementasikan pada Lab 12.
                    </p>
                    <div class="alert alert-success d-flex align-items-center gap-2 text-start mt-2">
                        <i class="bi bi-check-circle-fill"></i>
                        <span>Login berhasil. Token JWT tersimpan di localStorage.</span>
                    </div>
                </div>
            </section>

            <!-- Kolom Kanan (25%) - Info & Pengumuman -->
            <aside class="col-12 col-lg-3">
                <div class="card border-0 p-3 shadow-sm sticky-top" style="top: 20px;">
                    <h6 class="fw-bold mb-3">
                        <i class="bi bi-info-circle-fill me-2 text-info"></i>Pengumuman
                    </h6>
                    <div class="d-flex flex-column gap-2">
                        <div class="p-2 bg-light rounded small">
                            <i class="bi bi-megaphone-fill text-warning me-1"></i>
                            Sistem pemeliharaan setiap Minggu 00.00 - 02.00 WIB
                        </div>
                        <div class="p-2 bg-light rounded small">
                            <i class="bi bi-bell-fill text-primary me-1"></i>
                            Lab 12 akan mengimplementasikan CRUD Laporan
                        </div>
                    </div>
                </div>
            </aside>

        </div>
    `,

    // ---- Halaman 404 ----
    '#404': `
        <div class="text-center mt-5">
            <i class="bi bi-exclamation-triangle-fill text-warning" style="font-size: 4rem;"></i>
            <h3 class="mt-3">Halaman Tidak Ditemukan</h3>
            <a href="#login" class="btn btn-primary mt-2">Kembali ke Login</a>
        </div>
    `,
};

// ============================================================
// Fungsi utama: handle perpindahan halaman berdasarkan hash
// ============================================================
function handleRouting() {
    const hash = window.location.hash || '#login';

    // Guard: redirect ke login jika belum login dan akses dashboard
    if (hash === '#dashboard' && !isLoggedIn()) {
        window.location.hash = '#login';
        return;
    }

    // Render konten sesuai route, fallback ke 404
    const content = routes[hash] || routes['#404'];
    document.getElementById('app-content').innerHTML = content;

    // Update navbar setiap pindah halaman
    renderNavbar();

    // Inisialisasi form login jika hash = #login
    if (hash === '#login' && typeof setupLoginForm === 'function') {
        setupLoginForm();
    }
}

// ============================================================
// Event Listeners
// ============================================================
window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', function () {
    initApp();       // Inisialisasi app (navbar, dll)
    handleRouting(); // Render halaman pertama
});