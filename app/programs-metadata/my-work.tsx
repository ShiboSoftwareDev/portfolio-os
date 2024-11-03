import type { StateCreator } from "zustand";
import Process from "../components/Process";
import MyWork from "../programs/MyWork";
import { MdWorkspacePremium } from "react-icons/md";

export interface MyWorkInterface {
  MyWork: {
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
      icon: <MdWorkspacePremium className="h-[80%] w-[80%]" color="black" />,
      lastActive: Date.now(),
      updateLastActive: () => {
        set((state) => ({
          MyWork: { ...state.MyWork, lastActive: Date.now() },
        }));
      },
      programState: "closed",
      setProgramState: (programState) => {
        set((state) => ({ MyWork: { ...state.MyWork, programState } }));
      },
      setTitle: (title: string) => {
        set((state) => ({ MyWork: { ...state.MyWork, title } }));
      },

      process: () => {
        return (
          <Process key={title} title={title}>
            <MyWork />
          </Process>
        );
      },
    },
  };
};
