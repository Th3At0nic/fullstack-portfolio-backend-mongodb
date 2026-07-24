import { z } from 'zod';

export const personalProjectValidationSchema = z.object({
  body: z.object({
    type: z.enum(['personal', 'company'], {
      required_error: 'Project type is required',
    }),
    title: z.string({ required_error: 'Project title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    technologies: z.array(z.string(), {
      required_error: 'Technologies list is required',
    }),
    liveUrl: z.preprocess(
      (val) => (val === '' ? undefined : val),
      z.string().url('Must be a valid URL').optional(),
    ),
    frontendRepo: z.preprocess(
      (val) => (val === '' ? undefined : val),
      z.string().url('Must be a valid URL').optional(),
    ),
    backendRepo: z.preprocess(
      (val) => (val === '' ? undefined : val),
      z.string().url('Must be a valid URL').optional(),
    ),
    liveBackendUrl: z.preprocess(
      (val) => (val === '' ? undefined : val),
      z.string().url('Must be a valid URL').optional(),
    ),
    deploymentPlatform: z
      .enum(['Vercel', 'Netlify', 'Render', 'Railway', 'VPS', 'Other'])
      .optional(),
    isConfidential: z.boolean().default(false),
    role: z.string().optional(),
    impactMetrics: z.array(z.string()).optional(),
    architectureNotes: z.string().optional(),
    featured: z.boolean().optional(),
  }).superRefine((data, ctx) => {
    const isConfidentialCompanyProject =
      data.type === 'company' && data.isConfidential === true;

    if (isConfidentialCompanyProject) {
      return;
    }

    if (!data.liveUrl) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['liveUrl'],
        message: 'Live URL is required',
      });
    }

    if (!data.frontendRepo) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['frontendRepo'],
        message: 'Frontend repo URL is required',
      });
    }

    if (!data.deploymentPlatform) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['deploymentPlatform'],
        message: 'Deployment platform is required',
      });
    }
  }),
});
