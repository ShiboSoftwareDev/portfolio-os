"use client";

import React from "react";
import { CircleLoader } from "react-spinners";

const Welcome = ({ text }: { text?: string }) => {
  return (
    <main className="absolute top-0 left-0 w-screen h-screen flex flex-col gap-2 justify-center items-center bg-black">
      <CircleLoader color="white" />
      <h1 className="text-5xl text-center">Welcome {text}</h1>
    </main>
  );
};

export default Welcome;
