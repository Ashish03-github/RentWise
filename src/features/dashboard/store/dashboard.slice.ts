import { createSlice } from "@reduxjs/toolkit";
import { DashboardState } from "./dashboard.type";

const initialState: DashboardState = {
    loading: false,
    data: {},
    error: null
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setDashboardLoading(state, action) {
            state.loading = action.payload;
        },
        setDashboardData(state, action) {
            state.data = action.payload;
        },
        setDashboardError(state, action) {
            state.error = action.payload;
        },
    }
})

export const { setDashboardLoading, setDashboardData, setDashboardError } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer