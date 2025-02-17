import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../types/portfolio";

interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  onSelect: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isSelected,
  onSelect,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.005 }}
      className={`                                                                                                        
         p-6 rounded-xl                                                                                                    
         bg-gradient-to-br from-blue-900/50 to-cyan-900/30                                                                 
         backdrop-blur-lg border border-cyan-500/20                                                                        
         transform transition-all duration-300                                                                             
         ${isSelected ? "scale-105" : ""}                                                                                  
       `}
      onClick={onSelect}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{project.icon}</span>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{project.description}</p>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              opacity: { duration: 0.2 },
              height: { duration: 0.3 },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-cyan-500/20"
            >
              <p className="text-cyan-200 mb-4">{project.details}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.technology}
                    className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-200"
                  >
                    {tech.technology}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {project.demoUrl && (
                  <a
                    target="_blank"
                    href={project.demoUrl}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  >
                    View
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    target="_blank"
                    href={project.sourceUrl}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-200"
                  >
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
