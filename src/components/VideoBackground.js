import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { addTrailer } from './redux/movieslice'
import { useDispatch, useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
// this page is to get the various videos{of one id} using the movie id and filter the trailer from those videos
const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector(store => store.movie.trailer)
  if (!trailer) return;
  const videoKey = trailer.key;
  console.log(trailer);
  return (
    <div>
      bg
    </div>
  )
}

export default VideoBackground
