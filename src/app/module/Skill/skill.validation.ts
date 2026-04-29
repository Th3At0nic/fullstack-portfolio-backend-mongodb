import { z } from 'zod';

export const skillValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Skill name is required',
      })
      .min(1, 'Skill name cannot be empty'),

    description: z.string({
      required_error: 'Description is required',
    }),

    category: z.string({
      required_error: 'Category is required',
    }),
  }),
});
