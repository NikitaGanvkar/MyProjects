from django.urls import path
from bank.api.views import (
                api_detail_blog_view,
                api_add_blog_view,
                api_detail_request_view,
                api_add_request_view,)


app_name = 'bank'

urlpatterns = [
    path('blog',api_detail_blog_view,name="blog-detail"),
    path('blog/create',api_add_blog_view,name="blog-create"),
    path('requests',api_detail_request_view,name="request-detail"),
    path('requests/new',api_add_request_view,name="request-new"),
]
