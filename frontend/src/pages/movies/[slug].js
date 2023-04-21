import { useRouter } from "next/router";

const MovieDetail = ({ movie }) => {
  const backgroundImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="container mx-auto p-12">
      <div
        className="bg-cover bg-center rounded-md shadow-lg p-6 relative backdrop-blur-xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 opacity-60"></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white bg-opacity-95 rounded-md p-6 relative">
          <div className="col-span-1 md:col-span-4 flex flex-col items-center">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full md:w-64 h-auto object-cover rounded-md shadow-md"
            />
          </div>
          <div className="col-span-1 md:col-span-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{movie.title}</h1>
            <div className="mb-4">
              <p className="text-sm text-gray-600">{movie.genres.map((genre) => genre.name).join(", ")}</p>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Overview</h2>
              <p className="text-sm text-gray-600">{movie.overview}</p>
            </div>
            {/* Add more movie details as desired */}
          </div>
        </div>
      </div>
    </div>
  );
};
  
  
export async function getServerSideProps({ params }) {
  const { slug } = params;
  const response = await fetch(`http://127.0.0.1:8000/api/movies/${slug}`);
  const movie = await response.json();

  return {
    props: {
      movie,
    },
  };
}

export default MovieDetail;
