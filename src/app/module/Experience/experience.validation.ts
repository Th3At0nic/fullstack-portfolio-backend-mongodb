import { z } from 'zod';

export const experienceValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    company: z.string({ required_error: 'Company is required' }),
    location: z.string({ required_error: 'Location is required' }),
    employmentType: z.enum(
      [
        'Full-time',
        'Part-time',
        'Internship',
        'Freelance',
        'Contract',
        'Remote',
      ],
      { required_error: 'Employment type is required' },
    ),
    startDate: z.string({ required_error: 'Start date is required' }), // ISO date string
    endDate: z.string().optional(),
    currentlyWorking: z.boolean({
      required_error: 'Currently working is required',
    }),
  }),
});
