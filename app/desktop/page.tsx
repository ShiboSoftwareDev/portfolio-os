import React from "react";
import DesktopBackground from "../components/DesktopBackground";
import DesktopTaskbar from "../components/DesktopTaskbar";
import DesktopScreen from "../components/DesktopScreen";

const page = () => {
  return (
    <>
      <DesktopBackground />
      <DesktopTaskbar />
      <DesktopScreen />
    </>
  );
};

export default page;
