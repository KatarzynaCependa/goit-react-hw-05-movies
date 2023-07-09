import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { getDetails } from 'services/searchApi';

import {
  Button,
  MovieImage,
  Wrapper,
  Paragraph,
} from 'pages/MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const movieDetails = await getDetails(movieId);
        setMovieDetails(movieDetails);
        setGenres(movieDetails.genres);
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, [movieId]);

  return (
    <>
      <Button onClick={() => navigate(-1)}>Go back</Button>
      {movieDetails && (
        <>
          <Wrapper>
            <MovieImage>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
                alt={movieDetails?.title}
                width={250}
              />
            </MovieImage>
            <div>
              <h2>{movieDetails?.title}</h2>
              <div>User score: {movieDetails?.vote_average}</div>
              <h3>Overview</h3>
              <p>{movieDetails?.overview}</p>
              <h4>Genres</h4>
              {genres.map(genre => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </div>
          </Wrapper>
          <Paragraph>Additional information</Paragraph>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
