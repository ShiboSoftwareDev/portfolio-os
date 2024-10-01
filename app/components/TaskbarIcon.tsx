"use client";

import { useChangeProgramState } from "../helpers/useChangeProgramState";
import type { AVAILABLE_PROGRAM_NAMES } from "../programs-metadata/available-programs";
import { useProgramStore } from "../programs-metadata/program-store";

const TaskbarIcon = ({
  programName,
}: {
  programName: AVAILABLE_PROGRAM_NAMES;
}) => {
  const changeProgramState = useChangeProgramState();
  const programState = useProgramStore(
    (state) => state[programName].programState,
  );
  const handleClick = () => {
    changeProgramState({
      programName,
      newState: programState !== "open" ? "open" : "minimized",
    });
  };
  const borderColor =
    programState === "open"
      ? "border-2 border-blue-500"
      : programState === "minimized"
        ? "border-b-2 border-blue-500"
        : "";
  return (
    <div
      onClick={handleClick}
      onKeyDown={() => null}
      className={`bg-white h-[80%] aspect-square text-black text-center box-border ${borderColor} select-none`}
    >
      {programName}
    </div>
  );
};
export default TaskbarIcon;
