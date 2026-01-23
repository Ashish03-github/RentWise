import { z } from "zod";
export const addPaymentFormSchema = z.object({
    tenantId: z.string().min(1, 'Please select tenant'),
    propertyId: z.string().min(1, 'Please select property'),

    fromDate: z.string(),
    toDate: z.string(),

    paidAmount: z.string(),
    rentStatus: z.string(),
    paymentType: z.string(),
    note: z.string().optional(),
});

export type AddPaymentFormValues = z.infer<typeof addPaymentFormSchema>;