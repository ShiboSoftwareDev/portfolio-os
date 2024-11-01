"use client";

import Image from "next/image";
import React from "react";
import backgroundImage4 from "../assets/desktop-background-4.jpg";
import { useGlobalStore } from "../store/global-state";

const DesktopBackground = () => {
  const background = useGlobalStore((state) => state.background);
  console.log(background);
  return (
    <section className="absolute -z-50 top-0 left-0 w-full h-full">
      {background || (
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
