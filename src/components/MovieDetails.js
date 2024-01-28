import React from 'react'

const MovieDetails = () => {
    return (
        <div className='absolute z-20 flex w-screen gap-10 items-center justify-center mt-28  '>
            <div>
                <img src='https://image.tmdb.org/t/p/w220_and_h330_face/mHiMmryCureDvoAOlGP6o3oXT8Y.jpg' alt="logo" />
            </div>
            <div>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-white text-3xl font-bold tracking-wide'> Movie name</h1>
                    <div className='flex gap-2 text-slate-200'>
                        <h2>releae date</h2>
                        <h2>Generes</h2>
                        <h2>duration</h2>
                    </div>
                </div>
                <div>
                    <h1 className='text-white  text-lg font-semibold border-yellow-500  border-4 flex items-center justify-center  w-14 h-14 rounded-full'>55%</h1>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
