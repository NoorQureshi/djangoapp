import axios from "axios";

const API_KEY = 'e9dfeccf734a61b9a52d9d7660f0d0a1'
const BASE_URL = 'https://api.themoviedb.org/3'

export async function fetchMovieDetails(movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {
            api_key: API_KEY,
        },
    });
    return response.data;
}

export async function fetchMovieTrailer(movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
      params: {
        api_key: API_KEY,
      },
    });
    const trailer = response.data.results.find((video) => video.type === 'Trailer');
    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
}
  
export async function fetchMovieCast(movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    const cast = response.data.cast.slice(0, 5).map((member) => ({
      name: member.name,
      profilePicture: member.profile_path
        ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
        : null,
    }));
    return cast;
}
