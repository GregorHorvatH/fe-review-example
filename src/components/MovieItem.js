import React from 'react';

const MovieItem = ({ movie, onClick }) => {
  return (
    <div className="all">
      <div>
        <img src={movie.image} height="100px" alt="poster" />
      </div>
      <span className="movie-link" onClick={onClick}>
        {movie.title}
      </span>
      <br />
      <span>{movie.comment}</span>
      <br />
      <br />
    </div>
  );
};

export default MovieItem;
