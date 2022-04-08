from django.shortcuts import render
from .serializers import ProjectsSerializer
from .models import Projects
from rest_framework import generics
# Create your views here.


class ProjectsDetails(generics.ListAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
