import requests
from concurrent.futures import ThreadPoolExecutor
from django.core.management.base import BaseCommand
from api.models import Movie

API_KEY = 'e9dfeccf734a61b9a52d9d7660f0d0a1'
BASE_URL = 'https://api.themoviedb.org/3'
IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

class Command(BaseCommand):
    help = 'Fetch new poster images for movies with missing posters'

    def fetch_and_update_movie_poster(self, movie):
        response = requests.get(IMAGE_BASE_URL + movie.poster_path)

        if response.status_code == 404:
            # If poster is not found, fetch new image URL from the API
            api_url = f"{BASE_URL}/movie/{movie.imdb_id}?api_key={API_KEY}"
            api_response = requests.get(api_url)

            if api_response.status_code == 200:
                new_poster_path = api_response.json()['poster_path']

                if new_poster_path:
                    # Update the movie poster path in the database
                    movie.poster_path = new_poster_path
                    movie.save()
                    self.stdout.write(self.style.SUCCESS(f'Successfully updated poster for movie id {movie.id}'))
            else:
                self.stdout.write(self.style.ERROR(f'Failed to fetch new poster for movie id {movie.id}'))
        else:
            self.stdout.write(self.style.SUCCESS(f'Poster for movie id {movie.id} is valid'))

    def handle(self, *args, **options):
        movies = Movie.objects.all()

        with ThreadPoolExecutor(max_workers=100) as executor:
            executor.map(self.fetch_and_update_movie_poster, movies)
