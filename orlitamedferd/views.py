from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    context = {'page': 'index'}
    return render(request, 'orlitamedferd/index.html', context)
