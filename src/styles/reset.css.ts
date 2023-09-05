import { JSX } from 'react';
import { style } from '@vanilla-extract/css';

import { theme } from '@styles/theme.css.ts';

// provider 필수 사용하도록 하고 provider에 우리 reset.css 넣어주면 되지만
// provider 사용하지 않고 우리 컴포넌트만 가져다 쓰는 경우에는 컴포넌트 별로 초기화 css를 넣어주어야 한다.
export const base = style({
  // Prevent padding and border from affecting element width
  boxSizing: 'border-box',

  // Remove margin and padding in all browsers
  margin: 0,
  padding: 0,

  // Allow adding border to element by just adding borderWidth
  borderColor: theme.palette.divider,
  borderStyle: theme.borderStyles.solid,
  borderWidth: 0,

  // font
  color: theme.palette.text.primary,
  fontSize: '100%',
  fontFamily: theme.fontFamilies.sansSerif,
  lineHeight: theme.lineHeights.normal,
  verticalAlign: 'baseline',
});

// HTML5 display-role reset for older browsers
const block = style({
  display: 'block',
});

const list = style({
  listStyle: 'none',
});

const quote = style({
  quotes: 'none',
  selectors: {
    '&:before, &:after': {
      content: "''",
    },
  },
});

const table = style({
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

const appearance = style({
  appearance: 'none',
});

const field = style([
  block,
  appearance,
  {
    outline: 'none',
    '::placeholder': {
      color: theme.palette.text.tertiary,
    },
  },
]);
const input = style([
  field,
  {
    selectors: {
      // Hide browser increment/decrement buttons
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
      },
      // Hide browser clear input button
      '&::-ms-clear': {
        display: 'none',
      },
      '&::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
      },
    },
  },
]);

const button = style({
  outline: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  selectors: {
    '&::-moz-focus-inner': {
      borderStyle: 'none',
      padding: 0,
    },
  },
});

const select = style([
  button,
  field,
  {
    selectors: {
      '&::-ms-expand': {
        display: 'none',
      },
    },
  },
]);

const a = style({
  textDecoration: 'none',
  color: 'inherit',
});

export const element: Partial<Record<keyof JSX.IntrinsicElements, string>> = {
  article: block,
  aside: block,
  details: block,
  div: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  ul: list,
  ol: list,
  li: list,
  blockquote: quote,
  q: quote,
  a,
  table,
  select,
  button,
  textarea: field,
  input,
};

export type Element = keyof typeof element;
