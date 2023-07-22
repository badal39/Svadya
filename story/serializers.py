

from rest_framework import serializers
from . models import  BlogVidoes,Vlogs,CommingSoonExciment




class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogVidoes
        fields = '__all__'


class CommingSoonExcimentSerializer(serializers.ModelSerializer):
    class Meta:
                model = CommingSoonExciment
                fields = '__all__'

class VlogsSerializer(serializers.ModelSerializer):

    class Meta:
                model = Vlogs
                fields = '__all__'







