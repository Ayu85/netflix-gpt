import React from 'react'
import { BrowseHeader } from './Header'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    return (
        <div className='relative bg-black'>
            <BrowseHeader />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse
