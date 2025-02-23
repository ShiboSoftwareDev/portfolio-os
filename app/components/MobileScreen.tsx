"use client";

import type React from "react";
import useApplicationManager from "../helpers/useApplicationManager";
import { useChangeApplicationsState } from "../helpers/useChangeApplicationsState";
import { useEffect, useState } from "react";
import Clock from "./Clock";
import definePlatform from "../utils/definePlatform";
import { useRouter } from "next/navigation";
import MobileNav from "./MobileNav";
import { AppWindow } from "./AppWindow";

const MobileScreen = () => {
  const applications = useApplicationManager();
  const changeApplicationState = useChangeApplicationsState();
  const [backgroundView, setBackgroundView] = useState(false);
  const [touchedApps, setTouchedApps] = useState<{ [key: string]: boolean }>(
    {},
  );

  const router = useRouter();

  useEffect(() => {
    if (applications.every((app) => !app?.application === true)) {
      setBackgroundView(false);
    }
  }, [applications]);

  useEffect(() => {
    if (definePlatform() === "desktop") {
      router.replace("/desktop");
    }
    if (window) {
      window.onresize = () => {
        if (definePlatform() === "desktop") {
          router.replace("/desktop");
        }
      };
    }
  }, [router]);

  return (
    <section className="absolute w-full h-full top-0 left-0 overflow-y-scroll">
      <header className="fixed z-50 top-0 w-full flex justify-center items-center">
        <Clock localeProp="en-US" format="hh-mm" hour12Prop />
      </header>

      <div
        onClick={() => setBackgroundView(false)}
        className={`${
          backgroundView
            ? "absolute h-full min-w-full flex items-center justify-center pt-[10%] px-4 gap-4 z-20 bg-black/20 backdrop-blur-sm overflow-y-scroll"
            : `absolute w-full h-full`
        } `}
      >
        {applications.map((application) =>
          application
            ? (
              <AppWindow
                changeApplicationState={changeApplicationState}
                backgroundView={backgroundView}
                setBackgroundView={setBackgroundView}
                setTouchedApps={setTouchedApps}
                state={application.state}
                title={application.title}
                touchedApps={touchedApps}
                key={application.title}
              >
                {application.application}
              </AppWindow>
            )
            : null
        )}
      </div>
      <MobileNav
        changeApplicationState={changeApplicationState}
        setBackgroundView={setBackgroundView}
      />
    </section>
  );
};

export default MobileScreen;
