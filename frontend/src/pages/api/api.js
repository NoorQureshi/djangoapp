export const fetchMovies = async () => {
  try {
    const data = await fetch("http://127.0.0.1:8000/api/movies/");
    const movies = await data.json();
    return movies;
  } catch (error) {
    console.error("Error fetching data: " + error);
    return [];
  }
};
