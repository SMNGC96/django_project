from django.http import HttpResponse, Http404
from django.shortcuts import get_object_or_404, render
from .models import Module

# Create your views here.


def index(request):
    modules = Module.objects.all()  # SELECT * FROM modules_module
    return render(request, 'modules/modules.html', {'modules': modules})


def detail(request, module_course_code):
    module = get_object_or_404(Module, course_code__iexact=module_course_code)
    return render(request, 'modules/detail.html', {'module': module})
