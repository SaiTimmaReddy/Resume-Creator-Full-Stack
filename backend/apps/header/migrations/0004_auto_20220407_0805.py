# Generated by Django 3.2.7 on 2022-04-07 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('header', '0003_header_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='header',
            name='githublink',
            field=models.URLField(default='githublink', max_length=100, verbose_name='GitHubLink'),
        ),
        migrations.AlterField(
            model_name='header',
            name='linkedinlink',
            field=models.URLField(default='linkedinlink', max_length=100, verbose_name='LinkedinLink'),
        ),
        migrations.AlterField(
            model_name='header',
            name='portfoliolink',
            field=models.URLField(default='portfoliolink', max_length=100, verbose_name='Portfoliolink'),
        ),
    ]
