import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name: "movies",
    initialState: {
        movieData: {}
    },
    reducers: {
        addMovies: (state, action) => {
            state.movieData = action.payload
        }
    }

})
export const { addMovies } = movieslice.actions;
export default movieslice.reducer;