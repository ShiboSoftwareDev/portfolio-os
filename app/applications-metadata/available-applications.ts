export const AVAILABLE_APPLICATIONS = ["AboutMe", "AboutApp"] as const;

export type AVAILABLE_APPLICATION_NAMES =
  (typeof AVAILABLE_APPLICATIONS)[number];
