from django.db import models

# Create your models here.


class Education(models.Model):
    class Meta(object):
        db_table = 'education'

    eduheading = models.CharField(
        "Education-Heading", max_length=100, blank=False, null=False, default='Eduction-Heading'
    )
    edudescription1 = models.CharField(
        'Educaiton-description1', max_length=255, blank=False, null=False, default='Education-Description'
    )
    edudescription2 = models.CharField(
        "Education-Description2", max_length=255, blank=True, null=True
    )
    edudescription3 = models.CharField(
        "Education-Description3", max_length=255, blank=True, null=True
    )
