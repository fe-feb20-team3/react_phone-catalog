import { Action } from 'redux';

const LOADED = 'LOADED';

type Loaded = Action<typeof LOADED>;

export const setLoaded = () => ({ type: LOADED });

const reducer = (loaded = false, action: Loaded) => {
  switch (action.type) {
    case LOADED:
      return true;

    default:
      return loaded;
  }
};

export default reducer;
