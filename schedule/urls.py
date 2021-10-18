from django.urls import path, include

from .views import ScheduleListCreateAPIView, ScheduleRetrieveUpdateDestroyAPIView

app_name = 'schedule'

urlpatterns = [

    path('schedule/', ScheduleListCreateAPIView.as_view()),
    path('schedule/edit/<int:pk>/', ScheduleRetrieveUpdateDestroyAPIView.as_view()),

]