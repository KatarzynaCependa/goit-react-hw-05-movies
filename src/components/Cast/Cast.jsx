import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_key = '255082541761d9a3615c35334b0c6dcc';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const getCast = async () => {
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

  useEffect(() => {
    getCast().then(cast => {
      setCast(cast);
    });
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
