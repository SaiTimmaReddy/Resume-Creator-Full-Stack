from django.db import models

# Create your models here.


class Education(models.Model):
    class Meta(object):
        db_table = 'education'

    eduheading = models.CharField(
        "Education-Heading", max_length=100, blank=False, null=False, default='Eduction-Heading'
    )
    edudescription = models.CharField(
        'Educaiton-description', max_length=255, blank=False, null=False, default='Education-Description'
    )
