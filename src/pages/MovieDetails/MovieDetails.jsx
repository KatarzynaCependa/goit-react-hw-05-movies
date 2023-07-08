import { useParams, Link, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getDetails } from 'services/searchApi';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  // const [genres, setGenres] = useState([]);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        setMovieDetails(await getDetails(movieId));
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, [movieId]);

  return (
    <>
      <div>Go back</div>
      {movieDetails && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
              alt={movieDetails?.title}
              width={250}
            />
          </div>
          <h2>{movieDetails?.title}</h2>
          <div>User score: {movieDetails?.vote_average}</div>
          <h3>Overview</h3>
          <p>{movieDetails?.overview}</p>
          <h4>Genres</h4>
          {/* {genres.map(genre => (
            <p key={genre.id}>{genre.name}</p>
          ))} */}
          <p>Additional information</p>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </>
      )}
    </>
  );
};
