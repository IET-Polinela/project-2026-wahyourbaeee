
from django.contrib import admin
from django.urls import path, include
from django.views.debug import default_urlconf
from django.contrib.auth import views as auth_views
from usermanagement_24782096.views import register_citizen
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView



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
]

