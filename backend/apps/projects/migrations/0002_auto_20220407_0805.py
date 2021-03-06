# Generated by Django 3.2.7 on 2022-04-07 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='githublinkproject',
            field=models.URLField(default='githublink', max_length=255, verbose_name='Github-Link-Project'),
        ),
        migrations.AlterField(
            model_name='projects',
            name='herokulinkproject',
            field=models.URLField(default='heroku-link', max_length=255, verbose_name='Herokulink-Project'),
        ),
    ]
