from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import CitizenRegistrationForm

def register_citizen(request):
    if request.method == 'POST':
        form = CitizenRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_admin = False  # Sesuai instruksi: Citizen bukan admin [cite: 40]
            user.is_member = True
            user.save()
            messages.success(request, 'Akun Citizen berhasil dibuat! Silakan login.')
            return redirect('login')
    else:
        form = CitizenRegistrationForm()
    return render(request, 'registration/register.html', {'form': form})