# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: citizen_portal.spec.js >> Modul 1: Otorisasi & Sesi (AUTH-04, AUTH-05, AUTH-06) >> AUTH-05: Token kadaluarsa → interceptor menangani 401 dan redirect ke #login
- Location: tests\citizen_portal.spec.js:401:5

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
  373 |     // =========================================================================
  374 |     // TEST CASE: AUTH-05
  375 |     // =========================================================================
  376 |     // JUDUL:
  377 |     //   Token Interceptor: Access token kadaluarsa → SPA menangani 401 error
  378 |     //
  379 |     // SKENARIO:
  380 |     //   Pengguna memiliki access_token yang sudah kadaluarsa (expired) namun
  381 |     //   refresh_token masih valid. Saat SPA melakukan API call dan mendapat
  382 |     //   respons 401, interceptor di api.js harus membersihkan localStorage
  383 |     //   dan mengarahkan pengguna ke halaman login.
  384 |     //
  385 |     // CATATAN TEKNIS:
  386 |     //   Dalam kode api.js (baris 28-33), interceptor sederhana diimplementasikan:
  387 |     //     if(response.status == 401){
  388 |     //         alert('Sesi Anda telah habis atau Anda belum login.');
  389 |     //         localStorage.clear();
  390 |     //         window.location.hash = '#login';
  391 |     //         return null;
  392 |     //     }
  393 |     //
  394 |     //   Perhatikan bahwa SPA ini TIDAK memiliki mekanisme auto-refresh token.
  395 |     //   Jadi ketika access_token expired, SPA langsung redirect ke login.
  396 |     //
  397 |     // STRATEGI TESTING:
  398 |     //   Kita menggunakan page.route() untuk mock respons 401 dari API server,
  399 |     //   sehingga kita tidak perlu benar-benar mengirim expired token ke server.
  400 |     // =========================================================================
  401 |     test('AUTH-05: Token kadaluarsa → interceptor menangani 401 dan redirect ke #login', async ({ page }) => {
  402 |         // -------------------------------------------------------------------
  403 |         // LANGKAH 1: Setup token di localStorage (simulasi user yang sudah login
  404 |         //            tapi tokennya sudah kadaluarsa)
  405 |         // -------------------------------------------------------------------
  406 |         await setupAuthTokens(page, EXPIRED_ACCESS_TOKEN, EXPIRED_REFRESH_TOKEN);
  407 | 
  408 |         // Verifikasi token tersimpan dengan benar
  409 |         const storedToken = await page.evaluate(() => localStorage.getItem('access_token'));
  410 |         expect(storedToken).toBe(EXPIRED_ACCESS_TOKEN);
  411 | 
  412 |         // -------------------------------------------------------------------
  413 |         // LANGKAH 2: Mock respons API untuk mensimulasikan 401 Unauthorized
  414 |         // -------------------------------------------------------------------
  415 |         // page.route() dapat menginterceptsi request HTTP
  416 |         // dan memberikan respons buatan (mock response).
  417 |         //
  418 |         // Pola URL '**\/api/report/**' akan mencocokkan semua request
  419 |         // ke endpoint report API (termasuk query parameters).
  420 |         //
  421 |         // -------------------------------------------------------------------
  422 | 
  423 |         // Hapus interceptor URL sebelumnya yang meredirect ke localhost
  424 |         // Agar mock kita yang prioritas
  425 |         await page.unroute('http://103.151.63.88:8011/api/**');
  426 | 
  427 |         // Mock SEMUA request ke API endpoint agar mengembalikan 401
  428 |         await page.route('**/api/**', async (route) => {
  429 |             // route.fulfill() langsung mengembalikan respons tanpa mengirim
  430 |             // request ke server asli. Ini sangat berguna untuk testing.
  431 |             await route.fulfill({
  432 |                 status: 401,
  433 |                 contentType: 'application/json',
  434 |                 body: JSON.stringify({
  435 |                     detail: 'Given token not valid for any token type',
  436 |                     code: 'token_not_valid'
  437 |                 })
  438 |             });
  439 |         });
  440 | 
  441 |         // -------------------------------------------------------------------
  442 |         // LANGKAH 3: Handle dialog alert yang muncul dari interceptor api.js
  443 |         // -------------------------------------------------------------------
  444 |         // Kode api.js menampilkan alert('Sesi Anda telah habis...') saat
  445 |         // menerima respons 401. Playwright akan error jika dialog tidak ditangani.
  446 |         //
  447 |         // page.on('dialog') mendaftarkan event handler untuk dialog browser
  448 |         // (alert, confirm, prompt). Kita harus accept/dismiss dialog.
  449 |         page.on('dialog', async (dialog) => {
  450 |             // Verifikasi pesan alert sesuai dengan yang ada di api.js
  451 |             console.log(`[AUTH-05] Dialog muncul: "${dialog.message()}"`);
  452 |             await dialog.accept();
  453 |         });
  454 | 
  455 |         // -------------------------------------------------------------------
  456 |         // LANGKAH 4: Navigasi ke #dashboard (router.js akan mengizinkan karena
  457 |         //            ada token di localStorage, meskipun token sudah expired)
  458 |         // -------------------------------------------------------------------
  459 |         // Auth guard di router.js HANYA memeriksa keberadaan token (ada/tidak),
  460 |         // BUKAN validitas token. Validitas dicek saat API call dilakukan.
  461 |         //
  462 |         await page.goto(`${SPA_URL}#dashboard`);
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
> 473 |         await page.waitForFunction(
      |                    ^ TimeoutError: page.waitForFunction: Timeout 10000ms exceeded.
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
  563 |         await page.waitForFunction(
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
```