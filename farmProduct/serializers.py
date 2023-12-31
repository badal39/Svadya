from rest_framework import serializers
from . models import  Product,Review







class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class ProductSerializers(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField(read_only=True)


    class Meta:
            model = Product
            fields = '__all__'

    def get_reviews(self, obj):
                   reviews = obj.review_set.all()
                   serializer = ReviewSerializer(reviews, many=True)
                   return serializer.data




