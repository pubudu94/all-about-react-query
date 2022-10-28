import React from 'react'
import axios from 'axios'
import {useQuery} from "react-query";

export const fetchPets = (postId) =>
    axios.get(`/pets/${postId}`).then((res) => res.data)

export default function usePet(postId) {
    return useQuery(['pets', postId], () => fetchPets(postId))
}
