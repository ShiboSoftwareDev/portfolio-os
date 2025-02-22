import React, { MouseEvent, TouchEvent, useState } from "react";
import { AVAILABLE_APPLICATION_NAMES } from "../applications-metadata/available-applications";

const MobileNav = ({
  setBackgroundView,
  changeApplicationState,
}: {
  setBackgroundView: (newBackgroundView: boolean) => void;
  changeApplicationState: (
    application: AVAILABLE_APPLICATION_NAMES | "",
    newState: "closed" | "open" | "minimized",
  ) => void;
}) => {
  const [touchStartPosition, setTouchStartPostion] = useState(0);
  const [clicked, setClicked] = useState(false);

  const navClicked = () => {
    setClicked(false);
    setBackgroundView(false);
    changeApplicationState("", "minimized");
  };

  const navTouchStart = (e: TouchEvent) => {
    setClicked(true);
    const clientY = e.changedTouches[0].clientY;
    setTouchStartPostion(clientY);
  };
  const navMouseDown = (e: MouseEvent) => {
    setClicked(true);
    const clientY = e.clientY;
    setTouchStartPostion(clientY);
  };

  const navTouchEnd = (e: TouchEvent) => {
    const clientY = e.changedTouches[0].clientY;
    if (touchStartPosition > clientY + 20) {
      setBackgroundView(true);
      changeApplicationState("", "minimized");
    }
  };

  const navMouseLeave = (e: MouseEvent) => {
    if (!clicked) return;
    setClicked(false);
    const clientY = e.clientY;
    if (touchStartPosition > clientY) {
      setBackgroundView(true);
      changeApplicationState("", "minimized");
    }
  };

  return (
    <nav
      className="fixed z-50 bottom-0 w-full h-[7%] flex justify-center items-center"
      style={{ userSelect: "none" }}
    >
      <div
        className="w-[30%] h-[15%] rounded-full bg-white/60 active:bg-white/80 transition-colors ring-1 ring-black/20"
        onClick={navClicked}
        onTouchEnd={navTouchEnd}
        onTouchStart={navTouchStart}
        onMouseDown={navMouseDown}
        onMouseLeave={navMouseLeave}
      />
    </nav>
  );
};

export default MobileNav;
