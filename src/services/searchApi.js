import axios from 'axios';

const API_key = '255082541761d9a3615c35334b0c6dcc';

export const getTrending = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: API_key,
      },
    }
  );
  return response.data.results;
};

export const getReviews = async movieId => {
  const reviews = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      params: {
        api_key: API_key,
      },
    }
  );
  return reviews.data.results;
};

export const getDetails = async movieId => {
  const movieDetails = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: {
        api_key: API_key,
      },
    }
  );
  return movieDetails.data;
};

export const getCast = async movieId => {
  const cast = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: {
        api_key: API_key,
      },
    }
  );
  return cast.data.cast;
};

export const searchMovies = async query => {
  const search = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
    params: {
      api_key: API_key,
      query: query,
    },
  });
  return search.data.results;
};
