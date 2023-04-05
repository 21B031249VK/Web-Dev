from django.contrib import admin
from django.urls import path, re_path, include
from api import views


urlpatterns = [
    path('home/', views.home),
    path('about/', views.about),
    re_path(r'^time/plus/(\d{1,2})/$', views.hours_ahead),
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail),
    path('categories/', views.categories_list),
    path('categories/<int:category_id>/', views.category_detail),
]
