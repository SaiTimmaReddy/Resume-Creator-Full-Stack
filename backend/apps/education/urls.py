from django.urls import path
from .import views

urlpatterns = [
    path('', views.EducationDetalis.as_view(), name="education-details"),
]
