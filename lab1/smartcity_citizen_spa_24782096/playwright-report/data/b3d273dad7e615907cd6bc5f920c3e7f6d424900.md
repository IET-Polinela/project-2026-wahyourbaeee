# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: citizen_portal.spec.js >> Modul 5: Interaktivitas UI (UI-01 through UI-06) >> UI-01: Chart.js di Dashboard Admin ter-render dengan benar
- Location: tests\citizen_portal.spec.js:635:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#statusChart')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('#statusChart')

```

```yaml
- navigation:
  - link " TheoTown T-MAP":
    - /url: /
  - list:
    - listitem:
      - link " Beranda":
        - /url: /
    - listitem:
      - link " Dashboard":
        - /url: /dashboard/
    - listitem:
      - link " Laporan":
        - /url: /list/
    - listitem:
      - link " Tentang":
        - /url: /abouts/
    - listitem:
      - link " Kontak":
        - /url: /contacts/
  - text: A admin
  - button " Keluar"
- text: 
- heading "Selamat Datang" [level=4]
- paragraph: Masuk ke akun TheoTown kamu
- text: Username 
- textbox "Masukkan username"
- text: Password 
- textbox "Masukkan password"
- button ""
- button " Masuk"
- paragraph:
  - text: Belum punya akun?
  - link "Daftar sekarang":
    - /url: /register/
- contentinfo: TheoTown City · Sistem Manajemen Kota Terpadu PIE 1416 · Teknologi Rekayasa Internet
```

# Test source

```ts
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
  664 |         // LANGKAH 4: Verifikasi elemen canvas ada dan terlihat
  665 |         // -------------------------------------------------------------------
  666 |         // toBeVisible() memeriksa bahwa elemen:
  667 |         //   - Ada di DOM
  668 |         //   - Tidak di-hidden (display:none, visibility:hidden)
  669 |         //   - Memiliki dimensi > 0 (width dan height)
  670 |         //
