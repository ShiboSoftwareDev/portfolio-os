import { create } from "zustand";
import { type AboutMeInterface, createAboutMeSlice } from "./about-me";
import { type AboutAppInterface, createAboutAppSlice } from "./about-app";

export const useApplicationStore = create<
  AboutMeInterface & AboutAppInterface
>()((...a) => ({
  ...createAboutMeSlice(...a),
  ...createAboutAppSlice(...a),
}));
