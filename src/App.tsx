import '@styles/global.css';
import { useRef } from 'react';
import { clsx } from 'clsx';

import { Box } from '@components/layout/Box';
import { Stack } from '@components/layout/Stack';
import TestButton from '@components/TestButton';
import { buttonWrapper } from '@components/testButtonStyle.css.ts';
import { atoms } from '@styles/atoms.ts';

function App() {
  const aref = useRef<HTMLAnchorElement>(null);
  return (
    <>
      <Box
        ref={aref}
        as="a"
        borderWidth="px"
        borderColor="primary.main"
        height={'10'}
        className={clsx(
          buttonWrapper,
          atoms({
            cursor: 'not-allowed',
            borderRadius: '2',
            display: 'flex',
            transitionDuration: '200',
          }),
        )}
      >
        테스트
      </Box>
      <Box display={'inline-block'}></Box>
      <Box display="flex">zzzzzzzzzzzzzzzzzzz</Box>

      <Stack as="a" spacing="1">
        <p>1b</p>
        <p>2b</p>
        <p>3b</p>
      </Stack>

      <Stack spacing="1" as="p">
        <div>r1</div>
        <div>s2</div>
        <div>e3</div>
      </Stack>
      <Stack direction="column" spacing={'6'}>
        <div>1r1</div>
        <div>3s2</div>
        <div>4e3</div>
      </Stack>

      <TestButton cursor={'pointer'} />
    </>
  );
}

export default App;
