import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopular } from '../components/redux/movieslice';
import { options } from '../utils/constants';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getMoviesData = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/popular', options);
        const jsonData = await rawData.json();
        dispatch(addPopular(jsonData?.results))

    }
    useEffect(() => {
        getMoviesData()
    }, [])

}

export default usePopularMovies
