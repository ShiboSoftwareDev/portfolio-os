"use client";

import React from "react";
import Draggable from "react-draggable";
import { useProgramStore } from "../programs-metadata/program-store";
import type { AVAILABLE_PROGRAM_NAMES } from "../programs-metadata/available-programs";

const Process = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const nodeRef = React.useRef(null);
  const programName = title.replace(" ", "") as AVAILABLE_PROGRAM_NAMES;
  const programState = useProgramStore(
    (state) => state[programName].programState,
  );
  const hidden = programState === "minimized" ? "opacity-0" : "";
  return (
    <Draggable bounds="parent" handle=".frame" nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className={`absolute w-80 h-96 ${hidden} border border-blue-600 bg-white`}
      >
        <div className="frame flex flex-row w-full items-center justify-between text-black">
          <h1>{title}</h1>
          <div className="flex flex-row gap-2 px-2">
            <p>-</p>
            <p>=</p>
            <p>x</p>
          </div>
        </div>
        {children}
      </div>
    </Draggable>
  );
};

export default Process;
