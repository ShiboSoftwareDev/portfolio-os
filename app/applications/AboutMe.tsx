import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AboutMe = () => {
  const markdown = `
# Hey there! I'm **Shibo** 🚀

### 🔥 A few things about me:
- 🌍 **Open-Source Advocate**: Actively contributing to projects that make the dev world a better place, one pull request at a time.
- 🧠 **Continuous Learner**: Whether it's the latest framework or a new design pattern, I’m always sharpening my skills and staying on the cutting edge of technology.
- 🛠️ **Favorite Stack**: TypeScript, Node.js, React, GraphQL, Docker—just to name a few!
- 🤝 **Collaborator**: I believe the best ideas come from working together, and I enjoy bouncing ideas off other passionate developers.

---

Feel free to check out my projects, or drop me a message—let's build something amazing together!

[![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ShiboSoftwareDev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/)
[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/)
`;
  return (
    <Markdown
      className="text-slate-600 h-full w-full"
      remarkPlugins={[remarkGfm]}
    >
      {markdown}
    </Markdown>
  );
};

export default AboutMe;
