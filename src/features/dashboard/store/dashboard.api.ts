import { api } from "@/services/baseApi";
import { DashboardRequest, DashboardResponse } from "./dashboard.type";

const dashboardApi = api.injectEndpoints({
    endpoints: (build) => ({

        getDashboardData: build.query<DashboardResponse, DashboardRequest>({
            query: () => ({
                url: '/dashboard/data',
                method: 'GET',
            }),
        }),

        createDashboardData: build.mutation<DashboardResponse, DashboardRequest>({
            query: (body) => ({
                url: '/dashboard/data',
                method: 'POST',
                body
            })
        }),

        updateDashboardData: build.mutation<DashboardResponse, DashboardRequest>({
            query: (body) => ({
                url: '/dashboard/data',
                method: 'PUT',
                body
            })
        }),

        deleteDashboardData: build.mutation<DashboardResponse, DashboardRequest>({
            query: (body) => ({
                url: '/dashboard/data',
                method: 'DELETE',
                body
            })
        })

    })
})

export const { useGetDashboardDataQuery, useCreateDashboardDataMutation, useUpdateDashboardDataMutation, useDeleteDashboardDataMutation } = dashboardApi