import React from 'react'
import { BrowseHeader } from './Header'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTsearch from './GPTsearch';

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const showGPT = useSelector(store => store.gpt.value)

    return (
        <div className='relative bg-zinc-900'>
            <BrowseHeader />
            {showGPT ? <GPTsearch /> : <><MainContainer />
                <SecondaryContainer /></>}
        </div>
    )
}

export default Browse
