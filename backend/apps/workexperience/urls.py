from django.urls import path
from .import views


urlpatterns = [
    path('', views.WorkExperienceDetails.as_view(), name='WorkExperience')
]
