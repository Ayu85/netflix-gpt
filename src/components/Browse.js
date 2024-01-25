import React, { useEffect } from 'react'
import { BrowseHeader } from './Header'
import { options } from '../utils/constants'
import MovieCard from './Movie_Card'
const Browse = () => {
    const getMoviesData = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', options);
        const jsonData = await rawData.json();
        console.log(jsonData);
    }
    useEffect(() => {
        // getMoviesData()
    }, [])
    return (
        <div>
            <BrowseHeader />
            <MovieCard />
        </div>
    )
}

export default Browse
