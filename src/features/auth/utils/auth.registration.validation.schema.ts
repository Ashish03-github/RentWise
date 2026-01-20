import { z } from 'zod';

export const registrationSchema = z
    .object({
        name: z
            .string()
            .min(2, 'Please enter a valid name'),

        email: z
            .string()
            .email('Please enter a valid email address'),

        phone: z
            .string()
            .regex(/^[0-9]{10}$/, 'Please enter a valid phone number'),

        password: z
            .string()
            .min(6, 'Password should be at least 6 characters'),

        cnf_password: z
            .string()
            .min(6, 'Confirm password should be at least 6 characters'),
    })
    .refine((data) => data.password === data.cnf_password, {
        message: 'Password and confirm password do not match',
        path: ['cnf_password'],
    });

export type RegisterationValues = z.infer<typeof registrationSchema>;