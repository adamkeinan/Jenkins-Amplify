from django.urls import path
from . import views


urlpatterns = [
    path('', views.editor, name='StudioEditor'),
    path('account/', views.account, name='Account'),
    path('about/', views.about, name='About'),
    path('workspace/', views.workspace, name='Workspace'),
    path('sourcecontrol/', views.sourcecontrol, name='Sourcecontrol'),
    path('security/', views.security, name='Security'),
    path('terminal/', views.terminal, name='Terminal'),
    path('database/', views.database, name='Database'),
    path('piplines/', views.piplines, name='Piplines'),
    path('plugins/', views.plugins, name='Plugins'),
]