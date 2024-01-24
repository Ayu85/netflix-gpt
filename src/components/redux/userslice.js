import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: "user-details",
    initialState: {
        userData: null
    },
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload;
        },
        removeUser: (state) => {
            state.userData = {}
        }
    }

})
export const { addUser,removeUser } = userslice.actions;
export default userslice.reducer;