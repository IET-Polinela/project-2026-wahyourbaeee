// ============================================================
// app.js - Logika & Render Konten Tiap Halaman
// ============================================================

/**
 * renderNavbar - Update navbar sesuai status login
 */
function renderNavbar() {
    const navMenus = document.getElementById('nav-menus');
    if (!navMenus) return;

    if (isLoggedIn()) {
        navMenus.innerHTML = `
            <ul class="navbar-nav flex-row gap-2 align-items-center">
                <li class="nav-item">
                    <a class="nav-link text-white" href="#dashboard">
                        <i class="bi bi-speedometer2 me-1"></i>Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <button class="btn btn-outline-light btn-sm" onclick="logout()">
                        <i class="bi bi-box-arrow-right me-1"></i>Logout
                    </button>
                </li>
            </ul>
        `;
    } else {
        navMenus.innerHTML = `
            <a href="#login" class="btn btn-outline-light btn-sm">
                <i class="bi bi-box-arrow-in-right me-1"></i>Login
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