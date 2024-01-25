import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name: "movies",
    initialState: {
        movieData: null,
        trailer: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.movieData = action.payload
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload
        },
        addPopular: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRated: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcoming: (state, action) => {
            state.upcomingMovies = action.payload
        },
    }

})
export const { addMovies, addTrailer, addPopular, addTopRated, addUpcoming } = movieslice.actions;
export default movieslice.reducer;