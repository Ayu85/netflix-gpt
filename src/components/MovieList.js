import React from 'react'
import MovieCard from './Movie_Card'
const MovieList = ({ title, movies, id }) => {
    return (
        <div className='flex flex-col '>
            <h1 className='text-white text-2xl font-bold'>{title}</h1>
            <div className='flex overflow-y-scroll justify-center gap-5 pt-3'>
                {
                    movies.map((items, id) => {
                        return <MovieCard {...items} id={id} />
                    })
                }
            </div>
        </div>
    )
}

export default MovieList
