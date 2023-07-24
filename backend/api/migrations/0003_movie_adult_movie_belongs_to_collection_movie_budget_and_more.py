# Generated by Django 4.2 on 2023-07-21 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_genre_remove_movie_genres_movie_genres'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='adult',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='movie',
            name='belongs_to_collection',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='budget',
            field=models.BigIntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='homepage',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='original_language',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.AddField(
            model_name='movie',
            name='original_title',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='movie',
            name='popularity',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='production_companies',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='production_countries',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='revenue',
            field=models.BigIntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='runtime',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='spoken_languages',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='status',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name='movie',
            name='tagline',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='video',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='movie',
            name='vote_average',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movie',
            name='vote_count',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='genres',
            field=models.ManyToManyField(blank=True, related_name='movies', to='api.genre'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='overview',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='poster_path',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='release_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
