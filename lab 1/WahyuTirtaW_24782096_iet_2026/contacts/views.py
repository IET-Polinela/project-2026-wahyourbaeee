from django.shortcuts import render

# Create your views here.
def indexcontact(request):
    return render(request, 'contacts/index.html')