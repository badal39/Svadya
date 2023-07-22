# Generated by Django 3.1.4 on 2021-09-07 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0008_auto_20210823_1405'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='isOutForDelivered',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='outfordeliveredAt',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
