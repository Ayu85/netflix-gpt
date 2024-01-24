import React from 'react'
import { BrowseHeader } from './Header'
import { options } from '../utils/constants'

const Browse = () => {
    const getMoviesData = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const jsonData = await rawData.json();
    }
    
    return (
        <div>
            <BrowseHeader />
        </div>
    )
}

export default Browse
