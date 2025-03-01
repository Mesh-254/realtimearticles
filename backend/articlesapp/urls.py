from django.urls import path, include
from rest_framework.routers import DefaultRouter
from articlesapp import views

# Create a router and register our ViewSets with it.
router = DefaultRouter()
router.register(r'users', views.UserViewSet, basename='user')
router.register(r'tags', views.TagViewSet, basename='tag')
router.register(r'categories', views.CategoryViewSet, basename='category')
router.register(r'articles', views.ArticleViewSet, basename='article')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]