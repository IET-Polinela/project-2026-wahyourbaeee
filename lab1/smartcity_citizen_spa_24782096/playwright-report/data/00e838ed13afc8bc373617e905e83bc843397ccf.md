# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: citizen_portal.spec.js >> Modul 5: Interaktivitas UI (UI-01 through UI-06) >> UI-05: Isi form dan simpan draft → modal tutup, notifikasi muncul
- Location: tests\citizen_portal.spec.js:1088:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#toast-wrap').locator('.t-toast.success')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#toast-wrap').locator('.t-toast.success')

```

```yaml
- img
- img
- img
- img
- navigation:
  - link " Smart City PORTAL":
    - /url: "#"
  - list:
    - listitem:
      - link " Beranda":
        - /url: "#login"
    - listitem:
      - link " Dashboard":
        - /url: "#dashboard"
  - text: T testwarga
  - button " Keluar"
- main:
  - complementary:
    - button " Laporan Baru"
    - heading " Rekap Laporan Saya" [level=6]
    - text:  Draft 0  Diproses 0  Selesai 0
    - separator
    - button " Keluar"
  - list:
    - listitem:
      - button " Laporan Saya"
    - listitem:
      - button " Feed Kota"
  - text: Memuat data...
  - complementary:
    - heading " Pengumuman" [level=6]
    - text: " Pemeliharaan sistem setiap Minggu 00.00–02.00 WIB  Lab 12: implementasi CRUD Laporan via API  Gunakan token JWT untuk setiap request ke backend"
- contentinfo: Smart City Portal · Sistem Manajemen Kota Terpadu PIE 1416 · Teknologi Rekayasa Internet
- dialog "Buat Laporan Baru":
  - img: ✎
  - heading "Buat Laporan Baru" [level=5]
  - button
  - text: Judul Laporan
  - 'textbox "Contoh: Banjir di Jalan Merdeka"': AC Mati di Lab CPS 1
  - text: Kategori
  - combobox:
    - option "-- Pilih Kategori --"
    - option "🌊 Banjir"
    - option "🚧 Jalan Rusak" [selected]
    - option "🗑️ Sampah"
    - option "💡 Lampu Mati"
    - option "📌 Lainnya"
  - text: Deskripsi
  - textbox "Jelaskan masalah secara detail...": Unit AC di ruang Lab CPS 1 tidak berfungsi sejak tadi pagi. Suhu ruangan sangat panas dan mengganggu kegiatan praktikum.
  - text: Lokasi
  - 'textbox "Contoh: Jl. Merdeka No. 1"': Gedung Lab Analisis, Lantai 2
  - button " Simpan Draft"
  - button "Ajukan "
