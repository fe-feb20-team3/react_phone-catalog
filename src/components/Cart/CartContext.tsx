import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext<CardContextType>({
  cart: [],
  selectGood: () => {},
  changeGoodCount: () => {},
  clearCart: () => {},
});


export const CartContextWrapper: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartGood[]>([]);

  useEffect(
    () => {
      if (localStorage.getItem('cartItem')) {
        setCart([...JSON.parse(localStorage.getItem('cartItem') || '')]);
      }
    },
    [],
  );

  useEffect(
    () => localStorage.setItem('cartItem', JSON.stringify([...cart])),
    [cart],
  );

  const selectGood = (id: string): void => {
    if (cart.some(good => good.id === id)) {
      setCart(cart.filter(good => good.id !== id));
    } else {
      const newItem = {
        id,
        count: 1,
      };

      setCart([...cart, newItem]);
    }
  };

  const changeGoodCount = (id: string, path: number) => {
    setCart(cart.map(good => ({
      ...good,
      count: id === good.id
        ? good.count + path
        : good.count,
    })));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      selectGood,
      changeGoodCount,
      clearCart,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};
