from rest_framework import viewsets, permissions
from rest_framework.pagination import PageNumberPagination
from .models import Report
from .serializers import ReportSerializer, ReportStatusSerializer
from .permissions import IsOwnerAndDraftOrReadOnly, IsAdminUpdateStatusOnly
from django.db.models import Q

class ReportPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class ReportViewSet(viewsets.ModelViewSet):
    # deklarasi pagationdalam viewset
    serializer_class = ReportSerializer
    pagination_class = ReportPagination

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated and user.is_admin:
            # Admin hanya lihat laporan yang BUKAN DRAFT
            return Report.objects.exclude(status='DRAFT')
        elif user.is_authenticated:
            # Citizen lihat semua laporan milik sendiri + laporan non-DRAFT milik orang lain
            return Report.objects.exclude(status='DRAFT') | Report.objects.filter(reporter=user)
        # Guest hanya lihat non-DRAFT
        return Report.objects.exclude(status='DRAFT')
    
    def get_serializer_class(self):  
        user = self.request.user
        if user.is_authenticated and user.is_admin:
            return ReportStatusSerializer
        return ReportSerializer

    def get_permissions(self):
        if self.request.user.is_authenticated and self.request.user.is_admin:
            return [permissions.IsAuthenticated(), IsAdminUpdateStatusOnly()]
        if self.action in ['update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated(), IsOwnerAndDraftOrReadOnly()]
        return [permissions.IsAuthenticated()]
    
    def perform_create(self, serializer):
        serializer.save(reporter=self.request.user)


# untuk commit lab 11

    