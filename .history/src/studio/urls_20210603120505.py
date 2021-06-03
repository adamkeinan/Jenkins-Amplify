from django.urls import path
from . import views


urlpatterns = [
    path('', views.editor, name='PaintBrush'),
    path('editor/', views.editor, name='Editor'),
    path('', views.editor, name='PaintBrush Editor'),
    path('', views.editor, name='PaintBrush Editor'),
    path('', views.editor, name='PaintBrush Editor'),
    path('', views.editor, name='PaintBrush Editor'),
    path('', views.editor, name='PaintBrush Editor'),
    path('', views.editor, name='PaintBrush Editor'),
    path('', views.editor, name='PaintBrush Editor'),
    path('', views.editor, name='PaintBrush Editor'),
    path('', views.editor, name='PaintBrush Editor'),
    path('', views.editor, name='PaintBrush Editor'),
]
