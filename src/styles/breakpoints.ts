export const breakpoints = {
  mobile: 0,
  desktop: 1024,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[];
