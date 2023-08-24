import {
  stack,
  stackSpacing,
  StackVariants,
} from '@components/layout/Stack/stack.css.ts';
import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@components/types/polymorphic.ts';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';
import { ElementType, forwardRef, ReactNode } from 'react';

const DEFAULT_TAG = 'div' as const;

type _StackProps = StackVariants & {
  spacing: number;
};
export type StackProps<T extends ElementType> = PolymorphicComponentProps<
  T,
  _StackProps
>;

type StackComponent = <T extends ElementType = typeof DEFAULT_TAG>(
  props: StackProps<T>,
) => ReactNode | null;

export const Stack: StackComponent = forwardRef(
  <T extends ElementType = typeof DEFAULT_TAG>(
    { as, className, spacing, direction, children, ...props }: StackProps<T>,
    ref: PolymorphicRef<T>['ref'],
  ) => {
    const Element = as || DEFAULT_TAG;

    return (
      <Element
        ref={ref}
        className={clsx(stack({ direction }), className)}
        style={assignInlineVars({ [stackSpacing]: `${spacing}px` })}
        {...props}
      >
        {children}
      </Element>
    );
  },
);

export default Stack;
