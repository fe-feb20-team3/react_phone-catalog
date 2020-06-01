import { Action } from 'redux';

const SET_CART_GOODS = 'SET_CART_GOODS';
const CHANGE_COUNT = 'CHANGE_COUNT';
const CLEAR_CART = 'CLEAR_CART';
const SET_FROM_LOCALSTORAGE = 'SET_FROM_LOCALSTORAGE';

type setCartGoods = Action<typeof SET_CART_GOODS> & { id: string };
type changeCount = Action<typeof CHANGE_COUNT> & {
  id: string,
  path: number,
};
type clearCart = Action<typeof CLEAR_CART>;
type setFromLocalStorage = Action<typeof SET_FROM_LOCALSTORAGE> & {
  info: CartGood[],
};

export const setCartGoods = (id: string): setCartGoods => ({
  type: SET_CART_GOODS,
  id,
});

export const changeCount = (id: string, path: number): changeCount => ({
  type: CHANGE_COUNT,
  id,
  path,
});

export const setFromLS = (info: CartGood[]) => ({
  type: SET_FROM_LOCALSTORAGE,
  info,
})

export const clearCart = (): clearCart => ({ type: CLEAR_CART });

type GeneralType = setCartGoods | changeCount | clearCart | setFromLocalStorage;

let initCart: CartGood[] = [];

if (localStorage.getItem('cartItem')) {
  initCart = [...JSON.parse(localStorage.getItem('cartItem') || '')];
}

const reducer = (cart = initCart, action: GeneralType) => {
  switch (action.type) {
    case SET_CART_GOODS:
      if (cart.some(good => good.id === action.id)) {
        return cart.filter(good => good.id !== action.id);
      } else {
        const newItem = {
          id: action.id,
          count: 1,
        }

        return [...cart, newItem];
      }

    case CHANGE_COUNT:
      return cart.map(good => ({
        ...good,
        count: action.id === good.id
          ? good.count + action.path
          : good.count,
      }));

    case CLEAR_CART:
      return [];

    case SET_FROM_LOCALSTORAGE:
      return action.info;

    default:
      return cart;
  }
};

export default reducer;
