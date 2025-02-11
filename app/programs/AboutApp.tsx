import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as emailjs from "@emailjs/browser";

const AboutApp = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackMessageColor, setFeedbackMessageColor] = useState("");

  const sendFeedbackMessage = (message: string, tailwindColor: string) => {
    if (feedbackMessage !== "") return;
    setFeedbackMessage(message);
    setFeedbackMessageColor(tailwindColor);
    setTimeout(() => {
      setFeedbackMessage("");
    }, 2000);
  };

  const tabs = [
    { id: "features", label: "Features", icon: "✨" },
    { id: "about", label: "About", icon: "ℹ️" },
    { id: "feedback", label: "Feedback", icon: "📝" },
  ];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "" || message === "") {
      sendFeedbackMessage("Name/Message required", "text-red-500");
      return;
    }

    emailjs
      .sendForm(
        "service_wc32lg8",
        "template_kbr28fv",
        e.currentTarget,
        "Nsrya66EtqOX-xY7l",
      )
      .then(
        () => {
          sendFeedbackMessage("✅", "text-green-500");
          setEmail("");
          setName("");
          setMessage("");
        },
        () => {
          sendFeedbackMessage("Err", "text-red-500");
        },
      );
  };

  const geometricShapes = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: `aboutapp-${i}`,
        type: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)],
        size: Math.random() * 60 + 40,
        position: {
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
        rotation: Math.random() * 360,
        duration: Math.random() * 20 + 20,
      })),
    [],
  );

  return (
    <div className="h-full w-full bg-[#0A192F] overflow-hidden pb-10">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {geometricShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute ${
              shape.type === "circle"
                ? "rounded-full border-2 border-cyan-500/10"
                : shape.type === "square"
                  ? "border-2 border-emerald-500/10"
                  : "border-t-2 border-orange-500/10"
            }`}
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.position.x}%`,
              top: `${shape.position.y}%`,
              transform: `rotate(${shape.rotation}deg)`,
              containIntrinsicSize: "auto",
              contain: "strict",
            }}
            animate={{
              rotate: [shape.rotation, shape.rotation + 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col p-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-orange-500 rounded-lg blur opacity-20"
              animate={{
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <h1 className="relative text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400">
              Portfolio OS
            </h1>
          </div>
          <p className="text-slate-400 mt-4 text-lg">
            Experience the next generation of digital portfolios
          </p>
        </motion.div>
        <div className="relative mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#0A192F] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#0A192F] to-transparent z-10" />

          <div className="flex overflow-x-auto scrollbar-hide py-2">
            <div className="flex gap-3 px-4 mx-auto">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`                                                                                                
                 relative px-6 py-3 rounded-xl flex items-center gap-2                                                     
                 transition-all duration-300 ease-out                                                                      
                 ${
                   activeTab === tab.id
                     ? "text-white"
                     : "text-slate-400 hover:text-white"
                 }                                                                    
               `}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-orange-500/20 rounded-xl backdrop-blur-sm border border-white/10"
                      initial={false}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative">{tab.icon}</span>
                  <span className="relative font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="h-full"
            >
              <div className="relative p-8 inset-0 bg-gradient-to-br from-cyan-500/5 via-emerald-500/5 to-orange-500/5 rounded-2xl backdrop-blur-xl border border-white/10 h-full overflow-y-scroll">
                <div className="relative">
                  {activeTab === "features" && (
                    <div>
                      <h2 className="text-2xl font-bold text-cyan-50 mb-4">
                        App Features
                      </h2>
                      <ul className="list-disc list-inside text-cyan-200">
                        <li>Modern and responsive design</li>
                        <li>High performance and seamless interface</li>
                        <li>Cross-platform compatibility</li>
                        <li>Customisable themes and wallpapers</li>
                      </ul>
                    </div>
                  )}
                  {activeTab === "about" && (
                    <div>
                      <h2 className="text-2xl font-bold text-cyan-50 mb-4">
                        About Portfolio OS
                      </h2>
                      <p className="text-cyan-200 mb-2">
                        Motivation: Born out of a desire to create a digital
                        portfolio that stands out, blending creativity with
                        technical precision.
                      </p>
                      <p className="text-cyan-200 mb-2">
                        Technical Implementation: Built using modern
                        technologies like Next.js, React, and Zustand, ensuring
                        a fluid experience and robust performance.
                      </p>
                      <p className="text-cyan-200">
                        Future Plans: Expanding functionality with user
                        customisation, real-time collaboration, and integrated
                        feedback systems.
                      </p>
                    </div>
                  )}
                  {activeTab === "feedback" && (
                    <div>
                      <div className="flex-row flex text-center items-center mb-4 gap-4 font-bold text-cyan-50">
                        <h2 className="text-2xl font-bold text-cyan-50">
                          Feedback
                        </h2>
                        <h3 className={`text-center ${feedbackMessageColor}`}>
                          {feedbackMessage}
                        </h3>
                      </div>
                      <form
                        id="emailForm"
                        className="space-y-4"
                        onSubmit={handleSubmit}
                      >
                        <input
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          required
                          type="text"
                          name="user_name"
                          placeholder="Your Name"
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-cyan-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        />
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="email"
                          name="user_email"
                          placeholder="Your Email(Optional)"
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-cyan-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        />
                        <textarea
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          required
                          name="message"
                          placeholder="Your Feedback"
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-cyan-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        ></textarea>
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium"
                        >
                          Send Email
                        </button>
                      </form>
                      <div className="mt-4">
                        <a
                          href="https://github.com/shibosoftwaredev/portfolio-os/issues/new"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-200 underline hover:text-white transition-colors"
                        >
                          File an Issue on GitHub
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
