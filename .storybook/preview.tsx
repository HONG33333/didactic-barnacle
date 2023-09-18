import '../src/styles/global.css';
import '../src/styles/theme.css';

import type { Preview } from '@storybook/react';
import { Box } from '../src/components/layout/Box';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // Box를 Preview에 미리 선언함으로 reset.css.ts를 미리 적용할 수 있다..
  // 이렇게 미리 선언해두지 않으면 reset.css.ts가 제일 마지막에 선언되어서 커스텀 스타일링의 우선순위가 낮아져서 예상치 못한 결과가 나온다...
  decorators: [
    (Story) => (
      <Box><Story /></Box>
    )
  ],
};

export default preview;
