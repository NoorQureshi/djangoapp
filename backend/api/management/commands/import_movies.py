# api/management/commands/import_movies.py

import csv
from django.core.management.base import BaseCommand
from api.models import Movie, Genre
from decimal import Decimal
from datetime import datetime
from django.core.exceptions import ValidationError

class Command(BaseCommand):
    help = 'Import movies from CSV file'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='Path to the CSV file')

    def handle(self, *args, **kwargs):
        csv_file_path = kwargs['csv_file']
        with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                # Convert the 'runtime' value to a Decimal type
                runtime = Decimal(row['runtime']) if row['runtime'] else None

                # Handle release_date field
                try:
                    release_date = datetime.strptime(row['release_date'], '%Y-%m-%d').date()
                except (ValueError, TypeError):
                    release_date = None

                # Check if a movie with the same id already exists
                movie, created = Movie.objects.get_or_create(
                    id=row['id'],
                    defaults={
                        'adult': row['adult'],
                        'budget': row['budget'],
                        'homepage': row['homepage'],
                        'imdb_id': row['imdb_id'],
                        'title': row['title'],
                        'release_date': release_date,
                        'overview': row['overview'],
                        'popularity': row['popularity'],
                        'poster_path': row['poster_path'],
                        'production_companies': row['production_companies'],
                        'production_countries': row['production_countries'],
                        'revenue': row['revenue'],
                        'runtime': runtime,
                        'status': row['status'],
                        'tagline': row['tagline'],
                        'video': row['video'],
                        'vote_average': row['vote_average'],
                        'vote_count': row['vote_count'],
                        # Add other fields here
                    }
                )

                # If the movie was not created, it means it already exists
                if not created:
                    # Update the existing movie with the new data
                    movie.adult = row['adult']
                    movie.budget = row['budget']
                    movie.homepage = row['homepage']
                    movie.imdb_id = row['imdb_id']
                    movie.title = row['title']
                    movie.release_date = release_date
                    movie.overview = row['overview']
                    movie.popularity = row['popularity']
                    movie.poster_path = row['poster_path']
                    movie.production_companies = row['production_companies']
                    movie.production_countries = row['production_countries']
                    movie.revenue = row['revenue']
                    movie.runtime = runtime
                    movie.status = row['status']
                    movie.tagline = row['tagline']
                    movie.video = row['video']
                    movie.vote_average = row['vote_average']
                    movie.vote_count = row['vote_count']
                    # Update other fields here

                # Handle genres separately as it's a ManyToManyField
                genres = eval(row['genres'])
                for genre in genres:
                    genre_name = genre['name']
                    genre_obj, _ = Genre.objects.get_or_create(name=genre_name)
                    movie.genres.add(genre_obj)

                # Save the movie instance with the added genres
                movie.save()
