"use client";

import {
  AVAILABLE_PROGRAM_NAMES,
  AVAILABLE_PROGRAMS,
} from "../programs-metadata/available-programs";
import { useProgramStore } from "../programs-metadata/program-store";

const useProgramManager = () => {
  const programState = useProgramStore((state) => state);
  const sortFn = (a: AVAILABLE_PROGRAM_NAMES, b: AVAILABLE_PROGRAM_NAMES) =>
    programState[a].lastActive > programState[b].lastActive ? 1 : -1;
  const sortedPrograms = AVAILABLE_PROGRAMS.toSorted(sortFn);

  return sortedPrograms.map((program) =>
    programState[program].programState !== "closed"
      ? programState[program].process()
      : null,
  );
};

export default useProgramManager;
