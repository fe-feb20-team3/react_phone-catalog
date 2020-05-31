import React, { useEffect, useState, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { getGoods } from './helpers';
import { FavoritesContextWrapper } from './components/Favorites';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GoodsSection } from './components/GoodsSection';
import { GoodPage } from './components/GoodPage';
import { HomePage } from './components/HomePage';
import { Favorites } from './components/Favorites/Favorites';
import { Cart, CartContextWrapper } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Breadcrumbs } from './components/Breadcrumbs';
import { GoodsContext } from './components/Goods';

export const App = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { setSitemap } = useContext(GoodsContext);

  const loadGoods = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const data = await getGoods();
      const preparedData = data.filter(product => product.type);

      setGoods(preparedData);
      setSitemap(preparedData);
      setIsLoaded(true);
    } catch (error) {
      setErrorMessage(String(error));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadGoods();
  }, []);

  return (
    <>
      <CartContextWrapper>
        <FavoritesContextWrapper>
          <Header />
          <div className="container">
            {errorMessage && <div>{errorMessage}</div>}
            {isLoading && isLoaded && ''}
            <Switch>
              <Route path="/" exact />
              <Route path="/:levelOne?/:levelTwo?">
                <Breadcrumbs />
              </Route>
            </Switch>
            <Switch>
              <Route path="/" exact render={() => <HomePage goods={goods} />} />
              <Route path="/favorites" render={() => <Favorites goods={goods} />} />
              <Route path="/cart" exact render={() => <Cart goods={goods} />} />
              <Route path="/checkout" exact render={() => <Checkout />} />
              <Route path="/:section" exact render={() => <GoodsSection goods={goods} />} />
              <Route path="/:section/:good" exact render={() => <GoodPage goods={goods} />} />
            </Switch>
          </div>
        </FavoritesContextWrapper>
      </CartContextWrapper>
      <Footer />
    </>
  );
};
