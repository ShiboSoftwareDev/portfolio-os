"use client";

import { TouchEvent, useState } from "react";
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
  const [isTouched, setIsTouched] = useState(false);

  const navTouchStart = (e: TouchEvent) => {
    setTouchStartPostion(e.changedTouches[0].clientY);
    setIsTouched(true);
    setTouchedApp(true);
  };

  const navTouchEnd = (e: TouchEvent, title: AVAILABLE_APPLICATION_NAMES) => {
    setIsTouched(false);
    setTouchedApp(false);
    if (touchStartPosition > e.changedTouches[0].clientY + 100) {
      changeApplicationState(title, "closed");
    }
  };

  const navClicked = (title: AVAILABLE_APPLICATION_NAMES) => {
    changeApplicationState(title, "open");
    setBackgroundView(false);
  };

  return (
    <div
      className="absolute w-full h-full z-20"
      onClick={() => navClicked(title)}
      onTouchEnd={(e) => navTouchEnd(e, title)}
      onTouchStart={(e) => navTouchStart(e)}
    >
      {isTouched && (
        <div
          className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-white text-base font-medium    
 pointer-events-none"
          style={{
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
