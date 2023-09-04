import { clsx } from 'clsx';

import {
  buttonWrapper,
  motionSafeExample,
} from '@components/testButtonStyle.css';

export default function TestButton() {
  return (
    <button className={clsx(buttonWrapper, motionSafeExample)}>
      TEST BUTTON
    </button>
  );
}
