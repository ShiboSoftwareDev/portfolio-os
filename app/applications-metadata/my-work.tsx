import type { StateCreator } from "zustand";
import MyWork from "../applications/MyWork";
import BackgroundApp from "../components/BackgroundApp";
import { MdWorkspacePremium } from "react-icons/md";

export interface MyWorkInterface {
  MyWork: {
    title: string;
    icon: React.ReactNode;
    applicationState: "closed" | "open" | "minimized";
    setApplicationState: (
      programState: "closed" | "open" | "minimized",
    ) => void;
    setTitle: (title: string) => void;
    application: () => React.ReactNode;
  };
}

export const createMyWorkSlice: StateCreator<
  MyWorkInterface,
  [],
  [],
  MyWorkInterface
> = (set) => {
  const title = "My Work" as const;
  return {
    MyWork: {
      title: title,
      icon: <MdWorkspacePremium className="h-[60%] w-[60%]" color="black" />,
      lastActive: Date.now(),
      applicationState: "closed",
      setApplicationState: (applicationState) => {
        set((state) => ({ MyWork: { ...state.MyWork, applicationState } }));
      },
      setTitle: (title: string) => {
        set((state) => ({ MyWork: { ...state.MyWork, title } }));
      },

      application: () => {
        return (
          <BackgroundApp key={title} title={title}>
            <MyWork />
          </BackgroundApp>
        );
      },
    },
  };
};
