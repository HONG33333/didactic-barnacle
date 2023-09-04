import { borderStyles } from '@styles/tokens/border';
import { palette } from '@styles/tokens/color';
import { opacity } from '@styles/tokens/opacity';
import { space } from '@styles/tokens/space';
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from '@styles/tokens/typography';

export const tokens = {
  palette,
  space,
  opacity,
  borderStyles,
  // borderWidths: space,
  // radius: space,
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
};

export type Tokens = typeof tokens;
