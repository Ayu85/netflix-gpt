import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovies } from '../components/redux/movieslice';
import { options } from '../utils/constants';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getMoviesData = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', options);
        const jsonData = await rawData.json();
        dispatch(addMovies(jsonData?.results))

    }
    useEffect(() => {
        getMoviesData()
    }, [])

}

export default useNowPlayingMovies
