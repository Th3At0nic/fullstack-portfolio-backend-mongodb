import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    category: { type: String, required: true },
    shortDescription: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, default: 'Md Rahatul Islam' },
  },
  {
    timestamps: true,
  },
);

export const BlogModel = model<TBlog>('Blog', blogSchema);
