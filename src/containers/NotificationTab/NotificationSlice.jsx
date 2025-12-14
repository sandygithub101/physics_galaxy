import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
    name: 'notifications',
    initialState: {
        notification: ''
    },
    reducers: {
        notificationAction: (state, action) => {
            state.notification = action?.payload;
        }
    }
})

export const { notificationAction } = notificationSlice.actions;
export default notificationSlice.reducer;