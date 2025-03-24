from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.utils import timezone


def validate_pdf_file(value):
    if not value.name.lower().endswith('pdf'):
        raise ValidationError(_("Only PDF files can be uploaded"))


class Level(models.Model):
    name = models.CharField(max_length=255, unique=True,
                            help_text="e.g. Level 1, Level 2")

    def __str__(self):
        return self.name


class Module(models.Model):
    title = models.CharField(max_length=255, unique=True)
    course_code = models.CharField(max_length=10, unique=True, db_index=True)
    textbook = models.FileField(
        upload_to="textbooks/", null=True, blank=True, validators=[validate_pdf_file])
    notes = models.FileField(
        upload_to="notes/", null=True, blank=True, validators=[validate_pdf_file])
    difficulty_level = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(10)], help_text="Difficulty from 0 to 10")
    level = models.ForeignKey(
        Level, on_delete=models.CASCADE, related_name="modules")
    date_created = models.DateTimeField(default=timezone.now)
    summary = models.CharField(max_length=400, blank=True, default="")

    def __str__(self):
        return f"{self.course_code} - {self.title}"

    def get_textbook_url(self):
        return self.textbook.url if self.textbook else None

    def get_notes_url(self):
        return self.notes.url if self.notes else None
