from django.urls import path
from .import views

urlpatterns = [
    path('', views.HeaderDetails.as_view(), name='header_details')
]
