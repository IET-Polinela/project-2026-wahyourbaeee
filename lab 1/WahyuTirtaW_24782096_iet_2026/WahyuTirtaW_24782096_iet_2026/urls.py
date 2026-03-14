
from django.contrib import admin
from django.urls import path
from django.views.debug import default_urlconf
from django.http import HttpResponse

def welcome(request):
    return HttpResponse("Welcome to Django!")

def Blog(request):
    return HttpResponse("This is the Blog page.")
urlpatterns = [
    path('', default_urlconf),
    path('admin/', admin.site.urls),
    path('welcome/', welcome),
    path('blog/', Blog),
]
