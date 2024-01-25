import React from 'react'
import { BrowseHeader } from './Header'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
    useNowPlayingMovies();
    return (
        <div className='relative'>
            <BrowseHeader />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse
