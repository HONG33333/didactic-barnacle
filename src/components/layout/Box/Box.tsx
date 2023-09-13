import { createElement, ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@components/types/polymorphic';
import { atoms, Atoms } from '@styles/atoms.ts';
import { sprinkles } from '@styles/sprinkles.css.ts';

const DEFAULT_BOX_TAG = 'div' as const;

export type Props<T extends ElementType> = PolymorphicComponentProps<T, Atoms>;

type BoxComponent = <T extends ElementType>(props: Props<T>) => ReactNode;

export const Box: BoxComponent = forwardRef(
  <T extends ElementType>(
    { as, className, ...props }: Props<T>,
    ref: PolymorphicRef<T>['ref'],
  ) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = atoms({
      reset: typeof as === 'string' ? (as as Atoms['reset']) : 'div',
      ...atomProps,
    });

    return createElement(as || DEFAULT_BOX_TAG, {
      className: clsx(atomicClasses, className),
      ...nativeProps,
      ref,
    });
  },
);

export type BoxProps = Parameters<typeof Box>[0];

export default Box;
