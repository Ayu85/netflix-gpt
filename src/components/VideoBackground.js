import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
// this page is to get the various videos{of one id} using the movie id and filter the trailer from those videos
const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector(store => store.movie.trailer)
  if (!trailer) return;
  const videoKey = trailer.key;

  return (
    <div>
      <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${videoKey}?si=sAm5a7vI5j4gJ6bX&mute=1&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div >
  )
}

export default VideoBackground
