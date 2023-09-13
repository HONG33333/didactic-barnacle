import { ElementType, forwardRef, ReactNode } from 'react';

import Box from '@components/layout/Box/Box';
import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@components/types/polymorphic';
import { Atoms, ThemeTokens } from '@styles/index';

// const validStackComponents = [
//   'a',
//   'div',
//   'button',
//   //...
// ] as const;

export type StackAtoms = Omit<Atoms, 'flexDirection' | 'gap' | 'display'> & {
  // as?: (typeof validStackComponents)[number]; // as tag 제한가능
  direction?: 'column' | 'row';
  spacing?: keyof ThemeTokens['space'];
};

export type Props<T extends ElementType> = PolymorphicComponentProps<
  T,
  StackAtoms
>;

type StackComponent = <T extends ElementType>(props: Props<T>) => ReactNode;

export const Stack: StackComponent = forwardRef(
  <T extends ElementType>(
    {
      direction = 'column',
      spacing = 'none',
      children,
      as,
      ...atomProps
    }: Props<T>,
    ref: PolymorphicRef<T>['ref'],
  ) => {
    return (
      <Box
        as={as || 'div'}
        ref={ref}
        display="flex"
        flexDirection={direction}
        gap={spacing}
        {...atomProps}
      >
        {children}
      </Box>
    );
  },
);

export type StackProps = Parameters<typeof Stack>[0];

export default Stack;
