from django.shortcuts import render, redirect
from django.http import JsonResponse
from main_app.models import Report
from django.db.models import Count
from django.views.generic import TemplateView
from django.contrib.auth.decorators import user_passes_test

# Fungsi pengecekan admin untuk pelindung Function-Based View
def is_admin_check(user):
    return user.is_authenticated and user.is_admin

# CBV untuk halaman utama dashboard 
class DashboardView(TemplateView):
    template_name = 'dashboard/index.html'

    def dispatch(self, request, *args, **kwargs):
        # Proteksi: Jika bukan admin, paksa redirect (HTTP 302) ke halaman login
        if not request.user.is_authenticated or not getattr(request.user, 'is_admin', False):
            return redirect('login') 
        return super().dispatch(request, *args, **kwargs)

# View khusus JsonResponse untuk Chart.js 
@user_passes_test(is_admin_check, login_url='/login/')
def dashboard_data(request):
    # Agregasi data untuk grafik 
    status_data = list(Report.objects.values('status').annotate(total=Count('status'))) 
    category_data = list(Report.objects.values('category').annotate(total=Count('category'))) 
    
    # Ambil 5 laporan terbaru (REPORTED) 
    latest_reported = list(Report.objects.filter(status='REPORTED').order_by('-id')[:5].values())
    
    # Ambil 5 laporan selesai (RESOLVED) 
    latest_resolved = list(Report.objects.filter(status='RESOLVED').order_by('-id')[:5].values())
    
    return JsonResponse({
        'status_data': status_data,
        'category_data': category_data,
        'latest_reported': latest_reported,
        'latest_resolved': latest_resolved
    })

# View untuk fitur Live Search 
@user_passes_test(is_admin_check, login_url='/login/')
def live_search(request):
    query = request.GET.get('q', '')
    # Cari berdasarkan judul yang mengandung kata kunci 
    reports = Report.objects.filter(title__icontains=query)[:10]
    results = [
        {
            'id': r.id,
            'title': r.title,
            'location': r.location,
            'status': r.status
        } for r in reports
    ]
    return JsonResponse(results, safe=False)

# View untuk Detail Modal via Fetch API 
@user_passes_test(is_admin_check, login_url='/login/')
def report_detail_api(request, report_id):
    try:
        report = Report.objects.get(id=report_id)
        data = {
            'title': report.title,
            'category': report.category,
            'description': report.description,
            'location': report.location,
            'status': report.status
        }
        return JsonResponse(data)
    except Report.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)