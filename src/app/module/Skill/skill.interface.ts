export type TSkill = {
  title: string; // e.g., "React"
  category:
    | 'Language'
    | 'Framework'
    | 'Library'
    | 'Tool'
    | 'Database'
    | 'Platform'
    | 'Other';
  description: string; // Optional e.g., "Frontend Library"
  iconUrl: string; // Optional SVG or image URL
};
