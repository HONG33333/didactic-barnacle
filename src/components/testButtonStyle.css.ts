import { theme } from '@styles/theme.css.ts';
import { style } from '@vanilla-extract/css';

export const buttonWrapper = style({
  padding: '10px',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.main,
  border: 'none',
});
