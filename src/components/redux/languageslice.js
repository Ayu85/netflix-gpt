import { createSlice } from "@reduxjs/toolkit";

const languageslice = createSlice({
    name: "lang",
    initialState: {
        language: "en"
    },
    reducers: {
        addLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})
export const { addLanguage } = languageslice.actions
export default languageslice.reducer