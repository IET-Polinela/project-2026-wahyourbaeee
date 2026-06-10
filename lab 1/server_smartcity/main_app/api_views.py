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
        queryset = Report.objects.all().order_by('-updated_at')
        tab = self.request.query_params.get('tab', None)

        if tab == 'my_reports':
            queryset = queryset.filter(reporter=user)
        elif tab == 'feed':
            queryset = queryset.filter(~Q(reporter=user) & ~Q(status='DRAFT'))
        else:
            queryset = queryset.filter(
                ~Q(status='DRAFT') | Q(status='DRAFT', reporter=user)
            )
        return queryset
    
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


    