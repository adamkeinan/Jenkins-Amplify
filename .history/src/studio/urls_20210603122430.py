from django.urls import path
from . import views


urlpatterns = [
    path('', views.editor, name='StudioEditor'),
    path('account/', views.account, name='Account'),
    path('about/', views.about, name='About'),
    path('workspace/', views.workspace, name='Workspace'),
    path('sourcecontrol/', views.editor, name='Sourcecontrol'),
    path('security/', views.editor, name='Security'),
    path('terminal/', views.editor, name='Terminal'),
    path('database/', views.editor, name='Database'),
    path('piplines/', views.editor, name='Piplines'),
    path('plugins/', views.editor, name='Plugins'),
]
