import type { StateCreator } from "zustand";
import Process from "../components/Process";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useProgramStore } from "./program-store";

export interface AboutApp {
  AboutApp: {
    title: string;
    markdown: string;
    state: "closed" | "open" | "minimized";
    useContent: () => React.ReactNode;
    useProcess: () => React.ReactNode;
    setTitle: (title: string) => void;
  };
}

export const createAboutAppSlice: StateCreator<AboutApp, [], [], AboutApp> = (
  set,
) => ({
  AboutApp: {
    state: "open",
    title: "About App",
    setTitle: (title: string) => {
      set((state) => ({ AboutApp: { ...state.AboutApp, title } }));
    },

    markdown: `
 - this should have info about the app 
  
  
  
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
      const markdown = useProgramStore((state) => state.AboutApp.markdown);
      return (
        <Markdown className="text-slate-600" remarkPlugins={[remarkGfm]}>
          {markdown}
        </Markdown>
      );
    },
    useProcess: () => {
      const title = useProgramStore((state) => state.AboutApp.title);
      const content = useProgramStore((state) => state.AboutApp.useContent);
      return (
        <Process key={title} title={title}>
          {content()}
        </Process>
      );
    },
  },
});
