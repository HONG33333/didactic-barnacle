import { Tokens } from '@styles/tokens';

export type PaletteToken = {
  common: {
    white: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
  };
  primary: {
    dark: string;
    main: string;
    light: string;
    light2: string;
    light3: string;
    contrastText: string;
  };
  secondary: {
    dark: string;
    main: string;
    light: string;
    light2: string;
    light3: string;
    light4: string;
    light5: string;
    contrastText: string;
  };
  tertiary: {
    dark: string;
    main: string;
    light: string;
    light2: string;
    light3: string;
    contrastText: string;
  };
  quaternary: {
    dark: string;
    main: string;
    light: string;
    light2: string;
    light3: string;
    contrastText: string;
  };
  background: {
    default: string;
    paper: string;
  };
  divider: string;
  error: {
    dark: string;
    main: string;
    light: string;
  };
};

export type ThemeTokens = {
  borderStyles: Tokens['borderStyles'];
  palette: PaletteToken;
  space: Tokens['space'];
  smallSpace: Tokens['smallSpace'];
  radius: Tokens['radius'];
  fontFamilies: Tokens['fontFamilies'];
  fontWeights: Tokens['fontWeights'];
  fontSizes: Tokens['fontSizes'];
  letterSpacings: Tokens['letterSpacings'];
  lineHeights: Tokens['lineHeights'];
};
