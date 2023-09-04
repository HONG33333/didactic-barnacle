import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '@styles/responsiveStyle.ts';

export const otherStack = style({
  backgroundColor: 'red',
  border: '1px solid black',
});

export const responsiveExample = style(
  responsiveStyle({
    mobile: {
      backgroundColor: 'red',
    },
    desktop: {
      backgroundColor: 'blue',
    },
  }),
);
