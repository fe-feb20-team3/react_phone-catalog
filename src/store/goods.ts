import { Action } from 'redux';

const SET_GOODS = 'SET_GOODS';

type SetPost = Action<typeof SET_GOODS> & { goods: Good[] };

export const setGoods = (goods: Good[]): SetPost => ({
  type: SET_GOODS,
  goods,
});

const reducer = (goods = [], action: SetPost) => {
  switch (action.type) {
    case SET_GOODS:
      return action.goods;

    default:
      return goods;
  }
};

export default reducer;
