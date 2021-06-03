from django.urls import path
from . import views


urlpatterns = [
    path('', views.editor, name='Editor'),
    path('account/', views.editor, name='Account'),
    path('about/', views.editor, name='About'),
    path('workspace/', views.editor, name='Workspace'),
    path('sourcecontrol/', views.editor, name='Sourcecontrol'),
    path('security/', views.editor, name='Security'),
    path('terminal/', views.editor, name='PaintBrush Editor'),
    path('database/', views.editor, name='PaintBrush Editor'),
    path('piplines/', views.editor, name='PaintBrush Editor'),
    path('plugins/', views.editor, name='PaintBrush Editor'),
]
