import React from "react";
import { AVAILABLE_APPLICATION_NAMES } from "../applications-metadata/available-applications";
import BackgroundAppWindow from "./BackgroundAppWindow";

export const AppWindow = (
  {
    backgroundView,
    touchedApps,
    title,
    state,
    children,
    setTouchedApps,
    setBackgroundView,
  }: {
    backgroundView: boolean;
    touchedApps: { [key: string]: boolean };
    title: AVAILABLE_APPLICATION_NAMES;
    state: "open" | "minimized";
    children?: React.ReactNode;
    setTouchedApps: React.Dispatch<
      React.SetStateAction<{
        [key: string]: boolean;
      }>
    >;
    setBackgroundView: (newView: boolean) => void;
  },
) => {
  return (
    <div
      className={`z-20 ${
        backgroundView
          ? "relative h-[70vh] w-[70vw] rounded-2xl overflow-hidden shadow-lg transition-transform"
          : ""
      } ${state === "minimized" && !backgroundView ? "hidden" : ""} ${
        touchedApps[title] ? "scale-95" : ""
      }`}
      key={title}
    >
      <BackgroundAppWindow
        title={title}
        state={state}
        setBackgroundView={setBackgroundView}
        backgroundView={backgroundView}
        setTouchedApp={(state) =>
          setTouchedApps((prev) => ({
            ...prev,
            [title]: state,
          }))}
      />
      {children}
    </div>
  );
};
