
from django.contrib import admin
from django.urls import path, include
from django.views.debug import default_urlconf



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main_app.urls')),
    path('contacts/', include('contacts.urls')),
    path('abouts/', include('about.urls')),
]

