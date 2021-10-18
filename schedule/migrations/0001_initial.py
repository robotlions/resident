# Generated by Django 3.2.3 on 2021-08-01 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, null=True)),
                ('time', models.CharField(max_length=255, null=True)),
                ('date', models.CharField(max_length=255, null=True)),
                ('lunchdinner', models.CharField(max_length=255, null=True)),
                ('location', models.CharField(max_length=255, null=True)),
            ],
        ),
    ]
