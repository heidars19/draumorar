from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login_index'),
    path('', views.register, name='login_register'),
]
