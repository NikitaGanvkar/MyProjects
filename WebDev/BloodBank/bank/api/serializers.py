from rest_framework import serializers
from django.contrib.auth.models import User
from bank.models import BlogPost,NewRequest,UserProfileInfo

class BlogPostSerializer(serializers.ModelSerializer):

    class Meta():
        model = BlogPost
        fields = "__all__"

class BloodRequestSerializer(serializers.ModelSerializer):

    class Meta():
        model = NewRequest
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type':'password'},write_only=True)


    class Meta():
        model = User
        fields = ['first_name','last_name','username','email','password','password2']
        extra_kwargs = {
            'password':{'write_only':True}
        }
    # def save(self):
    #     user = User(
    #         first_name = self.validated_data['first_name'],
    #         last_name = self.validated_data['last_name'],
    #         username = self.validated_data['username'],
    #         email = self.validated_data['email'],

    #     )
    #     password = self.validated_data['password']
    #     password2 = self.validated_data['password2']

    #     if password != password2:
    #         raise serializers.ValidationError({'password':"Passwords must match",})
    #     user.set_password(password)
    #     user.save()
    #     return user

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta():
        model = UserProfileInfo
        fields = ['user','img','dob','phone','blood_group']
        