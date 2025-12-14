import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
    name: 'library',
    initialState: {
        library: ''
    },
    reducers: {
        libraryAction: (state, action) => {
            state.library = action?.payload;
        }
    }
})

export const { libraryAction } = librarySlice.actions;
export default librarySlice.reducer;