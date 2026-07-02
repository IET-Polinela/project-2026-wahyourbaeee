# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: citizen_portal.spec.js >> Modul 5: Interaktivitas UI (UI-01 through UI-06) >> UI-02: Live Search pada daftar laporan admin berfungsi
- Location: tests\citizen_portal.spec.js:731:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#searchInput')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('#searchInput')

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
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem: / Reports
- heading "Daftar Laporan Warga" [level=2]
- text: 
- textbox "Cari laporan berdasarkan judul secara instan..."
- table:
  - rowgroup:
    - row "Judul Laporan Lokasi Status Aksi":
      - columnheader "Judul Laporan"
      - columnheader "Lokasi"
      - columnheader "Status"
      - columnheader "Aksi"
  - rowgroup:
    - row "Penyumbatan Karena Sedimen - Jl. Jend. A. Yani Kecamatan Kota Administrasi Jakarta Barat, Gg. Cihampelas No. 2 Subulussalam, NB 98624 Resolved  Detail":
      - cell "Penyumbatan Karena Sedimen - Jl. Jend. A. Yani":
        - strong: Penyumbatan Karena Sedimen - Jl. Jend. A. Yani
      - cell "Kecamatan Kota Administrasi Jakarta Barat, Gg. Cihampelas No. 2 Subulussalam, NB 98624"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Pencurian Kabel Telepon - Jalan Indragiri Kecamatan Malang, Gg. Peta No. 788 Medan, JK 72614 Resolved  Detail":
      - cell "Pencurian Kabel Telepon - Jalan Indragiri":
        - strong: Pencurian Kabel Telepon - Jalan Indragiri
      - cell "Kecamatan Malang, Gg. Peta No. 788 Medan, JK 72614"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Saluran Air Mampet - Jalan Rungkut Industri Kecamatan Sibolga, Gang Indragiri No. 01 Kupang, Maluku Utara 14479 Reported  Detail":
      - cell "Saluran Air Mampet - Jalan Rungkut Industri":
        - strong: Saluran Air Mampet - Jalan Rungkut Industri
      - cell "Kecamatan Sibolga, Gang Indragiri No. 01 Kupang, Maluku Utara 14479"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Bau Menyengat Sampah Menumpuk - Gang Ronggowarsito Kecamatan Yogyakarta, Gang Jend. Sudirman No. 91 Pariaman, KU 80988 Resolved  Detail":
      - cell "Bau Menyengat Sampah Menumpuk - Gang Ronggowarsito":
        - strong: Bau Menyengat Sampah Menumpuk - Gang Ronggowarsito
      - cell "Kecamatan Yogyakarta, Gang Jend. Sudirman No. 91 Pariaman, KU 80988"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Penyumbatan Karena Sedimen - Jalan Merdeka Kecamatan Cimahi, Jalan S. Parman No. 63 Sukabumi, Aceh 34631 Resolved  Detail":
      - cell "Penyumbatan Karena Sedimen - Jalan Merdeka":
        - strong: Penyumbatan Karena Sedimen - Jalan Merdeka
      - cell "Kecamatan Cimahi, Jalan S. Parman No. 63 Sukabumi, Aceh 34631"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Drainase Meluap Saat Hujan - Jl. Sentot Alibasa Kecamatan Metro, Gg. Jend. A. Yani No. 07 Palangkaraya, Kalimantan Tengah 55367 Reported  Detail":
      - cell "Drainase Meluap Saat Hujan - Jl. Sentot Alibasa":
        - strong: Drainase Meluap Saat Hujan - Jl. Sentot Alibasa
      - cell "Kecamatan Metro, Gg. Jend. A. Yani No. 07 Palangkaraya, Kalimantan Tengah 55367"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Sampah Menutup Saluran Air - Jl. Jend. A. Yani Kecamatan Solok, Jl. Gedebage Selatan No. 6 Manado, Sulawesi Tenggara 67921 Verified  Detail":
      - cell "Sampah Menutup Saluran Air - Jl. Jend. A. Yani":
        - strong: Sampah Menutup Saluran Air - Jl. Jend. A. Yani
      - cell "Kecamatan Solok, Jl. Gedebage Selatan No. 6 Manado, Sulawesi Tenggara 67921"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Lampu Jalan Berkedip - Gang Sukajadi Kecamatan Sabang, Gg. Jamika No. 599 Padang, Jawa Barat 70176 In Progress  Detail":
      - cell "Lampu Jalan Berkedip - Gang Sukajadi":
        - strong: Lampu Jalan Berkedip - Gang Sukajadi
      - cell "Kecamatan Sabang, Gg. Jamika No. 599 Padang, Jawa Barat 70176"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Sampah Menutup Saluran Air - Jalan Cihampelas Kecamatan Parepare, Gang Joyoboyo No. 98 Bandung, KI 60783 Verified  Detail":
      - cell "Sampah Menutup Saluran Air - Jalan Cihampelas":
        - strong: Sampah Menutup Saluran Air - Jalan Cihampelas
      - cell "Kecamatan Parepare, Gang Joyoboyo No. 98 Bandung, KI 60783"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Tumpukan Sampah Liar - Jalan Rajawali Timur Kecamatan Jayapura, Gg. Rajawali Timur No. 7 Banjarmasin, Jawa Barat 26028 In Progress  Detail":
      - cell "Tumpukan Sampah Liar - Jalan Rajawali Timur":
        - strong: Tumpukan Sampah Liar - Jalan Rajawali Timur
      - cell "Kecamatan Jayapura, Gg. Rajawali Timur No. 7 Banjarmasin, Jawa Barat 26028"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Tutup Got Pecah - Gg. Surapati Kecamatan Pagaralam, Jl. Rajawali Barat No. 8 Semarang, Jawa Tengah 37606 Verified  Detail":
      - cell "Tutup Got Pecah - Gg. Surapati":
        - strong: Tutup Got Pecah - Gg. Surapati
      - cell "Kecamatan Pagaralam, Jl. Rajawali Barat No. 8 Semarang, Jawa Tengah 37606"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Lubang Besar di Tengah Jalan - Gang Siliwangi Kecamatan Manado, Gg. M.T Haryono No. 86 Bekasi, JA 69473 Reported  Detail":
      - cell "Lubang Besar di Tengah Jalan - Gang Siliwangi":
        - strong: Lubang Besar di Tengah Jalan - Gang Siliwangi
      - cell "Kecamatan Manado, Gg. M.T Haryono No. 86 Bekasi, JA 69473"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Ambles di Dekat Drainase - Jalan Peta Kecamatan Pariaman, Jl. Indragiri No. 94 Tebingtinggi, Aceh 93506 In Progress  Detail":
      - cell "Ambles di Dekat Drainase - Jalan Peta":
        - strong: Ambles di Dekat Drainase - Jalan Peta
      - cell "Kecamatan Pariaman, Jl. Indragiri No. 94 Tebingtinggi, Aceh 93506"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Area Gelap Rawan Kriminalitas - Gang Stasiun Wonokromo Kecamatan Semarang, Jl. Ronggowarsito No. 99 Balikpapan, GO 11443 Reported  Detail":
      - cell "Area Gelap Rawan Kriminalitas - Gang Stasiun Wonokromo":
        - strong: Area Gelap Rawan Kriminalitas - Gang Stasiun Wonokromo
      - cell "Kecamatan Semarang, Jl. Ronggowarsito No. 99 Balikpapan, GO 11443"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Drainase Meluap Saat Hujan - Jl. K.H. Wahid Hasyim Kecamatan Pangkalpinang, Gg. Laswi No. 5 Binjai, JK 93807 In Progress  Detail":
      - cell "Drainase Meluap Saat Hujan - Jl. K.H. Wahid Hasyim":
        - strong: Drainase Meluap Saat Hujan - Jl. K.H. Wahid Hasyim
      - cell "Kecamatan Pangkalpinang, Gg. Laswi No. 5 Binjai, JK 93807"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Gangguan Ketertiban Umum - Gang Jakarta Kecamatan Tangerang Selatan, Jl. Gedebage Selatan No. 547 Mojokerto, Kalimantan Timur 09714 In Progress  Detail":
      - cell "Gangguan Ketertiban Umum - Gang Jakarta":
        - strong: Gangguan Ketertiban Umum - Gang Jakarta
      - cell "Kecamatan Tangerang Selatan, Jl. Gedebage Selatan No. 547 Mojokerto, Kalimantan Timur 09714"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Lampu Jalan Berkedip - Jalan Rawamangun Kecamatan Lhokseumawe, Gg. Pasir Koja No. 063 Jayapura, KI 67567 Reported  Detail":
      - cell "Lampu Jalan Berkedip - Jalan Rawamangun":
        - strong: Lampu Jalan Berkedip - Jalan Rawamangun
      - cell "Kecamatan Lhokseumawe, Gg. Pasir Koja No. 063 Jayapura, KI 67567"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Lampu Jalan Berkedip - Jl. Rawamangun Kecamatan Kediri, Jalan Yos Sudarso No. 351 Bima, Bali 81732 In Progress  Detail":
      - cell "Lampu Jalan Berkedip - Jl. Rawamangun":
        - strong: Lampu Jalan Berkedip - Jl. Rawamangun
      - cell "Kecamatan Kediri, Jalan Yos Sudarso No. 351 Bima, Bali 81732"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Penerangan Jalan Umum Mati - Jl. Rungkut Industri Kecamatan Pagaralam, Gang Jend. Sudirman No. 906 Sukabumi, YO 27773 Verified  Detail":
      - cell "Penerangan Jalan Umum Mati - Jl. Rungkut Industri":
        - strong: Penerangan Jalan Umum Mati - Jl. Rungkut Industri
      - cell "Kecamatan Pagaralam, Gang Jend. Sudirman No. 906 Sukabumi, YO 27773"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "TPS Melebihi Kapasitas - Jalan W.R. Supratman Kecamatan Magelang, Gg. Kiaracondong No. 1 Serang, AC 01209 In Progress  Detail":
      - cell "TPS Melebihi Kapasitas - Jalan W.R. Supratman":
        - strong: TPS Melebihi Kapasitas - Jalan W.R. Supratman
      - cell "Kecamatan Magelang, Gg. Kiaracondong No. 1 Serang, AC 01209"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Drainase Meluap Saat Hujan - Gg. Ahmad Yani Kecamatan Kota Administrasi Jakarta Selatan, Jalan Kebonjati No. 525 Kota Administrasi Jakarta Barat, DKI Jakarta 97207 Verified  Detail":
      - cell "Drainase Meluap Saat Hujan - Gg. Ahmad Yani":
        - strong: Drainase Meluap Saat Hujan - Gg. Ahmad Yani
      - cell "Kecamatan Kota Administrasi Jakarta Selatan, Jalan Kebonjati No. 525 Kota Administrasi Jakarta Barat, DKI Jakarta 97207"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Drainase Meluap Saat Hujan - Jl. Rungkut Industri Kecamatan Sibolga, Jl. Rajawali Timur No. 79 Pasuruan, NB 68811 Reported  Detail":
      - cell "Drainase Meluap Saat Hujan - Jl. Rungkut Industri":
        - strong: Drainase Meluap Saat Hujan - Jl. Rungkut Industri
      - cell "Kecamatan Sibolga, Jl. Rajawali Timur No. 79 Pasuruan, NB 68811"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Pencurian Kabel Telepon - Gang Surapati Kecamatan Kota Administrasi Jakarta Pusat, Jalan Sukajadi No. 32 Bengkulu, BE 32971 Verified  Detail":
      - cell "Pencurian Kabel Telepon - Gang Surapati":
        - strong: Pencurian Kabel Telepon - Gang Surapati
      - cell "Kecamatan Kota Administrasi Jakarta Pusat, Jalan Sukajadi No. 32 Bengkulu, BE 32971"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Aksi Vandalisme Fasilitas Umum - Jalan Ahmad Yani Kecamatan Kota Administrasi Jakarta Barat, Jl. Gedebage Selatan No. 28 Salatiga, ST 73894 Verified  Detail":
      - cell "Aksi Vandalisme Fasilitas Umum - Jalan Ahmad Yani":
        - strong: Aksi Vandalisme Fasilitas Umum - Jalan Ahmad Yani
      - cell "Kecamatan Kota Administrasi Jakarta Barat, Jl. Gedebage Selatan No. 28 Salatiga, ST 73894"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Tumpukan Sampah Liar - Jalan Ciwastra Kecamatan Tangerang, Jalan Jend. Sudirman No. 02 Bitung, JB 84814 Reported  Detail":
      - cell "Tumpukan Sampah Liar - Jalan Ciwastra":
        - strong: Tumpukan Sampah Liar - Jalan Ciwastra
      - cell "Kecamatan Tangerang, Jalan Jend. Sudirman No. 02 Bitung, JB 84814"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Lampu Jalan Berkedip - Jalan Cikapayang Kecamatan Cimahi, Jl. Cikutra Timur No. 7 Jayapura, Aceh 58101 Verified  Detail":
      - cell "Lampu Jalan Berkedip - Jalan Cikapayang":
        - strong: Lampu Jalan Berkedip - Jalan Cikapayang
      - cell "Kecamatan Cimahi, Jl. Cikutra Timur No. 7 Jayapura, Aceh 58101"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Area Gelap Rawan Kriminalitas - Gang Jend. Sudirman Kecamatan Prabumulih, Gang Astana Anyar No. 8 Cimahi, BA 64195 Resolved  Detail":
      - cell "Area Gelap Rawan Kriminalitas - Gang Jend. Sudirman":
        - strong: Area Gelap Rawan Kriminalitas - Gang Jend. Sudirman
      - cell "Kecamatan Prabumulih, Gang Astana Anyar No. 8 Cimahi, BA 64195"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Gangguan Ketertiban Umum - Jl. Wonoayu Kecamatan Depok, Jalan Kutisari Selatan No. 28 Cirebon, Papua Barat 65819 In Progress  Detail":
      - cell "Gangguan Ketertiban Umum - Jl. Wonoayu":
        - strong: Gangguan Ketertiban Umum - Jl. Wonoayu
      - cell "Kecamatan Depok, Jalan Kutisari Selatan No. 28 Cirebon, Papua Barat 65819"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Tutup Got Pecah - Jalan Otto Iskandardinata Kecamatan Padangpanjang, Gg. Rungkut Industri No. 67 Palangkaraya, KB 87394 In Progress  Detail":
      - cell "Tutup Got Pecah - Jalan Otto Iskandardinata":
        - strong: Tutup Got Pecah - Jalan Otto Iskandardinata
      - cell "Kecamatan Padangpanjang, Gg. Rungkut Industri No. 67 Palangkaraya, KB 87394"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Penerangan Jalan Umum Mati - Jalan Veteran Kecamatan Medan, Jl. Siliwangi No. 99 Binjai, DI Yogyakarta 18645 Resolved  Detail":
      - cell "Penerangan Jalan Umum Mati - Jalan Veteran":
        - strong: Penerangan Jalan Umum Mati - Jalan Veteran
      - cell "Kecamatan Medan, Jl. Siliwangi No. 99 Binjai, DI Yogyakarta 18645"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Area Gelap Rawan Kriminalitas - Gg. Bangka Raya Kecamatan Meulaboh, Gang Pasteur No. 36 Bima, Kepulauan Bangka Belitung 53072 Verified  Detail":
      - cell "Area Gelap Rawan Kriminalitas - Gg. Bangka Raya":
        - strong: Area Gelap Rawan Kriminalitas - Gg. Bangka Raya
      - cell "Kecamatan Meulaboh, Gang Pasteur No. 36 Bima, Kepulauan Bangka Belitung 53072"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Saluran Air Mampet - Jl. Surapati Kecamatan Probolinggo, Gang HOS. Cokroaminoto No. 481 Purwokerto, Sumatera Barat 99335 Verified  Detail":
      - cell "Saluran Air Mampet - Jl. Surapati":
        - strong: Saluran Air Mampet - Jl. Surapati
      - cell "Kecamatan Probolinggo, Gang HOS. Cokroaminoto No. 481 Purwokerto, Sumatera Barat 99335"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Lampu Jalan Berkedip - Jl. Gedebage Selatan Kecamatan Parepare, Jl. Cikutra Barat No. 204 Blitar, DI Yogyakarta 10385 Verified  Detail":
      - cell "Lampu Jalan Berkedip - Jl. Gedebage Selatan":
        - strong: Lampu Jalan Berkedip - Jl. Gedebage Selatan
      - cell "Kecamatan Parepare, Jl. Cikutra Barat No. 204 Blitar, DI Yogyakarta 10385"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Sampah Menutup Saluran Air - Gg. Cempaka Kecamatan Ternate, Jl. Indragiri No. 0 Palopo, SS 86032 Reported  Detail":
      - cell "Sampah Menutup Saluran Air - Gg. Cempaka":
        - strong: Sampah Menutup Saluran Air - Gg. Cempaka
      - cell "Kecamatan Ternate, Jl. Indragiri No. 0 Palopo, SS 86032"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "TPS Melebihi Kapasitas - Jalan HOS. Cokroaminoto Kecamatan Jambi, Gang Sadang Serang No. 13 Salatiga, JT 81421 Resolved  Detail":
      - cell "TPS Melebihi Kapasitas - Jalan HOS. Cokroaminoto":
        - strong: TPS Melebihi Kapasitas - Jalan HOS. Cokroaminoto
      - cell "Kecamatan Jambi, Gang Sadang Serang No. 13 Salatiga, JT 81421"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Kabel Lampu Putus - Jl. Jakarta Kecamatan Tegal, Gg. Asia Afrika No. 68 Palu, DI Yogyakarta 11731 Reported  Detail":
      - cell "Kabel Lampu Putus - Jl. Jakarta":
        - strong: Kabel Lampu Putus - Jl. Jakarta
      - cell "Kecamatan Tegal, Gg. Asia Afrika No. 68 Palu, DI Yogyakarta 11731"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Jalan Bergelombang Bahayakan Motor - Jalan Indragiri Kecamatan Bengkulu, Jalan Rungkut Industri No. 4 Cilegon, Riau 27195 In Progress  Detail":
      - cell "Jalan Bergelombang Bahayakan Motor - Jalan Indragiri":
        - strong: Jalan Bergelombang Bahayakan Motor - Jalan Indragiri
      - cell "Kecamatan Bengkulu, Jalan Rungkut Industri No. 4 Cilegon, Riau 27195"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Laporan Kerumunan Mencurigakan - Gang Cihampelas Kecamatan Pasuruan, Gg. Kutisari Selatan No. 8 Subulussalam, KI 42342 In Progress  Detail":
      - cell "Laporan Kerumunan Mencurigakan - Gang Cihampelas":
        - strong: Laporan Kerumunan Mencurigakan - Gang Cihampelas
      - cell "Kecamatan Pasuruan, Gg. Kutisari Selatan No. 8 Subulussalam, KI 42342"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Sampah Menutup Saluran Air - Gg. Jakarta Kecamatan Sibolga, Gg. Dipatiukur No. 0 Langsa, SR 65249 Verified  Detail":
      - cell "Sampah Menutup Saluran Air - Gg. Jakarta":
        - strong: Sampah Menutup Saluran Air - Gg. Jakarta
      - cell "Kecamatan Sibolga, Gg. Dipatiukur No. 0 Langsa, SR 65249"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Aspal Mengelupas Parah - Gg. Wonoayu Kecamatan Palangkaraya, Jalan Kebonjati No. 536 Cilegon, YO 66740 In Progress  Detail":
      - cell "Aspal Mengelupas Parah - Gg. Wonoayu":
        - strong: Aspal Mengelupas Parah - Gg. Wonoayu
      - cell "Kecamatan Palangkaraya, Jalan Kebonjati No. 536 Cilegon, YO 66740"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Aspal Mengelupas Parah - Jalan Stasiun Wonokromo Kecamatan Purwokerto, Gg. Moch. Toha No. 054 Depok, KT 93794 Verified  Detail":
      - cell "Aspal Mengelupas Parah - Jalan Stasiun Wonokromo":
        - strong: Aspal Mengelupas Parah - Jalan Stasiun Wonokromo
      - cell "Kecamatan Purwokerto, Gg. Moch. Toha No. 054 Depok, KT 93794"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Lubang Besar di Tengah Jalan - Jalan Raya Ujungberung Kecamatan Tarakan, Jl. Raya Ujungberung No. 5 Sukabumi, SG 51885 Reported  Detail":
      - cell "Lubang Besar di Tengah Jalan - Jalan Raya Ujungberung":
        - strong: Lubang Besar di Tengah Jalan - Jalan Raya Ujungberung
      - cell "Kecamatan Tarakan, Jl. Raya Ujungberung No. 5 Sukabumi, SG 51885"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Gangguan Ketertiban Umum - Gg. Sukajadi Kecamatan Pontianak, Jl. KH Amin Jasuta No. 7 Bau-Bau, SG 53005 Resolved  Detail":
      - cell "Gangguan Ketertiban Umum - Gg. Sukajadi":
        - strong: Gangguan Ketertiban Umum - Gg. Sukajadi
      - cell "Kecamatan Pontianak, Jl. KH Amin Jasuta No. 7 Bau-Bau, SG 53005"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Drainase Meluap Saat Hujan - Jalan Sukajadi Kecamatan Pekanbaru, Jl. Rawamangun No. 08 Blitar, Maluku 49718 In Progress  Detail":
      - cell "Drainase Meluap Saat Hujan - Jalan Sukajadi":
        - strong: Drainase Meluap Saat Hujan - Jalan Sukajadi
      - cell "Kecamatan Pekanbaru, Jl. Rawamangun No. 08 Blitar, Maluku 49718"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Tumpukan Sampah Liar - Jl. Dipenogoro Kecamatan Ambon, Jl. Cikapayang No. 63 Bitung, PB 96089 In Progress  Detail":
      - cell "Tumpukan Sampah Liar - Jl. Dipenogoro":
        - strong: Tumpukan Sampah Liar - Jl. Dipenogoro
      - cell "Kecamatan Ambon, Jl. Cikapayang No. 63 Bitung, PB 96089"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Pencurian Kabel Telepon - Gg. Rumah Sakit Kecamatan Tarakan, Jl. Gardujati No. 14 Tanjungbalai, SN 20085 Verified  Detail":
      - cell "Pencurian Kabel Telepon - Gg. Rumah Sakit":
        - strong: Pencurian Kabel Telepon - Gg. Rumah Sakit
      - cell "Kecamatan Tarakan, Jl. Gardujati No. 14 Tanjungbalai, SN 20085"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Kabel Lampu Putus - Gang Waringin Kecamatan Bitung, Gg. Dipenogoro No. 6 Purwokerto, Sulawesi Tengah 70099 In Progress  Detail":
      - cell "Kabel Lampu Putus - Gang Waringin":
        - strong: Kabel Lampu Putus - Gang Waringin
      - cell "Kecamatan Bitung, Gg. Dipenogoro No. 6 Purwokerto, Sulawesi Tengah 70099"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Area Gelap Rawan Kriminalitas - Jl. W.R. Supratman Kecamatan Sawahlunto, Gang Asia Afrika No. 615 Kotamobagu, Bali 73000 In Progress  Detail":
      - cell "Area Gelap Rawan Kriminalitas - Jl. W.R. Supratman":
        - strong: Area Gelap Rawan Kriminalitas - Jl. W.R. Supratman
      - cell "Kecamatan Sawahlunto, Gang Asia Afrika No. 615 Kotamobagu, Bali 73000"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Tumpukan Sampah Liar - Jl. Jakarta Kecamatan Tidore Kepulauan, Jl. Cihampelas No. 77 Magelang, Kalimantan Barat 08687 Verified  Detail":
      - cell "Tumpukan Sampah Liar - Jl. Jakarta":
        - strong: Tumpukan Sampah Liar - Jl. Jakarta
      - cell "Kecamatan Tidore Kepulauan, Jl. Cihampelas No. 77 Magelang, Kalimantan Barat 08687"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Penerangan Jalan Umum Mati - Jl. Wonoayu Kecamatan Ambon, Gang Jamika No. 7 Tegal, Sulawesi Utara 23978 Verified  Detail":
      - cell "Penerangan Jalan Umum Mati - Jl. Wonoayu":
        - strong: Penerangan Jalan Umum Mati - Jl. Wonoayu
      - cell "Kecamatan Ambon, Gang Jamika No. 7 Tegal, Sulawesi Utara 23978"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Saluran Air Mampet - Gg. Jakarta Kecamatan Banjarbaru, Jl. Otto Iskandardinata No. 2 Tangerang, SU 66486 In Progress  Detail":
      - cell "Saluran Air Mampet - Gg. Jakarta":
        - strong: Saluran Air Mampet - Gg. Jakarta
      - cell "Kecamatan Banjarbaru, Jl. Otto Iskandardinata No. 2 Tangerang, SU 66486"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Lubang Besar di Tengah Jalan - Gang Sentot Alibasa Kecamatan Palopo, Gg. Wonoayu No. 54 Lubuklinggau, Sumatera Barat 55577 In Progress  Detail":
      - cell "Lubang Besar di Tengah Jalan - Gang Sentot Alibasa":
        - strong: Lubang Besar di Tengah Jalan - Gang Sentot Alibasa
      - cell "Kecamatan Palopo, Gg. Wonoayu No. 54 Lubuklinggau, Sumatera Barat 55577"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Lampu Jalan Berkedip - Gg. Abdul Muis Kecamatan Serang, Jl. Tebet Barat Dalam No. 3 Probolinggo, Jawa Tengah 90668 Verified  Detail":
      - cell "Lampu Jalan Berkedip - Gg. Abdul Muis":
        - strong: Lampu Jalan Berkedip - Gg. Abdul Muis
      - cell "Kecamatan Serang, Jl. Tebet Barat Dalam No. 3 Probolinggo, Jawa Tengah 90668"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Ambles di Dekat Drainase - Gg. S. Parman Kecamatan Tarakan, Jalan Siliwangi No. 182 Padang Sidempuan, Kalimantan Utara 14926 Reported  Detail":
      - cell "Ambles di Dekat Drainase - Gg. S. Parman":
        - strong: Ambles di Dekat Drainase - Gg. S. Parman
      - cell "Kecamatan Tarakan, Jalan Siliwangi No. 182 Padang Sidempuan, Kalimantan Utara 14926"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Penyumbatan Karena Sedimen - Jalan Jakarta Kecamatan Sorong, Gg. Lembong No. 269 Manado, NB 79410 Reported  Detail":
      - cell "Penyumbatan Karena Sedimen - Jalan Jakarta":
        - strong: Penyumbatan Karena Sedimen - Jalan Jakarta
      - cell "Kecamatan Sorong, Gg. Lembong No. 269 Manado, NB 79410"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Sampah Menutup Saluran Air - Gg. Astana Anyar Kecamatan Denpasar, Jl. Lembong No. 031 Bogor, Sulawesi Selatan 56266 In Progress  Detail":
      - cell "Sampah Menutup Saluran Air - Gg. Astana Anyar":
        - strong: Sampah Menutup Saluran Air - Gg. Astana Anyar
      - cell "Kecamatan Denpasar, Jl. Lembong No. 031 Bogor, Sulawesi Selatan 56266"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Jalan Bergelombang Bahayakan Motor - Jalan Otto Iskandardinata Kecamatan Malang, Gg. Raya Setiabudhi No. 493 Makassar, KS 66586 Reported  Detail":
      - cell "Jalan Bergelombang Bahayakan Motor - Jalan Otto Iskandardinata":
        - strong: Jalan Bergelombang Bahayakan Motor - Jalan Otto Iskandardinata
      - cell "Kecamatan Malang, Gg. Raya Setiabudhi No. 493 Makassar, KS 66586"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Tumpukan Sampah Liar - Gang Sadang Serang Kecamatan Pekanbaru, Gg. Moch. Toha No. 5 Cirebon, NB 30807 Verified  Detail":
      - cell "Tumpukan Sampah Liar - Gang Sadang Serang":
        - strong: Tumpukan Sampah Liar - Gang Sadang Serang
      - cell "Kecamatan Pekanbaru, Gg. Moch. Toha No. 5 Cirebon, NB 30807"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Gangguan Ketertiban Umum - Jl. Rajiman Kecamatan Langsa, Gg. Pasirkoja No. 7 Binjai, Kepulauan Bangka Belitung 55994 Verified  Detail":
      - cell "Gangguan Ketertiban Umum - Jl. Rajiman":
        - strong: Gangguan Ketertiban Umum - Jl. Rajiman
      - cell "Kecamatan Langsa, Gg. Pasirkoja No. 7 Binjai, Kepulauan Bangka Belitung 55994"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Lubang Besar di Tengah Jalan - Gang Raya Setiabudhi Kecamatan Prabumulih, Jalan Tubagus Ismail No. 9 Padang, Papua 59520 Resolved  Detail":
      - cell "Lubang Besar di Tengah Jalan - Gang Raya Setiabudhi":
        - strong: Lubang Besar di Tengah Jalan - Gang Raya Setiabudhi
      - cell "Kecamatan Prabumulih, Jalan Tubagus Ismail No. 9 Padang, Papua 59520"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Penerangan Jalan Umum Mati - Jl. Siliwangi Kecamatan Samarinda, Gg. Jend. Sudirman No. 05 Subulussalam, Aceh 38035 In Progress  Detail":
      - cell "Penerangan Jalan Umum Mati - Jl. Siliwangi":
        - strong: Penerangan Jalan Umum Mati - Jl. Siliwangi
      - cell "Kecamatan Samarinda, Gg. Jend. Sudirman No. 05 Subulussalam, Aceh 38035"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Tutup Got Pecah - Jl. Joyoboyo Kecamatan Medan, Jalan Sukabumi No. 5 Jayapura, KI 63254 Resolved  Detail":
      - cell "Tutup Got Pecah - Jl. Joyoboyo":
        - strong: Tutup Got Pecah - Jl. Joyoboyo
      - cell "Kecamatan Medan, Jalan Sukabumi No. 5 Jayapura, KI 63254"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Tutup Got Pecah - Jl. K.H. Wahid Hasyim Kecamatan Tomohon, Gg. Cempaka No. 81 Pangkalpinang, JT 77758 Verified  Detail":
      - cell "Tutup Got Pecah - Jl. K.H. Wahid Hasyim":
        - strong: Tutup Got Pecah - Jl. K.H. Wahid Hasyim
      - cell "Kecamatan Tomohon, Gg. Cempaka No. 81 Pangkalpinang, JT 77758"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Area Gelap Rawan Kriminalitas - Gang Suryakencana Kecamatan Malang, Jl. Rumah Sakit No. 80 Solok, Jambi 96570 Verified  Detail":
      - cell "Area Gelap Rawan Kriminalitas - Gang Suryakencana":
        - strong: Area Gelap Rawan Kriminalitas - Gang Suryakencana
      - cell "Kecamatan Malang, Jl. Rumah Sakit No. 80 Solok, Jambi 96570"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Penerangan Jalan Umum Mati - Jalan Raya Ujungberung Kecamatan Padangpanjang, Gang Rajawali Barat No. 0 Tidore Kepulauan, MA 99101 Resolved  Detail":
      - cell "Penerangan Jalan Umum Mati - Jalan Raya Ujungberung":
        - strong: Penerangan Jalan Umum Mati - Jalan Raya Ujungberung
      - cell "Kecamatan Padangpanjang, Gang Rajawali Barat No. 0 Tidore Kepulauan, MA 99101"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "TPS Melebihi Kapasitas - Jalan Merdeka Kecamatan Denpasar, Gg. Erlangga No. 384 Padangpanjang, SU 64608 Verified  Detail":
      - cell "TPS Melebihi Kapasitas - Jalan Merdeka":
        - strong: TPS Melebihi Kapasitas - Jalan Merdeka
      - cell "Kecamatan Denpasar, Gg. Erlangga No. 384 Padangpanjang, SU 64608"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Saluran Air Mampet - Gg. Astana Anyar Kecamatan Solok, Gg. W.R. Supratman No. 7 Subulussalam, MU 20598 Resolved  Detail":
      - cell "Saluran Air Mampet - Gg. Astana Anyar":
        - strong: Saluran Air Mampet - Gg. Astana Anyar
      - cell "Kecamatan Solok, Gg. W.R. Supratman No. 7 Subulussalam, MU 20598"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Aspal Mengelupas Parah - Jalan Jamika Kecamatan Surakarta, Jl. Moch. Toha No. 73 Banjarbaru, JK 30751 Resolved  Detail":
      - cell "Aspal Mengelupas Parah - Jalan Jamika":
        - strong: Aspal Mengelupas Parah - Jalan Jamika
      - cell "Kecamatan Surakarta, Jl. Moch. Toha No. 73 Banjarbaru, JK 30751"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Pencurian Kabel Telepon - Jalan Monginsidi Kecamatan Magelang, Gg. Moch. Ramdan No. 089 Pekalongan, Jawa Barat 46598 Resolved  Detail":
      - cell "Pencurian Kabel Telepon - Jalan Monginsidi":
        - strong: Pencurian Kabel Telepon - Jalan Monginsidi
      - cell "Kecamatan Magelang, Gg. Moch. Ramdan No. 089 Pekalongan, Jawa Barat 46598"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Penyumbatan Karena Sedimen - Jl. Gegerkalong Hilir Kecamatan Malang, Jalan Sukajadi No. 116 Langsa, DKI Jakarta 16226 Reported  Detail":
      - cell "Penyumbatan Karena Sedimen - Jl. Gegerkalong Hilir":
        - strong: Penyumbatan Karena Sedimen - Jl. Gegerkalong Hilir
      - cell "Kecamatan Malang, Jalan Sukajadi No. 116 Langsa, DKI Jakarta 16226"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Lampu Jalan Berkedip - Gang Indragiri Kecamatan Langsa, Gang W.R. Supratman No. 55 Kota Administrasi Jakarta Utara, Sumatera Barat 23809 Resolved  Detail":
      - cell "Lampu Jalan Berkedip - Gang Indragiri":
        - strong: Lampu Jalan Berkedip - Gang Indragiri
      - cell "Kecamatan Langsa, Gang W.R. Supratman No. 55 Kota Administrasi Jakarta Utara, Sumatera Barat 23809"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Sampah Menutup Saluran Air - Gang Gardujati Kecamatan Bandung, Jl. Pacuan Kuda No. 31 Padang Sidempuan, SG 11144 In Progress  Detail":
      - cell "Sampah Menutup Saluran Air - Gang Gardujati":
        - strong: Sampah Menutup Saluran Air - Gang Gardujati
      - cell "Kecamatan Bandung, Jl. Pacuan Kuda No. 31 Padang Sidempuan, SG 11144"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Pencurian Kabel Telepon - Jl. Rajiman Kecamatan Kota Administrasi Jakarta Timur, Gg. Siliwangi No. 990 Padangpanjang, NB 34470 Resolved  Detail":
      - cell "Pencurian Kabel Telepon - Jl. Rajiman":
        - strong: Pencurian Kabel Telepon - Jl. Rajiman
      - cell "Kecamatan Kota Administrasi Jakarta Timur, Gg. Siliwangi No. 990 Padangpanjang, NB 34470"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Lampu Jalan Berkedip - Jl. Cihampelas Kecamatan Tanjungpinang, Jalan Moch. Toha No. 9 Singkawang, Banten 04198 In Progress  Detail":
      - cell "Lampu Jalan Berkedip - Jl. Cihampelas":
        - strong: Lampu Jalan Berkedip - Jl. Cihampelas
      - cell "Kecamatan Tanjungpinang, Jalan Moch. Toha No. 9 Singkawang, Banten 04198"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Aksi Vandalisme Fasilitas Umum - Gg. Sukabumi Kecamatan Ternate, Jalan HOS. Cokroaminoto No. 35 Palembang, Sulawesi Selatan 91416 Reported  Detail":
      - cell "Aksi Vandalisme Fasilitas Umum - Gg. Sukabumi":
        - strong: Aksi Vandalisme Fasilitas Umum - Gg. Sukabumi
      - cell "Kecamatan Ternate, Jalan HOS. Cokroaminoto No. 35 Palembang, Sulawesi Selatan 91416"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Ambles di Dekat Drainase - Jl. Abdul Muis Kecamatan Balikpapan, Jl. Cihampelas No. 5 Kota Administrasi Jakarta Pusat, BE 44635 Verified  Detail":
      - cell "Ambles di Dekat Drainase - Jl. Abdul Muis":
        - strong: Ambles di Dekat Drainase - Jl. Abdul Muis
      - cell "Kecamatan Balikpapan, Jl. Cihampelas No. 5 Kota Administrasi Jakarta Pusat, BE 44635"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Gangguan Ketertiban Umum - Jalan Waringin Kecamatan Denpasar, Gg. Pelajar Pejuang No. 1 Bogor, DI Yogyakarta 96664 Reported  Detail":
      - cell "Gangguan Ketertiban Umum - Jalan Waringin":
        - strong: Gangguan Ketertiban Umum - Jalan Waringin
      - cell "Kecamatan Denpasar, Gg. Pelajar Pejuang No. 1 Bogor, DI Yogyakarta 96664"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Tumpukan Sampah Liar - Jalan Bangka Raya Kecamatan Tangerang Selatan, Gg. Kutisari Selatan No. 53 Medan, BE 62607 Resolved  Detail":
      - cell "Tumpukan Sampah Liar - Jalan Bangka Raya":
        - strong: Tumpukan Sampah Liar - Jalan Bangka Raya
      - cell "Kecamatan Tangerang Selatan, Gg. Kutisari Selatan No. 53 Medan, BE 62607"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Aspal Mengelupas Parah - Jl. Kebonjati Kecamatan Kota Administrasi Jakarta Selatan, Jalan Rawamangun No. 44 Medan, LA 18776 Reported  Detail":
      - cell "Aspal Mengelupas Parah - Jl. Kebonjati":
        - strong: Aspal Mengelupas Parah - Jl. Kebonjati
      - cell "Kecamatan Kota Administrasi Jakarta Selatan, Jalan Rawamangun No. 44 Medan, LA 18776"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Drainase Meluap Saat Hujan - Jl. Bangka Raya Kecamatan Purwokerto, Jl. Dipatiukur No. 43 Bandung, MA 28685 In Progress  Detail":
      - cell "Drainase Meluap Saat Hujan - Jl. Bangka Raya":
        - strong: Drainase Meluap Saat Hujan - Jl. Bangka Raya
      - cell "Kecamatan Purwokerto, Jl. Dipatiukur No. 43 Bandung, MA 28685"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Lubang Besar di Tengah Jalan - Gang Dipatiukur Kecamatan Kediri, Gang Rajawali Barat No. 4 Balikpapan, LA 20464 Verified  Detail":
      - cell "Lubang Besar di Tengah Jalan - Gang Dipatiukur":
        - strong: Lubang Besar di Tengah Jalan - Gang Dipatiukur
      - cell "Kecamatan Kediri, Gang Rajawali Barat No. 4 Balikpapan, LA 20464"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Bau Menyengat Sampah Menumpuk - Gang Raya Setiabudhi Kecamatan Lhokseumawe, Jalan R.E Martadinata No. 90 Payakumbuh, SU 73503 Reported  Detail":
      - cell "Bau Menyengat Sampah Menumpuk - Gang Raya Setiabudhi":
        - strong: Bau Menyengat Sampah Menumpuk - Gang Raya Setiabudhi
      - cell "Kecamatan Lhokseumawe, Jalan R.E Martadinata No. 90 Payakumbuh, SU 73503"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Area Gelap Rawan Kriminalitas - Jl. Stasiun Wonokromo Kecamatan Tasikmalaya, Gg. Lembong No. 712 Padang Sidempuan, JT 65765 Resolved  Detail":
      - cell "Area Gelap Rawan Kriminalitas - Jl. Stasiun Wonokromo":
        - strong: Area Gelap Rawan Kriminalitas - Jl. Stasiun Wonokromo
      - cell "Kecamatan Tasikmalaya, Gg. Lembong No. 712 Padang Sidempuan, JT 65765"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Jalan Bergelombang Bahayakan Motor - Gang Sukajadi Kecamatan Gorontalo, Jl. H.J Maemunah No. 87 Sukabumi, Sulawesi Selatan 95050 Verified  Detail":
      - cell "Jalan Bergelombang Bahayakan Motor - Gang Sukajadi":
        - strong: Jalan Bergelombang Bahayakan Motor - Gang Sukajadi
      - cell "Kecamatan Gorontalo, Jl. H.J Maemunah No. 87 Sukabumi, Sulawesi Selatan 95050"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Bau Menyengat Sampah Menumpuk - Gg. BKR Kecamatan Surabaya, Gang Ciumbuleuit No. 933 Tidore Kepulauan, KU 13491 Reported  Detail":
      - cell "Bau Menyengat Sampah Menumpuk - Gg. BKR":
        - strong: Bau Menyengat Sampah Menumpuk - Gg. BKR
      - cell "Kecamatan Surabaya, Gang Ciumbuleuit No. 933 Tidore Kepulauan, KU 13491"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Laporan Kerumunan Mencurigakan - Jl. Sukabumi Kecamatan Pekalongan, Jalan R.E Martadinata No. 299 Payakumbuh, JT 97082 In Progress  Detail":
      - cell "Laporan Kerumunan Mencurigakan - Jl. Sukabumi":
        - strong: Laporan Kerumunan Mencurigakan - Jl. Sukabumi
      - cell "Kecamatan Pekalongan, Jalan R.E Martadinata No. 299 Payakumbuh, JT 97082"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Kabel Lampu Putus - Jl. Kutai Kecamatan Pariaman, Gang Siliwangi No. 4 Depok, Riau 17869 Reported  Detail":
      - cell "Kabel Lampu Putus - Jl. Kutai":
        - strong: Kabel Lampu Putus - Jl. Kutai
      - cell "Kecamatan Pariaman, Gang Siliwangi No. 4 Depok, Riau 17869"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Lubang Besar di Tengah Jalan - Jl. Jend. Sudirman Kecamatan Padang Sidempuan, Gang Ciumbuleuit No. 7 Palopo, Gorontalo 75182 Verified  Detail":
      - cell "Lubang Besar di Tengah Jalan - Jl. Jend. Sudirman":
        - strong: Lubang Besar di Tengah Jalan - Jl. Jend. Sudirman
      - cell "Kecamatan Padang Sidempuan, Gang Ciumbuleuit No. 7 Palopo, Gorontalo 75182"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Aspal Mengelupas Parah - Jalan Cikutra Barat Kecamatan Bogor, Gang Cikutra Barat No. 7 Banjarbaru, BT 96967 Resolved  Detail":
      - cell "Aspal Mengelupas Parah - Jalan Cikutra Barat":
        - strong: Aspal Mengelupas Parah - Jalan Cikutra Barat
      - cell "Kecamatan Bogor, Gang Cikutra Barat No. 7 Banjarbaru, BT 96967"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Lampu Jalan Berkedip - Gang Siliwangi Kecamatan Tegal, Gang Rajawali Timur No. 9 Cimahi, Sulawesi Tengah 40232 In Progress  Detail":
      - cell "Lampu Jalan Berkedip - Gang Siliwangi":
        - strong: Lampu Jalan Berkedip - Gang Siliwangi
      - cell "Kecamatan Tegal, Gang Rajawali Timur No. 9 Cimahi, Sulawesi Tengah 40232"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Lampu Jalan Berkedip - Jl. Tebet Barat Dalam Kecamatan Kota Administrasi Jakarta Utara, Jl. Monginsidi No. 513 Meulaboh, SN 37207 Verified  Detail":
      - cell "Lampu Jalan Berkedip - Jl. Tebet Barat Dalam":
        - strong: Lampu Jalan Berkedip - Jl. Tebet Barat Dalam
      - cell "Kecamatan Kota Administrasi Jakarta Utara, Jl. Monginsidi No. 513 Meulaboh, SN 37207"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Tutup Got Pecah - Jl. Rajawali Timur Kecamatan Ternate, Gang K.H. Wahid Hasyim No. 990 Ambon, DI Yogyakarta 58813 Verified  Detail":
      - cell "Tutup Got Pecah - Jl. Rajawali Timur":
        - strong: Tutup Got Pecah - Jl. Rajawali Timur
      - cell "Kecamatan Ternate, Gang K.H. Wahid Hasyim No. 990 Ambon, DI Yogyakarta 58813"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Aksi Vandalisme Fasilitas Umum - Gang Tebet Barat Dalam Kecamatan Tomohon, Gg. Raya Setiabudhi No. 244 Meulaboh, Kalimantan Utara 38988 In Progress  Detail":
      - cell "Aksi Vandalisme Fasilitas Umum - Gang Tebet Barat Dalam":
        - strong: Aksi Vandalisme Fasilitas Umum - Gang Tebet Barat Dalam
      - cell "Kecamatan Tomohon, Gg. Raya Setiabudhi No. 244 Meulaboh, Kalimantan Utara 38988"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Bau Menyengat Sampah Menumpuk - Jalan Jend. Sudirman Kecamatan Tanjungbalai, Jl. Dipatiukur No. 549 Samarinda, Gorontalo 35570 Resolved  Detail":
      - cell "Bau Menyengat Sampah Menumpuk - Jalan Jend. Sudirman":
        - strong: Bau Menyengat Sampah Menumpuk - Jalan Jend. Sudirman
      - cell "Kecamatan Tanjungbalai, Jl. Dipatiukur No. 549 Samarinda, Gorontalo 35570"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Saluran Air Mampet - Jl. M.T Haryono Kecamatan Dumai, Gang Sentot Alibasa No. 163 Surakarta, MA 65801 Resolved  Detail":
      - cell "Saluran Air Mampet - Jl. M.T Haryono":
        - strong: Saluran Air Mampet - Jl. M.T Haryono
      - cell "Kecamatan Dumai, Gang Sentot Alibasa No. 163 Surakarta, MA 65801"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Sampah Menutup Saluran Air - Jl. Ir. H. Djuanda Kecamatan Sungai Penuh, Jl. S. Parman No. 552 Bandar Lampung, SG 79836 In Progress  Detail":
      - cell "Sampah Menutup Saluran Air - Jl. Ir. H. Djuanda":
        - strong: Sampah Menutup Saluran Air - Jl. Ir. H. Djuanda
      - cell "Kecamatan Sungai Penuh, Jl. S. Parman No. 552 Bandar Lampung, SG 79836"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Penyumbatan Karena Sedimen - Jalan Rawamangun Kecamatan Palembang, Gang Rumah Sakit No. 496 Ambon, Kalimantan Barat 82551 Verified  Detail":
      - cell "Penyumbatan Karena Sedimen - Jalan Rawamangun":
        - strong: Penyumbatan Karena Sedimen - Jalan Rawamangun
      - cell "Kecamatan Palembang, Gang Rumah Sakit No. 496 Ambon, Kalimantan Barat 82551"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "Penerangan Jalan Umum Mati - Jl. Ahmad Yani Kecamatan Makassar, Jl. Gardujati No. 308 Sukabumi, KS 70190 In Progress  Detail":
      - cell "Penerangan Jalan Umum Mati - Jl. Ahmad Yani":
        - strong: Penerangan Jalan Umum Mati - Jl. Ahmad Yani
      - cell "Kecamatan Makassar, Jl. Gardujati No. 308 Sukabumi, KS 70190"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "Saluran Air Mampet - Gg. Yos Sudarso Kecamatan Pekalongan, Jl. M.T Haryono No. 112 Bengkulu, Sulawesi Tengah 47901 Reported  Detail":
      - cell "Saluran Air Mampet - Gg. Yos Sudarso":
        - strong: Saluran Air Mampet - Gg. Yos Sudarso
      - cell "Kecamatan Pekalongan, Jl. M.T Haryono No. 112 Bengkulu, Sulawesi Tengah 47901"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Banjir di Jalan Merdeka Jl. Merdeka No. 1 Reported  Detail":
      - cell "Banjir di Jalan Merdeka":
        - strong: Banjir di Jalan Merdeka
      - cell "Jl. Merdeka No. 1"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "penyumbatan sampah Jl. Merdeka No. 1 Reported  Detail":
      - cell "penyumbatan sampah":
        - strong: penyumbatan sampah
      - cell "Jl. Merdeka No. 1"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Banjir di Jalan Merdeka Jl. Merdeka No. 1 Resolved  Detail":
      - cell "Banjir di Jalan Merdeka":
        - strong: Banjir di Jalan Merdeka
      - cell "Jl. Merdeka No. 1"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "Banjir di Rs abdul muluk Jl. Merdeka No. 1 Reported  Detail":
      - cell "Banjir di Rs abdul muluk":
        - strong: Banjir di Rs abdul muluk
      - cell "Jl. Merdeka No. 1"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Banjir di natar city Jl. Merdeka No. 1 In Progress  Detail":
      - cell "Banjir di natar city":
        - strong: Banjir di natar city
      - cell "Jl. Merdeka No. 1"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "terrrss sss Reported  Detail":
      - cell "terrrss":
        - strong: terrrss
      - cell "sss"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "lll sss Reported  Detail":
      - cell "lll":
        - strong: lll
      - cell "sss"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "asdasd asdasdasd Resolved  Detail":
      - cell "asdasd":
        - strong: asdasd
      - cell "asdasdasd"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "sssd sdsd Resolved  Detail":
      - cell "sssd":
        - strong: sssd
      - cell "sdsd"
      - cell "Resolved"
      - cell " Detail":
        - button " Detail"
    - row "banjir lampung jl.abdul muluk Verified  Detail":
      - cell "banjir lampung":
        - strong: banjir lampung
      - cell "jl.abdul muluk"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "test dep lab jaringan Reported  Detail":
      - cell "test dep":
        - strong: test dep
      - cell "lab jaringan"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Gangguan Ketertiban Umum - Jl. Pasteur Kecamatan Padang, Jl. Kiaracondong No. 157 Bitung, SU 22668 Verified  Detail":
      - cell "Gangguan Ketertiban Umum - Jl. Pasteur":
        - strong: Gangguan Ketertiban Umum - Jl. Pasteur
      - cell "Kecamatan Padang, Jl. Kiaracondong No. 157 Bitung, SU 22668"
      - cell "Verified"
      - cell " Detail":
        - button " Detail"
    - row "banjir lampung bbb In Progress  Detail":
      - cell "banjir lampung":
        - strong: banjir lampung
      - cell "bbb"
      - cell "In Progress"
      - cell " Detail":
        - button " Detail"
    - row "MASALAHNYA ADA DI KAMUU!! BAKAUUU Reported  Detail":
      - cell "MASALAHNYA ADA DI KAMUU!!":
        - strong: MASALAHNYA ADA DI KAMUU!!
      - cell "BAKAUUU"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
    - row "Testt yahhhh Jl.ssss.ooo Reported  Detail":
      - cell "Testt yahhhh":
        - strong: Testt yahhhh
      - cell "Jl.ssss.ooo"
      - cell "Reported"
      - cell " Detail":
        - button " Detail"
