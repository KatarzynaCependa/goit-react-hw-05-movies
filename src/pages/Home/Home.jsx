import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { getTrending } from 'services/searchApi';

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 3px;
`;

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(trendingMovies => {
      setTrendingMovies(trendingMovies);
    });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {trendingMovies.map(movie => {
        const { title, id } = movie;
        return (
          <StyledLink to={`/movies/${id}`} key={id}>
            {title}
          </StyledLink>
        );
      })}
    </>
  );
};
