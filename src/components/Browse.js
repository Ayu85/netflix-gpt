import React, { useEffect } from 'react'
import { BrowseHeader } from './Header'
import { options } from '../utils/constants'
import MovieCard from './Movie_Card'
import { CgPlayTrackNextR, CgPlayTrackPrevR } from "react-icons/cg";
import VideoBackground from './Browse Page/VIdeoBackground';

const Browse = () => {
    const getMoviesData = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', options);
        const jsonData = await rawData.json();
        console.log(jsonData);
        
    }
    useEffect(() => {
        // getMoviesData()
    }, [])

    return (
        <div>
            <BrowseHeader />
            <VideoBackground />
            {/* <div className='    ml-[50%] w-[60%] 
            -translate-x-[50%]  scroll-smooth bg-slate-300 flex flex-wrap gap-5 justify-center '>
                <MovieCard />
            </div> */}


        </div>
    )
}

export default Browse
