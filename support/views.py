from django.shortcuts import render


from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import FeedBackSerializer


from .models import FeedBack
# Create your views here.



class FeedBackview(APIView):

    def post(self,request):

        data = request.data


        feedback = FeedBack.objects.create(

                isSatisfied = data['issatisfied'],

                comment=data['comment'],



            )





        feedback.save()

        return Response('Feedback Added')