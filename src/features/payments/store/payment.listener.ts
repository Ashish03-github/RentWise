import { createListenerMiddleware } from "@reduxjs/toolkit";
import { paymentsApi } from "../services/payments.api";

const paymentListener = createListenerMiddleware()

paymentListener.startListening({
    matcher: paymentsApi.endpoints.getRecentPayments.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(action.payload)
    }
});


paymentListener.startListening({
    matcher: paymentsApi.endpoints.getAllRentInfo.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(action.payload)
    }
});

paymentListener.startListening({
    matcher: paymentsApi.endpoints.addRentPayment.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(action.payload)
    }
});
paymentListener.startListening({
    matcher: paymentsApi.endpoints.updateRentPayment.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(action.payload)
    }
});
paymentListener.startListening({
    matcher: paymentsApi.endpoints.removeRentPayment.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(action.payload)
    }
});
paymentListener.startListening({
    matcher: paymentsApi.endpoints.getPaymentHistory.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(action.payload)
    }
});
paymentListener.startListening({
    matcher: paymentsApi.endpoints.sendReminder.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(action.payload)
    }
});





