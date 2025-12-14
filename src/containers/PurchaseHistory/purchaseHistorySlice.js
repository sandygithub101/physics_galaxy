import { createSlice } from "@reduxjs/toolkit";

export const purchaseHistorySlice = createSlice({
    name: 'purchaseHistory',
    initialState: {
        purchaseHistory: ''
    },
    reducers: {
        purchaseHistoryAction: (state, action) => {
            state.purchaseHistory = action?.payload;
        }
    }
})

export const { purchaseHistoryAction } = purchaseHistorySlice.actions;
export default purchaseHistorySlice.reducer;