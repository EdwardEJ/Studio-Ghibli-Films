import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({
	film: { title, director, producer, release_date, id, image },
}) => {
	return (
		<div id={title} className='movie-card'>
			<Link to={`Film/${id}`}>
				<img src={image} alt={`${title} movie poster`} />
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
