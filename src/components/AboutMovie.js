import React, { useEffect } from 'react'
import Header from './Header'
import { options, optionsfordetail } from '../utils/constants'
import { useParams } from 'react-router-dom'
const AboutMovie = () => {
    const id = useParams();
    console.log(id);
    const getMovieDetails = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/' +  id.id , options)
        const jsonData = await rawData.json();
        console.log(jsonData);
    }
    useEffect(() => {
        getMovieDetails()
    }, [])
    return (
        <div>
            <>about movie</>
        </div>
    )
}

export default AboutMovie
