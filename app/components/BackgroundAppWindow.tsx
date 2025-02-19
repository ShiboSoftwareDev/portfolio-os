"use client";

import { MouseEvent, TouchEvent, useState } from "react";
import { AVAILABLE_APPLICATION_NAMES } from "../applications-metadata/available-applications";
import { useChangeApplicationsState } from "../helpers/useChangeApplicationsState";

const BackgroundAppWindow = ({
  title,
  setBackgroundView,
  setTouchedApp,
}: {
  title: AVAILABLE_APPLICATION_NAMES;
  setBackgroundView: (state: boolean) => void;
  setTouchedApp: (state: boolean) => void;
}) => {
  const changeApplicationState = useChangeApplicationsState();
  const [touchStartPosition, setTouchStartPostion] = useState(0);
  const [mouseStartPosition, setMouseStartPosition] = useState(0);
  const [isTouched, setIsTouched] = useState(false);

  const appTouchStart = (e: TouchEvent) => {
    setTouchStartPostion(e.changedTouches[0].clientY);
    setIsTouched(true);
    setTouchedApp(true);
  };

  const appTouchEnd = (e: TouchEvent, title: AVAILABLE_APPLICATION_NAMES) => {
    setIsTouched(false);
    setTouchedApp(false);
    if (touchStartPosition > e.changedTouches[0].clientY + 100) {
      changeApplicationState(title, "closed");
    }
  };

  const appMouseDown = (e: MouseEvent) => {
    setMouseStartPosition(e.clientY);
    setIsTouched(true);
    setTouchedApp(true);
  };

  const appMouseUp = (e: MouseEvent, title: AVAILABLE_APPLICATION_NAMES) => {
    setIsTouched(false);
    setTouchedApp(false);
    if (mouseStartPosition > e.clientY + 100) {
      changeApplicationState(title, "closed");
    }
  };

  const appClicked = (title: AVAILABLE_APPLICATION_NAMES) => {
    changeApplicationState(title, "open");
    setBackgroundView(false);
  };

  return (
    <div
      className="absolute w-full h-full z-20"
      onClick={() => appClicked(title)}
      onTouchEnd={(e) => appTouchEnd(e, title)}
      onTouchStart={(e) => appTouchStart(e)}
      onMouseDown={(e) => appMouseDown(e)}
      onMouseUp={(e) => appMouseUp(e, title)}
    >
      {isTouched && (
        <div
          className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-white text-base font-medium pointer-events-none"
          style={{
            userSelect: "none",
            textShadow:
              "-1px -1px 0 rgba(0,0,0,0.5), 1px -1px 0 rgba(0,0,0,0.5), -1px 1px 0 rgba(0,0,0,0.5), 1px 1px 0 rgba(0,0,0,0.5)",
          }}
        >
          ↑ Swipe up to close
        </div>
      )}
    </div>
  );
};

export default BackgroundAppWindow;
