from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

urlpatterns = [
    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),
    path('tags/', view=views.TagList.as_view(), name='tag-list'),
    path('tags/<uuid:pk>/', view=views.TagDetail.as_view(), name='tag-detail'),
    path('articles/', views.ArticleList.as_view(), name='article-list'),
    path('articles/<uuid:pk>/', views.ArticleDetail.as_view(), name='article-detail'),

]
