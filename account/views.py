from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User

from .serializers import UserSerializer,UserSerializerWithToken,UserProfieSerializer

from .models import UserProfile

from rest_framework import authentication, permissions

from django.contrib.auth.hashers import make_password
from rest_framework import status

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView




class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
            data = super().validate(attrs)

            serializer = UserSerializerWithToken(self.user).data
            for k, v in serializer.items():
                    data[k] = v


            try:
              userprofile = UserProfile.objects.get(user_id=data['_id'])
              isfarmer = UserProfieSerializer(userprofile, many=False).data["isFarmer"]

            except:
                isfarmer = False
                userprofile = UserProfile.objects.create(
                    user_id=data['_id'],
                    isFarmer=False

                )

            data.update({'isFarmer':isfarmer})
            return data



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



class getUserProfile(APIView):
    #authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    def get(self,request):
        user = request.user
        serailizer = UserSerializer(user,many=False )
        return Response(serailizer.data)


class UpdateUserProfile(APIView):
    #authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    def put(self,request):
        user = request.user
        serailizer = UserSerializerWithToken(user,many=False )
        data = request.data
        user.first_name = data['name']
        user.username = data['email']
        user.email = data['email']
       # if data['email'] != '':
        #        user.email = data['email']
        if data['password'] != '':
                user.password = make_password(data['password'])

        user.save()

        return Response(serailizer.data)




class getUsers(APIView):
    permission_classes = [permissions.IsAdminUser]
    def get(self,request):
        user = User.objects.all()
        serailizer = UserSerializer(user,many=True)
        return Response(serailizer.data)

class deleteUser(APIView):
    permission_classes = [permissions.IsAdminUser]
    def delete(self,request,pk):
        userForDeletion = User.objects.get(id=pk)
        userForDeletion.delete()
        return Response('User was deleted')

class registerUser(APIView):
    def post(self,request):
        data = request.data
        try:
            user = User.objects.create(
                first_name=data['name'],
                username=data['email'],
                email=data['email'],
                password=make_password(data['password'])
            )


            serializer = UserSerializerWithToken(user, many=False)
            data = serializer.data
            userprofile = UserProfile.objects.create(
                user_id=serializer.data['_id'],
                isFarmer=False

            )
            data.update({'isFarmer':False})
            return Response(data)
        except:
            message = {'detail': 'User with this email already exists'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
