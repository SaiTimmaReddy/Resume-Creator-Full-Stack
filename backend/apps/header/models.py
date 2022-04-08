from django.db import models

# Create your models here.


class Header(models.Model):
    class Meta(object):
        db_table = 'header'

    name = models.CharField(
        'Name', max_length=40, blank=False, null=False, default='Name'
    )
    designation = models.CharField(
        'Designation', max_length=60, blank=False, null=False, default='Annonymous'
    )
    githublink = models.URLField(
        'GitHubLink', max_length=100, blank=False, null=False, default="githublink"
    )
    linkedinlink = models.URLField(
        'LinkedinLink', max_length=100, blank=False, null=False, default="linkedinlink"
    )
    portfoliolink = models.URLField(
        'Portfoliolink', max_length=100, blank=False, null=False, default='portfoliolink'
    )
    address = models.CharField(
        'Address', blank=False, null=False, max_length=255, db_index=True, default='Address'
    )
    cellnumber = models.IntegerField(
        'CellNumber', blank=False, null=False, db_index=True,
    )
    email = models.EmailField(
        'Email', max_length=255, null=False, blank=False, db_index=True, default='Email'
    )

    def __str__(self):
        return self.name
