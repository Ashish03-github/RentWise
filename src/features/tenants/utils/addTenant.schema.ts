import { z } from 'zod';

export const addTenantSchema = z.object({
    tenantName: z.string().min(1, 'Tenant name is required'),

    email: z
        .string()
        .min(1, 'Email is required')
        .email('Enter a valid email'),

    phone: z
        .string()
        .min(10, 'Phone number is required')
        .max(15, 'Invalid phone number'),

    propertyId: z.string().min(1, 'Property is required'),

    // Auto-filled property fields
    propertyType: z.string().optional(),
    propertyAddress: z.string().optional(),
    deposit: z.string().optional(),
    rent: z.string().optional(),
    rentRecurrence: z.string().optional(),

    leaseStartDate: z.string().min(1, 'Lease start date is required'),
    leaseEndDate: z.string().min(1, 'Lease end date is required'),

    note: z.string().optional(),
});

export type AddTenantFormValues = z.infer<typeof addTenantSchema>;
