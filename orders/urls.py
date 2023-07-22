from django.urls import path

from . import views


urlpatterns = [
        path('', views.getOrders.as_view(), name='orders'),

        path('add/', views.addorderItems.as_view(),name='orders-add'),

        path('razorpay/create/', views.createRazorpayOrder.as_view(), name='create razorpay order'),
        path('razorpay/success/', views.successRazorpay.as_view(), name='success razorpay order'),

        path('myorders/', views.getMyOrders.as_view(), name='my-orders'),
        path('<str:pk>/deliver/', views.updateOrderToDelivered.as_view(), name='update-delivered-end-point'),
        path('<str:pk>/out-for-deliver/', views.updateOrderToOutForDelivered.as_view(), name='update-updateOrder  To OutForDelivered-end-point'),

        path('<str:pk>/', views.getOrderById.as_view(), name='orders-by-id'),
        path('<str:pk>/pay/', views.updateOrderToPaid.as_view(), name='update-paid-end-point'),

        path('order-filter/<str:pk>/<str:num>', views.orderFillter.as_view(), name='orders-fillter'),

]