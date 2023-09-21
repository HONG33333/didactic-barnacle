import '@styles/global.css';
import { useRef } from 'react';
import { clsx } from 'clsx';

import { Button } from '@components/input/Button';
import { Box } from '@components/layout/Box';
import { Stack } from '@components/layout/Stack';
import { atoms } from '@styles/index';

function App() {
  const aref = useRef<HTMLAnchorElement>(null);
  return (
    <>
      <Button>primary contained</Button>
      <Button color="secondary" size="s">
        secondary contained
      </Button>
      <Button color="secondary">secondary contained</Button>
      <Button color="secondary" size="l">
        secondary contained
      </Button>

      <Button variant="outlined">outlined contained</Button>
      <Button variant="outlined" color="secondary">
        outlined secondary
      </Button>
      <Button
        variant="text"
        onClick={() => {
          alert('ㅋㅋ');
        }}
      >
        text primary
      </Button>
      <Button variant="text" color="secondary">
        outlined secondary
      </Button>
      <Button variant="outlined" color="secondary" fullWidth>
        fullWidth outlined secondary
      </Button>
      <Button disabled>contained disabled</Button>
      <Button variant="outlined" disabled>
        outlined disabled
      </Button>
      <Button variant="outlined" color="secondary" disabled>
        outlined secondary disabled
      </Button>
      <Button variant="text" disabled>
        text disabled
      </Button>
      <Button variant="text" color="secondary" disabled>
        text secondary disabled
      </Button>

      <Box
        ref={aref}
        as="a"
        borderWidth="px"
        borderColor="primary.main"
        height={'10'}
        className={clsx(
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
    </>
  );
}

export default App;
