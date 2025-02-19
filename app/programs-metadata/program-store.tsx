import { create } from "zustand";
import { type AboutMeInterface, createAboutMeSlice } from "./about-me";
import { type AboutAppInterface, createAboutAppSlice } from "./about-app";
import {
  createDesktopWallpapersSlice,
  DesktopWallpapersInterface,
} from "./desktop-wallpapers";
import { createMyWorkSlice, MyWorkInterface } from "./my-work";

export const useProgramStore = create<
  & AboutMeInterface
  & AboutAppInterface
  & DesktopWallpapersInterface
  & MyWorkInterface
>()((...a) => ({
  ...createAboutMeSlice(...a),
  ...createAboutAppSlice(...a),
  ...createDesktopWallpapersSlice(...a),
  ...createMyWorkSlice(...a),
}));
