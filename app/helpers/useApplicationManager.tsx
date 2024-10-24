"use client";

import { useApplicationStore } from "../applications-metadata/application-store";
import { AVAILABLE_APPLICATIONS } from "../applications-metadata/available-applications";

const useProgramManager = () => {
  const programState = useApplicationStore((state) => state);
  return AVAILABLE_APPLICATIONS.map((program) =>
    programState[program].applicationState !== "closed"
      ? programState[program].application()
      : null,
  );
};

export default useProgramManager;
