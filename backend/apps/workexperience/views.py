from django.shortcuts import render
from rest_framework import generics
from .models import WorkExperience
from .serializers import WorkExperienceSerializer

# Create your views here.
from rest_framework.response import Response


class WorkExperienceDetails(generics.ListAPIView):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer

    def get_paginated_response(self, data):
        return Response(data)
