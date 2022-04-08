from django.db import models

# Create your models here.


class WorkExperience(models.Model):
    class Meta(object):
        db_table = "workexperience"

    job = models.CharField(
        'Work-Exp', max_length=255, default="Work-Experience", null=False, blank=False,
    )
    jobrole1 = models.CharField(
        'Job-Role-1', max_length=255, default='Job-Role1', null=False, blank=False,
    )
    jobrole2 = models.CharField(
        'Job-Role-2', max_length=255, default='Job-Role2', null=False, blank=False,
    )
    jobrole3 = models.CharField(
        'Job-Role-3', max_length=255, default='Job-Role3', null=False, blank=False,
    )
