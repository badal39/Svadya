from django.shortcuts import render

from rest_framework.views import APIView

from rest_framework.response import Response


from .serializers import BlogSerializer,VlogsSerializer,CommingSoonExcimentSerializer

from .models import BlogVidoes,Vlogs,CommingSoonExciment





class getBlogsVidoes(APIView):
    def get(self,request,upto):
        upto = int(upto)
        if upto==0:
              blog = BlogVidoes.objects.all()
        else:
              blog = BlogVidoes.objects.all()[:upto]
        serailizer = BlogSerializer(blog,many=True)
        return Response(serailizer.data)

class getBlogsVidoe(APIView):
    def get(self,request,pk):


        blog = BlogVidoes.objects.get(_id=pk)

        serailizer = BlogSerializer(blog,many=False)
        return Response(serailizer.data)


class getBlogsImages(APIView):
    def get(self,request):


        vlog = Vlogs.objects.all()
        vlogserailizer = VlogsSerializer(vlog,many=True)

        return Response(vlogserailizer.data)







class  addLike(APIView):
    #permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        user = request.user
        vlogs = Vlogs.objects.get(_id=pk)
        data = request.data

        commingsoonexciment = CommingSoonExciment.objects.create(
            user=user,
            vlogs=vlogs,
            isexcited=data["isexcited"],
            isnotexcited=data["isnotexcited"]
        )


        if data["isexcited"] == True:
                 vlogs.numexcited+=1

        if data["isnotexcited"] == True:
            vlogs.numnoexcited += 1

        return Response(' 👍')






