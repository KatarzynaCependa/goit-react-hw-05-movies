import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/searchApi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        setReviews(await getReviews(movieId));
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
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
