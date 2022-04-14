from django.shortcuts import render
from .serializers import SkillSerializer
from rest_framework import generics
from .models import Skill
# Create your views here.
from rest_framework.response import Response


class SkillDetails(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

    def get_paginated_response(self, data):
        return Response(data)
