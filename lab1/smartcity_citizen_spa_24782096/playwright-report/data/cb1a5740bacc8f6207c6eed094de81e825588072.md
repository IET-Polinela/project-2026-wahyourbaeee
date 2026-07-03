# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: citizen_portal.spec.js >> Modul 1: Otorisasi & Sesi (AUTH-04, AUTH-05, AUTH-06) >> AUTH-06: Kedua token kadaluarsa → localStorage dibersihkan, redirect ke #login
- Location: tests\citizen_portal.spec.js:512:5

# Error details

```
TimeoutError: page.waitForFunction: Timeout 10000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - img
    - img
    - img
    - img
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link " Smart City PORTAL" [ref=e4] [cursor=pointer]:
        - /url: "#"
        - generic [ref=e6]: 
        - text: Smart City
        - generic [ref=e7]: PORTAL
      - text: 
      - generic [ref=e8]:
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link " Beranda" [ref=e11] [cursor=pointer]:
              - /url: "#login"
              - generic [ref=e12]: 
              - text: Beranda
          - listitem [ref=e13]:
            - link " Dashboard" [ref=e14] [cursor=pointer]:
              - /url: "#dashboard"
              - generic [ref=e15]: 
              - text: Dashboard
        - generic [ref=e16]:
          - generic [ref=e17]:
            - generic [ref=e18]: T
            - text: testwarga
          - button " Keluar" [ref=e19] [cursor=pointer]:
            - generic [ref=e20]: 
            - text: Keluar
  - main [ref=e23]:
    - generic [ref=e24]:
      - complementary [ref=e25]:
        - generic [ref=e26]:
          - button " Laporan Baru" [ref=e28] [cursor=pointer]:
            - generic [ref=e29]: 
            - text: Laporan Baru
          - heading " Rekap Laporan Saya" [level=6] [ref=e30]:
            - generic [ref=e31]: 
            - text: Rekap Laporan Saya
          - generic [ref=e32]:
            - generic [ref=e33]:
              - generic [ref=e34]:
                - generic [ref=e35]: 
                - text: Draft
              - generic [ref=e36]: "0"
            - generic [ref=e37]:
              - generic [ref=e38]:
                - generic [ref=e39]: 
                - text: Diproses
              - generic [ref=e40]: "0"
            - generic [ref=e41]:
              - generic [ref=e42]:
                - generic [ref=e43]: 
                - text: Selesai
              - generic [ref=e44]: "0"
          - separator [ref=e45]
          - button " Keluar" [ref=e46] [cursor=pointer]:
            - generic [ref=e47]: 
            - text: Keluar
      - generic [ref=e48]:
        - list [ref=e49]:
          - listitem [ref=e50]:
            - button " Laporan Saya" [ref=e51] [cursor=pointer]:
              - generic [ref=e52]: 
              - text: Laporan Saya
          - listitem [ref=e53]:
            - button " Feed Kota" [ref=e54] [cursor=pointer]:
              - generic [ref=e55]: 
              - text: Feed Kota
        - generic [ref=e57]: Memuat data...
      - complementary [ref=e59]:
        - generic [ref=e60]:
          - heading " Pengumuman" [level=6] [ref=e61]:
            - generic [ref=e62]: 
            - text: Pengumuman
          - generic [ref=e63]:
            - generic [ref=e64]:
              - generic [ref=e65]: 
              - text: Pemeliharaan sistem setiap Minggu 00.00–02.00 WIB
            - generic [ref=e66]:
              - generic [ref=e67]: 
              - text: "Lab 12: implementasi CRUD Laporan via API"
            - generic [ref=e68]:
              - generic [ref=e69]: 
              - text: Gunakan token JWT untuk setiap request ke backend
  - contentinfo [ref=e70]:
    - generic [ref=e71]:
      - generic [ref=e72]: Smart City Portal · Sistem Manajemen Kota Terpadu
      - generic [ref=e74]: PIE 1416 · Teknologi Rekayasa Internet
  - text:  
```

# Test source

