from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    # is_admin default False [cite: 19]
    is_admin = models.BooleanField(default=False)
    # is_member default True [cite: 20]
    is_member = models.BooleanField(default=True)

    def __str__(self):
        return self.username