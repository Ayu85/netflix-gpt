import React from 'react'
import { IMAGE_API } from '../utils/constants'
const MovieCard = () => {
    const date = new Date();

    return (
        <div className='min-w-48 '>
            {/* <img src='https://image.tmdb.org/t/p/w220_and_h330_face/qhb1qOilapbapxWQn9jtRCMwXJF.jpg' alt='logo' /> */}
            <img src={IMAGE_API + "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg"} alt='logo' className='w-44 rounded-lg' />
            <div className='text-zinc-900 font-bold pl-2'>Wonka</div>
            <div className='text-slate-500 font-semibold pl-2'>{date.toDateString("2023-12-06")}</div>
        </div>
    )
}

export default MovieCard
