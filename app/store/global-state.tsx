import { create } from "zustand";

interface GlobalState {
  wallpaperId: number;
  changeWallpaperId: (newWallpaperId: number) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  wallpaperId: 0,
  changeWallpaperId: (newWallpaperId) =>
    set(() => ({ wallpaperId: newWallpaperId })),
}));
