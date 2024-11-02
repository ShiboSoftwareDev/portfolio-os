import { create } from "zustand";
import { type AboutMeInterface, createAboutMeSlice } from "./about-me";
import { type AboutAppInterface, createAboutAppSlice } from "./about-app";
import {
  createMobileWallpapersSlice,
  MobileWallpapersInterface,
} from "./mobile-wallpapers";

export const useApplicationStore = create<
  AboutMeInterface & AboutAppInterface & MobileWallpapersInterface
>()((...a) => ({
  ...createAboutMeSlice(...a),
  ...createAboutAppSlice(...a),
  ...createMobileWallpapersSlice(...a),
}));
