"use client";

import React, { useEffect } from "react";
import { useGlobalStore } from "../store/global-state";
import mobileWallpapers from "../utils/MobileWallpapers";
import { CircleLoader } from "react-spinners";

const MobileBackground = () => {
  const mobileWallpaperId = useGlobalStore((state) => state.mobileWallpaperId);
  const changeMobileWallpaperId = useGlobalStore(
    (state) => state.changeMobileWallpaperId,
  );
  useEffect(() => {
    const savedMobileWallpaperId = parseInt(
      localStorage.getItem("Mobile Wallpaper") || "",
    );
    changeMobileWallpaperId(savedMobileWallpaperId || 1);
  }, []);
  return (
    <section className="absolute -z-50 top-0 left-0 w-full h-full bg-black">
      {mobileWallpaperId ? (
        mobileWallpapers[mobileWallpaperId]
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <CircleLoader color="white" />
        </div>
      )}
    </section>
  );
};

export default MobileBackground;