```ts
  463 | 
  464 |         // Tunggu hingga dashboard ter-render dan API call dilakukan
  465 |         // Saat dashboard dimuat, setupDashboardEvents() dan loadDashboardData()
  466 |         // akan dipanggil, yang akan memicu requestAPI() → mendapat 401 → redirect
  467 |         //
  468 |         await page.waitForTimeout(2000);
  469 | 
  470 |         // -------------------------------------------------------------------
  471 |         // LANGKAH 5: Verifikasi redirect ke #login setelah 401
  472 |         // -------------------------------------------------------------------
  473 |         await page.waitForFunction(
  474 |             () => window.location.hash === '#login',
  475 |             null,
  476 |             { timeout: 10000 }
  477 |         );
  478 | 
  479 |         await expect(page).toHaveURL(/#login/);
  480 | 
  481 |         // -------------------------------------------------------------------
  482 |         // LANGKAH 6: Verifikasi localStorage sudah dibersihkan oleh interceptor
  483 |         // -------------------------------------------------------------------
  484 |         // Kode api.js baris 30: localStorage.clear()
  485 |         const tokenAfter = await page.evaluate(() => localStorage.getItem('access_token'));
  486 |         const refreshAfter = await page.evaluate(() => localStorage.getItem('refresh_token'));
  487 | 
  488 |         // Token harus null setelah interceptor membersihkan localStorage
  489 |         expect(tokenAfter).toBeNull();
  490 |         expect(refreshAfter).toBeNull();
  491 | 
  492 |         console.log('[AUTH-05] ✅ Interceptor 401 berhasil: localStorage dibersihkan, redirect ke #login');
  493 |     });
  494 | 
  495 |     // =========================================================================
  496 |     // TEST CASE: AUTH-06
  497 |     // =========================================================================
  498 |     // JUDUL:
  499 |     //   Kedua Token Kadaluarsa: Access + Refresh expired → redirect ke #login
  500 |     //
  501 |     // SKENARIO:
  502 |     //   Kedua token (access dan refresh) sudah kadaluarsa. Pengguna mencoba
  503 |     //   mengakses #dashboard. SPA harus mendeteksi kegagalan autentikasi
  504 |     //   dan mengarahkan pengguna kembali ke halaman login.
  505 |     //
  506 |     // PERBEDAAN DENGAN AUTH-05:
  507 |     //   AUTH-05 fokus pada interceptor menangani respons 401.
  508 |     //   AUTH-06 fokus pada state akhir: localStorage HARUS bersih dan
  509 |     //   pengguna HARUS berada di halaman login.
  510 |     //
  511 |     // =========================================================================
  512 |     test('AUTH-06: Kedua token kadaluarsa → localStorage dibersihkan, redirect ke #login', async ({ page }) => {
  513 |         // -------------------------------------------------------------------
  514 |         // LANGKAH 1: Simpan kedua token yang sudah kadaluarsa ke localStorage
  515 |         // -------------------------------------------------------------------
  516 |         await setupAuthTokens(page, EXPIRED_ACCESS_TOKEN, EXPIRED_REFRESH_TOKEN);
  517 | 
  518 |         // Verifikasi awal: kedua token tersimpan
  519 |         const accessBefore = await page.evaluate(() => localStorage.getItem('access_token'));
  520 |         const refreshBefore = await page.evaluate(() => localStorage.getItem('refresh_token'));
  521 |         expect(accessBefore).not.toBeNull();
  522 |         expect(refreshBefore).not.toBeNull();
  523 | 
  524 |         // -------------------------------------------------------------------
  525 |         // LANGKAH 2: Mock API untuk menolak semua request dengan 401
  526 |         // -------------------------------------------------------------------
  527 |         // Karena kedua token expired, server pasti menolak. Kita mock
  528 |         // agar test tidak bergantung pada koneksi server yang sebenarnya.
  529 |         await page.unroute('http://103.151.63.71:8013/api/**');
  530 | 
  531 |         await page.route('**/api/**', async (route) => {
  532 |             await route.fulfill({
  533 |                 status: 401,
  534 |                 contentType: 'application/json',
  535 |                 body: JSON.stringify({
  536 |                     detail: 'Token is invalid or expired',
  537 |                     code: 'token_not_valid'
  538 |                 })
  539 |             });
  540 |         });
  541 | 
  542 |         // -------------------------------------------------------------------
  543 |         // LANGKAH 3: Handle dialog alert agar test tidak terganggu
  544 |         // -------------------------------------------------------------------
  545 |         page.on('dialog', async (dialog) => {
  546 |             console.log(`[AUTH-06] Dialog muncul: "${dialog.message()}"`);
  547 |             await dialog.accept();
  548 |         });
  549 | 
  550 |         // -------------------------------------------------------------------
  551 |         // LANGKAH 4: Coba akses dashboard
  552 |         // -------------------------------------------------------------------
  553 |         await page.goto(`${SPA_URL}#dashboard`);
  554 | 
  555 |         // Tunggu proses redirect terjadi
  556 |         await page.waitForTimeout(2000);
  557 | 
  558 |         // -------------------------------------------------------------------
  559 |         // LANGKAH 5: Verifikasi TIGA hal sekaligus (Triple Assertion)
  560 |         // -------------------------------------------------------------------
  561 | 
  562 |         // 5a. URL harus mengarah ke #login
