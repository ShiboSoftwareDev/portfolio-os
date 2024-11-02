"use client";

import React, { useState } from "react";
import { Rnd as Resizable } from "react-rnd";
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
  const programName = title.replace(" ", "") as AVAILABLE_PROGRAM_NAMES;
  const programState = useProgramStore(
    (state) => state[programName].programState,
  );
  const updateLastActive = useProgramStore(
    (state) => state[programName].updateLastActive,
  );
  const changeProgramState = useChangeProgramState(programName);
  const hidden = programState === "minimized" ? { display: "none" } : {};
  const [size, setSize] = useState("fullscreen");
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [positionY, setPositionY] = useState(0);
  const [prevPositionY, setPrevPositionY] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [prevPositionX, setPrevPositionX] = useState(0);
  const fullscreen = size === "fullscreen" ? "h-full w-full" : "";
  return (
    <Resizable
      onMouseDownCapture={updateLastActive}
      dragHandleClassName="frame"
      style={hidden}
      className={`border border-blue-300 z-50 bg-white ${fullscreen}`}
      size={{
        width: size !== "fullscreen" ? width : "100%",
        height: size !== "fullscreen" ? height : "100%",
      }}
      bounds={"parent"}
      position={{ x: positionX, y: positionY }}
      onDragStop={(e, data) => {
        setPositionX(data.x);
        setPositionY(data.y);
      }}
      cancel=".no-drag"
      onResizeStop={(e, direction, ref, delta, position) => {
        setWidth(width + delta.width);
        setPositionX(position.x);
        setPositionY(position.y);
        setHeight(height + delta.height);
      }}
    >
      <div className="frame bg-blue-200 h-8 flex flex-row border-b border-blue-300 items-center justify-between text-black">
        <h1>{title}</h1>
        <div className="flex flex-row h-full">
          <button className="h-full aspect-square border-l border-blue-300 hover:bg-blue-300">
            <p
              className="h-full aspect-square flex items-center justify-center no-drag"
              onMouseDown={() => changeProgramState("minimized")}
            >
              -
            </p>
          </button>
          <button className="h-full aspect-square border-l border-blue-300 hover:bg-blue-300">
            <p
              className="h-full aspect-square flex items-center justify-center no-drag"
              onMouseDown={() => {
                if (size !== "fullscreen") {
                  setPrevPositionX(positionX);
                  setPrevPositionY(positionY);
                  setPositionX(0);
                  setPositionY(0);
                } else {
                  setPositionX(prevPositionX);
                  setPositionY(prevPositionY);
                }
                setSize(size === "fullscreen" ? "" : "fullscreen");
              }}
            >
              =
            </p>
          </button>
          <button className="h-full aspect-square border-l border-red-500 hover:bg-red-500">
            <p
              className="h-full aspect-square flex items-center justify-center no-drag"
              onMouseDown={() => changeProgramState("closed")}
            >
              x
            </p>
          </button>
        </div>
      </div>
      {children}
    </Resizable>
  );
};

export default Process;
