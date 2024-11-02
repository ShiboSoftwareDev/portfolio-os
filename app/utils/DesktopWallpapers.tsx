import Image from "next/image";
import backgroundImage1 from "../assets/desktop-background-1.jpg";
import backgroundImage2 from "../assets/desktop-background-2.jpg";
import backgroundImage3 from "../assets/desktop-background-3.jpg";
import backgroundImage4 from "../assets/desktop-background-4.jpg";

const desktopWallpapers: { [id: number]: React.ReactNode } = {};

desktopWallpapers[1] = (
  <Image
    className="h-full aspect-video"
    alt="desktop-background-image"
    src={backgroundImage1}
  />
);
desktopWallpapers[2] = (
  <Image
    className="h-full aspect-video"
    alt="desktop-background-image"
    src={backgroundImage2}
  />
);
desktopWallpapers[3] = (
  <Image
    className="h-full aspect-video"
    alt="desktop-background-image"
    src={backgroundImage3}
  />
);
desktopWallpapers[4] = (
  <Image
    className="h-full aspect-video"
    alt="desktop-background-image"
    src={backgroundImage4}
  />
);

export default desktopWallpapers;