```

# Test source

```ts
  1133 |                 await route.fulfill({
  1134 |                     status: 200,
  1135 |                     contentType: 'application/json',
  1136 |                     body: JSON.stringify({
  1137 |                         count: 1,
  1138 |                         results: [{
  1139 |                             id: 99,
  1140 |                             title: 'Test Draft',
  1141 |                             status: 'DRAFT',
  1142 |                             category: 'Infrastruktur',
  1143 |                             location: 'Gedung Lab',
  1144 |                             description: 'Deskripsi test',
  1145 |                             reporter_name: 'testwarga',
  1146 |                             is_owner: true
  1147 |                         }]
  1148 |                     })
  1149 |                 });
  1150 |             } else {
  1151 |                 // Mock default: kembalikan list kosong
  1152 |                 await route.fulfill({
  1153 |                     status: 200,
  1154 |                     contentType: 'application/json',
  1155 |                     body: JSON.stringify({ count: 0, results: [] })
  1156 |                 });
  1157 |             }
  1158 |         });
  1159 | 
  1160 |         // Setup token
  1161 |         await setupAuthTokens(page, VALID_ACCESS_TOKEN, EXPIRED_REFRESH_TOKEN);
  1162 | 
  1163 |         // -------------------------------------------------------------------
  1164 |         // LANGKAH 2: Handle dialog alert (jika ada)
  1165 |         // -------------------------------------------------------------------
  1166 |         // app.js menggunakan showToast() bukan alert(), sehingga tidak ada
  1167 |         // dialog browser yang muncul. Handler ini tetap dipasang sebagai
  1168 |         // fallback jika ada dialog yang tidak terduga.
  1169 |         //
  1170 |         page.on('dialog', async (dialog) => {
  1171 |             console.log(`[UI-05] Dialog (unexpected): "${dialog.message()}"`);
  1172 |             await dialog.accept();
  1173 |         });
  1174 | 
  1175 |         // -------------------------------------------------------------------
  1176 |         // LANGKAH 3: Navigasi ke dashboard dan buka modal
  1177 |         // -------------------------------------------------------------------
  1178 |         await page.goto(`${SPA_URL}#dashboard`);
  1179 |         await page.waitForSelector('#btnBukaModal', { state: 'visible', timeout: 10000 });
  1180 | 
  1181 |         // Klik tombol buka modal
  1182 |         await page.locator('#btnBukaModal').click();
  1183 | 
  1184 |         // Tunggu modal muncul
  1185 |         await expect(page.locator('#reportModal')).toBeVisible({ timeout: 5000 });
  1186 | 
  1187 |         // -------------------------------------------------------------------
  1188 |         // LANGKAH 4: Isi form laporan dengan data test
  1189 |         // -------------------------------------------------------------------
  1190 |         // Mengisi setiap field form satu per satu
  1191 | 
  1192 |         // 4a. Judul Laporan / Report Title
  1193 |         await page.locator('#inputTitle').fill('AC Mati di Lab CPS 1');
  1194 | 
  1195 |         // 4b. Kategori / Category
  1196 |         //     Ini adalah <select>, kita gunakan selectOption() bukan fill()
  1197 |         await page.locator('#inputCategory').selectOption('Jalan Rusak');
  1198 | 
  1199 |         // 4c. Lokasi Kejadian / Incident Location
  1200 |         await page.locator('#inputLocation').fill('Gedung Lab Analisis, Lantai 2');
  1201 | 
  1202 |         // 4d. Deskripsi / Description
  1203 |         //     Ini adalah <textarea>, fill() juga bisa digunakan
  1204 |         await page.locator('#inputDescription').fill(
  1205 |             'Unit AC di ruang Lab CPS 1 tidak berfungsi sejak tadi pagi. ' +
  1206 |             'Suhu ruangan sangat panas dan mengganggu kegiatan praktikum.'
  1207 |         );
  1208 | 
  1209 |         // -------------------------------------------------------------------
  1210 |         // LANGKAH 5: Klik tombol "Simpan Draft" (#btnDraft)
  1211 |         // -------------------------------------------------------------------
  1212 |         // Tombol ini akan memanggil kirimLaporan('DRAFT') di app.js
  1213 |         await page.locator('#btnDraft').click();
  1214 | 
  1215 |         // Tunggu proses POST selesai dan modal menutup
  1216 |         await page.waitForTimeout(2000);
  1217 | 
  1218 |         // -------------------------------------------------------------------
  1219 |         // LANGKAH 6: Verifikasi modal tertutup setelah submit berhasil
  1220 |         // -------------------------------------------------------------------
  1221 |         // Setelah berhasil, app.js memanggil reportModalInstance.hide()
  1222 |         const reportModal = page.locator('#reportModal');
  1223 |         // await expect(reportModal).not.toBeVisible({ timeout: 5000 });
  1224 | 
  1225 |         // -------------------------------------------------------------------
  1226 |         // LANGKAH 7: Verifikasi notifikasi sukses muncul (via Toast)
  1227 |         // -------------------------------------------------------------------
  1228 |         // app.js menggunakan showToast() yang merender elemen .t-toast.success
  1229 |         // di dalam #toast-wrap, bukan alert() browser.
  1230 |         // Kita tunggu elemen toast muncul dan berisi teks 'berhasil'.
  1231 |         //
  1232 |         const toastWrap = page.locator('#toast-wrap');
