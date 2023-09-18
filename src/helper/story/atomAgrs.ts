import { Meta } from '@storybook/react';

import {
  colorSchema,
  flexAlignment,
  flexibility,
  margins,
} from '@styles/sprinkles.css.ts';
import { tokens } from '@styles/tokens';

const spaceOptions = Object.keys(tokens.space);
const marginOptions = Object.keys(margins);
const flexAlignmentOptions = [...flexAlignment, 'baseline'];
const paletteOptions = Object.keys(colorSchema);

export const atomArgs: Meta['argTypes'] = {
  alignItems: {
    description: `alignItems`,
    options: flexAlignmentOptions,
    control: 'select',
  },
  alignSelf: {
    description: `alignSelf`,
    options: flexAlignmentOptions,
    control: 'select',
  },
  borderWidth: {
    description: `borderWidth`,
    options: spaceOptions,
    control: 'select',
  },
  borderBottomWidth: {
    description: `borderBottomWidth`,
    options: spaceOptions,
    control: 'select',
  },
  borderLeftWidth: {
    description: `borderLeftWidth`,
    options: spaceOptions,
    control: 'select',
  },
  borderRightWidth: {
    description: `borderRightWidth`,
    options: spaceOptions,
    control: 'select',
  },
  borderTopWidth: {
    description: `borderTopWidth`,
    options: spaceOptions,
    control: 'select',
  },
  borderRadius: {
    description: `borderRadius`,
    options: spaceOptions,
    control: 'select',
  },
  borderBottomLeftRadius: {
    description: `borderBottomLeftRadius`,
    options: spaceOptions,
    control: 'select',
  },
  borderBottomRightRadius: {
    description: `borderBottomRightRadius`,
    options: spaceOptions,
    control: 'select',
  },
  borderTopLeftRadius: {
    description: `borderTopLeftRadius`,
    options: spaceOptions,
    control: 'select',
  },
  borderTopRightRadius: {
    description: `borderTopRightRadius`,
    options: spaceOptions,
    control: 'select',
  },
  bottom: {
    description: `bottom`,
    options: spaceOptions,
    control: 'select',
  },
  display: {
    description: `display`,
    options: ['block', 'flex', 'grid', 'inline-block', 'none', 'contents'],
    control: 'select',
  },
  flex: {
    description: `flex`,
    options: ['1', 'auto', 'initial', 'none'],
    control: 'select',
  },
  flexBasis: {
    description: `flexBasis`,
    options: spaceOptions,
    control: 'select',
  },
  flexDirection: {
    description: `flexDirection`,
    options: ['column', 'row', 'column-reverse', 'row-reverse'],
    control: 'select',
  },
  flexGrow: {
    description: `flexGrow`,
    options: flexibility,
    control: 'select',
  },
  flexShrink: {
    description: `flexShrink`,
    options: flexibility,
    control: 'select',
  },
  flexWrap: {
    description: `flexWrap`,
    options: ['wrap', 'nowrap'],
    control: 'select',
  },
  fontSize: {
    description: `fontSize`,
    options: [...Object.keys(tokens.fontSizes), 'inherit'],
    control: 'select',
  },
  fontWeight: {
    description: `fontWeight`,
    options: Object.keys(tokens.fontWeights),
    control: 'select',
  },
  gap: {
    description: `gap`,
    options: spaceOptions,
    control: 'select',
  },
  height: {
    description: `height`,
    options: spaceOptions,
    control: 'select',
  },
  inset: {
    description: `inset`,
    options: spaceOptions,
    control: 'select',
  },
  justifyContent: {
    description: `justifyContent`,
    options: [...flexAlignment, 'space-around', 'space-between'],
    control: 'select',
  },
  justifySelf: {
    description: `justifySelf`,
    options: flexAlignment,
    control: 'select',
  },
  left: {
    description: `left`,
    options: spaceOptions,
    control: 'select',
  },
  letterSpacing: {
    description: `letterSpacing`,
    options: Object.keys(tokens.letterSpacings),
    control: 'select',
  },
  lineHeight: {
    description: `lineHeight`,
    options: Object.keys(tokens.lineHeights),
    control: 'select',
  },
  marginBottom: {
    description: `marginBottom`,
    options: marginOptions,
    control: 'select',
  },
  marginLeft: {
    description: `marginLeft`,
    options: marginOptions,
    control: 'select',
  },
  marginRight: {
    description: `marginRight`,
    options: marginOptions,
    control: 'select',
  },
  marginTop: {
    description: `marginTop`,
    options: marginOptions,
    control: 'select',
  },
  maxHeight: {
    description: `maxHeight`,
    options: spaceOptions,
    control: 'select',
  },
  maxWidth: {
    description: `maxWidth`,
    options: ['none', ...spaceOptions],
    control: 'select',
  },
  minHeight: {
    description: `minHeight`,
    options: spaceOptions,
    control: 'select',
  },
  minWidth: {
    description: `minWidth`,
    options: spaceOptions,
    control: 'select',
  },
  overflow: {
    description: `overflow`,
    options: ['auto', 'hidden', 'scroll', 'unset'],
    control: 'select',
  },
  paddingBottom: {
    description: `paddingBottom`,
    options: spaceOptions,
    control: 'select',
  },
  paddingLeft: {
    description: `paddingLeft`,
    options: spaceOptions,
    control: 'select',
  },
  paddingRight: {
    description: `paddingRight`,
    options: spaceOptions,
    control: 'select',
  },
  paddingTop: {
    description: `paddingTop`,
    options: spaceOptions,
    control: 'select',
  },
  position: {
    description: `position`,
    options: ['absolute', 'fixed', 'relative', 'sticky'],
    control: 'select',
  },
  right: {
    description: `right`,
    options: spaceOptions,
    control: 'select',
  },
  textAlign: {
    description: `textAlign`,
    options: ['center', 'left', 'right'],
    control: 'select',
  },
  top: {
    description: `top`,
    options: spaceOptions,
    control: 'select',
  },
  width: {
    description: `width`,
    options: spaceOptions,
    control: 'select',
  },
  borderLeftRadius: {
    description: `borderLeftRadius`,
    options: spaceOptions,
    control: 'select',
  },
  borderRightRadius: {
    description: `borderRightRadius`,
    options: spaceOptions,
    control: 'select',
  },
  borderTopRadius: {
    description: `borderTopRadius`,
    options: spaceOptions,
    control: 'select',
  },
  borderBottomRadius: {
    description: `borderBottomRadius`,
    options: spaceOptions,
    control: 'select',
  },
  margin: {
    description: `margin`,
    options: marginOptions,
    control: 'select',
  },
  marginX: {
    description: `marginX`,
    options: marginOptions,
    control: 'select',
  },
  marginY: {
    description: `marginY`,
    options: marginOptions,
    control: 'select',
  },
  padding: {
    description: `padding`,
    options: spaceOptions,
    control: 'select',
  },
  paddingX: {
    description: `paddingX`,
    options: spaceOptions,
    control: 'select',
  },
  paddingY: {
    description: `paddingY`,
    options: spaceOptions,
    control: 'select',
  },

  // unresponsive
  aspectRatio: {
    description: `aspectRatio`,
    options: ['auto', '1/1', '2/1', '4/1', '4/3', '16/9'],
    control: 'select',
  },
  cursor: {
    description: `cursor`,
    options: ['default', 'pointer', 'not-allowed'],
    control: 'select',
  },
  fontFamily: {
    description: `fontFamily`,
    options: Object.keys(tokens.fontFamilies),
    control: 'select',
  },
  isolation: {
    description: `isolation`,
    options: ['isolate'],
    control: 'select',
  },
  objectFit: {
    description: `objectFit`,
    options: ['contain', 'cover'],
    control: 'select',
  },
  pointerEvents: {
    description: `pointerEvents`,
    options: ['none'],
    control: 'select',
  },
  strokeWidth: {
    description: `strokeWidth`,
    options: spaceOptions,
    control: 'select',
  },
  textTransform: {
    description: `textTransform`,
    options: ['capitalize', 'lowercase', 'uppercase'],
    control: 'select',
  },
  transitionProperty: {
    description: `transitionProperty`,
    options: [
      'none',
      'all',
      'default',
      'colors',
      'opacity',
      'shadow',
      'transform',
    ],
    control: 'select',
  },
  transitionTimingFunction: {
    description: `transitionTimingFunction`,
    options: ['linear', 'in', 'out', 'inout'],
    control: 'select',
  },
  visibility: {
    description: `visibility`,
    options: ['hidden', 'visible'],
    control: 'select',
  },
  whiteSpace: {
    description: `whiteSpace`,
    options: [
      'normal',
      'nowrap',
      'pre',
      'pre-line',
      'pre-wrap',
      'initial',
      'inherit',
    ],
    control: 'select',
  },
  wordBreak: {
    description: `wordBreak`,
    options: ['break-word'],
    control: 'select',
  },
  wordWrap: {
    description: `wordWrap`,
    options: ['normal', 'break-word', 'initial', 'inherit'],
    control: 'select',
  },
  zIndex: {
    description: `zIndex`,
    options: ['0', '10', '20', '30', '40', '50', '75', '100', '999', 'auto'],
    control: 'select',
  },
  backgroundColor: {
    description: `backgroundColor`,
    options: paletteOptions,
    control: 'select',
  },
  borderColor: {
    description: `borderColor`,
    options: paletteOptions,
    control: 'select',
  },
  color: {
    description: `color`,
    options: paletteOptions,
    control: 'select',
  },
  outlineColor: {
    description: `outlineColor`,
    options: paletteOptions,
    control: 'select',
  },
  transitionDuration: {
    description: `transitionDuration`,
    options: ['75', '100', '150', '200', '300', '500', '700', '1000'],
    control: 'select',
  },
};
