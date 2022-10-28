import React from 'react'
import {Link} from 'react-router-dom'

import PostForm from '../../components/PostForm'
import {Loader} from '../../components/styled'
import usePets from '../../hooks/usePets'
import useCreatePost from '../../hooks/useCreatePost'

export default function Posts() {
    const postsQuery = usePets()
    const [createPost, createPostInfo] = useCreatePost()

    const onSubmit = async (values) => {
        createPost(values)
    }

    return (
        <section>
            <div>
                <div>
                    {postsQuery.isLoading ? (
                        <span>
              <Loader/> Loading
            </span>
                    ) : (
                        <>
                            <h3>Posts</h3>
                            <ul>
                                {postsQuery.data.map((pet) => (
                                    <li key={pet.name}>
                                        <Link to={`./${pet.id}`}>{pet.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <br/>
                        </>
                    )}
                </div>
            </div>
            <hr/>
            <div>
                <h3>Add New Pet</h3>
                <div>
                    <PostForm
                        onSubmit={onSubmit}
                        clearOnSubmit
                        submitText={
                            createPostInfo.isLoading
                                ? 'Saving...'
                                : createPostInfo.isError
                                    ? 'Error!'
                                    : createPostInfo.isSuccess
                                        ? 'Saved!'
                                        : 'Create Post'
                        }
                    />
                </div>
            </div>
        </section>
    )
}
