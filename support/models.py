from django.db import models

# Create your models here.




class FeedBack(models.Model):



    isSatisfied = models.BooleanField(default=False)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.comment)

