# Generated by Django 3.1.4 on 2021-08-04 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('farmProduct', '0011_productdetails'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='detail0',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='detail1',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='detail2',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='detail3',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='detail4',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.DeleteModel(
            name='ProductDetails',
        ),
    ]
