import { api } from "@/services/baseApi";


const propertyApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProperties: build.mutation({
            query: () => ({
                url: '/get/property',
                method: "GET",
            })
        }),

        addProperty: build.mutation({
            query: body => ({
                url: "/add/property",
                method: "POST",
                body,
            })
        }),

        getPropertyById: build.mutation({
            query: id => ({
                url: `/get/property/${id}`,
                method: "GET",
            })
        }),

        updateProperty: build.mutation({
            query: body => ({
                url: '/update/property',
                method: "PUT",
                body
            })
        }),

        getActiveTenantsForProperty: build.mutation({
            query: id => ({
                url: `/get/teants/property/${id}`,
                method: "GET"
            })
        }),

        getRentHistoryForProperty: build.mutation({
            query: id => ({
                url: `/get/payments/property/${id}`,
                method: "GET"
            })
        }),

        removeProperty: build.mutation({
            query: id => ({
                url: `/remove/property/${id}`,
                method: "DELETE"
            })
        })

    })
});

export default propertyApi;