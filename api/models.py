from django.db import models
from tastypie.resources import ModelResource
from modules.models import Module


class ModuleResource(ModelResource):
    class Meta:
        queryset = Module.objects.all()
        resource_name = 'modules'
        excludes = ['date_created']

        