import { z } from 'zod';

export const courseValidationSchema = z.object({
  body: z.object({
    title: z.string().min(2, 'Course title is required'),
    platform: z.string().min(2, 'Platform name is required'),
    duration: z.string(),
    certificateUrl: z.string().url('Must be a valid URL'),
    completedAt: z.string(),
  }),
});
