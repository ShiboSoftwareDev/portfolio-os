export const AVAILABLE_PROGRAMS = ["AboutMe", "AboutApp"] as const;

export type AVAILABLE_PROGRAM_NAMES = (typeof AVAILABLE_PROGRAMS)[number];
