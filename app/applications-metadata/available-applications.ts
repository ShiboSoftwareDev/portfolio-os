export const AVAILABLE_APPLICATIONS = [
  "AboutMe",
  "AboutApp",
  "MobileWallpapers",
  "MyWork",
] as const;

export type AVAILABLE_APPLICATION_NAMES =
  (typeof AVAILABLE_APPLICATIONS)[number];
