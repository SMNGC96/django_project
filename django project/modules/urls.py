from django.urls import path
from . import views

app_name = 'modules'

urlpatterns = [
    path('', views.index, name='index'),
    path('<module_course_code>', views.detail, name='detail')
]
