import { z } from 'zod';

export const resumeValidationSchema = z.object({
  body: z.object({
    resumeUrl: z
      .string({
        required_error: 'Resume URL is required',
        invalid_type_error: 'Resume URL must be a string',
      })
      .url('Invalid URL format. Please provide a valid URL'),
  }),
});
