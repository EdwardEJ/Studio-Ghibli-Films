import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
// import People from './People'

const GHIBLI_FILM = gql`
	query Film($id: String!) {
		Film(id: $id) {
			title
			original_title
			original_title_romanised
			description
			director
			producer
			release_date
			image
		}
	}
`;

const Film = () => {
	const { id } = useParams();

	const { loading, error, data } = useQuery(GHIBLI_FILM, { variables: { id } });
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	// let peopleArray = people.split(',https://ghibliapi.herokuapp.com/people/')
	// let test = peopleArray[0].split('https://ghibliapi.herokuapp.com/people/')
	// test.splice(0, 1)
	// peopleArray.splice(0, 1)
	// let peopleIDs = peopleArray.concat(test)

	const {
		title,
		original_title_romanised,
		original_title,
		description,
		release_date,
		director,
		producer,
		image,
	} = data.Film;
	return (
		<div className='person-container'>
			<div className='person-content'>
				<h2>{title}</h2>
				<img alt={`${title} movie poster`} src={image} />
				<p>
					Known as {original_title_romanised} in Japanese ({original_title}) was
					released in {release_date} directed by {director} and produced by
					{producer}
				</p>
				<p>Description: {description}</p>
			</div>
		</div>
	);
};

export default Film;
