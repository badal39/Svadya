from django.contrib import admin
from .models import Order,OrderItem,ShippingAddress,OrderCommisionStatus,RazorPay_Payment_history

admin.site.register([Order,OrderItem,ShippingAddress,OrderCommisionStatus,RazorPay_Payment_history])
# Register your models here.
