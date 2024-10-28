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
  const open = applicationState !== "closed" ? true : false;
  return open ? (
    <div
      className={`absolute h-screen w-full border border-blue-600 z-10 bg-white`}
    >
      <h2
        className="absolute px-1 right-0 top-0 text-2xl text-red-500"
        onClick={() => changeApplicationState("closed")}
      >
        X
      </h2>
      {children}
    </div>
  ) : null;
};

export default BackgroundApp;
