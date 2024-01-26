import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";
import movieslice from "./movieslice";
import GPTslice from "./GPTslice";
import languageslice from "./languageslice";
const store = configureStore({
    reducer: {
        user: userslice,
        movie: movieslice,
        gpt: GPTslice,
        language: languageslice
    }
})
export default store;