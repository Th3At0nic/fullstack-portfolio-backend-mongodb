import { Schema, model } from 'mongoose';
import { TResume } from './resume.interface';

const resumeSchema = new Schema<TResume>(
  {
    resumeUrl: { type: String, required: true },
  },
  { timestamps: true },
);

export const ResumeModel = model<TResume>('Resume', resumeSchema);
