import { createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const stackSpacing = createVar();

// TODO: Spacing gap 말고 margin 으로 수정
export const stack = recipe({
  base: {
    display: 'flex',
    gap: stackSpacing,
  },

  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },
  },

  defaultVariants: {
    direction: 'column',
  },
});

export type StackVariants = RecipeVariants<typeof stack>;
