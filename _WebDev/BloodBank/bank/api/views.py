from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

from bank.models import BlogPost,UserProfileInfo,NewRequest,User
from bank.api.serializers import BlogPostSerializer,BloodRequestSerializer,UserProfileSerializer

@api_view(['GET'])
def api_detail_blog_view(request):
    try:
        blog_post = BlogPost.objects.all()
    except ObjectDoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BlogPostSerializer(blog_post,many=True)
        return Response(serializer.data)

@api_view(['POST'])
def api_add_blog_view(request):
    account = User.objects.get(pk=1)
    blog_post = BlogPost(user=account)

    if request.method == "POST":
        serializer = BlogPostSerializer(blog_post,data=request.data)
        data = {}
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET',])
def api_detail_request_view(request):
    try:
        reqs = NewRequest.objects.all()
    except ObjectDoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BloodRequestSerializer(reqs,many=True)
        return Response(serializer.data)

@api_view(['POST',])
def api_add_request_view(request):
    req_form = NewRequest()

    if request.method == "POST":
        serializer = BloodRequestSerializer(req_form,data=request.data)
        data={}
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)





