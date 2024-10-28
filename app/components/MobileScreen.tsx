"use client";

import type React from "react";
import useApplicationManager from "../helpers/useApplicationManager";
import { useChangeApplicationsState } from "../helpers/useChangeApplicationsState";
import { TouchEvent, useState } from "react";

const MobileScreen = () => {
  const applications = useApplicationManager();
  const changeApplicationState = useChangeApplicationsState();
  const [touchStartPosition, setTouchStartPostion] = useState(0);
  const navClicked = () => {
    changeApplicationState("", "minimized");
  };
  const navTouchStart = (e: TouchEvent) => {
    setTouchStartPostion(e.changedTouches[0].clientY);
  };
  const navTouchEnd = (e: TouchEvent) => {
    if (touchStartPosition > e.changedTouches[0].clientY + 20) {
      changeApplicationState("", "closed");
    }
  };

  return (
    <section className="absolute w-full h-full top-0 left-0">
      <header className="absolute z-50 top-0 w-full border-b border-blue-500 text-black">
        Header (time and stuff)
      </header>
      {applications.map((application) =>
        application ? (
          <div
            className={`${application.state === "minimized" ? "hidden" : ""}`}
            key={application.title}
            onClick={() => {
              if (application.state === "minimized")
                changeApplicationState(application.title, "open");
            }}
          >
            {application.application}
          </div>
        ) : null,
      )}
      <nav className="absolute z-50 h-[4%] bottom-0 w-full flex justify-center items-center">
        <div
          className="h-[50%] w-[30%] border border-blue-600 bg-blue-500 rounded-full"
          onClick={navClicked}
          onTouchEnd={navTouchEnd}
          onTouchStart={navTouchStart}
        />
      </nav>
    </section>
  );
};

export default MobileScreen;
