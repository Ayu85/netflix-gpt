import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: "user-details",
    initialState: {
        userData: {}
    },
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload;
        }
    }

})
export const { addUser } = userslice.actions;
export default userslice.reducer;