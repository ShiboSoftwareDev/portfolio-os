import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AboutMe = () => {
  const markdown = `# Hey there! I'm **Shibo** 🚀

---

### 🔥 A few things about me:

- 🌍 **Open-Source Advocate**  
   Actively contributing to projects that make the dev world a better place, one pull request at a time.

- 🧠 **Continuous Learner**  
   Whether it's the latest framework or a new design pattern, I’m always sharpening my skills and staying on the cutting edge of technology.

- 🛠️ **Favorite Stack**  
   TypeScript, Node.js, React, GraphQL, Docker—just to name a few!

- 🤝 **Collaborator**  
   I believe the best ideas come from working together, and I enjoy bouncing ideas off other passionate developers.

---

Feel free to check out my projects, or drop me a message—let's build something amazing together!

---

### 🌐 Connect with me:
[**GitHub**](https://github.com/ShiboSoftwareDev) • [**LinkedIn**](https://linkedin.com/) • [**Twitter**](https://twitter.com/)`;
  return (
    <div className="flex flex-col items-center w-full h-full bg-white border rounded-lg shadow-lg overflow-hidden">
      {/* Status Bar */}
      <div className="flex justify-between items-center h-[3.5%] w-full px-4 py-1 bg-slate-200 text-slate-600 text-sm"></div>

      {/* App Header */}
      <div className="w-full bg-slate-800 text-white text-lg font-semibold py-2 text-center">
        About Me{" "}
      </div>

      {/* Content Area */}
      <div className="flex-1 w-full p-4 overflow-y-auto bg-slate-100">
        <div className="bg-white p-4 rounded-lg shadow-sm text-slate-600">
          <Markdown
            className="text-slate-600 w-full h-full"
            remarkPlugins={[remarkGfm]}
          >
            {markdown}
          </Markdown>
        </div>
      </div>

      {/* Bottom Navigation (Optional) */}
      <div className="flex justify-around items-center w-full h-12 bg-slate-200 text-slate-600 text-xl"></div>
    </div>
  );
};

export default AboutMe;
