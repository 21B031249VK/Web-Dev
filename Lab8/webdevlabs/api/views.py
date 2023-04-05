from django.http.response import HttpResponse, JsonResponse
from datetime import datetime, timedelta


def home(request):
    return HttpResponse("<h1 style= 'color: blue;'>home page</h1>")


def about(request):
    return HttpResponse("<h1 style= 'color: red;'>about page</h1>")


def hours_ahead(request, hour):
    current_time = datetime.now() + timedelta(hours=int(hour))
    return HttpResponse(f"<h1 style= 'color: green;'>Time: {current_time}</h1>")


products = [
    {
        'id': _id,
        'name': f'Product {_id}',
        'price': _id * 1000,
        'description': f'Product {_id} description',
        'count': _id,
        'is_active': True
    }
    for _id in range(1, 11)
]

categories = [
    {
        'id': _id,
        'name': f'Category {_id}'
    }
    for _id in range(1, 11)
]


def product_list(request):
    return JsonResponse(products, safe=False)


def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)

    return JsonResponse({'error': 'Product not found'})


def categories_list(request):
    return JsonResponse(categories, safe=False)


def category_detail(request, category_id):
    for category in categories:
        if category['id'] == category_id:
            return JsonResponse(category)

    return JsonResponse({'error': 'Category not found'})

