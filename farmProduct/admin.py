from django.contrib import admin
from .models import Product,Review,ProductTag

admin.site.register([Product,Review,ProductTag])
# Register your models here.
