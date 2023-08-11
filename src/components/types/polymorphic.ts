import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from 'react';

/**
 * @description https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 * @description https://stackoverflow.com/questions/57103834/typescript-omit-a-property-from-all-interfaces-in-a-union-but-keep-the-union-s
 * @description https://kciter.so/posts/polymorphic-react-component
 */

// 기존 type 과 내가 선언한 type 이름 겹치는것 없애기
type DistributiveOmit<T, K extends keyof T> = T extends object
  ? Omit<T, K>
  : never;

type AsProp<T extends ElementType = ElementType> = {
  as?: T;
};
export type PolymorphicRef<T extends ElementType> =
  ComponentPropsWithRef<T>['ref'];

// asProp 사용할 곳에서 사용할 Type
export type PolymorphicComponentProps<
  Element extends ElementType,
  Props = object,
> = AsProp<Element> &
  Props &
  DistributiveOmit<ComponentPropsWithoutRef<Element>, keyof Props | 'as'>;
