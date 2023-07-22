from django.db import models
from django.contrib.auth.models import User

class BlogVidoes(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    length = models.FloatField(null=True,blank=True,default=0)
    lenChar = models.CharField(max_length=200, null=True, blank=True)
    author = models.CharField(max_length=200, null=True, blank=True)

    views = models.IntegerField(null=True, blank=True, default=0)

    video = models.FileField(upload_to='blog/vidoes', null=True, blank=True)
    image = models.ImageField(upload_to="blog/images/", null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True,null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)


    def __str__(self):
        return self.title


class Vlogs(models.Model):

    title = models.CharField(max_length=200, null=True, blank=True)
    des = models.TextField(null=True, blank=True)

    numexcited = models.IntegerField(null=True, blank=True, default=0)
    numnoexcited = models.IntegerField(null=True, blank=True, default=0)


    image = models.ImageField(upload_to="blog/images/", null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True,null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)


    def __str__(self):
         return self.title

class CommingSoonExciment(models.Model):
    vlogs = models.ForeignKey(Vlogs, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    isexcited = models.BooleanField(default=False)
    isnotexcited = models.BooleanField(default=False)

    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.user)








