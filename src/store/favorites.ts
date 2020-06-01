import { Action } from 'redux';

const SET_FAVORITE = 'SET_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

type SetFavorite = Action<typeof SET_FAVORITE> & { favorite: string };
type RemoveFavorite = Action<typeof REMOVE_FAVORITE> & { id: string };
type PossibleAction = SetFavorite | RemoveFavorite;

export const addFavorite = (favorite: string): SetFavorite => ({
  type: SET_FAVORITE,
  favorite,
});

export const removeFavorite = (id: string): RemoveFavorite => ({
  type: REMOVE_FAVORITE,
  id,
});

const reducer = (favorites = [], action: PossibleAction) => {
  switch (action.type) {
    case SET_FAVORITE:
      return [...favorites, action.favorite];

    case REMOVE_FAVORITE:
      return [...favorites].filter(id => id !== action.id);

    default:
      return favorites;
  }
};

export default reducer;
