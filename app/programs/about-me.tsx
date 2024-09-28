import type { StateCreator } from "zustand";
import Process from "../components/Process";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useProgramStore } from "./program-store";

export interface AboutMe {
  AboutMe: {
    title: string;
    markdown: string;
    state: "closed" | "open" | "minimized";
    useContent: () => React.ReactNode;
    useProcess: () => React.ReactNode;
    setTitle: (title: string) => void;
  };
}

export const createAboutMeSlice: StateCreator<AboutMe, [], [], AboutMe> = (
  set,
) => ({
  AboutMe: {
    state: "open",
    title: "About Me",
    setTitle: (title: string) => {
      set((state) => ({ AboutMe: { ...state.AboutMe, title } }));
    },

    markdown: `
 - this should have info about me
  
  
  
  A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`,

    useContent: () => {
      const markdown = useProgramStore((state) => state.AboutMe.markdown);
      return (
        <Markdown className="text-slate-600" remarkPlugins={[remarkGfm]}>
          {markdown}
        </Markdown>
      );
    },
    useProcess: () => {
      const title = useProgramStore((state) => state.AboutMe.title);
      const content = useProgramStore((state) => state.AboutMe.useContent);
      return (
        <Process key={title} title={title}>
          {content()}
        </Process>
      );
    },
  },
});
