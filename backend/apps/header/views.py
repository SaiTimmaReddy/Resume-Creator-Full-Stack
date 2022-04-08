from django.shortcuts import render
from rest_framework import generics
from .serializers import HeaderSerializer
from .models import Header
from rest_framework.response import Response
# Create your views here.


class HeaderDetails(generics.ListAPIView):
    queryset = Header.objects.all()
    serializer_class = HeaderSerializer
