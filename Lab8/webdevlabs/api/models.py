from django.db import models

"""
create table product(
    id INTEGER,
    name VARCHAR(255),
    price NUMERIC default 1000,
    description TEXT(1000),
    count INTEGER default 1,
    is_active BOOLEAN default TRUE 
);
"""

"""
create table category(
    id INTEGER,
    name VARCHAR(255)
);
"""


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField(max_length=1000)
    count = models.IntegerField(default=1)
    is_active = models.BooleanField(default=True)


class Category(models.Model):
    name = models.CharField(max_length=255)
