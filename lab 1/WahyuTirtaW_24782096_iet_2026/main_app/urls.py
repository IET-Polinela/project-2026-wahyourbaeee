from django.urls import path
from . import views 

urlpatterns = [
    path('', views.home, name='home'),
    path('add/', views.ReportCreateView.as_view(), name='add_report'),
    path('list/', views.ReportListView.as_view(), name='list_reports'),
    path('update/<int:pk>/', views.ReportUpdateView.as_view(), name='update_report'),
    path('delete/<int:pk>/', views.ReportDeleteView.as_view(), name='delete_report'),
    path('update-status/<int:pk>/', views.ReportUpdateStatusView.as_view(), name='update_status'),
    # API URLs
    path('api/', views.api_root, name='api_root'),
    path('api/reports/', views.ReportListView.as_view(), name='api_report_list'),
    path('api/reports/<int:pk>/', views.ReportDetailView.as_view(), name='api_report_detail'),
    
]
    