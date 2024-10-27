"use client";

import { useApplicationStore } from "../applications-metadata/application-store";
import { AVAILABLE_APPLICATION_NAMES } from "../applications-metadata/available-applications";

const AppIcon = ({ title }: { title: AVAILABLE_APPLICATION_NAMES }) => {
  const setApplicationState = useApplicationStore(
    (state) => state[title].setApplicationState,
  );
  const icon = useApplicationStore((state) => state[title].icon);

  return (
    <div
      className="h-full w-full flex rounded-[50px] bg-white items-center justify-center"
      onClick={() => setApplicationState("open")}
    >
      {icon}
    </div>
  );
};
export default AppIcon;
