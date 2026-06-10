// ============================================================
// router.js - Hash-Based Routing SPA (Playful Theme)
// ============================================================

const routes = {

    // ---- Halaman Login ----
    '#login': `
        <div class="row align-items-center justify-content-center g-4" style="min-height:78vh;">

            <!-- Ilustrasi kiri -->
            <div class="col-lg-6 d-none d-lg-flex justify-content-center">
                <div style="position:relative;width:380px;height:380px;">

                    <!-- Bangunan kota kartun -->
                    <svg width="380" height="340" viewBox="0 0 380 340" xmlns="http://www.w3.org/2000/svg">
                        <!-- Tanah -->
                        <ellipse cx="190" cy="320" rx="170" ry="18" fill="#a6e3e9" opacity="0.5"/>

                        <!-- Gedung kiri belakang -->
                        <rect x="20" y="160" width="70" height="160" rx="6" fill="#cbf1f5"/>
                        <rect x="20" y="148" width="70" height="18" rx="4" fill="#71c9ce"/>
                        <!-- Jendela gedung kiri -->
                        <rect x="30" y="170" width="14" height="14" rx="3" fill="#a6e3e9"/>
                        <rect x="52" y="170" width="14" height="14" rx="3" fill="#a6e3e9"/>
                        <rect x="30" y="196" width="14" height="14" rx="3" fill="white" opacity="0.8"/>
                        <rect x="52" y="196" width="14" height="14" rx="3" fill="#a6e3e9"/>
                        <rect x="30" y="222" width="14" height="14" rx="3" fill="#a6e3e9"/>
                        <rect x="52" y="222" width="14" height="14" rx="3" fill="white" opacity="0.8"/>

                        <!-- Gedung kanan belakang -->
                        <rect x="290" y="140" width="75" height="180" rx="6" fill="#cbf1f5"/>
                        <rect x="290" y="128" width="75" height="18" rx="4" fill="#71c9ce"/>
                        <!-- Antena -->
                        <rect x="326" y="108" width="4" height="24" rx="2" fill="#71c9ce"/>
                        <circle cx="328" cy="106" r="5" fill="#fbbf24"/>
                        <!-- Jendela gedung kanan -->
                        <rect x="300" y="150" width="14" height="14" rx="3" fill="white" opacity="0.8"/>
                        <rect x="322" y="150" width="14" height="14" rx="3" fill="#a6e3e9"/>
                        <rect x="344" y="150" width="12" height="14" rx="3" fill="white" opacity="0.8"/>
                        <rect x="300" y="176" width="14" height="14" rx="3" fill="#a6e3e9"/>
                        <rect x="322" y="176" width="14" height="14" rx="3" fill="white" opacity="0.8"/>
                        <rect x="344" y="176" width="12" height="14" rx="3" fill="#a6e3e9"/>

                        <!-- Gedung tengah utama (animasi float) -->
                        <g style="animation:float 4s ease-in-out infinite;">
                            <rect x="110" y="80" width="160" height="240" rx="10" fill="white"/>
                            <rect x="110" y="80" width="160" height="30" rx="10" fill="#71c9ce"/>
                            <!-- Nama gedung -->
                            <text x="190" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="white" font-family="Nunito,sans-serif">SMART CITY</text>
                            <!-- Jendela grid -->
                            <rect x="125" y="124" width="22" height="20" rx="4" fill="#e3fdfd"/>
                            <rect x="157" y="124" width="22" height="20" rx="4" fill="#cbf1f5"/>
                            <rect x="189" y="124" width="22" height="20" rx="4" fill="#e3fdfd"/>
                            <rect x="221" y="124" width="22" height="20" rx="4" fill="white" opacity="0.6"/>
                            <rect x="125" y="154" width="22" height="20" rx="4" fill="white" opacity="0.6"/>
                            <rect x="157" y="154" width="22" height="20" rx="4" fill="#e3fdfd"/>
                            <rect x="189" y="154" width="22" height="20" rx="4" fill="#cbf1f5"/>
                            <rect x="221" y="154" width="22" height="20" rx="4" fill="#e3fdfd"/>
                            <rect x="125" y="184" width="22" height="20" rx="4" fill="#cbf1f5"/>
                            <rect x="157" y="184" width="22" height="20" rx="4" fill="white" opacity="0.6"/>
                            <rect x="189" y="184" width="22" height="20" rx="4" fill="#e3fdfd"/>
                            <rect x="221" y="184" width="22" height="20" rx="4" fill="#cbf1f5"/>
                            <rect x="125" y="214" width="22" height="20" rx="4" fill="#e3fdfd"/>
                            <rect x="157" y="214" width="22" height="20" rx="4" fill="#cbf1f5"/>
                            <rect x="189" y="214" width="22" height="20" rx="4" fill="white" opacity="0.6"/>
                            <rect x="221" y="214" width="22" height="20" rx="4" fill="#e3fdfd"/>
                            <!-- Pintu -->
                            <rect x="168" y="278" width="44" height="42" rx="6" fill="#a6e3e9"/>
                            <circle cx="206" cy="300" r="3" fill="#71c9ce"/>
                        </g>

                        <!-- Pohon kiri -->
                        <g style="animation:float 4s ease-in-out infinite 0.5s;">
                            <rect x="66" y="270" width="10" height="50" rx="3" fill="#a6e3e9"/>
                            <circle cx="71" cy="255" r="24" fill="#71c9ce"/>
                            <circle cx="56" cy="265" r="16" fill="#71c9ce"/>
                            <circle cx="86" cy="265" r="16" fill="#71c9ce"/>
                        </g>

                        <!-- Pohon kanan -->
                        <g style="animation:float 4s ease-in-out infinite 1.5s;">
                            <rect x="300" y="275" width="10" height="45" rx="3" fill="#a6e3e9"/>
                            <circle cx="305" cy="260" r="22" fill="#71c9ce"/>
                            <circle cx="291" cy="270" r="14" fill="#71c9ce"/>
                            <circle cx="319" cy="270" r="14" fill="#71c9ce"/>
                        </g>

                        <!-- Matahari -->
                        <g style="animation:float 6s ease-in-out infinite 0s;">
                            <circle cx="340" cy="45" r="28" fill="#fbbf24" opacity="0.9"/>
                            <!-- Sinar matahari -->
                            <line x1="340" y1="10" x2="340" y2="2" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
                            <line x1="365" y1="20" x2="371" y2="14" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
                            <line x1="375" y1="45" x2="383" y2="45" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
                            <line x1="365" y1="70" x2="371" y2="76" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
                            <line x1="315" y1="20" x2="309" y2="14" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
                            <line x1="305" y1="45" x2="297" y2="45" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
                            <!-- Wajah matahari -->
                            <circle cx="332" cy="40" r="3" fill="white" opacity="0.7"/>
                            <circle cx="348" cy="40" r="3" fill="white" opacity="0.7"/>
                            <path d="M 333 51 Q 340 57 347 51" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
                        </g>

                        <!-- Burung terbang -->
                        <g style="animation:birdFly 6s ease-in-out infinite;">
                            <path d="M 50 60 Q 58 54 66 60" stroke="#71c9ce" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                            <path d="M 70 55 Q 78 49 86 55" stroke="#71c9ce" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                        </g>
                        <g style="animation:birdFly 6s ease-in-out infinite 2s;">
                            <path d="M 160 30 Q 167 24 174 30" stroke="#a6e3e9" stroke-width="2" fill="none" stroke-linecap="round"/>
                            <path d="M 178 26 Q 185 20 192 26" stroke="#a6e3e9" stroke-width="2" fill="none" stroke-linecap="round"/>
                        </g>

                        <!-- Mobil lucu -->
                        <g style="animation:carDrive 8s linear infinite;">
                            <rect x="0" y="300" width="60" height="28" rx="8" fill="#71c9ce"/>
                            <rect x="8" y="288" width="40" height="18" rx="6" fill="#a6e3e9"/>
                            <rect x="12" y="291" width="14" height="10" rx="3" fill="#e3fdfd"/>
                            <rect x="30" y="291" width="14" height="10" rx="3" fill="#e3fdfd"/>
                            <circle cx="14" cy="330" r="7" fill="#1a4a4e"/>
                            <circle cx="14" cy="330" r="4" fill="#cbf1f5"/>
                            <circle cx="46" cy="330" r="7" fill="#1a4a4e"/>
                            <circle cx="46" cy="330" r="4" fill="#cbf1f5"/>
                        </g>
                    </svg>

                    <!-- Teks motivasi -->
                    <div style="text-align:center;margin-top:-20px;">
                        <p style="font-family:'Fredoka',sans-serif;font-size:1.3rem;font-weight:600;color:#71c9ce;">
                            Kota yang lebih baik<br>dimulai dari laporan kamu! 🏙️
                        </p>
                    </div>
                </div>
            </div>

            <!-- Form login -->
            <div class="col-md-8 col-lg-4">
                <div class="fun-card p-4">
                    <div class="text-center mb-4">
                        <div style="font-size:3rem;line-height:1;animation:logoBounce 3s ease-in-out infinite;">🏢</div>
                        <h4 style="font-family:'Fredoka',sans-serif;font-weight:700;color:var(--text);margin-top:8px;">
                            Selamat Datang!
                        </h4>
                        <p style="color:var(--muted);font-size:0.85rem;font-weight:600;">
                            Smart City Portal · PIE 1416
                        </p>
                    </div>

                    <form id="loginForm">
                        <div class="mb-3">
                            <label class="form-label">Username</label>
                            <div style="position:relative;">
                                <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--c4);font-size:1rem;">👤</span>
                                <input type="text" id="loginUsername"
                                    class="form-control" style="padding-left:40px;"
                                    placeholder="Masukkan username" required>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Password</label>
                            <div style="position:relative;">
                                <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--c4);font-size:1rem;">🔒</span>
                                <input type="password" id="loginPassword"
                                    class="form-control" style="padding-left:40px;"
                                    placeholder="Masukkan password" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100" style="padding:0.7rem;font-size:1rem;">
                            <i class="bi bi-lightning-charge me-1"></i>Masuk Sekarang
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `,

    // ---- Halaman Dashboard ----
    '#dashboard': `
        <div class="row g-4">

            <!-- Kolom Kiri - Sidebar -->
            <aside class="col-12 col-lg-3">
                <div class="fun-card p-3 sticky-top" style="top:80px;">

                    <!-- Ilustrasi kartun kecil di sidebar -->
                    <div class="text-center mb-3">
                        <svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                            <!-- Bangunan mini -->
                            <rect x="10" y="30" width="28" height="50" rx="4" fill="#cbf1f5"/>
                            <rect x="10" y="22" width="28" height="12" rx="3" fill="#71c9ce"/>
                            <rect x="16" y="36" width="8" height="8" rx="2" fill="white" opacity="0.8"/>
                            <rect x="28" y="36" width="8" height="8" rx="2" fill="#a6e3e9"/>
                            <rect x="16" y="52" width="8" height="8" rx="2" fill="#a6e3e9"/>
                            <rect x="28" y="52" width="8" height="8" rx="2" fill="white" opacity="0.8"/>
                            <rect x="18" y="65" width="14" height="15" rx="3" fill="#a6e3e9"/>
                            <!-- Gedung tengah -->
                            <g style="animation:float 3s ease-in-out infinite;">
                                <rect x="46" y="15" width="30" height="65" rx="5" fill="white" style="filter:drop-shadow(0 4px 8px rgba(113,201,206,0.3))"/>
                                <rect x="46" y="15" width="30" height="12" rx="5" fill="#71c9ce"/>
                                <rect x="51" y="34" width="8" height="7" rx="2" fill="#e3fdfd"/>
                                <rect x="63" y="34" width="8" height="7" rx="2" fill="#cbf1f5"/>
                                <rect x="51" y="48" width="8" height="7" rx="2" fill="#cbf1f5"/>
                                <rect x="63" y="48" width="8" height="7" rx="2" fill="#e3fdfd"/>
                                <rect x="51" y="62" width="8" height="7" rx="2" fill="#e3fdfd"/>
                                <rect x="63" y="62" width="8" height="7" rx="2" fill="#cbf1f5"/>
                            </g>
                            <!-- Gedung kanan -->
                            <rect x="84" y="38" width="26" height="42" rx="4" fill="#cbf1f5"/>
                            <rect x="84" y="30" width="26" height="12" rx="3" fill="#a6e3e9"/>
                            <rect x="89" y="46" width="7" height="7" rx="2" fill="white" opacity="0.8"/>
                            <rect x="100" y="46" width="7" height="7" rx="2" fill="#71c9ce" opacity="0.6"/>
                            <rect x="89" y="60" width="7" height="7" rx="2" fill="#71c9ce" opacity="0.6"/>
                            <rect x="100" y="60" width="7" height="7" rx="2" fill="white" opacity="0.8"/>
                            <!-- Tanah -->
                            <ellipse cx="60" cy="82" rx="55" ry="6" fill="#a6e3e9" opacity="0.4"/>
                        </svg>
                    </div>

                    <!-- Tombol Laporan Baru -->
                    <div class="d-grid mb-3">
                        <button class="btn btn-primary text-start rounded-3 py-2"
                            data-bs-toggle="modal" data-bs-target="#reportModal"
                            onclick="setupModalButtons()">
                            <i class="bi bi-plus-circle-fill me-2"></i>Laporan Baru
                        </button>
                    </div>

                    <!-- Rekap Status -->
                    <h6 style="font-weight:800;font-size:0.75rem;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px;">
                        📊 Rekap Laporan Saya
                    </h6>
                    <div class="d-flex flex-column gap-2 mb-3">
                        <div class="stat-box">
                            <span style="font-size:0.85rem;font-weight:700;">
                                📝 Draft
                            </span>
                            <span class="stat-num" id="statDraft">0</span>
                        </div>
                        <div class="stat-box">
                            <span style="font-size:0.85rem;font-weight:700;">
                                ⚙️ Diproses
                            </span>
                            <span class="stat-num" id="statDiproses">0</span>
                        </div>
                        <div class="stat-box">
                            <span style="font-size:0.85rem;font-weight:700;">
                                ✅ Selesai
                            </span>
                            <span class="stat-num" id="statSelesai">0</span>
                        </div>
                    </div>

                    <hr style="border-color:var(--border);"/>
                    <button class="btn btn-outline-secondary btn-sm w-100" onclick="logout()">
                        <i class="bi bi-box-arrow-right me-2"></i>Keluar
                    </button>
                </div>
            </aside>

            <!-- Kolom Tengah - Konten Utama -->
            <section class="col-12 col-lg-6">

                <!-- Header dashboard dengan ilustrasi -->
                <div class="fun-card p-3 mb-3 d-flex align-items-center justify-content-between"
                    style="background:linear-gradient(135deg,#cbf1f5,#e3fdfd);">
                    <div>
                        <h5 style="font-family:'Fredoka',sans-serif;font-weight:700;color:var(--text);margin:0;">
                            Dashboard Laporan 🏙️
                        </h5>
                        <p style="color:var(--muted);font-size:0.82rem;font-weight:600;margin:2px 0 0;">
                            Pantau dan kelola laporanmu
                        </p>
                    </div>
                    <svg width="72" height="56" viewBox="0 0 72 56" style="flex-shrink:0;" class="float">
                        <rect x="4" y="20" width="18" height="36" rx="3" fill="#71c9ce" opacity="0.7"/>
                        <rect x="27" y="8" width="20" height="48" rx="3" fill="#71c9ce"/>
                        <rect x="50" y="28" width="18" height="28" rx="3" fill="#71c9ce" opacity="0.7"/>
                        <rect x="4" y="56" width="64" height="3" rx="1" fill="#a6e3e9"/>
                        <!-- Windows -->
                        <rect x="8" y="26" width="6" height="5" rx="1" fill="white" opacity="0.7"/>
                        <rect x="16" y="26" width="4" height="5" rx="1" fill="white" opacity="0.5"/>
                        <rect x="31" y="14" width="6" height="5" rx="1" fill="white" opacity="0.7"/>
                        <rect x="39" y="14" width="5" height="5" rx="1" fill="white" opacity="0.5"/>
                        <rect x="31" y="26" width="6" height="5" rx="1" fill="white" opacity="0.5"/>
                        <rect x="39" y="26" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
                    </svg>
                </div>

                <!-- Tab navigasi -->
                <div class="tab-pill">
                    <button class="nav-link active" id="tabMyReports" onclick="switchTab('my_reports')">
                        <i class="bi bi-person-lines-fill me-1"></i>Laporan Saya
                    </button>
                    <button class="nav-link" id="tabFeed" onclick="switchTab('feed')">
                        <i class="bi bi-globe2 me-1"></i>Feed Kota
                    </button>
                </div>

                <!-- Container kartu laporan -->
                <div class="row g-3" id="listContainer">
                    <div class="col-12 text-center p-5">
                        <div style="font-size:3rem;animation:float 2s ease-in-out infinite;">🏙️</div>
                        <p style="color:var(--muted);font-weight:700;margin-top:8px;">Memuat data...</p>
                    </div>
                </div>

                <!-- Container pagination -->
                <div class="mt-3" id="paginationContainer"></div>

            </section>

            <!-- Kolom Kanan - Pengumuman -->
            <aside class="col-12 col-lg-3">
                <div class="fun-card p-3 sticky-top" style="top:80px;">
                    <h6 style="font-weight:800;font-size:0.75rem;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px;">
                        📢 Pengumuman
                    </h6>
                    <div class="d-flex flex-column gap-2">
                        <div style="padding:10px 14px;border-radius:12px;background:var(--c1);border:2px solid var(--border);font-size:0.82rem;font-weight:600;color:var(--text);">
                            🔧 Pemeliharaan sistem setiap Minggu 00.00–02.00 WIB
                        </div>
                        <div style="padding:10px 14px;border-radius:12px;background:var(--c1);border:2px solid var(--border);font-size:0.82rem;font-weight:600;color:var(--text);">
                            🔔 Lab 12: implementasi CRUD Laporan via API
                        </div>
                        <div style="padding:10px 14px;border-radius:12px;background:var(--c1);border:2px solid var(--border);font-size:0.82rem;font-weight:600;color:var(--text);">
                            🔑 Gunakan token JWT untuk setiap request ke backend
                        </div>
                    </div>

                    <!-- Ilustrasi kartun kecil di bawah pengumuman -->
                    <div class="text-center mt-3">
                        <svg width="100" height="90" viewBox="0 0 100 90" class="float2">
                            <!-- Karakter warga -->
                            <circle cx="50" cy="20" r="16" fill="#fbbf24"/>
                            <circle cx="44" cy="17" r="3" fill="white"/>
                            <circle cx="56" cy="17" r="3" fill="white"/>
                            <circle cx="44" cy="17" r="1.5" fill="#1a4a4e"/>
                            <circle cx="56" cy="17" r="1.5" fill="#1a4a4e"/>
                            <path d="M 43 26 Q 50 32 57 26" stroke="#1a4a4e" stroke-width="2" fill="none" stroke-linecap="round"/>
                            <!-- Badan -->
                            <rect x="34" y="36" width="32" height="30" rx="10" fill="#71c9ce"/>
                            <!-- Tangan kiri -->
                            <rect x="20" y="38" width="16" height="10" rx="5" fill="#71c9ce"/>
                            <circle cx="18" cy="43" r="6" fill="#fbbf24"/>
                            <!-- Tangan kanan (pegang dokumen) -->
                            <rect x="64" y="36" width="16" height="10" rx="5" fill="#71c9ce"/>
                            <!-- Dokumen -->
                            <rect x="74" y="28" width="22" height="28" rx="4" fill="white" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>
                            <rect x="78" y="33" width="14" height="2" rx="1" fill="#a6e3e9"/>
                            <rect x="78" y="38" width="10" height="2" rx="1" fill="#a6e3e9"/>
                            <rect x="78" y="43" width="12" height="2" rx="1" fill="#a6e3e9"/>
                            <rect x="78" y="48" width="8" height="2" rx="1" fill="#a6e3e9"/>
                            <!-- Kaki -->
                            <rect x="38" y="64" width="10" height="20" rx="5" fill="#71c9ce"/>
                            <rect x="52" y="64" width="10" height="20" rx="5" fill="#71c9ce"/>
                            <rect x="36" y="80" width="14" height="8" rx="4" fill="#1a4a4e"/>
                            <rect x="50" y="80" width="14" height="8" rx="4" fill="#1a4a4e"/>
                        </svg>
                        <p style="font-family:'Fredoka',sans-serif;font-size:0.82rem;color:var(--muted);margin-top:4px;">
                            Laporkan masalah kotamu! 💪
                        </p>
                    </div>
                </div>
            </aside>

        </div>
    `,

    '#404': `
        <div class="text-center" style="padding:4rem 0;">
            <div style="font-size:5rem;animation:float 3s ease-in-out infinite;">😢</div>
            <h3 style="font-family:'Fredoka',sans-serif;font-weight:700;color:var(--text);margin-top:1rem;">
                Halaman Tidak Ditemukan
            </h3>
            <p style="color:var(--muted);font-weight:600;">Route yang kamu akses tidak tersedia.</p>
            <a href="#login" class="btn btn-primary mt-2 px-4">
                <i class="bi bi-arrow-left me-1"></i>Kembali ke Login
            </a>
        </div>
    `,
};

// ============================================================
// Handle routing
// ============================================================
function handleRouting() {
    const hash = window.location.hash || '#login';

    if (hash === '#dashboard' && !isLoggedIn()) {
        window.location.hash = '#login';
        return;
    }

    const content = routes[hash] || routes['#404'];
    document.getElementById('app-content').innerHTML = content;

    renderNavbar();

    if (hash === '#login' && typeof setupLoginForm === 'function') {
        setupLoginForm();
    }

    if (hash === '#dashboard' && typeof loadDashboardData === 'function') {
        loadDashboardData('my_reports', 1);
    }
}

// ============================================================
// switchTab
// ============================================================
function switchTab(tab) {
    document.getElementById('tabMyReports')?.classList.toggle('active', tab === 'my_reports');
    document.getElementById('tabFeed')?.classList.toggle('active', tab === 'feed');
    loadDashboardData(tab, 1);
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', function () {
    initApp();
    handleRouting();
});