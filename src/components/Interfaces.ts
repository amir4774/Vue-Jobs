export interface JobType {
  id: number;
  type: string;
  title: string;
  description: string;
  salary: string;
  location: string;
}

export interface JobViewType extends JobType {
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}

export interface HeroProps {
  title?: string;
  subtitle?: string;
}
