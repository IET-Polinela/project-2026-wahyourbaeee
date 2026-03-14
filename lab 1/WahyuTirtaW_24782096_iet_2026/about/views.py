from django.shortcuts import render

# Create your views here.
def indexabout(request):
    return render(request, 'about.html')