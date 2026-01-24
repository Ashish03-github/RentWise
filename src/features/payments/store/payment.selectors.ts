import { RootState } from "@/store/type";

export const recentPayementsSelector = (state: RootState) => state.payments.payments;

export const selectedPaymentByIdSelector = (state: RootState) => state.payments.selectedPayment

export const removedPaymentHistorySelector = (state: RootState) => state.payments.removedPaymentHistory

export const rentInfoSelector = (state: RootState) => state.payments.rentInfo
