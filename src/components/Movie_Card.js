import React from 'react'
import { IMAGE_API } from '../utils/constants'
import { IoIosStarOutline } from "react-icons/io";

const MovieCard = ({ original_title, poster_path, release_date, vote_average, id }) => {
    const date = new Date();

    return (
        <div className='min-w-48 '>
            {/* <img src='https://image.tmdb.org/t/p/w220_and_h330_face/qhb1qOilapbapxWQn9jtRCMwXJF.jpg' alt='logo' /> */}
            <img src={IMAGE_API + poster_path} alt='logo' className='w-44 rounded-lg' />
            <div className='text-zinc-900 font-bold pl-2'>{original_title}</div>
            <div className='text-slate-500 font-semibold pl-2'>{date.toDateString({ release_date })}</div>
            <div className='text-slate-500 font-semibold pl-2 flex items-center'>{vote_average.toFixed(1)}<IoIosStarOutline />
            </div>
        </div>
    )
}

export default MovieCard
