from django.db import models

# Create your models here.
class Movie(models.Model):
    imdb_id = models.CharField(max_length=10, unique=True)
    title = models.CharField(max_length=255)
    release_date = models.TextField()
    overview = models.TextField()
    poster_path = models.TextField()

    def __str__(self):
        return self.title