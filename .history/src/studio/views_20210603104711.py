from django.shortcuts import render
from django.http import HttpResponse


def editor(request):
    return HttpResponse('<h1> PaintBrush Editor</h1>')