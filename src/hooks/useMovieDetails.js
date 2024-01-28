import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { options } from '../utils/constants';

const useMovieDetails = (id) => {
    const getMovieDetails = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/' + id.id, options)
        const jsonData = await rawData.json();
        console.log(jsonData);
    }
    useEffect(() => {
        getMovieDetails()
    }, [])
}

export default useMovieDetails
