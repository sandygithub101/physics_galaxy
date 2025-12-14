import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import masterContentReducer from "../containers/Home/masterContentSlice";
import courseDetailReducer from "../containers/ViewDetail/courseDetailSlice";
import profileReducer from '../containers/Profile/profileSlice';
import libraryReducer from '../containers/Library/librarySlice';
import purchaseHistoryReducer from '../containers/PurchaseHistory/purchaseHistorySlice';
import notificationReducer from '../containers/NotificationTab/NotificationSlice';
import logoutReducer from '../components/UserDetails/logoutSlice'
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import footerReducer from "../components/Footer/FooterSlice";
// const persistConfig = {
//     key: 'root',
//     verion: 1,
//     storage,
//   }
const combinereducer = combineReducers({
    allCategory: masterContentReducer,
    courseDetail: courseDetailReducer,
    profileDetail: profileReducer,
    libraryDetail: libraryReducer,
    purchaseHistory: purchaseHistoryReducer,
    notification: notificationReducer,
    footerDetail: footerReducer
    // logout: logoutReducer
})
const rootReducer = (state, action) => {
    if (action.type == 'logout/logoutAction') {
        state = {}
    }
    return combinereducer(state, action)
}

// const persistedReducer = persistReducer(persistConfig, combinereducer);
export const store = configureStore({
    reducer: rootReducer,
    // reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    //  :{
    //     all_category : masterContentReducer
    // }
})

export const persistor = store;
//  persistStore();