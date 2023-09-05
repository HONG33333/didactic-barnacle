import { clsx } from 'clsx';

import {
  buttonWrapper,
  motionSafeExample,
  sprinklesExample,
} from '@components/testButtonStyle.css';
import { sprinkles } from '@styles/sprinkles.css.ts';

export default function TestButton({
  cursor,
}: {
  cursor?: 'default' | 'pointer' | 'not-allowed';
}) {
  return (
    <>
      <button
        className={clsx(
          buttonWrapper,
          motionSafeExample,
          sprinkles({ cursor: cursor }),
        )}
      >
        TEST BUTTON
      </button>
      <button
        className={clsx(
          buttonWrapper,
          sprinklesExample,
          sprinkles({ cursor: cursor }),
        )}
      >
        TEST BUTTON
      </button>
    </>
  );
}
