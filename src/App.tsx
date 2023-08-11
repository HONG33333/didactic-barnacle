import '@styles/global.css';
import '@styles/theme.css';

import { Box } from '@components/layout/Box';
import TestButton from '@components/TestButton';

function App() {
  return (
    <>
      <Box as="p">P</Box>
      <Box>div</Box>
      <Box as="ul">ul</Box>

      <TestButton />
    </>
  );
}

export default App;
