from django.db import models

# Create your models here.


class Skills(models.Model):
    class Meta(object):
        db_table = "skills"

    personskills = models.CharField(
        'Skills', blank=False, max_length=100, null=False, default='Skills'
    )
