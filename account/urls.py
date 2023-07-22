from django.urls import path

from . import views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile.as_view(), name="user-profile"),
    path('', views.getUsers.as_view(), name="users"),
    path('profile/update/', views.UpdateUserProfile.as_view(), name="users-profile-update"),

    path('register/', views.registerUser.as_view(), name="user-register"),
    path('delete/<str:pk>/', views.deleteUser.as_view(), name="user-delete"),

]