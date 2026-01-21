import z from "zod";

export const addPropertyFormSchema = z.object({
    id: z.string().optional(),
    image: z.string().optional(),

    propertyName: z.string().min(2, "name must contain at least 2 characters."),
    propertyAddress: z.string().min(3),

    propertyType: z.enum(['Apartment / Flat',
        'Independent House',
        'Villa',
        'Builder Floor',
        'PG / Hostel',
        'Office Space',
        'Shop / Showroom',
        'Commercial Building',
        'Warehouse / Godown',
        'Plot / Land']),
    propertyStatus: z.enum(["Occupied", "Vacant", "Booked"]),

    propertyDeposit: z.string().min(1),
    propertyRent: z.string().min(1),

    rentRecurrence: z.enum(["Monthly", "Yearly", "Other"]),
    note: z.string().optional(),
});

export type AddPropertyFormValues = z.infer<typeof addPropertyFormSchema>
