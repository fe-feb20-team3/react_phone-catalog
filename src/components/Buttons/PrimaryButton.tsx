import React, { useContext } from 'react';
import './Buttons.scss';
import cn from 'classnames';
import { CartContext } from '../Cart';

interface Props {
  text: string;
  selected: boolean;
  id: string;
}

export const PrimaryButton: React.FC<Props> = ({ text, selected, id }) => {
  const { selectGood } = useContext(CartContext);

  return (
    <button
      type="button"
      className={cn({
        Button: true,
        Button__Primary: true,
        'Button__Primary--selected': selected,
      })}
      onClick={() => selectGood(id)}
    >
      {text}
    </button>
  );
};
