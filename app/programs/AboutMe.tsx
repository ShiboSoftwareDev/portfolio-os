import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";
// import ImageFrame from "../components/ImageFrame";
// import PdfView from "../components/PdfView";

const AboutMe = () => {
  const markdown =
    `I'm **Shibo**, a software developer with a strong background in **TypeScript** and **AI-driven applications**.  

I contributed to **TSCircuit**, an AI-powered **React framework for electronics**, where I implemented usefull features and countless bug fixes.  

Now, I'm diving into **Rust** to expand my expertise into **embedded systems**, with the goal of integrating **AI into robotics and low-level hardware**.  

Passionate about the intersection of **AI, hardware, and automation**, I'm always exploring innovative ways to bridge **software intelligence** with real-world applications.

Hobbies: 🏊 and 🏋️`;

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
      Array.from({ length: 20 }, (_, i) => {
        const size = Math.random() * 300 + 50;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        return {
          id: `aboutme-${i}${size}${left}${top}${duration}${delay}`,
          size,
          left,
          top,
          duration,
          delay,
        };
      }),
    [],
  );

  return (
    <div className="relative -z-50 h-full w-full bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 pb-10 text-white overflow-y-scroll overflow-x-hidden">
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 p-6 min-h-full"
      >
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 p-1">
              <div className="w-full h-full rounded-full bg-teal-950 flex items-center justify-center overflow-hidden">
                <Image
                  src={"/images/robots-shaking-hands.jpg"}
                  alt="robots-shaking-hands"
                  width={200}
                  height={200}
                  className=""
                />
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

        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500 w-full text-center mb-4">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/50 to-emerald-900/30 backdrop-blur-md border border-teal-500/20"
          >
            <div className="prose prose-invert max-w-none">
              <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </div>
          </motion.div>
          {/* <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500 w-full text-center">
            Recommendation Letters
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <ImageFrame>
              <PdfView pdfFilePath="pdfs/Letter1.pdf" />
            </ImageFrame>
            <ImageFrame>
              <PdfView pdfFilePath="pdfs/Letter2.pdf" />
            </ImageFrame>
          </div> */}
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500  w-full text-center">
            Contact Me
          </h2>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            <motion.a
              href="https://github.com/shibosoftwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-xl bg-gradient-to-br from-teal-900/50 to-emerald-900/30 backdrop-blur-md border border-teal-500/20  
             flex items-center justify-center gap-2 text-teal-50 hover:text-teal-200 transition-colors"
            >
              <span className="text-2xl">
                <FaGithub />
              </span>
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ahmed-alshaybani-b75a45328/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-xl bg-gradient-to-br from-teal-900/50 to-emerald-900/30 backdrop-blur-md border border-teal-500/20  
             flex items-center justify-center gap-2 text-teal-50 hover:text-teal-200 transition-colors"
            >
              <span className="text-2xl">
                <FaLinkedin />
              </span>
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://x.com/shibo_dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-xl bg-gradient-to-br from-teal-900/50 to-emerald-900/30 backdrop-blur-md border border-teal-500/20  
             flex items-center justify-center gap-2 text-teal-50 hover:text-teal-200 transition-colors"
            >
              <span className="text-2xl">
                <FaXTwitter />
              </span>
              <span>Twitter</span>
            </motion.a>

            <motion.a
              href="https://leetcode.com/u/Shibo-0001/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-xl bg-gradient-to-br from-teal-900/50 to-emerald-900/30 backdrop-blur-md border border-teal-500/20  
             flex items-center justify-center gap-2 text-teal-50 hover:text-teal-200 transition-colors"
            >
              <span className="text-2xl">
                <SiLeetcode />
              </span>
              <span>Leetcode</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
