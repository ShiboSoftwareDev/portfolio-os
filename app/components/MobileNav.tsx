import React, { MouseEvent, TouchEvent } from "react";

const MobileNav = (
  { navClicked, navTouchEnd, navTouchStart, navMouseLeave, navMouseDown }: {
    navClicked: () => void;
    navTouchEnd: (e: TouchEvent) => void;
    navTouchStart: (e: TouchEvent) => void;
    navMouseDown: (e: MouseEvent) => void;
    navMouseLeave: (e: MouseEvent) => void;
  },
) => {
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
