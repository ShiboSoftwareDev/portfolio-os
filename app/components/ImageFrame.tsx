import Image from "next/image";
import React, { ReactNode } from "react";

const ImageFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center bg-no-repeat bg-center lg:bg-[length:148vh] lg:bg-[50%_-31vh] bg-[#3C3D3F]">
      <div className="border-2 border-[#DE9B72] h-full w-full p-1.5 m-auto">
        <div className="border-4 border-[#DE9B72] h-full w-full p-1.5 m-auto">
          <div className="relative border-2 border-[#DE9B72] h-full w-full m-auto flex flex-col justify-center">
            <Image
              alt="corder-decoration"
              width={573}
              height={572}
              className="absolute w-12 -m-[3px] md:w-14 md:-m-[4px] lg:w-16 lg:-m-[5px] xl:w-20 xl:-m-[6px] top-0 left-0"
              src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
            />
            <Image
              alt="corder-decoration"
              width={573}
              height={572}
              className="absolute w-12 -m-[3px] md:w-14 md:-m-[4px] lg:w-16 lg:-m-[5px] xl:w-20 xl:-m-[6px] top-0 right-0 scale-x-[-1]"
              src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
            />
            <Image
              alt="corder-decoration"
              width={573}
              height={572}
              className="absolute w-12 -m-[3px] md:w-14 md:-m-[4px] lg:w-16 lg:-m-[5px] xl:w-20 xl:-m-[6px] bottom-0 right-0 scale-[-1]"
              src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
            />
            <Image
              alt="corder-decoration"
              width={573}
              height={572}
              className="absolute w-12 -m-[3px] md:w-14 md:-m-[4px] lg:w-16 lg:-m-[5px] xl:w-20 xl:-m-[6px] bottom-0 left-0 scale-y-[-1]"
              src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
            />
            <Image
              alt="horizontally-centered-vertical-decoration"
              width={799}
              height={144}
              className="absolute w-44 md:w-64 lg:w-80 xl:w-[27em] top-0 left-1/2 transform -translate-x-1/2"
              src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
            />
            <Image
              alt="horizontally-centered-vertical-decoration"
              width={799}
              height={144}
              className="absolute w-44 md:w-64 lg:w-80 xl:w-[27em] bottom-0 left-1/2 transform -translate-x-1/2 scale-y-[-1]"
              src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
            />

            {/* Page Content */}
            <div className="h-[400px] aspect-square overflow-y-scroll">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFrame;
