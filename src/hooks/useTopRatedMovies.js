import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTopRated } from '../components/redux/movieslice';
import { options } from '../utils/constants';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getMoviesData = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/top_rated', options);
        const jsonData = await rawData.json();
        dispatch(addTopRated(jsonData?.results))

    }
    useEffect(() => {
        getMoviesData()
    }, [])

}

export default useTopRatedMovies
