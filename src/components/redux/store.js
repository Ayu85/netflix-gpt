import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";
import movieslice from "./movieslice";
const store = configureStore({
    reducer: {
        user: userslice,
        movie: movieslice
    }
})
export default store;