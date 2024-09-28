"use client";

import { useAboutAppStore } from "../programs/about-app";
import { useAboutMeStore } from "../programs/about-me";
import AVAILABLE_PROGRAMS from "../programs/available-programs";

const useProgramManager = () => {
  const programState = {
    AboutApp: useAboutAppStore((state) => state),
    AboutMe: useAboutMeStore((state) => state),
  };
  return AVAILABLE_PROGRAMS.map((program) =>
    programState[program].state !== "closed"
      ? programState[program].useProcess()
      : null,
  );
};

export default useProgramManager;
