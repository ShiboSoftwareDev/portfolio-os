export interface Project {
  id: number;
  icon: string;
  title: string;
  description: string;
  details: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Design";
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
