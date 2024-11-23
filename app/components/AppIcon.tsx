"use client";

import { useApplicationStore } from "../applications-metadata/application-store";
import { AVAILABLE_APPLICATION_NAMES } from "../applications-metadata/available-applications";

const AppIcon = ({ title }: { title: AVAILABLE_APPLICATION_NAMES }) => {
  const setApplicationState = useApplicationStore(
    (state) => state[title].setApplicationState,
  );
  const icon = useApplicationStore((state) => state[title].icon);

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-500/20 to-gray-500/ 
 backdrop-blur-md"
        onClick={() => setApplicationState("open")}
      >
        {icon}
      </div>
      <span
        className="text-xs text-white font-medium"
        style={{
          textShadow:
            "-0.5px -0.5px 0 rgba(0,0,0,0.5), 0.5px -0.5px 0 rgba(0,0,0,0.5), -0.5px 0.5px 0 rgba(0,0,0,0.5), 0.5px 0.5px 0 rgba(0,0,0,0.5)",
        }}
      >
        {title}
      </span>
    </div>
  );
};
export default AppIcon;
