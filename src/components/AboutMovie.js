import React, { useEffect } from 'react'
import Header from './Header'
import { options, optionsfordetail } from '../utils/constants'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
import AboutMovieHeader from './AboutMovieHeader'
import MovieDetails from './MovieDetails'
const AboutMovie = () => {
    const id = useParams();
    useMovieDetails(id);
    return (
        <div>
            <AboutMovieHeader />
            <MovieDetails />
        </div>
    )
}

export default AboutMovie
