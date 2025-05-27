import { Schema, model } from 'mongoose';
import { TPersonalProject } from './personalProject.interface';

const personalProjectSchema = new Schema<TPersonalProject>(
  {
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    liveUrl: { type: String, required: true },
    frontendRepo: { type: String, required: true },
    backendRepo: { type: String },
    liveBackendUrl: { type: String },
    deploymentPlatform: {
      type: String,
      enum: ['Vercel', 'Netlify', 'Render', 'Railway', 'Other'],
      required: true,
    },
    featured: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const PersonalProjectModel = model<TPersonalProject>(
  'PersonalProject',
  personalProjectSchema,
);
