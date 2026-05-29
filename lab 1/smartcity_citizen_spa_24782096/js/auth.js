// ============================================================
// auth.js - Fungsi Autentikasi Login & Logout
// ============================================================

/**
 * setupLoginForm - Menginisialisasi event listener pada form login
 * Dipanggil oleh router.js saat hash = '#login'
 */
function setupLoginForm() {
    const form = document.getElementById('loginForm');

    if (!form) return; // Keamanan: pastikan form ada di DOM

    form.addEventListener('submit', async function (event) {
        // WAJIB: Cegah reload halaman agar password tidak bocor ke URL
        event.preventDefault();

        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        const btnSubmit = form.querySelector('button[type="submit"]');

        // Nonaktifkan tombol saat proses loading
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>Memproses...';

        try {
            // Kirim request POST ke endpoint JWT Django
            const response = await requestAPI('/api/token/', 'POST', {
                username: username,
                password: password,
            });

            const data = await response.json();

            if (response.status === 200) {
                // Simpan token ke localStorage
                localStorage.setItem('access_token', data.access);
                localStorage.setItem('refresh_token', data.refresh);

                alert('Login berhasil! Selamat datang, ' + username);

                // Redirect ke dashboard
                window.location.hash = '#dashboard';

            } else {
                // Tampilkan pesan error dari server
                const errorMsg = data.detail || 'Username atau password salah.';
                alert('Login gagal: ' + errorMsg);
            }

        } catch (error) {
            alert('Terjadi kesalahan koneksi. Pastikan server backend berjalan.');
            console.error('Login Error:', error);
        } finally {
            // Aktifkan kembali tombol
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = '<i class="bi bi-box-arrow-in-right me-1"></i>Masuk';
        }
    });
}

/**
 * logout - Hapus token dari localStorage dan kembali ke login
 */
function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.hash = '#login';
}

/**
 * isLoggedIn - Cek apakah user sudah login
 * @returns {boolean}
 */
function isLoggedIn() {
    return localStorage.getItem('access_token') !== null;
}