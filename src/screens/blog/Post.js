import React from 'react'
import {useParams} from 'react-router-dom'

//

import usePet from '../../hooks/usePet'

export default function Post() {
    const {postId} = useParams()
    const postQuery = usePet(postId)

    return (
        <>
            {postQuery.isLoading ? (
                <span>Loading...</span>
            ) : postQuery.isError ? (
                postQuery.error.message
            ) : (
                <div>
                    <h2>{postQuery.data.name}</h2>
                    <p>{postQuery.data.petType}</p>
                </div>
            )}
        </>
    )
}
