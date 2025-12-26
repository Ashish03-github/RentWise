import { api } from "@/services/baseApi";
import { LoginRequest, LoginResponse } from "./auth.types";

const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<LoginResponse, LoginRequest>({
            query: body => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Auth'],
        })
    })
})


export const { useLoginMutation } = authApi