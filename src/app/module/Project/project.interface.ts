export type TProject = {
  _id?: string;
  type: 'personal' | 'company';
  title: string;
  thumbnail: string; // image URL
  description: string;
  technologies: string[];
  liveUrl?: string;
  frontendRepo?: string;
  backendRepo?: string;
  liveBackendUrl?: string;
  deploymentPlatform?: 'Vercel' | 'Netlify' | 'Render' | 'Railway' | 'VPS' | 'Other';
  isConfidential?: boolean;
  role?: string;
  impactMetrics?: string[];
  architectureNotes?: string;
  featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
