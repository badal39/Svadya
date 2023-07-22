from django.urls import path

from . import views



urlpatterns = [



    path('feedback/', views.FeedBackview.as_view(), name="feedback Website"),



]