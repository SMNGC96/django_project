from django.contrib import admin
from .models import Module, Level, validate_pdf_file

# Register your models here.


class ModuleAdmin(admin.ModelAdmin):
    list_display = ('course_code', 'title', 'difficulty_level')
    exclude = ('date_created',)


class LevelAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


admin.site.register(Module, ModuleAdmin)
admin.site.register(Level, LevelAdmin)
