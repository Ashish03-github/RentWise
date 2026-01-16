import { z } from "zod";

export const addPaymentFormSchema = z.object({
    tenantName: z.string().min(3, "Please select tenant."),
    propertyName: z.string().min(3, "Please select property"),
    fromDate: z.string().min(4, "Please select from date."),
    toDate: z.string().min(3, "Please select to date."),
    paidAmount: z.string().min(3, "Please enter paid amount."),
    remainingAmount: z.string().min(1, "Please enter remaining paid amount."),
    rentStatus: z.string().min(3, "Please select rent status."),
    paymentType: z.string().min(3, "Please select payment type."),
    note: z.string().min(3, "Please enter note.")
});

export type AddPaymentFormValues = z.infer<typeof addPaymentFormSchema>