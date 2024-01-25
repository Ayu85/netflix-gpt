import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
const MainContainer = () => {
    const movie = useSelector(store => store.movie.movieData);
    if (!movie) return;
    const trailerPlayingMovie = movie[1];
    const movieId = trailerPlayingMovie.id
    const { original_title ,overview} = movie[1];
    return (
        <div className='relative overflow-hidden'>
            <VideoBackground movieId={movieId} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}

export default MainContainer
