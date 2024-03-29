import React from 'react'
import { IMAGE_API } from '../utils/constants'
import { MdOutlineStar } from "react-icons/md";

const MovieDetails = ({ poster_path, backdrop_path
    , original_title, genres, release_date, original_language, runtime, overview, popularity, tagline, vote_average }) => {
    return (
        <div className='absolute z-20 flex  w-screen gap-20 items-center justify-center py-10 pt-20  bg-[#0f0f0f8c]'>
            <div>
                {/* left box */}
                {/* <img src='https://image.tmdb.org/t/p/w220_and_h330_face/mHiMmryCureDvoAOlGP6o3oXT8Y.jpg' alt="logo" /> */}
                <img src={IMAGE_API + "/" + poster_path} alt="logo" className='min-w-44 rounded-xl' />

            </div>
            <div>
                {/* right box */}
                <div className='flex flex-col gap-1 pb-10'>
                    <h1 className='text-white text-3xl font-bold tracking-wide'>{original_title}</h1>
                    <div className='flex gap-2 text-slate-200'>
                        <h2>{release_date}</h2>
                        <h2>{genres.map((items) => {
                            return <>{items.name + " "}</>
                        })}</h2>
                        <h2>{(runtime / 60).toFixed(2)}Hrs</h2>
                    </div>
                </div>
                <div >
                    <h1 className='text-white  text-lg font-semibold border-yellow-500  border-4 flex items-center justify-center 
                     w-14 h-14 rounded-full'>{vote_average.toFixed(0)}<MdOutlineStar className='text-yellow-500' />
                    </h1>
                    <h1 className='text-slate-300  text-lg  italic'>{tagline}</h1>
                </div>
                <div className='w-96 pt-2 font-semibold overflow-hidden
                 line-clamp-6 text-slate-200'><span className='font-bold text-xl underline'>Overview :- </span>{overview}</div>
                <h1 className='text-white'><span className='font-bold text-xl underline'>Language :- </span> {original_language}</h1>
            </div>
        </div>
    )
}

export default MovieDetails
