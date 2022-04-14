from django.db import models

# Create your models here.


class Project(models.Model):
    class Meta(object):
        db_table = 'project'

    projectheading = models.CharField(
        'Project-Heading', max_length=100, default="PROJECT-HEADING", blank=False, null=False
    )
    projectdescription = models.CharField(
        'Project-Description', max_length=255, default="Project-Description", null=False, blank=False,
    )
    technologiesused = models.CharField(
        "Technologies-Used", max_length=255, default="Technologies-Used", null=False, blank=False,
    )
    githublinkproject = models.URLField(
        'Github-Link-Project', max_length=255, default="githublink", blank=False, null=False,
    )
    herokulinkproject = models.URLField(
        'Herokulink-Project', max_length=255, default="heroku-link", blank=False, null=False,
    )
