import { create } from "zustand";
import { type AboutMeInterface, createAboutMeSlice } from "./about-me";
import { type AboutAppInterface, createAboutAppSlice } from "./about-app";
import { createWallpapersSlice, WallpapersInterface } from "./wallpapers";

export const useProgramStore = create<
  AboutMeInterface & AboutAppInterface & WallpapersInterface
>()((...a) => ({
  ...createAboutMeSlice(...a),
  ...createAboutAppSlice(...a),
  ...createWallpapersSlice(...a),
}));
