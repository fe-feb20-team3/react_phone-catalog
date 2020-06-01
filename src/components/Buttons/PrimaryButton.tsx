import React from 'react';
import './Buttons.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setCartGoods } from '../../store/cart';
import { getCartGoods } from '../../store';

interface Props {
  id: string;
}

export const PrimaryButton: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCartGoods);
  const status = cart.some(good => good.id === id);

  return (
    <button
      type="button"
      className={cn({
        Button: true,
        Button__Primary: true,
        'Button__Primary--selected': status,
      })}
      onClick={() => {
        dispatch(setCartGoods(id))
      }}
    >
      {status ? 'Remove from cart' : 'Add to cart'}
    </button>
  );
};
