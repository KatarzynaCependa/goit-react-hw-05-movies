import React, { useEffect, useState } from 'react';
import { searchMovies } from 'services/searchApi';
import { Link } from 'react-router-dom';

export const Movies = query => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    searchMovies().then(moviesList => {
      setMoviesList(moviesList);
    });
  }, []);

  return (
    <>
      <form>
        <input />
        <button>Search</button>
      </form>
      <ul>
        {moviesList.map(movie => {
          const { title, id } = movie;
          return <Link key={id}>{title}</Link>;
        })}
      </ul>
    </>
  );
};
