import { create } from "zustand";
import { type AboutMeInterface, createAboutMeSlice } from "./about-me";
import { type AboutAppInterface, createAboutAppSlice } from "./about-app";
import {
  createMobileWallpapersSlice,
  MobileWallpapersInterface,
} from "./mobile-wallpapers";
import { createMyWorkSlice, MyWorkInterface } from "./my-work";

export const useApplicationStore = create<
  AboutMeInterface &
    AboutAppInterface &
    MobileWallpapersInterface &
    MyWorkInterface
>()((...a) => ({
  ...createAboutMeSlice(...a),
  ...createAboutAppSlice(...a),
  ...createMobileWallpapersSlice(...a),
  ...createMyWorkSlice(...a),
}));
