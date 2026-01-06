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