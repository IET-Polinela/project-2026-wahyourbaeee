# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: citizen_portal.spec.js >> Modul 5: Interaktivitas UI (UI-01 through UI-06) >> UI-03: Pagination Feed Kota — maks 10 kartu, kontrol pagination muncul
- Location: tests\citizen_portal.spec.js:837:5

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 3
Received:    0
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
            - button " Feed Kota" [active] [ref=e54] [cursor=pointer]:
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
  858  |                 id: i,
  859  |                 title: `Laporan Test #${i}`,
  860  |                 description: `Deskripsi laporan pengujian nomor ${i}`,
  861  |                 category: i % 2 === 0 ? 'Infrastruktur' : 'Kebersihan',
  862  |                 location: `Lokasi Test ${i}`,
  863  |                 status: ['REPORTED', 'VERIFIED', 'IN_PROGRESS', 'RESOLVED'][i % 4],
  864  |                 reporter_name: 'testwarga',
  865  |                 is_owner: false,
  866  |                 updated_at: new Date().toISOString()
  867  |             });
  868  |         }
  869  | 
  870  |         // Mock API endpoint untuk report list (feed tab, halaman 1)
  871  |         await page.route('**/api/report/**', async (route) => {
  872  |             const url = route.request().url();
  873  | 
  874  |             if (url.includes('tab=feed') || url.includes('tab=my_reports')) {
  875  |                 // Ambil nomor halaman dari URL (default: 1)
  876  |                 const pageMatch = url.match(/page=(\d+)/);
  877  |                 const pageNum = pageMatch ? parseInt(pageMatch[1]) : 1;
  878  | 
  879  |                 // Hitung subset data untuk halaman ini (10 per halaman)
  880  |                 const pageSize = 10;
  881  |                 const startIdx = (pageNum - 1) * pageSize;
  882  |                 const endIdx = startIdx + pageSize;
  883  |                 const pageData = mockReports.slice(startIdx, endIdx);
  884  | 
  885  |                 await route.fulfill({
  886  |                     status: 200,
  887  |                     contentType: 'application/json',
  888  |                     body: JSON.stringify({
  889  |                         count: mockReports.length,   // Total: 25
  890  |                         results: pageData,            // 10 per halaman
  891  |                         next: endIdx < mockReports.length ? 'next_page_url' : null,
  892  |                         previous: pageNum > 1 ? 'prev_page_url' : null
  893  |                     })
  894  |                 });
  895  |             } else {
  896  |                 // Untuk endpoint lain, kembalikan respons kosong
  897  |                 await route.fulfill({
  898  |                     status: 200,
  899  |                     contentType: 'application/json',
  900  |                     body: JSON.stringify({ count: 0, results: [] })
  901  |                 });
  902  |             }
  903  |         });
  904  | 
  905  |         // Simpan token valid ke localStorage agar bisa akses dashboard
  906  |         await setupAuthTokens(page, VALID_ACCESS_TOKEN, EXPIRED_REFRESH_TOKEN);
  907  | 
  908  |         // Handle alert dialog (jika muncul)
  909  |         page.on('dialog', async (dialog) => await dialog.accept());
  910  | 
  911  |         // -------------------------------------------------------------------
  912  |         // LANGKAH 3: Navigasi ke dashboard
  913  |         // -------------------------------------------------------------------
  914  |         await page.goto(`${SPA_URL}#dashboard`);
  915  |         await page.waitForSelector('#btnBukaModal', { state: 'visible', timeout: 10000 });
  916  | 
  917  |         // -------------------------------------------------------------------
  918  |         // LANGKAH 4: Klik tab "Feed Kota (Publik)"
  919  |         // -------------------------------------------------------------------
  920  |         // Tab ini ada di router.js (template #dashboard), id='tabFeedKota'
  921  |         const tabFeedKota = page.locator('#tabFeedKota');
  922  |         await expect(tabFeedKota).toBeVisible();
  923  |         await tabFeedKota.click();
  924  | 
  925  |         // Tunggu data dimuat (AJAX call + render)
  926  |         await page.waitForTimeout(2000);
  927  | 
  928  |         // -------------------------------------------------------------------
  929  |         // LANGKAH 5: Hitung jumlah kartu laporan di listContainer
  930  |         // -------------------------------------------------------------------
  931  |         // Setiap laporan dirender sebagai <div class="col"> di dalam #listContainer
  932  |         // (lihat app.js renderList() baris 109: card.className = 'col')
  933  |         const listContainer = page.locator('#listContainer');
  934  |         await expect(listContainer).toBeVisible();
  935  | 
  936  |         const reportCards = listContainer.locator('.col-12');
  937  |         const cardCount = await reportCards.count();
  938  | 
  939  |         // Assertion: jumlah kartu tidak boleh lebih dari 10
  940  |         expect(cardCount).toBeLessThanOrEqual(10);
  941  |         expect(cardCount).toBeGreaterThan(0);
  942  | 
  943  |         console.log(`[UI-03] Jumlah kartu di Feed Kota: ${cardCount} (maks 10)`);
  944  | 
  945  |         // -------------------------------------------------------------------
  946  |         // LANGKAH 6: Verifikasi kontrol pagination muncul
  947  |         // -------------------------------------------------------------------
  948  |         // Karena ada 25 laporan dan 10 per halaman, harus ada 3 halaman.
  949  |         // renderPagination() (app.js baris 230) akan membuat navigasi halaman.
  950  |         const paginationContainer = page.locator('#paginationContainer');
  951  |         // await expect(paginationContainer).toBeVisible();
  952  | 
  953  |         // Verifikasi ada tombol navigasi halaman (page numbers, prev, next)
  954  |         const paginationButtons = paginationContainer.locator('.page-item');
  955  |         const paginationCount = await paginationButtons.count();
  956  | 
  957  |         // Harus ada minimal 3 tombol: Sebelumnya, 1, 2, 3, Selanjutnya = 5 tombol
