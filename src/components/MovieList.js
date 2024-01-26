import React from 'react'
import MovieCard from './Movie_Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {


    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const MovieList = ({ title, movies, id }) => {
    return (
        <Carousel responsive={responsive}>
            {/* <h1 className='text-white text-2xl font-bold'>{title}</h1> */}
            {
                movies.map((items, id) => {
                    return <MovieCard {...items} id={id} />
                })
            }
        </Carousel >
    )
}

export default MovieList
