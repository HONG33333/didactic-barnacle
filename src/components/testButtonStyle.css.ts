import { keyframes, style } from '@vanilla-extract/css';

import { motionSafe } from '@styles/motionSafeStyle.ts';
import { sprinkles } from '@styles/sprinkles.css.ts';
import { theme } from '@styles/theme.css';

export const buttonWrapper = style({
  padding: '10px',
  // backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.main,
  border: 'none',
});

const rotate = keyframes({
  '100%': { transform: 'rotate(1turn)' },
});

export const motionSafeExample = style({
  ...motionSafe({
    animation: `1.4s linear infinite ${rotate}`,
  }),
});

// export const sprinklesExample = sprinkles({
//   cursor: 'pointer',
// });

export const sprinklesExample = style([
  sprinkles({
    cursor: 'pointer',
    // aspectRatio: '2/1',
    backgroundColor: {
      base: 'primary.main',
      hover: 'secondary.main',
    },
    transitionDuration: '1000',
    width: '20',
    height: {
      mobile: '20',
      desktop: '40',
    },
  }),
  {
    width: '200px', // sprinkles 에서 지정해두지 않은 커스텀 스타일은 따로 작성해야 함
  },
]);
