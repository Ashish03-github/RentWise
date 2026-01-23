export interface TenantItem {
    id: string;

    // Tenant info
    tenantName: string;
    tenantImage: string;
    email?: string;
    phone?: string;
    note?: string;

    // Property reference
    propertyId: string;
    propertyName: string;
    propertyType: string;
    propertyAddress: string;
    propertyStatus: 'Occupied' | 'Vacant';

    // Financials
    propertyDeposit: number;
    propertyRent: number;
    rentRecurrence: string;

    // Lease
    leaseStartDate: string;
    leaseEndDate: string;
}

export type AddTenantFormState = {
    tenantName: string;
    email: string;
    phone: string;

    // Property selection
    propertyId: string;

    // Auto-filled (editable)
    propertyType: string;
    propertyAddress: string;

    // Financials (string for input)
    deposit: string;
    rent: string;
    rentRecurrence: string;

    // Lease
    leaseStartDate: string;
    leaseEndDate: string;

    note?: string;
};
