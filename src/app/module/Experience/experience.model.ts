import { model, Schema } from 'mongoose';
import { TExperience } from './experience.interface';

const experienceSchema = new Schema<TExperience>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    employmentType: {
      type: String,
      enum: [
        'Full-time',
        'Part-time',
        'Internship',
        'Freelance',
        'Contract',
        'Remote',
      ],
      required: true,
    },
    startDate: { type: String, required: true },
    endDate: { type: String },
    currentlyWorking: { type: Boolean, required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  },
);

export const ExperienceModel = model<TExperience>(
  'Experience',
  experienceSchema,
);
