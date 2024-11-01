import Image from "next/image";
import React from "react";
import backgroundImage1 from "../assets/desktop-background-1.jpg";
import backgroundImage2 from "../assets/desktop-background-2.jpg";
import backgroundImage3 from "../assets/desktop-background-3.jpg";
import backgroundImage4 from "../assets/desktop-background-4.jpg";
import { useGlobalStore } from "../store/global-state";

const Wallpapers = () => {
  const changeBackground = useGlobalStore((state) => state.changeBackground);
  const background1 = (
    <Image
      className="h-[100%] aspect-video"
      alt="desktop-background-image"
      src={backgroundImage1}
    />
  );
  const background2 = (
    <Image
      className="h-[100%] aspect-video"
      alt="desktop-background-image"
      src={backgroundImage2}
    />
  );
  const background3 = (
    <Image
      className="h-[100%] aspect-video"
      alt="desktop-background-image"
      src={backgroundImage3}
    />
  );
  const background4 = (
    <Image
      className="h-[100%] aspect-video"
      alt="desktop-background-image"
      src={backgroundImage4}
    />
  );
  return (
    <div className="h-full flex flex-row justify-start items-center overflow-x-scroll">
      <div
        className="h-[50%] aspect-video"
        onClick={() => changeBackground(background1)}
      >
        {background1}
      </div>
      <div
        className="h-[50%] aspect-video"
        onClick={() => changeBackground(background2)}
      >
        {background2}
      </div>
      <div
        className="h-[50%] aspect-video"
        onClick={() => changeBackground(background3)}
      >
        {background3}
      </div>
      <div
        className="h-[50%] aspect-video"
        onClick={() => changeBackground(background4)}
      >
        {background4}
      </div>
    </div>
  );
};

export default Wallpapers;
