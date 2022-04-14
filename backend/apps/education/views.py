from django.shortcuts import render
from .serializers import EducationSerializer
from .models import Education
# Create your views here.
from rest_framework import generics
from rest_framework.response import Response


class EducationDetalis(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

    def get_paginated_response(self, data):
        return Response(data)
