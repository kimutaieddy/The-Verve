from django.db import models

class PDF(models.Model):
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='pdfs/')

    @property
    def url(self):
        return self.file.url
