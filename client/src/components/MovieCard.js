import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({
  film: { title, director, producer, release_date, id },
}) => {
  return (
    <div className='movie-card'>
      <Link to={`Film/${id}`}>
        <img
          src={require(`../images/${title.split(' ').join('-')}.jpg`)}
          alt={title}
        />
        {/* API does not have images*/}
        <div className='movie-content'>
          <h2>{title}</h2>
          <p>Director: {director}</p>
          <p>Producer: {producer}</p>
          <p>{release_date}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
