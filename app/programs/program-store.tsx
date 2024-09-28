import { create } from "zustand";
import { type AboutMe, createAboutMeSlice } from "./about-me";
import { type AboutApp, createAboutAppSlice } from "./about-app";

export const useProgramStore = create<AboutMe & AboutApp>()((...a) => ({
  ...createAboutMeSlice(...a),
  ...createAboutAppSlice(...a),
}));
