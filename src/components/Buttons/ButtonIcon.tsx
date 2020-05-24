import React from 'react';
import './Buttons.scss';
import { Icon } from '../Icon';

type Props = {
  name: string;
  border: boolean;
  inActive: boolean;
};

export const ButtonIcon: React.FC<Props> = ({ name, border, inActive }) => (
  <button type="button" className="Button Button__Icon">
    <Icon
      name={name}
      size={2}
      border={border}
      inActive={inActive}
    />
  </button>
);
