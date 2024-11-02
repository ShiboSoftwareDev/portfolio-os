"use client";

import Image from "next/image";
import React from "react";
import backgroundImage4 from "../assets/desktop-background-4.jpg";
import { useGlobalStore } from "../store/global-state";
import wallpapers from "../utils/Wallpapers";

const DesktopBackground = () => {
  const wallpaperId = useGlobalStore((state) => state.wallpaperId);
  return (
    <section className="absolute -z-50 top-0 left-0 w-full h-full">
      {typeof wallpaperId === "number" ? (
        wallpapers[wallpaperId]
      ) : (
        <Image
          className="h-full w-full"
          alt="desktop-background-image"
          src={backgroundImage4}
        />
      )}
    </section>
  );
};

export default DesktopBackground;
