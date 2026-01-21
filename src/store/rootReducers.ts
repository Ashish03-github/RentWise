import { api } from "@/services/baseApi";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/store/auth.slice";
import { dashboardReducer } from "@/features/dashboard/store/dashboard.slice";
import { propertyReducer } from "@/features/property/store";

export const rootReducer = combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer,
    properties: propertyReducer,
    [api.reducerPath]: api.reducer,
})