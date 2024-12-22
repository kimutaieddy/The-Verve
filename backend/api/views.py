from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser
from .models import pdfs
from .serializers import PdfSerializer

class PdfViewSet(viewsets.ModelViewSet):
    queryset = pdfs.objects.all()
    serializer_class = PdfSerializer
    parser_classes = (MultiPartParser,FormParser)