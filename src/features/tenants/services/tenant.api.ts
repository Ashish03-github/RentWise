import { api } from "@/services/baseApi";


const tenantApi = api.injectEndpoints({
    endpoints: (build) => ({
        getTenants: build.mutation({
            query: () => ({
                url: '/get/tenant',
                method: "GET",
            })
        }),

        addTenant: build.mutation({
            query: body => ({
                url: "/add/tenant",
                method: "POST",
                body,
            })
        }),

        getTenantById: build.mutation({
            query: id => ({
                url: `/get/tenant/${id}`,
                method: "GET",
            })
        }),

        updateTenant: build.mutation({
            query: body => ({
                url: '/update/tenant',
                method: "PUT",
                body
            })
        }),

        removeTenant: build.mutation({
            query: id => ({
                url: `/remove/tenant/${id}`,
                method: "DELETE"
            })
        })

    })
});

export default tenantApi;
