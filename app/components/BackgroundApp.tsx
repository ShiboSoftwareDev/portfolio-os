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
  const open = applicationState !== "closed" ? true : false;
  return open ? (
    <div
      className={`absolute h-full w-full border border-blue-600 z-10 bg-white`}
    >
      {children}
    </div>
  ) : null;
};

export default BackgroundApp;
