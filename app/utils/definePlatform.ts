"use client";
const definePlatform = (): "mobile" | "desktop" | "null" => {
  if (typeof window === "undefined") return "null";

  return window.innerWidth > 896 ? "desktop" : "mobile";
};
export default definePlatform;
