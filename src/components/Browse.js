import React from 'react'
import { BrowseHeader } from './Header'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';



const Browse = () => {
    useNowPlayingMovies();
    const storeMovies = useSelector(store => store.movie.movieData)
    console.log(storeMovies);
    return (
        <div className='relative'>
            <BrowseHeader />
        </div>
    )
}

export default Browse
