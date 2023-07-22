from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProductSerializers
from django.contrib.auth.models import User
from .models import Product,Review,ProductTag

from rest_framework import authentication, permissions

from django.contrib.auth.hashers import make_password
from rest_framework import status

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView











class getProducts(APIView):
    def get(self,request,pk):

        dit = {'honey':1,'ghee':2,'combo':3}
        if pk=="all":
            products = Product.objects.all()
            #products = Product.objects.exclude(tag=4)

        else:
             products = Product.objects.filter(tag=dit[pk])

        serailizer = ProductSerializers(products,many=True)
        return Response(serailizer.data)




#### all products list



class getProduct(APIView):
    def get(self,request,id):

        product = Product.objects.get(_id=id)
        serailizer = ProductSerializers(product,many=False)


        return Response(serailizer.data)

        #return Response()


class deleteProduct(APIView):
    permission_classes = [permissions.IsAdminUser]

    def delete(self,request, pk):
        product = Product.objects.get(_id=pk)
        product.delete()
        return Response('Producted Deleted')


class createProduct(APIView):


    permission_classes = [permissions.IsAdminUser]

    def post(self,request):

        user = request.user

        tag = ProductTag.objects.get(_id=1)
        product = Product.objects.create(
            user=user,
            tag=tag,
            name='Sample Name',
            price=0,
            brand='Sample Brand',
            countInStock=0,
            description='',
        )

        serializer = ProductSerializers(product, many=False)
        return Response(serializer.data)

class updateProduct(APIView):
       permission_classes = [permissions.IsAdminUser]
       def put(self,request,pk):
           data = request.data

           tag = ProductTag.objects.get(_id=data['tag'])

           product = Product.objects.get(_id=pk)


           product.name = data['name']
           product.tag=tag
           product.price = data['price']
         #  product.brand = data['brand']
           product.countInStock = data['countInStock']
           product.description = data['description']

           product.detail0 = data['detail0']
           product.detail1 = data['detail1']
           product.detail2 = data['detail2']
           product.detail3 = data['detail3']

           product.benefits1 = data['benefits1']
           product.benefits2 = data['benefits2']
           product.benefits3 = data['benefits3']
           product.benefits4 = data['benefits4']


           product.save()

           serializer = ProductSerializers(product, many=False)
           return Response(serializer.data)


class  uploadImage(APIView):
         def post(self,request):
             data = request.data

             product_id = data['product_id']
             product = Product.objects.get(_id=product_id)
             #product.image.delete()
             product.image = request.FILES.get('image')
             product.save()

             return Response('Image was uploaded')



class createProductReview(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self,request,pk):
        user = request.user
        product = Product.objects.get(_id=pk)
        data = request.data

        # 1 - Review already exists
        alreadyExists = product.review_set.filter(user=user).exists()
        if alreadyExists:
            content = {'detail': 'Product already reviewed'}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

        # 2 - No Rating or 0
        elif data['rating'] == 0:
            content = {'detail': 'Please select a rating'}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

        # 3 - Create review
        else:
            review = Review.objects.create(
                user=user,
                product=product,
                name=user.first_name,
                rating=data['rating'],
                comment=data['comment'],
            )

            reviews = product.review_set.all()
            product.numReviews = len(reviews)

            total = 0
            for i in reviews:
                total += i.rating

            product.rating = total / len(reviews)
            product.save()

            return Response('Review Added')