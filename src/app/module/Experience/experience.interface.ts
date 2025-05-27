export type TExperience = {
  _id?: string;
  title: string;
  company: string;
  location?: string;
  employmentType?:
    | 'Full-time'
    | 'Part-time'
    | 'Internship'
    | 'Freelance'
    | 'Contract'
    | 'Remote';
  startDate: string; // ISO format
  endDate?: string;
  currentlyWorking: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