- contentinfo: TheoTown City · Sistem Manajemen Kota Terpadu PIE 1416 · Teknologi Rekayasa Internet
```

# Test source

```ts
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
  671 |         await expect(statusChartCanvas).toBeVisible({ timeout: 15000 });
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
> 751 |         await expect(searchInput).toBeVisible({ timeout: 10000 });
      |                                   ^ Error: expect(locator).toBeVisible() failed
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
  772 |         const responsePromise = page.waitForResponse(
  773 |             (response) => response.url().includes('/dashboard/search/?q=' + searchKeyword) && response.status() === 200,
  774 |             { timeout: 15000 }
  775 |         );
  776 | 
  777 |         // Ketik keyword pencarian secara berurutan
  778 |         await searchInput.click();
  779 |         await searchInput.fill('');
  780 |         await searchInput.type(searchKeyword, { delay: 100 });
  781 | 
  782 |         // Tunggu hingga respon AJAX selesai diterima
  783 |         const searchResponse = await responsePromise;
  784 | 
  785 |         // -------------------------------------------------------------------
  786 |         // LANGKAH 5: Verifikasi respons AJAX berhasil
  787 |         // -------------------------------------------------------------------
  788 |         expect(searchResponse.status()).toBe(200);
  789 | 
  790 |         // Parse data JSON dari respons
  791 |         const responseData = await searchResponse.json();
  792 |         console.log(`[UI-02] Hasil pencarian "${searchKeyword}": ${Array.isArray(responseData) ? responseData.length : (responseData.results?.length || 0)} item`);
  793 | 
  794 |         // -------------------------------------------------------------------
  795 |         // LANGKAH 6: Tunggu tabel diperbarui dan verifikasi
  796 |         // -------------------------------------------------------------------
  797 |         // Beri waktu untuk DOM update setelah data diterima
  798 |         await page.waitForTimeout(1000);
  799 | 
  800 |         // Hitung jumlah baris setelah pencarian
  801 |         const filteredRowCount = await tableBody.locator('tr').count();
  802 |         console.log(`[UI-02] Jumlah baris setelah filter: ${filteredRowCount}`);
  803 | 
  804 |         // Verifikasi: jumlah baris setelah filter harus sesuai dengan data respons
  805 |         // Jika ada hasil, baris harus > 0
  806 |         const resultList = Array.isArray(responseData) ? responseData : (responseData.results || []);
  807 |         if (resultList.length > 0) {
  808 |             expect(filteredRowCount).toBeGreaterThan(0);
  809 |             expect(filteredRowCount).toBe(resultList.length);
  810 |         }
  811 | 
  812 |         console.log('[UI-02] ✅ Live search berfungsi: input → AJAX → tabel terupdate');
  813 |     });
  814 | 
  815 |     // =========================================================================
  816 |     // TEST CASE: UI-03
  817 |     // =========================================================================
  818 |     // JUDUL:
  819 |     //   Pagination: Daftar laporan publik (Feed Kota) dibatasi maks 10 item
  820 |     //
  821 |     // SKENARIO:
  822 |     //   Dengan asumsi ada 25+ laporan di database, navigasi ke SPA #dashboard,
  823 |     //   klik tab "Feed Kota (Publik)", hitung jumlah kartu laporan di
  824 |     //   #listContainer, dan pastikan tidak lebih dari 10. Juga verifikasi
  825 |     //   bahwa kontrol pagination ada di #paginationContainer.
  826 |     //
  827 |     // KONSEP TEKNIS:
  828 |     //   - Pagination server-side: API mengembalikan data terpaginasi
  829 |     //   - app.js menggunakan page_size=10 sebagai default
  830 |     //   - totalPages dihitung dari: Math.ceil(count / 10)
  831 |     //
  832 |     // REFERENSI KODE:
  833 |     //   app.js baris 64: const response = await requestAPI(`/report/?tab=${tab}&page=${page}`)
  834 |     //   app.js baris 69: totalPages = Math.ceil(count / 10) || 1;
  835 |     //   app.js baris 230-264: renderPagination() → membuat navigasi halaman
  836 |     // =========================================================================
  837 |     test('UI-03: Pagination Feed Kota — maks 10 kartu, kontrol pagination muncul', async ({ page }) => {
  838 |         // -------------------------------------------------------------------
  839 |         // LANGKAH 1: Siapkan environment (navigasi ke SPA dan setup mock)
  840 |         // -------------------------------------------------------------------
  841 |         await page.goto(SPA_URL);
  842 |         await mockSPAApiUrl(page);
  843 | 
  844 |         // -------------------------------------------------------------------
  845 |         // LANGKAH 2: Simulasi login dengan menyimpan token
  846 |         // -------------------------------------------------------------------
  847 |         // Untuk test ini, kita perlu berada dalam state "login" agar bisa
  848 |         // mengakses dashboard. Kita gunakan mock API untuk token dan data.
  849 |         // -------------------------------------------------------------------
  850 | 
  851 |         // Hapus route interceptor sebelumnya
```