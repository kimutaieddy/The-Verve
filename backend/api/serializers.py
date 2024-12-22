from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .model import PDF

class PDFSerializer(ModelSerializer):
    class Meta:
        model = PDF
        fields = ('id', 'name', 'file', 'url')