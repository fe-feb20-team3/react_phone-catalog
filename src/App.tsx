import React, { useEffect, useState, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGoods } from './helpers';
import { loadGoods, getCartGoods } from './store';

import { FavoritesContextWrapper } from './components/Favorites';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GoodsSection } from './components/GoodsSection';
import { GoodPage } from './components/GoodPage';
import { HomePage } from './components/HomePage';
import { Favorites } from './components/Favorites/Favorites';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Breadcrumbs } from './components/Breadcrumbs';
import { GoodsContext } from './components/Goods';

export const App = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { setSitemap } = useContext(GoodsContext);
  const cart = useSelector(getCartGoods);

  useEffect(() => {
      localStorage.setItem('cartItem', JSON.stringify([...cart]))
  }, [cart])

  const loadGoodsInState = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const data = await fetchGoods();
      const preparedData = data.filter(product => product.type);

      setSitemap(preparedData);
      setIsLoaded(true);
    } catch (error) {
      setErrorMessage(String(error));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadGoodsInState();
  }, []);

  useEffect(() => {
    dispatch(loadGoods());
  }, []);

  return (
    <>
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
              <Route path="/" exact render={() => <HomePage />} />
              <Route path="/favorites" render={() => <Favorites />} />
              <Route path="/cart" exact render={() => <Cart />} />
              <Route path="/checkout" exact render={() => <Checkout />} />
              <Route path="/:section" exact render={() => <GoodsSection />} />
              <Route path="/:section/:good" exact render={() => <GoodPage />} />
            </Switch>
          </div>
        </FavoritesContextWrapper>
      <Footer />
    </>
  );
};
