import React from 'react'
import { Link } from 'react-router-dom'
import usePets from '../../hooks/usePets'
import { PostStyles } from '../../components/styled'

export default function Home() {
  const postsQuery = usePets()

  return (
    <div>
      <h1>Pets</h1>

      <div
        css={`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
        `}
      >
        {postsQuery.isLoading ? (
          <span>Loading...</span>
        ) : postsQuery.isError ? (
          postsQuery.error.message
        ) : (
          postsQuery.data.map((pet) => (
            <PostStyles as={Link} to={`./${pet.id}`} key={pet.id}>
              <h3>{pet.petType}</h3>
              <p>{pet.name}</p>
            </PostStyles>
          ))
        )}
      </div>
    </div>
  )
}
