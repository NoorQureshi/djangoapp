import requests
from concurrent.futures import ThreadPoolExecutor
from django.core.management.base import BaseCommand
from api.models import Movie, Genre

API_KEY = 'e9dfeccf734a61b9a52d9d7660f0d0a1'
BASE_URL = 'https://api.themoviedb.org/3'
IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

class Command(BaseCommand):
    help = 'Update movies data from TMDB API'

    def fetch_movie_data(self, movie):
        api_url = f"{BASE_URL}/movie/{movie.imdb_id}?api_key={API_KEY}"
        try:
            response = requests.get(api_url)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            self.stdout.write(self.style.ERROR(f'Failed to fetch data for movie id {movie.id}: {str(e)}'))
            return None

    def is_invalid_poster(self, poster_path):
        if not poster_path:
            return True
        response = requests.get(IMAGE_BASE_URL + poster_path)
        return 'File not Found' in response.content.decode()

    def delete_movie(self, movie):
        self.stdout.write(self.style.WARNING(f'Deleting movie id {movie.id} due to API error or invalid poster...'))
        movie.delete()

    def handle(self, *args, **kwargs):
        movies = Movie.objects.all()

        with ThreadPoolExecutor(max_workers=100) as executor:
            # Fetch movie data for all movies concurrently
            movie_data_list = list(executor.map(self.fetch_movie_data, movies))

        for movie, movie_data in zip(movies, movie_data_list):
            if movie_data:
                status_code = movie_data.get('status_code', None)
                if status_code == 404 or status_code == 429:
                    self.delete_movie(movie)
                else:
                    poster_path = movie_data.get('poster_path', '')
                    if self.is_invalid_poster(poster_path):
                        self.delete_movie(movie)
                    else:
                        self.stdout.write(self.style.SUCCESS(f'Poster for movie id {movie.id} is valid'))
