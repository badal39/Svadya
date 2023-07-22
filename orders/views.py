import os
from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth.models import User
from .serializers import OrderSerializer, OrderCommisionStatusSerializer
from .models import Order, OrderItem, ShippingAddress, RazorPay_Payment_history, OrderCommisionStatus
from farmProduct.models import Product
from rest_framework import authentication, permissions
from django.utils import timezone
import datetime

import razorpay

import environ
env = environ.Env()

# Initialise environment variables


RAZORPAY_KEY_ID = env('RAZORPAY_KEY_ID')
RAZORPAY_KEY_SECRET = env('RAZORPAY_KEY_SECRET')


class createRazorpayOrder(APIView):
    def post(self, request):

        data = request.data
        user = data["userID"]
        client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))
        order_amount = int(float(data['amount'])) * 100
        order_currency = 'INR'
        order_receipt = "receipt__000001"  # data["receipt"]

        razorpay_order_response = client.order.create(
            {'amount': order_amount, 'currency': order_currency, 'receipt': order_receipt})
        RPH = RazorPay_Payment_history.objects.create(

            userID=user,
            amount=int(float(data['amount'])),
            currency=razorpay_order_response["currency"],
            Fullname=data["name"],
            email=data["email"],
            phoneNum=6358248847,
            razorpay_order_id=razorpay_order_response["id"],
            receipt_no=razorpay_order_response["receipt"],
            attempts=razorpay_order_response["attempts"],
            createdAt=razorpay_order_response["created_at"]
        )

        return Response(razorpay_order_response)


class successRazorpay(APIView):
    def post(self, request):
        data = request.data

        client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))
        params_dict = {
            'razorpay_order_id': data["razorpayOrderId"],
            'razorpay_payment_id': data["razorpayPaymentId"],
            'razorpay_signature': data["razorpaySignature"]
        }
        razorpay_success_response = client.utility.verify_payment_signature(
            params_dict)

        res = {"msg": "success",
               "orderId": data["razorpayOrderId"], "paymentId": data["razorpayPaymentId"]}
        RPH = RazorPay_Payment_history.objects.get(
            razorpay_order_id=data["razorpayOrderId"])
        RPH.Payment_success = True
        RPH.razorpay_payment_id = data["razorpayPaymentId"]
        RPH.razorpay_signature = data["razorpaySignature"]
        RPH.isPaid = True
        RPH.RazorPay_success_createdAt = datetime.datetime.now(tz=timezone.utc)
        RPH.save()
        return Response(res)


class addorderItems(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):

        user = request.user
        data = request.data

        orderItems = data['orderItems']

        if orderItems and len(orderItems) == 0:
            return Response({'detail': 'No order Items'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            order = Order.objects.create(

                user=user,
                paymentMethod=data['paymentMethod'],
                taxPrice=data['taxPrice'],
                shippingPrice=data['shippingPrice'],
                totalPrice=data['totalPrice']
            )

            shipping = ShippingAddress.objects.create(
                order=order,
                address=data['shippingAddress']['address'],
                city=data['shippingAddress']['city'],
                pinCode=data['shippingAddress']['pinCode'],
                state=data['shippingAddress']['state'],
                phoneNum=data['shippingAddress']['phoneNum']

            )

            for i in orderItems:
                product = Product.objects.get(_id=i['product'])
                item = OrderItem.objects.create(

                    product=product,
                    order=order,
                    name=product.name,
                    qty=i['qty'],
                    price=i['price'],
                    image=product.image.url,

                )

                product.countInStock -= item.qty
                product.save()

            serializer = OrderSerializer(order, many=False)
            Send_message_for_order(
                shippingAdd=data['shippingAddress'], id=serializer.data['_id'])

            return Response(serializer.data)


class getMyOrders(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        orders = user.order_set.all()

        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)


class getOrders(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        orders = Order.objects.all()

        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)


class getOrderById(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk):

        user = request.user

        try:
            order = Order.objects.get(_id=pk)
            if user.is_staff or order.user == user:
                serializer = OrderSerializer(order, many=False)
                return Response(serializer.data)
            else:
                Response({'detail': 'Not authorized to view this order'},
                         status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'detail': 'Order does not exist'}, status=status.HTTP_400_BAD_REQUEST)


class updateOrderToPaid(APIView):
    #permission_classes = [permissions.IsAuthenticated]

    def put(self, request, pk):
        order = Order.objects.get(_id=pk)

        order.isPaid = True
        order.paidAt = datetime.datetime.now(tz=timezone.utc)
        order.save()

        return Response('Order was paid')


class updateOrderToDelivered(APIView):
    permission_classes = [permissions.IsAdminUser]

    def put(self, request, pk):
        order = Order.objects.get(_id=pk)

        order.isDelivered = True

        order.deliveredAt = datetime.datetime.now(tz=timezone.utc)
        order.save()

        return Response('Order was delivered')


class updateOrderToOutForDelivered(APIView):
    permission_classes = [permissions.IsAdminUser]

    def put(self, request, pk):
        order = Order.objects.get(_id=pk)

        order.isOutForDelivered = True

        order.outfordeliveredAt = datetime.datetime.now(tz=timezone.utc)
        order.save()

        return Response('Order was delivered')


class orderFillter(APIView):
    def get(self, request, pk, num):

        if pk == 0 or num == 0:
            return Response([])

        else:

            try:
                order = Order.objects.filter(
                    createdAt__year=pk, createdAt__month=num)
                orderCommision = OrderCommisionStatus.objects.get(
                    date__year=pk, date__month=num)
                total_price = 0
                for i in order:

                    total_price += i.totalPrice

            except:
                pass

            serializer = OrderSerializer(order, many=True)
            new_data = serializer.data
            if len(new_data) == 0:
                pass
            else:
                new_data.append(
                    [{'totalPrice': total_price, 'paidStatus': orderCommision.isPaid}])

            return Response(new_data)
