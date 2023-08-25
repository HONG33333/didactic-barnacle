import '@styles/global.css';
import '@styles/theme.css';

import { Box } from '@components/layout/Box';
import { Stack } from '@components/layout/Stack';
import { otherStack } from '@components/layout/Stack/otherStack.css';
import TestButton from '@components/TestButton';

function App() {
  return (
    <>
      <Box as="p">P</Box>
      <Box>div</Box>
      <Box as="ul">ul</Box>

      <Stack direction="row" spacing={10} className={'hahaha'}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stack>

      <Stack direction="column" spacing={2} as="ul">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </Stack>

      <Stack direction="column" spacing={5} className={otherStack}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stack>

      <TestButton />
    </>
  );
}

export default App;
