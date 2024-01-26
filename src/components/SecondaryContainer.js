import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const storeMovies = useSelector(store => store.movie.movieData)
    const popularMovies = useSelector(store => store.movie.popularMovies)
    const topRatedMovies = useSelector(store => store.movie.topRatedMovies)
    const upcomingMovies = useSelector(store => store.movie.upcomingMovies)

    if (!storeMovies || !popularMovies || !topRatedMovies || !upcomingMovies) return;
    return (
        <div className=' '>
            <MovieList movies={storeMovies} title={"Now Playing"} />
            <MovieList movies={popularMovies} title={"Popular"} />
            <MovieList movies={topRatedMovies} title={"Top Rated"} />
            <MovieList movies={upcomingMovies} title={"Upcoming"} />
        </div >
    )
}

export default SecondaryContainer
