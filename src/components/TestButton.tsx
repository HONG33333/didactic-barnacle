import { clsx } from 'clsx';

import {
  buttonWrapper,
  motionSafeExample,
  sprinklesExample,
} from '@components/testButtonStyle.css';
import { atoms } from '@styles/atoms.ts';
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
          // sprinkles({ cursor: cursor }),
          atoms({
            cursor,
            borderRadius: '2',
          }),
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
