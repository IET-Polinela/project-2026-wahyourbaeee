from django.urls import path
from . import views

urlpatterns = [
    path('', views.DashboardView.as_view(), name='dashboard_index'),
    path('data/', views.dashboard_data, name='dashboard_data'),
]
