export interface Project {
  id: number;
  icon: string;
  title: string;
  description: string;
  details: string;
  technologies: { technology: string; category: string }[];
  demoUrl?: string;
  sourceUrl?: string;
}

export interface TechCategories {
  name: string;
  skills: string[];
}
