import { z } from 'zod';

export const personalProjectValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Project title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    technologies: z.array(z.string(), {
      required_error: 'Technologies list is required',
    }),
    liveUrl: z
      .string({ required_error: 'Live URL is required' })
      .url('Must be a valid URL'),
    frontendRepo: z
      .string({ required_error: 'Frontend repo URL is required' })
      .url('Must be a valid URL'),
    backendRepo: z.string().url('Must be a valid URL').optional(),
    liveBackendUrl: z.string().url('Must be a valid URL').optional(),
    deploymentPlatform: z.enum(
      ['Vercel', 'Netlify', 'Render', 'Railway', 'Other'],
      {
        required_error: 'Deployment platform is required',
      },
    ),
    featured: z.boolean().optional(),
  }),
});
