from .models import Header
from rest_framework import serializers
from rest_framework.decorators import api_view


class HeaderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Header
        fields = '__all__'
