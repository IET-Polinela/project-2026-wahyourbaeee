
from django.contrib import admin
from django.urls import path, include
from django.views.debug import default_urlconf
from django.contrib.auth import views as auth_views
from usermanagement_24782096.views import register_citizen



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main_app.urls')),
    path('contacts/', include('contacts.urls')),
    path('abouts/', include('about.urls')),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('register/', register_citizen, name='register'),
]

