import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";
import movieslice from "./movieslice";
import GPTslice from "./GPTslice";
const store = configureStore({
    reducer: {
        user: userslice,
        movie: movieslice,
        gpt: GPTslice
    }
})
export default store;