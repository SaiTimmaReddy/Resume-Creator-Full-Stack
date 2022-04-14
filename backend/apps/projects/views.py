from django.shortcuts import render
from .serializers import ProjectSerializer
from .models import Project
from rest_framework import generics
# Create your views here.
from rest_framework.response import Response


class ProjectDetails(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    paginate_by = None

    def get_paginated_response(self, data):
        return Response(data)
