import { Schema, model } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>(
  {
    title: { type: String, required: true, unique: true },
    category: {
      type: String,
      enum: [
        'Language',
        'Framework',
        'Library',
        'Tool',
        'Database',
        'Platform',
        'Other',
      ],
      required: true,
    },
    description: { type: String, required: true },
    iconUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const SkillModel = model<TSkill>('Skill', skillSchema);
