import { Project, SkillCategory } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    icon: "🚀",
    title: "CloudSync Pro",
    description: "Revolutionary cloud storage with AI-powered organization",
    details:
      "A cutting-edge cloud storage solution featuring real-time collaboration, AI-powered file organization, and enterprise-grade security.",
    technologies: ["React", "Node.js", "AWS", "AI/ML"],
    demoUrl: "https://demo.example.com",
    sourceUrl: "https://github.com/yourusername/project",
  },
  {
    id: 2,
    icon: "🎮",
    title: "GameHub Connect",
    description: "Social gaming platform with matchmaking",
    details:
      "Advanced gaming platform with real-time matchmaking, chat features, and competitive leaderboards.",
    technologies: ["Socket.io", "React", "MongoDB", "WebRTC"],
    demoUrl: "https://demo.example.com",
    sourceUrl: "https://github.com/yourusername/project",
  },
  {
    id: 3,
    icon: "📱",
    title: "Mobile Companion App",
    description: "Cross-platform mobile application for lifestyle management",
    details:
      "Feature-rich mobile app with health tracking, task management, and social features.",
    technologies: ["React Native", "Firebase", "Redux", "Native APIs"],
    demoUrl: "https://demo.example.com",
    sourceUrl: "https://github.com/yourusername/project",
  },
  {
    id: 4,
    icon: "🤖",
    title: "AI Content Generator",
    description: "AI-powered content creation and optimization tool",
    details:
      "Leverages machine learning to generate and optimize content for various platforms.",
    technologies: ["Python", "TensorFlow", "GPT-3", "FastAPI"],
    demoUrl: "https://demo.example.com",
    sourceUrl: "https://github.com/yourusername/project",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React/Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux/Zustand",
      "HTML/CSS",
      "JavaScript",
      "Vue.js",
      "Responsive Design",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Python",
      "REST APIs",
      "GraphQL",
      "Database Design",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    name: "Tools",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "CI/CD",
      "Linux",
      "Kubernetes",
      "Jenkins",
      "Terraform",
    ],
  },
  {
    name: "Design",
    skills: [
      "Figma",
      "UI/UX",
      "Design Systems",
      "Prototyping",
      "Adobe XD",
      "Wireframing",
      "User Research",
      "Accessibility",
    ],
  },
];

// Optional: Add social links
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  portfolio: "https://yourportfolio.com",
};

// Optional: Add contact information
export const contactInfo = {
  email: "your.email@example.com",
  location: "City, Country",
  availability: "Open to opportunities",
};
