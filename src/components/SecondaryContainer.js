import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const storeMovies = useSelector(store => store.movie.movieData)
    if (!storeMovies) return;
    return (
        <div className='-mt-52 relative z-50 '>
            <MovieList movies={storeMovies} title={"Now Playing"} />
            <MovieList movies={storeMovies} title={"Trending"} />
            <MovieList movies={storeMovies} title={"Upcoming"} />
            <MovieList movies={storeMovies} title={"All Time Best"} />
            <MovieList movies={storeMovies} title={"Motivation"} />

        </div >
    )
}

export default SecondaryContainer
