export type TBlog = {
  _id?: string;
  title: string;
  thumbnail: string; // image URL
  category: string; // e.g., "JavaScript", "Career", etc.
  shortDescription: string;
  content: string; // full blog content (HTML or Markdown allowed)
  author?: string; // optional if only you
  createdAt?: Date;
  updatedAt?: Date;
};
