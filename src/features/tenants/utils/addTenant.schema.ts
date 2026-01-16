import { z } from 'zod'

export const addTenantSchema = z.object({
    tenantName: z
        .string()
        .min(1, 'Tenant name is required'),

    email: z
        .string()
        .min(1, 'Email is required')
        .email('Enter a valid email'),

    phone: z
        .string()
        .min(10, 'Phone number is required')
        .max(15, 'Invalid phone number'),

    property: z
        .string()
        .min(1, 'Property is required'),

    propertyType: z
        .string()
        .min(1, 'Property type is required'),

    deposit: z
        .string()
        .min(1, 'Deposit amount is required'),

    rent: z
        .string()
        .min(1, 'Rent amount is required'),

    leaseStartDate: z
        .string()
        .min(1, 'Lease start date is required'),

    leaseEndDate: z
        .string()
        .min(1, 'Lease end date is required'),

    rentRecurrence: z
        .string()
        .min(1, 'Rent recurrence is required'),

})

export type AddTenantFormValues = z.infer<typeof addTenantSchema>;