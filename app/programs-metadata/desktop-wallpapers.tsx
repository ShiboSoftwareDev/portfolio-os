import type { StateCreator } from "zustand";
import Process from "../components/Process";
import DesktopWallpapers from "../programs/DesktopWallpapers";
import { LuWallpaper } from "react-icons/lu";

export interface DesktopWallpapersInterface {
  DesktopWallpapers: {
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

export const createDesktopWallpapersSlice: StateCreator<
  DesktopWallpapersInterface,
  [],
  [],
  DesktopWallpapersInterface
> = (set) => {
  const title = "Desktop Wallpapers" as const;
  return {
    DesktopWallpapers: {
      title: title,
      icon: <LuWallpaper className="h-[80%] w-[80%]" color="black" />,
      lastActive: Date.now(),
      updateLastActive: () => {
        set((state) => ({
          DesktopWallpapers: {
            ...state.DesktopWallpapers,
            lastActive: Date.now(),
          },
        }));
      },
      programState: "closed",
      setProgramState: (programState) => {
        set((state) => ({
          DesktopWallpapers: { ...state.DesktopWallpapers, programState },
        }));
      },
      setTitle: (title: string) => {
        set((state) => ({
          DesktopWallpapers: { ...state.DesktopWallpapers, title },
        }));
      },

      process: () => {
        return (
          <Process key={title} title={title}>
            <DesktopWallpapers />
          </Process>
        );
      },
    },
  };
};
