from django.shortcuts import render
from django.contrib.auth import authenticate,login,logout
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from bank.forms import UserForm,UserProfileInfoForm,NewRequestForm,BlogPostForm
from bank.models import BlogPost,NewRequest
#don't forget to add your models


# Create your views here.

# INDEX VIEW
def index(request):
    return render(request,'bank/index.html')

# REGISTER VIEW
def register(request):
    registered = False

    if request.method == 'POST':
        user_form = UserForm(data=request.POST)
        profile_form = UserProfileInfoForm(data=request.POST)

        if user_form.is_valid() and profile_form.is_valid():

            user = user_form.save()
            user.set_password(user.password)
            user.save()

            profile = profile_form.save(commit=False)
            # one to one relationship defined here.
            profile.user = user

            if 'img' in request.FILES:
                profile.img = request.FILES['img']


            profile.save()

            registered = True
        else:
            print(user_form.errors,profile_form.errors)
    else:
        user_form = UserForm()
        profile_form = UserProfileInfoForm()

    return render(request,'bank/registration.html',
                                        {'user_form':user_form,
                                         'profile_form':profile_form,
                                         'registered':registered})


# LOGIN VIEW
def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username,password=password)

        if user:
            if user.is_active:
                login(request,user)
                return HttpResponseRedirect(reverse('index'))
            else:
                return HttpResponse("Account Not Active!!")
        else:
            print("Someone tried to login and failed!")
            print("Username: {} and password {}".format(username,password))
            return HttpResponse("invalid login details supplied")
    else:
        return render(request,'bank/login.html',{})


# NEW BLOG POST VIEW
@login_required
def newPost(request):
    if request.method =='POST':
        blog_form = BlogPostForm(request.POST,request.FILES)
        if blog_form.is_valid():
            blog = blog_form.save(commit=False)
            blog.user= request.user
            if 'blog_img' in request.FILES:
                blog.img = request.FILES['blog_img']


            blog.save()
            return HttpResponseRedirect(reverse('blog'))

        else:
            print(blog_form.errors)
    else:
        blog_form = BlogPostForm()

    return render(request,'bank/newpostForm.html',{'blog_form':blog_form})

# BLOG PAGE VIEW
def blogpage(request):
    blogs = BlogPost.objects.all()
    return render(request,'bank/blog.html',{'blogs':blogs})


# MAKE BLOOD REQUEST VIEW
def make_request(request):
    if request.method == 'POST':
        req_form = NewRequestForm(request.POST,request.FILES)
        if req_form.is_valid():
            req = req_form.save(commit=False)
            if 'doc' in request.FILES:
                 req.doc = request.FILES['doc']
            req.save()
            return HttpResponseRedirect(reverse('index'))
        else:
            print(req_form.errors)
    else:
        req_form = NewRequestForm()

    return render(request,'bank/newRequest.html',{'req_form':req_form})


# SHOW BLOOD REQUEST VIEW
@login_required
def requestBlood(request):
    reqs = NewRequest.objects.all()
    return render(request,'bank/request.html',{'reqs':reqs})


# DELETE BLOOD REQUEST VIEW
@login_required
def delete_request(request,req_id=None):
    post_to_delete=NewRequest.objects.get(id=req_id)
    post_to_delete.delete()
    return HttpResponseRedirect(reverse('bank:request_blood'))


# LOGOUT VIEW    
@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))


