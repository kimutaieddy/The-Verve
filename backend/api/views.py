from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .models import PDF
from .serializers import PDFSerializer
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

class PDFViewSet(viewsets.ModelViewSet):
    queryset = PDF.objects.all()
    serializer_class = PDFSerializer
    parser_classes = (MultiPartParser, FormParser)

def perform_create(self, serializer):
    serializer.save(file=self.request.data.get('file'))


@api_view(['POST'])
def contact_form(request):
    name = request.data.get('name')
    email = request.data.get('email')
    subject = request.data.get('subject')
    message = request.data.get('message')

    if not all([name, email, subject, message]):
        return Response({'error': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        send_mail(
            subject=f"Contact Form Submission: {subject}",
            message=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}",a
            from_email=email,
            recipient_list=['your-email@example.com'],
        )
        return Response({'success': 'Email sent successfully.'}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)