import { api } from "@/services/baseApi";
import { LoginRequest, LoginResponse } from "./auth.types";

export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<LoginResponse, LoginRequest>({
            query: body => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Auth'],
        }),

        register: build.mutation({
            query: body => ({
                url: "/auth/register",
                method: "POST",
                body
            }),
            invalidatesTags: ["Auth"]
        })

    })
})


export const { useLoginMutation, useRegisterMutation } = authApi