from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class ProductTag(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    tag = models.CharField(max_length=200, null=True, blank=True)

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.tag


class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    tag = models.ForeignKey(ProductTag ,on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(upload_to="product_img",null=True, blank=True,)
    image1 = models.ImageField(upload_to="product_img",null=True, blank=True,)
    image2 = models.ImageField(upload_to="product_img",null=True, blank=True,)
    image3 = models.ImageField(upload_to="product_img",null=True, blank=True,)
    image4 = models.ImageField(upload_to="product_img",null=True, blank=True,)

    farmName = models.CharField(max_length=200, null=True, blank=True)
    isFarmer = models.BooleanField(default=False)

    detail0 = models.CharField(max_length=250, null=True, blank=True)
    detail1 = models.CharField(max_length=250, null=True, blank=True)
    detail2 = models.CharField(max_length=250, null=True, blank=True)
    detail3 = models.CharField(max_length=250, null=True, blank=True)
    detail4 = models.CharField(max_length=250, null=True, blank=True)

    benefits1 = models.CharField(max_length=250, null=True, blank=True)
    benefits2 = models.CharField(max_length=250, null=True, blank=True)
    benefits3 = models.CharField(max_length=250, null=True, blank=True)
    benefits4 = models.CharField(max_length=250, null=True, blank=True)



    brand = models.CharField(max_length=200, null=True, blank=True)
    #category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.IntegerField(null=True, blank=True)

    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name




class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)





