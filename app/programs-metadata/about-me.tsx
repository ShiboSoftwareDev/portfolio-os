import type { StateCreator } from "zustand";
import Process from "../components/Process";
import AboutMe from "../programs/AboutMe";

export interface AboutMeInterface {
  AboutMe: {
    title: string;
    programState: "closed" | "open" | "minimized";
    setProgramState: (programState: "closed" | "open" | "minimized") => void;
    setTitle: (title: string) => void;
    process: () => React.ReactNode;
  };
}

export const createAboutMeSlice: StateCreator<
  AboutMeInterface,
  [],
  [],
  AboutMeInterface
> = (set) => {
  const title = "About Me";
  return {
    AboutMe: {
      title: title,
      programState: "open",
      setProgramState: (programState) => {
        set((state) => ({ AboutMe: { ...state.AboutMe, programState } }));
      },
      setTitle: (title: string) => {
        set((state) => ({ AboutMe: { ...state.AboutMe, title } }));
      },

      process: () => {
        return (
          <Process key={title} title={title}>
            <AboutMe />
          </Process>
        );
      },
    },
  };
};
