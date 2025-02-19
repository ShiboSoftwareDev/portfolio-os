"use client";

import React, { useEffect } from "react";
import { useGlobalStore } from "../store/global-state";
import desktopWallpapers from "../utils/DesktopWallpapers";
import { CircleLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";

const DesktopBackground = () => {
  const desktopWallpaperId = useGlobalStore(
    (state) => state.desktopWallpaperId,
  );
  const changeDesktopWallpaperId = useGlobalStore(
    (state) => state.changeDesktopWallpaperId,
  );
  useEffect(() => {
    const savedDesktopWallpaper = parseInt(
      localStorage.getItem("Desktop Wallpaper") || "",
    );
    changeDesktopWallpaperId(savedDesktopWallpaper || 1);
  }, []);
  return (
    <section
      className="absolute -z-50 top-0 left-0 w-full h-full bg-black"
      style={{ userSelect: "none" }}
    >
      {desktopWallpaperId
        ? (
          desktopWallpapers[desktopWallpaperId]
        )
        : (
          <div className="h-full w-full flex items-center justify-center">
            <CircleLoader color="white" />
          </div>
        )}
    </section>
  );
};

export default DesktopBackground;
