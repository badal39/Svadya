# Generated by Django 3.1.4 on 2021-07-23 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('story', '0005_auto_20210723_0537'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogvidoes',
            name='length',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
    ]
