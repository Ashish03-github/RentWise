// import { Property } from "@/features/property/types/proprty.type";

// export interface RecentPayment extends Property {
//     tenantName: string;
//     propertyName: string;
//     propertyAddress: string;
//     tenantImage: string;
//     leaseStartDate: string;
//     leaseEndDate: string;
//     propertyRent: string,
//     paymentstatus: "Paid" | "Partial" | "Pending",
//     paidAmount: number,
//     pendingAmount: number,
//     partialAmount: number,
//     daysLate: number,
//     rentDue: number,
// }

export type PaymentItemProps = {
    item: Payment;
    index: string;
};

export type PaymentStatus = 'Paid' | 'Pending' | 'Partial';


export type Payment = {
    id: string;
    propertyId: string;
    tenantId: string;
    tenantImage: string;
    tenantName: string;
    leaseStartDate: string;
    leaseEndDate: string;
    paymentstatus: string;
    paidAmount: number;
    pendingAmount: number;
    partialAmount: number;
    daysLate: number;
    rentDue: number;
    fromDate: string;
    toDate: string;
    payementDate: string;
    note?: string;
    paymentType: string;
};

export type RentInfo = {
    collected: number;
    pending: number;
    total: number;
};