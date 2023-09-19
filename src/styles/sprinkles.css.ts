import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '@styles/breakpoints.ts';
import { theme } from '@styles/theme.css.ts';
import { flattenPaletteObj } from '@styles/utils.ts';

export const flexAlignment = [
  'flex-start',
  'center',
  'flex-end',
  'stretch',
] as const;

export const flexibility = [0, 1, 2, 3, 4] as const;

const negativeSpace = {
  ['-px']: '-1px',
  ['-0.5']: '-0.125rem',
  ['-1']: '-0.25rem',
  ['-1.5']: '-0.375rem',
  ['-2']: '-0.5rem',
  ['-2.5']: '-0.625rem',
  ['-3']: '-0.75rem',
  ['-3.5']: '-0.875rem',
  ['-4']: '-1rem',
};

export const margins = {
  ...theme.space,
  ...negativeSpace,
};

export const colorSchema = flattenPaletteObj(theme.palette);

const baseProperties = defineProperties({
  defaultCondition: 'base',
  conditions: {
    base: {},
    mobile: { '@media': `(min-width: ${breakpoints.mobile}px)` },
    desktop: { '@media': `(min-width: ${breakpoints.desktop}px)` },
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
    disabled: { selector: '&:disabled' },
  },
  properties: {
    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
    borderWidth: theme.space,
    borderBottomWidth: theme.space,
    borderLeftWidth: theme.space,
    borderRightWidth: theme.space,
    borderTopWidth: theme.space, //
    borderRadius: theme.space, //
    borderBottomLeftRadius: theme.space,
    borderBottomRightRadius: theme.space,
    borderTopLeftRadius: theme.space,
    borderTopRightRadius: theme.space,
    bottom: theme.space,
    display: ['block', 'flex', 'grid', 'inline-block', 'none', 'contents'],
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexBasis: theme.space,
    flexDirection: ['column', 'row', 'column-reverse', 'row-reverse'],
    flexGrow: flexibility,
    flexShrink: flexibility,
    flexWrap: ['wrap', 'nowrap'],
    fontSize: {
      ...theme.fontSizes,
      inherit: 'inherit',
    },
    fontWeight: theme.fontWeights,
    gap: theme.space,
    height: theme.space,
    inset: theme.space,
    justifyContent: [...flexAlignment, 'space-around', 'space-between'],
    justifySelf: flexAlignment,
    left: theme.space,
    letterSpacing: theme.letterSpacings,
    lineHeight: theme.lineHeights,
    marginBottom: margins,
    marginLeft: margins,
    marginRight: margins,
    marginTop: margins,
    maxHeight: theme.space,
    maxWidth: {
      ...theme.space,
      none: 'none',
    },
    minHeight: theme.space,
    minWidth: theme.space,
    overflow: ['auto', 'hidden', 'scroll', 'unset'],
    paddingBottom: theme.space,
    paddingLeft: theme.space,
    paddingRight: theme.space,
    paddingTop: theme.space,
    position: ['absolute', 'fixed', 'relative', 'sticky'],
    right: theme.space,
    textAlign: ['center', 'left', 'right'],
    top: theme.space,
    width: theme.space,
    // unresponsive
    aspectRatio: {
      auto: 'auto',
      '1/1': '1 / 1',
      '2/1': '2 / 1',
      '4/1': '4 / 1',
      '4/3': '4 / 3',
      '16/9': '16 / 9',
    },
    cursor: ['default', 'pointer', 'not-allowed'],
    fontFamily: theme.fontFamilies,
    isolation: ['isolate'],
    objectFit: ['contain', 'cover'],
    pointerEvents: ['none'],
    strokeWidth: theme.space,
    textTransform: ['capitalize', 'lowercase', 'uppercase'],
    transitionProperty: {
      none: 'none',
      all: 'all',
      default:
        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
    },
    visibility: ['hidden', 'visible'],
    whiteSpace: [
      'normal',
      'nowrap',
      'pre',
      'pre-line',
      'pre-wrap',
      'initial',
      'inherit',
    ],
    wordBreak: ['break-word'],
    wordWrap: ['normal', 'break-word', 'initial', 'inherit'],
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '75': 75,
      '100': 100,
      '999': 999,
      auto: 'auto',
    },
    // selectors
    backgroundColor: colorSchema,
    borderColor: colorSchema,
    // boxShadow: theme.shadows,
    color: colorSchema,
    outlineColor: colorSchema,
  },
  shorthands: {
    borderLeftRadius: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    borderRightRadius: ['borderBottomRightRadius', 'borderTopRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

const motionSafeProperties = defineProperties({
  conditions: {
    base: { '@media': '(prefers-reduced-motion: no-preference)' },
  },
  defaultCondition: 'base',
  properties: {
    transitionDuration: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
  },
});

export const sprinkles = createSprinkles(baseProperties, motionSafeProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
