import React from 'react'

const MovieDetails = () => {
    return (
        <div className='absolute z-20 flex w-screen gap-10'>
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
                    <h1 className='text-white w-10 aspect-square'>55%</h1>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
