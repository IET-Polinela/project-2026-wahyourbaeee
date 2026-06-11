// ============================================================
// auth.js - Fungsi Autentikasi Login, Register & Logout
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
                username,
                password,
            });

            const data = await response.json();

            if (response.status === 200) {
                localStorage.setItem('access_token',  data.access);
                localStorage.setItem('refresh_token', data.refresh);
                localStorage.setItem('username',      username);

                // Mulai idle timer setelah login berhasil
                resetIdleTimer();

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

// ── Register Form ──
function setupRegisterForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const username  = document.getElementById('regUsername').value.trim();
        const email     = document.getElementById('regEmail').value.trim();
        const password  = document.getElementById('regPassword').value;
        const password2 = document.getElementById('regPassword2').value;
        const btnSubmit = form.querySelector('button[type="submit"]');

        if (password !== password2) {
            showToast('Password dan konfirmasi tidak sama!', 'danger');
            return;
        }

        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `<span class="spinner-border spinner-border-sm me-1" style="width:.8rem;height:.8rem;border-width:2px;"></span>Mendaftarkan...`;

        try {
            const response = await requestAPI('/api/register/', 'POST', {
                username, email, password, password2,
            });

            const data = await response.json();

            if (response.status === 201) {
                showToast('Pendaftaran berhasil! Silakan login.', 'success');
                setTimeout(() => { window.location.hash = '#login'; }, 1500);
            } else {
                const msg = Object.values(data).flat().join(' ');
                showToast('Gagal daftar: ' + msg, 'danger');
            }

        } catch (error) {
            showToast('Kesalahan koneksi. Pastikan server backend berjalan.', 'warning');
            console.error('Register Error:', error);
        } finally {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = `<i class="bi bi-person-check me-1"></i>Daftar`;
        }
    });
}

// ── Logout ──
function logout() {
    clearTimeout(window._idleTimer);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    window.location.hash = '#login';
}

// ── Cek status login ──
function isLoggedIn() {
    return localStorage.getItem('access_token') !== null;
}