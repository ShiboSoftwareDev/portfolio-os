import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AboutApp = () => {
  const markdown = `
 - this should have info about the app 
  
  
  
  A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

  return (
    <>
      <Markdown className="text-slate-600" remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    </>
  );
};

export default AboutApp;
