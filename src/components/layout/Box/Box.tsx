import { ElementType, forwardRef, ReactNode } from 'react';

import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@components/types/polymorphic';

const DEFAULT_TAG = 'div' as const;

export type BoxProps<T extends ElementType> = PolymorphicComponentProps<T>;

type BoxComponent = <T extends ElementType = typeof DEFAULT_TAG>(
  props: BoxProps<T>,
) => ReactNode | null;

export const Box: BoxComponent = forwardRef(
  <T extends ElementType = typeof DEFAULT_TAG>(
    { as, children, ...props }: BoxProps<T>,
    ref: PolymorphicRef<T>['ref'],
  ) => {
    const Element = as || DEFAULT_TAG;

    return (
      <Element ref={ref} {...props}>
        {children}
      </Element>
    );
  },
);

export default Box;
