import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";
import { SkillBar } from "../components/SkillBar";
import { projects, skillCategories } from "../data/portfolio-data";

const MyWork = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const backgroundCircles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        width: Math.random() * 100 + 20,
        height: Math.random() * 100 + 20,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: Math.random() * 10 + 10,
      })),
    [],
  );

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-950 via-cyan-900 to-slate-900 overflow-y-auto">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {backgroundCircles.map((circle) => (
          <div
            key={circle.id}
            className="absolute rounded-full bg-cyan-500/5 animate-float"
            style={{
              width: `${circle.width}px`,
              height: `${circle.height}px`,
              left: `${circle.left}%`,
              top: `${circle.top}%`,
              animationDelay: `${circle.animationDelay}s`,
              animationDuration: `${circle.animationDuration}s`,
              containIntrinsicSize: "auto",
              contain: "strict",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
              Work Experience
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </div>
          <p className="text-cyan-100 mt-4">
            Transforming ideas into digital reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProject === project.id}
              onSelect={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id,
                )
              }
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-cyan-900/30 backdrop-blur-lg border border-cyan-500/20"
        >
          <h2 className="text-2xl font-bold text-cyan-50 mb-6">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((category) => (
              <SkillBar key={category.name} category={category} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyWork;
