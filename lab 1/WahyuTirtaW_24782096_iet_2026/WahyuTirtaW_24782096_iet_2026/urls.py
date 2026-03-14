
from django.contrib import admin
from django.urls import path, include
from django.views.debug import default_urlconf
from django.http import HttpResponse


urlpatterns = [
    path('', include('main_app.urls')),
    path('admin/', admin.site.urls),

]
