# Generated by Django 3.1.4 on 2021-08-06 03:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('farmProduct', '0013_auto_20210806_0319'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='tag',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='farmProduct.producttag'),
        ),
    ]