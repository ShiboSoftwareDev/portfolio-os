import type { StateCreator } from "zustand";
import Process from "../components/Process";
import AboutMe from "../programs/AboutMe";
import { CgProfile } from "react-icons/cg";

export interface AboutMeInterface {
  AboutMe: {
    title: string;
    icon: React.ReactNode;
    lastActive: number;
    updateLastActive: () => void;
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
  const title = "About Me" as const;
  return {
    AboutMe: {
      title: title,
      icon: <CgProfile className="h-[80%] w-[80%]" color="black" />,
      lastActive: Date.now(),
      updateLastActive: () => {
        set((state) => ({
          AboutMe: { ...state.AboutMe, lastActive: Date.now() },
        }));
      },
      programState: "closed",
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
