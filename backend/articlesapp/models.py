from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils.text import slugify
from django.utils.timezone import now
import uuid


class UserManager(BaseUserManager):
    """Custom manager for User model where email is the unique identifier instead of username."""

    def create_user(self, email, password=None, **extra_fields):
        """Creates and returns a regular user with the given email and password."""
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """Creates and returns a superuser with is_staff and is_superuser set to True."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    """Custom user model extending Django's default user, using email as the primary identifier."""
    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, editable=False,
        help_text="Unique identifier for the user (UUID)."
    )
    email = models.EmailField(
        unique=True, help_text="User email address (unique identifier).")
    profile_picture = models.ImageField(
        upload_to="profile_pics/", blank=True, null=True,
        help_text="User profile picture."
    )
    bio = models.TextField(blank=True, null=True,
                           help_text="Short bio for the user.")

    # Keep username but allow it to be blank/null to avoid errors on superuser
    username = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []  # No additional required fields for superusers

    # Attach custom manager
    objects = UserManager()

    def __str__(self):
        return self.email


class Subscriber(models.Model):
    """Model representing email subscribers."""
    email = models.EmailField(
        unique=True, help_text="Subscriber's email address.")
    date_subscribed = models.DateTimeField(
        auto_now_add=True, help_text="Date and time when the user subscribed."
    )

    def __str__(self):
        return self.email


class Category(models.Model):
    """Represents categories for articles."""
    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, editable=False,
        help_text="Unique identifier for the category (UUID)."
    )
    name = models.CharField(
        max_length=50, unique=True, help_text="Name of the category (must be unique)."
    )
    slug = models.SlugField(
        unique=True, blank=True, null=True,
        help_text="URL-friendly slug for the category. Auto-generated if blank."
    )
    description = models.TextField(
        blank=True, help_text="Optional description of the category."
    )
    image = models.ImageField(
        upload_to="category_images/", blank=True, null=True,
        help_text="Optional category image."
    )

    def save(self, *args, **kwargs):
        """Auto-generates a slug from the name if not provided."""
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Tag(models.Model):
    """Tag model for categorizing articles."""
    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, editable=False,
        help_text="Unique identifier for the tag (UUID)."
    )
    name = models.CharField(
        max_length=50, unique=True, help_text="Name of the tag (must be unique)."
    )

    def __str__(self):
        return self.name


class Article(models.Model):
    """Represents main articles."""

    def default_category():
        """Returns a default category if none is provided."""
        return Category.objects.get_or_create(name="Uncategorized")[0]

    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, editable=False,
        help_text="Unique identifier for the article (UUID)."
    )
    title = models.CharField(
        max_length=150, unique=True, help_text="Title of the article (must be unique)."
    )
    slug = models.SlugField(
        unique=True, blank=True,
        help_text="URL-friendly slug for the article. Auto-generated if blank."
    )
    excerpt = models.TextField(
        blank=True, null=True, help_text="SEO-friendly summary or meta description."
    )
    content = models.TextField(help_text="Main content of the article.")
    date_published = models.DateTimeField(
        default=now, help_text="Publication date and time."
    )
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="articles",
        help_text="Author who wrote the article."
    )
    category = models.ForeignKey(
        Category, on_delete=models.SET_DEFAULT, default=default_category, null=True,
        related_name="articles",
        help_text="Category the article belongs to. Defaults to 'Uncategorized' if removed."
    )
    image = models.ImageField(
        upload_to="article_images/", blank=True, null=True,
        help_text="Optional image for the article."
    )
    tags = models.ManyToManyField(
        Tag, related_name="articles", blank=True,
        help_text="Tags associated with the article. Can be multiple."
    )
    is_featured = models.BooleanField(
        default=False, help_text="Marks the article as featured."
    )

    class Meta:
        indexes = [
            # Index for faster querying by date
            models.Index(fields=["date_published"]),
            # Index for efficient lookups by slug
            models.Index(fields=["slug"]),
        ]
        # Default ordering by latest articles first
        ordering = ["-date_published"]

    def save(self, *args, **kwargs):
        """Auto-generates a slug from the title if not provided."""
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
