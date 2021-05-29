# Generated by Django 3.0.2 on 2020-04-28 03:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bank', '0010_blogpost_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewRequest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('msg', models.CharField(max_length=128)),
                ('phone', models.CharField(max_length=10)),
                ('blood_group', models.CharField(choices=[('A+', 'A +ve'), ('B+', 'B +ve'), ('AB+', 'AB +ve'), ('O+', 'O +ve'), ('A-', 'A -ve'), ('B-', 'B -ve'), ('AB-', 'AB -ve'), ('O-', 'O -ve')], max_length=3)),
                ('email', models.EmailField(max_length=128)),
                ('created_at', models.DateField(default=datetime.datetime.now)),
            ],
        ),
    ]