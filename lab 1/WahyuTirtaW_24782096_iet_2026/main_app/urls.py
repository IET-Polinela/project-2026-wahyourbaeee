from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('add/', views.add_Report, name='add_report'),
    path('list/', views.list_Report, name='list_reports'),
    path('update/<int:pk>/', views.update_report, name='update_report'),
    path('delete/<int:pk>/', views.delete_report, name='delete_report'),
]
