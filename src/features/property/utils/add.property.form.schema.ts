import z from "zod";

export const addPropertyFormSchema = z.object({
    propertyName: z.string().min(2, "Please enter valid property name."),
    propertyAddress: z.string().min(3, "Please enter valid property name."),
    propertyType: z.string().min(2, "Please select valid property type."),
    propertyStatus: z.string().min(2, "Please select valid property status."),
    propertyDeposit: z.string().min(4, "Please enter valid property deposite."),
    propertyRent: z.string().min(4, "Please enter valid property rent."),
    rentRecurrence: z.string().min(2, "Please select valid rent recurrence period."),
    note: z.string().min(2, "Please enter note."),
})

export type AddPropertyFormValues = z.infer<typeof addPropertyFormSchema>