> 671 |         await expect(statusChartCanvas).toBeVisible({ timeout: 15000 });
      |                                         ^ Error: expect(locator).toBeVisible() failed
  672 |         await expect(categoryChartCanvas).toBeVisible({ timeout: 15000 });
  673 | 
  674 |         // -------------------------------------------------------------------
  675 |         // LANGKAH 5: Verifikasi tambahan - cek bahwa canvas sudah di-render
  676 |         //            oleh Chart.js (canvas memiliki konten/grafik)
  677 |         // -------------------------------------------------------------------
  678 |         // Cara mendeteksi Chart.js telah merender: periksa apakah ada
  679 |         // instance Chart yang terkait dengan canvas element.
  680 |         //
  681 |         // Chart.js menyimpan referensi instance di Chart.instances
  682 |         const chartsRendered = await page.evaluate(() => {
  683 |             // Cek apakah Chart (library) tersedia di window global
  684 |             if (typeof Chart === 'undefined') return false;
  685 | 
  686 |             // Chart.instances menyimpan semua chart yang telah dibuat
  687 |             // Di Chart.js v4+, ini adalah objek dengan key = chart id
  688 |             const instances = Object.keys(Chart.instances || {});
  689 |             return instances.length >= 2; // Minimal 2 chart (status + category)
  690 |         });
  691 | 
  692 |         expect(chartsRendered).toBe(true);
  693 | 
  694 |         // -------------------------------------------------------------------
  695 |         // LANGKAH 6: Verifikasi tabel data juga ada
  696 |         // -------------------------------------------------------------------
  697 |         // Dashboard juga menampilkan 2 tabel: reportedTable dan resolvedTable
  698 |         //await expect(page.locator('#reportedTable')).toBeVisible();
  699 |         //await expect(page.locator('#resolvedTable')).toBeVisible();
  700 | 
  701 |         console.log('[UI-01] ✅ Chart.js statusChart dan categoryChart berhasil ter-render');
  702 |     });
  703 | 
  704 |     // =========================================================================
  705 |     // TEST CASE: UI-02
  706 |     // =========================================================================
  707 |     // JUDUL:
  708 |     //   Live Search: Pencarian di halaman daftar laporan admin
  709 |     //
  710 |     // SKENARIO:
  711 |     //   Admin login, navigasi ke halaman daftar laporan (/reports/),
  712 |     //   ketik keyword pencarian di input #searchInput, dan verifikasi
  713 |     //   bahwa tabel ter-filter sesuai keyword (via AJAX call ke /search/).
  714 |     //
  715 |     // REFERENSI KODE:
  716 |     //   Lihat report_list.html baris 82-103:
  717 |     //     searchInput.addEventListener('keyup', function() {
  718 |     //         fetch(`/search/?q=${this.value}`)
  719 |     //         .then(res => res.json())
  720 |     //         .then(data => {
  721 |     //             tableBody.innerHTML = '';
  722 |     //             data.results.forEach(r => { ... });
  723 |     //         });
  724 |     //     });
  725 |     //
  726 |     // KONSEP TEKNIS:
  727 |     //   - Live Search: setiap keyup di input, AJAX request dikirim
  728 |     //   - page.waitForResponse(): menunggu respons HTTP tertentu
  729 |     //   - Filter dilakukan di server (endpoint /search/?q=...)
  730 |     // =========================================================================
  731 |     test('UI-02: Live Search pada daftar laporan admin berfungsi', async ({ page }) => {
  732 |         // -------------------------------------------------------------------
  733 |         // LANGKAH 1: Login ke portal admin
  734 |         // -------------------------------------------------------------------
  735 |         await loginAdmin(page, TEST_ADMIN_USERNAME, TEST_ADMIN_PASSWORD);
  736 | 
  737 |         // -------------------------------------------------------------------
  738 |         // LANGKAH 2: Navigasi ke halaman daftar laporan (/reports/ via main_app urls)
  739 |         // -------------------------------------------------------------------
  740 |         // Halaman ini berisi tabel semua laporan dan input pencarian.
  741 |         // URL /reports/ didefinisikan di main_app/urls.py
  742 |         await page.goto(`${BASE_URL}/list/`);
  743 |         await page.waitForLoadState('networkidle');
  744 | 
  745 |         // -------------------------------------------------------------------
  746 |         // LANGKAH 3: Verifikasi elemen pencarian dan tabel ada
  747 |         // -------------------------------------------------------------------
  748 |         const searchInput = page.locator('#searchInput');
  749 |         const tableBody   = page.locator('#reportTableBody');
  750 | 
  751 |         await expect(searchInput).toBeVisible({ timeout: 10000 });
  752 |         await expect(tableBody).toBeVisible({ timeout: 10000 });
  753 | 
  754 |         // Catat jumlah baris awal sebelum pencarian
  755 |         const initialRowCount = await tableBody.locator('tr').count();
  756 |         console.log(`[UI-02] Jumlah baris awal: ${initialRowCount}`);
  757 | 
  758 |         // -------------------------------------------------------------------
  759 |         // LANGKAH 4: Ketik keyword pencarian dan tunggu respons AJAX
  760 |         // -------------------------------------------------------------------
  761 |         // Kita menggunakan Promise.all() untuk menjalankan dua operasi secara
  762 |         // bersamaan (concurrent):
  763 |         //   1. Menunggu respons HTTP dari /search/
  764 |         //   2. Mengetik keyword ke input field
  765 |         //
  766 |         // MENGAPA Promise.all()?
  767 |         // Jika kita ketik dulu baru tunggu response, response mungkin sudah
  768 |         // datang sebelum waitForResponse dipanggil → timeout.
  769 |         const searchKeyword = 'Lampu';
  770 | 
  771 |         // Mulai mendengarkan response spesifik untuk query pencarian 'Lampu'
```