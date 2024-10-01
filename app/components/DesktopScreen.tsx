"use client";

import type React from "react";
import useProgramManager from "../helpers/useProgramManager";

const DesktopScreen = () => {
  const programs = useProgramManager();

  return (
    <section className="absolute -z-40 w-full h-full top-0 left-0">
      {programs}
    </section>
  );
};

export default DesktopScreen;
