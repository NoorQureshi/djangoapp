from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from rest_framework import status
from .models import Movie
from .serializers import MovieSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import jwt
from rest_framework import views
from django.conf import settings


# class ListMovieView(ListCreateAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer
#     http_method_names = ['get']
#     # def create(self, request, *args, **kwargs):
#     #     serializer = self.get_serializer(data=request.data)
#     #     if serializer.is_valid():
#     #         serializer.save()
#     #         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GenerateMovieView(ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    # http_method_names = ['post', 'get']
    # permission_classes = (IsAuthenticated, )

    def create(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RetrieveMovieView(RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    lookup_field = 'imdb_id'

class TokenVerifyView(views.APIView):
    def post(self, request):
        token = request.data.get('token', None)
        if not token:
            return Response({'error': 'Token is missing'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            return Response({'data': decoded_token}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError:
            return Response({'error': 'Token is expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.InvalidTokenError:
            return Response({'error': 'Token is invalid'}, status=status.HTTP_400_BAD_REQUEST)