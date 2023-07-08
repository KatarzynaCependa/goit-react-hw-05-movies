import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_key = '255082541761d9a3615c35334b0c6dcc';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
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

  useEffect(() => {
    getReviews().then(reviews => {
      setReviews(reviews);
    });
  }, [movieId]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <li style={{ listStyle: 'none' }}>
          We don't have any reviews for this movie
        </li>
      ) : (
        reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))
      )}
    </ul>
  );
};
