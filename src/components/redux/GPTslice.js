import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
    name: "gptslice",
    initialState: {
        value: false
    },
    reducers: {
        toogleGPT: (state, action) => {
            state.value = !state.value
        }
    }
})
export const { toogleGPT } = GPTslice.actions;
export default GPTslice.reducer