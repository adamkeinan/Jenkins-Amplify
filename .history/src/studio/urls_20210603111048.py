from django.urls import path
from . import views


urlpatterns = [
    path('', views.editor, name='PaintBrush Editor'  ),
]
