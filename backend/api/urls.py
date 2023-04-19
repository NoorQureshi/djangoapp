from django.urls import path, include
from rest_framework import routers
from .views import RetrieveMovieView, GenerateMovieView, TokenVerifyView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('movies/', GenerateMovieView.as_view(), name='generate_movie'),
    path("movies/<str:imdb_id>", RetrieveMovieView.as_view(), name="retrieve-movie"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
