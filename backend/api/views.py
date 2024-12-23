from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .models import PDF
from .serializers import PDFSerializer

class PDFViewSet(viewsets.ModelViewSet):
    queryset = PDF.objects.all()
    serializer_class = PDFSerializer
    parser_classes = (MultiPartParser, FormParser)

def perform_create(self, serializer):
    if serializer.is_valid():
        serializer.save(file=self.request.data.get('file'))
#dont  incluwde this line in your code in production 
    else:
        print(serializer.errors)