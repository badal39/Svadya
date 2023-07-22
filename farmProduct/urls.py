from django.urls import path

from . import views



urlpatterns = [

    path('cate/<str:pk>/', views.getProducts.as_view(),name="products"),
    path('<str:id>/', views.getProduct.as_view(), name="product"),

    path('new/create/', views.createProduct.as_view(), name="create-products"),
    path('img/upload/', views.uploadImage.as_view(), name="upload image"),


    path('<str:pk>/reviews/', views.createProductReview.as_view(), name="product rewiews"),
    path('update/<str:pk>/', views.updateProduct.as_view(), name="delete-product"),

    path('delete/<str:pk>/', views.deleteProduct.as_view(), name="delete-product"),

]

