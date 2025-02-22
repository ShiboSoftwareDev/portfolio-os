import { Project, TechCategories } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    icon: "",
    title: "Tscircuit",
    description:
      "Active open source contributor at Tscircuit, a tooling built for AI to create electronics.",
    details:
      "I worked mainly on the core library implementing features and fixing bugs. I also created prompt benchmarks using Evalite and evaluated the code response using Tscircuit tooling. I improved the google lighthouse score of the site from 40 to around 98 by implenting prefetching to vite, automatic generation and dynamic serving of image sizes and removing layout shift. Introduced a Docker-based test suite for the freerouting CLI. Ported Winterspec(a http framework for Tscircuit) to work on windows.",
    technologies: [
      { technology: "React", category: "Frontend" },
      { technology: "Evalite", category: "AI" },
      { technology: "Vite", category: "Build Tools" },
      { technology: "React Three Fiber", category: "3D" },
      { technology: "Bun", category: "Runtime" },
      { technology: "Tscircuit tools", category: "Tooling" },
    ],
    demoUrl: "https://tscircuit.com",
    sourceUrl: "https://github.com/tscircuit",
  },
  {
    id: 2,
    icon: "",
    title: "Alsahm Advertising Website",
    description: "A website for a local advertising company",
    details:
      "A group project with my two friends which was our first project, Next.js helped with prerendering and cloudinary helped with image optimization for good seo.",
    technologies: [
      { technology: "MongoDB", category: "Database" },
      { technology: "Mongoose", category: "Database" },
      { technology: "Zustand", category: "State Management" },
      { technology: "Email.js", category: "Email" },
      { technology: "Next.js", category: "Fullstack" },
      { technology: "Cloudinary", category: "Cloud" },
    ],
    demoUrl: "https://alsahm.vercel.app/",
    sourceUrl: "https://github.com/AlsahmAdvertising/AlsahmAdv-app",
  },
  {
    id: 3,
    icon: "",
    title: "Alsahm Admin Application",
    description: "A desktop application written using electron.js",
    details:
      "For the administration of the Alsahm Advertising website, features include managing users with roles, changing passwords using email OTP, easy management of posts and good security.",
    technologies: [
      { technology: "Electron.js", category: "Desktop" },
      { technology: "Cloudinary", category: "Cloud" },
      { technology: "React", category: "Frontend" },
      { technology: "Email.js", category: "Email" },
    ],
    demoUrl: "https://youtu.be/re9UYNV5pZs?si=6_UWE3jv5l78NP7G",
    sourceUrl: "",
  },
  {
    id: 4,
    icon: "",
    title: "Portfolio OS",
    description: "My favorite project is my portfolio",
    details:
      "Different versions for mobile and desktop served seperately with the help of Next.js.",
    technologies: [
      { technology: "Next.js", category: "Fullstack" },
      { technology: "Zustand", category: "State Management" },
      { technology: "framer-motion", category: "Animation" },
      { technology: "Email.js", category: "Email" },
      { technology: "Pixi.js", category: "Graphics" },
      { technology: "Node", category: "Runtime" },
    ],
    demoUrl: "",
    sourceUrl: "https://github.com/ShiboSoftwareDev/portfolio-os",
  },
  {
    id: 5,
    icon: "",
    title: "Ajerly",
    description:
      "A rental platform for basically everything, built with the T3 Stack",
    details: "WIP.",
    technologies: [
      { technology: "Next.js", category: "Fullstack" },
      { technology: "Firebase", category: "Cloud" },
      { technology: "MongoDB", category: "Database" },
      { technology: "Prisma", category: "Database" },
      { technology: "tRPC", category: "Tooling" },
      { technology: "Cloudinary", category: "Cloud" },
      { technology: "Bun", category: "Runtime" },
    ],
    demoUrl: "",
    sourceUrl: "https://github.com/Ajerly/Ajerly",
  },
];

const techMap = new Map<string, Set<string>>();
projects.forEach((project) => {
  project.technologies.forEach(({ technology, category }) => {
    if (!techMap.has(category)) {
      techMap.set(category, new Set());
    }
    techMap.get(category)!.add(technology);
  });
});

export const techCategories: TechCategories[] = Array.from(
  techMap.entries(),
).map(([name, skillsSet]) => ({
  name,
  skills: Array.from(skillsSet),
}));

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  portfolio: "https://yourportfolio.com",
};

export const contactInfo = {
  email: "your.email@example.com",
  location: "City, Country",
  availability: "Open to opportunities",
};
