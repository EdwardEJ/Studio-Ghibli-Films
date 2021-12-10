import React from 'react';
import { gql, useQuery } from '@apollo/client';
import MovieCard from './MovieCard';

const GHIBLI_MOVIES = gql`
	query GhibliMovies {
		Movies {
			id
			title
			director
			producer
			release_date
		}
	}
`;

const GhibliMovies = () => {
	const { loading, error, data } = useQuery(GHIBLI_MOVIES);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	return (
		<section className='movies-container'>
			{data.Movies.map((film) => (
				<MovieCard key={film.id} film={film} />
			))}
		</section>
	);
};

export default GhibliMovies;
