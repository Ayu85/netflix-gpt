import { createSlice } from "@reduxjs/toolkit";

const moviedetailsslice = createSlice({
    name: "moviedetails",
    initialState: {
        details: null
    },
    reducers: {
        addDetails: (state, action) => {
            state.details = action.payload
        }
    }

})