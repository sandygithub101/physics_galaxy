import { createSlice } from "@reduxjs/toolkit";


export const courseDetailSlice = createSlice({
    name: 'Course Detail',
    initialState: {
        courseDetail: '',
    },
    reducers: {
        courseDetails_Action: (state, action) => {
            state.courseDetail = action?.payload
        }
    }
})

export const { courseDetails_Action } = courseDetailSlice.actions
export default courseDetailSlice.reducer;