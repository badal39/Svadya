# Generated by Django 3.1.4 on 2021-08-23 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_auto_20210812_1806'),
    ]

    operations = [
        migrations.AlterField(
            model_name='razorpay_payment_history',
            name='phoneNum',
            field=models.BigIntegerField(blank=True, default=0, null=True),
        ),
    ]
