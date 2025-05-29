export type TCourse = {
  title: string;
  platform: string; // Udemy, Coursera, Google, etc.
  duration: string; // e.g. "6 weeks", "3 hours", optional
  certificateUrl: string; // Google Drive or any external link
  completedAt: string;
};
