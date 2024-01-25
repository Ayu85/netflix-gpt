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
        }
    }

})
export const { addMovies, addTrailer } = movieslice.actions;
export default movieslice.reducer;