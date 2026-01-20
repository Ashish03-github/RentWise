import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse, User } from './auth.types';

interface AuthState {
    user: LoginResponse['user'] | null;
    token: string | null;
    registerUsers: User[],
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    registerUsers: [],
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<LoginResponse>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },

        createUser: (state, action) => {
            state.registerUsers = [...state.registerUsers, { ...action.payload.user, isRegistered: true }];
        },

        logout: () => initialState,
    },
});

export const { setSession, createUser, logout } = authSlice.actions;
export default authSlice.reducer;