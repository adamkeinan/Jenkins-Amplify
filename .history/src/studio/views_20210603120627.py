from django.shortcuts import render
from django.http import HttpResponse


def editor(request):
    return HttpResponse('<h1>Editor</h1>')


def login(request):
    return HttpResponse('<h1>Log-In</h1>')


def about(request):
    return HttpResponse('<h1>About</h1>')


def workspace(request):
    return HttpResponse('<h1>Workspace</h1>')


def sourcecontrol(request):
    return HttpResponse('<h1>SCM</h1>')


def security(request):
    return HttpResponse('<h1>Security</h1>')


def terminal(request):
    return HttpResponse('<h1>Terminal</h1>')


def database(request):
    return HttpResponse('<h1>Database</h1>')


def pipelines(request):
    return HttpResponse('<h1>Piplines</h1>')


def Plugins(request):
    return HttpResponse('<h1>Plugins</h1>')
