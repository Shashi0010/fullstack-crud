from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField("Name", max_length=80)
    email = models.EmailField()
    document = models.CharField("Document", max_length=20)
    address = models.CharField("Address", max_length=100)
    phone = models.CharField("Phone", max_length=15)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

def __str__(self):
    return self.name

