const initialState = [
  {
    id: 1,
    title: 'The Avengers',
    image:
      'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
    comment: 'New York blows up in this!',
  },
  {
    id: 2,
    title: 'Dark City',
    image: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
    comment: 'This looks mysterious. Cool!',
  },
  {
    id: 3,
    title: 'Hot Tub Time Machine',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg',
    comment: 'Someone said this was fun. Maybe!',
  },
];

export const fetchMovies = () =>
  new Promise((resolve) => {
    try {
      const data =
        JSON.parse(localStorage.getItem('movies-all')) || initialState;
      resolve(data);
    } catch (error) {
      console.log(error);
      resolve(initialState);
    }
  });

export const fetchWatchedMovies = () =>
  new Promise((resolve) => {
    try {
      const data = JSON.parse(localStorage.getItem('movies-watched')) || [];
      resolve(data);
    } catch (error) {
      console.log(error);
      resolve([]);
    }
  });

export const addMovie = (newMovie) =>
  new Promise((resolve) => {
    fetchMovies().then((movies) => {
      const newMovieWithId = {
        id: Date.now(),
        ...newMovie,
      };
      const newMoviesList = [...movies, newMovieWithId];

      localStorage.setItem('movies-all', JSON.stringify(newMoviesList));
      resolve(newMovieWithId);
    });
  });

export const addWatchedMovie = (newMovie) =>
  new Promise((resolve, reject) => {
    fetchWatchedMovies().then((movies) => {
      if (movies.find(({ id }) => id === newMovie.id)) {
        reject('the movie already in the watched list');
        return;
      }

      const newMoviesList = [...movies, newMovie];

      localStorage.setItem('movies-watched', JSON.stringify(newMoviesList));
      resolve(newMovie);
    });
  });

export const removeWatchedMovie = (id) =>
  new Promise((resolve) => {
    fetchWatchedMovies().then((movies) => {
      const newMoviesList = movies.filter((movie) => movie.id !== id);

      localStorage.setItem('movies-watched', JSON.stringify(newMoviesList));
      resolve();
    });
  });
