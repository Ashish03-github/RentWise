import { z } from "zod";

export const registrationSchema = z.object({
    name: z.string().min(2, "Please enter valid name"),
    email: z.string().min(11, "Please enter email address").email("Please entere valid email address"),
    phone: z.string().min(10, "Please enter valid phone number"),
    password: z.string().min(6, "Password should be of 6 length"),
    cnf_password: z.string().min(6, "Not mathcing with password"),
})

export type RegisterationValues = z.infer<typeof registrationSchema>;