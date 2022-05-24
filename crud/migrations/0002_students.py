# Generated by Django 4.0.4 on 2022-05-17 12:57

from django.db import migrations

def create_data(apps, schema_editor):
    Student = apps.get_model('crud', 'Student');
    Student(name="Shashi Kanth", email="shashi14364@gmial.com", document="143641", address="Hyderabad", phone="6302624724").save()


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]
