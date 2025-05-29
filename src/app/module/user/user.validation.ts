import { z } from 'zod';

// Define Zod validation schema
export const userLoginValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(4, { message: 'Password must be at least 4 characters long' })
      .max(128, { message: 'Password must be 128 characters or fewer' }),
  }),
});

export const userValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    bio: z.array(z.string()).optional(),
    role: z.literal('admin').optional(), // defaults to 'admin' if not provided
    location: z.string().min(1, 'Location is required'),
    description: z.string().min(1, 'Description is required'),
  }),
});
