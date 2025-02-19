"use client";

import type React from "react";
import useProgramManager from "../helpers/useProgramManager";
import { ToastContainer, Zoom } from "react-toastify";
import { useEffect } from "react";
import definePlatform from "../utils/definePlatform";
import { useRouter } from "next/navigation";

const DesktopScreen = () => {
  const programs = useProgramManager();
  const router = useRouter();

  useEffect(() => {
    if (definePlatform() === "mobile") {
      router.replace("/mobile");
    }
    if (window) {
      window.onresize = () => {
        if (definePlatform() === "mobile") {
          router.replace("/mobile");
        }
      };
    }
  }, [router]);

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
