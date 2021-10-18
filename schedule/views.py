from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Schedule
from .serializers import ScheduleSerializer

# Create your views here.
class ScheduleListCreateAPIView(generics.ListCreateAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ScheduleRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer