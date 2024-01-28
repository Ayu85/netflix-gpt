import React, { useEffect } from 'react'
import Header from './Header'
import { options, optionsfordetail } from '../utils/constants'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
import AboutMovieHeader from './AboutMovieHeader'
const AboutMovie = () => {
    const id = useParams();
    useMovieDetails(id);
    return (
        <div>
           <AboutMovieHeader/>
        </div>
    )
}

export default AboutMovie
