import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";
import { createUser, setSession } from "./auth.slice";

export const authListener = createListenerMiddleware();
authListener.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(setSession(action.payload))
    }
})

authListener.startListening({
    matcher: authApi.endpoints.register.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(createUser(action.payload))
    }
})