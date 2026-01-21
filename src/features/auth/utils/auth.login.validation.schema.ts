import { z } from "zod";

export const loginSchema = z.object({
    // email: z.string().email("Please enter a valid email address."),
    // password: z.string().min(6, "Please enter valid password.")
    email: z.string().optional(),
    password: z.string().optional()
});

export type LoginValuesType = z.infer<typeof loginSchema>