"use client";

import type React from "react";
import useApplicationManager from "../helpers/useApplicationManager";
import { useChangeApplicationsState } from "../helpers/useChangeApplicationsState";
import { TouchEvent, useEffect, useState } from "react";
import Clock from "./Clock";
import BackgroundAppWindow from "./BackgroundAppWindow";

const MobileScreen = () => {
  const applications = useApplicationManager();
  const changeApplicationState = useChangeApplicationsState();
  const [touchStartPosition, setTouchStartPostion] = useState(0);
  const [backgroundView, setBackgroundView] = useState(false);
  const [touchedApps, setTouchedApps] = useState<{ [key: string]: boolean }>(
    {},
  );
  const navClicked = () => {
    setBackgroundView(false);
    changeApplicationState("", "minimized");
  };
  const navTouchStart = (e: TouchEvent) => {
    setTouchStartPostion(e.changedTouches[0].clientY);
  };
  const navTouchEnd = (e: TouchEvent) => {
    if (touchStartPosition > e.changedTouches[0].clientY + 20) {
      setBackgroundView(true);
      changeApplicationState("", "minimized");
    }
  };
  useEffect(() => {
    if (applications.every((app) => !app?.application === true))
      setBackgroundView(false);
  }, [applications]);

  return (
    <section className="absolute w-full h-full top-0 left-0 overflow-y-scroll">
      <header className="fixed z-50 top-0 w-full flex justify-center items-center">
        <Clock localeProp="en-US" format="hh-mm" hour12Prop />
      </header>

      <div
        onClick={() => setBackgroundView(false)}
        className={`${
          backgroundView
            ? "absolute h-full min-w-full flex items-center justify-center pt-16 px-4 gap-4 z-20 bg-black/20 backdrop-blur-sm overflow-y-scroll"
            : `absolute w-full h-full`
        } `}
      >
        {applications.map((application) =>
          application ? (
            <div
              className={`z-20 ${
                backgroundView
                  ? "relative h-[70vh] w-[70vw] rounded-2xl overflow-hidden shadow-lg transition-transform"
                  : ""
              } ${
                application.state === "minimized" && !backgroundView
                  ? "hidden"
                  : ""
              } ${touchedApps[application.title] ? "scale-95" : ""}`}
              key={application.title}
            >
              {backgroundView ? (
                <BackgroundAppWindow
                  title={application.title}
                  setBackgroundView={setBackgroundView}
                  setTouchedApp={(state) =>
                    setTouchedApps((prev) => ({
                      ...prev,
                      [application.title]: state,
                    }))
                  }
                />
              ) : null}
              {application.application}
            </div>
          ) : null,
        )}
      </div>
      <nav className="fixed z-50 bottom-0 w-full h-8 flex justify-center items-center">
        <div
          className="w-[64px] h-[5px] rounded-full bg-white/60 active:bg-white/80 transition-colors ring-1 ring-black/20"
          onClick={navClicked}
          onTouchEnd={navTouchEnd}
          onTouchStart={navTouchStart}
        />
      </nav>
    </section>
  );
};

export default MobileScreen;
