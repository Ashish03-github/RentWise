import { RootState } from "@/store/type";
import { createSelector } from "@reduxjs/toolkit";
const selectAuthState = (state: RootState) => state.auth;

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (authState) => !!authState.isAuthenticated
);