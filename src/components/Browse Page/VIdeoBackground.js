import React, { useEffect } from 'react'
import { options } from '../../utils/constants'
import { useSelector } from 'react-redux'

const VideoBackground = () => {
    const movieDetails = useSelector(store => store.movie.movieData)
    const movieId = movieDetails[0]?.id;
    console.log(movieId);
    const getAllVideosById = async () => {
        const rawData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        const jsonData = await rawData.json();
        console.log(jsonData);
        const trailerVdeos = jsonData?.results.filter((items) => {
            return items.type === "Trailer"
        })
        console.log(trailerVdeos[0]);
    }
    useEffect(() => {
        // getAllVideosById();
    }, [])
    return (
        <div>
            <div>
                {/* video player */}
            </div>
            <div>
                {/* video title and info */}
            </div>

        </div>
    )
}

export default VideoBackground
