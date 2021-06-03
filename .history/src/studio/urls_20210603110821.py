from django.urls import path
from . import views


urlpatterns = [
    path('', admin.site.urls),
]
