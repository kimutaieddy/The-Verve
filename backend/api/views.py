from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .models import PDF
from .serializers import PdfSerializer

class PdfViewSet(viewsets.ModelViewSet):
    queryset = PDF.objects.all()
    serializer_class = PdfSerializer
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        serializer.save(file=self.request.data.get('file'))