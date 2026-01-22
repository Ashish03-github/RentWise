import { Property } from "@/features/property/types/proprty.type";

export interface TenantItem extends Property {
    tenantName: string;
    propertyName: string;
    propertyAddress: string;
    tenantImage: string;
    leaseStartDate: string;
    leaseEndDate: string;
    propertyRent: number;
    email?: string;
    phone?: string;
    note?: string;
}

export type AddTenantFormState = {
    tenantName: string;
    email: string;
    phone: string;
    property: string;
    deposit: string;
    rent: string;
    leaseStartDate: string;
    leaseEndDate: string;
    propertyType: string;
    rentRecurrence: string;
    propertyAddress: string;
    note?: string;
};