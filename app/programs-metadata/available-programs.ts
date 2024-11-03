export const AVAILABLE_PROGRAMS = [
  "AboutMe",
  "AboutApp",
  "DesktopWallpapers",
  "MyWork",
] as const;

export type AVAILABLE_PROGRAM_NAMES = (typeof AVAILABLE_PROGRAMS)[number];
