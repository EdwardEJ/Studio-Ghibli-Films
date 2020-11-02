import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
// import People from './People'

const GHIBLI_FILM = gql`
  query Film($id: String!) {
    Film(id: $id) {
      title
      description
      director
      producer
      release_date
      people
    }
  }
`;

const Film = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GHIBLI_FILM, { variables: { id } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { title, description, release_date, director, producer } = data.Film;
  return (
    <div className='person-container'>
      <div className='person-content'>
        <img
          src={require(`../images/${title.split(' ').join('-')}.jpg`)}
          alt={title}
        />
        <h2>{title}</h2>
        <p>
          Released in {release_date} directed by {director} and produced by{' '}
          {producer}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Film;
