import { PropertyItem } from "@/features/property/types/proprty.type";

export interface TenantItem extends PropertyItem {
    tenantName: string;
    propertyName: string;
    propertyAddress: string;
    tenantImage: string;
    leaseStartDate: string;
    leaseEndDate: string;
    propertyRent: number,
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
};