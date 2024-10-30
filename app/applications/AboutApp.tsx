import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AboutApp = () => {
  const [text, setText] = useState("");
  const markdown = `# 🌐 Welcome to **Portfolio OS** 🌐

**_Alpha Version_**

---

### ✨ Key Features

---

#### 🖥️ Desktop-like UI  
> Enjoy a responsive, OS-like interface with windows, taskbars, and customizable icons—all running in the browser.

#### ⚡ No Install Required  
> Everything runs directly in your browser; no need for downloads or installations.

#### 📂 Mock Applications  
> Explore basic apps like a file manager, text editor, and settings panel to simulate OS functionality.

#### 🎨 Personalized Workspace  
> Customize your desktop environment with themes, backgrounds, and layout options.

---

### Links

[**GitHub**](https://github.com/) • [**Submit Feedback**](https://github.com/)

---`;

  return (
    <div className="flex flex-col items-center w-full h-full bg-white border rounded-lg shadow-lg overflow-hidden">
      {/* Status Bar */}
      <div className="flex justify-between items-center h-[3.5%] w-full px-4 py-1 bg-slate-200 text-slate-600 text-sm"></div>

      {/* App Header */}
      <div className="w-full bg-slate-800 text-white text-lg font-semibold py-2 text-center">
        About App
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
        <div className="w-full flex flex-row">
          <label htmlFor="message" className="text-black mr-2">
            Leave a message:{" "}
          </label>
          <input
            id="message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="text-black border-blue-500 border"
            placeholder="placeholder"
          ></input>
        </div>
      </div>

      {/* Bottom Navigation (Optional) */}
      <div className="flex justify-around items-center w-full h-12 bg-slate-200 text-slate-600 text-xl"></div>
    </div>
  );
};

export default AboutApp;