> 563 |         await page.waitForFunction(
      |                    ^ TimeoutError: page.waitForFunction: Timeout 10000ms exceeded.
  564 |             () => window.location.hash === '#login',
  565 |             null,
  566 |             { timeout: 10000 }
  567 |         );
  568 |         await expect(page).toHaveURL(/#login/);
  569 | 
  570 |         // 5b. localStorage harus bersih (access_token harus null)
  571 |         const accessAfter = await page.evaluate(() => localStorage.getItem('access_token'));
  572 |         expect(accessAfter).toBeNull();
  573 | 
  574 |         // 5c. localStorage harus bersih (refresh_token harus null)
  575 |         const refreshAfter = await page.evaluate(() => localStorage.getItem('refresh_token'));
  576 |         expect(refreshAfter).toBeNull();
  577 | 
  578 |         // 5d. Verifikasi username juga ikut terhapus
  579 |         const usernameAfter = await page.evaluate(() => localStorage.getItem('username'));
  580 |         expect(usernameAfter).toBeNull();
  581 | 
  582 |         // 5e. Form login harus terlihat (verifikasi visual)
  583 |         await expect(page.locator('#loginForm')).toBeVisible({ timeout: 5000 });
  584 | 
  585 |         console.log('[AUTH-06] ✅ Kedua token expired: localStorage bersih, redirect ke #login berhasil');
  586 |     });
  587 | });
  588 | 
  589 | 
  590 | // #############################################################################
  591 | // #                                                                           #
  592 | // #   MODUL 5: INTERAKTIVITAS UI (UI-01 through UI-06)                        #
  593 | // #                                                                           #
  594 | // #   Modul ini menguji fitur-fitur interaktif pada antarmuka pengguna,        #
  595 | // #   termasuk Chart.js rendering, live search, pagination, modal dialog,     #
  596 | // #   form submission, dan responsive design.                                 #
  597 | // #                                                                           #
  598 | // #############################################################################
  599 | 
  600 | test.describe('Modul 5: Interaktivitas UI (UI-01 through UI-06)', () => {
  601 |     // =========================================================================
  602 |     // PENGANTAR MODUL
  603 |     // =========================================================================
  604 |     // Test UI memverifikasi bahwa elemen-elemen antarmuka berfungsi dengan baik
  605 |     // dari perspektif pengguna akhir. Ini mencakup:
  606 |     //
  607 |     // 1. Rendering visual (chart, tabel, modal)
  608 |     // 2. Interaksi pengguna (klik, ketik, scroll)
  609 |     // 3. Respons dinamis (AJAX, filtering, pagination)
  610 |     // 4. Responsive design (tampilan mobile vs desktop)
  611 |     // =========================================================================
  612 | 
  613 |     // =========================================================================
  614 |     // TEST CASE: UI-01
  615 |     // =========================================================================
  616 |     // JUDUL:
  617 |     //   Chart.js Rendering: Grafik statistik dashboard admin ter-render
  618 |     //
  619 |     // SKENARIO:
  620 |     //   Admin login ke portal admin, navigasi ke halaman /dashboard/,
  621 |     //   tunggu Chart.js selesai merender, dan verifikasi bahwa elemen
  622 |     //   canvas chart (statusChart dan categoryChart) ada dan terlihat.
  623 |     //
  624 |     // KONSEP TEKNIS:
  625 |     //   - Chart.js merender grafik ke elemen <canvas> HTML5
  626 |     //   - Dashboard mengambil data dari /dashboard/api/data/ via fetch()
  627 |     //   - Chart diinisialisasi setelah data berhasil di-fetch
  628 |     //
  629 |     // REFERENSI KODE:
  630 |     //   Lihat dashboard.html baris 47-74:
  631 |     //     - <canvas id="statusChart"> → Chart.js doughnut chart
  632 |     //     - <canvas id="categoryChart"> → Chart.js bar chart
  633 |     //     - fetch('/dashboard/api/data/') → data source
  634 |     // =========================================================================
  635 |     test('UI-01: Chart.js di Dashboard Admin ter-render dengan benar', async ({ page }) => {
  636 |         // -------------------------------------------------------------------
  637 |         // LANGKAH 1: Login ke portal admin
  638 |         // -------------------------------------------------------------------
  639 |         // Menggunakan helper function loginAdmin yang sudah kita buat
  640 |         await loginAdmin(page, TEST_ADMIN_USERNAME, TEST_ADMIN_PASSWORD);
  641 | 
  642 |         // -------------------------------------------------------------------
  643 |         // LANGKAH 2: Navigasi ke halaman dashboard
  644 |         // -------------------------------------------------------------------
  645 |         await page.goto(`${BASE_URL}/dashboard/`);
  646 | 
  647 |         // Tunggu halaman selesai dimuat sepenuhnya
  648 |         await page.waitForLoadState('networkidle');
  649 | 
  650 |         // -------------------------------------------------------------------
  651 |         // LANGKAH 3: Tunggu Chart.js selesai merender
  652 |         // -------------------------------------------------------------------
  653 |         // Chart.js merender secara asinkron setelah data di-fetch dari API.
  654 |         // Kita perlu menunggu:
  655 |         //   1. Fetch ke /dashboard/api/data/ selesai
  656 |         //   2. new Chart() dipanggil dan canvas di-render
  657 |         //
  658 |         // Strategi: Tunggu elemen canvas terlihat di viewport
  659 |         // -------------------------------------------------------------------
  660 |         const statusChartCanvas  = page.locator('#statusChart');
  661 |         const categoryChartCanvas = page.locator('#categoryChart');
  662 | 
  663 |         // -------------------------------------------------------------------
```