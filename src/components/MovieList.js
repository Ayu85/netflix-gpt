import React from 'react'
import MovieCard from './Movie_Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {


    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,

    },
    tablet: {
        breakpoint: { max: 1024, min: 950 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const MovieList = ({ title, movies, id }) => {
    return (
        <div className='pl-14 py-2  flex flex-col'>
            <h1 className='text-white text-2xl font-bold pb-3'>{title}</h1>
            <Carousel responsive={responsive} infinite={true} keyBoardControl={true} autoPlay={true} autoPlaySpeed={3000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className='flex '>
                {
                    movies.map((items, id) => {
                        return <MovieCard {...items} id={id} />
                    })
                }
            </Carousel ></div>
    )
}

export default MovieList
