import React from "react";
import { AVAILABLE_APPLICATIONS } from "../applications-metadata/available-applications";
import AppIcon from "./AppIcon";

const MobileGrid = () => {
  // TODO this should be part of a home screen
  const applications = AVAILABLE_APPLICATIONS;
  const grid = new Array(12).fill(1);
  return (
    <section className="absolute top-0 left-0 w-full h-full grid grid-cols-3 justify-items-center items-center">
      {grid.map((_, index) => (
        <div key={index} className="border border-white w-[80%] aspect-square">
          {applications[index] ? <AppIcon title={applications[index]} /> : null}
        </div>
      ))}
    </section>
  );
};

export default MobileGrid;
