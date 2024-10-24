"use client";

import { useApplicationStore } from "../applications-metadata/application-store";
import { AVAILABLE_APPLICATION_NAMES } from "../applications-metadata/available-applications";

const AppIcon = ({ title }: { title: AVAILABLE_APPLICATION_NAMES }) => {
  const setApplicationState = useApplicationStore(
    (state) => state[title].setApplicationState,
  );

  return (
    <div
      className="h-full w-full bg-slate-600 flex items-center justify-center"
      onClick={() => setApplicationState("open")}
    >
      {title}
    </div>
  );
};
export default AppIcon;
