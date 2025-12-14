import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: ''
    },
    reducers: {
        profileAction: (state, action) => {
            state.profile = action?.payload;
        }
    }
})

export const { profileAction } = profileSlice.actions;
export default profileSlice.reducer;