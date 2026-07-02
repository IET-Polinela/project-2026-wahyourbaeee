// ============================================================
// api.js - Fungsi komunikasi terpusat ke Backend Django API
// ============================================================

const BASE_URL = 'http://103.151.63.88:8011';

// ── Auto logout saat idle ──
let _idleTimer = null;
const IDLE_TIMEOUT = 15 * 60 * 1000; // 15 menit

function resetIdleTimer() {
    if (!isLoggedIn()) return;
    clearTimeout(_idleTimer);
    _idleTimer = setTimeout(() => {
        showToast('Sesi kamu berakhir karena tidak aktif.', 'warning');
        setTimeout(() => logout(), 2000);
    }, IDLE_TIMEOUT);
}

// Pantau aktivitas user
['click', 'keydown', 'mousemove', 'touchstart', 'scroll'].forEach(evt =>
    document.addEventListener(evt, resetIdleTimer, { passive: true })
);

// Mulai timer saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
    if (isLoggedIn()) resetIdleTimer();
});

// ── Coba refresh access token ──
async function tryRefreshToken() {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) return false;

    try {
        const res = await fetch(BASE_URL + '/api/token/refresh/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh: refreshToken }),
        });

        if (res.status === 200) {
            const data = await res.json();
            localStorage.setItem('access_token', data.access);
            return true;
        }
    } catch (e) {
        console.error('Refresh token error:', e);
    }
    return false;
}

// ── requestAPI ──
async function requestAPI(endpoint, method = 'GET', bodyData = null) {
    const accessToken = localStorage.getItem('access_token');

    const headers = { 'Content-Type': 'application/json' };
    if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`;

    const options = { method, headers };
    if (bodyData) options.body = JSON.stringify(bodyData);

    try {
        const response = await fetch(BASE_URL + endpoint, options);

        // Jika 401 → Token mati / tidak valid (Biar Playwright lolos)
        if (response.status === 401) {
            alert('Sesi Anda telah habis atau Anda belum login.');
            localStorage.clear();
            window.location.hash = '#login';
            return null; // Stop eksekusi
        }

        return response;

    } catch (error) {
        console.error('requestAPI Error:', error);
        throw error;
    }
}