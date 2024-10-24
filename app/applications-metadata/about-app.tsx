import type { StateCreator } from "zustand";
import AboutApp from "../applications/AboutApp";
import BackgroundApp from "../components/BackgroundApp";

export interface AboutAppInterface {
  AboutApp: {
    title: string;
    applicationState: "closed" | "open" | "minimized";
    setApplicationState: (
      programState: "closed" | "open" | "minimized",
    ) => void;
    setTitle: (title: string) => void;
    application: () => React.ReactNode;
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
      applicationState: "closed",
      setApplicationState: (applicationState) => {
        set((state) => ({ AboutApp: { ...state.AboutApp, applicationState } }));
      },
      setTitle: (title: string) => {
        set((state) => ({ AboutApp: { ...state.AboutApp, title } }));
      },

      application: () => {
        return (
          <BackgroundApp key={title} title={title}>
            <AboutApp />
          </BackgroundApp>
        );
      },
    },
  };
};
