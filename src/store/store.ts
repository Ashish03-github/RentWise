import { api } from "@/services/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducers";
// configure and create the redux store
// add reducers and middleware as needed
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: true,
        serializableCheck: true,
    }).concat(api.middleware),
    devTools: __DEV__,
})