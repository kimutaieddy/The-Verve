from django.db import models

class PDF(models.Model):
    Name = models.CharField(max_length=200)
    file = models.FileField(upload_to='pdfs/')
    

    @property
    def __str__(self):
        return self.file.url