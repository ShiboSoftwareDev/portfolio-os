"use client";

import { useCallback } from "react";
import { useProgramStore } from "../programs-metadata/program-store";
import type { AVAILABLE_PROGRAM_NAMES } from "../programs-metadata/available-programs";

export function useChangeProgramState(programName: AVAILABLE_PROGRAM_NAMES) {
  const setProgramState = useProgramStore(
    (state) => state[programName].setProgramState,
  );

  return useCallback(
    (newState: "closed" | "open" | "minimized") => {
      setProgramState(newState);
    },
    [setProgramState],
  );
}
