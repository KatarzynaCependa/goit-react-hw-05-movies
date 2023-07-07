import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_key = '255082541761d9a3615c35334b0c6dcc';
const getMovieDetailsAPI_URL = 'https://api.themoviedb.org/3/movie';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);

  const getMovieDetails = async () => {
    try {
      const result = await axios.get(
        `${getMovieDetailsAPI_URL}/${movieId}?api_key=${API_key}&language=en-US`
      );
      const movieDetails = result.data;
      console.log('movieDetails', movieDetails);
      return movieDetails;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieDetails()
      .then(movieDetails => {
        setMovieDetails(movieDetails);
      })
      .then(movieDetails => {
        setGenres(movieDetails.genres);
      });
  }, [movieId]);

  return (
    <>
      <div>Go back</div>
      {movieDetails && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              width={250}
            />
          </div>
          <h2>{movieDetails.title}</h2>
          <div>User score: {movieDetails.vote_average * 10} %</div>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          {genres.map(genre => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </>
      )}
    </>
  );
};
