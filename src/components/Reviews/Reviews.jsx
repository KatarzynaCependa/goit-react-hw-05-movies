import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'services/searchApi';
import { AuthorStyle } from './Reviews.styled';

const Reviews = () => {
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
            <AuthorStyle>Author: {review.author}</AuthorStyle>
            <p>{review.content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
