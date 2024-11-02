import Image from "next/image";
import backgroundImage1 from "../assets/mobile-background-1.jpeg";
import backgroundImage2 from "../assets/mobile-background-2.jpg";
import backgroundImage3 from "../assets/mobile-background-3.jpg";
import backgroundImage4 from "../assets/mobile-background-4.jpg";

const mobileWallpapers: { [id: number]: React.ReactNode } = {};

mobileWallpapers[1] = (
  <Image
    className="w-full h-full"
    alt="desktop-background-image"
    src={backgroundImage1}
  />
);
mobileWallpapers[2] = (
  <Image
    className="w-full h-full"
    alt="desktop-background-image"
    src={backgroundImage2}
  />
);
mobileWallpapers[3] = (
  <Image
    className="w-full h-full"
    alt="desktop-background-image"
    src={backgroundImage3}
  />
);
mobileWallpapers[4] = (
  <Image
    className="w-full h-full"
    alt="desktop-background-image"
    src={backgroundImage4}
  />
);

export default mobileWallpapers;
