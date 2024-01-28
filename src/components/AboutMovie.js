import React, { useEffect } from 'react'
import Header from './Header'
import { options, optionsfordetail } from '../utils/constants'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
const AboutMovie = () => {
    const id = useParams();
    useMovieDetails(id);
    return (
        <div>
            <>about movie</>
        </div>
    )
}

export default AboutMovie
