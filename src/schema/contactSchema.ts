import z from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Invalid email format'),
  message: z
    .string()
    .trim()
    .min(1, 'Message is required')
    .min(6, 'Message must be at least 6 characters'),
});

export type ContactSchema = z.infer<typeof contactSchema>;
