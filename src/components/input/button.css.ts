import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { atoms } from '@styles/atoms.ts';

export const button = recipe({
  base: [
    atoms({
      reset: 'button',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '1',
      backgroundColor: 'common.white',
      cursor: { base: 'pointer', disabled: 'default' },
      pointerEvents: { disabled: 'none' },
      transitionDuration: '200',
      // borderWidth: 'px',
      // borderColor: 'common.transparent',
    }),
  ],

  variants: {
    size: {
      s: atoms({
        height: '7', // 28px
        paddingX: '2',
        fontSize: 'caption1',
      }),
      m: atoms({
        height: '11', // 44px
        paddingX: '3',
        fontSize: 'body1',
      }),
      l: atoms({
        height: '13', // 52px
        paddingX: '3',
        fontSize: 'subtitle2',
      }),
    },
    variant: {
      contained: atoms({ color: 'common.white' }),
      outlined: [atoms({ borderWidth: 'px', borderColor: 'secondary.light3' })],
      text: {},
    },
    color: {
      primary: {},
      secondary: {},
    },
    disabled: {
      true: {},
    },
    fullWidth: {
      true: style({
        width: '100%',
      }),
    },
  },

  compoundVariants: [
    {
      variants: { variant: 'contained', color: 'primary' },
      style: atoms({
        backgroundColor: {
          base: 'primary.main',
          hover: 'primary.dark',
          focus: 'primary.dark',
          active: 'primary.dark',
        },
      }),
    },
    {
      variants: { variant: 'contained', color: 'secondary' },
      style: atoms({
        backgroundColor: {
          base: 'secondary.main',
          hover: 'secondary.dark',
          focus: 'secondary.dark',
          active: 'secondary.dark',
        },
      }),
    },
    {
      variants: { variant: 'contained', disabled: true },
      style: atoms({
        backgroundColor: 'secondary.light5',
        color: 'secondary.light2',
      }),
    },
    {
      variants: { variant: 'outlined', color: 'primary' },
      style: atoms({
        color: 'primary.main',
        backgroundColor: {
          hover: 'primary.light3',
          focus: 'primary.light3',
          active: 'primary.light3',
        },
      }),
    },
    {
      variants: { variant: 'outlined', color: 'secondary' },
      style: atoms({
        color: 'secondary.main',
        backgroundColor: {
          hover: 'secondary.light5',
          focus: 'secondary.light5',
          active: 'secondary.light5',
        },
      }),
    },
    {
      variants: { variant: 'text', color: 'primary' },
      style: atoms({
        color: 'primary.main',
        backgroundColor: {
          hover: 'primary.light3',
          focus: 'primary.light3',
          active: 'primary.light3',
        },
      }),
    },
    {
      variants: { variant: 'text', color: 'secondary' },
      style: atoms({
        color: 'secondary.main',
        backgroundColor: {
          hover: 'secondary.light5',
          focus: 'secondary.light5',
          active: 'secondary.light5',
        },
      }),
    },
    // outlined, text && disabled 공통 속성
    {
      variants: { color: 'primary', disabled: true },
      style: atoms({
        color: 'primary.light2',
      }),
    },
    {
      variants: { color: 'secondary', disabled: true },
      style: atoms({
        color: 'secondary.light2',
      }),
    },
  ],

  // defaultVariants 셋팅을 해주면 ButtonVariants 속성들이 optional 이라도 컴포넌트에서 기본값 셋팅을 안해줘도 됨
  // 반대로 컴포넌트에서 프롭스에 defaultValue 설정을 하면 여기서 defaultVariants 안해도 됨
  defaultVariants: {
    size: 'm',
    variant: 'contained',
    color: 'primary',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
