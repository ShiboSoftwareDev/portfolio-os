"use client";

import { useApplicationStore } from "../applications-metadata/application-store";
import { AVAILABLE_APPLICATIONS } from "../applications-metadata/available-applications";

const useApplicationManager = () => {
  const applicationState = useApplicationStore((state) => state);
  return AVAILABLE_APPLICATIONS.map((program) =>
    applicationState[program].applicationState !== "closed"
      ? {
          application: applicationState[program].application(),
          state: applicationState[program].applicationState,
          title: program,
        }
      : null,
  );
};

export default useApplicationManager;
