"use client";

import AVAILABLE_PROGRAMS from "../programs/available-programs";
import { useProgramStore } from "../programs/program-store";

const useProgramManager = () => {
  const programState = useProgramStore((state) => state);
  return AVAILABLE_PROGRAMS.map((program) =>
    programState[program].state !== "closed"
      ? programState[program].useProcess()
      : null,
  );
};

export default useProgramManager;
