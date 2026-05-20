from rest_framework import viewsets, permissions
from rest_framework.exceptions import PermissionDenied
from .models import Report
from .serializers import ReportSerializer
from .permissions import IsOwnerAndDraftOnly

class ReportViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Report.objects.all()
    serializer_class = ReportSerializer