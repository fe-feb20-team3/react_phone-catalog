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

const saveIntoLocaleStorage = (favorites: Array<string>) => {
  localStorage.setItem('favoriteProducts', JSON.stringify([...favorites]));
};

const reducer = (favorites = [], action: PossibleAction) => {
  switch (action.type) {
    case SET_FAVORITE: {
      const updatedFavorites = [...favorites, action.favorite];

      saveIntoLocaleStorage(updatedFavorites);

      return updatedFavorites;
    }

    case REMOVE_FAVORITE: {
      const updatedFavorites = favorites.filter(id => id !== action.id);

      saveIntoLocaleStorage(updatedFavorites);

      return updatedFavorites;
    }

    default:
      return favorites;
  }
};

export default reducer;
