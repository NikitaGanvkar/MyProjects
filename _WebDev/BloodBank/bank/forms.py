from django import forms
from django.contrib.auth.models import User
from bank.models import UserProfileInfo,BlogPost,NewRequest


class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())


    class Meta():
        model = User
        fields = ('first_name','last_name','username','email','password')


class UserProfileInfoForm(forms.ModelForm):

    class Meta():
        model = UserProfileInfo
        fields = ('img','dob','phone','blood_group')

class BlogPostForm(forms.ModelForm):

    class Meta():
        model = BlogPost
        fields = ('title','blog_img','desc','created_at')

class NewRequestForm(forms.ModelForm):

    class Meta():
        model = NewRequest
        fields = ('title','name','msg','phone','blood_group','email','doc','city','created_at')
