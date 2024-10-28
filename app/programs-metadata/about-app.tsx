import type { StateCreator } from "zustand";
import Process from "../components/Process";
import AboutApp from "../programs/AboutApp";
import { IoMdInformationCircleOutline } from "react-icons/io";

export interface AboutAppInterface {
  AboutApp: {
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
      icon: (
        <IoMdInformationCircleOutline
          className="h-[80%] w-[80%]"
          color="black"
        />
      ),
      lastActive: Date.now(),
        updateLastActive: ()=>{
        set((state) => ({AboutApp: {...state.AboutApp, lastActive:Date.now()}}))
        },
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
