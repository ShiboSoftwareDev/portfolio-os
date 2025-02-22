"use client";

import { MouseEvent, TouchEvent, useState } from "react";
import { AVAILABLE_APPLICATION_NAMES } from "../applications-metadata/available-applications";
import { useChangeApplicationsState } from "../helpers/useChangeApplicationsState";

const BackgroundAppWindow = ({
  title,
  setBackgroundView,
  backgroundView,
  setTouchedApp,
}: {
  title: AVAILABLE_APPLICATION_NAMES;
  state: string;
  setBackgroundView: (state: boolean) => void;
  backgroundView: boolean;
  setTouchedApp: (state: boolean) => void;
}) => {
  const changeApplicationState = useChangeApplicationsState();
  const [touchStartPosition, setTouchStartPostion] = useState({ x: 0, y: 0 });
  const [mouseStartPosition, setMouseStartPosition] = useState({ x: 0, y: 0 });
  const [isTouched, setIsTouched] = useState(false);
  const [clickable, setClicable] = useState(false);

  const appTouchStart = (e: TouchEvent) => {
    setTouchStartPostion({
      y: e.changedTouches[0].clientY,
      x: e.changedTouches[0].clientX,
    });
    setIsTouched(true);
    setTouchedApp(true);
  };

  const appTouchEnd = (e: TouchEvent, title: AVAILABLE_APPLICATION_NAMES) => {
    setIsTouched(false);
    setTouchedApp(false);
    if (touchStartPosition.y > e.changedTouches[0].clientY + 100) {
      changeApplicationState(title, "closed");
    } else if (
      touchStartPosition.y < e.changedTouches[0].clientY + 20 &&
      touchStartPosition.y > e.changedTouches[0].clientY - 20 &&
      touchStartPosition.x < e.changedTouches[0].clientX + 20 &&
      touchStartPosition.x > e.changedTouches[0].clientX - 20
    ) {
      appClicked(title);
    }
  };

  const appMouseDown = (e: MouseEvent) => {
    if (!clickable) return;
    setMouseStartPosition({ y: e.clientY, x: e.clientX });
    setIsTouched(true);
    setTouchedApp(true);
  };

  const appMouseUp = (e: MouseEvent, title: AVAILABLE_APPLICATION_NAMES) => {
    if (!clickable) return;
    setIsTouched(false);
    setTouchedApp(false);
    if (mouseStartPosition.y > e.clientY + 100) {
      changeApplicationState(title, "closed");
    } else if (
      mouseStartPosition.y < e.clientY + 20 &&
      mouseStartPosition.y > e.clientY - 20 &&
      mouseStartPosition.x < e.clientX + 20 &&
      mouseStartPosition.x > e.clientX - 20
    ) {
      appClicked(title);
    }
    setClicable(false);
  };

  const appMouseMove = () => {
    if (!clickable) {
      setClicable(true);
    }
  };

  const appClicked = (title: AVAILABLE_APPLICATION_NAMES) => {
    changeApplicationState(title, "open");
    setBackgroundView(false);
  };

  return (
    <div
      className={`absolute w-full h-full z-20 ${!backgroundView && "hidden"}`}
      onTouchEnd={(e) => appTouchEnd(e, title)}
      onTouchStart={(e) => appTouchStart(e)}
      onMouseDown={(e) => appMouseDown(e)}
      onMouseUp={(e) => appMouseUp(e, title)}
      onMouseMove={() => appMouseMove()}
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
