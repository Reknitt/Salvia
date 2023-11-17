from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Hobby(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    image = models.CharField(max_length=300, null=True, blank=True)
    totalHours = models.FloatField()

    def __str__(self) -> str:
        return self.title