// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    // Folder tempat file spec berada
    testDir: './tests',

    // Timeout per test (30 detik)
    timeout: 30 * 1000,

    // Timeout untuk setiap assertion
    expect: {
        timeout: 10000,
    },

    // Jalankan test secara berurutan (bukan paralel) agar tidak konflik
    fullyParallel: false,
    workers: 1,

    // Ulangi otomatis jika gagal (0 = tidak diulang)
    retries: 0,

    // Format laporan
    reporter: [
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['list'],
    ],

    use: {
        // Screenshot otomatis saat test gagal
        screenshot: 'only-on-failure',

        // Video recording saat test gagal
        video: 'retain-on-failure',

        // Trace untuk debugging
        trace: 'retain-on-failure',

        // Headless mode (ubah ke false untuk melihat browser)
        headless: true,
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});