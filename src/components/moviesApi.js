const HOST = 'https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1';

export const fetchMovies = () =>
  fetch(`${HOST}/movies`).then((resp) => resp.json());

export const addMovie = (newMovie) =>
  fetch(`${HOST}/movies`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  }).then((resp) => resp.json());

export const fetchWatchedMovies = () =>
  fetch(`${HOST}/movies-watched`).then((resp) => resp.json());

export const addWatchedMovie = (newMovie) =>
  fetch(`${HOST}/movies-watched`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  }).then((resp) => resp.json());

export const removeWatchedMovie = (id) =>
  fetch(`${HOST}/movies-watched/${id}`, {
    method: 'DELETE',
  }).then((resp) => resp.json());
