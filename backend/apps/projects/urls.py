from django.urls import path
from .import views

urlpatterns = [
    path('', views.ProjectDetails.as_view(), name='projects_details')
]
