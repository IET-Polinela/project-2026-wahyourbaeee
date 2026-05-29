// ============================================================
// app.js - Logika & Render Konten Tiap Halaman
// ============================================================

/**
 * renderNavbar - Update bagian kanan navbar sesuai status login
 */
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

/**
 * initApp - Inisialisasi pertama saat halaman dimuat
 */
function initApp() {
    renderNavbar();
}