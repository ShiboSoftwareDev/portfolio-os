"use client";

import React, { useState } from "react";
import Draggable from "react-draggable";
import { useProgramStore } from "../programs-metadata/program-store";
import type { AVAILABLE_PROGRAM_NAMES } from "../programs-metadata/available-programs";
import { useChangeProgramState } from "../helpers/useChangeProgramState";

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
  const [previousX, setPreviousX] = useState(50);
  const [previousY, setPreviousY] = useState(50);
  const changeProgramState = useChangeProgramState(programName);
  const hidden = programState === "minimized" ? "hidden" : "";
  const [size, setSize] = useState("");
  return (
    <Draggable
      onStop={(e, data) => {
        if (size === "fullscreen") return;
        setPreviousX(data.lastX);
        setPreviousY(data.lastY);
      }}
      defaultPosition={{ x: 50, y: 50 }}
      bounds="parent"
      position={
        size === "fullscreen" ? { x: 0, y: 0 } : { x: previousX, y: previousY }
      }
      handle=".frame"
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={`absolute z-50 ${size === "fullscreen" ? "w-full h-full top-0 left-0" : "w-[300px] h-[600px]"} ${hidden} border border-blue-600 bg-white`}
      >
        <div className="frame flex flex-row w-full items-center justify-between text-black">
          <h1>{title}</h1>
          <div className="flex flex-row gap-2 px-2">
            <p onMouseDown={() => changeProgramState("minimized")}>-</p>
            <p
              onMouseDown={() =>
                setSize(size === "fullscreen" ? "" : "fullscreen")
              }
            >
              =
            </p>
            <p onMouseDown={() => changeProgramState("closed")}>x</p>
          </div>
        </div>
        {children}
      </div>
    </Draggable>
  );
};

export default Process;
