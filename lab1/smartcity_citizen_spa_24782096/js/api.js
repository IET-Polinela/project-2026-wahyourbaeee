// ============================================================
// api.js - Fungsi komunikasi terpusat ke Backend Django API
// ============================================================

const BASE_URL = 'http://103.151.63.88:8011';

/**
 * requestAPI - Wrapper fetch() dengan JWT otomatis
 * @param {string} endpoint  - Contoh: '/api/token/', '/api/laporan/'
 * @param {string} method    - 'GET', 'POST', 'PUT', 'DELETE'
 * @param {object} bodyData  - Data yang dikirim (opsional, untuk POST/PUT)
 * @returns {Promise<Response>}
 */
async function requestAPI(endpoint, method = 'GET', bodyData = null) {
    // Ambil access token dari localStorage (null jika belum login)
    const accessToken = localStorage.getItem('access_token');

    // Susun headers dasar
    const headers = {
        'Content-Type': 'application/json',
    };

    // Sisipkan token ke Authorization jika tersedia
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }

    // Susun opsi fetch
    const options = {
        method: method,
        headers: headers,
    };

    // Tambahkan body jika ada data (POST/PUT)
    if (bodyData) {
        options.body = JSON.stringify(bodyData);
    }

    try {
        const response = await fetch(BASE_URL + endpoint, options);
        return response;
    } catch (error) {
        console.error('requestAPI Error:', error);
        throw error;
    }
}