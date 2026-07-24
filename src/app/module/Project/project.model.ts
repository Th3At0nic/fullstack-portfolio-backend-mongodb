import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    type: { type: String, required: true, enum: ['personal', 'company'] },
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    liveUrl: { type: String },
    frontendRepo: { type: String },
    backendRepo: { type: String },
    liveBackendUrl: { type: String },
    deploymentPlatform: {
      type: String,
      enum: ['Vercel', 'Netlify', 'Render', 'Railway', 'VPS', 'Other'],
    },
    isConfidential: { type: Boolean, default: false },
    role: { type: String },
    impactMetrics: { type: [String] },
    architectureNotes: { type: String },
    featured: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const ProjectModel = model<TProject>('Project', projectSchema);
