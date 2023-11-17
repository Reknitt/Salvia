from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Hobby


from . import hobbies

# Create your views here.


#login and register users

@api_view([''])
def login(request):
    pass


@api_view(['POST'])
def register(request):
    pass

# end login and register

#CRUD


@api_view(['POST'])
def createHobby(request):
    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
def getHobbies(request):
    return JsonResponse(hobbies.hobbies, safe=False)


@api_view(['PUT'])
def updateHobby(request):
    pass


@api_view(['POST'])
def deleteHobby(request):
    pass


#end CRUD


#other functionality

def addSessionHours(request):
    pass


