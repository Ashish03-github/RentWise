import { z } from "zod";
export const addPaymentFormSchema = z.object({
    tenantId: z.string().min(1, 'Please select tenant'),
    propertyId: z.string().min(1, 'Please select property'),

    fromDate: z.string().min(1, 'Please select date'),
    toDate: z.string().min(1, 'Please select date'),

    paidAmount: z.string().min(1, 'Please enter paid amount'),
    remainingAmount: z.string().min(1, 'Please enter remaining amount'),
    rentStatus: z.string().min(1, 'Please select rent status'),
    paymentType: z.string().min(1, 'Please select tenant'),
    note: z.string().optional(),
});

export type AddPaymentFormValues = z.infer<typeof addPaymentFormSchema>;