import React from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';
// import People from './People'
//test

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
`

const Film = () => {
  const { id } = useParams()

  const { loading, error, data } = useQuery(GHIBLI_FILM, { variables: { id } });
  console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  // let peopleArray = people.split(',https://ghibliapi.herokuapp.com/people/')
  // let test = peopleArray[0].split('https://ghibliapi.herokuapp.com/people/')
  // test.splice(0, 1)
  // peopleArray.splice(0, 1)
  // let peopleIDs = peopleArray.concat(test)

  const { title, description, release_date, director, producer } = data.Film
  console.log(description)
  return (
    <div className='person-container'>
      <div className='person-content'>
        <h2>{title}</h2>
        <p>Released in {release_date} directed by {director} and produced by {producer}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  )
}

export default Film