import django
from django.shortcuts import redirect, render
from .models import Report
from .form import ReportForm
from django.contrib import messages 
from django.shortcuts import get_object_or_404

# Create your views here.
def home(request):
    context = {
        'title': 'Home |T-City',
        'heading': 'Selamat Datang di T-Map',
        'description': 'Halo, ini adalah halaman utama T-MAP (Tirtacity Management & Action Platform) ! T-MAP adalah sebuah ekosistem digital terintegrasi yang dirancang sebagai solusi cerdas dalam pengelolaan infrastruktur dan layanan publik di lingkungan perkotaan. Platform ini menjembatani komunikasi antara warga dan pengelola kota melalui sistem pelaporan isu yang transparan dan terstruktur, mulai dari kendala utilitas hingga kerusakan fasilitas umum. Dengan mengedepankan efisiensi workflow dan validitas data, T-MAP mentransformasi setiap laporan masyarakat menjadi aksi nyata, guna mewujudkan tata kelola kota yang lebih responsif, modern, dan berkelanjutan untuk semua warga', 
        }
    return render(request, 'main_app/index.html', context)

def add_Report(request):
    if request.method == 'POST':
        form = ReportForm(request.POST)
        if form.is_valid():
            form.save() # Menyimpan data ke database
            # Kasih pesan sukses
            messages.success(request, 'Wih mantap, laporan lo udah masuk ke database!')
            return redirect('home') # Mengarahkan kembali ke halaman utama setelah berhasil menyimpan
    else:
        form = ReportForm()
    return render(request,
                  'main_app/add_report.html',{'form': form})


def list_Report(request):
    # INI BARIS YANG KURANG: Ambil semua data dari PostgreSQL
    data_laporan = Report.objects.all() 
    
    # Masukin data_laporan ke dalam context (dictionary) biar bisa dibaca HTML
    return render(request, 'main_app/list_report.html', {'laporan': data_laporan})

# Fungsi Update
def update_report(request, pk):
    # Ambil data lama berdasarkan ID (pk)
    report = get_object_or_404(Report, id=pk)
    
    if request.method == 'POST':
        # Isi form pake data POST + instance data lama
        form = ReportForm(request.POST, instance=report)
        if form.is_valid():
            form.save()
            messages.success(request, 'Laporan berhasil diperbarui!')
            return redirect('list_reports') # Sesuaikan nama name di urls.py lo
    else:
        # Tampilkan form yang udah ada isinya (data lama)
        form = ReportForm(instance=report)
    
    return render(request, 'main_app/add_report.html', {'form': form, 'title': 'Edit Laporan'})

# Fungsi Delete
def delete_report(request, pk):
    report = get_object_or_404(Report, id=pk)
    if request.method == 'POST':
        report.delete()
        messages.warning(request, 'Laporan telah dihapus!')
        return redirect('list_reports') # Sesuaikan nama name di urls.py lo
    
    return render(request, 'main_app/delete_confirm.html', {'report': report})
