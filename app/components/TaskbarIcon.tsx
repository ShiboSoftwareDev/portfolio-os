"use client";

import { useChangeProgramState } from "../helpers/useChangeProgramState";
import type { AVAILABLE_PROGRAM_NAMES } from "../programs-metadata/available-programs";
import { useProgramStore } from "../programs-metadata/program-store";

const TaskbarIcon = ({
  programName,
}: {
  programName: AVAILABLE_PROGRAM_NAMES;
}) => {
  const changeProgramState = useChangeProgramState(programName);
  const programState = useProgramStore(
    (state) => state[programName].programState,
  );
  const handleClick = () => {
    changeProgramState(programState !== "open" ? "open" : "minimized");
  };
  const borderColor =
    programState === "open"
      ? "border-blue-500 bg-blue-500"
      : programState === "minimized"
        ? "border-blue-500 bg-white"
        : "border-white bg-white";
  return (
    <div
      onClick={handleClick}
      onKeyDown={() => null}
      className={`h-[80%] aspect-square text-black text-center box-border border-2 ${borderColor} select-none`}
    >
      {programName}
    </div>
  );
};
export default TaskbarIcon;
