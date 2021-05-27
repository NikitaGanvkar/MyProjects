from django.urls import path
from bank import views

# set the namespace.
app_name = 'bank'

urlpatterns=[
    path('register/',views.register,name='register'),
    path('requests/',views.requestBlood,name="request_blood"),
    path('requests/new',views.make_request,name="new_request"),
    path('user_login/',views.user_login,name='user_login'),
    path('delete/<req_id>',views.delete_request,name='delete_req'),
    
]