> 958  |         expect(paginationCount).toBeGreaterThanOrEqual(3);
       |                                 ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  959  | 
  960  |         console.log(`[UI-03] ✅ Pagination terverifikasi: ${cardCount} kartu, ${paginationCount} tombol navigasi`);
  961  |     });
  962  | 
  963  |     // =========================================================================
  964  |     // TEST CASE: UI-04
  965  |     // =========================================================================
  966  |     // JUDUL:
  967  |     //   Modal Dialog: Tombol "Buat Laporan Baru" membuka modal #reportModal
  968  |     //
  969  |     // SKENARIO:
  970  |     //   Login ke SPA, navigasi ke #dashboard, klik tombol #btnBukaModal,
  971  |     //   dan verifikasi bahwa modal Bootstrap #reportModal muncul (visible).
  972  |     //
  973  |     // REFERENSI KODE:
  974  |     //   - app.js baris 282-292: setupDashboardEvents() → pasang event listener
  975  |     //     btnBukaModal.addEventListener('click', function() {
  976  |     //         reportModalInstance.show();
  977  |     //     });
  978  |     //   - index.html baris 31: <div class="modal fade" id="reportModal">
  979  |     //
  980  |     // KONSEP TEKNIS:
  981  |     //   - Bootstrap Modal: overlay dialog yang dimunculkan dengan JS
  982  |     //   - Class 'show' ditambahkan ke modal saat ditampilkan
  983  |     //   - Modal instance dibuat dengan: new bootstrap.Modal(element)
  984  |     // =========================================================================
  985  |     test('UI-04: Klik tombol Buat Laporan → modal #reportModal muncul', async ({ page }) => {
  986  |         // -------------------------------------------------------------------
  987  |         // LANGKAH 1: Setup state login dan mock API
  988  |         // -------------------------------------------------------------------
  989  |         await page.goto(SPA_URL);
  990  | 
  991  |         // Hapus route interceptor sebelumnya
  992  |         await page.unroute('http://103.151.63.71:8013/api/**');
  993  | 
  994  |         // Mock semua API calls agar tidak gagal
  995  |         await page.route('**/api/**', async (route) => {
  996  |             // Untuk endpoint report, kembalikan data kosong
  997  |             await route.fulfill({
  998  |                 status: 200,
  999  |                 contentType: 'application/json',
  1000 |                 body: JSON.stringify({ count: 0, results: [] })
  1001 |             });
  1002 |         });
  1003 | 
  1004 |         // Simpan token agar bisa akses dashboard
  1005 |         await setupAuthTokens(page, VALID_ACCESS_TOKEN, EXPIRED_REFRESH_TOKEN);
  1006 | 
  1007 |         // Handle dialog alert (jika muncul)
  1008 |         page.on('dialog', async (dialog) => await dialog.accept());
  1009 | 
  1010 |         // -------------------------------------------------------------------
  1011 |         // LANGKAH 2: Navigasi ke dashboard
  1012 |         // -------------------------------------------------------------------
  1013 |         await page.goto(`${SPA_URL}#dashboard`);
  1014 | 
  1015 |         // Tunggu tombol "Buat Laporan Baru" muncul
  1016 |         const btnBukaModal = page.locator('#btnBukaModal');
  1017 |         await expect(btnBukaModal).toBeVisible({ timeout: 10000 });
  1018 | 
  1019 |         // -------------------------------------------------------------------
  1020 |         // LANGKAH 3: Verifikasi modal belum terlihat sebelum diklik
  1021 |         // -------------------------------------------------------------------
  1022 |         const reportModal = page.locator('#reportModal');
  1023 | 
  1024 |         // Modal awalnya memiliki class "modal fade" (tanpa "show")
  1025 |         // Sehingga tidak terlihat oleh pengguna
  1026 |         await expect(reportModal).not.toBeVisible();
  1027 | 
  1028 |         // -------------------------------------------------------------------
  1029 |         // LANGKAH 4: Klik tombol "Buat Laporan Baru"
  1030 |         // -------------------------------------------------------------------
  1031 |         await btnBukaModal.click();
  1032 | 
  1033 |         // -------------------------------------------------------------------
  1034 |         // LANGKAH 5: Tunggu dan verifikasi modal muncul
  1035 |         // -------------------------------------------------------------------
  1036 |         // Bootstrap menambahkan class 'show' ke modal saat ditampilkan,
  1037 |         // dan mengubah style display dari 'none' ke 'block'.
  1038 |         //
  1039 |         // Kita gunakan toBeVisible() yang secara internal memeriksa apakah
  1040 |         // elemen memiliki ukuran > 0 dan tidak di-hidden.
  1041 |         //
  1042 |         await expect(reportModal).toBeVisible({ timeout: 5000 });
  1043 | 
  1044 |         // Verifikasi tambahan: cek class 'show' pada modal
  1045 |         const hasShowClass = await reportModal.evaluate(
  1046 |             (el) => el.classList.contains('show')
  1047 |         );
  1048 |         expect(hasShowClass).toBe(true);
  1049 | 
  1050 |         // -------------------------------------------------------------------
  1051 |         // LANGKAH 6: Verifikasi form dan elemen input ada di dalam modal
  1052 |         // -------------------------------------------------------------------
  1053 |         // Form laporan harus memiliki semua field yang diperlukan
  1054 |         await expect(page.locator('#reportForm')).toBeVisible();
  1055 |         await expect(page.locator('#inputTitle')).toBeVisible();
  1056 |         await expect(page.locator('#inputCategory')).toBeVisible();
  1057 |         await expect(page.locator('#inputLocation')).toBeVisible();
  1058 |         await expect(page.locator('#inputDescription')).toBeVisible();
```