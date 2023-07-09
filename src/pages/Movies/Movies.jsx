import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { searchMovies } from 'services/searchApi';
import { FormStyled, Input, Button } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  // odczytujemy nazwę zapytania z parametru linku, a jeżeli jej nie ma to mamy pusty string
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
      <FormStyled onSubmit={handleSubmit}>
        {/* atrybut name określa nazwę pola, atrybut defaultValue ustawia początkową wartość */}
        <Input type="text" name="query" defaultValue={query} required />
        <Button type="submit">Search</Button>
      </FormStyled>
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

export default Movies;
