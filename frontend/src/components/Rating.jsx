import React from 'react';

const Rating = ({ value, text, color = '#f8e825' }) => {
  const stars = []
  for (let index = 0; index < 5; index++) {
    stars.push(
      <span key={index}>
        <i style={{ color }} className={setClassNameByRatingValue(value, index)}></i>
      </span>
    )
  }
  return (
    <div className='rating'>
      {stars} {text}
    </div>
  );
}

function setClassNameByRatingValue(value, index) {
  return value >= index + 1 ? 'fas fa-star' : value >= index + 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
}

export default Rating;
