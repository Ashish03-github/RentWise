import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    payments: [],
    selectedPayment: {},
    removedPayment: []
}

const paymentSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {

        addPayment: () => { },
        removePayment: () => { },
        sendReminder: () => { },
        selectPaymentById: () => { }
    }
})

export const { addPayment, removePayment, sendReminder, selectPaymentById } = paymentSlice.actions
export default paymentSlice.reducer