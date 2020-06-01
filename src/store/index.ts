import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Dispatch } from 'react';

import loadingReducer, { finishLoading, startLoading } from './loading';
import loadedReducer, { setLoaded } from './loaded';
import errordReducer, { setErrorMessage } from './error';
import goodsReducer, { setGoods } from './goods';
import favoritesReducer, { addFavorite, removeFavorite } from './favorites';
import { fetchGoods } from '../helpers/api';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  loading: loadingReducer,
  loaded: loadedReducer,
  errorMessage: errordReducer,
  goods: goodsReducer,
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const isLoading = (state: RootState) => state.loading;
export const isLoaded = (state: RootState) => state.loaded;
export const getError = (state: RootState) => state.errorMessage;
export const getGoods = (state: RootState) => state.goods;
export const getFavorites = (state: RootState) => state.favorites;
export { addFavorite, removeFavorite };

export const loadGoods = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(startLoading());

    try {
      const data = await fetchGoods();
      const preparedData = data.filter(product => product.type);

      dispatch(setGoods(preparedData));
      dispatch(setLoaded());
    } catch (error) {
      dispatch(setErrorMessage(`Error occurred when loading data: ${error}`));
    }

    dispatch(finishLoading());
  };
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
