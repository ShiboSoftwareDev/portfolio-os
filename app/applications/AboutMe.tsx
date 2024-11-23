import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AboutMe = () => {
  const markdown = `# Hey there! I'm **Shibo** 🚀`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const emeraldPatterns = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: `aboutme-${i}`,
        size: Math.random() * 300 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <div className="h-full w-full bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 overflow-y-auto">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full opacity-10">
          {emeraldPatterns.map((pattern) => (
            <motion.div
              key={pattern.id}
              className="absolute rounded-full border border-teal-500/30"
              style={{
                width: pattern.size,
                height: pattern.size,
                left: `${pattern.left}%`,
                top: `${pattern.top}%`,
                containIntrinsicSize: "auto",
                contain: "strict",
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: pattern.duration,
                delay: pattern.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 p-6 min-h-full"
      >
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 p-1">
              <div className="w-full h-full rounded-full bg-teal-950 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
            <motion.div
              className="absolute -z-10 w-32 h-32 rounded-full bg-teal-500/20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/50 to-emerald-900/30 backdrop-blur-md border border-teal-500/20"
          >
            <div className="prose prose-invert max-w-none">
              <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: "🌐", label: "Portfolio" },
              { icon: "📫", label: "Contact" },
              { icon: "📝", label: "Blog" },
              { icon: "🤝", label: "Connect" },
            ].map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-xl bg-gradient-to-br from-teal-900/50 to-emerald-900/30 backdrop-blur-md border border-teal-500/20                                                                                                        
                           flex items-center justify-center gap-2 text-teal-50 hover:text-teal-200 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.label}</span>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
              <motion.a
                key={platform}
                whileHover={{ y: -3 }}
                href="#"
                className="px-4 py-2 rounded-full bg-teal-500/10 text-teal-100 hover:bg-teal-500/20 transition-colors"
              >
                {platform}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
