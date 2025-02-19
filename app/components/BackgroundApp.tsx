import React from "react";
import { useApplicationStore } from "../applications-metadata/application-store";
import { AVAILABLE_APPLICATION_NAMES } from "../applications-metadata/available-applications";

const BackgroundApp = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const applicationName = title.replace(" ", "") as AVAILABLE_APPLICATION_NAMES;
  const applicationState = useApplicationStore(
    (state) => state[applicationName].applicationState,
  );
  const open = applicationState !== "closed" ? true : false;
  return open
    ? <div className={`absolute h-full w-full z-10 bg-white`}>{children}</div>
    : null;
};

export default BackgroundApp;
