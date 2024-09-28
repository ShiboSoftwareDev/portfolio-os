import { create, type StateCreator } from "zustand";
import Process from "../components/Process";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface AboutMe {
  title: string;
  markdown: string;
  state: "closed" | "open" | "minimized";
  useContent: () => React.ReactNode;
  useProcess: () => React.ReactNode;
  setTitle: (title: string) => void;
}

export const createAboutMeSlice: StateCreator<AboutMe, [], [], AboutMe> = (
  set,
) => ({
  state: "open",
  title: "About Me",
  setTitle: (title: string) => {
    set({ title: title });
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
    const markdown = useAboutMeStore((state) => state.markdown);
    return (
      <Markdown className="text-slate-600" remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    );
  },
  useProcess: () => {
    const title = useAboutMeStore((state) => state.title);
    const content = useAboutMeStore((state) => state.useContent);
    return (
      <Process key={title} title={title}>
        {content()}
      </Process>
    );
  },
});

export const useAboutMeStore = create<AboutMe>()((...a) => ({
  ...createAboutMeSlice(...a),
}));
