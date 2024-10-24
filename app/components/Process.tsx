"use client";

import React, { useState } from "react";
import Draggable from "react-draggable";
import { useProgramStore } from "../programs-metadata/program-store";
import type { AVAILABLE_PROGRAM_NAMES } from "../programs-metadata/available-programs";
import { useChangeProgramState } from "../helpers/useChangeProgramState";
import { Resizable } from "re-resizable";

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
  const [previousX, setPreviousX] = useState(0);
  const [previousY, setPreviousY] = useState(0);
  const changeProgramState = useChangeProgramState(programName);
  const hidden = programState === "minimized" ? "hidden" : "";
  const [size, setSize] = useState("fullscreen");
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const fullscreen = size === "fullscreen" ? "h-full w-full" : "";
  return (
    <Draggable
      key={title}
      defaultClassName="absolute"
      onStop={(e, data) => {
        if (size === "fullscreen") return;
        setPreviousX(data.lastX);
        setPreviousY(data.lastY);
      }}
      bounds="parent"
      position={
        size === "fullscreen" ? { x: 0, y: 0 } : { x: previousX, y: previousY }
      }
      handle=".frame"
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className={fullscreen + " " + hidden}>
        <Resizable
          className={`border w-full h-full border-blue-600 z-50 bg-white`}
          size={{
            width: size !== "fullscreen" ? width : "100%",
            height: size !== "fullscreen" ? height : "100%",
          }}
          onResizeStop={(e, direction, ref, d) => {
            setWidth(width + d.width);
            setHeight(height + d.height);
          }}
        >
          <div className="frame flex flex-row items-center justify-between text-black">
            <h1>{title}</h1>
            <div className="flex flex-row gap-2 px-2">
              <p onMouseDown={() => changeProgramState("minimized")}>-</p>
              <p
                onMouseDown={() => {
                  setSize(size === "fullscreen" ? "" : "fullscreen");
                }}
              >
                =
              </p>
              <p onMouseDown={() => changeProgramState("closed")}>x</p>
            </div>
          </div>
          {children}
        </Resizable>
      </div>
    </Draggable>
  );
};

export default Process;
