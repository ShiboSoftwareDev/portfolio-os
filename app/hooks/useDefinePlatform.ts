"use client";

export const useDefinePlatform = (): "mobile" | "desktop" | "null" => {
  if (typeof window === "undefined") return "null";

  return window.innerWidth > 896 ? "desktop" : "mobile";
};
