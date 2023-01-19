import * as React from 'react';
import { VisuallyHidden } from '@implydata/radix-react-visually-hidden';

export default { title: 'Components/VisuallyHidden' };

export const Basic = () => (
  <button>
    <VisuallyHidden>Save the file</VisuallyHidden>
    <span aria-hidden>💾</span>
  </button>
);
