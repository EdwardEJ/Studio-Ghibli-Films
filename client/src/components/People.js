// import React from 'react'
// import { gql, useQuery } from '@apollo/client';

// const GHIBLI_PERSON = gql`
//  query Person($id: String!) {
//    Person(id: $id) {
//     name
//     gender
//     eye_color
//     hair_color
//     }
//   }
// `

// const People = (props) => {
//   console.log(props)
//   const id = props.id
//   const { loading, error, data } = useQuery(GHIBLI_PERSON, { variables: { id } });
//   console.log(data)
//   return (
//     <>
//       {/* {data.Person.map(p => (
//         <p>{p.name}</p>
//       ))} */}
//     </>
//   )
// }

// export default People