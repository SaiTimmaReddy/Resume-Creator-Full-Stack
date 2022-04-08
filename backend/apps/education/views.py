from django.shortcuts import render
from .serializers import EducationSerializer
from .models import Education
# Create your views here.
from rest_framework import generics


class EducationDetalis(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
