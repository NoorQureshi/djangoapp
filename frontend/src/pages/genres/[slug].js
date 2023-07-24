import Link from "next/link";
import { fetchMoviesByGenre } from "@/pages/api/api";

const MovieCard = ({ movie }) => (
  <Link key={movie.imdb_id} href="/movies/[imdb_id]" as={`/movies/${movie.imdb_id}`}>
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover"/>
      <div className="px-6 py-4">
        <h3 className="text-md font-medium text-gray-900 mt-2 truncate">{movie.title}</h3>
      </div>
    </div>
  </Link>
);

const MoviesGrid = ({ movies, genre }) => (
  <div className="bg-white p-8">
    <h3 className="text-1xl h-10 font-medium text-gray-600 underline underline-offset-8">Movies by {genre}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdb_id} movie={movie} />
      ))}
    </div>
  </div>
);

const GenrePage = ({ movies, genre }) => (
  <div className="container mx-auto p-12">
    <div className="flex flex-col items-left justify-left">
      <MoviesGrid movies={movies} genre={genre} />
    </div>
  </div>
);

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const genre = slug.charAt(0).toUpperCase() + slug.slice(1);
  const movies = await fetchMoviesByGenre(slug);

  return {
    props: {
      movies,
      genre,
    },
  };
}

export default GenrePage;
