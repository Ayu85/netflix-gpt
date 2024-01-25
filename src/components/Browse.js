import React from 'react'
import { BrowseHeader } from './Header'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';



const Browse = () => {
    useNowPlayingMovies();
    const storeMovies = useSelector(store => store.movie.movieData)
    console.log(storeMovies);
    return (
        <div className='relative'>
            <BrowseHeader />
            <MainContainer/>
        </div>
    )
}

export default Browse
