"use client";

import type React from "react";
import useProgramManager from "../helpers/useProgramManager";
import { ToastContainer, Zoom } from "react-toastify";

const DesktopScreen = () => {
  const programs = useProgramManager();

  return (
    <section className="absolute overflow-hidden h-full w-full top-0 left-0">
      {programs}
      <ToastContainer
        position="bottom-right"
        theme="dark"
        hideProgressBar
        transition={Zoom}
        limit={5}
        className={"mb-5"}
      />
    </section>
  );
};

export default DesktopScreen;
