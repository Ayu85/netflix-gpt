import React, { useEffect } from 'react'
import { BrowseHeader } from './Header'
import { options } from '../utils/constants'
import MovieCard from './Movie_Card'
import { CgPlayTrackNextR, CgPlayTrackPrevR } from "react-icons/cg";

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
            <div className='relative '>
                <div className='  h-[300px] w-[70%] ml-[50%] -translate-x-[50%] overflow-hidden bg-slate-300 flex gap-5 justify-center '>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
                <div className=' '>
                    <CgPlayTrackNextR className='text-3xl absolute  top-28 right-20 cursor-pointer' />
                    <CgPlayTrackPrevR className='text-3xl absolute  top-28 left-20 cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}

export default Browse
