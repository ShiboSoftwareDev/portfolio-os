import { create } from "zustand";

interface GlobalState {
  desktopWallpaperId: number;
  mobileWallpaperId: number;
  changeDesktopWallpaperId: (newDesktopWallpaperId: number) => void;
  changeMobileWallpaperId: (newMobileWallpaperId: number) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  desktopWallpaperId: 0,
  mobileWallpaperId: 0,
  changeDesktopWallpaperId: (newDesktopWallpaperId) => {
    localStorage.setItem("Desktop Wallpaper", newDesktopWallpaperId.toString());
    return set(() => ({ desktopWallpaperId: newDesktopWallpaperId }));
  },
  changeMobileWallpaperId: (newMobileWallpaperId) => {
    localStorage.setItem("Mobile Wallpaper", newMobileWallpaperId.toString());
    return set(() => ({ mobileWallpaperId: newMobileWallpaperId }));
  },
}));
