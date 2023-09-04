import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

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
export const sprinkles = createSprinkles(motionSafeProperties);
