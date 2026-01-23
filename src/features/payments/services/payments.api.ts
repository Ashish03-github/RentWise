import { api } from "@/services/baseApi";

export const paymentsApi = api.injectEndpoints({
    endpoints: build => ({

        getAllRentInfo: build.mutation({
            query: id => ({
                url: `/rent-info/${id}`,
                method: "GET"
            })
        }),

        getPaymentInfo: build.mutation({
            query: id => ({
                url: `/payment-info/${id}`,
                method: "GET"
            })
        }),

        getRecentPayments: build.mutation({
            query: () => ({
                url: "/recent-payments",
                method: "GET"
            }),
            invalidatesTags: ["RecentPayments"]
        }),

        getPaymentHistory: build.mutation({
            query: id => ({
                url: `/payment-history/${id}`,
                method: "GET"
            })
        }),

        addRentPayment: build.mutation({
            query: body => ({
                url: "/add-rent-payment",
                method: "POST",
                body,
            })
        }),

        updateRentPayment: build.mutation({
            query: body => ({
                url: '/update-rent-payment',
                method: "PUT",
                body
            })
        }),

        removeRentPayment: build.mutation({
            query: id => ({
                url: `/remove-rent-payment/${id}`,
                method: "DELETE",
            })
        }),

        sendReminder: build.mutation({
            query: body => ({
                url: `/send-reminder/${body.id}`,
                method: "POST",
                body
            })
        })
    })
})