import React, { useState, useEffect } from 'react';
import {
  fetchMovies,
  fetchWatchedMovies,
  addMovie,
  addWatchedMovie,
  removeWatchedMovie,
} from './moviesApi';
import NewMovieForm from './NewMovieForm';
import MovieList from './MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const handleAddNewMovie = (movie) => {
    addMovie(movie).then((newMovie) =>
      setMovies((prev) => [...prev, newMovie]),
    );
  };

  const handleAddNewWatchedMovie = (movie) => {
    addWatchedMovie(movie)
      .then((newMovie) => setWatchedMovies((prev) => [...prev, newMovie]))
      .catch((error) => console.log(error));
  };

  const handleRemoveWatchedMovie = (movie) => {
    removeWatchedMovie(movie.id).then(() =>
      setWatchedMovies((prev) => prev.filter(({ id }) => id !== movie.id)),
    );
  };

  useEffect(() => {
    fetchMovies().then((data) => setMovies(data));
    fetchWatchedMovies().then((data) => setWatchedMovies(data));
  }, []);

  return (
    <div className="App">
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>

      <NewMovieForm onSubmit={handleAddNewMovie} />

      <h1>Watchlist:</h1>
      <MovieList movies={movies} onClick={handleAddNewWatchedMovie} />

      <h1>Already watched:</h1>
      <MovieList movies={watchedMovies} onClick={handleRemoveWatchedMovie} />
    </div>
  );
};

export default App;
