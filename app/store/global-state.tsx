import { create } from "zustand";

interface GlobalState {
  desktopWallpaperId: number;
  changeDesktopWallpaperId: (newWallpaperId: number) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  desktopWallpaperId: 0,
  changeDesktopWallpaperId: (newDesktopWallpaperId) => {
    localStorage.setItem("Desktop Wallpaper", newDesktopWallpaperId.toString());
    return set(() => ({ desktopWallpaperId: newDesktopWallpaperId }));
  },
}));
