import React from 'react'
import axios from 'axios'
import {useMutation} from "react-query";

export default function useCreatePost() {
    return useMutation(
        (values) => axios.post('/pets', values).then((res) => res.data),
        {
            onSuccess: () => {
                alert("successfully created")
            },
            onError: (error, _newPost, rollback) => {
                console.error(error);
                if (rollback) rollback()
            }
        }
    )
}
