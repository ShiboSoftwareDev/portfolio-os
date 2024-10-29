"use client";

import { TouchEvent, useState } from "react";
import { AVAILABLE_APPLICATION_NAMES } from "../applications-metadata/available-applications";
import { useChangeApplicationsState } from "../helpers/useChangeApplicationsState";

const BackgroundAppsView = ({
  applications,
  setBackgroundView,
}: {
  applications: ({
    title: AVAILABLE_APPLICATION_NAMES;
    state: "closed" | "minimized" | "open";
    application: React.ReactNode;
  } | null)[];
  setBackgroundView: (state: boolean) => void;
}) => {
  const changeApplicationState = useChangeApplicationsState();
  const [touchStartPosition, setTouchStartPostion] = useState(0);
  const navTouchStart = (e: TouchEvent) => {
    setTouchStartPostion(e.changedTouches[0].clientY);
  };
  const navTouchEnd = (e: TouchEvent, title: AVAILABLE_APPLICATION_NAMES) => {
    if (touchStartPosition > e.changedTouches[0].clientY + 20) {
      changeApplicationState(title, "closed");
    }
  };
  const navClicked = (title: AVAILABLE_APPLICATION_NAMES) => {
    changeApplicationState(title, "open");
    setBackgroundView(false);
  };
  if (applications.every((app) => !app === true)) setBackgroundView(false);

  return (
    <div className="absolute h-full flex flex-row items-center px-5 gap-5">
      {applications.map((app) => {
        return app && app.state !== "closed" ? (
          <div key={app?.title} className="relative h-[80vh] w-[80vw]">
            <div
              className="absolute w-full h-full z-20"
              onClick={() => navClicked(app.title)}
              onTouchEnd={(e) => navTouchEnd(e, app.title)}
              onTouchStart={(e) => navTouchStart(e)}
            ></div>
            {app.application}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default BackgroundAppsView;
