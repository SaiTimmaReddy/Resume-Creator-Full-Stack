# Generated by Django 3.2.7 on 2022-04-13 07:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_alter_projects_table'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Projects',
            new_name='Project',
        ),
        migrations.AlterModelTable(
            name='project',
            table='project',
        ),
    ]
