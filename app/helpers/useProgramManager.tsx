"use client";

import { AVAILABLE_PROGRAMS } from "../programs-metadata/available-programs";
import { useProgramStore } from "../programs-metadata/program-store";

const useProgramManager = () => {
  const programState = useProgramStore((state) => state);
  return AVAILABLE_PROGRAMS.map((program) =>
    programState[program].programState !== "closed"
      ? programState[program].process()
      : null,
  );
};

export default useProgramManager;
