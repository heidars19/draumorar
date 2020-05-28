from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def css_renderer(request, filename):
    return render(request, 'static/' + filename + '.css', {}, content_type="text/css")


def index(request):
    context = {'page': 'index'}
    return render(request, 'landing/index.html', context)