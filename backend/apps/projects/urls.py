from django.urls import path
from .import views

urlpatterns = [
    path('', views.ProjectsDetails.as_view(), name='projects_details')
]
