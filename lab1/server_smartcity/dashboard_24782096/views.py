from django.shortcuts import render
from django.http import JsonResponse
from main_app.models import Report
from django.db.models import Count
from django.views.generic import TemplateView
from django.contrib.admin.views.decorators import staff_member_required
from django.utils.decorators import method_decorator

# CBV untuk halaman utama dashboard 
@method_decorator(staff_member_required, name='dispatch')
class DashboardView(TemplateView):
    template_name = 'dashboard/index.html'

# View khusus JsonResponse untuk Chart.js 
def dashboard_data(request):
    # Agregasi data untuk grafik 
    status_data = list(Report.objects.values('status').annotate(total=Count('status'))) # [cite: 76]
    category_data = list(Report.objects.values('category').annotate(total=Count('category'))) # [cite: 77]
    
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