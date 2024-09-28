"use client";

import React from "react";
import Draggable from "react-draggable";

const Process = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const nodeRef = React.useRef(null);
  return (
    <Draggable bounds="parent" handle=".frame" nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="absolute w-80 h-96 border border-blue-600 bg-white"
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
