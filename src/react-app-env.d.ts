// / <reference types="react-scripts" />

interface Good {
  [key: string]: number | string;
  age: number;
  type: string;
  id: string;
  imageUrl: string;
  name: string;
  snippet: string;
  price: number;
  discount: number;
  screen: string;
  capacity: string;
  ram: string;
}

interface GoodDetail {
  id: string;
  name: string;
  images: Array<string>;
  description: string;
  [key?: string]: string | string[];
  [key?: string]: {
    [key: string]: string | string[] | boolean;
  };
  hardware: {
    cpu: string;
  };
  display: {
    screenResolution: string;
  };
  camera: {
    primary: string;
    zoom: string;
  };
  connectivity: {
    cell: string;
  };
}

interface Link {
  name: string;
  title?: string;
  url: string;
  type?: string;
  exact?: boolean;
  imgUrl?: string;
}

interface Banners {
  path: string;
  position?: number;
  alt?: string;
}

interface SortType {
  name: string;
  type: string;
  field: 'price' | 'name' | 'age';
  typeField: 'string' | 'number';
  isReverse: boolean;
  isDefault?: true;
}

interface PerPage {
  name: string;
}

interface Match {
  isExact: boolean;
  params: {
    good: string;
    section: string;
  };
  path: string;
  url: string;
}

interface Favorite {
  id: string;
}

interface FavoritesContextType {
  favorites: Array<string>;
  addFavorite: (product: Good) => void;
  removeFavorite: (product: Good) => void;
  isFavorite: (product: Good) => boolean;
}

interface CartGood {
  id: string;
  count: number;
}

interface CardContextType {
  cart: CartGood[];
  selectGood: (id: string) => void;
  changeGoodCount: (id: string, path: number) => void;
  clearCart: () => void;
}
