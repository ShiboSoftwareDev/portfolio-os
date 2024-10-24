import type { StateCreator } from "zustand";
import AboutMe from "../applications/AboutMe";
import BackgroundApp from "../components/BackgroundApp";

export interface AboutMeInterface {
  AboutMe: {
    title: string;
    applicationState: "closed" | "open" | "minimized";
    setApplicationState: (
      programState: "closed" | "open" | "minimized",
    ) => void;
    setTitle: (title: string) => void;
    application: () => React.ReactNode;
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
      applicationState: "closed",
      setApplicationState: (applicationState) => {
        set((state) => ({ AboutMe: { ...state.AboutMe, applicationState } }));
      },
      setTitle: (title: string) => {
        set((state) => ({ AboutMe: { ...state.AboutMe, title } }));
      },

      application: () => {
        return (
          <BackgroundApp key={title} title={title}>
            <AboutMe />
          </BackgroundApp>
        );
      },
    },
  };
};
