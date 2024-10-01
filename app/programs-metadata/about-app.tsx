import type { StateCreator } from "zustand";
import Process from "../components/Process";
import AboutApp from "../programs/AboutApp";

export interface AboutAppInterface {
  AboutApp: {
    title: string;
    programState: "closed" | "open" | "minimized";
    setProgramState: (programState: "closed" | "open" | "minimized") => void;
    setTitle: (title: string) => void;
    process: () => React.ReactNode;
  };
}

export const createAboutAppSlice: StateCreator<
  AboutAppInterface,
  [],
  [],
  AboutAppInterface
> = (set) => {
  const title = "About App" as const;
  return {
    AboutApp: {
      title: title,
      programState: "closed",
      setProgramState: (programState) => {
        set((state) => ({ AboutApp: { ...state.AboutApp, programState } }));
      },
      setTitle: (title: string) => {
        set((state) => ({ AboutApp: { ...state.AboutApp, title } }));
      },

      process: () => {
        return (
          <Process key={title} title={title}>
            <AboutApp />
          </Process>
        );
      },
    },
  };
};
