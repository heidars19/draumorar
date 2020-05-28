from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='landing_index'),
    path('css/<str:filename>.css', views.css_renderer, name='css_renderer'),
]
