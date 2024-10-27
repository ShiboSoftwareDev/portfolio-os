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
    <>
      <Markdown className="text-slate-600" remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    </>
  );
};

export default AboutMe;
