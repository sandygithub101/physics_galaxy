import { createSlice } from "@reduxjs/toolkit";

export const masterContentSlice = createSlice({
    name: 'home',
    initialState: {
        allCategory: '',
        books: '',
        course: '',
        //cart: '',


    },
    reducers: {
        all_categoryAction: (state, action) => {
            state.allCategory = action?.payload;
        },
        books_Action: (state, action) => {
            state.books = action?.payload;
        },
        courses_Action: (state, action) => {
            state.course = action?.payload;
        },
        cart_Action: (state, action) => {
            state.cart = action?.payload;
        },
        address_Action: (state, action) => {
            state.address = action?.payload;
        },
        cart_Count_Action: (state, action) => {
            state.cart_count = action?.payload;
        }
    }
})

export const { all_categoryAction, books_Action, courses_Action, cart_Action, address_Action, cart_Count_Action } = masterContentSlice.actions
export default masterContentSlice.reducer;