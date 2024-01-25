import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
const MainContainer = () => {
    const movie = useSelector(store => store.movie.movieData);
    if (!movie) return;
    const trailerPlayingMovie = movie[0];
    const movieId = trailerPlayingMovie.id
    const { original_title } = movie[0]
    return (
        <div className='absolute'>
            <VideoBackground movieId={movieId}  />
            <VideoTitle {...original_title} />
        </div>
    )
}

export default MainContainer
