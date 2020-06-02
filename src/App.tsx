import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loadGoods, getCartGoods, getFavorites } from './store';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GoodsSection } from './components/GoodsSection';
import { GoodPage } from './components/GoodPage';
import { HomePage } from './components/HomePage';
import { Favorites } from './components/Favorites';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Breadcrumbs } from './components/Breadcrumbs';
import { BackToTop } from './components/BackToTop';

export const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cart = useSelector(getCartGoods);
  const favorites = useSelector(getFavorites);

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify([...cart]));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favoriteProducts', JSON.stringify([...favorites]));
  }, [favorites]);

  useEffect(() => {
    dispatch(loadGoods());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <div className="container content-wrapper">
        <Switch>
          <Route path="/" exact />
          <Route path="/:levelOne?/:levelTwo?">
            <Breadcrumbs />
          </Route>
        </Switch>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/:section" exact component={GoodsSection} />
          <Route path="/:section/:good" exact component={GoodPage} />
        </Switch>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};
