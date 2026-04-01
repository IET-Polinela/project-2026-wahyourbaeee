from django.shortcuts import redirect, render
from .models import Report
from .form import ReportForm

# Create your views here.
def home(request):
    context = {
        'title': 'Home |T-City',
        'heading': 'Selamat Datang di T-Map',
        'description': 'Halo, ini adalah halaman utama T-MAP (Tirtacity Management & Action Platform) ! T-MAP adalah sebuah ekosistem digital terintegrasi yang dirancang sebagai solusi cerdas dalam pengelolaan infrastruktur dan layanan publik di lingkungan perkotaan. Platform ini menjembatani komunikasi antara warga dan pengelola kota melalui sistem pelaporan isu yang transparan dan terstruktur, mulai dari kendala utilitas hingga kerusakan fasilitas umum. Dengan mengedepankan efisiensi workflow dan validitas data, T-MAP mentransformasi setiap laporan masyarakat menjadi aksi nyata, guna mewujudkan tata kelola kota yang lebih responsif, modern, dan berkelanjutan untuk semua warga', 
        }
    return render(request, 'main_app/index.html', context)

def add_report(request):
    if request.method == 'POST':
        form = ReportForm(request.POST)
        if form.is_valid():
            form.save() # Menyimpan data ke database
            return redirect('home') # Mengarahkan kembali ke halaman utama setelah berhasil menyimpan
    else:
        form = ReportForm()
    return render(request,
                  'main_app/add_report.html',{'form': form})
