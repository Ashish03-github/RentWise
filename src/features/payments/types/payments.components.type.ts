import { PropertyItem } from "@/features/property/types/proprty.type";

export interface RecentPayment extends PropertyItem {
    tenantName: string;
    propertyName: string;
    propertyAddress: string;
    tenantImage: string;
    leaseStartDate: string;
    leaseEndDate: string;
    propertyRent: number,
    paymentstatus: "Paid" | "Partial" | "Pending",
    paidAmount: number,
    pendingAmount: number,
    partialAmount: number,
    daysLate: number,
    rentDue: number,
}

export type PaymentItemProps = {
    item: RecentPayment;
    index: string;
};

export type PaymentStatus = 'Paid' | 'Pending' | 'Partial';