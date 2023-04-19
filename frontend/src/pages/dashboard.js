import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { fetchMovies } from "@/pages/api/api";
import withAuth from '@/utils/withAuth';

const Dashboard = ({ user }) => {
  const [movieId, setMovieId] = useState('');
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e9dfeccf734a61b9a52d9d7660f0d0a1&language=en-US`)
      .then(({data}) => {
        const {imdb_id, title, overview, poster_path, release_date} = data;
        setMovieData({imdb_id, title, overview, poster_path, release_date});
      })
      .catch(error => {
        console.log(error)
      })
  }, [movieId]);

  function handleFetch(e) {
    e.preventDefault()
    if (movieId === '') {
      return;
    }
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e9dfeccf734a61b9a52d9d7660f0d0a1&language=en-US`)
      .then(({data}) => {
        const {imdb_id, title, overview, poster_path, release_date} = data;
        setMovieData({imdb_id, title, overview, poster_path, release_date});
      })
      .catch(error => {
        console.log(error)
      })
  }

  function handleSave(e) {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/movies/`, movieData)
      .then(response => {
        console.log(response.data)
        alert('Movie saved successfully')
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div className="flex justify-center items-center grid-cols-2 grid-bg mx-auto max-w-screen-lg">
    <div className="w-full">
      <form onSubmit={handleFetch} className="mt-4 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="movie-id">Movie ID</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="movie-id" type="text" placeholder="Enter Movie ID" value={movieId} onChange={(e) => setMovieId(e.target.value)} />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Fetch Movie</button>
      </form>
      {
        movieData && (
          <form onSubmit={handleSave} class="mt-4 max-w-md mx-auto">
            <div className="flex flex-col mb-4">
              <label htmlFor="imdb_id" className="mb-1">
                ID
              </label>
              <input 
                    type="text"
                    id="imdb_id"
                    className="border border-gray-400 rounded-lg py-2 px-3"
                    value={movieData.imdb_id}
                    onChange={(e) => setMovieData({...movieData, imdb_id: e.target.value})}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="title" className="mb-1">
                Title
              </label>
              <input
                    type="text"
                    id="title"
                    className="border border-gray-400 rounded-lg py-2 px-3"
                    value={movieData.title}
                    onChange={(e) => setMovieData({...movieData, title: e.target.value})}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="overview" className="mb-1">
                Overview
              </label>
              <input
                    type="text"
                    id="overview"
                    className="border border-gray-400 rounded-lg py-2 px-3"
                    value={movieData.overview}
                    onChange={(e) => setMovieData({...movieData, overview: e.target.value})}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="poster_path" className="mb-1">
                Poster Path
              </label>
              <input
                    type="text"
                    id="poster_path"
                    className="border border-gray-400 rounded-lg py-2 px-3"
                    value={movieData.poster_path}
                    onChange={(e) => setMovieData({...movieData, poster_path: e.target.value})}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="release_date" className="mb-1">
                Release date
              </label>
              <input
                    type="text"
                    id="release_date"
                    className="border border-gray-400 rounded-lg py-2 px-3"
                    value={movieData.release_date}
                    onChange={(e) => setMovieData({...movieData, release_date: e.target.value})}
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit Movie</button>
          </form>
        )
      }
      </div>
    </div>
  );
};


export default withAuth(Dashboard);
