import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payment, RentInfo } from "../types/payments.components.type";

interface PaymentState {
    payments: Payment[];
    selectedPayment: Payment | null;
    removedPaymentHistory: Payment[];
    rentInfo: RentInfo;
}

const initialState: PaymentState = {
    payments: [],
    selectedPayment: null,
    removedPaymentHistory: [],
    rentInfo: {
        collected: 0,
        pending: 0,
        total: 0,
    },
};

const paymentSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        /* ---------------- CREATE ---------------- */
        addPayment: (state, action: PayloadAction<Payment>) => {
            state.payments.push(action.payload);
            recalculateRentInfo(state);
        },

        /* ---------------- READ ---------------- */
        selectPaymentById: (state, action: PayloadAction<{ id: string }>) => {
            state.selectedPayment =
                state.payments.find(p => p.id === action.payload.id) || null;
        },

        clearSelectedPayment: (state) => {
            state.selectedPayment = null;
        },

        /* ---------------- UPDATE ---------------- */
        updatePayment: (state, action: PayloadAction<Payment>) => {
            const index = state.payments.findIndex(
                p => p.id === action.payload.id
            );

            if (index !== -1) {
                state.payments[index] = action.payload;
                recalculateRentInfo(state);
            }
        },

        /* ---------------- DELETE ---------------- */
        removePayment: (state, action: PayloadAction<{ id: string }>) => {
            const payment = state.payments.find(
                p => p.id === action.payload.id
            );

            if (payment) {
                state.removedPaymentHistory.push(payment);
                state.payments = state.payments.filter(
                    p => p.id !== action.payload.id
                );
                recalculateRentInfo(state);
            }
        },

        /* ---------------- EXTRA ---------------- */
        sendReminder: (_state, _action: PayloadAction<{ id: string }>) => {
            // Side-effect → handle via thunk or saga
        },
    },
});

/* ---------------- HELPER ---------------- */
function recalculateRentInfo(state: PaymentState) {
    let collected = 0;
    let pending = 0;

    state.payments.forEach(p => {
        collected += p.paidAmount;
        pending += p.pendingAmount;
    });

    state.rentInfo.collected = collected;
    state.rentInfo.pending = pending;
    state.rentInfo.total = collected + pending;
}

export const {
    addPayment,
    updatePayment,
    removePayment,
    selectPaymentById,
    clearSelectedPayment,
    sendReminder,
} = paymentSlice.actions;

export default paymentSlice.reducer;
