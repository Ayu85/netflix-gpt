
import { useParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
import AboutMovieHeader from './AboutMovieHeader'
import MovieDetails from './MovieDetails'
import { useSelector } from 'react-redux'
const AboutMovie = () => {
    const details = useSelector(store => store.moviedetails.details)
    const id = useParams();
    useMovieDetails(id);
    if (!details) return;
    console.log(details);
    return (
        <div>
            <AboutMovieHeader />
            <MovieDetails {...details} />
        </div>
    )
}

export default AboutMovie
