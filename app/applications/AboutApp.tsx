import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as emailjs from "@emailjs/browser";
import PixiScene from "../components/PixiScene";
import SeperatedList from "../components/SeperatedList";

const features = [
  "- Open source",
  "- Desktop + Mobile versions",
  "- Customisable themes and wallpapers",
  "- Can add any kind of application as a React component",
  "- Simple architecture",
];

const about = [
  "Motivation: Born out of a desire to create a digital portfolio that stands out, blending creativity with technical precision.",
  "Technical Implementation: Built using modern technologies like Next.js, React, and Zustand, ensuring a fluid experience and robust performance.",
  "Future Plans: Expanding functionality with user customisation, real-time collaboration, and integrated feedback systems.",
  "Attributions: butterfly image from freepik@flaticon, dragonfly image from logisstudio@flaticon",
];

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
    { id: "features", label: "Features" },
    { id: "about", label: "About" },
    { id: "feedback", label: "Feedback" },
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
      Array.from({ length: 15 }, (_, i) => {
        const type = ["circle", "square", "triangle"][
          Math.floor(Math.random() * 3)
        ];
        const size = Math.random() * 60 + 40;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const rotation = Math.random() * 360;
        const duration = Math.random() * 20 + 20;
        return {
          id: `aboutapp-${i}${type}${size}${x}${y}${rotation}${duration}`,
          type,
          size,
          position: {
            x,
            y,
          },
          rotation,
          duration,
        };
      }),
    [],
  );

  return (
    <div className="h-full w-full bg-[#0A192F] overflow-hidden pb-10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
            A portfolio made with passion
          </p>
        </motion.div>
        <div className="relative mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#0A192F] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#0A192F] to-transparent z-10" />

          <div className="flex py-2">
            <div className="flex gap-2 mx-auto">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`                                                                                                
                 relative px-4 py-2 rounded-xl flex items-center gap-2                                                     
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
                  <span className="relative font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-scroll">
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
              <div className="relative inset-0 bg-gradient-to-br from-cyan-500/5 via-emerald-500/5 to-orange-500/5 rounded-2xl backdrop-blur-xl border border-white/10 mb-12">
                <div className="relative">
                  {activeTab === "features" &&
                    (
                      <div>
                        <div className="w-full h-full overflow-hidden absolute top-0 left-0">
                          <PixiScene
                            size="mobile"
                            particleImage="images/butterfly.png"
                          />
                        </div>
                        <div className="p-4 w-full">
                          <SeperatedList items={features} />
                        </div>
                      </div>
                    )}
                  {activeTab === "about" && (
                    <div>
                      <div className="w-full h-full overflow-hidden absolute top-0 left-0">
                        <PixiScene
                          size="mobile"
                          particleImage="images/dragonfly.png"
                        />
                      </div>
                      <div className="p-4 w-full overflow-y-scroll">
                        <SeperatedList items={about} />
                      </div>
                    </div>
                  )}
                  {activeTab === "feedback" && (
                    <div className="p-4">
                      <div className="flex-row flex text-center items-center mb-4 gap-4 font-bold text-cyan-50">
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
                        >
                        </textarea>
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
