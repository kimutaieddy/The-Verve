from rest_framework import serializers
from .model import PDF

class PDFserializers(serializers,modelSerializers):
    class meta:
        model =PDF
        fields =('id','name','file','url')