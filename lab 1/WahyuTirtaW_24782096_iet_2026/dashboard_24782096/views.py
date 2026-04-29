from django.shortcuts import render
from django.http import JsonResponse
from main_app.models import Report
from django.db.models import Count
from django.views.generic import TemplateView

# View untuk nampilin halaman HTML-nya
class DashboardView(TemplateView):
    template_name = 'dashboard/index.html'

# View khusus penyedia data JSON untuk Chart.js
def dashboard_data(request):
    # Itung distribusi status
    status_counts = list(Report.objects.values('status').annotate(total=Count('status')))
    # Itung distribusi kategori
    category_counts = list(Report.objects.values('category').annotate(total=Count('category')))
    
    return JsonResponse({
        'status_data': status_counts,
        'category_data': category_counts
    })