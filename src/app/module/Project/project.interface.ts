export type TPersonalProject = {
  _id?: string;
  title: string;
  thumbnail: string; // image URL
  description: string;
  technologies: string[];
  liveUrl: string;
  frontendRepo: string;
  backendRepo?: string;
  liveBackendUrl?: string;
  deploymentPlatform: 'Vercel' | 'Netlify' | 'Render' | 'Railway' | 'Other';
  featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
