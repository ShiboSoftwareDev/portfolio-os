"use client";

import { TouchEvent, useState } from "react";
import { AVAILABLE_APPLICATION_NAMES } from "../applications-metadata/available-applications";
import { useChangeApplicationsState } from "../helpers/useChangeApplicationsState";

const BackgroundAppWindow = ({
  title,
  setBackgroundView,
}: {
  title: AVAILABLE_APPLICATION_NAMES;
  setBackgroundView: (state: boolean) => void;
}) => {
  const changeApplicationState = useChangeApplicationsState();
  const [touchStartPosition, setTouchStartPostion] = useState(0);
  const navTouchStart = (e: TouchEvent) => {
    setTouchStartPostion(e.changedTouches[0].clientY);
  };
  const navTouchEnd = (e: TouchEvent, title: AVAILABLE_APPLICATION_NAMES) => {
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
    ></div>
  );
};

export default BackgroundAppWindow;
