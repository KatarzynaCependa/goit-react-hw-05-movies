import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/searchApi';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        setMoviesList(await searchMovies(query));
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.query;
    setSearchParams({ query: input.value });
    input.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* atrybut name określa nazwę pola, atrybut defaultValue ustawia początkową wartość */}
        <input type="text" name="query" defaultValue={query} required />
        <button type="submit">Search</button>
      </form>
      <ul>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
