from rest_framework import generics, permissions
from usermanagement_24782096.serializers import RegisterSerializer
from usermanagement_24782096.models import User

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

