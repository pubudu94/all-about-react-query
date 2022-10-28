import React from 'react'
import axios from 'axios'
import {useMutation} from "react-query";

export default function useSavePost() {
    return useMutation(
        (newPost) => axios
            .patch(`/pets/${newPost.id}`, newPost)
            .then((res) => res.data),
        {
            onSuccess: (newPost) => {
                alert("successfully updated")
            }
        }
    )
}
