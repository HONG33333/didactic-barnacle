import { keyframes, style } from '@vanilla-extract/css';

import { theme } from '@styles/theme.css';
import { motionSafe } from '@styles/utils.ts';

export const buttonWrapper = style({
  padding: '10px',
  backgroundColor: theme.palette.background.default,
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
