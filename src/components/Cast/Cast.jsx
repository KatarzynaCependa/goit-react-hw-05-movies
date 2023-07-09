import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'services/searchApi';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        setCast(await getCast(movieId));
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, [movieId]);

  return (
    <ul>
      {cast.length === 0 ? (
        <li style={{ listStyle: 'none' }}>
          We don't have cast information for this movie
        </li>
      ) : (
        cast.map(el => (
          <li key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              width={200}
              alt={el.name}
            />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Cast;
