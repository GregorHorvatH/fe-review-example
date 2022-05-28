import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onClick }) =>
  movies.map((movie) => (
    <MovieItem key={movie.id} movie={movie} onClick={() => onClick(movie)} />
  ));

export default MovieList;
