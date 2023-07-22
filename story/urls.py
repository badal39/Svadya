from django.urls import path

from . import views



urlpatterns = [

    path('blogs/vidoes/<str:upto>/', views.getBlogsVidoes.as_view(),name="blog vidoes"),

    path('blogs/vidoe/<str:pk>/', views.getBlogsVidoe.as_view(), name="blog vidoe"),
    path('blogs/imgs/', views.getBlogsImages.as_view(), name="blog images"),
    path('blogs/imgs/<str:pk>/', views.addLike.as_view(), name="like image"),

]

