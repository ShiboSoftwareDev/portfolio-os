import Image from "next/image";
import React from "react";
import backgroundImage from "../assets/mobile-background-1.jpeg";

const MobileBackground = () => {
  return (
    <section className="absolute -z-50 top-0 left-0 w-full h-full">
      <Image
        className="h-full w-full"
        alt="mobile-background-image"
        src={backgroundImage}
      />
    </section>
  );
};

export default MobileBackground;
