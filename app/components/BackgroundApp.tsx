"use client";

import React from "react";
import type { AVAILABLE_PROGRAM_NAMES } from "../programs-metadata/available-programs";
import { useApplicationStore } from "../applications-metadata/application-store";
import { useChangeApplicationState } from "../helpers/useChangeApplicationState";

const BackgroundApp = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const applicationName = title.replace(" ", "") as AVAILABLE_PROGRAM_NAMES;
  const applicationState = useApplicationStore(
    (state) => state[applicationName].applicationState,
  );
  const changeApplicationState = useChangeApplicationState(applicationName);
  const hidden = applicationState === "minimized" ? "hidden" : "";
  const open = applicationState === "open" ? true : false;
  return open ? (
    <div
      className={`absolute h-screen w-full border ${hidden} border-blue-600 z-50 bg-white`}
    >
      <h1 className="text-black">{title}</h1>
      <h2
        className="text-red-500"
        onClick={() => changeApplicationState("closed")}
      >
        close
      </h2>
      {children}
    </div>
  ) : null;
};

export default BackgroundApp;
