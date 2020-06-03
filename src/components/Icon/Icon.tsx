import React from 'react';
import cn from 'classnames';

import './Icon.scss';

interface Props {
  name: string;
  tag?: number;
  size?: IconSize;
  border: boolean;
  inActive: boolean;
}

export const Icon: React.FC<Props> = ({
  name,
  tag,
  size = 0,
  border,
  inActive,
}) => (
  <div
    className={cn(`Icon Icon--${size}`, {
      Icon__Border: border,
    })}
  >
    <div className={
      cn(
        'Icon__Image',
        `Icon__Image--${name}`,
        `Icon__Image--${size}`,
        {
          'Icon__Image--inactive': inActive,
        },
      )
    }
    />
    {Number(tag) > 0 && (
      <div className={`Icon__Tag Icon__Tag--${size}`}>
        {tag}
      </div>
    )}
  </div>
);
