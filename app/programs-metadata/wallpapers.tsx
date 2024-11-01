import type { StateCreator } from "zustand";
import Process from "../components/Process";
import Wallpapers from "../programs/Wallpapers";
import { LuWallpaper } from "react-icons/lu";

export interface WallpapersInterface {
  Wallpapers: {
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

export const createWallpapersSlice: StateCreator<
  WallpapersInterface,
  [],
  [],
  WallpapersInterface
> = (set) => {
  const title = "Wallpapers" as const;
  return {
    Wallpapers: {
      title: title,
      icon: <LuWallpaper className="h-[80%] w-[80%]" color="black" />,
      lastActive: Date.now(),
      updateLastActive: () => {
        set((state) => ({
          Wallpapers: { ...state.Wallpapers, lastActive: Date.now() },
        }));
      },
      programState: "closed",
      setProgramState: (programState) => {
        set((state) => ({ Wallpapers: { ...state.Wallpapers, programState } }));
      },
      setTitle: (title: string) => {
        set((state) => ({ Wallpapers: { ...state.Wallpapers, title } }));
      },

      process: () => {
        return (
          <Process key={title} title={title}>
            <Wallpapers />
          </Process>
        );
      },
    },
  };
};
