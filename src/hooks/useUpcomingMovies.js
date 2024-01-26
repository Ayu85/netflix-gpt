import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcoming } from '../components/redux/movieslice';
import { options } from '../utils/constants';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getMoviesData = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/upcoming', options);
        const jsonData = await rawData.json();
        dispatch(addUpcoming(jsonData?.results))

    }
    useEffect(() => {
        getMoviesData()
    }, [])

}

export default useUpcomingMovies
