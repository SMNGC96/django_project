# Generated by Django 5.1.6 on 2025-03-05 11:46

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='module',
            name='date_created',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
