from django.contrib import admin
from .models import UserProfileInfo,BlogPost,NewRequest

# Register your models here.
admin.site.register(UserProfileInfo)
admin.site.register(BlogPost)
admin.site.register(NewRequest)
