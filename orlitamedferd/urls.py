from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='orlitamedferd_index'),
]