// ============================================================
// auth.js - Fungsi Autentikasi Login & Logout
// ============================================================

function setupLoginForm() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const username  = document.getElementById('loginUsername').value.trim();
        const password  = document.getElementById('loginPassword').value;
        const btnSubmit = form.querySelector('button[type="submit"]');

        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `<span class="spinner-border spinner-border-sm me-1" style="width:.8rem;height:.8rem;border-width:2px;"></span>Memproses...`;

        try {
            const response = await requestAPI('/api/token/', 'POST', {
                username: username,
                password: password,
            });

            const data = await response.json();

            if (response.status === 200) {
                localStorage.setItem('access_token',  data.access);
                localStorage.setItem('refresh_token', data.refresh);
                localStorage.setItem('username',      username);

                showToast(`Selamat datang, ${username}!`, 'success');
                window.location.hash = '#dashboard';

            } else {
                const errorMsg = data.detail || 'Username atau password salah.';
                showToast('Login gagal: ' + errorMsg, 'danger');
            }

        } catch (error) {
            showToast('Kesalahan koneksi. Pastikan server backend berjalan.', 'warning');
            console.error('Login Error:', error);
        } finally {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = `<i class="bi bi-lightning-charge me-1"></i>Masuk`;
        }
    });
}

function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    window.location.hash = '#login';
}

function isLoggedIn() {
    return localStorage.getItem('access_token') !== null;
}