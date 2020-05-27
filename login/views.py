from django.shortcuts import render

# Create your views here.


def login(request):
    context = {'page': 'login'}
    return render(request, 'login/login.html', context)

def register(request):
    context = {'page': 'register'}
    return render(request, 'login/register.html', context)
