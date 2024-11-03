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
        className={`${
          backgroundView
            ? "absolute h-full flex flex-row items-center px-[10vw] gap-[5vw] z-20"
            : `absolute w-full h-full`
        } `}
      >
        {applications.map((application) =>
          application ? (
            <div
              className={`z-20 ${backgroundView ? "relative h-[80vh] w-[80vw] border border-black" : ""} ${application.state === "minimized" && !backgroundView ? "hidden" : ""}`}
              key={application.title}
            >
              {backgroundView ? (
                <BackgroundAppWindow
                  title={application.title}
                  setBackgroundView={setBackgroundView}
                />
              ) : null}
              {application.application}
            </div>
          ) : null,
        )}
      </div>

      <nav className="fixed z-50 h-[5%] bottom-0 w-full flex justify-center items-center">
        <div
          className="h-[50%] w-[30%] border-2 border-blue-600 bg-blue-500 rounded-full"
          onClick={navClicked}
          onTouchEnd={navTouchEnd}
          onTouchStart={navTouchStart}
        />
      </nav>
    </section>
  );
};

export default MobileScreen;
