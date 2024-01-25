import React, { useEffect } from 'react'
import { BrowseHeader } from './Header'
import { options } from '../utils/constants'
import MovieCard from './Movie_Card'
import { CgPlayTrackNextR, CgPlayTrackPrevR } from "react-icons/cg";
import { addMovies } from './redux/movieslice';
import { useDispatch } from 'react-redux';
const Browse = () => {
    const dispatch = useDispatch();
    const getMoviesData = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', options);
        const jsonData = await rawData.json();
        dispatch(addMovies(jsonData?.results))

    }
    useEffect(() => {
        getMoviesData()
    }, [])

    return (
        <div className='relative'>
            <BrowseHeader />
        </div>
    )
}

export default Browse
