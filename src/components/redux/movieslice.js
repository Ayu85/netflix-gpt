import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name: "movies",
    initialState: {
        movieData: {},
        trailer: {}
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
export const { addMovies,addTrailer } = movieslice.actions;
export default movieslice.reducer;