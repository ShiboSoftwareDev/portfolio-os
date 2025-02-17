import React from "react";
import { motion } from "framer-motion";
import { TechCategories } from "../types/portfolio";

interface SkillBarProps {
  category: TechCategories;
}

export const SkillBar: React.FC<SkillBarProps> = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 rounded-xl bg-cyan-500/5 backdrop-blur-sm"
    >
      <h3 className="text-lg font-semibold text-cyan-50 mb-3">
        {category.name}
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            <span className="text-sm text-cyan-200">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
