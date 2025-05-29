import { model, Schema } from 'mongoose';
import { TCourse } from './course.interface';

const courseSchema = new Schema<TCourse>(
  {
    title: { type: String, required: true },
    platform: { type: String, required: true },
    duration: { type: String, required: true },
    certificateUrl: { type: String, required: true },
    completedAt: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const CourseModel = model<TCourse>('Course', courseSchema);
