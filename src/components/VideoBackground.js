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
      <iframe className='aspect-video w-screen'
        src={`https://www.youtube.com/embed/${videoKey}?si=P_luRiqLZxm9dTyU`}
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; e
      ncrypted-media; gyroscope; picture-in-picture; web-share" >
      </iframe>
    </div>
  )
}

export default VideoBackground
