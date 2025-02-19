"use client";

import { useCallback } from "react";
import {
  AVAILABLE_APPLICATION_NAMES,
  AVAILABLE_APPLICATIONS,
} from "../applications-metadata/available-applications";
import { useApplicationStore } from "../applications-metadata/application-store";

export function useChangeApplicationsState() {
  const applications = useApplicationStore((state) => state);

  return useCallback(
    (
      application: AVAILABLE_APPLICATION_NAMES | "",
      newState: "closed" | "open" | "minimized",
    ) => {
      if (application) applications[application].setApplicationState(newState);
      else {
        AVAILABLE_APPLICATIONS.map((application) => {
          if (
            !(
              newState === "minimized" &&
              applications[application].applicationState === "closed"
            )
          ) {
            applications[application].setApplicationState(newState);
          }
        });
      }
    },
    [applications],
  );
}
