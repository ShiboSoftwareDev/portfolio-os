"use client";

import type React from "react";
import useApplicationManager from "../helpers/useApplicationManager";

const MobileScreen = () => {
  const applications = useApplicationManager();

  return (
    <section className="absolute w-full h-full top-0 left-0">
      {applications}
    </section>
  );
};

export default MobileScreen;
