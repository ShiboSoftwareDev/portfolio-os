"use client";

import React from "react";
import TaskbarIcon from "./TaskbarIcon";
import { AVAILABLE_PROGRAMS } from "../programs-metadata/available-programs";
import Clock from "./Clock";

const DesktopTaskbar = () => {
  // todo taskbar to open and close programs
  return (
    <nav
      className="absolute z-10 w-full h-[5%] bottom-0 left-0 flex items-center justify-center gap-4 bg-black"
      style={{ userSelect: "none" }}
    >
      {AVAILABLE_PROGRAMS.map((programName) => (
        <TaskbarIcon key={programName} programName={programName} />
      ))}
      <div className="right-[1%] absolute">
        <Clock localeProp="en-US" format="hh-mm" hour12Prop />
      </div>
    </nav>
  );
};

export default DesktopTaskbar;
