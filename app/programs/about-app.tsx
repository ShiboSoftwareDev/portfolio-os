import { create, type StateCreator } from "zustand";
import Process from "../components/Process";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface AboutApp {
  title: string;
  markdown: string;
  state: "closed" | "open" | "minimized";
  useContent: () => React.ReactNode;
  useProcess: () => React.ReactNode;
  setTitle: (title: string) => void;
}

export const createAboutAppSlice: StateCreator<AboutApp, [], [], AboutApp> = (
  set,
) => ({
  state: "open",
  title: "About App",
  setTitle: (title: string) => {
    set({ title: title });
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
    const markdown = useAboutAppStore((state) => state.markdown);
    return (
      <Markdown className="text-slate-600" remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    );
  },
  useProcess: () => {
    const title = useAboutAppStore((state) => state.title);
    const content = useAboutAppStore((state) => state.useContent);
    return (
      <Process key={title} title={title}>
        {content()}
      </Process>
    );
  },
});

export const useAboutAppStore = create<AboutApp>()((...a) => ({
  ...createAboutAppSlice(...a),
}));
