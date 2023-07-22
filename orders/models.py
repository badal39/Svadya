from django.db import models
from django.contrib.auth.models import User

from farmProduct.models import Product

from django.core.validators import MaxValueValidator



class RazorPay_Payment_history(models.Model):
      userID = models.IntegerField(null=True, blank=True, default=0)
      amount = models.IntegerField(null=True, blank=True, default=0)
      currency = models.CharField(max_length=20, null=True, blank=True)
      isPaid = models.BooleanField(default=False)

      Fullname = models.CharField(max_length=200, null=True, blank=True)
      email = models.CharField(max_length=200, null=True, blank=True)
      phoneNum = models.BigIntegerField(null=True, blank=True, default=0)
      razorpay_order_id = models.CharField(max_length=200, null=True, blank=True)
      receipt_no = models.CharField(max_length=200, null=True, blank=True)
      createdAt =  models.BigIntegerField(null=True, blank=True, default=0)

      attempts = models.IntegerField(null=True, blank=True, default=0)

      Payment_success = models.BooleanField(default=False)
      razorpay_payment_id = models.CharField(max_length=200, null=True, blank=True)
      razorpay_signature = models.CharField(max_length=200, null=True, blank=True)

      RazorPay_success_createdAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)

      _id = models.AutoField(primary_key=True, editable=False)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=True)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    isOutForDelivered = models.BooleanField(default=False)

    outfordeliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)

    deliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)

class ShippingAddress(models.Model):
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    pinCode = models.CharField(max_length=200, null=True, blank=True)
    state = models.CharField(max_length=200, null=True, blank=True)
    phoneNum = models.BigIntegerField(null=True, blank=True, default=0)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)



class OrderCommisionStatus(models.Model):


    date =   models.DateTimeField(auto_now_add=False, null=True, blank=True)

    isPaid = models.BooleanField(default=False)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.date)


