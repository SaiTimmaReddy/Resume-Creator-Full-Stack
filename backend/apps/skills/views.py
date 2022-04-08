from django.shortcuts import render
from .serializers import SkillsSerializer
from rest_framework import generics
from .models import Skills
# Create your views here.


class SkillsDetails(generics.ListAPIView):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer
