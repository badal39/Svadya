# Generated by Django 3.1.4 on 2021-07-23 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('story', '0006_blogvidoes_length'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogvidoes',
            name='lenChar',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
