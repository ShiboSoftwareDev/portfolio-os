import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AboutApp = () => {
  const markdown = `
# Welcome to **Portfolio OS** 🌐

### 🛠️ Current Status: Alpha

### ✨ Key Features:
- 🖥️ **Desktop-like UI**: Enjoy a responsive, OS-like interface with windows, taskbars, and customizable icons—all running in the browser.
- ⚡ **No Install Required**: Everything runs directly in your browser; no need for downloads or installations.
- 📂 **Mock Applications**: Explore basic apps like a file manager, text editor, and settings panel to simulate OS functionality.
- 🎨 **Personalized Workspace**: Customize your desktop environment with themes, backgrounds, and layout options.

---

[GitHub](https://github.com/) | [Submit Feedback](https://github.com/)
`;

  return (
    <Markdown
      className="text-slate-600 w-full h-full"
      remarkPlugins={[remarkGfm]}
    >
      {markdown}
    </Markdown>
  );
};

export default AboutApp;
