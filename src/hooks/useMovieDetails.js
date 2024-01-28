import { useEffect } from 'react'

import { options } from '../utils/constants';
import { addDetails } from '../components/redux/moviedetailsslice';
import { useDispatch } from 'react-redux';
const useMovieDetails = (id) => {
    const dispatch = useDispatch();
    const getMovieDetails = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/' + id.id, options)
        const jsonData = await rawData.json();
        dispatch(addDetails(jsonData))
    }
    useEffect(() => {
        getMovieDetails()
    }, [])
}

export default useMovieDetails
