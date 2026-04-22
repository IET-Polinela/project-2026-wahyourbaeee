import django
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from .models import Report
from .form import ReportForm
from django.contrib import messages 
from django.shortcuts import get_object_or_404, redirect
from django.views import View
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from main_app import form

# Create your views here.
def home(request):
    context = {
        'title': 'TheoTown - T-MAP',
        'heading': 'Selamat Datang di TheoTown',
        'description': 'Halo, ini adalah halaman utama T-MAP (TheoTown Management & Action Platform) ! T-MAP adalah sebuah ekosistem digital terintegrasi yang dirancang sebagai solusi cerdas dalam pengelolaan infrastruktur dan layanan publik di lingkungan perkotaan. Platform ini menjembatani komunikasi antara warga dan pengelola kota melalui sistem pelaporan isu yang transparan dan terstruktur, mulai dari kendala utilitas hingga kerusakan fasilitas umum. Dengan mengedepankan efisiensi workflow dan validitas data, T-MAP mentransformasi setiap laporan masyarakat menjadi aksi nyata, guna mewujudkan tata kelola kota yang lebih responsif, modern, dan berkelanjutan untuk semua warga', 
        }
    return render(request, 'main_app/index.html', context)

class ReportCreateView(CreateView):
# Create
    model = Report
    form_class = ReportForm
    template_name = 'main_app/add_report.html'
    success_url = reverse_lazy('list_reports') # balik ke daftar setelah submit

    def form_valid(self, form):
        messages.success(self.request, 'Laporan berhasil dibuat!')
        return super().form_valid(form)

    def dispatch(self, request, *args, **kwargs):
        # Cek apakah user punya status is_admin=True
        if not request.user.is_authenticated or not request.user.is_admin:
            messages.error(request, "Akses Ditolak: Hanya Admin yang boleh menambah laporan!") 
            return redirect('list_reports')
        return super().dispatch(request, *args, **kwargs)
    
class ReportListView(ListView):
# Read
    model = Report
    template_name = 'main_app/list_report.html'
    context_object_name = 'laporan' # Biar html bisa panggil 'laporan'

class ReportUpdateView(UpdateView):
    model = Report
    template_name = "main_app/List_report.html"
    form_class = ReportForm
    success_url = reverse_lazy('list_reports')

    def form_valid(self, form): 
        messages.success(self.request, 'Laporan berhasil diperbarui!')
        return super().form_valid(form)
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated or not request.user.is_admin:
            messages.error(request, "Akses Ditolak: Anda tidak memiliki izin untuk mengedit!") 
            return redirect('list_reports')
        return super().dispatch(request, *args, **kwargs)
    
class ReportDeleteView(DeleteView):
    model = Report
    template_name = "main_app/delete_confirm.html"
    success_url = reverse_lazy('list_reports')

    def form_valid(self, form):
        messages.warning(self.request, 'Laporan telah dihapus!')
        return super().form_valid(form)
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated or not request.user.is_admin:
            messages.error(request, "Akses Ditolak: Fitur hapus hanya untuk Admin!") 
            return redirect('list_reports')
        return super().dispatch(request, *args, **kwargs)

class ReportUpdateStatusView(View):
    def post(self, request, pk):
        report = get_object_or_404(Report, pk=pk)
        new_status = request.POST.get('status')
        report.status = new_status
        report.save()
        return redirect('list_reports')