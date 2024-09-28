import { create } from "zustand";
import { AboutApp, createAboutAppSlice } from "./about-app";
import { createAboutMeSlice, AboutMe } from "./about-me";

export const useBoundStore = create<AboutApp & AboutMe>()((...a) => ({
  ...createAboutAppSlice(...a),
  ...createAboutMeSlice(...a),
}));
