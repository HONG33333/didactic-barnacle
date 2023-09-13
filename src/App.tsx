import '@styles/global.css';
import { useRef } from 'react';
import { clsx } from 'clsx';

import { Box } from '@components/layout/Box';
import {
  otherStack,
  responsiveExample,
} from '@components/layout/Legacy/LegacyStack/otherStack.css';
import { Stack } from '@components/layout/Stack';
import TestButton from '@components/TestButton';
import { buttonWrapper } from '@components/testButtonStyle.css.ts';
import { atoms } from '@styles/atoms.ts';
import { Box as LegacyBox } from 'components/layout/Legacy/LegacyBox';
import { Stack as LegacyStack } from 'components/layout/Legacy/LegacyStack';

function App() {
  const pref = useRef<HTMLParagraphElement>(null);
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

      <Box borderWidth="1" padding="3" marginTop="3" borderColor="text.primary">
        Legacy
        <LegacyBox as="p" ref={pref}>
          P
        </LegacyBox>
        <LegacyBox>div</LegacyBox>
        <LegacyBox as="ul">ul</LegacyBox>
        <LegacyStack direction="row" spacing={10}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </LegacyStack>
        <LegacyStack direction="column" spacing={2} as="ul">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </LegacyStack>
        <LegacyStack
          direction="column"
          spacing={5}
          className={clsx(responsiveExample, otherStack)}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </LegacyStack>
      </Box>

      <TestButton cursor={'pointer'} />
    </>
  );
}

export default App;
