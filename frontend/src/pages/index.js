import HomePage from '@/components/layout/homepage';
import { fetchMovies } from "@/pages/api/api";

function Home({ movies }) {
  return (
    <>
      <HomePage movies={movies} />
    </>
  );
};

export async function getStaticProps () {
  const movies = await fetchMovies();

  return {
    props: {
      movies,
    },
  };
};

export default Home;