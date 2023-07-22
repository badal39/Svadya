# Generated by Django 3.1.4 on 2021-07-21 06:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('story', '0002_delete_blog'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('author', models.CharField(blank=True, max_length=200, null=True)),
                ('content', models.TextField(blank=True, null=True)),
                ('reads', models.IntegerField(blank=True, default=0, null=True)),
                ('video', models.FileField(blank=True, null=True, upload_to='blog/vidoes')),
                ('image', models.ImageField(blank=True, null=True, upload_to='blog/images/')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
