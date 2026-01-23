// import { RootState } from '@/store/type';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const api = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://api.example.com',
//         timeout: 10000,
//         prepareHeaders: (headers, { getState }) => {
//             const token = (getState() as RootState).auth.user?.token;
//             if (token) {
//                 headers.set('Authorization', `Bearer ${token}`);
//             }
//             headers.set('Content-Type', 'application/json');
//             return headers;
//         },
//     }),
//     tagTypes: ['Auth', 'Bills'],
//     endpoints: () => ({}),
// });

// =================================================================================

import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store/type";
// createApi
// reducerPath, baseQuery, tagTypes, endpoints are the required fields
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.example.com',
        timeout: 10000,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.user?.token;

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            headers.set("Content-Type", "application/json");
            return headers;
        }
    }),
    tagTypes: ['Auth', 'Bills', "RecentPayments"],
    endpoints: () => ({}),
})



