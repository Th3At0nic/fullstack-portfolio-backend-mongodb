import { z } from 'zod';

export const blogValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'Title is required' })
      .min(3, 'Title must be at least 3 characters long'),
    category: z
      .string({ required_error: 'Category is required' })
      .min(2, 'Category must be at least 2 characters long'),
    shortDescription: z
      .string({ required_error: 'Short Description is required' })
      .min(10, 'Short description must be at least 10 characters'),
    content: z
      .string({ required_error: 'Content is required' })
      .min(50, 'Blog content must be at least 50 characters'),
    author: z.string().optional(),
  }),
});
