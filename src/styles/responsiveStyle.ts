import { StyleRule } from '@vanilla-extract/css';

import { Breakpoint, breakpoints } from './breakpoints';

type CSSProps = Omit<StyleRule, '@media' | '@supports'>;

const makeMediaQuery = (breakpoint: Breakpoint) => (styles?: CSSProps) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles,
      };

const mediaQuery = {
  mobile: makeMediaQuery('mobile'),
  desktop: makeMediaQuery('desktop'),
};

type ResponsiveStyle = {
  common?: CSSProps;
  mobile?: CSSProps;
  desktop?: CSSProps;
};

export const responsiveStyle = ({
  common,
  mobile,
  desktop,
}: ResponsiveStyle): StyleRule => {
  /* eslint-disable @typescript-eslint/no-explicit-any, no-unused-vars, @typescript-eslint/no-unused-vars */
  const { '@media': _, ...commonStyle } = (common ?? {}) as any;

  return {
    ...commonStyle,
    ...(mobile || desktop
      ? {
          '@media': {
            ...mediaQuery.mobile(mobile ?? {}),
            ...mediaQuery.desktop(desktop ?? {}),
          },
        }
      : {}),
  };
};
