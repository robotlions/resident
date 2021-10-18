from django.db import models
from django.conf import settings

# Create your models here.

class Schedule(models.Model):

    name = models.CharField(max_length=255, null=True)
    time = models.CharField(max_length=255, null=True)
    date = models.CharField(max_length=255, null=True)
    lunchdinner = models.CharField(max_length=255, null=True)
    location = models.CharField(max_length=255, null=True)


    def __str__(self):
        return self.name