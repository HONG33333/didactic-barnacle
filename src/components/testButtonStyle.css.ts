import { style } from '@vanilla-extract/css';

import { theme } from '@styles/theme.css';

export const buttonWrapper = style({
  padding: '10px',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.main,
  border: 'none',
});
