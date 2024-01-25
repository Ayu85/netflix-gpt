import React from 'react'
import { BrowseHeader } from './Header'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    return (
        <div className='relative bg-black'>
            <BrowseHeader />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse
