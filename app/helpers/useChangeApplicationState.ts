"use client";

import { useCallback } from "react";
import { AVAILABLE_APPLICATION_NAMES } from "../applications-metadata/available-applications";
import { useApplicationStore } from "../applications-metadata/application-store";

export function useChangeApplicationState(
  applicationName: AVAILABLE_APPLICATION_NAMES,
) {
  const setApplicationState = useApplicationStore(
    (state) => state[applicationName].setApplicationState,
  );

  return useCallback(
    (newState: "closed" | "open" | "minimized") => {
      setApplicationState(newState);
    },
    [setApplicationState],
  );
}
