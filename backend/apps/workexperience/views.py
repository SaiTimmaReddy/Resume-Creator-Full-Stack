from django.shortcuts import render
from rest_framework import generics
from .models import WorkExperience
from .serializers import WorkExperienceSerializer

# Create your views here.


class WorkExperienceDetails(generics.ListAPIView):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer
