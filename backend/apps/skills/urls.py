from django.urls import path
from . import views

urlpatterns = [
    path('', views.SkillsDetails.as_view(), name='skills')
]
