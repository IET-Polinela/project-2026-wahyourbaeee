
from django.contrib import admin
from django.urls import path, include
from django.views.debug import default_urlconf
from django.contrib.auth import views as auth_views
from usermanagement_24782096.api_views import RegisterView
from usermanagement_24782096.views import register_citizen
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django_scalar.views import scalar_viewer



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main_app.urls')),
    path('api/', include('main_app.api_urls')),
    path('contacts/', include('contacts.urls')),
    path('abouts/', include('about.urls')),
    path('dashboard/', include('dashboard_24782096.urls')),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('register/', register_citizen, name='register'),

    # token untuk jwt
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', RegisterView.as_view(), name='api_register'),

    # ... API route...
    # 1. Endpoint untuk meng-generate file skema mentah (JSON/YAML)
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    # 2. Endpoint Swagger UI
    path('api/docs/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    # 3. Endpoint Scalar UI
    path('api/docs/scalar/', scalar_viewer, name='scalar-ui'),
]

