from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    context = {'page': 'index'}
    return render(request, 'landing/index.html', context)