from django.urls import path
from . import views

urlpatterns = [
    path('', views.DashboardView.as_view(), name='dashboard_index'),
    path('data/', views.dashboard_data, name='dashboard_data'),
    path('search/', views.live_search, name='live_search'),
    path('report-detail/<int:report_id>/', views.report_detail_api, name='report_detail_api'),
]
