export const AVAILABLE_PROGRAMS = [
  "AboutMe",
  "AboutApp",
  "Wallpapers",
] as const;

export type AVAILABLE_PROGRAM_NAMES = (typeof AVAILABLE_PROGRAMS)[number];
