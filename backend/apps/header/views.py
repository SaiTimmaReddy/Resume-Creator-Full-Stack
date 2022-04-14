from django.shortcuts import render
from rest_framework import generics
from .serializers import HeaderSerializer
from .models import Header
from rest_framework.response import Response
# Create your views here.
from rest_framework.response import Response


class HeaderDetails(generics.ListAPIView):
    queryset = Header.objects.all()
    serializer_class = HeaderSerializer

    def get_paginated_response(self, data):
        return Response(data)
