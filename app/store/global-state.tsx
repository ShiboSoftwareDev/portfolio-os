import Image from "next/image";
import { create } from "zustand";
import backgroundImage1 from "../assets/desktop-background-1.jpg";

interface GlobalState {
  background: React.ReactNode;
  changeBackground: (newBackground: React.ReactNode) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  background: (
    <Image
      className="h-full w-full"
      alt="desktop-background-image"
      src={backgroundImage1}
    />
  ),
  changeBackground: (newBackground) =>
    set(() => ({ background: newBackground })),
}));
