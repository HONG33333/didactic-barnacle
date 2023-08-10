import { vars } from '@styles/theme.css.ts';
import { style } from '@vanilla-extract/css';

export const buttonWrapper = style({
  padding: '10px',
  backgroundColor: vars.palette.background.default,
  color: vars.palette.primary.main,
  border: 'none',
});
