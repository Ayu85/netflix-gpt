import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const storeMovies = useSelector(store => store.movie.movieData)
    if (!storeMovies) return;
    return (
        <div className='bg-gradient-to-b from-black '>
            <MovieList movies={storeMovies} title={"Now Playing"} />
        </div >
    )
}

export default SecondaryContainer