> 1233 |         await expect(toastWrap.locator('.t-toast.success')).toBeVisible({ timeout: 5000 });
       |                                                             ^ Error: expect(locator).toBeVisible() failed
  1234 |         const toastText = await toastWrap.locator('.t-toast__body').textContent();
  1235 |         expect(toastText).toContain('berhasil');
  1236 | 
  1237 |         // -------------------------------------------------------------------
  1238 |         // LANGKAH 8: Verifikasi badge Draf di summaryStats terupdate
  1239 |         // -------------------------------------------------------------------
  1240 |         // Setelah simpan berhasil, loadDashboardData() dipanggil yang
  1241 |         // memanggil loadSummaryStats(). Badge Draf harus menunjukkan angka > 0.
  1242 |         //
  1243 |         await page.waitForTimeout(2000);
  1244 | 
  1245 |         const summaryStats = page.locator('#summaryStats');
  1246 |         await expect(summaryStats).toBeVisible();
  1247 | 
  1248 |         // Cek bahwa ada setidaknya satu badge yang menunjukkan angka > 0
  1249 |         // Badge Draf adalah badge pertama di summaryStats
  1250 |         const draftBadge = summaryStats.locator('.badge.bg-secondary').first();
  1251 |         const draftCountText = await draftBadge.textContent();
  1252 |         const draftCount = parseInt(draftCountText, 10);
  1253 | 
  1254 |         expect(draftCount).toBeGreaterThanOrEqual(1);
  1255 | 
  1256 |         console.log(`[UI-05] ✅ Draft tersimpan: modal tutup, alert muncul, badge Draf = ${draftCount}`);
  1257 |     });
  1258 | 
  1259 |     // =========================================================================
  1260 |     // TEST CASE: UI-06
  1261 |     // =========================================================================
  1262 |     // JUDUL:
  1263 |     //   Responsive Design: Navbar collapse pada viewport mobile
  1264 |     //
  1265 |     // SKENARIO:
  1266 |     //   Set viewport ke ukuran mobile (400x800), muat halaman SPA, dan
  1267 |     //   verifikasi bahwa navbar dalam keadaan collapsed (tombol toggler
  1268 |     //   terlihat, atau menu collapse tidak ditampilkan secara default).
  1269 |     //
  1270 |     // KONSEP TEKNIS:
  1271 |     //   - Bootstrap Responsive Navbar:
  1272 |     //     - navbar-expand-lg: collapse di bawah breakpoint lg (992px)
  1273 |     //     - navbar-toggler: tombol hamburger yang muncul saat collapsed
  1274 |     //     - collapse navbar-collapse: div yang di-toggle show/hide
  1275 |     //
  1276 |     // REFERENSI KODE:
  1277 |     //   index.html baris 16-23:
  1278 |     //     <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  1279 |     //       ...
  1280 |     //       <div id="nav-menus" class="ms-auto">
  1281 |     //
  1282 |     //   CATATAN: Navbar SPA ini menggunakan struktur sederhana tanpa
  1283 |     //   Bootstrap collapse standard (tidak ada .navbar-collapse).
  1284 |     //   Elemen #nav-menus langsung berada di dalam navbar.
  1285 |     //   Saat viewport kecil, elemen-elemen navbar akan wrap/stack.
  1286 |     //
  1287 |     // PLAYWRIGHT VIEWPORT TESTING:
  1288 |     //   Kita dapat mengatur ukuran viewport per test pada Playwright.
  1289 |     //   Ini lebih handal dari CSS media query test karena benar-benar
  1290 |     //   mengubah dimensi rendering browser.
  1291 |     //
  1292 |     // =========================================================================
  1293 |     test('UI-06: Responsive navbar pada viewport mobile (400x800)', async ({ page }) => {
  1294 |         // -------------------------------------------------------------------
  1295 |         // LANGKAH 1: Set viewport ke ukuran mobile
  1296 |         // -------------------------------------------------------------------
  1297 |         // page.setViewportSize() mengubah dimensi viewport browser.
  1298 |         // Ini mensimulasikan pengguna yang membuka halaman di smartphone.
  1299 |         //
  1300 |         // Ukuran 400x800 adalah ukuran umum smartphone
  1301 |         //
  1302 |         // Catatan: Ini HANYA mengubah viewport, bukan user agent.
  1303 |         // Jika perlu mengubah user agent, gunakan page.context().
  1304 |         //
  1305 |         await page.setViewportSize({ width: 400, height: 800 });
  1306 | 
  1307 |         // -------------------------------------------------------------------
  1308 |         // LANGKAH 2: Navigasi ke SPA
  1309 |         // -------------------------------------------------------------------
  1310 |         await page.goto(SPA_URL);
  1311 |         await page.waitForLoadState('domcontentloaded');
  1312 | 
  1313 |         // -------------------------------------------------------------------
  1314 |         // LANGKAH 3: Verifikasi navbar ada dan terlihat
  1315 |         // -------------------------------------------------------------------
  1316 |         const navbar = page.locator('.navbar');
  1317 |         await expect(navbar).toBeVisible({ timeout: 5000 });
  1318 | 
  1319 |         // -------------------------------------------------------------------
  1320 |         // LANGKAH 4: Verifikasi responsive behavior
  1321 |         // -------------------------------------------------------------------
  1322 |         // Navbar menggunakan class 'navbar-expand-lg' yang berarti:
  1323 |         // - Di atas 992px: navbar expanded (horizontal, semua item terlihat)
  1324 |         // - Di bawah 992px: navbar collapsed (vertikal, tombol toggler muncul)
  1325 |         //
  1326 |         // Viewport kita 400px < 992px, jadi navbar harus dalam state collapsed.
  1327 |         //
  1328 |         // STRATEGI VERIFIKASI:
  1329 |         // Struktur navbar di SPA ini sederhana (tanpa navbar-collapse standard).
  1330 |         // Kita verifikasi bahwa di viewport mobile, navbar toggler button
  1331 |         // terlihat ATAU elemen #nav-menus memiliki layout terbatas.
  1332 |         //
  1333 |         // -------------------------------------------------------------------
```