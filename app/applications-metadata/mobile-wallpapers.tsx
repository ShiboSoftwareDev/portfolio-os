import type { StateCreator } from "zustand";
import MobileWallpapers from "../applications/MobileWallpapers";
import { LuWallpaper } from "react-icons/lu";
import BackgroundApp from "../components/BackgroundApp";

export interface MobileWallpapersInterface {
  MobileWallpapers: {
    title: string;
    icon: React.ReactNode;
    lastActive: number;
    updateLastActive: () => void;
    applicationState: "closed" | "open" | "minimized";
    setApplicationState: (
      applicationState: "closed" | "open" | "minimized",
    ) => void;
    setTitle: (title: string) => void;
    application: () => React.ReactNode;
  };
}

export const createMobileWallpapersSlice: StateCreator<
  MobileWallpapersInterface,
  [],
  [],
  MobileWallpapersInterface
> = (set) => {
  const title = "Mobile Wallpapers" as const;
  return {
    MobileWallpapers: {
      title: title,
      icon: <LuWallpaper className="h-[60%] w-[60%]" color="black" />,
      lastActive: Date.now(),
      updateLastActive: () => {
        set((state) => ({
          MobileWallpapers: {
            ...state.MobileWallpapers,
            lastActive: Date.now(),
          },
        }));
      },
      applicationState: "closed",
      setApplicationState: (applicationState) => {
        set((state) => ({
          MobileWallpapers: { ...state.MobileWallpapers, applicationState },
        }));
      },
      setTitle: (title: string) => {
        set((state) => ({
          MobileWallpapers: { ...state.MobileWallpapers, title },
        }));
      },

      application: () => {
        return (
          <BackgroundApp key={title} title={title}>
            <MobileWallpapers />
          </BackgroundApp>
        );
      },
    },
  };
};
