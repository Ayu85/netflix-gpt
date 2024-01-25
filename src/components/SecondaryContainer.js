import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
    const movie = useSelector(store => store.movie.movieData);
    return (
        <div>
            <MovieList {...movie} title={"Now Playing"} />
        </div >
    )
}

export default SecondaryContainer
