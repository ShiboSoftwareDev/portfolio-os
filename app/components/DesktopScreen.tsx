"use client";

import React from "react";
import { useAboutAppStore } from "../programs/about-app";
import { useAboutMeStore } from "../programs/about-me";

const DesktopScreen = () => {
  const AboutApp = useAboutAppStore((state) => state.useProcess);
  const AboutMe = useAboutMeStore((state) => state.useProcess);
  // const setTitle = useBoundStore(state=>state.setTitle)

  return (
    <section className="absolute w-full h-full top-0 left-0">
      {AboutMe()}
      {AboutApp()}
    </section>
  );
};

export default DesktopScreen;
