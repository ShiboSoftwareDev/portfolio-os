import { create } from "zustand";
import { type AboutMeInterface, createAboutMeSlice } from "./about-me";
import { type AboutAppInterface, createAboutAppSlice } from "./about-app";

export const useProgramStore = create<AboutMeInterface & AboutAppInterface>()(
  (...a) => ({
    ...createAboutMeSlice(...a),
    ...createAboutAppSlice(...a),
  }),
);
