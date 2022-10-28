import React from 'react'
import axios from 'axios'
import {useQuery} from "react-query";

export default function usePets() {
    return useQuery(
        ['pets'],
        () => axios.get('/pets').then((res) => res.data))
}
