from rest_framework import serializers
from .models import Article, Category, Subscriber, Tag, User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the User model.

    This serializer is responsible for converting User model instances 
    into JSON format and handling user-related API requests.
    """

    articles = serializers.HyperlinkedRelatedField(
        many=True, queryset=Article.objects.all(), view_name='article-detail')

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name',
                  'last_name', 'profile_picture', 'bio', 'articles']
        # Fields included:
        # - id: Unique identifier for the user
        # - username: The user's username
        # - email: The user's email address
        # - first_name: The user's first name stillexist in abstract user
        # - last_name: The user's last name


class SubscriberSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the Subscriber model.

    This serializer handles the conversion of Subscriber model instances 
    into JSON format and vice versa. It includes all fields in the model.
    """
    class Meta:
        model = Subscriber
        fields = "__all__"  # Includes all fields from the Subscriber model


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the Category model.

    This serializer is responsible for converting Category model instances 
    into JSON format and handling category-related API requests.
    """
    articles = serializers.HyperlinkedRelatedField(
        many=True, read_only=True, view_name="article-detail", lookup_field="slug")

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'image', 'description', 'articles']

        extra_kwargs = {
            # Use 'slug' instead of 'id' in URLs
            'url': {'lookup_field': 'slug'}
        }
        # Fields included:
        # - id: Unique identifier for the category
        # - name: Name of the category
        # - slug: URL-friendly identifier for the category
        # - image: Optional image associated with the category
        # - description: Brief description of the category


class TagSerializer(serializers.HyperlinkedModelSerializer):
    """Serializer for the Tag model"""
    class Meta:
        model = Tag
        fields = ["id", "name"]


class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the Article model.

    This serializer converts Article model instances into JSON format
    and facilitates API interactions for article-related operations.
    """
    author = serializers.ReadOnlyField(source='author.first_name')
    category = serializers.SlugRelatedField(
        queryset=Category.objects.all(), slug_field='slug')
    tags = serializers.SlugRelatedField(
        many=True, queryset=Tag.objects.all(), slug_field='name')

    class Meta:
        model = Article
        fields = [
            'id', 'title', 'slug', 'excerpt', 'content', 'date_published',
            'author', 'category', 'image', 'tags', 'is_featured'
        ]

        extra_kwargs = {
            # Use 'slug' instead of 'id' in URLs
            'url': {'lookup_field': 'slug'}
        }

        # Fields included:
        # - id: Unique identifier for the article
        # - title: The title of the article
        # - slug: URL-friendly identifier for the article
        # - excerpt: Short description for SEO and previews
        # - content: The main content of the article
        # - date_published: The date and time when the article was published
        # - author: Foreign key reference to the User model (article author)
        # - category: Foreign key reference to the Category model
        # - image: Optional image associated with the article
        # - tags: Comma-separated tags for SEO and filtering
        # - is_featured: Boolean field indicating if the article is featured
