import * as React from 'react';
import * as Tooltip from '@implydata/radix-react-tooltip';

export default function TooltipPage() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>Hover or Focus me</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content sideOffset={5}>
            Nicely done!
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
