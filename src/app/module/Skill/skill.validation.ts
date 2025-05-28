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

    category: z.enum(
      [
        'Language',
        'Framework',
        'Library',
        'Tool',
        'Database',
        'Platform',
        'Other',
      ],
      {
        required_error: 'Skill category is required',
        invalid_type_error: 'Invalid skill category',
      },
    ),
  }),
});
