import React from 'react';
import { Link } from 'react-router-dom';
import name from '../movie-cover.jpg';

const MovieCard = ({
	film: { title, director, producer, release_date, id },
}) => {
	return (
		<div id={title} className='movie-card'>
			<Link to={`Film/${id}`}>
				<img src={name} alt='dummy' />
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
