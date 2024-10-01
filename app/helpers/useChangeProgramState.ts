"use client";

import { useCallback } from "react";
import { useProgramStore } from "../programs-metadata/program-store";
import type { AVAILABLE_PROGRAM_NAMES } from "../programs-metadata/available-programs";

export function useChangeProgramState() {
  const state = useProgramStore((state) => state);

  return useCallback(
    ({
      programName,
      newState,
    }: {
      programName: AVAILABLE_PROGRAM_NAMES;
      newState: "closed" | "open" | "minimized";
    }) => {
      state[programName].setProgramState(newState);
    },
    [state],
  );
}
